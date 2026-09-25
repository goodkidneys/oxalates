# Recipe template

Recipes live in `data/recipes.js` as JSON objects inside `RECIPES_DB`. The easiest way to make one is
the in-app **Recipe Builder** (`#/builder`), which produces this exact structure and computes the
oxalate and nutrition numbers. This file documents the format for hand edits and for Claude sessions.

```json
{
  "id": "chickpea-kale-stir-fry",
  "name": "Chickpea & Kale Stir-Fry",
  "servings": 4,
  "prepTime": "10 min",
  "cookTime": "15 min",
  "tags": ["quick", "high-protein", "high-calcium"],
  "ingredients": [
    {
      "name": "Chickpeas (cooked or canned, drained)",
      "amount": "1.5 cups",
      "qty": 1.5,
      "unit": "cup",
      "foodId": "chickpeas",
      "harvardId": null,
      "grams": 246,
      "oxalateMg": 27,
      "oxalateSource": "FOODS_DB"
    },
    {
      "name": "Sesame oil",
      "amount": "1 tbsp",
      "qty": 1,
      "unit": "tbsp",
      "foodId": null,
      "harvardId": null,
      "grams": null,
      "oxalateMg": 0,
      "oxalateSource": "estimated"
    }
  ],
  "instructions": [
    "Heat sesame oil in a large skillet over medium-high heat.",
    "Add chickpeas and cook 3–4 minutes until they start to crisp."
  ],
  "nutrition": { "calories": 210, "protein": 11, "fat": 6, "carbs": 30, "fiber": 8, "calcium": 115 },
  "nutritionSource": "computed",
  "totalOxalateMg": 15.4,
  "oxalatePerServing": 3.9,
  "riskLevel": "LOW",
  "oxalateNotes": "Low oxalate with excellent calcium from kale.",
  "source": "original",
  "sourceUrl": null,
  "dateAdded": "2026-09-25"
}
```

## Field notes

| Field | Meaning |
|---|---|
| `id` | lowercase, hyphenated, unique |
| `ingredients[].foodId` | id from `data/foods.js` when the ingredient is in the curated list; `null` otherwise |
| `ingredients[].harvardId` | id from `data/harvard.js` (`h001`…) when matched to a Harvard row instead |
| `ingredients[].qty` + `unit` | what the builder used to scale: `serving` (multiples of the food's listed serving), `each`, `g`, `oz`, `cup`, `tbsp`, `tsp`, `ml` |
| `ingredients[].grams` | computed weight, `null` when unknown; drives nutrition |
| `ingredients[].oxalateMg` | oxalate for the amount used (not per serving of the food) |
| `ingredients[].oxalateSource` | `FOODS_DB`, `HARVARD`, `manual` (typed in), or `estimated` (no database match) |
| `nutrition` | **per serving**: calories (kcal), protein/fat/carbs/fiber (g), calcium (mg) |
| `nutritionSource` | `computed` (from per-100 g values), `manual`, or `estimated` |
| `riskLevel` | per serving: ≤10 LOW, ≤25 MODERATE, ≤50 HIGH, else VERY HIGH |
| `source` / `sourceUrl` | `"original"` for your own, otherwise the site or book name and link |

Old recipes (pre-2026) only have `name`, `amount`, `foodId`, `oxalateMg`, `oxalateSource`; the app
accepts both shapes. Run `node tools/validate.js` after editing.
