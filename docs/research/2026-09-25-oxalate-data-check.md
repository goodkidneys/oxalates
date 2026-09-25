# Oxalate reference-data currency check (as of 2026-09-25)

Scope: is the site's food-oxalate data (Harvard Nov 2023 table, OHF 2024 list, misc. vegan-item research values) still current, and has clinical guidance changed 2024-2026.

Method and limits: the sandbox egress proxy blocked direct fetches of hsph.harvard.edu, regepi.bwh.harvard.edu, ohf.org, pubmed/PMC, uroweb.org, auanet.org, auajournals.org, kidneystonediet.com and most journal hosts (all returned 403 CONNECT). Findings therefore rest on web-search extracts of those pages, on one YouTube transcript pulled through vidIQ, and on cross-checking multiple secondary sources. Each finding carries a confidence rating. The repo at /home/user/oxalates has no commits on the current branch, so the site's actual stored values could not be diffed; recommendations use the values quoted in the task brief.

---

## A. Harvard T.H. Chan oxalate table - is there a newer version than Nov 2023?

**Finding: No. The Nov 2023 table is still the current Harvard release. The only change is where it is hosted.**

- Current download URL (link text on the Harvard page is "Oxalate Table 2023 (.xslx)"):
  https://hsph.harvard.edu/wp-content/uploads/2024/07/OXALATE-TABLE-1.xlsx
  (re-uploaded July 2024 when HSPH migrated its website; file name still OXALATE-TABLE-1.xlsx, no "1_3"/"1_4" suffix indexed anywhere).
- Previous URL, still indexed and still linked by third parties:
  https://www.hsph.harvard.edu/nutrition-questionnaire-service-center/wp-content/uploads/sites/2637/2023/11/OXALATE-TABLE-1.xlsx
- Landing page: https://hsph.harvard.edu/department/nutrition/nutrition-questionnaire-service-center/ (nutrient tables download page; credits Dr John Knight, University of Alabama at Birmingham, for the measurements).
- Legacy host https://regepi.bwh.harvard.edu/health/Oxalate/files no longer resolves (DNS ENOTFOUND on 2026-09-25). Any link to it on the site is dead.
- The site's file name "OXALATE-TABLE-1_3.xlsx" is almost certainly a local download-rename (third copy) of OXALATE-TABLE-1.xlsx, not a Harvard version number. No search engine has ever indexed a "1_2", "1_3" or "1_4" Harvard file.

