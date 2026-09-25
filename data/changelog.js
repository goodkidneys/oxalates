// Data changelog. Each release lists every value that changed and why.
// Newest release first. Append a new release object when values change.

const CHANGELOG = {
  "releases": [
    {
      "date": "2026-09-25",
      "title": "Online research check",
      "summary": "Checked Harvard, OHF, PubMed and clinical guidelines for changes since the old app was built. The Harvard Nov 2023 table is still the current release (re-hosted July 2024). Soy milk, TVP and soy nuts values were traced to a superseded 2001 paper and corrected; tempeh, chia and almond flour reconciled; nine entries added (matcha, seitan, cashew/rice/coconut/pea milks, turmeric and cinnamon supplements, hemp seeds); unmeasured items flagged. Guide references updated to AUA 2026, EAU 2026, NKF 2026.",
      "changes": [
        {
          "id": "regular-soy-milk",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "LOW",
          "why": "Research check 2026-09-25: soy milk 336 mg traced to superseded 2001 paper; four later measurements agree on 4–10 mg per cup"
        },
        {
          "id": "regular-soy-milk",
          "field": "source",
          "before": "Harvard 2023",
          "after": "Harvard 2023 + Al-Wahsh & Massey 2005 + Borin 2021",
          "why": "Research check 2026-09-25: soy milk 336 mg traced to superseded 2001 paper; four later measurements agree on 4–10 mg per cup"
        },
        {
          "id": "textured-vegetable-protein-tvp",
          "field": "oxalateMg",
          "before": "496",
          "after": "10–58",
          "why": "Research check 2026-09-25: old 496 mg value from Massey 2001; Al-Wahsh & Massey 2005 range 2–58 mg/serving"
        },
        {
          "id": "textured-vegetable-protein-tvp",
          "field": "riskLevel",
          "before": "VERY HIGH",
          "after": "HIGH",
          "why": "Research check 2026-09-25: old 496 mg value from Massey 2001; Al-Wahsh & Massey 2005 range 2–58 mg/serving"
        },
        {
          "id": "textured-vegetable-protein-tvp",
          "field": "source",
          "before": "SIU School of Medicine list",
          "after": "Al-Wahsh & Massey 2005 (range)",
          "why": "Research check 2026-09-25: old 496 mg value from Massey 2001; Al-Wahsh & Massey 2005 range 2–58 mg/serving"
        },
        {
          "id": "soy-nuts",
          "field": "oxalateMg",
          "before": "392",
          "after": "10–58",
          "why": "Research check 2026-09-25: old 392 mg value from Massey 2001; 2005 follow-up range 2–58 mg/serving"
        },
        {
          "id": "soy-nuts",
          "field": "riskLevel",
          "before": "VERY HIGH",
          "after": "HIGH",
          "why": "Research check 2026-09-25: old 392 mg value from Massey 2001; 2005 follow-up range 2–58 mg/serving"
        },
        {
          "id": "soy-nuts",
          "field": "source",
          "before": "SIU School of Medicine list",
          "after": "Al-Wahsh & Massey 2005 (range)",
          "why": "Research check 2026-09-25: old 392 mg value from Massey 2001; 2005 follow-up range 2–58 mg/serving"
        },
        {
          "id": "tempeh",
          "field": "oxalateMg",
          "before": "23",
          "after": "23–48",
          "why": "Research check 2026-09-25: OHF lists tempeh at 48 mg per ½ cup versus 23 mg on older lists"
        },
        {
          "id": "tempeh",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "Research check 2026-09-25: OHF lists tempeh at 48 mg per ½ cup versus 23 mg on older lists"
        },
        {
          "id": "tempeh",
          "field": "source",
          "before": "Kidney Stone Diet / older lists",
          "after": "OHF 2024 (48 mg per ½ cup) / older lists (23 mg)",
          "why": "Research check 2026-09-25: OHF lists tempeh at 48 mg per ½ cup versus 23 mg on older lists"
        },
        {
          "id": "almond-flour",
          "field": "oxalateMg",
          "before": "60",
          "after": "~72",
          "why": "Research check 2026-09-25: derived from Harvard measured almonds (72 mg/oz) rather than an unsourced 60 mg"
        },
        {
          "id": "almond-flour",
          "field": "source",
          "before": "Multiple / Est.",
          "after": "Derived from Harvard 2023 almonds",
          "why": "Research check 2026-09-25: derived from Harvard measured almonds (72 mg/oz) rather than an unsourced 60 mg"
        },
        {
          "id": "nutritional-yeast",
          "field": "source",
          "before": "Multiple / Est.",
          "after": "Estimate (no published assay)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "jackfruit-canned",
          "field": "source",
          "before": "Research (Wiley)",
          "after": "Estimate (aggregator, ~39 mg/100 g)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "chickpea-besan-flour",
          "field": "source",
          "before": "Multiple / Est.",
          "after": "Estimate (no published assay)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "coconut-flour",
          "field": "source",
          "before": "Various lists (unverified)",
          "after": "Estimate (no published assay)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "oat-flour",
          "field": "source",
          "before": "Multiple / Est.",
          "after": "Estimate (no published assay)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "spelt-flour",
          "field": "source",
          "before": "Various lists (unverified)",
          "after": "Estimate (no published assay)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "rice-noodles",
          "field": "source",
          "before": "Harvard 2023",
          "after": "Estimate (no published assay)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "soba-noodles-buckwheat",
          "field": "source",
          "before": "Harvard 2023",
          "after": "Estimate (aggregator ~25 mg/100 g)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "glass-mung-bean-noodles",
          "field": "source",
          "before": "Harvard 2023",
          "after": "Estimate (no published assay)",
          "why": "Research check 2026-09-25: flagged as unmeasured"
        },
        {
          "id": "chia-seeds",
          "field": "source",
          "before": "Multiple / Est.",
          "after": "Aggregator values (~470 mg/100 g)",
          "why": "Research check 2026-09-25: aggregator value ~470 mg/100 g conflicts with the old 5–10 mg; flagged uncertain and conservative"
        },
        {
          "id": "chia-seeds",
          "field": "oxalateMg",
          "before": "5–10",
          "after": "~55",
          "why": "Research check 2026-09-25: aggregator value ~470 mg/100 g conflicts with the old 5–10 mg; flagged uncertain and conservative"
        },
        {
          "id": "chia-seeds",
          "field": "riskLevel",
          "before": "LOW–MOD",
          "after": "HIGH",
          "why": "Research check 2026-09-25: aggregator value ~470 mg/100 g conflicts with the old 5–10 mg; flagged uncertain and conservative"
        },
        {
          "id": "matcha",
          "field": "added",
          "before": null,
          "after": "~34",
          "why": "Research check 2026-09-25: new entry from Research 2024 (Foods, PMC11049459)"
        },
        {
          "id": "seitan",
          "field": "added",
          "before": null,
          "after": "26–31",
          "why": "Research check 2026-09-25: new entry from Vegetarian Resource Group 2014 lab test"
        },
        {
          "id": "cashew-milk",
          "field": "added",
          "before": null,
          "after": "~30",
          "why": "Research check 2026-09-25: new entry from Borin et al. 2021 (J Ren Nutr)"
        },
        {
          "id": "rice-milk",
          "field": "added",
          "before": null,
          "after": "<1",
          "why": "Research check 2026-09-25: new entry from Borin et al. 2021 (J Ren Nutr)"
        },
        {
          "id": "coconut-milk-beverage",
          "field": "added",
          "before": null,
          "after": "0",
          "why": "Research check 2026-09-25: new entry from Borin et al. 2021 (J Ren Nutr)"
        },
        {
          "id": "pea-milk",
          "field": "added",
          "before": null,
          "after": "not measured",
          "why": "Research check 2026-09-25: new entry from Estimate (no published assay)"
        },
        {
          "id": "turmeric-supplement",
          "field": "added",
          "before": null,
          "after": "8.6",
          "why": "Research check 2026-09-25: new entry from Thaker et al. 2026 (J Endourol, Knight lab)"
        },
        {
          "id": "cinnamon-supplement",
          "field": "added",
          "before": null,
          "after": "14",
          "why": "Research check 2026-09-25: new entry from Thaker et al. 2026 (J Endourol, Knight lab)"
        },
        {
          "id": "hemp-seeds",
          "field": "added",
          "before": null,
          "after": "~17",
          "why": "Research check 2026-09-25: new entry from Aggregator values (~55 mg/100 g)"
        }
      ]
    },
    {
      "date": "2026-09-25",
      "title": "Site rebuilt as a static GitHub Pages app",
      "summary": "Rebuilt the old single-file app as a searchable static site. Curated list cleaned (duplicates removed, categories fixed), values reconciled against the Harvard Nov 2023 table, about 90 vegan-relevant Harvard entries added, per-100 g nutrition and serving weights added for the recipe builder, risk labels aligned to the documented thresholds, and the full 433-row Harvard table made searchable.",
      "changes": [
        {
          "id": "white-rice",
          "field": "removed",
          "before": "1",
          "after": null,
          "why": "superseded by white-rice-long-grain (Harvard 2023 measured value)"
        },
        {
          "id": "regular-pasta",
          "field": "removed",
          "before": "7",
          "after": null,
          "why": "superseded by spaghetti-regular-pasta (Harvard 2023 measured value)"
        },
        {
          "id": "sweet-potato-with-skin",
          "field": "removed",
          "before": "54.2",
          "after": null,
          "why": "duplicate of sweet-potato-baked-with-skin"
        },
        {
          "id": "soft-tofu-calcium-sulfate",
          "field": "removed",
          "before": "10.6",
          "after": null,
          "why": "duplicate of soft-tofu-calcium-set"
        },
        {
          "id": "textured-vegetable-protein",
          "field": "removed",
          "before": "496",
          "after": null,
          "why": "duplicate of textured-vegetable-protein-tvp"
        },
        {
          "id": "pea-protein-isolate",
          "field": "removed",
          "before": "<5",
          "after": null,
          "why": "duplicate id; merged into single pea-protein-isolate entry"
        },
        {
          "id": "maple-syrup",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Pantry, Herbs & Sweeteners",
          "why": "category correction"
        },
        {
          "id": "nutritional-yeast",
          "field": "category",
          "before": "Dried Fruit & Other",
          "after": "Pantry, Herbs & Sweeteners",
          "why": "category correction"
        },
        {
          "id": "parsley-raw",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Pantry, Herbs & Sweeteners",
          "why": "category correction"
        },
        {
          "id": "parsley-dried",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Pantry, Herbs & Sweeteners",
          "why": "category correction"
        },
        {
          "id": "pumpkin-canned",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Vegetables",
          "why": "category correction"
        },
        {
          "id": "jackfruit-canned",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Legumes & Plant Proteins",
          "why": "category correction"
        },
        {
          "id": "pea-protein-in-vegan-products",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Legumes & Plant Proteins",
          "why": "category correction"
        },
        {
          "id": "soy-protein-in-vegan-products",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Legumes & Plant Proteins",
          "why": "category correction"
        },
        {
          "id": "plant-based-burger-e-g-beyond",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Legumes & Plant Proteins",
          "why": "category correction"
        },
        {
          "id": "radishes",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Vegetables",
          "why": "category correction"
        },
        {
          "id": "cucumbers-with-without-skin",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Vegetables",
          "why": "category correction"
        },
        {
          "id": "runner-beans-boiled",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Vegetables",
          "why": "category correction"
        },
        {
          "id": "green-beans-boiled",
          "field": "category",
          "before": "Legumes & Plant Proteins",
          "after": "Vegetables",
          "why": "category correction"
        },
        {
          "id": "barley-cooked-pearled",
          "field": "category",
          "before": "Greens & Leafy Vegetables",
          "after": "Grains & Starches",
          "why": "category correction"
        },
        {
          "id": "chia-seeds",
          "field": "category",
          "before": "Dried Fruit & Other",
          "after": "Nuts & Seeds",
          "why": "category correction"
        },
        {
          "id": "avocado",
          "field": "category",
          "before": "Dried Fruit & Other",
          "after": "Fruits",
          "why": "category correction"
        },
        {
          "id": "raisins",
          "field": "category",
          "before": "Dried Fruit & Other",
          "after": "Dried Fruit",
          "why": "category correction"
        },
        {
          "id": "dates",
          "field": "category",
          "before": "Dried Fruit & Other",
          "after": "Dried Fruit",
          "why": "category correction"
        },
        {
          "id": "prunes-dried-plums",
          "field": "category",
          "before": "Dried Fruit & Other",
          "after": "Dried Fruit",
          "why": "category correction"
        },
        {
          "id": "dried-cranberries",
          "field": "category",
          "before": "Dried Fruit & Other",
          "after": "Dried Fruit",
          "why": "category correction"
        },
        {
          "id": "bread-white",
          "field": "oxalateMg",
          "before": "3",
          "after": "4.4",
          "why": "Harvard 2023 table: BREAD, WHITE 1 slice 4.4 mg (measured)"
        },
        {
          "id": "collard-greens",
          "field": "oxalateMg",
          "before": "10",
          "after": "4.9",
          "why": "Harvard 2023 table: COLLARDS, BOILED 1/2 cup 4.9 mg"
        },
        {
          "id": "broccoli",
          "field": "oxalateMg",
          "before": "2",
          "after": "6",
          "why": "Harvard 2023 table: BROCCOLI, BOILED 1/2 cup 6 mg"
        },
        {
          "id": "cabbage",
          "field": "oxalateMg",
          "before": "2",
          "after": "1.4",
          "why": "Harvard 2023 table: CABBAGE, BOILED 1/2 cup 1.4 mg (measured)"
        },
        {
          "id": "mustard-greens",
          "field": "oxalateMg",
          "before": "4",
          "after": "1.9",
          "why": "Harvard 2023 table: MUSTARD GREENS, BOILED 1/2 cup 1.9 mg"
        },
        {
          "id": "romaine-lettuce",
          "field": "oxalateMg",
          "before": "2.5",
          "after": "0.3",
          "why": "Harvard 2023 table: LETTUCE, ROMAINE 1 cup 0.3 mg (measured)"
        },
        {
          "id": "spinach",
          "field": "oxalateMg",
          "before": "547",
          "after": "547.4",
          "why": "Harvard 2023 table (measured)"
        },
        {
          "id": "soft-tofu-calcium-set",
          "field": "serving",
          "before": "½ cup",
          "after": "3.5 oz (100 g)",
          "why": "Harvard 2023 table: TOFU, SOFT 3.5 oz 10.6 mg (measured); serving corrected from 1/2 cup"
        },
        {
          "id": "edamame",
          "field": "oxalateMg",
          "before": "15",
          "after": "48",
          "why": "Harvard 2023 table: SOYBEANS, GREEN, BOILED 1/2 cup 48 mg (edamame = green soybeans). Old value 15 mg came from an older list."
        },
        {
          "id": "edamame",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "Harvard 2023 table: SOYBEANS, GREEN, BOILED 1/2 cup 48 mg (edamame = green soybeans). Old value 15 mg came from an older list."
        },
        {
          "id": "coconut-dried",
          "field": "serving",
          "before": "1 oz",
          "after": "1 tbsp shredded",
          "why": "Harvard 2023 table: COCONUT MEAT, DRIED 1 tbsp 0.1 mg (measured)"
        },
        {
          "id": "sunflower-seeds",
          "field": "serving",
          "before": "1 oz",
          "after": "¼ cup kernels",
          "why": "Harvard 2023 table: SUNFLOWER SEED KERNELS, OIL ROASTED 1/4 cup 8 mg (dried kernels 2.9 mg, measured)"
        },
        {
          "id": "flaxseeds",
          "field": "serving",
          "before": "1 oz",
          "after": "1 tbsp ground",
          "why": "Harvard 2023 table: FLAXSEED, GROUND 1 tbsp 0.2 mg (measured)"
        },
        {
          "id": "flaxseeds",
          "field": "oxalateMg",
          "before": "13",
          "after": "0.2",
          "why": "Harvard 2023 table: FLAXSEED, GROUND 1 tbsp 0.2 mg (measured)"
        },
        {
          "id": "flaxseeds",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "LOW",
          "why": "Harvard 2023 table: FLAXSEED, GROUND 1 tbsp 0.2 mg (measured)"
        },
        {
          "id": "pecans",
          "field": "oxalateMg",
          "before": "16",
          "after": "15.7",
          "why": "Harvard 2023 table: PECANS, OIL ROASTED 1 oz 15.7 mg (measured)"
        },
        {
          "id": "almonds",
          "field": "oxalateMg",
          "before": "122",
          "after": "72",
          "why": "Harvard 2023 table: ALMONDS, OIL ROASTED 1 oz 72 mg (measured). Older lists: 122 mg."
        },
        {
          "id": "almonds",
          "field": "riskLevel",
          "before": "VERY HIGH",
          "after": "HIGH",
          "why": "Harvard 2023 table: ALMONDS, OIL ROASTED 1 oz 72 mg (measured). Older lists: 122 mg."
        },
        {
          "id": "whole-wheat-pasta",
          "field": "oxalateMg",
          "before": "46",
          "after": "46.1",
          "why": "Harvard 2023 table: SPAGHETTI, COOKED WHOLE WHEAT 1 cup 46.1 mg"
        },
        {
          "id": "quinoa",
          "field": "oxalateMg",
          "before": "54",
          "after": "54.4",
          "why": "Harvard 2023 table: QUINOA, COOKED 1 cup 54.4 mg"
        },
        {
          "id": "buckwheat-groats",
          "field": "serving",
          "before": "½ cup cooked",
          "after": "1 cup cooked",
          "why": "Harvard 2023 table: BUCKWHEAT GROATS, ROASTED 1 cup 132.6 mg (measured)"
        },
        {
          "id": "buckwheat-groats",
          "field": "oxalateMg",
          "before": "130",
          "after": "132.6",
          "why": "Harvard 2023 table: BUCKWHEAT GROATS, ROASTED 1 cup 132.6 mg (measured)"
        },
        {
          "id": "corn-based-cereals",
          "field": "oxalateMg",
          "before": "5",
          "after": "0.8",
          "why": "Harvard 2023 table: CORN FLAKES 1 1/2 cup 0.8 mg (measured)"
        },
        {
          "id": "corn-based-cereals",
          "field": "serving",
          "before": "1 cup",
          "after": "1½ cups",
          "why": "Harvard 2023 table: CORN FLAKES 1 1/2 cup 0.8 mg (measured)"
        },
        {
          "id": "peaches",
          "field": "oxalateMg",
          "before": "4",
          "after": "0.4",
          "why": "Harvard 2023 table: PEACHES, RAW one 0.4 mg (measured)"
        },
        {
          "id": "pears",
          "field": "oxalateMg",
          "before": "3",
          "after": "1.8",
          "why": "Harvard 2023 table: PEARS, RAW one 1.8 mg (measured)"
        },
        {
          "id": "oranges",
          "field": "oxalateMg",
          "before": "14",
          "after": "23.3",
          "why": "Harvard 2023 table: ORANGES, RAW one 23.3 mg (measured). Citrate still offsets."
        },
        {
          "id": "lemons",
          "field": "oxalateMg",
          "before": "3",
          "after": "2.7",
          "why": "Harvard 2023 table: JUICE, LEMON, RAW 1 tbsp 0.9 mg"
        },
        {
          "id": "lemons",
          "field": "serving",
          "before": "juice of 1",
          "after": "juice of 1 (3 tbsp)",
          "why": "Harvard 2023 table: JUICE, LEMON, RAW 1 tbsp 0.9 mg"
        },
        {
          "id": "blueberries",
          "field": "oxalateMg",
          "before": "8",
          "after": "18.5",
          "why": "Harvard 2023 table: BLUEBERRIES 1/2 cup 18.5 mg (measured)"
        },
        {
          "id": "blueberries",
          "field": "riskLevel",
          "before": "LOW",
          "after": "MODERATE",
          "why": "Harvard 2023 table: BLUEBERRIES 1/2 cup 18.5 mg (measured)"
        },
        {
          "id": "grapes",
          "field": "oxalateMg",
          "before": "2",
          "after": "1.2",
          "why": "Harvard 2023 table: GRAPES 1/2 cup 1.2 mg (measured)"
        },
        {
          "id": "cherries",
          "field": "oxalateMg",
          "before": "1.5",
          "after": "1.7",
          "why": "Harvard 2023 table: CHERRIES, SWEET, RAW 1/2 cup 1.7 mg"
        },
        {
          "id": "melon-cantaloupe",
          "field": "serving",
          "before": "½ cup",
          "after": "¼ melon",
          "why": "Harvard 2023 table: CANTALOUPE 1/4 melon 1.4 mg (measured)"
        },
        {
          "id": "melon-cantaloupe",
          "field": "oxalateMg",
          "before": "1.5",
          "after": "1.4",
          "why": "Harvard 2023 table: CANTALOUPE 1/4 melon 1.4 mg (measured)"
        },
        {
          "id": "cranberries",
          "field": "serving",
          "before": "½ cup",
          "after": "1 cup raw",
          "why": "Harvard 2023 table: CRANBERRIES, RAW 1 cup 0.3 mg"
        },
        {
          "id": "coffee-brewed",
          "field": "oxalateMg",
          "before": "1",
          "after": "1.7",
          "why": "Harvard 2023 table: COFFEE, BREWED 8 oz 1.7 mg (measured)"
        },
        {
          "id": "fortified-oat-milk",
          "field": "oxalateMg",
          "before": "5",
          "after": "0.2",
          "why": "Harvard 2023 table: PLANT-BASED MILK (EXCLUDES SOY, ALMOND) 1 cup 0.2 mg"
        },
        {
          "id": "fortified-oj",
          "field": "oxalateMg",
          "before": "7",
          "after": "1.5",
          "why": "Harvard 2023 table: JUICE, ORANGE 6 oz 1.1 mg (measured); scaled to 8 oz"
        },
        {
          "id": "green-tea",
          "field": "oxalateMg",
          "before": "14",
          "after": "6.4",
          "why": "Harvard 2023 table: TEA, UNSWEETENED GREEN 1 cup 6.4 mg"
        },
        {
          "id": "green-tea",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "LOW",
          "why": "Harvard 2023 table: TEA, UNSWEETENED GREEN 1 cup 6.4 mg"
        },
        {
          "id": "black-tea",
          "field": "oxalateMg",
          "before": "14",
          "after": "6.4",
          "why": "Harvard 2023 table: TEA, BREWED 8 oz 6.4 mg (measured)"
        },
        {
          "id": "black-tea",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "LOW",
          "why": "Harvard 2023 table: TEA, BREWED 8 oz 6.4 mg (measured)"
        },
        {
          "id": "almond-milk",
          "field": "oxalateMg",
          "before": "27",
          "after": "27.1",
          "why": "Harvard 2023 table: ALMOND MILK 8 oz 27.1 mg"
        },
        {
          "id": "regular-soy-milk",
          "field": "name",
          "before": "Regular soy milk",
          "after": "Soy milk",
          "why": "Harvard 2023 table: SOYMILK, FORTIFIED 8 oz 9.6 mg; old value 336 mg (SIU list) retained in notes as disputed"
        },
        {
          "id": "regular-soy-milk",
          "field": "serving",
          "before": "8.5 oz",
          "after": "8 oz",
          "why": "Harvard 2023 table: SOYMILK, FORTIFIED 8 oz 9.6 mg; old value 336 mg (SIU list) retained in notes as disputed"
        },
        {
          "id": "regular-soy-milk",
          "field": "oxalateMg",
          "before": "336",
          "after": "9.6",
          "why": "Harvard 2023 table: SOYMILK, FORTIFIED 8 oz 9.6 mg; old value 336 mg (SIU list) retained in notes as disputed"
        },
        {
          "id": "regular-soy-milk",
          "field": "riskLevel",
          "before": "VERY HIGH",
          "after": "MODERATE",
          "why": "Harvard 2023 table: SOYMILK, FORTIFIED 8 oz 9.6 mg; old value 336 mg (SIU list) retained in notes as disputed"
        },
        {
          "id": "soy-sauce",
          "field": "oxalateMg",
          "before": "1",
          "after": "2.9",
          "why": "Harvard 2023 table: SAUCE, SOY 1 tbsp 2.9 mg (measured)"
        },
        {
          "id": "tomato-sauce-canned",
          "field": "oxalateMg",
          "before": "5",
          "after": "5.2",
          "why": "Harvard 2023 table: MARINARA 1/2 cup 10.4 mg (measured); scaled to 1/4 cup"
        },
        {
          "id": "tomato-paste",
          "field": "oxalateMg",
          "before": "3",
          "after": "12.3",
          "why": "Harvard 2023 table: TOMATO PASTE 1/4 cup 24.5 mg; scaled to 2 tbsp"
        },
        {
          "id": "tomato-paste",
          "field": "riskLevel",
          "before": "LOW",
          "after": "MODERATE",
          "why": "Harvard 2023 table: TOMATO PASTE 1/4 cup 24.5 mg; scaled to 2 tbsp"
        },
        {
          "id": "green-peas-frozen-cooked",
          "field": "oxalateMg",
          "before": "10",
          "after": "0.5",
          "why": "Harvard 2023 table: PEAS, GREEN, BOILED 1/2 cup 0.5 mg (measured)"
        },
        {
          "id": "pea-protein-isolate",
          "field": "name",
          "before": "Pea protein isolate",
          "after": "Pea protein isolate (powder)",
          "why": "merged two conflicting duplicate entries"
        },
        {
          "id": "pea-protein-isolate",
          "field": "serving",
          "before": "1 scoop (~30g)",
          "after": "1 scoop (25–30 g)",
          "why": "merged two conflicting duplicate entries"
        },
        {
          "id": "pea-protein-isolate",
          "field": "oxalateMg",
          "before": "5–15",
          "after": "<5–15",
          "why": "merged two conflicting duplicate entries"
        },
        {
          "id": "tahini",
          "field": "added",
          "before": null,
          "after": "16.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "peanut-butter",
          "field": "added",
          "before": null,
          "after": "19.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "peanuts",
          "field": "added",
          "before": null,
          "after": "28.8",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "almond-butter",
          "field": "added",
          "before": null,
          "after": "41.6",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "sunflower-seeds-dried",
          "field": "added",
          "before": null,
          "after": "2.9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "pumpkin-seed-kernels-dried",
          "field": "added",
          "before": null,
          "after": "7.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "dark-chocolate",
          "field": "added",
          "before": null,
          "after": "67.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "bulgur",
          "field": "added",
          "before": null,
          "after": "85.9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "wheat-berries",
          "field": "added",
          "before": null,
          "after": "97.6",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "corn-grits",
          "field": "added",
          "before": null,
          "after": "45.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cream-of-wheat",
          "field": "added",
          "before": null,
          "after": "17.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "oat-bran",
          "field": "added",
          "before": null,
          "after": "0",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "wheat-bran",
          "field": "added",
          "before": null,
          "after": "7.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "wheat-germ",
          "field": "added",
          "before": null,
          "after": "1.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "bread-whole-wheat",
          "field": "added",
          "before": null,
          "after": "13.6",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "bread-multigrain",
          "field": "added",
          "before": null,
          "after": "18",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "bread-rye",
          "field": "added",
          "before": null,
          "after": "6.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "bread-oat",
          "field": "added",
          "before": null,
          "after": "6.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "english-muffin-whole-wheat",
          "field": "added",
          "before": null,
          "after": "28.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "tortillas-corn",
          "field": "added",
          "before": null,
          "after": "10",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "tortillas-flour",
          "field": "added",
          "before": null,
          "after": "9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "crackers-whole-wheat",
          "field": "added",
          "before": null,
          "after": "15",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "crackers-regular",
          "field": "added",
          "before": null,
          "after": "5.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "popcorn-air-popped",
          "field": "added",
          "before": null,
          "after": "3.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "pretzels",
          "field": "added",
          "before": null,
          "after": "6.9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "potato-chips",
          "field": "added",
          "before": null,
          "after": "12.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "corn-chips-tortilla",
          "field": "added",
          "before": null,
          "after": "7.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cereal-corn-flakes",
          "field": "added",
          "before": null,
          "after": "0.8",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cereal-rice-krispies",
          "field": "added",
          "before": null,
          "after": "3.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cereal-cheerios",
          "field": "added",
          "before": null,
          "after": "7.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cereal-raisin-bran",
          "field": "added",
          "before": null,
          "after": "46.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cereal-shredded-wheat",
          "field": "added",
          "before": null,
          "after": "41.8",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cereal-granola",
          "field": "added",
          "before": null,
          "after": "13",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "potato-baked-whole",
          "field": "added",
          "before": null,
          "after": "91.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "potato-mashed-home",
          "field": "added",
          "before": null,
          "after": "11.6",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "potato-salad",
          "field": "added",
          "before": null,
          "after": "16.9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "sweet-potato-fries",
          "field": "added",
          "before": null,
          "after": "37.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "sweet-potato-canned",
          "field": "added",
          "before": null,
          "after": "14.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "asparagus",
          "field": "added",
          "before": null,
          "after": "8.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "winter-squash",
          "field": "added",
          "before": null,
          "after": "4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "beets-canned",
          "field": "added",
          "before": null,
          "after": "76.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "bell-peppers",
          "field": "added",
          "before": null,
          "after": "2.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "chili-peppers-canned",
          "field": "added",
          "before": null,
          "after": "2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "scallions",
          "field": "added",
          "before": null,
          "after": "0",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "kale-raw",
          "field": "added",
          "before": null,
          "after": "0.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "seaweed",
          "field": "added",
          "before": null,
          "after": "0.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "pickles-sweet",
          "field": "added",
          "before": null,
          "after": "1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "salsa",
          "field": "added",
          "before": null,
          "after": "2.8",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "marinara-sauce",
          "field": "added",
          "before": null,
          "after": "10.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "ketchup",
          "field": "added",
          "before": null,
          "after": "1.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "mustard-yellow",
          "field": "added",
          "before": null,
          "after": "0.6",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "garlic-powder",
          "field": "added",
          "before": null,
          "after": "0.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "sugar-granulated",
          "field": "added",
          "before": null,
          "after": "0",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "molasses",
          "field": "added",
          "before": null,
          "after": "0.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "jam",
          "field": "added",
          "before": null,
          "after": "0.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "pancake-syrup",
          "field": "added",
          "before": null,
          "after": "0.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "stevia",
          "field": "added",
          "before": null,
          "after": "0",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "oil-vinegar-dressing",
          "field": "added",
          "before": null,
          "after": "0.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "apples",
          "field": "added",
          "before": null,
          "after": "0.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "strawberries",
          "field": "added",
          "before": null,
          "after": "1.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "mango",
          "field": "added",
          "before": null,
          "after": "0.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "watermelon",
          "field": "added",
          "before": null,
          "after": "0.6",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "grapefruit",
          "field": "added",
          "before": null,
          "after": "13.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "tangerines",
          "field": "added",
          "before": null,
          "after": "15.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "figs-raw",
          "field": "added",
          "before": null,
          "after": "9.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "figs-dried",
          "field": "added",
          "before": null,
          "after": "5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "plums",
          "field": "added",
          "before": null,
          "after": "0.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "apricots",
          "field": "added",
          "before": null,
          "after": "0.1",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "dried-apricots",
          "field": "added",
          "before": null,
          "after": "0.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "dried-apples",
          "field": "added",
          "before": null,
          "after": "0.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "nectarines",
          "field": "added",
          "before": null,
          "after": "0.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "papaya",
          "field": "added",
          "before": null,
          "after": "0.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "olives",
          "field": "added",
          "before": null,
          "after": "5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-apple",
          "field": "added",
          "before": null,
          "after": "1.5",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-carrot",
          "field": "added",
          "before": null,
          "after": "28.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-tomato",
          "field": "added",
          "before": null,
          "after": "10.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-grape",
          "field": "added",
          "before": null,
          "after": "2.4",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-cranberry",
          "field": "added",
          "before": null,
          "after": "1.7",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-pomegranate",
          "field": "added",
          "before": null,
          "after": "1.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-pineapple",
          "field": "added",
          "before": null,
          "after": "1.9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "juice-grapefruit",
          "field": "added",
          "before": null,
          "after": "2.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "lemonade",
          "field": "added",
          "before": null,
          "after": "22.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "cola",
          "field": "added",
          "before": null,
          "after": "0",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "coffee-drinks",
          "field": "added",
          "before": null,
          "after": "13",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "beer",
          "field": "added",
          "before": null,
          "after": "3.9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "wine-red",
          "field": "added",
          "before": null,
          "after": "1.2",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "soy-burger",
          "field": "added",
          "before": null,
          "after": "11.9",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "lentil-soup",
          "field": "added",
          "before": null,
          "after": "16.8",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "miso-soup",
          "field": "added",
          "before": null,
          "after": "58.3",
          "why": "new entry from Harvard Nov 2023 table"
        },
        {
          "id": "french-fries-deep-fried",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "risk level aligned to the site thresholds (36 mg)"
        },
        {
          "id": "fingerling-potatoes-boiled",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "risk level aligned to the site thresholds (32 mg)"
        },
        {
          "id": "white-great-northern-beans",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "risk level aligned to the site thresholds (38 mg)"
        },
        {
          "id": "hummus-commercial",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "risk level aligned to the site thresholds (39.1 mg)"
        },
        {
          "id": "whole-wheat-flour",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "risk level aligned to the site thresholds (40 mg)"
        },
        {
          "id": "spelt-flour",
          "field": "riskLevel",
          "before": "MODERATE",
          "after": "HIGH",
          "why": "risk level aligned to the site thresholds (38 mg)"
        }
      ]
    }
  ]
};
