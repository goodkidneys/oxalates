#!/usr/bin/env node
/* Validates the data files. Run: node tools/validate.js
 * Exits non-zero on any error. Warnings do not fail the run. */
const fs = require('fs');
const path = require('path');
const vm = require('vm');

const root = path.join(__dirname, '..');
const ctx = {};
vm.createContext(ctx);
for (const f of ['foods', 'harvard', 'recipes', 'changelog']) {
  const src = fs.readFileSync(path.join(root, 'data', f + '.js'), 'utf8');
  // `const` declarations are lexical and do not land on the context object; rewrite them to `var`.
  try { vm.runInContext(src.replace(/^const /gm, 'var '), ctx, { filename: f + '.js' }); }
  catch (e) { console.error(`ERROR data/${f}.js does not parse: ${e.message}`); process.exit(1); }
}
const { FOODS_DB, FOODS_META, HARVARD_DB, HARVARD_META, RECIPES_DB, RECIPES_META, CHANGELOG } = ctx;
const errors = [], warnings = [];
const err = (m) => errors.push(m), warn = (m) => warnings.push(m);

// Canonical-format check: the in-app publisher and tools parse these files as JSON.
for (const [name, consts] of [['recipes', ['RECIPES_META', 'RECIPES_DB']], ['foods', ['FOODS_META', 'FOODS_DB']]]) {
  const src = fs.readFileSync(path.join(root, 'data', name + '.js'), 'utf8');
  const m = src.match(new RegExp(`^const ${consts[0]} = ([\\s\\S]*?);\\s*\\n^const ${consts[1]} = ([\\s\\S]*?);\\s*$`, 'm'));
  if (!m) err(`data/${name}.js is not in canonical format (const ${consts[0]} = {...};\\n\\nconst ${consts[1]} = [...];)`);
  else { try { JSON.parse(m[1]); JSON.parse(m[2]); } catch (e) { err(`data/${name}.js constants are not pure JSON: ${e.message}`); } }
}

// Foods
const RISKS = new Set(['LOW', 'MODERATE', 'HIGH', 'VERY HIGH', 'LOW–MOD']);
const ids = new Set();
for (const f of FOODS_DB) {
  const tag = `food "${f.id}"`;
  if (!f.id || !/^[a-z0-9-]+$/.test(f.id)) err(`${tag}: bad id`);
  if (ids.has(f.id)) err(`${tag}: duplicate id`); ids.add(f.id);
  if (!f.name) err(`${tag}: missing name`);
  if (!FOODS_META.categories.includes(f.category)) err(`${tag}: unknown category "${f.category}"`);
  if (!f.serving) err(`${tag}: missing serving`);
  if (typeof f.oxalateMg !== 'string') err(`${tag}: oxalateMg must be a string`);
  if (typeof f.oxalateNum !== 'number' || isNaN(f.oxalateNum)) err(`${tag}: oxalateNum must be a number`);
  if (!RISKS.has(f.riskLevel)) err(`${tag}: bad riskLevel "${f.riskLevel}"`);
  if (!f.source) warn(`${tag}: missing source`);
  if (f.servingGrams != null && (typeof f.servingGrams !== 'number' || f.servingGrams <= 0)) err(`${tag}: bad servingGrams`);
  if (f.nutrition) for (const k of ['kcal', 'protein', 'fat', 'carbs', 'fiber', 'calcium']) if (typeof f.nutrition[k] !== 'number') err(`${tag}: nutrition.${k} missing`);
  if (f.nutrition && f.servingGrams == null) warn(`${tag}: has nutrition but no servingGrams (builder cannot scale it)`);
  for (const k of ['aliases', 'swapTo', 'replaces']) if (!Array.isArray(f[k])) err(`${tag}: ${k} must be an array`);
  const n = f.oxalateNum, r = f.riskLevel;
  const expected = n <= 10 ? 'LOW' : n <= 25 ? 'MODERATE' : n < 100 ? 'HIGH' : 'VERY HIGH';
  const nearBoundary = [10, 25, 100].some((b) => Math.abs(n - b) <= 5);
  if (r !== expected && !(r === 'LOW–MOD' && n <= 25) && !f.disputed && !nearBoundary) warn(`${tag}: riskLevel ${r} but ${n} mg suggests ${expected}`);
}
if (FOODS_META.count !== FOODS_DB.length) warn(`FOODS_META.count (${FOODS_META.count}) != ${FOODS_DB.length}`);

