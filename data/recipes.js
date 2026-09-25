// Recipe database.
// Add recipes with the in-app Recipe Builder (copy the JSON it produces) or ask Claude Code to add one.
// Keep the file as `const RECIPES_META = {...}; const RECIPES_DB = [...]` (parsed as JSON by tools).
// Last updated: 2026-09-25

const RECIPES_META = {
  "lastUpdated": "2026-09-25",
  "count": 6
};

const RECIPES_DB = [
  {
    "id": "lentil-vegetable-soup",
    "name": "Lentil Vegetable Soup",
    "servings": 6,
    "prepTime": "15 min",
    "cookTime": "35 min",
    "tags": [
      "soup",
      "high-protein",
      "meal-prep"
    ],
    "ingredients": [
      {
        "name": "Brown lentils (dry)",
        "amount": "1 cup",
        "foodId": "lentils-boiled",
        "oxalateMg": 4,
        "oxalateSource": "FOODS_DB"
      },
      {
        "name": "Carrots, diced",
        "amount": "2 medium",
        "foodId": null,
        "oxalateMg": 4,
        "oxalateSource": "estimated"
      },
      {
        "name": "Broccoli florets",
        "amount": "2 cups",
        "foodId": "broccoli",
        "oxalateMg": 4,
        "oxalateSource": "FOODS_DB"
      },
      {
        "name": "Onion, diced",
        "amount": "1 medium",
        "foodId": null,
        "oxalateMg": 3,
        "oxalateSource": "estimated"
      },
      {
        "name": "Garlic, minced",
        "amount": "4 cloves",
        "foodId": null,
        "oxalateMg": 0.5,
        "oxalateSource": "estimated"
      },
      {
        "name": "Vegetable broth",
        "amount": "6 cups",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Olive oil",
        "amount": "2 tbsp",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Cumin",
        "amount": "1 tsp",
        "foodId": null,
        "oxalateMg": 0.5,
        "oxalateSource": "estimated"
      },
      {
        "name": "Salt and pepper",
        "amount": "to taste",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      }
    ],
    "instructions": [
      "Heat olive oil in a large pot over medium heat. Sauté onion until softened, about 4 minutes.",
      "Add garlic and cumin, cook for 30 seconds until fragrant.",
      "Add lentils, carrots, and vegetable broth. Bring to a boil, then reduce to a simmer.",
      "Cook for 20 minutes until lentils are nearly tender.",
      "Add broccoli florets and cook for another 8–10 minutes until everything is tender.",
      "Season with salt and pepper. Serve hot."
    ],
    "nutrition": {
      "calories": 245,
      "protein": 15,
      "fat": 5,
      "carbs": 38,
      "fiber": 12,
      "calcium": 62
    },
    "totalOxalateMg": 16,
    "oxalatePerServing": 2.7,
    "riskLevel": "LOW",
    "oxalateNotes": "Very low oxalate per serving. Lentils contribute the most but are well within safe range when spread across 6 servings. Boiling lentils reduces oxalate further.",
    "source": "original",
    "sourceUrl": null,
    "dateAdded": "2026-04-01"
  },
  {
    "id": "chickpea-kale-stir-fry",
    "name": "Chickpea & Kale Stir-Fry",
    "servings": 4,
    "prepTime": "10 min",
    "cookTime": "15 min",
    "tags": [
      "quick",
      "high-protein",
      "high-calcium"
    ],
    "ingredients": [
      {
        "name": "Chickpeas (cooked or canned, drained)",
        "amount": "1.5 cups",
        "foodId": "chickpeas",
        "oxalateMg": 9,
        "oxalateSource": "FOODS_DB"
      },
      {
        "name": "Kale, chopped",
        "amount": "4 cups",
        "foodId": "kale",
        "oxalateMg": 4,
        "oxalateSource": "FOODS_DB"
      },
      {
        "name": "Red bell pepper, sliced",
        "amount": "1 large",
        "foodId": null,
        "oxalateMg": 2,
        "oxalateSource": "estimated"
      },
      {
        "name": "Garlic, minced",
        "amount": "3 cloves",
        "foodId": null,
        "oxalateMg": 0.4,
        "oxalateSource": "estimated"
      },
      {
        "name": "Soy sauce (low sodium)",
        "amount": "2 tbsp",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Sesame oil",
        "amount": "1 tbsp",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Rice vinegar",
        "amount": "1 tbsp",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Red pepper flakes",
        "amount": "pinch",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      }
    ],
    "instructions": [
      "Heat sesame oil in a large skillet or wok over medium-high heat.",
      "Add chickpeas and cook for 3–4 minutes until they start to crisp slightly.",
      "Add bell pepper and garlic, stir-fry for 2 minutes.",
      "Add kale in batches, stirring until wilted, about 3–4 minutes.",
      "Drizzle with soy sauce and rice vinegar, toss to coat.",
      "Sprinkle with red pepper flakes and serve over rice."
    ],
    "nutrition": {
      "calories": 210,
      "protein": 11,
      "fat": 6,
      "carbs": 30,
      "fiber": 8,
      "calcium": 115
    },
    "totalOxalateMg": 15.4,
    "oxalatePerServing": 3.9,
    "riskLevel": "LOW",
    "oxalateNotes": "Low oxalate with excellent calcium from kale (41% absorption). Chickpeas are one of the safest legume options at 6 mg per cup cooked.",
    "source": "original",
    "sourceUrl": null,
    "dateAdded": "2026-04-01"
  },
  {
    "id": "tofu-bok-choy-rice-bowl",
    "name": "Tofu & Bok Choy Rice Bowl",
    "servings": 4,
    "prepTime": "15 min",
    "cookTime": "20 min",
    "tags": [
      "bowl",
      "high-calcium",
      "high-protein"
    ],
    "ingredients": [
      {
        "name": "Calcium-set firm tofu, cubed",
        "amount": "14 oz block",
        "foodId": "soft-tofu-calcium-set",
        "oxalateMg": 21,
        "oxalateSource": "FOODS_DB"
      },
      {
        "name": "Bok choy, chopped",
        "amount": "4 cups",
        "foodId": "bok-choy",
        "oxalateMg": 2,
        "oxalateSource": "FOODS_DB"
      },
      {
        "name": "White rice (cooked)",
        "amount": "3 cups",
        "foodId": "white-rice-long-grain",
        "oxalateMg": 3,
        "oxalateSource": "FOODS_DB"
      },
      {
        "name": "Soy sauce",
        "amount": "3 tbsp",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Sesame oil",
        "amount": "1 tbsp",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Rice vinegar",
        "amount": "1 tbsp",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Fresh ginger, grated",
        "amount": "1 tbsp",
        "foodId": null,
        "oxalateMg": 1,
        "oxalateSource": "estimated"
      },
      {
        "name": "Garlic, minced",
        "amount": "2 cloves",
        "foodId": null,
        "oxalateMg": 0.3,
        "oxalateSource": "estimated"
      },
      {
        "name": "Sesame seeds",
        "amount": "1 tbsp",
        "foodId": null,
        "oxalateMg": 1,
        "oxalateSource": "estimated"
      }
    ],
    "instructions": [
      "Press tofu for 10 minutes, then cut into 1-inch cubes.",
      "Heat sesame oil in a large skillet over medium-high heat. Add tofu and cook 3–4 minutes per side until golden.",
      "Remove tofu and set aside. In the same pan, add garlic and ginger, cook 30 seconds.",
      "Add bok choy and stir-fry for 2–3 minutes until stems are tender-crisp.",
      "Mix soy sauce and rice vinegar, pour over bok choy.",
      "Serve tofu and bok choy over rice. Sprinkle with sesame seeds."
    ],
    "nutrition": {
      "calories": 340,
      "protein": 18,
      "fat": 12,
      "carbs": 42,
      "fiber": 3,
      "calcium": 320
    },
    "totalOxalateMg": 28.3,
    "oxalatePerServing": 7.1,
    "riskLevel": "LOW",
    "oxalateNotes": "Moderate total oxalate but safe per serving. Tofu contributes the most — calcium-set tofu simultaneously provides excellent calcium that binds oxalate in the gut. Bok choy adds another 85 mg absorbable calcium per cup. This is an ideal calcium-with-meals bowl.",
    "source": "original",
    "sourceUrl": null,
    "dateAdded": "2026-04-01"
  },
  {
    "id": "silken-tofu-lemon-juice",
    "name": "Silken Tofu with Lemon Juice (Steamed)",
    "servings": 5,
    "prepTime": "12 hours (soak)",
    "cookTime": "35 min",
    "tags": [
      "tofu-making",
      "from-scratch",
      "high-protein",
      "basics"
    ],
    "ingredients": [
      {
        "name": "Dried soybeans",
        "amount": "1¼ cups (225g)",
        "foodId": null,
        "oxalateMg": 60,
        "oxalateSource": "estimated"
      },
      {
        "name": "Water (for blending)",
        "amount": "5 cups (1200ml)",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Lemon juice",
        "amount": "1 tbsp + 2 tsp (25ml)",
        "foodId": null,
        "oxalateMg": 0.5,
        "oxalateSource": "estimated"
      }
    ],
    "instructions": [
      "Soak dried soybeans in the fridge for about 12 hours until fully hydrated (beans will triple in size). Drain and discard soaking water.",
      "Blend soaked beans with 5 cups fresh water until well pureed — about 25 seconds in a high-speed blender, or 1–1.5 minutes in a conventional blender.",
      "Strain through a nut milk bag or cheesecloth into a large pot, squeezing the pulp (okara) until very dry. Save okara for other recipes if desired.",
      "Bring soy milk to a boil over high heat, stirring regularly to prevent scorching. Reduce to a simmer and cook for 10 minutes. You should have about 5 cups of soy milk.",
      "Let soy milk cool to room temperature (use an ice bath to speed this up). Strain once more to remove any bits of skin (yuba).",
      "Ready your steamer — get water boiling, then reduce to medium-high for steady steam.",
      "Measure 1 tsp lemon juice per cup of soy milk into heat-proof containers. Pour soy milk directly into containers over the lemon juice. The milk will start to curdle immediately.",
      "Steam containers for 10 minutes. Remove from heat and let rest for 10 minutes to firm up.",
      "Serve hot, or let cool and refrigerate for up to 3 days."
    ],
    "nutrition": {
      "calories": 60,
      "protein": 6,
      "fat": 3,
      "carbs": 3,
      "fiber": 2,
      "calcium": 25
    },
    "totalOxalateMg": 60,
    "oxalatePerServing": 12,
    "riskLevel": "MODERATE",
    "oxalateNotes": "Moderate oxalate from soybeans. About 40–60% of soybean oxalate transfers to the milk (the rest stays in the okara pulp). This version has minimal calcium since lemon juice doesn't add any — pair with a calcium-rich side to bind oxalate in the gut. Tofu made with lemon juice has a more curdled, chunky texture compared to gypsum versions.",
    "source": "Mary's Test Kitchen",
    "sourceUrl": "https://www.marystestkitchen.com/diy-silken-tofu-soy-beans-lemon-juice/",
    "dateAdded": "2026-04-03"
  },
  {
    "id": "silken-tofu-gypsum-firm",
    "name": "Firm Silken Tofu with Gypsum (Steamed)",
    "servings": 5,
    "prepTime": "12 hours (soak)",
    "cookTime": "40 min",
    "tags": [
      "tofu-making",
      "from-scratch",
      "high-protein",
      "high-calcium",
      "basics"
    ],
    "ingredients": [
      {
        "name": "Dried soybeans",
        "amount": "1¼ cups (225g)",
        "foodId": null,
        "oxalateMg": 60,
        "oxalateSource": "estimated"
      },
      {
        "name": "Water (for blending)",
        "amount": "5 cups (1200ml)",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Food-grade gypsum (calcium sulfate)",
        "amount": "1¼ tsp, firmly packed",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      }
    ],
    "instructions": [
      "Soak dried soybeans in the fridge for about 12 hours until fully hydrated (beans will triple in size). Drain and discard soaking water.",
      "Blend soaked beans with 5 cups (1200ml) fresh water until very smooth — 25–30 seconds in a high-speed blender, or 1–2 minutes in a conventional blender.",
      "Strain through a nut milk bag into a large pot, squeezing the pulp (okara) until very dry.",
      "Heat soy milk over medium heat, stirring constantly and scraping the bottom to prevent scorching. Bring to a gentle simmer and cook for 15–20 minutes. Stir any yuba (skin) back into the milk.",
      "Strain once more to remove any bits. Adjust final volume back to 1200ml with hot water if needed.",
      "Cool soy milk to room temperature or colder (ice bath speeds this up).",
      "Dissolve 1¼ tsp firmly packed gypsum in 1–2 tbsp water. Stir dissolved gypsum directly into the cooled soy milk. (Ratio: ¼ tsp packed gypsum per cup of soy milk.)",
      "Pour mixture into heat-proof containers. Place in steamer over boiling water.",
      "Steam for 15 minutes, covered. Remove and let cool slightly before serving or refrigerating.",
      "Keeps in the fridge for up to 3 days. Will weep slightly and firm up more as it sits."
    ],
    "nutrition": {
      "calories": 60,
      "protein": 6,
      "fat": 3,
      "carbs": 3,
      "fiber": 2,
      "calcium": 280
    },
    "totalOxalateMg": 60,
    "oxalatePerServing": 12,
    "riskLevel": "MODERATE",
    "oxalateNotes": "Moderate oxalate from soybeans, but gypsum (calcium sulfate) adds ~280 mg calcium per serving — this is excellent for stone formers since calcium binds oxalate in the gut. The calcium-to-oxalate ratio makes this a much better choice than the lemon juice version for kidney stone prevention. Gypsum also produces a smoother, more cohesive texture than lemon juice. Adapted from Mary's Test Kitchen GDL recipe — gypsum replaces GDL as the coagulant. Steaming method is recommended for gypsum (pour-over is unreliable with gypsum at home).",
    "source": "Mary's Test Kitchen (adapted: gypsum replaces GDL)",
    "sourceUrl": "https://www.marystestkitchen.com/how-to-make-silken-tofu-easier-firmer-with-gdl-pour-over-vs-steaming-methods/",
    "dateAdded": "2026-04-03"
  },
  {
    "id": "silken-tofu-gypsum-soft",
    "name": "Soft Silken Tofu with Gypsum (Dessert-Style)",
    "servings": 5,
    "prepTime": "12 hours (soak)",
    "cookTime": "40 min",
    "tags": [
      "tofu-making",
      "from-scratch",
      "high-calcium",
      "dessert",
      "basics"
    ],
    "ingredients": [
      {
        "name": "Dried soybeans",
        "amount": "¾ cup (130g)",
        "foodId": null,
        "oxalateMg": 35,
        "oxalateSource": "estimated"
      },
      {
        "name": "Water (for blending)",
        "amount": "5 cups (1200ml)",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      },
      {
        "name": "Food-grade gypsum (calcium sulfate)",
        "amount": "1¼ tsp, firmly packed",
        "foodId": null,
        "oxalateMg": 0,
        "oxalateSource": "estimated"
      }
    ],
    "instructions": [
      "Soak dried soybeans in the fridge for about 12 hours until fully hydrated. Drain and discard soaking water.",
      "Blend soaked beans with 5 cups (1200ml) fresh water until very smooth — 25–30 seconds in a high-speed blender, or 1–2 minutes in a conventional blender.",
      "Strain through a nut milk bag into a large pot, squeezing the pulp (okara) until very dry.",
      "Heat soy milk over medium heat, stirring constantly and scraping the bottom. Bring to a gentle simmer and cook for 15–20 minutes. Stir any yuba back in.",
      "Strain once more. Adjust final volume to 1200ml with hot water if needed.",
      "Cool soy milk to room temperature or colder.",
      "Dissolve 1¼ tsp firmly packed gypsum in 1–2 tbsp water. Stir dissolved gypsum directly into the cooled soy milk.",
      "Pour into heat-proof containers. Steam over boiling water for 15 minutes, covered.",
      "Remove and cool slightly. This version is jiggly and delicate — handle gently.",
      "Serve as dessert tofu (doufu fa) with ginger brown sugar syrup, condensed milk, or simple syrup. Keeps in the fridge for up to 3 days."
    ],
    "nutrition": {
      "calories": 35,
      "protein": 3.5,
      "fat": 1.7,
      "carbs": 1.7,
      "fiber": 1,
      "calcium": 280
    },
    "totalOxalateMg": 35,
    "oxalatePerServing": 7,
    "riskLevel": "LOW",
    "oxalateNotes": "Lower oxalate than the firm version due to using fewer soybeans (130g vs 225g). Still gets the full calcium benefit from gypsum coagulant (~280 mg/serving). This thin soy milk version produces a jiggly, delicate tofu ideal for Chinese-style desserts (doufu fa). More weeping than the firm version. Adapted from Mary's Test Kitchen GDL recipe — gypsum replaces GDL, steaming method used (recommended for gypsum reliability).",
    "source": "Mary's Test Kitchen (adapted: gypsum replaces GDL)",
    "sourceUrl": "https://www.marystestkitchen.com/how-to-make-silken-tofu-easier-firmer-with-gdl-pour-over-vs-steaming-methods/",
    "dateAdded": "2026-04-03"
  }
];
