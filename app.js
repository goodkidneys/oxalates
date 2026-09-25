/* Oxalate Guide — application code. No build step, no dependencies.
 * Data comes from data/foods.js, data/harvard.js, data/recipes.js, data/changelog.js (loaded before this file). */
(function () {
  'use strict';

  // ------------------------------------------------------------------ utilities
  const $ = (s, r) => (r || document).querySelector(s);
  const $$ = (s, r) => Array.from((r || document).querySelectorAll(s));
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const fmt = (n, d) => { if (n == null || isNaN(n)) return '–'; const p = Math.pow(10, d == null ? 1 : d); return String(Math.round(n * p) / p); };
  const fmtQty = (n) => { if (n == null || isNaN(n)) return ''; const r = Math.round(n * 100) / 100; return String(r); };
  const slug = (s) => String(s).toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
  const today = () => new Date().toISOString().slice(0, 10);
  const uniq = (arr) => Array.from(new Set(arr));
  const SMALL = new Set(['and', 'or', 'of', 'with', 'in', 'from', 'no', 'the', 'a', 'an', 'to', 'per']);
  const hname = (h) => String(h.item || '').toLowerCase().replace(/\s*,\s*/g, ', ').replace(/\s*&\s*/g, ' & ').split(' ').map((w, i) => (i > 0 && SMALL.has(w) ? w : w.replace(/^([a-z0-9])/, (c) => c.toUpperCase()).replace(/\b(\d+%|[a-z])/g, (c) => c))).join(' ').replace(/\b(Bbq|Usda|Ww|Ii|Iii)\b/g, (w) => w.toUpperCase());
  let toastTimer = null;
  function toast(msg) { const t = $('#toast'); t.textContent = msg; t.classList.add('show'); clearTimeout(toastTimer); toastTimer = setTimeout(() => t.classList.remove('show'), 2400); }
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text).then(() => toast('Copied to clipboard'));
    const ta = document.createElement('textarea'); ta.value = text; ta.style.position = 'fixed'; ta.style.opacity = '0'; document.body.appendChild(ta); ta.select();
    try { document.execCommand('copy'); toast('Copied to clipboard'); } catch (e) { toast('Copy failed; select the text manually'); }
    document.body.removeChild(ta); return Promise.resolve();
  }
  function lsGet(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } }
  function lsSet(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch (e) { /* ignore */ } }

  // ------------------------------------------------------------------ data
  // Data files declare top-level `const`s, which are global bindings but not window properties.
  const g = (name, fallback) => { try { return eval(name); } catch (e) { return fallback; } }; // eslint-disable-line no-eval
  const FOODS = g('FOODS_DB', []);
  const HARV = g('HARVARD_DB', []);
  const RECIPES = g('RECIPES_DB', []);
  const FMETA = g('FOODS_META', {});
  const HMETA = g('HARVARD_META', {});
  const RMETA = g('RECIPES_META', {});
  const LOG = g('CHANGELOG', { releases: [] });
  const foodById = new Map(FOODS.map((f) => [f.id, f]));
  const harvById = new Map(HARV.map((h) => [h.id, h]));
  const recipeById = new Map(RECIPES.map((r) => [r.id, r]));
  const CATEGORIES = FMETA.categories || uniq(FOODS.map((f) => f.category));

  // ------------------------------------------------------------------ risk
  function riskLabel(risk) {
    const r = String(risk || '').toUpperCase();
    if (r.includes('VERY')) return 'VERY HIGH';
    if (r.includes('HIGH')) return 'HIGH';
    if (r.includes('MOD')) return 'MODERATE';
    return 'LOW';
  }
  const riskClass = (risk) => riskLabel(risk).toLowerCase().replace(' ', '-');
  const foodRisk = (mg) => (mg <= 10 ? 'LOW' : mg <= 25 ? 'MODERATE' : mg < 100 ? 'HIGH' : 'VERY HIGH');
  const recipeRisk = (per) => (per <= 10 ? 'LOW' : per <= 25 ? 'MODERATE' : per <= 50 ? 'HIGH' : 'VERY HIGH');
  const badge = (risk, label) => `<span class="badge badge-${riskClass(risk)}">${esc(label || riskLabel(risk))}</span>`;
  const mgSpan = (mg, risk) => `<span class="mg ${riskClass(risk || foodRisk(+mg))}">${esc(typeof mg === 'number' ? fmt(mg) : mg)} mg</span>`;
  function flags(f) {
    let s = '';
    if (f.starred) s += ' <span title="Classification changed with newer data" style="color:var(--mod-fg)">★</span>';
    if (f.disputed) s += ' <span class="badge badge-neutral" title="Sources disagree or no assay exists">disputed</span>';
    return s;
  }

  // ------------------------------------------------------------------ search engine
  const STOP = new Set(['the', 'a', 'an', 'of', 'and', 'or', 'with', 'in', 'raw', 'cooked', 'boiled', 'unsalted', 'drained', 'fresh']);
  function normalize(s) { return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/[’'`]/g, '').replace(/[^a-z0-9]+/g, ' ').replace(/\s+/g, ' ').trim(); }
  function stem(w) {
    if (w.length <= 3) return w;
    if (w.endsWith('ies')) return w.slice(0, -3) + 'y';
    if (w.endsWith('oes')) return w.slice(0, -2);
    if (/(sh|ch|ss|x|z)es$/.test(w)) return w.slice(0, -2);
    if (w.endsWith('ss')) return w;
    if (w.endsWith('s')) return w.slice(0, -1);
    return w;
  }
  const tokens = (s) => normalize(s).split(' ').filter(Boolean).map(stem);
  const sigTokens = (s) => tokens(s).filter((t) => !STOP.has(t));
  function lev(a, b, max) {
    if (Math.abs(a.length - b.length) > max) return max + 1;
    const prev = new Array(b.length + 1); const cur = new Array(b.length + 1);
    for (let j = 0; j <= b.length; j++) prev[j] = j;
    for (let i = 1; i <= a.length; i++) {
      cur[0] = i; let rowMin = i;
      for (let j = 1; j <= b.length; j++) {
        cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
        if (cur[j] < rowMin) rowMin = cur[j];
      }
      if (rowMin > max) return max + 1;
      for (let j = 0; j <= b.length; j++) prev[j] = cur[j];
    }
    return prev[b.length];
  }
  const INDEX = [];
  for (const f of FOODS) INDEX.push({ type: 'food', id: f.id, name: f.name, nameN: normalize(f.name), ntoks: tokens(f.name), aliasN: (f.aliases || []).map(normalize), atoks: uniq((f.aliases || []).flatMap(tokens)), xtoks: uniq(tokens(f.category + ' ' + (f.notes || '') + ' ' + (f.source || ''))), obj: f, measured: !!f.measured });
  for (const h of HARV) INDEX.push({ type: 'harvard', id: h.id, name: hname(h), nameN: normalize(h.item), ntoks: tokens(h.item), aliasN: [], atoks: [], xtoks: tokens(h.group), obj: h, measured: !!h.measured });
  for (const r of RECIPES) INDEX.push({ type: 'recipe', id: r.id, name: r.name, nameN: normalize(r.name), ntoks: tokens(r.name), aliasN: (r.tags || []).map(normalize), atoks: uniq((r.tags || []).flatMap(tokens)), xtoks: uniq((r.ingredients || []).flatMap((i) => tokens(i.name))), obj: r, measured: false });

  function scoreEntry(e, q, qtoks) {
    let s = 0;
    if (e.nameN === q) s = 100;
    else if (e.aliasN.some((a) => a === q)) s = 90;
    else if (e.nameN.startsWith(q)) s = 85;
    else if (e.aliasN.some((a) => a.startsWith(q))) s = 70;
    else if (e.nameN.includes(' ' + q)) s = 64;
    else if (e.nameN.includes(q)) s = 56;
    if (!qtoks.length) return s;
    const hit = (t) => e.ntoks.some((n) => n.startsWith(t)) || e.atoks.some((n) => n.startsWith(t));
    const fuzzyHit = (t) => t.length >= 4 && (e.ntoks.some((n) => lev(n, t, t.length >= 8 ? 2 : 1) <= (t.length >= 8 ? 2 : 1)) || e.atoks.some((n) => lev(n, t, 1) <= 1));
    const matched = qtoks.filter(hit);
    if (matched.length === qtoks.length) s = Math.max(s, qtoks.length > 1 ? 60 : 52);
    else {
      const rest = qtoks.filter((t) => !matched.includes(t));
      if (rest.every(fuzzyHit)) s = Math.max(s, matched.length ? 44 : 36);
      else if (matched.length && matched.length / qtoks.length >= 0.5) s = Math.max(s, 24);
    }
    if (s < 30 && qtoks.every((t) => hit(t) || e.xtoks.some((x) => x.startsWith(t)))) s = Math.max(s, 18);
    return s;
  }
  const TYPE_ORDER = { food: 0, recipe: 1, harvard: 2 };
  function search(query, limitPer) {
    const q = normalize(query); const qtoks = q.split(' ').filter(Boolean).map(stem).filter((t) => !STOP.has(t) || qtoks_len(q) === 1);
    function qtoks_len(s) { return s.split(' ').filter(Boolean).length; }
    const out = { foods: [], recipes: [], harvard: [] };
    if (!q) return out;
    for (const e of INDEX) {
      const s = scoreEntry(e, q, qtoks);
      if (s >= 18) (e.type === 'food' ? out.foods : e.type === 'recipe' ? out.recipes : out.harvard).push({ e, s });
    }
    const cmp = (a, b) => b.s - a.s || (b.e.measured - a.e.measured) || a.e.name.length - b.e.name.length || a.e.name.localeCompare(b.e.name);
    for (const k of Object.keys(out)) { out[k].sort(cmp); if (limitPer) out[k] = out[k].slice(0, limitPer); }
    return out;
  }
  function highlight(text, query) {
    const q = normalize(query); if (!q) return esc(text);
    const words = uniq(q.split(' ').filter((w) => w.length >= 2));
    let html = esc(text);
    for (const w of words) { const re = new RegExp('(' + w.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'); html = html.replace(re, '<mark>$1</mark>'); }
    return html;
  }

  // ------------------------------------------------------------------ serving parsing & amount math
  const FRAC = { '½': 0.5, '¼': 0.25, '¾': 0.75, '⅓': 1 / 3, '⅔': 2 / 3, '⅛': 0.125, '⅜': 0.375, '⅝': 0.625, '⅞': 0.875 };
  const UNIT_ALIAS = { cup: 'cup', cups: 'cup', c: 'cup', tbsp: 'tbsp', tbs: 'tbsp', tablespoon: 'tbsp', tablespoons: 'tbsp', tsp: 'tsp', teaspoon: 'tsp', teaspoons: 'tsp', oz: 'oz', ounce: 'oz', ounces: 'oz', g: 'g', gram: 'g', grams: 'g', kg: 'kg', ml: 'ml', l: 'l', lb: 'lb', lbs: 'lb', pound: 'lb', pounds: 'lb' };
  const VOL = { cup: 1, tbsp: 1 / 16, tsp: 1 / 48, ml: 1 / 240, l: 1000 / 240 };
  const WT = { g: 1, kg: 1000, oz: 28.35, lb: 453.6 };
  const UNIT_LABEL = { serving: 'servings', each: 'each', g: 'g', oz: 'oz', lb: 'lb', cup: 'cup', tbsp: 'tbsp', tsp: 'tsp', ml: 'ml' };
  function parseQty(str) {
    let s = String(str || '').trim(); let m;
    if ((m = s.match(/^(\d+)?\s*([½¼¾⅓⅔⅛⅜⅝⅞])\s*(.*)$/))) return [(m[1] ? +m[1] : 0) + FRAC[m[2]], m[3]];
    if ((m = s.match(/^(\d+)\s+(\d+)\/(\d+)\s*(.*)$/))) return [+m[1] + m[2] / m[3], m[4]];
    if ((m = s.match(/^(\d+)\/(\d+)\s*(.*)$/))) return [m[1] / m[2], m[3]];
    if ((m = s.match(/^(\d+(?:\.\d+)?)\s*[–-]\s*(\d+(?:\.\d+)?)\s*(.*)$/))) return [(+m[1] + +m[2]) / 2, m[3]];
    if ((m = s.match(/^(\d+(?:\.\d+)?)\s*(.*)$/))) return [+m[1], m[2]];
    if ((m = s.match(/^(one|an?)\s+(.*)$/i))) return [1, m[2]];
    if (/^one$/i.test(s)) return [1, ''];
    return [1, s];
  }
  function parseServing(serving) {
    const [qty, rest] = parseQty(serving);
    const w = (rest.split(/\s+/)[0] || '').toLowerCase().replace(/[^a-z]/g, '');
    const unit = UNIT_ALIAS[w] || 'each';
    const noun = unit === 'each' ? (rest.split(/[\s(]+/)[0] || 'each') : unit;
    return { qty: qty || 1, unit, noun, rest };
  }
  function unitOptions(base) {
    if (!base) return ['serving'];
    const ps = parseServing(base.serving); const opts = ['serving'];
    if (ps.unit === 'each') opts.push('each');
    if (base.grams) { opts.push('g', 'oz'); if (VOL[ps.unit] != null) opts.push('cup', 'tbsp', 'tsp', 'ml'); }
    return opts;
  }
  function baseFor(ing) {
    const f = ing.foodId ? foodById.get(ing.foodId) : null;
    if (f) return { kind: 'food', id: f.id, name: f.name, serving: f.serving, mg: f.oxalateNum, grams: f.servingGrams, nut: f.nutrition, risk: f.riskLevel, disputed: f.disputed };
    const h = ing.harvardId ? harvById.get(ing.harvardId) : null;
    if (h) return { kind: 'harvard', id: h.id, name: hname(h), serving: h.serving, mg: h.mg, grams: null, nut: null, risk: foodRisk(h.mg) };
    return null;
  }
  const scaleNut = (nut, factor) => ({ kcal: nut.kcal * factor, protein: nut.protein * factor, fat: nut.fat * factor, carbs: nut.carbs * factor, fiber: nut.fiber * factor, calcium: nut.calcium * factor });
  function ingredientCalc(ing) {
    const base = baseFor(ing); const qty = Number(ing.qty) || 0;
    const manual = ing.manualMg != null && ing.manualMg !== '' && !isNaN(+ing.manualMg) ? +ing.manualMg : null;
    if (!base) return { base: null, mg: manual != null ? manual : 0, grams: null, nut: null, factor: null, source: manual != null ? 'manual' : 'estimated', problem: null };
    const ps = parseServing(base.serving); let factor = null;
    switch (ing.unit || 'serving') {
      case 'serving': factor = qty; break;
      case 'each': if (ps.unit === 'each') factor = qty / ps.qty; break;
      case 'g': case 'oz': case 'lb': if (base.grams) factor = (qty * WT[ing.unit]) / base.grams; break;
      case 'cup': case 'tbsp': case 'tsp': case 'ml': if (base.grams && VOL[ps.unit] != null) { const gPerCup = base.grams / (ps.qty * VOL[ps.unit]); factor = (qty * VOL[ing.unit] * gPerCup) / base.grams; } break;
      default: break;
    }
    if (factor == null) return { base, mg: manual != null ? manual : 0, grams: null, nut: null, factor: null, source: manual != null ? 'manual' : 'estimated', problem: 'This unit cannot be converted for this food; use servings or enter mg manually.' };
    const grams = base.grams ? factor * base.grams : null;
    const mg = manual != null ? manual : factor * base.mg;
    const nut = base.nut && grams != null ? scaleNut(base.nut, grams / 100) : null;
    return { base, mg, grams, nut, factor, source: manual != null ? 'manual' : base.kind === 'food' ? 'FOODS_DB' : 'HARVARD', problem: null };
  }
  function amountLabel(ing, calc) {
    const qty = fmtQty(Number(ing.qty) || 0); const u = ing.unit || 'serving';
    if (!calc.base) return ing.amount || qty;
    if (u === 'serving') return `${qty} × ${calc.base.serving}`;
    if (u === 'each') return `${qty} ${parseServing(calc.base.serving).noun}`;
    return `${qty} ${UNIT_LABEL[u] || u}`;
  }

  // ------------------------------------------------------------------ rendering helpers
  const link = (hash, cls, inner, attrs) => `<a href="${hash}" class="${cls}"${attrs || ''}>${inner}</a>`;
  function foodRow(f, q) {
    return link(`#/food/${f.id}`, 'food-row result-row', `
      <div><div class="name">${q ? highlight(f.name, q) : esc(f.name)}${flags(f)}</div><div class="sub">${esc(f.serving)} · ${esc(f.category)}</div></div>
      ${mgSpan(f.oxalateMg, f.riskLevel)}${badge(f.riskLevel)}`);
  }
  function harvardRow(h, q) {
    return link(`#/harvard/${h.id}`, 'food-row harvard result-row', `
      <div><div class="name">${q ? highlight(h.item, q) : esc(h.item)}</div><div class="sub">${esc(h.serving)} · ${esc(h.group)}${h.measured ? ' · measured' : ''}</div></div>
      ${mgSpan(h.mg, foodRisk(h.mg))}<span class="badge badge-harvard">Harvard</span>`);
  }
  function recipeOx(r) {
    let total = 0; for (const i of r.ingredients || []) total += Number(i.oxalateMg) || 0;
    return { total: Math.round(total * 10) / 10, per: r.servings ? Math.round((total / r.servings) * 10) / 10 : 0 };
  }
  function recipeCard(r, q) {
    const ox = recipeOx(r); const risk = r.riskLevel || recipeRisk(ox.per);
    return link(`#/recipe/${r.id}`, 'recipe-card result-row', `
      <div class="row" style="justify-content:space-between;align-items:flex-start">
        <div class="grow"><div class="name">${q ? highlight(r.name, q) : esc(r.name)}</div>
          <div class="meta"><span>${esc(r.servings)} servings</span>${r.prepTime ? `<span>${esc(r.prepTime)} prep</span>` : ''}${r.cookTime ? `<span>${esc(r.cookTime)} cook</span>` : ''}<span class="mg ${riskClass(risk)}">${fmt(ox.per)} mg/serving</span></div>
          ${(r.tags || []).length ? `<div>${r.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join('')}</div>` : ''}
        </div>${badge(risk)}
      </div>
      ${r.nutrition ? `<div class="meta" style="margin-top:0.4rem;font-size:0.8rem;color:var(--muted)">${esc(r.nutrition.calories)} kcal · ${esc(r.nutrition.protein)} g protein · ${esc(r.nutrition.calcium)} mg calcium</div>` : ''}`);
  }
  function nutriGrid(n, extra) {
    if (!n) return '';
    const cell = (v, l) => `<div class="n"><b>${esc(v)}</b><span>${l}</span></div>`;
    return `<div class="nutri">${cell(fmt(n.kcal != null ? n.kcal : n.calories, 0), 'kcal')}${cell(fmt(n.protein, 1) + ' g', 'protein')}${cell(fmt(n.fat, 1) + ' g', 'fat')}${cell(fmt(n.carbs, 1) + ' g', 'carbs')}${cell(fmt(n.fiber, 1) + ' g', 'fiber')}${cell(fmt(n.calcium, 0) + ' mg', 'calcium')}${extra || ''}</div>`;
  }

  // ------------------------------------------------------------------ views & routing
  const VIEWS = ['home', 'foods', 'search', 'detail', 'recipes', 'builder', 'guide', 'sources'];
  let current = { name: null, path: '' };
  function show(name, navKey) {
    for (const v of VIEWS) $('#view-' + v).classList.toggle('active', v === name);
    $$('.main-nav a').forEach((a) => a.classList.toggle('active', a.dataset.nav === navKey));
    document.title = 'Oxalate Guide';
  }
  function parseHash() {
    // Split before decoding so that encoded '&', '?' and '/' inside values (e.g. "Nuts & Seeds") survive.
    const raw = location.hash.replace(/^#/, '') || '/';
    const qi = raw.indexOf('?');
    const rawPath = qi >= 0 ? raw.slice(0, qi) : raw; const qs = qi >= 0 ? raw.slice(qi + 1) : '';
    const dec = (x) => { try { return decodeURIComponent(x); } catch (e) { return x; } };
    const params = {}; if (qs) for (const kv of qs.split('&')) { const i = kv.indexOf('='); const k = i >= 0 ? kv.slice(0, i) : kv; const v = i >= 0 ? kv.slice(i + 1) : ''; params[dec(k)] = dec(v.replace(/\+/g, ' ')); }
    const parts = rawPath.replace(/^\/+/, '').split('/').map(dec);
    const path = dec(rawPath);
    return { path, parts, params };
  }
  function route() {
    const { path, parts, params } = parseHash();
    const head = parts[0] || '';
    const arg = parts.slice(1).join('/');
    const input = $('#searchInput');
    if (head !== 'search') { input.value = ''; $('#searchWrap').classList.remove('has-value'); }
    current = { name: head, path };
    try {
      if (head === '') renderHome(), show('home', 'home');
      else if (head === 'foods') renderFoods(params), show('foods', 'foods');
      else if (head === 'search') { input.value = arg; $('#searchWrap').classList.toggle('has-value', !!arg); renderSearch(arg); show('search', null); }
      else if (head === 'food') renderFood(arg), show('detail', 'foods');
      else if (head === 'harvard') renderHarvard(arg), show('detail', 'foods');
      else if (head === 'recipes') renderRecipes(params), show('recipes', 'recipes');
      else if (head === 'recipe') renderRecipe(arg), show('detail', 'recipes');
      else if (head === 'builder') renderBuilder(arg), show('builder', 'builder');
      else if (head === 'guide') show('guide', 'guide');
      else if (head === 'sources') renderSources(), show('sources', 'sources');
      else { location.hash = '#/'; return; }
    } catch (e) { console.error(e); $('#view-detail').innerHTML = `<div class="empty">Something went wrong rendering this page.<br><code>${esc(e.message)}</code></div>`; show('detail', null); }
    if (head !== 'search') window.scrollTo(0, 0);
  }
  function goBack() { if (history.length > 1) history.back(); else location.hash = '#/'; }
  const backBtn = () => `<button class="back" type="button" data-back>&larr; Back</button>`;

  // ------------------------------------------------------------------ home
  const QUICK = ['arugula', 'kale', 'bok-choy', 'broccoli', 'romaine-lettuce', 'cabbage', 'lentils-boiled', 'black-beans-boiled', 'chickpeas', 'black-eyed-peas', 'soft-tofu-calcium-set', 'green-peas-frozen-cooked', 'pistachios', 'walnuts', 'pumpkin-seeds', 'flaxseeds', 'sunflower-seeds-dried', 'white-rice-long-grain', 'oats-oatmeal', 'barley-cooked-pearled', 'raspberries', 'strawberries', 'pomegranate', 'apples', 'coffee-brewed', 'fortified-oat-milk', 'fortified-oj', 'mushrooms-any-variety', 'cauliflower', 'winter-squash', 'rice-noodles', 'coconut-dried', 'lemon-water'];
  function renderHome() {
    const qs = $('#quickStart'); if (qs.dataset.done) return;
    qs.innerHTML = QUICK.map((id) => foodById.get(id)).filter(Boolean).map((f) => link(`#/food/${f.id}`, 'quick-card', `<div><div class="name">${esc(f.name)}</div><div class="sub">${esc(f.serving)}</div></div>${mgSpan(f.oxalateMg, f.riskLevel)}`)).join('');
    const ca = FOODS.filter((f) => f.calciumInfo && f.calciumInfo.absorbableCa).map((f) => ({ f, abs: parseFloat(String(f.calciumInfo.absorbableCa).replace(/[^0-9.]/g, '')) || 0 })).filter((x) => x.abs > 0 && riskLabel(x.f.riskLevel) === 'LOW').sort((a, b) => b.abs - a.abs);
    const extraCa = [{ id: 'soft-tofu-calcium-set', name: 'Calcium-set tofu', serving: '½ cup', totalCa: '253–683', abs: '~30%', usable: '78–212', ox: '10.6 mg oxalate' }, { id: 'fortified-oj', name: 'Fortified orange juice', serving: '1 cup', totalCa: '~350', abs: '~37%', usable: '~130', ox: '1.5 mg oxalate + citrate' }];
    $('#calciumGrid').innerHTML = extraCa.map((c) => link(`#/food/${c.id}`, 'ca-card', `<div class="name">${esc(c.name)}</div><div class="stats"><span><b>${c.totalCa} mg</b> Ca</span><span><b>${c.abs}</b> absorbed</span><span>${c.usable} mg usable</span></div><div class="ox">${esc(c.serving)} · ${c.ox}</div>`)).join('') +
      ca.map(({ f }) => { const c = f.calciumInfo; return link(`#/food/${f.id}`, 'ca-card', `<div class="name">${esc(f.name)}</div><div class="stats"><span><b>${esc(c.totalCa)} mg</b> Ca</span><span><b>${esc(c.absorption)}</b> absorbed</span><span>${esc(c.absorbableCa)} mg usable</span></div><div class="ox">${esc(c.serving)} · ${esc(f.oxalateMg)} mg oxalate</div>`); }).join('');
    $('#avoidList').innerHTML = FOODS.slice().sort((a, b) => b.oxalateNum - a.oxalateNum).slice(0, 10).map((f) => foodRow(f)).join('');
    $('#homeCats').innerHTML = CATEGORIES.map((c) => `<a class="chip" href="#/foods?cat=${encodeURIComponent(c)}">${esc(c)} <span class="muted">${FOODS.filter((f) => f.category === c).length}</span></a>`).join('');
    $('#changedList').innerHTML = FOODS.filter((f) => f.starred).sort((a, b) => a.name.localeCompare(b.name)).map((f) => foodRow(f)).join('');
    qs.dataset.done = '1';
  }

  // ------------------------------------------------------------------ foods list
  function renderFoods(params) {
    const cat = params.cat || ''; const risk = params.risk || 'all'; const sort = params.sort || 'oxalate';
    let list = FOODS.slice();
    if (cat) list = list.filter((f) => f.category === cat);
    if (risk !== 'all') list = list.filter((f) => riskLabel(f.riskLevel) === risk);
    if (sort === 'oxalate') list.sort((a, b) => a.oxalateNum - b.oxalateNum || a.name.localeCompare(b.name));
    else if (sort === 'oxalate-desc') list.sort((a, b) => b.oxalateNum - a.oxalateNum);
    else if (sort === 'name') list.sort((a, b) => a.name.localeCompare(b.name));
    else if (sort === 'calcium') list.sort((a, b) => ((b.nutrition && b.servingGrams ? (b.nutrition.calcium * b.servingGrams) / 100 : 0) - (a.nutrition && a.servingGrams ? (a.nutrition.calcium * a.servingGrams) / 100 : 0)));
    const mk = (k, v) => { const p = Object.assign({}, params); if (v) p[k] = v; else delete p[k]; const qs = Object.entries(p).map(([a, b]) => `${encodeURIComponent(a)}=${encodeURIComponent(b)}`).join('&'); return '#/foods' + (qs ? '?' + qs : ''); };
    $('#view-foods').innerHTML = `
      <h1>Foods</h1>
      <p class="subtitle">${FOODS.length} curated vegan foods with notes, swaps and nutrition. The full ${HARV.length}-row Harvard table is included in search.</p>
      <div class="filter-group"><div class="filter-title">Category</div>
        <div class="chips">${link(mk('cat', ''), 'chip' + (!cat ? ' active' : ''), 'All')}${CATEGORIES.map((c) => link(mk('cat', c), 'chip' + (cat === c ? ' active' : ''), esc(c))).join('')}</div></div>
      <div class="filter-group"><div class="filter-title">Risk level</div>
        <div class="chips">${['all', 'LOW', 'MODERATE', 'HIGH', 'VERY HIGH'].map((r) => link(mk('risk', r === 'all' ? '' : r), 'chip' + (risk === r ? ' active' : ''), r === 'all' ? 'All' : riskLabel(r))).join('')}</div></div>
      <div class="list-bar"><span class="count">${list.length} foods</span>
        <span class="sort"><label for="sortSel">Sort</label> <select id="sortSel" class="sort-select"><option value="oxalate"${sort === 'oxalate' ? ' selected' : ''}>Oxalate, low to high</option><option value="oxalate-desc"${sort === 'oxalate-desc' ? ' selected' : ''}>Oxalate, high to low</option><option value="name"${sort === 'name' ? ' selected' : ''}>Name</option><option value="calcium"${sort === 'calcium' ? ' selected' : ''}>Calcium per serving</option></select></span></div>
      <div class="food-list">${list.map((f) => foodRow(f)).join('') || '<div class="empty">No foods match these filters.</div>'}</div>
      ${list.some((f) => f.starred) ? '<p class="note mt">★ Classification changed with the Harvard 2023 measurements or the Sept 2026 research check.</p>' : ''}`;
    $('#sortSel').addEventListener('change', (e) => { location.hash = mk('sort', e.target.value); });
  }

  // ------------------------------------------------------------------ search
  function renderSearch(q) {
    const v = $('#view-search');
    if (!q || !q.trim()) { v.innerHTML = '<div class="empty">Type a food, ingredient or recipe name.</div>'; return; }
    const res = search(q);
    const section = (title, items, renderFn, key, note) => {
      if (!items.length) return '';
      const limit = 25; const more = items.length > limit;
      return `<div class="results-section"><h2>${title} <span class="count">${items.length}</span></h2>${note ? `<p class="subtitle">${note}</p>` : ''}
        <div class="${key === 'recipes' ? 'recipe-grid' : 'food-list'}" data-group="${key}">${items.slice(0, limit).map((x) => renderFn(x.e.obj, q)).join('')}</div>
        ${more ? `<button class="btn sm show-more" type="button" data-more="${key}">Show all ${items.length}</button>` : ''}</div>`;
    };
    const total = res.foods.length + res.recipes.length + res.harvard.length;
    if (!total) {
      v.innerHTML = `<div class="empty"><p><b>No results for “${esc(q)}”.</b></p><p class="small">Try a simpler word (for example “bean” instead of “cannellini beans”), a different spelling, or browse the <a href="#/foods">food list</a>. Foods missing from the database can be added; see <a href="#/sources">Sources &amp; Updates</a>.</p></div>`;
      return;
    }
    v.innerHTML = `<p class="subtitle" style="margin-top:0.5rem">${total} results for “${esc(q)}”. Press Enter to open the first one.</p>` +
      section('Foods', res.foods, foodRow, 'foods') +
      section('Recipes', res.recipes, recipeCard, 'recipes', 'Matches on recipe name, tags or ingredients.') +
      section('Harvard table', res.harvard, harvardRow, 'harvard', 'Raw rows from the Harvard Nov 2023 table, including brand-name and non-vegan items.');
    $$('[data-more]', v).forEach((btn) => btn.addEventListener('click', () => {
      const key = btn.dataset.more; const items = res[key]; const wrap = $(`[data-group="${key}"]`, v);
      wrap.innerHTML = items.map((x) => (key === 'foods' ? foodRow : key === 'recipes' ? recipeCard : harvardRow)(x.e.obj, q)).join(''); btn.remove();
    }));
  }
  let searchTimer = null;
  function onSearchInput() {
    const q = $('#searchInput').value; $('#searchWrap').classList.toggle('has-value', !!q);
    clearTimeout(searchTimer);
    searchTimer = setTimeout(() => {
      const target = q.trim() ? '#/search/' + encodeURIComponent(q.trim()) : (current.name === 'search' ? '#/' : location.hash);
      if (current.name === 'search') history.replaceState(null, '', target), route(); else if (q.trim()) location.hash = target;
    }, 80);
  }
  function onSearchKey(e) {
    if (e.key === 'Escape') { $('#searchInput').value = ''; $('#searchWrap').classList.remove('has-value'); if (current.name === 'search') location.hash = '#/'; $('#searchInput').blur(); return; }
    if (current.name !== 'search') return;
    const rows = $$('.result-row', $('#view-search')); if (!rows.length) return;
    const idx = rows.findIndex((r) => r.classList.contains('kb'));
    if (e.key === 'ArrowDown' || e.key === 'ArrowUp') {
      e.preventDefault(); const next = e.key === 'ArrowDown' ? Math.min(idx + 1, rows.length - 1) : Math.max(idx - 1, 0);
      rows.forEach((r) => r.classList.remove('kb')); rows[next].classList.add('kb'); rows[next].scrollIntoView({ block: 'nearest' });
    } else if (e.key === 'Enter') { e.preventDefault(); (rows[idx >= 0 ? idx : 0]).click(); }
  }

  // ------------------------------------------------------------------ food detail
  function relatedHarvard(f) {
    const q = f.name.replace(/\(.*?\)/g, '').split(/[,/]/)[0];
    const res = search(q, 6).harvard.filter((x) => x.s >= 44).map((x) => x.e.obj);
    const alias = (f.aliases || []).slice(0, 2).flatMap((a) => search(a, 3).harvard.filter((x) => x.s >= 60).map((x) => x.e.obj));
    return uniq(res.concat(alias)).slice(0, 6);
  }
  function servingNutrition(f) { return f.nutrition && f.servingGrams ? scaleNut(f.nutrition, f.servingGrams / 100) : null; }
  function renderFood(id) {
    const f = foodById.get(id); const v = $('#view-detail');
    if (!f) { v.innerHTML = `${backBtn()}<div class="empty">Food not found.</div>`; return; }
    document.title = f.name + ' · Oxalate Guide';
    const risk = f.riskLevel; const sn = servingNutrition(f);
    const used = RECIPES.filter((r) => (r.ingredients || []).some((i) => i.foodId === f.id));
    const related = FOODS.filter((x) => x.category === f.category && x.id !== f.id).sort((a, b) => a.oxalateNum - b.oxalateNum).slice(0, 8);
    const hrows = relatedHarvard(f);
    let html = `${backBtn()}
      <div class="detail-head">
        <h1>${esc(f.name)}${flags(f)}</h1>
        <div class="meta">${esc(f.category)} · Source: ${esc(f.source)}${f.measured ? ' · directly measured' : ''}${(f.aliases || []).length ? ' · also: ' + esc(f.aliases.join(', ')) : ''}</div>
        <div class="stats">
          <div class="stat"><div class="v mg ${riskClass(risk)}">${esc(f.oxalateMg)} mg</div><div class="l">oxalate</div></div>
          <div class="stat"><div class="v" style="font-size:1.05rem;padding-top:0.2rem">${esc(f.serving)}</div><div class="l">per serving${f.servingGrams ? ' · ' + f.servingGrams + ' g' : ''}</div></div>
          <div class="stat"><div class="v">${badge(risk)}</div><div class="l">risk</div></div>
          ${sn ? `<div class="stat"><div class="v">${fmt(sn.calcium, 0)} mg</div><div class="l">calcium / serving</div></div>` : ''}
        </div>
        <div class="row mt"><a class="btn sm" href="#/builder?add=${f.id}">+ Add to Recipe Builder</a></div>
      </div>`;
    if (f.disputed) html += `<div class="section callout warn"><h3>Sources disagree on this food</h3><p>${esc(f.notes)}</p></div>`;
    else if (f.notes) html += `<div class="section ${riskLabel(risk) === 'VERY HIGH' ? 'callout danger' : ''}"><h3>Notes for stone formers</h3><p>${esc(f.notes)}</p></div>`;
    if (f.starred) html += `<div class="section callout"><p class="small">★ The classification of this food changed with newer data (Harvard Nov 2023 measurements or the Sept 2026 research check). See the changelog under Sources &amp; Updates.</p></div>`;
    if (f.preparation) html += `<div class="section"><h3>Preparation tips</h3><p>${esc(f.preparation)}</p></div>`;
    if (sn) html += `<div class="section"><h3>Nutrition per serving <span class="muted small">(${esc(f.serving)}, ${f.servingGrams} g; USDA, approximate)</span></h3>${nutriGrid(sn)}</div>`;
    if (f.swapTo && f.swapTo.length) html += `<div class="section"><h3>Try instead</h3>${f.swapTo.map((s) => `<div class="swap"><div><div><b>${esc(s.swapTo)}</b></div><div class="why">${esc(s.why)}</div></div><div class="mg low">${esc(s.swapToOx)} mg</div></div>`).join('')}</div>`;
    if (f.replaces && f.replaces.length) html += `<div class="section"><h3>Good substitute for</h3>${f.replaces.map((s) => `<div class="swap"><div><div><b>${esc(s.insteadOf)}</b></div><div class="why">${esc(s.why)}</div></div><div class="mg high">${esc(s.insteadOfOx)} mg</div></div>`).join('')}</div>`;
    if (f.calciumInfo) { const c = f.calciumInfo; html += `<div class="section"><h3>Calcium</h3><div class="tbl-wrap"><table class="tbl"><tr><th>Serving</th><th>Total Ca</th><th>Absorption</th><th>Absorbable Ca</th></tr><tr><td>${esc(c.serving)}</td><td>${esc(c.totalCa)} mg</td><td>${esc(c.absorption)}</td><td>${esc(c.absorbableCa)} mg</td></tr></table></div>${c.notes ? `<p class="note mt">${esc(c.notes)}</p>` : ''}</div>`; }
    if (hrows.length) html += `<div class="section"><h3>Harvard table rows for comparison</h3><p class="note mb">Raw entries from the Nov 2023 Harvard table that match this food's name. Differences from the curated value above show the spread between sources and preparations.</p><div class="food-list">${hrows.map((h) => harvardRow(h)).join('')}</div></div>`;
    if (used.length) html += `<div class="section"><h3>Used in recipes</h3><div class="recipe-grid">${used.map((r) => recipeCard(r)).join('')}</div></div>`;
    if (related.length) html += `<div class="section"><h3>Other ${esc(f.category)}, lowest first</h3><div class="food-list">${related.map((r) => foodRow(r)).join('')}</div><p class="mt"><a href="#/foods?cat=${encodeURIComponent(f.category)}">All ${esc(f.category)} &rarr;</a></p></div>`;
    v.innerHTML = html;
  }
  function renderHarvard(id) {
    const h = harvById.get(id); const v = $('#view-detail');
    if (!h) { v.innerHTML = `${backBtn()}<div class="empty">Row not found.</div>`; return; }
    document.title = hname(h) + ' · Harvard table';
    const risk = foodRisk(h.mg);
    const curated = search(hname(h).split(',')[0], 5).foods.filter((x) => x.s >= 44).map((x) => x.e.obj);
    const group = HARV.filter((x) => x.group === h.group && x.id !== h.id).sort((a, b) => a.mg - b.mg);
    v.innerHTML = `${backBtn()}
      <div class="detail-head">
        <h1>${esc(hname(h))} <span class="badge badge-harvard">Harvard table</span></h1>
        <div class="meta">${esc(h.group)} · Harvard T.H. Chan oxalate table, posted ${esc(HMETA.posted || 'Nov 2023')} · ${h.measured ? 'directly measured' : 'calculated value (not directly measured)'}</div>
        <div class="stats">
          <div class="stat"><div class="v mg ${riskClass(risk)}">${fmt(h.mg)} mg</div><div class="l">oxalate</div></div>
          <div class="stat"><div class="v" style="font-size:1.05rem;padding-top:0.2rem">${esc(h.serving)}</div><div class="l">per serving</div></div>
          <div class="stat"><div class="v">${badge(risk)}</div><div class="l">risk</div></div>
        </div>
        <div class="row mt"><a class="btn sm" href="#/builder?addh=${h.id}">+ Add to Recipe Builder</a></div>
      </div>
      <div class="section"><p class="note">Harvard rows carry only the oxalate value and serving. No nutrition or preparation notes are attached; the recipe builder can scale them by number of servings only. Brand-name and animal foods appear here for completeness.</p></div>
      ${curated.length ? `<div class="section"><h3>Curated entries for this food</h3><div class="food-list">${curated.map((f) => foodRow(f)).join('')}</div></div>` : ''}
      <div class="section"><h3>Other ${esc(h.group)} rows, lowest first</h3><div class="food-list">${group.slice(0, 60).map((x) => harvardRow(x)).join('')}</div></div>`;
  }

  // ------------------------------------------------------------------ recipes
  function renderRecipes(params) {
    const tag = params.tag || ''; const risk = params.risk || 'all';
    const tags = uniq(RECIPES.flatMap((r) => r.tags || [])).sort();
    let list = RECIPES.slice();
    if (tag) list = list.filter((r) => (r.tags || []).includes(tag));
    if (risk !== 'all') list = list.filter((r) => riskLabel(r.riskLevel || recipeRisk(recipeOx(r).per)) === risk);
    list.sort((a, b) => (b.dateAdded || '').localeCompare(a.dateAdded || '') || a.name.localeCompare(b.name));
    const mk = (k, v) => { const p = Object.assign({}, params); if (v) p[k] = v; else delete p[k]; const qs = Object.entries(p).map(([a, b]) => `${encodeURIComponent(a)}=${encodeURIComponent(b)}`).join('&'); return '#/recipes' + (qs ? '?' + qs : ''); };
    $('#view-recipes').innerHTML = `
      <div class="row"><h1 class="grow">Recipes</h1><a class="btn primary" href="#/builder">+ New recipe</a></div>
      <p class="subtitle">${RECIPES.length} recipes with oxalate per serving and nutrition. Use the search bar to find recipes by ingredient.</p>
      <div class="filter-row"><span class="label">Risk</span>${['all', 'LOW', 'MODERATE', 'HIGH'].map((r) => link(mk('risk', r === 'all' ? '' : r), 'chip' + (risk === r ? ' active' : ''), r === 'all' ? 'All' : riskLabel(r))).join('')}</div>
      ${tags.length ? `<div class="chips">${link(mk('tag', ''), 'chip' + (!tag ? ' active' : ''), 'All tags')}${tags.map((t) => link(mk('tag', t), 'chip' + (tag === t ? ' active' : ''), esc(t))).join('')}</div>` : ''}
      <div class="recipe-grid mt">${list.map((r) => recipeCard(r)).join('') || '<div class="empty">No recipes match. Build one in the Recipe Builder.</div>'}</div>`;
  }
  function renderRecipe(id) {
    const r = recipeById.get(id); const v = $('#view-detail');
    if (!r) { v.innerHTML = `${backBtn()}<div class="empty">Recipe not found.</div>`; return; }
    document.title = r.name + ' · Oxalate Guide';
    const ox = recipeOx(r); const risk = r.riskLevel || recipeRisk(ox.per);
    const colors = ['#2f7d4f', '#4caf6e', '#7ccb95', '#a9dfbb', '#e0b93a', '#e0872d', '#d8552a', '#b8332a', '#8a2d2d', '#5e3d9e'];
    const sorted = (r.ingredients || []).slice().sort((a, b) => (Number(b.oxalateMg) || 0) - (Number(a.oxalateMg) || 0));
    const totalOx = ox.total || 1;
    let html = `${backBtn()}
      <div class="detail-head">
        <h1>${esc(r.name)} <span class="badge badge-recipe">Recipe</span></h1>
        <div class="meta">${esc(r.servings)} servings${r.prepTime ? ` · ${esc(r.prepTime)} prep` : ''}${r.cookTime ? ` · ${esc(r.cookTime)} cook` : ''}${r.source && r.source !== 'original' ? ` · ${r.sourceUrl ? `<a href="${esc(r.sourceUrl)}" target="_blank" rel="noopener">${esc(r.source)} &#8599;</a>` : esc(r.source)}` : ''}${r.dateAdded ? ` · added ${esc(r.dateAdded)}` : ''}</div>
        ${(r.tags || []).length ? `<div class="mt" style="margin-top:0.4rem">${r.tags.map((t) => `<a class="tag" href="#/recipes?tag=${encodeURIComponent(t)}">${esc(t)}</a>`).join('')}</div>` : ''}
        <div class="stats">
          <div class="stat"><div class="v mg ${riskClass(risk)}">${fmt(ox.per)} mg</div><div class="l">oxalate / serving</div></div>
          <div class="stat"><div class="v">${fmt(ox.total)} mg</div><div class="l">total oxalate</div></div>
          <div class="stat"><div class="v">${badge(risk)}</div><div class="l">risk</div></div>
          <div class="stat"><div class="v">${esc(r.servings)}</div><div class="l">servings</div></div>
        </div>
        <div class="row mt"><a class="btn sm" href="#/builder/${r.id}">Edit a copy in Recipe Builder</a></div>
      </div>`;
    if (r.nutrition) html += `<div class="section"><h3>Nutrition per serving <span class="muted small">${r.nutritionSource === 'computed' ? '(computed from ingredient weights; USDA values, approximate)' : r.nutritionSource === 'manual' ? '(entered manually)' : '(estimated)'}</span></h3>${nutriGrid(r.nutrition, `<div class="n" style="background:var(--${riskClass(risk) === 'low' ? 'low' : riskClass(risk) === 'moderate' ? 'mod' : riskClass(risk) === 'high' ? 'high' : 'vhigh'}-bg)"><b class="mg ${riskClass(risk)}">${fmt(ox.per)} mg</b><span>oxalate</span></div>`)}</div>`;
    html += `<div class="section"><h3>Ingredients</h3><ul class="ing-list">${(r.ingredients || []).map((i) => {
      const src = i.oxalateSource === 'FOODS_DB' || i.oxalateSource === 'HARVARD' ? 'db' : 'est';
      const name = i.foodId && foodById.has(i.foodId) ? `<a href="#/food/${i.foodId}">${esc(i.name)}</a>` : i.harvardId && harvById.has(i.harvardId) ? `<a href="#/harvard/${i.harvardId}">${esc(i.name)}</a>` : esc(i.name);
      return `<li><span class="amt">${esc(i.amount || '')}</span><span>${name}</span><span class="ox ${src}" title="${src === 'db' ? 'From the database' : i.oxalateSource === 'manual' ? 'Entered manually' : 'Estimated'}">${src === 'db' ? '' : '~'}${fmt(Number(i.oxalateMg) || 0)} mg</span></li>`;
    }).join('')}</ul>
      <div class="mt"><div class="tiny muted">Oxalate contribution by ingredient</div><div class="oxbar">${sorted.map((i, k) => { const pct = ((Number(i.oxalateMg) || 0) / totalOx) * 100; return pct > 0 ? `<div style="width:${pct}%;background:${colors[k % colors.length]}" title="${esc(i.name)} ${fmt(pct, 0)}%"></div>` : ''; }).join('')}</div>
      <div class="legend">${sorted.map((i, k) => { const pct = ((Number(i.oxalateMg) || 0) / totalOx) * 100; return pct > 2 ? `<span><i style="background:${colors[k % colors.length]}"></i>${esc(i.name)} (${fmt(pct, 0)}%)</span>` : ''; }).join('')}</div></div></div>`;
    if ((r.instructions || []).length) html += `<div class="section"><h3>Instructions</h3><ol class="steps">${r.instructions.map((s, k) => `<li><span class="num">${k + 1}</span><span>${esc(s)}</span></li>`).join('')}</ol></div>`;
    if (r.oxalateNotes) html += `<div class="section callout"><h3>Oxalate notes</h3><p>${esc(r.oxalateNotes)}</p></div>`;
    v.innerHTML = html;
  }

  // ------------------------------------------------------------------ recipe builder
  const DRAFT_KEY = 'oxg.builder.draft';
  const blankIngredient = () => ({ text: '', qty: 1, unit: 'serving', foodId: null, harvardId: null, manualMg: null });
  const blankRecipe = () => ({ name: '', servings: 4, prepTime: '', cookTime: '', tags: '', source: 'original', sourceUrl: '', ingredients: [blankIngredient()], instructions: '', oxalateNotes: '', nutritionOverride: null });
  let B = null; let builderInited = false; let activePicker = null;

  function recipeToBuilder(r) {
    return { name: r.name + ' (copy)', servings: r.servings, prepTime: r.prepTime || '', cookTime: r.cookTime || '', tags: (r.tags || []).join(', '), source: r.source || 'original', sourceUrl: r.sourceUrl || '',
      ingredients: (r.ingredients || []).map((i) => ({ text: i.name, qty: i.qty != null ? i.qty : 1, unit: i.unit || (i.foodId || i.harvardId ? 'serving' : 'serving'), foodId: i.foodId || null, harvardId: i.harvardId || null, manualMg: i.qty == null ? (Number(i.oxalateMg) || 0) : null, amount: i.amount })),
      instructions: (r.instructions || []).join('\n'), oxalateNotes: r.oxalateNotes || '', nutritionOverride: r.nutritionSource === 'computed' ? null : r.nutrition || null };
  }
  function computeBuilder() {
    const rows = B.ingredients.map((ing) => ({ ing, calc: ingredientCalc(ing) }));
    let total = 0, gramsKnown = 0, gramsTotal = 0; const nut = { kcal: 0, protein: 0, fat: 0, carbs: 0, fiber: 0, calcium: 0 }; let nutCount = 0, dbCount = 0, manualCount = 0, estCount = 0, nutMissing = [];
    for (const { ing, calc } of rows) {
      if (!ing.text && !calc.base) continue;
      total += calc.mg || 0;
      if (calc.source === 'FOODS_DB' || calc.source === 'HARVARD') dbCount++; else if (calc.source === 'manual') manualCount++; else estCount++;
      if (calc.nut) { nutCount++; for (const k in nut) nut[k] += calc.nut[k]; } else nutMissing.push(ing.text || (calc.base && calc.base.name) || 'ingredient');
    }
    const servings = Math.max(1, Number(B.servings) || 1);
    const per = total / servings;
    const perNut = {}; for (const k in nut) perNut[k] = nut[k] / servings;
    return { rows, total, per, servings, risk: recipeRisk(per), nut: perNut, nutCount, nutMissing, dbCount, manualCount, estCount, count: rows.filter((x) => x.ing.text || x.calc.base).length };
  }
  function builderRecipeJSON(c) {
    const nutrition = B.nutritionOverride ? { calories: +B.nutritionOverride.calories || 0, protein: +B.nutritionOverride.protein || 0, fat: +B.nutritionOverride.fat || 0, carbs: +B.nutritionOverride.carbs || 0, fiber: +B.nutritionOverride.fiber || 0, calcium: +B.nutritionOverride.calcium || 0 }
      : c.nutCount ? { calories: Math.round(c.nut.kcal), protein: Math.round(c.nut.protein * 10) / 10, fat: Math.round(c.nut.fat * 10) / 10, carbs: Math.round(c.nut.carbs * 10) / 10, fiber: Math.round(c.nut.fiber * 10) / 10, calcium: Math.round(c.nut.calcium) } : null;
    return {
      id: slug(B.name) || 'untitled-recipe', name: B.name.trim() || 'Untitled recipe', servings: c.servings, prepTime: B.prepTime.trim(), cookTime: B.cookTime.trim(),
      tags: B.tags.split(',').map((t) => t.trim()).filter(Boolean),
      ingredients: c.rows.filter((x) => x.ing.text || x.calc.base).map(({ ing, calc }) => ({
        name: (ing.text || (calc.base && calc.base.name) || '').trim(), amount: amountLabel(ing, calc), qty: Number(ing.qty) || 0, unit: ing.unit || 'serving',
        foodId: ing.foodId || null, harvardId: ing.harvardId || null, grams: calc.grams != null ? Math.round(calc.grams) : null,
        oxalateMg: Math.round((calc.mg || 0) * 10) / 10, oxalateSource: calc.source,
      })),
      instructions: B.instructions.split('\n').map((s) => s.replace(/^\s*\d+[.)]\s*/, '').trim()).filter(Boolean),
      nutrition, nutritionSource: B.nutritionOverride ? 'manual' : c.nutCount ? (c.nutMissing.length ? 'computed-partial' : 'computed') : 'estimated',
      totalOxalateMg: Math.round(c.total * 10) / 10, oxalatePerServing: Math.round(c.per * 10) / 10, riskLevel: c.risk,
      oxalateNotes: B.oxalateNotes.trim(), source: B.source.trim() || 'original', sourceUrl: B.sourceUrl.trim() || null, dateAdded: today(),
    };
  }
  function renderBuilder(arg) {
    const v = $('#view-builder'); const { params } = parseHash();
    if (!builderInited) {
      B = lsGet(DRAFT_KEY, null) || blankRecipe(); builderInited = true;
      v.innerHTML = builderShell(); bindBuilderShell(v);
    }
    if (arg && recipeById.has(arg) && B._loadedFrom !== arg) { B = recipeToBuilder(recipeById.get(arg)); B._loadedFrom = arg; toast('Loaded a copy of ' + recipeById.get(arg).name); }
    if (params.add && foodById.has(params.add)) { const f = foodById.get(params.add); if (!B.ingredients.some((i) => i.foodId === f.id)) { if (B.ingredients.length === 1 && !B.ingredients[0].text && !B.ingredients[0].foodId) B.ingredients = []; B.ingredients.push(Object.assign(blankIngredient(), { text: f.name, foodId: f.id })); toast('Added ' + f.name); } history.replaceState(null, '', '#/builder'); }
    if (params.addh && harvById.has(params.addh)) { const h = harvById.get(params.addh); if (!B.ingredients.some((i) => i.harvardId === h.id)) { if (B.ingredients.length === 1 && !B.ingredients[0].text && !B.ingredients[0].foodId) B.ingredients = []; B.ingredients.push(Object.assign(blankIngredient(), { text: hname(h), harvardId: h.id })); toast('Added ' + hname(h)); } history.replaceState(null, '', '#/builder'); }
    paintBuilder();
  }
  function builderShell() {
    return `
      <div class="row"><h1 class="grow">Recipe Builder</h1><button class="btn sm danger" type="button" data-act="clear">Clear</button></div>
      <p class="subtitle">Pick ingredients from the database, enter amounts, and the oxalate and nutrition totals update as you go. Then publish straight to GitHub or copy the JSON. Drafts save automatically in this browser.</p>
      <div class="builder-grid">
        <div class="stack">
          <div class="card">
            <div class="fields">
              <div class="field" style="grid-column:1/-1"><label for="b-name">Recipe name</label><input id="b-name" data-f="name" placeholder="e.g. Lentil vegetable soup"></div>
              <div class="field"><label for="b-servings">Servings</label><input id="b-servings" data-f="servings" type="number" min="1" step="1"></div>
              <div class="field"><label for="b-prep">Prep time</label><input id="b-prep" data-f="prepTime" placeholder="15 min"></div>
              <div class="field"><label for="b-cook">Cook time</label><label class="sr-only" for="b-cook">Cook time</label><input id="b-cook" data-f="cookTime" placeholder="35 min"></div>
              <div class="field" style="grid-column:1/-1"><label for="b-tags">Tags (comma separated)</label><input id="b-tags" data-f="tags" placeholder="soup, high-protein, meal-prep"></div>
              <div class="field"><label for="b-source">Source</label><input id="b-source" data-f="source" placeholder="original"></div>
              <div class="field"><label for="b-url">Source URL</label><input id="b-url" data-f="sourceUrl" type="url" placeholder="https://"></div>
            </div>
          </div>
          <div class="card">
            <div class="row"><h3 class="grow" style="margin:0">Ingredients</h3><button class="btn sm" type="button" data-act="add-ing">+ Add ingredient</button></div>
            <p class="note">Start typing to match a database food. Units convert from the food's listed serving and weight; for foods without a weight, use “servings”. Override the mg if you know better.</p>
            <div id="b-ings"></div>
          </div>
          <div class="card">
            <div class="field"><label for="b-instr">Instructions (one step per line)</label><textarea id="b-instr" data-f="instructions" placeholder="Heat oil in a large pot…"></textarea></div>
            <div class="field mt"><label for="b-notes">Oxalate notes</label><textarea id="b-notes" data-f="oxalateNotes" style="min-height:70px" placeholder="Why this recipe is stone-friendly, which ingredient dominates, calcium pairing…"></textarea></div>
          </div>
        </div>
        <div class="builder-side stack">
          <div class="card totals" id="b-totals"></div>
          <div class="card" id="b-nutrition"></div>
          <div class="card">
            <h3>Save</h3>
            <div class="row">
              <button class="btn primary" type="button" data-act="publish">Publish to GitHub</button>
              <button class="btn" type="button" data-act="copy-json">Copy JSON</button>
              <button class="btn" type="button" data-act="copy-claude">Copy prompt for Claude</button>
            </div>
            <p class="note mt">Publish commits to <code>data/recipes.js</code> on GitHub; the site updates a minute later. It needs a token saved once below. Copy JSON if you would rather paste into a Claude Code session or edit the file on GitHub.</p>
            <details class="mt"><summary>GitHub publisher settings</summary><div class="body" id="b-gh"></div></details>
            <details class="mt"><summary>Recipe JSON preview</summary><div class="body"><pre id="b-json"></pre></div></details>
          </div>
        </div>
      </div>`;
  }
  function bindBuilderShell(v) {
    v.addEventListener('input', (e) => {
      const f = e.target.dataset.f; if (f) { B[f] = e.target.value; saveDraft(); paintTotals(); return; }
      const row = e.target.closest('[data-ing]'); if (!row) return; const idx = +row.dataset.ing; const ing = B.ingredients[idx]; if (!ing) return;
      if (e.target.dataset.k === 'text') { ing.text = e.target.value; ing.foodId = null; ing.harvardId = null; openPicker(row, idx); paintIngredientMeta(idx); }
      else if (e.target.dataset.k === 'qty') { ing.qty = e.target.value; paintIngredientMeta(idx); }
      else if (e.target.dataset.k === 'manual') { ing.manualMg = e.target.value === '' ? null : e.target.value; paintIngredientMeta(idx); }
      else if (e.target.dataset.n) { B.nutritionOverride = B.nutritionOverride || {}; B.nutritionOverride[e.target.dataset.n] = e.target.value; }
      saveDraft(); paintTotals();
    });
    v.addEventListener('change', (e) => {
      const row = e.target.closest('[data-ing]'); if (row && e.target.dataset.k === 'unit') { B.ingredients[+row.dataset.ing].unit = e.target.value; paintIngredientMeta(+row.dataset.ing); saveDraft(); paintTotals(); }
    });
    v.addEventListener('keydown', (e) => {
      const row = e.target.closest('[data-ing]'); if (!row || e.target.dataset.k !== 'text') return;
      const dd = $('.dd', row); const items = $$('div[data-pick]', dd); if (!dd.classList.contains('open') || !items.length) { if (e.key === 'Escape') closePicker(); return; }
      const idx = items.findIndex((x) => x.classList.contains('kb'));
      if (e.key === 'ArrowDown' || e.key === 'ArrowUp') { e.preventDefault(); const n = e.key === 'ArrowDown' ? Math.min(idx + 1, items.length - 1) : Math.max(idx - 1, 0); items.forEach((x) => x.classList.remove('kb')); items[n].classList.add('kb'); items[n].scrollIntoView({ block: 'nearest' }); }
      else if (e.key === 'Enter') { e.preventDefault(); (items[idx >= 0 ? idx : 0]).click(); }
      else if (e.key === 'Escape') closePicker();
    });
    v.addEventListener('click', (e) => {
      const pick = e.target.closest('[data-pick]');
      if (pick) { const row = pick.closest('[data-ing]'); const idx = +row.dataset.ing; const ing = B.ingredients[idx]; const [kind, id] = pick.dataset.pick.split(':');
        if (kind === 'food') { ing.foodId = id; ing.harvardId = null; ing.text = foodById.get(id).name; } else { ing.harvardId = id; ing.foodId = null; ing.text = hname(harvById.get(id)); }
        ing.unit = 'serving'; closePicker(); paintIngredients(); saveDraft(); paintTotals(); return; }
      const btn = e.target.closest('[data-act]'); if (!btn) return; const act = btn.dataset.act;
      if (act === 'add-ing') { B.ingredients.push(blankIngredient()); paintIngredients(); setTimeout(() => { const last = $$('[data-ing]', v).pop(); if (last) $('[data-k="text"]', last).focus(); }, 0); }
      else if (act === 'del-ing') { B.ingredients.splice(+btn.closest('[data-ing]').dataset.ing, 1); if (!B.ingredients.length) B.ingredients.push(blankIngredient()); paintIngredients(); paintTotals(); }
      else if (act === 'clear') { if (confirm('Clear the whole recipe draft?')) { B = blankRecipe(); saveDraft(); paintBuilder(); } }
      else if (act === 'copy-json') copyText(JSON.stringify(builderRecipeJSON(computeBuilder()), null, 2));
      else if (act === 'copy-claude') copyText(`Please add this recipe to data/recipes.js in the oxalates repository (append it to RECIPES_DB, keep the file's canonical format, bump RECIPES_META.count and lastUpdated, run node tools/validate.js, commit and push):\n\n${JSON.stringify(builderRecipeJSON(computeBuilder()), null, 2)}`);
      else if (act === 'publish') publishRecipe();
      else if (act === 'gh-save') { const gh = { owner: $('#gh-owner').value.trim(), repo: $('#gh-repo').value.trim(), branch: $('#gh-branch').value.trim() || 'main', token: $('#gh-token').value.trim() }; lsSet('oxg.github', gh); toast('GitHub settings saved in this browser'); paintGh(); }
      else if (act === 'gh-forget') { try { localStorage.removeItem('oxg.github'); } catch (err) { /* ignore */ } toast('Token removed'); paintGh(); }
      else if (act === 'nut-reset') { B.nutritionOverride = null; saveDraft(); paintTotals(); }
      else if (act === 'nut-override') { const c = computeBuilder(); B.nutritionOverride = { calories: Math.round(c.nut.kcal), protein: fmt(c.nut.protein), fat: fmt(c.nut.fat), carbs: fmt(c.nut.carbs), fiber: fmt(c.nut.fiber), calcium: Math.round(c.nut.calcium) }; saveDraft(); paintTotals(); }
      saveDraft();
    });
    document.addEventListener('click', (e) => { if (activePicker && !e.target.closest('.picker')) closePicker(); });
  }
  function saveDraft() { const d = Object.assign({}, B); delete d._loadedFrom; lsSet(DRAFT_KEY, d); }
  function paintBuilder() {
    for (const f of ['name', 'servings', 'prepTime', 'cookTime', 'tags', 'source', 'sourceUrl', 'instructions', 'oxalateNotes']) { const el = $(`[data-f="${f}"]`, $('#view-builder')); if (el) el.value = B[f] == null ? '' : B[f]; }
    paintIngredients(); paintTotals(); paintGh();
  }
  function paintIngredients() {
    $('#b-ings').innerHTML = B.ingredients.map((ing, idx) => {
      const base = baseFor(ing); const opts = unitOptions(base); const ps = base ? parseServing(base.serving) : null;
      const optLabel = (u) => u === 'serving' ? `× ${base ? base.serving : 'serving'}` : u === 'each' ? `${ps ? ps.noun : 'each'}` : UNIT_LABEL[u];
      return `<div class="ing-editor" data-ing="${idx}">
        <div class="top">
          <div class="field picker"><label>Ingredient</label><input data-k="text" value="${esc(ing.text)}" placeholder="Type to search foods…" autocomplete="off"><div class="dd"></div></div>
          <div class="field"><label>Amount</label><input data-k="qty" type="number" min="0" step="any" value="${esc(ing.qty)}"></div>
          <div class="field"><label>Unit</label><select data-k="unit">${opts.map((u) => `<option value="${u}"${(ing.unit || 'serving') === u ? ' selected' : ''}>${esc(optLabel(u))}</option>`).join('')}</select></div>
          <button class="btn sm danger" type="button" data-act="del-ing" title="Remove" aria-label="Remove ingredient">&#10005;</button>
        </div>
        <div class="bottom" data-meta></div>
      </div>`;
    }).join('');
    B.ingredients.forEach((_, idx) => paintIngredientMeta(idx));
  }
  function paintIngredientMeta(idx) {
    const row = $(`[data-ing="${idx}"]`, $('#b-ings')); if (!row) return; const ing = B.ingredients[idx]; const calc = ingredientCalc(ing);
    const m = $('[data-meta]', row);
    let html = '';
    if (calc.base) html += `<span class="match ok">${calc.base.kind === 'food' ? `<a href="#/food/${calc.base.id}">${esc(calc.base.name)}</a>` : `<a href="#/harvard/${calc.base.id}">${esc(calc.base.name)}</a> <span class="badge badge-harvard">Harvard</span>`} · ${esc(calc.base.serving)} = ${fmt(calc.base.mg)} mg${calc.base.disputed ? ' · <span class="badge badge-neutral">disputed</span>' : ''}</span>`;
    else if (ing.text) html += `<span class="match none">No database match; enter mg manually or leave 0 for negligible items (oil, salt, spices).</span>`;
    else html += `<span class="muted">Search the database or type a free-text ingredient.</span>`;
    if (calc.problem) html += `<span class="match none">${esc(calc.problem)}</span>`;
    html += `<span class="right row"><span><b>${fmt(calc.mg)} mg</b> oxalate <span class="tiny muted">(${calc.source === 'FOODS_DB' ? 'database' : calc.source === 'HARVARD' ? 'Harvard' : calc.source === 'manual' ? 'manual' : 'estimate'})</span></span>
      <label class="tiny">override <input class="manual" data-k="manual" type="number" min="0" step="any" value="${ing.manualMg == null ? '' : esc(ing.manualMg)}" placeholder="mg"></label>
      ${calc.grams != null ? `<span class="tiny muted">${fmt(calc.grams, 0)} g${calc.nut ? ` · ${fmt(calc.nut.kcal, 0)} kcal · ${fmt(calc.nut.calcium, 0)} mg Ca` : ' · no nutrition data'}</span>` : ''}</span>`;
    m.innerHTML = html;
  }
  function openPicker(row, idx) {
    const ing = B.ingredients[idx]; const dd = $('.dd', row); const q = ing.text.trim();
    if (q.length < 2) { closePicker(); return; }
    const res = search(q, 8);
    const items = res.foods.map((x) => ({ kind: 'food', o: x.e.obj })).concat(res.harvard.map((x) => ({ kind: 'harvard', o: x.e.obj }))).slice(0, 12);
    if (!items.length) { dd.innerHTML = '<div class="muted small">No match. Free-text ingredient; set mg manually.</div>'; }
    else dd.innerHTML = items.map((it) => it.kind === 'food'
      ? `<div data-pick="food:${it.o.id}"><span>${highlight(it.o.name, q)} <span class="s">${esc(it.o.serving)}</span></span><span class="mg ${riskClass(it.o.riskLevel)}">${esc(it.o.oxalateMg)} mg</span></div>`
      : `<div data-pick="harvard:${it.o.id}"><span>${highlight(hname(it.o), q)} <span class="s">${esc(it.o.serving)} · Harvard</span></span><span class="mg ${riskClass(foodRisk(it.o.mg))}">${fmt(it.o.mg)} mg</span></div>`).join('');
    dd.classList.add('open'); activePicker = dd;
  }
  function closePicker() { if (activePicker) activePicker.classList.remove('open'); activePicker = null; }
  function paintTotals() {
    const c = computeBuilder();
    $('#b-totals').innerHTML = `
      <div class="row" style="align-items:flex-end;gap:1.2rem">
        <div><div class="big mg ${riskClass(c.risk)}">${fmt(c.per)}</div><div class="l">mg oxalate / serving</div></div>
        <div><div style="font-size:1.2rem;font-weight:700">${fmt(c.total)} mg</div><div class="l">total · ${c.servings} servings</div></div>
        <div>${badge(c.risk)}</div>
      </div>
      <div class="progress" title="Position on the 0–50 mg per serving scale"><div style="width:${Math.min(100, (c.per / 50) * 100)}%;background:var(--${riskClass(c.risk) === 'low' ? 'low' : riskClass(c.risk) === 'moderate' ? 'mod' : riskClass(c.risk) === 'high' ? 'high' : 'vhigh'}-fg)"></div></div>
      <div class="tiny muted">Per serving: ≤10 low · ≤25 moderate · ≤50 high · above 50 very high. ${c.count} ingredients: ${c.dbCount} from the database, ${c.manualCount} manual, ${c.estCount} estimated as 0.</div>`;
    const nutHtml = B.nutritionOverride
      ? `<h3>Nutrition per serving <span class="tiny muted">(manual)</span></h3><div class="fields">${['calories', 'protein', 'fat', 'carbs', 'fiber', 'calcium'].map((k) => `<div class="field"><label>${k}${k === 'calcium' ? ' (mg)' : k === 'calories' ? '' : ' (g)'}</label><input data-n="${k}" type="number" step="any" value="${esc(B.nutritionOverride[k] == null ? '' : B.nutritionOverride[k])}"></div>`).join('')}</div><div class="row mt"><button class="btn sm" type="button" data-act="nut-reset">Back to computed values</button></div>`
      : `<h3>Nutrition per serving <span class="tiny muted">(computed, USDA approx.)</span></h3>${c.nutCount ? nutriGrid(c.nut) : '<p class="note">No nutrition yet: pick database foods with weights, or enter values manually.</p>'}
        ${c.nutMissing.length ? `<p class="note mt">Not counted (no weight or nutrition data): ${esc(c.nutMissing.join(', '))}.</p>` : ''}
        <div class="row mt"><button class="btn sm" type="button" data-act="nut-override">Enter values manually</button></div>`;
    $('#b-nutrition').innerHTML = nutHtml;
    $('#b-json').textContent = JSON.stringify(builderRecipeJSON(c), null, 2);
  }
  function paintGh() {
    const gh = lsGet('oxg.github', { owner: 'goodkidneys', repo: 'oxalates', branch: 'main', token: '' });
    $('#b-gh').innerHTML = `
      <p class="note">Create a <a href="https://github.com/settings/personal-access-tokens/new" target="_blank" rel="noopener">fine-grained personal access token</a> limited to this repository with <b>Contents: Read and write</b>. It is stored only in this browser's local storage and sent only to api.github.com.</p>
      <div class="fields mt">
        <div class="field"><label for="gh-owner">Owner</label><input id="gh-owner" value="${esc(gh.owner)}"></div>
        <div class="field"><label for="gh-repo">Repository</label><input id="gh-repo" value="${esc(gh.repo)}"></div>
        <div class="field"><label for="gh-branch">Branch</label><input id="gh-branch" value="${esc(gh.branch || 'main')}"></div>
        <div class="field" style="grid-column:1/-1"><label for="gh-token">Token</label><input id="gh-token" type="password" value="${esc(gh.token)}" placeholder="github_pat_…" autocomplete="off"></div>
      </div>
      <div class="row mt"><button class="btn sm primary" type="button" data-act="gh-save">Save settings</button>${gh.token ? '<button class="btn sm danger" type="button" data-act="gh-forget">Forget token</button><span class="tiny muted">Token saved.</span>' : '<span class="tiny muted">No token saved.</span>'}</div>`;
  }
  const b64encode = (s) => btoa(unescape(encodeURIComponent(s)));
  const b64decode = (s) => decodeURIComponent(escape(atob(String(s).replace(/\n/g, ''))));
  async function ghFetch(gh, path, opts) {
    const res = await fetch(`https://api.github.com/repos/${gh.owner}/${gh.repo}/${path}`, Object.assign({ headers: { Authorization: 'Bearer ' + gh.token, Accept: 'application/vnd.github+json', 'X-GitHub-Api-Version': '2022-11-28' } }, opts || {}));
    if (!res.ok) { let msg = res.status + ' ' + res.statusText; try { const j = await res.json(); if (j.message) msg += ': ' + j.message; } catch (e) { /* ignore */ } throw new Error(msg); }
    return res.json();
  }
  async function publishRecipe() {
    const gh = lsGet('oxg.github', null);
    if (!gh || !gh.token) { toast('Save a GitHub token in the publisher settings first'); $('#b-gh').closest('details').open = true; return; }
    const c = computeBuilder(); const recipe = builderRecipeJSON(c);
    if (!B.name.trim()) { toast('Give the recipe a name first'); $('#b-name').focus(); return; }
    if (!c.count) { toast('Add at least one ingredient'); return; }
    const btn = $('[data-act="publish"]'); btn.disabled = true; btn.textContent = 'Publishing…';
    try {
      const file = await ghFetch(gh, `contents/data/recipes.js?ref=${encodeURIComponent(gh.branch || 'main')}`);
      const text = b64decode(file.content);
      const m = text.match(/^const RECIPES_META = ([\s\S]*?);\s*\n^const RECIPES_DB = ([\s\S]*?);\s*$/m);
      if (!m) throw new Error('data/recipes.js on GitHub is not in the expected format');
      const meta = JSON.parse(m[1]); const db = JSON.parse(m[2]);
      const existing = db.findIndex((r) => r.id === recipe.id);
      if (existing >= 0 && !confirm(`A recipe with id "${recipe.id}" already exists. Replace it?`)) { btn.disabled = false; btn.textContent = 'Publish to GitHub'; return; }
      if (existing >= 0) db[existing] = recipe; else db.push(recipe);
      meta.count = db.length; meta.lastUpdated = today();
      const header = text.slice(0, text.search(/^const RECIPES_META/m)).replace(/Last updated: \d{4}-\d{2}-\d{2}/, 'Last updated: ' + today());
      const out = header + 'const RECIPES_META = ' + JSON.stringify(meta, null, 2) + ';\n\nconst RECIPES_DB = ' + JSON.stringify(db, null, 2) + ';\n';
      await ghFetch(gh, 'contents/data/recipes.js', { method: 'PUT', body: JSON.stringify({ message: (existing >= 0 ? 'Update recipe: ' : 'Add recipe: ') + recipe.name, content: b64encode(out), sha: file.sha, branch: gh.branch || 'main' }) });
      toast('Published. The site will update in a minute or two.');
      B = blankRecipe(); saveDraft(); paintBuilder();
    } catch (e) { console.error(e); alert('Publish failed: ' + e.message + '\n\nYou can still use Copy JSON and paste it into data/recipes.js on GitHub.'); }
    finally { btn.disabled = false; btn.textContent = 'Publish to GitHub'; }
  }

  // ------------------------------------------------------------------ sources
  function renderSources() {
    $('#sourcesMeta').innerHTML = `Curated foods: ${FOODS.length} (updated ${esc(FMETA.lastUpdated || '')}) · Harvard rows: ${HARV.length} (posted ${esc(HMETA.posted || '')}, imported ${esc(HMETA.importedOn || '')}) · Recipes: ${RECIPES.length}`;
    const el = $('#changelog'); if (el.dataset.done) return;
    el.innerHTML = (LOG.releases || []).map((rel, k) => {
      const groups = {}; for (const c of rel.changes || []) (groups[c.field] = groups[c.field] || []).push(c);
      const fieldLabel = { added: 'Added', removed: 'Removed', oxalateMg: 'Oxalate value changed', riskLevel: 'Risk level changed', serving: 'Serving changed', category: 'Category corrected', source: 'Source relabelled', name: 'Renamed' };
      const nameOf = (id) => (foodById.get(id) ? `<a href="#/food/${id}">${esc(foodById.get(id).name)}</a>` : `<code>${esc(id)}</code>`);
      return `<details${k === 0 ? ' open' : ''}><summary>${esc(rel.date)} — ${esc(rel.title)} <span class="muted">(${(rel.changes || []).length} changes)</span></summary><div class="body">
        <p>${esc(rel.summary)}</p>
        ${Object.entries(groups).map(([field, list]) => `<h3 class="mt">${esc(fieldLabel[field] || field)} <span class="muted">(${list.length})</span></h3><div class="tbl-wrap"><table class="tbl"><tr><th>Food</th><th>Before</th><th>After</th><th>Why</th></tr>${list.map((c) => `<tr><td>${nameOf(c.id)}</td><td>${esc(c.before == null ? '–' : c.before)}</td><td>${esc(c.after == null ? '–' : c.after)}</td><td class="small">${esc(c.why)}</td></tr>`).join('')}</table></div>`).join('')}
      </div></details>`;
    }).join('') || '<p class="muted">No changes recorded.</p>';
    el.dataset.done = '1';
  }

  // ------------------------------------------------------------------ theme
  function initTheme() {
    const btn = $('#themeToggle');
    btn.addEventListener('click', () => {
      const cur = document.documentElement.getAttribute('data-theme');
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      const isDark = cur ? cur === 'dark' : prefersDark;
      const next = isDark ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next); try { localStorage.setItem('oxg.theme', next); } catch (e) { /* ignore */ }
    });
  }

  // ------------------------------------------------------------------ init
  function init() {
    $('#searchInput').addEventListener('input', onSearchInput);
    $('#searchInput').addEventListener('keydown', onSearchKey);
    $('#searchClear').addEventListener('click', () => { $('#searchInput').value = ''; $('#searchWrap').classList.remove('has-value'); location.hash = '#/'; });
    document.addEventListener('click', (e) => { if (e.target.closest('[data-back]')) goBack(); });
    document.addEventListener('keydown', (e) => { if (e.key === '/' && !/input|textarea|select/i.test(document.activeElement.tagName)) { e.preventDefault(); $('#searchInput').focus(); } });
    initTheme();
    window.addEventListener('hashchange', route);
    route();
  }
  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init); else init();

  // expose a little for debugging in the console
  window.OXG = { search, FOODS, HARV, RECIPES, ingredientCalc, parseServing };
})();