// Harvard
const hids = new Set();
for (const h of HARVARD_DB) {
  if (hids.has(h.id)) err(`harvard "${h.id}": duplicate id`); hids.add(h.id);
  if (!h.item || !h.group) err(`harvard "${h.id}": missing item/group`);
  if (typeof h.mg !== 'number') err(`harvard "${h.id}" (${h.item}): mg must be a number`);
}
if (HARVARD_META.rows !== HARVARD_DB.length) warn(`HARVARD_META.rows != ${HARVARD_DB.length}`);

// Recipes
const rids = new Set();
for (const r of RECIPES_DB) {
  const tag = `recipe "${r.id}"`;
  if (!r.id || !/^[a-z0-9-]+$/.test(r.id)) err(`${tag}: bad id`);
  if (rids.has(r.id)) err(`${tag}: duplicate id`); rids.add(r.id);
  if (!r.name) err(`${tag}: missing name`);
  if (!(r.servings > 0)) err(`${tag}: servings must be > 0`);
  if (!Array.isArray(r.ingredients) || !r.ingredients.length) err(`${tag}: no ingredients`);
  if (!Array.isArray(r.instructions) || !r.instructions.length) warn(`${tag}: no instructions`);
  let total = 0;
  for (const ing of r.ingredients || []) {
    if (!ing.name) err(`${tag}: ingredient without name`);
    if (ing.foodId && !ids.has(ing.foodId)) err(`${tag}: ingredient "${ing.name}" references unknown foodId "${ing.foodId}"`);
    if (ing.harvardId && !hids.has(ing.harvardId)) err(`${tag}: ingredient "${ing.name}" references unknown harvardId "${ing.harvardId}"`);
    total += Number(ing.oxalateMg) || 0;
  }
  const per = total / r.servings;
  if (typeof r.totalOxalateMg === 'number' && Math.abs(r.totalOxalateMg - total) > 0.6) warn(`${tag}: totalOxalateMg ${r.totalOxalateMg} != sum of ingredients ${total.toFixed(1)}`);
  if (typeof r.oxalatePerServing === 'number' && Math.abs(r.oxalatePerServing - per) > 0.6) warn(`${tag}: oxalatePerServing ${r.oxalatePerServing} != ${per.toFixed(1)}`);
  const expected = per <= 10 ? 'LOW' : per <= 25 ? 'MODERATE' : per <= 50 ? 'HIGH' : 'VERY HIGH';
  if (r.riskLevel && r.riskLevel !== expected) warn(`${tag}: riskLevel ${r.riskLevel} but ${per.toFixed(1)} mg/serving suggests ${expected}`);
  if (r.nutrition) for (const k of ['calories', 'protein', 'fat', 'carbs', 'fiber', 'calcium']) if (typeof r.nutrition[k] !== 'number') warn(`${tag}: nutrition.${k} missing`);
}
if (RECIPES_META.count !== RECIPES_DB.length) warn(`RECIPES_META.count (${RECIPES_META.count}) != ${RECIPES_DB.length}`);

// Changelog
if (!CHANGELOG || !Array.isArray(CHANGELOG.releases)) err('CHANGELOG.releases missing');

for (const w of warnings) console.log('warn  ' + w);
for (const e of errors) console.log('ERROR ' + e);
console.log(`\nfoods ${FOODS_DB.length} | harvard ${HARVARD_DB.length} | recipes ${RECIPES_DB.length} | ${warnings.length} warnings | ${errors.length} errors`);
process.exit(errors.length ? 1 : 0);