Evidence that nothing newer exists:
1. Kidney Stone Diet (Jill Harris) podcast/YouTube episode "New Harvard oxalate list! What you need to know about the changes!" - published 2024-04-30 (https://www.youtube.com/watch?v=7k5IQFfS5Is). Transcript (retrieved via vidIQ): "they posted it November 2023 ... six new pages ... about 30 newly added foods ... pomegranates, canned pumpkin, arugula, coconut, black beans, almond butter, squashes, lentils, veggie burgers, Slim Fast, cranberries, quinoa, soft tofu as opposed to hard tofu, oat bread ... blueberries went up ... raspberries went lower ... spinach went down a lot (still very high) ... boiled spinach is higher than raw." A search engine date of "April 23, 2025" attached to this episode is wrong; the update described is the same Nov 2023 release the site already uses.
2. The PKD Dietitian podcast ep. 49 "Oxalate Update - Two Changes To Get Excited About" (YouTube 2025-12-03, https://www.thepkddietitian.com/podcasts/the-pkd-dietitian-podcast/episodes/2148864634) still links the 2023/11 OXALATE-TABLE-1.xlsx as "Harvard's Oxalate List". The two "changes" are Nov-2023 re-measurements (black beans lower is one).
3. Kidney Stone Diet's derivative PDF "Harvard Oxalate Food List v2.3.1 - Second Edition" (May 2024, https://kidneystonediet.com/wp-content/uploads/2024/05/Harvard-Oxalate-Food-List-v2.3.1.pdf) is still the newest version they publish; no v2.4/v3 exists. Their Oct 2025 video ("Are you making this low oxalate mistake?") still refers to the same list.
4. OxalateWatch.com (2025-2026 site) describes its source as "Harvard T.H. Chan (2024) ... compiled by Dr John Knight" - i.e. the July 2024 re-host of the Nov 2023 data.

Values reported from the Nov 2023 table that matter for a vegan site (from secondary sources quoting the table; verify against the xlsx once you can download it):
- Soy milk: 4 mg per cup (quoted by SNI Global, https://sniglobal.org/examining-the-oxalate-content-of-soymilk/).
- Plant-based burger: 57.9 mg per patty (brand not identified in the table); soy burger 11.9 mg per 3.5 oz; veggie burger 5 mg per patty (one secondary source said 24 mg - conflicting, check the xlsx). Source: https://kidneystonediet.com/updated-oxalate-list-from-harvard/
- Almond milk: 27 mg per cup, described by The Kidney Dietitian as "newly added to the Harvard 2024 list" (https://www.thekidneydietitian.org/high-oxalate-foods-list/). This exactly matches Borin 2021, so it may be Harvard citing Borin rather than a Knight-lab measurement.
- Soft tofu vs firm tofu are now separate rows (values not retrieved).

Confidence: high that no post-Nov-2023 Harvard revision exists; moderate on the individual values above (secondary quotes). Would it change site values? Only the citation/URL, plus any of the above rows the site does not already carry.

---

## B. OHF (Oxalosis & Hyperoxaluria Foundation) list - updated after 2024?

**Finding: The downloadable list is still the Feb 27, 2024 PDF. OHF has published new HTML pages in 2026 but no new dated PDF was found.**

- Database hub: https://ohf.org/oxalate-food-content-database/ with category pages: vegetables-oxalate, fruit-oxalate, grain-oxalate, dairy-oxalate, fats-oxalate, protein-oxalate, beverages-oxalate, commercial-oxalate, supplements-oxalate.
- PDF: https://ohf.org/wp-content/uploads/2024/02/Oxalate-List-022724.pdf (dated 02/27/24, "(c) 2024"). No 2025 or 2026 upload path (ohf.org/wp-content/uploads/2025|2026/...Oxalate-List...) is indexed.
- Search engines show the category pages with "July 2026" modification dates; this is most likely CMS timestamps, and I could not read the pages (blocked) to see whether any mg values changed. Treat as "possibly touched, contents unverified".
- New in 2026: OHF blog "Low-Oxalate Diet: The Complete Guide With Food Lists", published 2026-06-09, https://ohf.org/diet-nutrition/low-oxalate-diet/. It defines tiers low <10 mg/serving, moderate 10-50 mg, high >=50 mg, and a <100 mg/day target. If the site quotes OHF tier thresholds, align to these.
- OHF values for soy foods reported via search: tofu 8 mg per 1/2 cup (125 g); tempeh 48 mg per 1/2 cup (83 g) (https://ohf.org/protein-oxalate/).
- Note on independence: OxalateWatch's About page states the Knight/UAB database is "published through the Harvard T.H. Chan School of Public Health and the OHF". The site's sources 1 and 2 are therefore largely the same underlying measurements, not two independent datasets.

Confidence: moderate (site blocked; relies on search extracts). Would it change site values? Not unless the site's OHF citation says "2024 edition" without the exact PDF date, or quotes different tier cut-offs.

---

## C. New peer-reviewed measurements 2024-2026 relevant to vegan foods

Bottom line: very little new direct measurement of vegan staple foods has been published since Nov 2023. Most 2024-2026 papers are physiological or review papers. Items below are ordered by relevance.

1. **Thaker KN, ..., Knight J, Penniston KL, Scotland KB. "Evaluation of the Online Information Landscape and Oxalate Content of Purportedly Antilithogenic Ingredients." J Endourol 2026;40(3). DOI 10.1177/08927790251409797, PMID 41460700 (published March 2026).** Direct measurement (Knight lab): chanca piedra 8.2 mg, turmeric 8.6 mg, cinnamon 14.0 mg oxalate **per supplement dose**. Values are per marketed dose, not per teaspoon of culinary spice. Confidence high. Changes site: add as a supplement caveat for turmeric/cinnamon; does not replace culinary per-gram values (older Tang 2008 AJCN data: turmeric ~91% soluble oxalate, cinnamon ~6% soluble).

2. **Wong et al. "Protein Isolate Supplements and Urinary Stone Risk." Urology 2026;207:1-7 (online mid-2025), PMID 40592395; editorial PMID 41005686.** Crossover, n=9, 3 x 20 g shakes/day for 5 days: whey vs pea vs soy vs rice isolate. Urine oxalate was significantly higher in the pea phase vs whey; pea and soy lowered urine calcium and raised pH; CaOx supersaturation did not differ. Not a food assay, but it undercuts the common "pea protein isolate is essentially oxalate-free" claim. Confidence high on the finding; the paper does not give mg oxalate per scoop. Changes site: add a caveat to the pea-protein entry.

3. **Ungerer/Liaw et al., J Pediatr Urol 2023 (S1477-5131(23)00146-8).** 41 plant-based meat products for children; oxalate "extrapolated from dietary data sources" by primary protein: pea 0.11 mg, wheat 3.8 mg, almond 10.2 mg, soy 11.6 mg per serving. These are estimates, not assays. If the site uses 0.11 mg for pea-protein products, label it an estimate. Confidence high that it is an estimate.

4. **Quinoa (2024).** "Unveiling the nutritional spectrum ... three varieties of quinoa" (Food Chem X, 2024, S2590157524007028): raw seed total oxalate >396 mg/100 g in all three varieties. Harvard Nov 2023 measured cooked quinoa (transcript confirms quinoa was studied; value not retrieved here). Keep the Harvard cooked value; raw-seed numbers are not comparable. Confidence moderate.

5. **Plant milks - no 2024-2026 assay found.** The reference remains Borin JF et al., J Ren Nutr 2021 (PMC8611107), IC-MS on 10 plant milks: almond ~27 mg/cup (highest), cashew and hazelnut high, soy ~9.6-10 mg/cup, oat/rice/macadamia very low, coconut and flax undetectable, hemp measured (value not retrieved). No published assay of pea milk (Ripple) was found anywhere. Confidence high for Borin; high that nothing newer exists.

6. **Soy milk 336 mg figure - origin and refutation.** The 336 mg/serving value traces to Massey et al., J Agric Food Chem 2001;49:4262 (same paper that gives TVP 638 mg per 85 g). The same senior author's 2005 paper (Al-Wahsh, Massey et al., J Agric Food Chem 2005;53:5670, PMID 15998131) reported 2 soymilks at 5.86 and 5.18 mg/serving, 18 of 19 tofu brands <10 mg/serving, and commercial soy foods 2-58 mg/serving (tempeh, TVP, soy flour, soy nuts, soynut butter >10 mg). Ellis & Lieb 2015 found 4.0-5.3 mg/cup, including the same brand Massey 2001 scored at 336. Harvard lists 4 mg/cup; Borin 2021 ~10 mg/cup. Analysis: https://sniglobal.org/examining-the-oxalate-content-of-soymilk/ (soy-industry funded, but the primary papers stand on their own). Confidence high. **This is the single largest error in the site's current data.**

7. **Tofu / tempeh / TVP / soy protein - no 2024-2026 assays.** Best available: Al-Wahsh 2005 (above); OHF: tofu 8 mg/half cup, tempeh 48 mg/half cup (83 g); Harvard Nov 2023 splits soft vs firm tofu. The TVP 638 mg/85 g number comes from the discredited Massey 2001 set and should not be used.

8. **Seitan.** Only lab value found is VRG 2014 (https://www.vrg.org/blog/2014/08/14/what-is-the-amount-of-oxalate-in-seitan/): Arrowhead Mills vital wheat gluten 54 mg total / 15.1 mg soluble per 100 g, i.e. ~26-31 mg per 4 oz seitan. Old, single sample. Nothing newer.

9. **Matcha.** A 2024 compositional study (Foods; PMC11049459) reports ~17.2 +/- 1.9 mg oxalate per g dry powder, i.e. ~34 mg per 2 g serving. Other secondary sources say 4-9 mg/g. Older green-tea infusion data: 8.3-139.8 mg/L soluble oxalate across 52 Chinese teas. Confidence moderate (value seen only in a search extract).

10. **Cocoa/dark chocolate.** No new assays; Schroder et al. 2011 (J Food Compos Anal) remain the reference: cocoa powder mean 729 mg/100 g DM total (469 soluble); dark chocolate mean 254 mg/100 g DM (216 soluble). Harvard re-measured dark chocolate in Nov 2023 (value not retrieved).

11. **Legumes/flours.** No 2024-2026 assays. Chai & Liebman 2005 (J Food Compos Anal 18:723): cooked legumes 4-80 mg/100 g; nuts 42-469 (almond 469); flours 37-269 mg/100 g (soy flour 183). Canadian pulses 2018 (Food Res Int): raw lentils 168.6-289.1, raw chickpeas 92.2-214 mg/100 g; cooking reduces by ~40-60%. Chickpea (besan), almond, coconut, oat and spelt flour: no direct published assays found; almond flour is reasonably estimated from whole almonds (~469 mg/100 g), the others are estimates.

12. **Chia / flax / hemp.** No new assays. Commonly quoted: chia ~470 mg/100 g, flax ~9 mg/100 g, hemp hearts ~55 mg/100 g (aggregator values; primary source unclear). Label as estimates.

13. **Sweet potato, cassava, plantain, dates, dried fruit, jackfruit.** Nothing new. Cassava 151-198 mg/100 g (Ethiopian 2020 spectrophotometry studies - low-quality method). Plantain ~3 mg/100 g and jackfruit ~39 mg/100 g appear only on aggregator sites. Dried figs up to ~95 mg/100 g (older data); dates: no primary assay found ("24 mg per date" circulates without a citation). Label as unmeasured/estimates.

14. **Nutritional yeast.** No laboratory value exists in any source found (Harvard, OHF, TLO, papers). Claims of "<5 mg/serving" are unsourced. Mark as unmeasured.

15. **Rice noodles, soba, glass noodles.** No assays. Aggregators list soba ~25 mg/100 g (source unclear). Buckwheat groats (cooked) are high in Harvard (~133 mg/cup); soba is mostly wheat so lower, but unmeasured.

16. **Reviews (no new primary values):** Gaur et al., Compr Rev Food Sci Food Saf, July 2025, DOI 10.1111/1541-4337.70212 (processing effects on food oxalate); Yilmaz Tuncel 2025 Nutrition Bulletin review of antinutrients in plant-based foods.

17. **Epidemiology:** Sci Rep 2025 (10.1038/s41598-025-98370-9; n=9,839 Iranian adults, cross-sectional): overall plant-based diet index OR 1.17 (95% CI 1.01-1.37) for kidney stones; healthful and unhealthful PDI not significant. Weak design; do not over-interpret.

---

## D. Clinical guidance changes 2024-2026

1. **AUA Medical Management of Kidney Stones Guideline (2026), Parts I and II** - J Urol, published online 2026-07-30. Part I (evaluation + dietary management of calcium stones): DOI 10.1097/JU.0000000000005227, PMID 42529981; Part II (treatment/follow-up): DOI 10.1097/JU.0000000000005228, PMID 42529979. Full text: AUAnet.org/2026MedStoneGuideline. Replaces the 2014 guideline (2019 amendment). Content retrievable via extracts: dietary calcium 1,000-1,200 mg/day from food and beverages, consumed primarily with meals; for CaOx formers with hyperoxaluria, calcium with meals and moderation of high-oxalate foods; enteric hyperoxaluria may warrant stricter oxalate restriction plus calcium (possibly supplements) timed with meals; low citrate -> more fruits and vegetables; dietary history should include OTC supplements. No vegan-specific statement located. Full statement list and evidence grades could not be retrieved (hosts blocked). Confidence: high on existence/date; moderate on wording.

2. **EAU Guidelines on Urolithiasis 2026** (full: https://d56bochluxqnz.cloudfront.net/documents/full-guideline/EAU-Guidelines-on-Urolithiasis-2026.pdf; pocket: .../pocket-guidelines/EAU-Pocket-on-Urolithiasis-2026.pdf; changes: https://uroweb.org/guidelines/urolithiasis/summary-of-changes). 2026 edition incorporates 126 updated studies and revises Section 4.6 (calcium stones). Pocket 2026 wording: "advise oxalate restriction if hyperoxaluria" (weak); calcium should not be restricted, minimum 800 mg, general recommendation 1,000 mg/day; vitamin C "role remains controversial ... advise CaOx stone formers to avoid excessive intake"; enteric hyperoxaluria: alkaline citrate, calcium supplement, reduced dietary fat and oxalate. Skolarikos et al. Eur Urol 2024 update: fluid 2.5-3 L/day, diet rich in vegetables and fibre, normal calcium, limit salt, animal protein, alcohol, carbonated drinks. Confidence moderate-high.

3. **CARI Guidelines (Australia/NZ) 2026** - "Prevention of Recurrent Kidney Stones: A CARI Guidelines Summary", Kidney Int Rep 2026, PMID 41858317, PMC12997322. Nutrition therapy is central and most cost-effective; citrate therapy reduces recurrence in calcium stone formers but is poorly tolerated. Confidence moderate.

4. **National Kidney Foundation** - "Kidney Stone Diet and Prevention Tips" updated 2026-07-27 (https://www.kidney.org/kidney-topics/kidney-stones-diet-and-prevention); "Calcium Kidney Stones" updated 2025-09-02 (contributor Melanie Betz RD); "Eat Smart to Prevent Kidney Stones" updated 2025-08-26; "Kidney Stone Diet Plan and Prevention" recommends 1,000-1,200 mg calcium/day. Position: a strict low-oxalate diet is "not usually the best approach"; individualize on 24-h urine; plant-forward eaters have fewer stones. NKF also publishes "Plan Your Vegetarian Plate for Kidney Stones (Calcium Oxalate)" PDF: https://www.kidney.org/sites/default/files/CaOx%20Vegetarian%20MyPlate.pdf. Confidence moderate-high.

5. **Cleveland Clinic** "Kidney Stones Diet: What To Eat and Avoid" (https://health.clevelandclinic.org/kidney-stones-diet) updated 2026-03-18: do not cut calcium; pair calcium with oxalate foods. **Mayo Clinic** pages unchanged in substance (keep dietary calcium, caution with supplements, limit spinach/rhubarb/almonds etc.).

6. **Harvard** - no dedicated Nutrition Source kidney-stone page exists; Harvard Health pages (https://www.health.harvard.edu/diseases-and-conditions/avoiding-kidney-stones) still say >=1,000 mg calcium/day from food, avoid calcium supplements, limit beets, chocolate, spinach, rhubarb, tea, most nuts. No change.

7. **Medscape 2026-08-03 "Beyond Water and Oxalate: New Era in Kidney Stone Prevention"** - narrative on precision nutrition/microbiome; medical nutrition therapy remains first-line. Context only.

8. **Oxalobacter / probiotics (2025):**
   - Kidney Int Rep Feb 2025 (PMC12142626; PMID 40485679): single ~10^10-cell dose colonized all 22 healthy adults, 10 still colonized at 1 year; stool oxalate -54%, urine oxalate -14%.
   - Gut Microbes 2025-09-23 (17:2562337; PMC12459359): baseline abundance of oxalate-degrading genes (oxc/frc) predicts response; low-baseline subjects respond.
   - Cureus systematic review 2025-12-08 (PMC12707424): 9 studies (5 RCTs, 2000-2025); no consistent, clinically meaningful reduction in urinary oxalate or stone risk; "current evidence does not support" probiotics/synbiotics for stone prevention.
   - npj Biofilms Microbiomes 2025 review (PMID 41495071).
   No guideline recommends probiotics. Confidence high.

9. **Vitamin C:** Farkouh et al., J Endourol July 2026, DOI 10.1177/08927790261471733, PMID 42535313 - meta-analysis of 9 studies: supplements raise 24-h urinary oxalate by 9.72 mg vs baseline and 6.45 mg vs placebo, in both stone formers and non-formers; no effect on urinary citrate or calcium. Reinforces "avoid high-dose (>1,000 mg/day) vitamin C supplements". Confidence high.

10. **Citrate / lemon:** PLOS One 2025-12-05 (PMID 41348736): Thai multicentre double-blind RCT, n=173, lime-based citrate/flavonoid regimen vs placebo for 24 months; recurrence 14% vs 45%. Int Urol Nephrol 2025/2026 APUL crossover (n=20, non-stone-formers): lemon water +167.7 mg/24 h urinary citrate, coconut water +273.8 mg, apple cider vinegar no effect. Afr J Urol 2025 meta-analysis supports citrus juice as an adjunct. Guidance itself unchanged: potassium citrate for hypocitraturia; lemon/citrus as adjunct. Confidence moderate-high.

11. **Vegan diets specifically:** no 2024-2026 guideline addresses vegan stone formers. All guidelines converge on: adequate calcium (1,000-1,200 mg) taken with oxalate-containing meals, 2.5-3 L fluid, low sodium, moderate protein, fruits/vegetables for citrate, avoid high-dose vitamin C, and no blanket oxalate ban. For vegans that translates to calcium-set tofu, fortified plant milks/yogurts and calcium-rich greens at the same meal as oxalate sources.

---

## E. Machine-readable / reusable oxalate datasets

| Source | URL | Last update | Format | Reusable? |
|---|---|---|---|---|
| Harvard/Knight table | https://hsph.harvard.edu/wp-content/uploads/2024/07/OXALATE-TABLE-1.xlsx | data Nov 2023, re-hosted Jul 2024 | xlsx | Free download, no stated licence; attribution customary |
| OHF list | https://ohf.org/wp-content/uploads/2024/02/Oxalate-List-022724.pdf + category HTML pages | PDF 2024-02-27; pages show 2026 timestamps | PDF/HTML | (c) OHF; no CSV/API |
| USDA FoodData Central | fdc.nal.usda.gov | - | - | Still no oxalate nutrient |
| Open Food Facts | world.openfoodfacts.org | - | CSV/JSONL, CC BY-SA | No oxalate nutrient field found |
| OxalateGuard | https://oxalateguard.com/food-database (about-data, tos) | 2025-2026 | web only | 2,900+ foods aggregated from Harvard, Wake Forest, OHF, Siener, Avila-Nava, 15+ papers; ToS prohibits copying/derivatives; no download |
| OxalateWatch | https://oxalatewatch.com/ (about/) | 2025-2026 | web only | 1,200+ foods, "Harvard/Knight 2024 + OHF" paired with USDA; free lookup, no download/API/licence stated |
| oxalatecontent.com | https://oxalatecontent.com/ (about) | ongoing | web only | Aggregator; unsourced values default to USDA; no licence |
| oxalate.org | https://oxalate.org/ | static | web only | 750+ foods from Harvard **2008**, FAO Bangladesh 2014, NUTTAB 2010; outdated; no licence |
| Kidney Stone Diet (Jill Harris) | https://kidneystonediet.com/oxalate-list/ ; PDF v2.3.1 (May 2024) | May 2024 | PDF + searchable web | Reformatted Harvard Nov 2023; copyrighted; no CSV |
| Sally K. Norton | https://sallyknorton.com/toxic_superfoods/data_companion/ | 2023 | paid book | Not reusable |
| TLO (Trying Low Oxalates) / U. Wyoming (Liebman) | Facebook group spreadsheet, >2,500 entries; VP Foundation Low-Oxalate Cookbook | rolling | spreadsheet (group members) | Not openly licensed |
| Wake Forest Urology | https://www.wakehealth.edu/-/media/wakeforest/clinical/files/urology/oxalate-food-list.pdf | undated (Holmes & Kennedy 2000 lineage) | PDF, mg/100 g | No licence stated |
| Well Resourced Dietitian | https://wellresourced.com/downloads/oxalate-food-list/ | 2024 | PDF handout | Derived from Harvard; client-education use |
| UChicago Kidney Stone Program | https://kidneystones.uchicago.edu/2015/11/16/how-to-eat-a-low-oxalate-diet/ | 2015+ | HTML | Based on Harvard |
| GitHub | - | - | - | GitHub search API is repository-scoped in this sandbox; web search found no open oxalate dataset repo |

Conclusion for E: nothing new and freely reusable in machine-readable form has appeared. The Harvard xlsx remains the only primary, downloadable, structured source. Every 2025-2026 web database (OxalateGuard, OxalateWatch) is a proprietary aggregation of the same Harvard/OHF/Wake Forest data.

---

## Recommended changes (ordered by importance)

1. **Soy milk: replace 336 mg per 8.5 oz with 4-10 mg per cup (240 mL).** Harvard Nov 2023: 4 mg/cup; Borin 2021 (IC-MS): ~10 mg/cup; Al-Wahsh & Massey 2005: 5.2-5.9 mg/serving; Ellis & Lieb 2015: 4.0-5.3 mg/cup. Cite https://pubmed.ncbi.nlm.nih.gov/15998131/ and https://pmc.ncbi.nlm.nih.gov/articles/PMC8611107/ ; add a note that the 336 mg figure (Massey 2001) was superseded by the same lab. Confidence high.
2. **Textured vegetable protein: drop any 638 mg/85 g value (same Massey 2001 set).** Use Al-Wahsh 2005: ">10 mg/serving, within a 2-58 mg/serving range for commercial soy foods"; label "moderate, uncertain". Confidence moderate-high.
3. **Update guideline citations to AUA 2026 (published 2026-07-30), EAU 2026, CARI 2026, NKF (Jul 2026 / Sep 2025 pages), Cleveland Clinic (Mar 2026).** Core advice unchanged: 1,000-1,200 mg calcium/day with meals; 2.5-3 L fluid; oxalate restriction only when hyperoxaluria is documented; no blanket low-oxalate diet. Replace any AUA 2014/2019 references. Confidence high.
4. **Probiotics/Oxalobacter: state that as of the Dec 2025 systematic review the evidence does not support them for stone prevention**; O. formigenes colonization lowers urinary oxalate ~14% in healthy adults (Feb 2025) and response depends on baseline gut oxalate-degrader abundance (Sept 2025). Confidence high.
5. **Vitamin C: add the July 2026 meta-analysis** (+9.7 mg/24 h urinary oxalate vs baseline; +6.5 vs placebo). Keep "avoid >1,000 mg/day supplements"; dietary vitamin C is fine. Confidence high.
6. **Harvard source citation: change URL to https://hsph.harvard.edu/wp-content/uploads/2024/07/OXALATE-TABLE-1.xlsx, keep "data posted Nov 2023", remove any regepi.bwh.harvard.edu link (dead).** Note the "_3" file suffix is local, not a version. Confidence high.
7. **Pea protein isolate: keep "low oxalate" but add** (a) the 0.11 mg/serving figure (JPU 2023) is an extrapolation, not an assay; (b) Wong et al. 2026 found pea isolate raised urinary oxalate vs whey in a 9-person crossover - take with a calcium source. Confidence high.
8. **Plant-based burgers: reconcile with Harvard Nov 2023 rows** - "plant-based burger" 57.9 mg per patty (brand unspecified), soy burger 11.9 mg per 3.5 oz, veggie burger ~5 mg per patty. If the site's Beyond value is far below 58 mg, either cite it as a brand-specific estimate or adopt the Harvard row with the caveat that the brand is unknown. Confidence moderate (verify in xlsx).
9. **Plant milks: add/confirm almond milk 27 mg/cup (Borin 2021; also in Harvard list per The Kidney Dietitian), cashew and hazelnut high, oat/rice/macadamia very low, coconut and flax undetectable. Mark pea milk (Ripple) as unmeasured.** Confidence high for Borin values.
10. **Tofu/tempeh: cross-check against OHF (tofu 8 mg/half cup 125 g; tempeh 48 mg/half cup 83 g) and Harvard's separate soft vs firm tofu rows.** Confidence moderate.
11. **Turmeric/cinnamon: add supplement-dose values from Thaker et al. 2026** (turmeric 8.6 mg/dose, cinnamon 14.0 mg/dose; Knight lab) alongside culinary values; note turmeric oxalate is ~91% soluble vs ~6% for cinnamon (Tang 2008). Confidence high.
12. **Matcha: ~17 mg/g powder (2024 Foods study) -> ~34 mg per 2 g serving; flag moderate confidence.**
13. **Quinoa: keep Harvard cooked value; note raw seed >396 mg/100 g (2024) is not comparable.**
14. **Mark as "estimate/unmeasured" on the site:** nutritional yeast, jackfruit, dates, plantain, chickpea/besan flour, coconut flour, oat flour, spelt flour, rice noodles, soba, glass noodles, hemp seeds, pea milk. No primary assay exists for any of them; almond flour can be derived from whole almonds (~469 mg/100 g, Chai & Liebman 2005).
15. **OHF citation: cite the PDF as dated 2024-02-27 and add the 2026-06-09 OHF guide tiers (<10 / 10-50 / >=50 mg per serving; <100 mg/day).** State that Harvard and OHF share the Knight/UAB measurements and are not independent confirmations.
16. **Lemon/citrate section: optionally add** the Dec 2025 lime-regimen RCT (recurrence 14% vs 45% at 24 months) and the 2026 APUL crossover (lemon water +168 mg/24 h citrate); guidance itself unchanged.

Things I could not verify and recommend checking from an unrestricted network: the exact Harvard xlsx rows for soy milk, tofu (soft/firm), veggie/plant-based burgers, almond milk, quinoa and dark chocolate; whether OHF's 2026-timestamped category pages changed any mg values versus the Feb 2024 PDF; the full AUA 2026 statement list and evidence grades.
