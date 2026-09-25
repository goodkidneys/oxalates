// Harvard T.H. Chan School of Public Health oxalate table, posted Nov 2023 (file OXALATE-TABLE-1_3.xlsx).
// Measurements by Dr John Knight's laboratory, University of Alabama School of Medicine.
// measured=true means the value was directly measured (the "*" in the original); others are calculated.
// Regenerate with: python3 tools/harvard_xlsx_to_js.py <xlsx>
// Last updated: 2026-09-25

const HARVARD_META = {
  "posted": "November 2023",
  "file": "OXALATE-TABLE-1_3.xlsx",
  "rows": 433,
  "importedOn": "2026-09-25",
  "sourcePage": "https://regepi.bwh.harvard.edu/health/Oxalate/files",
  "note": "Includes animal foods for completeness; the curated list is vegan-only."
};

const HARVARD_DB = [
  {
    "id": "h001",
    "group": "Cold Cereal",
    "item": "100% NATURAL GRANOLA, OATS, WHEAT & HONEY",
    "serving": "2/3 cup",
    "mg": 13,
    "measured": false
  },
  {
    "id": "h002",
    "group": "Cold Cereal",
    "item": "40% BRAN FLAKES",
    "serving": "1 cup",
    "mg": 42.7,
    "measured": true
  },
  {
    "id": "h003",
    "group": "Cold Cereal",
    "item": "ALL BRAN KELLOGGS",
    "serving": "2/3 cup",
    "mg": 34.6,
    "measured": true
  },
  {
    "id": "h004",
    "group": "Cold Cereal",
    "item": "BASIC 4",
    "serving": "1 cup",
    "mg": 11.2,
    "measured": false
  },
  {
    "id": "h005",
    "group": "Cold Cereal",
    "item": "CAP'N CRUNCH",
    "serving": "1 cup",
    "mg": 1.6,
    "measured": false
  },
  {
    "id": "h006",
    "group": "Cold Cereal",
    "item": "CHEERIOS",
    "serving": "1 1/2 cup",
    "mg": 7.4,
    "measured": true
  },
  {
    "id": "h007",
    "group": "Cold Cereal",
    "item": "CHEERIOS MULTIGRAIN",
    "serving": "1 1/3 cup",
    "mg": 5.1,
    "measured": false
  },
  {
    "id": "h008",
    "group": "Cold Cereal",
    "item": "CHEERIOS HONEY NUT",
    "serving": "1 cup",
    "mg": 6.6,
    "measured": false
  },
  {
    "id": "h009",
    "group": "Cold Cereal",
    "item": "KRAVE, CHOCOLATE",
    "serving": "1 cup",
    "mg": 14.7,
    "measured": false
  },
  {
    "id": "h010",
    "group": "Cold Cereal",
    "item": "CINNAMON TOAST CRUNCH",
    "serving": "1 cup",
    "mg": 7.2,
    "measured": true
  },
  {
    "id": "h011",
    "group": "Cold Cereal",
    "item": "COCOA PEBBLES",
    "serving": "1 cup",
    "mg": 8.8,
    "measured": false
  },
  {
    "id": "h012",
    "group": "Cold Cereal",
    "item": "COCOA PUFFS",
    "serving": "1 cup",
    "mg": 6.4,
    "measured": false
  },
  {
    "id": "h013",
    "group": "Cold Cereal",
    "item": "CORN CHEX",
    "serving": "1 1/4 cup",
    "mg": 4.9,
    "measured": true
  },
  {
    "id": "h014",
    "group": "Cold Cereal",
    "item": "CORN FLAKES",
    "serving": "1 1/2 cup",
    "mg": 0.8,
    "measured": true
  },
  {
    "id": "h015",
    "group": "Cold Cereal",
    "item": "CORN POPS",
    "serving": "1 1/3 cup",
    "mg": 0.5,
    "measured": false
  },
  {
    "id": "h016",
    "group": "Cold Cereal",
    "item": "CRACKLIN OAT BRAN",
    "serving": "3/4 cup",
    "mg": 11.6,
    "measured": false
  },
  {
    "id": "h017",
    "group": "Cold Cereal",
    "item": "CRISPIX",
    "serving": "1 1/3 cup",
    "mg": 2.3,
    "measured": false
  },
  {
    "id": "h018",
    "group": "Cold Cereal",
    "item": "FIBER ONE",
    "serving": "2/3 cup",
    "mg": 12.8,
    "measured": true
  },
  {
    "id": "h019",
    "group": "Cold Cereal",
    "item": "FIBER ONE HONEY CLUSTERS",
    "serving": "1 cup",
    "mg": 12.6,
    "measured": false
  },
  {
    "id": "h020",
    "group": "Cold Cereal",
    "item": "FROOT LOOPS",
    "serving": "1 1/3 cup",
    "mg": 4.1,
    "measured": false
  },
  {
    "id": "h021",
    "group": "Cold Cereal",
    "item": "FROSTED FLAKES",
    "serving": "1 cup",
    "mg": 1,
    "measured": false
  },
  {
    "id": "h022",
    "group": "Cold Cereal",
    "item": "FROSTED MINIWHEATS",
    "serving": "25 biscuits",
    "mg": 32.9,
    "measured": true
  },
  {
    "id": "h023",
    "group": "Cold Cereal",
    "item": "GRAPE-NUTS",
    "serving": "1/2 cup",
    "mg": 13.7,
    "measured": true
  },
  {
    "id": "h024",
    "group": "Cold Cereal",
    "item": "GREAT GRAINS CRANBERRY ALMOND CRUNCH",
    "serving": "1 cup",
    "mg": 28.2,
    "measured": true
  },
  {
    "id": "h025",
    "group": "Cold Cereal",
    "item": "GREAT GRAINS CRUNCHY PECAN",
    "serving": "3/4 cup",
    "mg": 23.1,
    "measured": true
  },
  {
    "id": "h026",
    "group": "Cold Cereal",
    "item": "GREAT GRAINS, RAISIN, DATE & PECAN",
    "serving": "3/4 cup",
    "mg": 18.6,
    "measured": false
  },
  {
    "id": "h027",
    "group": "Cold Cereal",
    "item": "HONEY BUNCHES OF OATS WITH ALMONDS",
    "serving": "1 cup",
    "mg": 7.1,
    "measured": false
  },
  {
    "id": "h028",
    "group": "Cold Cereal",
    "item": "HONEY BUNCHES OF OATS, HONEY ROASTED",
    "serving": "1 cup",
    "mg": 4,
    "measured": true
  },
  {
    "id": "h029",
    "group": "Cold Cereal",
    "item": "KASHI AUTUMN WHEAT",
    "serving": "32 biscuits",
    "mg": 32.9,
    "measured": false
  },
  {
    "id": "h030",
    "group": "Cold Cereal",
    "item": "KASHI GO",
    "serving": "3/4 cup",
    "mg": 10.7,
    "measured": false
  },
  {
    "id": "h031",
    "group": "Cold Cereal",
    "item": "KASHI HEART TO HEART",
    "serving": "1 cup",
    "mg": 6.7,
    "measured": false
  },
  {
    "id": "h032",
    "group": "Cold Cereal",
    "item": "LUCKY CHARMS",
    "serving": "1 cup",
    "mg": 5.5,
    "measured": true
  },
  {
    "id": "h033",
    "group": "Cold Cereal",
    "item": "OAT LIFE",
    "serving": "1 cup",
    "mg": 4,
    "measured": true
  },
  {
    "id": "h034",
    "group": "Cold Cereal",
    "item": "OATMEAL CRISP CRUNCHY ALMONDS",
    "serving": "1 cup",
    "mg": 26.1,
    "measured": true
  },
  {
    "id": "h035",
    "group": "Cold Cereal",
    "item": "OATMEAL SQUARES",
    "serving": "1 cup",
    "mg": 12,
    "measured": false
  },
  {
    "id": "h036",
    "group": "Cold Cereal",
    "item": "PUFFED RICE",
    "serving": "1 cup",
    "mg": 1.8,
    "measured": false
  },
  {
    "id": "h037",
    "group": "Cold Cereal",
    "item": "PUFFED WHEAT",
    "serving": "1 cup",
    "mg": 9.2,
    "measured": true
  },
  {
    "id": "h038",
    "group": "Cold Cereal",
    "item": "RAISIN BRAN",
    "serving": "1 cup",
    "mg": 46.1,
    "measured": true
  },
  {
    "id": "h039",
    "group": "Cold Cereal",
    "item": "RAISIN NUT BRAN",
    "serving": "1 cup",
    "mg": 44.8,
    "measured": false
  },
  {
    "id": "h040",
    "group": "Cold Cereal",
    "item": "REESE'S PUFFS",
    "serving": "1 cup",
    "mg": 10.6,
    "measured": false
  },
  {
    "id": "h041",
    "group": "Cold Cereal",
    "item": "RICE CHEX",
    "serving": "1 1/3 cup",
    "mg": 3.5,
    "measured": false
  },
  {
    "id": "h042",
    "group": "Cold Cereal",
    "item": "RICE KRISPIES",
    "serving": "1 1/2 cup",
    "mg": 3.1,
    "measured": true
  },
  {
    "id": "h043",
    "group": "Cold Cereal",
    "item": "SHREDDED WHEAT",
    "serving": "1 1/3 cup",
    "mg": 41.8,
    "measured": true
  },
  {
    "id": "h044",
    "group": "Cold Cereal",
    "item": "SMART START",
    "serving": "1 1/4 cup",
    "mg": 14.9,
    "measured": true
  },
  {
    "id": "h045",
    "group": "Cold Cereal",
    "item": "SPECIAL K",
    "serving": "1 1/4 cup",
    "mg": 7.3,
    "measured": true
  },
  {
    "id": "h046",
    "group": "Cold Cereal",
    "item": "SPECIAL K RED BERRIES",
    "serving": "1 cup",
    "mg": 8.2,
    "measured": false
  },
  {
    "id": "h047",
    "group": "Cold Cereal",
    "item": "TOTAL WHOLE GRAIN",
    "serving": "1 cup",
    "mg": 10.4,
    "measured": true
  },
  {
    "id": "h048",
    "group": "Cold Cereal",
    "item": "UNCLE SAM",
    "serving": "3/4 cup",
    "mg": 41.7,
    "measured": false
  },
  {
    "id": "h049",
    "group": "Cold Cereal",
    "item": "WEETABIX",
    "serving": "3 biscuits",
    "mg": 24.8,
    "measured": false
  },
  {
    "id": "h050",
    "group": "Cold Cereal",
    "item": "WHEAT CHEX",
    "serving": "1 cup",
    "mg": 15.3,
    "measured": false
  },
  {
    "id": "h051",
    "group": "Cold Cereal",
    "item": "WHEAT GERM TOASTED PLAIN",
    "serving": "1 tbsp",
    "mg": 1.4,
    "measured": true
  },
  {
    "id": "h052",
    "group": "Cold Cereal",
    "item": "WHEATIES",
    "serving": "1 cup",
    "mg": 9.4,
    "measured": false
  },
  {
    "id": "h053",
    "group": "Hot Cereal",
    "item": "CORN GRITS, REGULAR QUICK ENRICHED, COOKED WITH WATER,NO SALT",
    "serving": "1 cup",
    "mg": 45.2,
    "measured": false
  },
  {
    "id": "h054",
    "group": "Hot Cereal",
    "item": "CREAM OF WHEAT, QUICK, COOKED WITH WATER, NO SALT",
    "serving": "1 cup",
    "mg": 17.7,
    "measured": true
  },
  {
    "id": "h055",
    "group": "Hot Cereal",
    "item": "OATMEAL, QUAKER INSTANT SWEETNED",
    "serving": "2/3 cup",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h056",
    "group": "Hot Cereal",
    "item": "OATMEAL, QUAKER MULTIGRAIN, COOKED WITH WATER, NO SALT",
    "serving": "1 cup",
    "mg": 21.7,
    "measured": false
  },
  {
    "id": "h057",
    "group": "Hot Cereal",
    "item": "OATS, REGULAR QUICK INSTANT UNENRICHED, COOKED WITH WATER, NO SALT",
    "serving": "1 cup",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h058",
    "group": "Beverages",
    "item": "BEER REGULAR, LIGHT, HARD CIDER",
    "serving": "12 oz",
    "mg": 3.9,
    "measured": true
  },
  {
    "id": "h059",
    "group": "Beverages",
    "item": "BOOST",
    "serving": "8 oz",
    "mg": 21.1,
    "measured": false
  },
  {
    "id": "h060",
    "group": "Beverages",
    "item": "CARBONATED BEVERAGE WITH SUGAR WITHOUT CAFFEINE",
    "serving": "12 oz",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h061",
    "group": "Beverages",
    "item": "CARNATION INSTANT BREAKFAST, PREPARED",
    "serving": "8 oz",
    "mg": 7.3,
    "measured": true
  },
  {
    "id": "h062",
    "group": "Beverages",
    "item": "COFFEE DRINKS, CAPPUCCINO, LATTE, MOCHA, FRAPPUCINO",
    "serving": "12 oz",
    "mg": 13,
    "measured": false
  },
  {
    "id": "h063",
    "group": "Beverages",
    "item": "COFFEE, BREWED",
    "serving": "8 oz",
    "mg": 1.7,
    "measured": true
  },
  {
    "id": "h064",
    "group": "Beverages",
    "item": "COFFEE, PREPARED INSTANT DECAF",
    "serving": "8 oz",
    "mg": 2.2,
    "measured": true
  },
  {
    "id": "h065",
    "group": "Beverages",
    "item": "COLA, CAFFEINATED",
    "serving": "12 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h066",
    "group": "Beverages",
    "item": "DIET SODA NO CAFFEINE",
    "serving": "12 oz",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h067",
    "group": "Beverages",
    "item": "DIET SODA WITH CAFFEINE",
    "serving": "12 oz",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h068",
    "group": "Beverages",
    "item": "ENERGY DARK, RED BULL",
    "serving": "8.3 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h069",
    "group": "Beverages",
    "item": "ENERGY DARK, RED BULL, SUGAR FREE, WITH ADDED CAFFEINE",
    "serving": "8.3 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h070",
    "group": "Beverages",
    "item": "ENSURE NUTRITIONAL SUPPLEMENT",
    "serving": "8 oz",
    "mg": 2,
    "measured": false
  },
  {
    "id": "h071",
    "group": "Beverages",
    "item": "ENSURE PLUS NUTRITION SHAKE",
    "serving": "8 oz",
    "mg": 12.3,
    "measured": false
  },
  {
    "id": "h072",
    "group": "Beverages",
    "item": "FRUIT SMOOTHIE",
    "serving": "16 oz",
    "mg": 9.3,
    "measured": false
  },
  {
    "id": "h073",
    "group": "Beverages",
    "item": "GATORADE DRINK, FRUIT FLAVORED",
    "serving": "12 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h074",
    "group": "Beverages",
    "item": "JUICE, APPLE, UNSWEETENED",
    "serving": "7 oz",
    "mg": 1.5,
    "measured": true
  },
  {
    "id": "h075",
    "group": "Beverages",
    "item": "JUICE, APRICOT",
    "serving": "8 oz",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h076",
    "group": "Beverages",
    "item": "JUICE, CARROT, CANNED",
    "serving": "1 cup",
    "mg": 28.3,
    "measured": false
  },
  {
    "id": "h077",
    "group": "Beverages",
    "item": "JUICE, CITRUS FRUIT FROM FROZEN CONCENTRATE, WATER ADDED",
    "serving": "12 oz",
    "mg": 4.5,
    "measured": false
  },
  {
    "id": "h078",
    "group": "Beverages",
    "item": "JUICE, CRANBERRY COCKTAIL BOTTLED",
    "serving": "6 oz",
    "mg": 1.7,
    "measured": true
  },
  {
    "id": "h079",
    "group": "Beverages",
    "item": "JUICE, GRAPE, CANNED OR BOTTLED, UNSWEETENED, WITH ADDED VITAMIN C & CALCIUM",
    "serving": "6 oz",
    "mg": 2.4,
    "measured": false
  },
  {
    "id": "h080",
    "group": "Beverages",
    "item": "JUICE, GRAPEFRUIT",
    "serving": "6 oz",
    "mg": 2.2,
    "measured": true
  },
  {
    "id": "h081",
    "group": "Beverages",
    "item": "JUICE, LEMON, RAW",
    "serving": "1 tbsp",
    "mg": 0.9,
    "measured": false
  },
  {
    "id": "h082",
    "group": "Beverages",
    "item": "JUICE, MANGO",
    "serving": "1 cup",
    "mg": 1,
    "measured": false
  },
  {
    "id": "h083",
    "group": "Beverages",
    "item": "JUICE, ORANGE , CHILLED, INCLUDED FROM CONCENTRATE, WITH ADDED CALCIUM & VITAMIN D",
    "serving": "6 oz",
    "mg": 1.1,
    "measured": false
  },
  {
    "id": "h084",
    "group": "Beverages",
    "item": "JUICE, ORANGE, UNSWEETENED FROZEN, PREPARED WITH WATER",
    "serving": "6 oz",
    "mg": 1.1,
    "measured": true
  },
  {
    "id": "h085",
    "group": "Beverages",
    "item": "JUICE, PINEAPPLE, CANNED, UNSWEETENED",
    "serving": "6 oz",
    "mg": 1.9,
    "measured": true
  },
  {
    "id": "h086",
    "group": "Beverages",
    "item": "JUICE, POMEGRANATE",
    "serving": "6 oz",
    "mg": 1.3,
    "measured": false
  },
  {
    "id": "h087",
    "group": "Beverages",
    "item": "JUICE, TOMATO, CANNED, SALTED",
    "serving": "6 oz",
    "mg": 10.7,
    "measured": true
  },
  {
    "id": "h088",
    "group": "Beverages",
    "item": "JUICE, VEGETABLE, CANNED",
    "serving": "6 oz",
    "mg": 13.7,
    "measured": false
  },
  {
    "id": "h089",
    "group": "Beverages",
    "item": "LEMONADE, FROZEN WHITE FROM CONCENTRATE, WATER ADDED",
    "serving": "12 oz",
    "mg": 22.3,
    "measured": true
  },
  {
    "id": "h090",
    "group": "Beverages",
    "item": "LEMONADE, LOW CALORIE",
    "serving": "12 oz",
    "mg": 1.4,
    "measured": true
  },
  {
    "id": "h091",
    "group": "Beverages",
    "item": "PAPAYA, CANNED NECTAR",
    "serving": "1 cup",
    "mg": 0.8,
    "measured": false
  },
  {
    "id": "h092",
    "group": "Beverages",
    "item": "POWERADE ZERO",
    "serving": "12 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h093",
    "group": "Beverages",
    "item": "SLIM FAST",
    "serving": "11 oz",
    "mg": 36.7,
    "measured": false
  },
  {
    "id": "h094",
    "group": "Beverages",
    "item": "TEA, BREWED",
    "serving": "8 oz",
    "mg": 6.4,
    "measured": true
  },
  {
    "id": "h095",
    "group": "Beverages",
    "item": "TEA, DIET ICED READY TO DRINK",
    "serving": "12 oz",
    "mg": 9.6,
    "measured": false
  },
  {
    "id": "h096",
    "group": "Beverages",
    "item": "TEA, INSTANT LEMON FLAVORED, SUGAR SWEETENED, POWDER",
    "serving": "4.5 tsp dry",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h097",
    "group": "Beverages",
    "item": "TEA, UNSWEETENED GREEN",
    "serving": "1 cup",
    "mg": 6.4,
    "measured": false
  },
  {
    "id": "h098",
    "group": "Beverages",
    "item": "VITAMIN WATER, SUGARED WITH ADDED NUTRIENTS",
    "serving": "8 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h099",
    "group": "Beverages",
    "item": "VITAMIN WATER, SUGAR-FREE",
    "serving": "8oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h100",
    "group": "Beverages",
    "item": "WATER, TAP",
    "serving": "8 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h101",
    "group": "Beverages",
    "item": "WHITE & DARK SPIRITS, HARD SELTZER & MIXED COCKTAIL",
    "serving": "1 shot or 1 1/2 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h102",
    "group": "Beverages",
    "item": "WINE, RED",
    "serving": "5 oz",
    "mg": 1.2,
    "measured": true
  },
  {
    "id": "h103",
    "group": "Beverages",
    "item": "WINE, WHITE",
    "serving": "5 oz",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h104",
    "group": "Beans and Lentils",
    "item": "BEANS, BAKED, CANNED, PLAIN OR VEGETARIAN",
    "serving": "1/2 cup",
    "mg": 57.5,
    "measured": false
  },
  {
    "id": "h105",
    "group": "Beans and Lentils",
    "item": "BEANS, BLACK, BOILED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 10.5,
    "measured": true
  },
  {
    "id": "h106",
    "group": "Beans and Lentils",
    "item": "BEANS, NAVY, CANNED",
    "serving": "1/2 cup",
    "mg": 96.3,
    "measured": true
  },
  {
    "id": "h107",
    "group": "Beans and Lentils",
    "item": "BEANS, RED KIDNEY, BOILED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 9.9,
    "measured": true
  },
  {
    "id": "h108",
    "group": "Beans and Lentils",
    "item": "BEANS, REFRIED, CANNED, TRADITIONAL STYLE",
    "serving": "1/2 cup",
    "mg": 59.6,
    "measured": false
  },
  {
    "id": "h109",
    "group": "Beans and Lentils",
    "item": "BURGER, PLANT-BASED",
    "serving": "1 patty",
    "mg": 57.9,
    "measured": true
  },
  {
    "id": "h110",
    "group": "Beans and Lentils",
    "item": "BURGER, SOY",
    "serving": "3.5 oz",
    "mg": 11.9,
    "measured": true
  },
  {
    "id": "h111",
    "group": "Beans and Lentils",
    "item": "BURGER, VEGETABLE",
    "serving": "one",
    "mg": 5,
    "measured": false
  },
  {
    "id": "h112",
    "group": "Beans and Lentils",
    "item": "HUMMUS, COMMERCIAL",
    "serving": "1/4 cup",
    "mg": 39.1,
    "measured": false
  },
  {
    "id": "h113",
    "group": "Beans and Lentils",
    "item": "LENTILS, BOILED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 2.4,
    "measured": true
  },
  {
    "id": "h114",
    "group": "Beans and Lentils",
    "item": "TOFU, SOFT",
    "serving": "3.5 oz",
    "mg": 10.6,
    "measured": true
  },
  {
    "id": "h115",
    "group": "Breads and Bakery Items",
    "item": "BISCUIT",
    "serving": "one",
    "mg": 13.5,
    "measured": false
  },
  {
    "id": "h116",
    "group": "Breads and Bakery Items",
    "item": "BREAD, MULTIGRAIN WHOLE GRAIN",
    "serving": "1 slice",
    "mg": 18,
    "measured": false
  },
  {
    "id": "h117",
    "group": "Breads and Bakery Items",
    "item": "BREAD, OAT, WHOLE",
    "serving": "1 slice",
    "mg": 6.4,
    "measured": true
  },
  {
    "id": "h118",
    "group": "Breads and Bakery Items",
    "item": "BREAD, RYE",
    "serving": "1 slice",
    "mg": 6.3,
    "measured": true
  },
  {
    "id": "h119",
    "group": "Breads and Bakery Items",
    "item": "BREAD, WHEAT",
    "serving": "1 slice",
    "mg": 3.2,
    "measured": true
  },
  {
    "id": "h120",
    "group": "Breads and Bakery Items",
    "item": "BREAD, WHITE",
    "serving": "1 slice",
    "mg": 4.4,
    "measured": true
  },
  {
    "id": "h121",
    "group": "Breads and Bakery Items",
    "item": "BREAD, WHOLE WHEAT",
    "serving": "1 slice",
    "mg": 13.6,
    "measured": true
  },
  {
    "id": "h122",
    "group": "Breads and Bakery Items",
    "item": "BROWNIE, HOME-MADE",
    "serving": "one",
    "mg": 31,
    "measured": false
  },
  {
    "id": "h123",
    "group": "Breads and Bakery Items",
    "item": "BROWNIE, READY-TO-EAT",
    "serving": "one",
    "mg": 33.9,
    "measured": true
  },
  {
    "id": "h124",
    "group": "Breads and Bakery Items",
    "item": "BUNS, CINNAMON,FROSTED (INCLUDES HONEY BUNS)",
    "serving": "1 roll",
    "mg": 7.2,
    "measured": false
  },
  {
    "id": "h125",
    "group": "Breads and Bakery Items",
    "item": "CAKE, COMMERCIAL YELLOW WITH CHOCOLATE FROSTING",
    "serving": "1 slice",
    "mg": 19.3,
    "measured": true
  },
  {
    "id": "h126",
    "group": "Breads and Bakery Items",
    "item": "CAKE, HOME-BAKED AND COMMERCIAL",
    "serving": "1 slice",
    "mg": 11.9,
    "measured": false
  },
  {
    "id": "h127",
    "group": "Breads and Bakery Items",
    "item": "COOKIE, CHOCOLATE CHIP DOUGH",
    "serving": "1 cookie",
    "mg": 6,
    "measured": true
  },
  {
    "id": "h128",
    "group": "Breads and Bakery Items",
    "item": "COOKIE, COMMERCIAL",
    "serving": "1 cookie",
    "mg": 7,
    "measured": false
  },
  {
    "id": "h129",
    "group": "Breads and Bakery Items",
    "item": "COOKIE, HOME PREPARED CHOCOLATE CHIP",
    "serving": "1 cookie",
    "mg": 6,
    "measured": false
  },
  {
    "id": "h130",
    "group": "Breads and Bakery Items",
    "item": "CORNBREAD OR CORN MUFFIN, PREPARED",
    "serving": "1 piece",
    "mg": 3.7,
    "measured": true
  },
  {
    "id": "h131",
    "group": "Breads and Bakery Items",
    "item": "CRACKER, MULTIGRAIN",
    "serving": "5-6 crackers",
    "mg": 5.5,
    "measured": false
  },
  {
    "id": "h132",
    "group": "Breads and Bakery Items",
    "item": "CRACKER, REGULAR REFINED GRAIN",
    "serving": "5-6 crackers",
    "mg": 5.1,
    "measured": true
  },
  {
    "id": "h133",
    "group": "Breads and Bakery Items",
    "item": "CRACKERS, WHOLE WHEAT",
    "serving": "5-6 crackers",
    "mg": 15,
    "measured": true
  },
  {
    "id": "h134",
    "group": "Breads and Bakery Items",
    "item": "CROISSANTS",
    "serving": "one",
    "mg": 7.6,
    "measured": false
  },
  {
    "id": "h135",
    "group": "Breads and Bakery Items",
    "item": "DANISH, CINNAMON ROLL OR FRUIT",
    "serving": "one",
    "mg": 2.6,
    "measured": true
  },
  {
    "id": "h136",
    "group": "Breads and Bakery Items",
    "item": "DONUT, CAKE & YEAST, CHOCOLATE & PLAIN, FROSTED, GLAZE, POWDER",
    "serving": "one",
    "mg": 4.4,
    "measured": true
  },
  {
    "id": "h137",
    "group": "Breads and Bakery Items",
    "item": "FRENCH TOAST, HOMEMADE , WITH 2% MILK",
    "serving": "2 slices",
    "mg": 11.6,
    "measured": false
  },
  {
    "id": "h138",
    "group": "Breads and Bakery Items",
    "item": "MUFFIN, BLUEBERRY",
    "serving": "one",
    "mg": 7,
    "measured": true
  },
  {
    "id": "h139",
    "group": "Breads and Bakery Items",
    "item": "MUFFIN, BRAN",
    "serving": "one",
    "mg": 9,
    "measured": true
  },
  {
    "id": "h140",
    "group": "Breads and Bakery Items",
    "item": "MUFFIN, ENGLISH , WHEAT",
    "serving": "one",
    "mg": 8.7,
    "measured": false
  },
  {
    "id": "h141",
    "group": "Breads and Bakery Items",
    "item": "MUFFIN, ENGLISH, MIXED GRAIN",
    "serving": "one",
    "mg": 11.2,
    "measured": false
  },
  {
    "id": "h142",
    "group": "Breads and Bakery Items",
    "item": "MUFFIN, ENGLISH, PLAIN, ENRICHED",
    "serving": "one",
    "mg": 7.3,
    "measured": true
  },
  {
    "id": "h143",
    "group": "Breads and Bakery Items",
    "item": "MUFFIN, ENGLISH, WHOLE WHEAT",
    "serving": "one",
    "mg": 28.1,
    "measured": false
  },
  {
    "id": "h144",
    "group": "Breads and Bakery Items",
    "item": "PANCAKE & WAFFLES",
    "serving": "2 small",
    "mg": 9.7,
    "measured": false
  },
  {
    "id": "h145",
    "group": "Breads and Bakery Items",
    "item": "PIE, APPLE, COMMERCIAL",
    "serving": "1 slice",
    "mg": 4.6,
    "measured": true
  },
  {
    "id": "h146",
    "group": "Breads and Bakery Items",
    "item": "ROLL, REDUCED FAT, SWEET",
    "serving": "one",
    "mg": 13.5,
    "measured": true
  },
  {
    "id": "h147",
    "group": "Breads and Bakery Items",
    "item": "SNACK BAR, MIX OF GRANOLA, NUTRIGRAIN, & OTHER",
    "serving": "one",
    "mg": 6.1,
    "measured": true
  },
  {
    "id": "h148",
    "group": "Breads and Bakery Items",
    "item": "SNACK CAKES, CRÈME-FILLED, SPONGE",
    "serving": "one",
    "mg": 3.6,
    "measured": true
  },
  {
    "id": "h149",
    "group": "Breads and Bakery Items",
    "item": "TORTILLAS, CORN",
    "serving": "two",
    "mg": 10,
    "measured": true
  },
  {
    "id": "h150",
    "group": "Breads and Bakery Items",
    "item": "TORTILLAS, FLOUR",
    "serving": "two",
    "mg": 9,
    "measured": true
  },
  {
    "id": "h151",
    "group": "Candy",
    "item": "CANDIES, MILK CHOCOLATE",
    "serving": "1 1/2 oz",
    "mg": 7,
    "measured": true
  },
  {
    "id": "h152",
    "group": "Candy",
    "item": "CANDIES, NON-CHOCOLATE",
    "serving": "1 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h153",
    "group": "Candy",
    "item": "CANDY BAR",
    "serving": "2 oz",
    "mg": 35.4,
    "measured": true
  },
  {
    "id": "h154",
    "group": "Candy",
    "item": "CHOCOLATE, DARK BAR",
    "serving": "1 1/2 oz",
    "mg": 67.7,
    "measured": true
  },
  {
    "id": "h155",
    "group": "Condiments",
    "item": "CATSUP (KETCHUP)",
    "serving": "1 tbsp",
    "mg": 1.5,
    "measured": true
  },
  {
    "id": "h156",
    "group": "Condiments",
    "item": "MUSTARD, YELLOW",
    "serving": "1 tsp",
    "mg": 0.6,
    "measured": true
  },
  {
    "id": "h157",
    "group": "Condiments",
    "item": "SAUCE, BARBECUE",
    "serving": "2 tbsp",
    "mg": 2.3,
    "measured": false
  },
  {
    "id": "h158",
    "group": "Condiments",
    "item": "SAUCE, SOY",
    "serving": "1 tbsp",
    "mg": 2.9,
    "measured": true
  },
  {
    "id": "h159",
    "group": "Dairy and Nondairy Creamers",
    "item": "BUTTER, SALTED",
    "serving": "1 tsp",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h160",
    "group": "Dairy and Nondairy Creamers",
    "item": "BUTTERMILK, LOWFAT",
    "serving": "1 cup",
    "mg": 0.7,
    "measured": false
  },
  {
    "id": "h161",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, AMERICAN, PASTEURIZED PROCESSED",
    "serving": "1 oz",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h162",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, AMERICAN, PASTEURIZED PROCESSED NONFAT",
    "serving": "1 slice",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h163",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, CHEDDAR",
    "serving": "1 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h164",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, CHEDDAR/COLBY, LOW FAT",
    "serving": "1 oz",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h165",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, COTTAGE",
    "serving": "1/2 cup",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h166",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, COTTAGE, 1% LOWFAT",
    "serving": "1/2 cup",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h167",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, COTTAGE, NONFAT",
    "serving": "1/2 cup",
    "mg": 0.8,
    "measured": true
  },
  {
    "id": "h168",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, CREAM",
    "serving": "1 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h169",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, CREAM, FAT FREE",
    "serving": "1 oz",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h170",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, MOZZARELLA, PART SKIM MILK",
    "serving": "1 oz",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h171",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, MOZZARELLA, WHOLE MILK",
    "serving": "1 oz",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h172",
    "group": "Dairy and Nondairy Creamers",
    "item": "CHEESE, NEUFCHATEL (LOWFAT CREAM CHEESE)",
    "serving": "1 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h173",
    "group": "Dairy and Nondairy Creamers",
    "item": "COFFEEMATE, POWDERED AND LIQUID",
    "serving": "1 tbsp",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h174",
    "group": "Dairy and Nondairy Creamers",
    "item": "CREAM, FLUID LIGHT",
    "serving": "1 tbsp",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h175",
    "group": "Dairy and Nondairy Creamers",
    "item": "CREAM, SOUR",
    "serving": "1 tbsp",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h176",
    "group": "Dairy and Nondairy Creamers",
    "item": "ICE CREAM, LIGHT VANILLA",
    "serving": "1 cup",
    "mg": 0.6,
    "measured": true
  },
  {
    "id": "h177",
    "group": "Dairy and Nondairy Creamers",
    "item": "ICE CREAM, VANILLA",
    "serving": "1 cup",
    "mg": 1,
    "measured": true
  },
  {
    "id": "h178",
    "group": "Dairy and Nondairy Creamers",
    "item": "MILK, 1%",
    "serving": "8 oz",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h179",
    "group": "Dairy and Nondairy Creamers",
    "item": "MILK, 2%",
    "serving": "8 oz",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h180",
    "group": "Dairy and Nondairy Creamers",
    "item": "MILK, SKIM",
    "serving": "8 oz",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h181",
    "group": "Dairy and Nondairy Creamers",
    "item": "MILK, WHOLE",
    "serving": "8 oz",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h182",
    "group": "Dairy and Nondairy Creamers",
    "item": "SHERBERT, ORANGE",
    "serving": "1 cup",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h183",
    "group": "Dairy and Nondairy Creamers",
    "item": "WHIPPED TOPPING",
    "serving": "2 tbsp",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h184",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, FROZEN, LOW FAT",
    "serving": "1 cup",
    "mg": 0.9,
    "measured": false
  },
  {
    "id": "h185",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, GREEK, CHOBANI",
    "serving": "5.3 oz",
    "mg": 0.9,
    "measured": false
  },
  {
    "id": "h186",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, GREEK, FROZEN",
    "serving": "1 bar",
    "mg": 0.5,
    "measured": false
  },
  {
    "id": "h187",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, GREEK, FRUIT, WHOLE MILK",
    "serving": "6 oz",
    "mg": 1,
    "measured": false
  },
  {
    "id": "h188",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, GREEK, LIGHT",
    "serving": "5.3 oz",
    "mg": 0.6,
    "measured": false
  },
  {
    "id": "h189",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, GREEK, PLAIN, NONFAT/LOWFAT",
    "serving": "5.3 oz",
    "mg": 0.6,
    "measured": false
  },
  {
    "id": "h190",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, GREEK, PLAIN, WHOLE MILK",
    "serving": "6 oz",
    "mg": 0.8,
    "measured": false
  },
  {
    "id": "h191",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, LOWFAT FRUITED",
    "serving": "6 oz",
    "mg": 1.2,
    "measured": true
  },
  {
    "id": "h192",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, NONFAT LIGHT FRUIT (ARTIFICIAL SWEETENER)",
    "serving": "6 oz",
    "mg": 0.7,
    "measured": false
  },
  {
    "id": "h193",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, NONFAT WITH FRUIT",
    "serving": "6 oz",
    "mg": 0.8,
    "measured": false
  },
  {
    "id": "h194",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, PLAIN, LOWFAT",
    "serving": "6 oz",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h195",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, PLAIN, WHOLE MILK",
    "serving": "6 oz",
    "mg": 0.5,
    "measured": false
  },
  {
    "id": "h196",
    "group": "Dairy and Nondairy Creamers",
    "item": "YOGURT, WHOLE, FRUIT",
    "serving": "6 oz",
    "mg": 0.8,
    "measured": false
  },
  {
    "id": "h197",
    "group": "Plant-Based Milk",
    "item": "ALMOND MILK, SWEETENED+UNSWEETENED MIXED FLAVORS",
    "serving": "8 oz",
    "mg": 27.1,
    "measured": false
  },
  {
    "id": "h198",
    "group": "Plant-Based Milk",
    "item": "PLANT-BASED MILK (EXCLUDES SOY,ALMOND)",
    "serving": "1 cup",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h199",
    "group": "Plant-Based Milk",
    "item": "SOYMILK, FORTIFIED",
    "serving": "8 oz",
    "mg": 9.6,
    "measured": false
  },
  {
    "id": "h200",
    "group": "Plant-Based Milk",
    "item": "WHEY POWDER HIGH PROTEIN DRINK",
    "serving": "1 scoop",
    "mg": 1.5,
    "measured": false
  },
  {
    "id": "h201",
    "group": "Eggs",
    "item": "EGG BEATERS",
    "serving": "1/4 cup",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h202",
    "group": "Eggs",
    "item": "EGG, RAW WHOLE",
    "serving": "one",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h203",
    "group": "Eggs",
    "item": "EGG, YOLK, RAW, FRESH",
    "serving": "one",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h204",
    "group": "Eggs",
    "item": "EGGS, OMEGA 3 SUPPLEMENTED",
    "serving": "one",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h205",
    "group": "Fruit",
    "item": "APPLES, RAW WITH SKIN",
    "serving": "one",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h206",
    "group": "Fruit",
    "item": "APPLES, RAW WITHOUT SKIN",
    "serving": "one",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h207",
    "group": "Fruit",
    "item": "APPLES, SULFURED DRIED",
    "serving": "1/4 cup",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h208",
    "group": "Fruit",
    "item": "APRICOTS, RAW",
    "serving": "1 fruit",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h209",
    "group": "Fruit",
    "item": "APRICOTS, SULFURED DRIED",
    "serving": "5 halves",
    "mg": 0.3,
    "measured": false
  },
  {
    "id": "h210",
    "group": "Fruit",
    "item": "AVOCADO",
    "serving": "1/2 fruit",
    "mg": 9.5,
    "measured": true
  },
  {
    "id": "h211",
    "group": "Fruit",
    "item": "BANANAS, RAW",
    "serving": "one",
    "mg": 10.3,
    "measured": true
  },
  {
    "id": "h212",
    "group": "Fruit",
    "item": "BLUEBERRIES",
    "serving": "1/2 cup",
    "mg": 18.5,
    "measured": true
  },
  {
    "id": "h213",
    "group": "Fruit",
    "item": "CANTALOUPE",
    "serving": "1/4 melon",
    "mg": 1.4,
    "measured": true
  },
  {
    "id": "h214",
    "group": "Fruit",
    "item": "CHERRIES, SWEET, RAW",
    "serving": "1/2 cup",
    "mg": 1.7,
    "measured": false
  },
  {
    "id": "h215",
    "group": "Fruit",
    "item": "CRANBERRIES, DRIED, SWEETENED",
    "serving": "1/4 cup",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h216",
    "group": "Fruit",
    "item": "CRANBERRIES, RAW",
    "serving": "1 cup",
    "mg": 0.3,
    "measured": false
  },
  {
    "id": "h217",
    "group": "Fruit",
    "item": "CRANBERRY SAUCE, CANNED, SWEETENED",
    "serving": "1/8 cup",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h218",
    "group": "Fruit",
    "item": "DATES",
    "serving": "5 dates",
    "mg": 25.5,
    "measured": false
  },
  {
    "id": "h219",
    "group": "Fruit",
    "item": "FIGS, DRIED",
    "serving": "one",
    "mg": 5,
    "measured": false
  },
  {
    "id": "h220",
    "group": "Fruit",
    "item": "FIGS, RAW",
    "serving": "one",
    "mg": 9.3,
    "measured": true
  },
  {
    "id": "h221",
    "group": "Fruit",
    "item": "GRAPEFRUIT, RAW",
    "serving": "1/2 medium",
    "mg": 13.2,
    "measured": true
  },
  {
    "id": "h222",
    "group": "Fruit",
    "item": "GRAPES, RED OR GREEN SEEDLESS",
    "serving": "1/2 cup",
    "mg": 1.2,
    "measured": true
  },
  {
    "id": "h223",
    "group": "Fruit",
    "item": "LEMONS, RAW, WITHOUT PEEL",
    "serving": "1/4 lemon",
    "mg": 1.2,
    "measured": true
  },
  {
    "id": "h224",
    "group": "Fruit",
    "item": "LIMES, RAW",
    "serving": "1/8 lime",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h225",
    "group": "Fruit",
    "item": "MANGOS, RAW",
    "serving": "1/2 fruit",
    "mg": 0.3,
    "measured": false
  },
  {
    "id": "h226",
    "group": "Fruit",
    "item": "MIXED DRIED FRUIT (PRUNES, APRICOTS, PEARS)",
    "serving": "1/4 cup",
    "mg": 6.1,
    "measured": false
  },
  {
    "id": "h227",
    "group": "Fruit",
    "item": "NECTARINES, RAW",
    "serving": "one",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h228",
    "group": "Fruit",
    "item": "OLIVES, CANNED RIPE",
    "serving": "3 medium",
    "mg": 5,
    "measured": true
  },
  {
    "id": "h229",
    "group": "Fruit",
    "item": "ORANGES, RAW",
    "serving": "one",
    "mg": 23.3,
    "measured": true
  },
  {
    "id": "h230",
    "group": "Fruit",
    "item": "PAPAYAS, RAW",
    "serving": "1/2 medium fruit",
    "mg": 0.5,
    "measured": false
  },
  {
    "id": "h231",
    "group": "Fruit",
    "item": "PEACHES, CANNED IN HEAVY SYRUP",
    "serving": "1/2 cup",
    "mg": 0.9,
    "measured": true
  },
  {
    "id": "h232",
    "group": "Fruit",
    "item": "PEACHES, CANNED JUICE PACKED",
    "serving": "1/2 cup",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h233",
    "group": "Fruit",
    "item": "PEACHES, RAW",
    "serving": "one",
    "mg": 0.4,
    "measured": true
  },
  {
    "id": "h234",
    "group": "Fruit",
    "item": "PEARS, RAW",
    "serving": "one",
    "mg": 1.8,
    "measured": true
  },
  {
    "id": "h235",
    "group": "Fruit",
    "item": "PINEAPPLE, CANNED IN HEAVY SYRUP (INCLUDES SYRUP)",
    "serving": "1/2 cup",
    "mg": 11.9,
    "measured": true
  },
  {
    "id": "h236",
    "group": "Fruit",
    "item": "PINEAPPLE, DRIED",
    "serving": "1 ring",
    "mg": 7.9,
    "measured": false
  },
  {
    "id": "h237",
    "group": "Fruit",
    "item": "PINEAPPLE, RAW",
    "serving": "1/2 cup",
    "mg": 5.2,
    "measured": false
  },
  {
    "id": "h238",
    "group": "Fruit",
    "item": "PLUMS (PRUNES), DRIED",
    "serving": "1/4 cup",
    "mg": 17.8,
    "measured": true
  },
  {
    "id": "h239",
    "group": "Fruit",
    "item": "PLUMS, RAW",
    "serving": "one",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h240",
    "group": "Fruit",
    "item": "POMEGRANATES, RAW",
    "serving": "1/2 cup",
    "mg": 0.3,
    "measured": false
  },
  {
    "id": "h241",
    "group": "Fruit",
    "item": "PRUNES, CANNED IN HEAVY SYRUP",
    "serving": "1/2 cup",
    "mg": 0.6,
    "measured": false
  },
  {
    "id": "h242",
    "group": "Fruit",
    "item": "RAISINS",
    "serving": "1 oz",
    "mg": 2.5,
    "measured": true
  },
  {
    "id": "h243",
    "group": "Fruit",
    "item": "RASPBERRIES, RAW",
    "serving": "1/2 cup",
    "mg": 2.5,
    "measured": true
  },
  {
    "id": "h244",
    "group": "Fruit",
    "item": "STRAWBERRIES, RAW",
    "serving": "1/2 cup",
    "mg": 1.2,
    "measured": true
  },
  {
    "id": "h245",
    "group": "Fruit",
    "item": "TANGERINES, RAW",
    "serving": "one",
    "mg": 15.7,
    "measured": false
  },
  {
    "id": "h246",
    "group": "Fruit",
    "item": "WATERMELON",
    "serving": "1 slice",
    "mg": 0.6,
    "measured": true
  },
  {
    "id": "h247",
    "group": "Fish",
    "item": "BLUEFISH, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 1.2,
    "measured": true
  },
  {
    "id": "h248",
    "group": "Fish",
    "item": "CATFISH, CHANNEL, FARMED, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h249",
    "group": "Fish",
    "item": "CLAM, MIXED SPECIES, COOKED, MOIST HEAT",
    "serving": "3 oz",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h250",
    "group": "Fish",
    "item": "CLAMS, RAW",
    "serving": "1 pint",
    "mg": 0.5,
    "measured": false
  },
  {
    "id": "h251",
    "group": "Fish",
    "item": "COD, ATLANTIC, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h252",
    "group": "Fish",
    "item": "COD, PACIFIC, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h253",
    "group": "Fish",
    "item": "FISH PORTIONS/STICKS, PREHEATED FROZEN",
    "serving": "3 oz",
    "mg": 5.2,
    "measured": true
  },
  {
    "id": "h254",
    "group": "Fish",
    "item": "FLOUNDER & SOLE, DRY HEAT COOKED FLATFISH",
    "serving": "4 oz",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h255",
    "group": "Fish",
    "item": "HADDOCK, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h256",
    "group": "Fish",
    "item": "HALIBUT, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h257",
    "group": "Fish",
    "item": "HERRING, ATLANTIC, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h258",
    "group": "Fish",
    "item": "MACKEREL, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h259",
    "group": "Fish",
    "item": "OYSTERS, FARMED, DRY HEAT COOKED",
    "serving": "3 oz",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h260",
    "group": "Fish",
    "item": "OYSTERS, WILD RAW",
    "serving": "6 medium",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h261",
    "group": "Fish",
    "item": "POLLOCK, ATLANTIC, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h262",
    "group": "Fish",
    "item": "SALMON, ATLANTIC, FARMED, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h263",
    "group": "Fish",
    "item": "SALMON, CHUM, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h264",
    "group": "Fish",
    "item": "SALMON, PINK, CANNED WITH BONES AND LIQUID",
    "serving": "4 oz",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h265",
    "group": "Fish",
    "item": "SALMON, PINK, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h266",
    "group": "Fish",
    "item": "SALMON, SOCKEYE, CANNED, DRAINED, WITH BONES",
    "serving": "4 oz",
    "mg": 1.6,
    "measured": true
  },
  {
    "id": "h267",
    "group": "Fish",
    "item": "SALMON, SOCKEYE, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h268",
    "group": "Fish",
    "item": "SARDINES, ATLANTIC, OIL CANNED, DRAINED, WITH BONE",
    "serving": "4 oz",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h269",
    "group": "Fish",
    "item": "SARDINES, PACIFIC, TOMATO SAUCE CANNED, DRAINED, WITH BONE",
    "serving": "4 oz",
    "mg": 0.3,
    "measured": false
  },
  {
    "id": "h270",
    "group": "Fish",
    "item": "SHRIMP, MOIST HEAT COOKED",
    "serving": "3 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h271",
    "group": "Fish",
    "item": "SWORDFISH, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h272",
    "group": "Fish",
    "item": "TILAPIA, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h273",
    "group": "Fish",
    "item": "TILAPIA, FARMED, COOKED",
    "serving": "4 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h274",
    "group": "Fish",
    "item": "TUNA LIGHT IN OIL",
    "serving": "3.5 oz",
    "mg": 2.8,
    "measured": false
  },
  {
    "id": "h275",
    "group": "Fish",
    "item": "TUNA, LIGHT CANNED IN WATER, DRAINED",
    "serving": "3.5 oz",
    "mg": 1.5,
    "measured": true
  },
  {
    "id": "h276",
    "group": "Fish",
    "item": "TUNA, WHITE, OIL CANNED, DRAINED",
    "serving": "3.5 oz",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h277",
    "group": "Fish",
    "item": "TUNA, WHITE, WATER CANNED, DRAINED",
    "serving": "3.5 oz",
    "mg": 0.4,
    "measured": true
  },
  {
    "id": "h278",
    "group": "Fish",
    "item": "TUNA, YELLOWFIN, DRY HEAT COOKED",
    "serving": "4 oz",
    "mg": 0.6,
    "measured": false
  },
  {
    "id": "h279",
    "group": "Meat",
    "item": "BACON, BROILED, PAN-FRIED, OR ROASTED",
    "serving": "2 slices",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h280",
    "group": "Meat",
    "item": "BEEF HOT DOG",
    "serving": "one",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h281",
    "group": "Meat",
    "item": "BEEF LIVER, PAN FRIED",
    "serving": "4 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h282",
    "group": "Meat",
    "item": "BEEF PATTY, BROILED 80% LEAN GROUND",
    "serving": "3 oz",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h283",
    "group": "Meat",
    "item": "BEEF PATTY, BROILED 85% LEAN MEAT GROUND",
    "serving": "3 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h284",
    "group": "Meat",
    "item": "BEEF PATTY, BROILED 93% BEEF, 7% FAT",
    "serving": "3 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h285",
    "group": "Meat",
    "item": "BEEF, FRANKFURTER, LOW-FAT",
    "serving": "one",
    "mg": 0.6,
    "measured": false
  },
  {
    "id": "h286",
    "group": "Meat",
    "item": "BEEF, TOP MARKET CUTS, 0\"-1/8\" FAT TRIM",
    "serving": "5 oz",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h287",
    "group": "Meat",
    "item": "BOLOGNA, BEEF AND PORK",
    "serving": "2 slices",
    "mg": 0.8,
    "measured": true
  },
  {
    "id": "h288",
    "group": "Meat",
    "item": "HAM, CANNED",
    "serving": "5 oz",
    "mg": 0.7,
    "measured": true
  },
  {
    "id": "h289",
    "group": "Meat",
    "item": "PORK, LOIN/CHOPS, BROILED BONE IN, MEAT&FAT",
    "serving": "5 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h290",
    "group": "Meat",
    "item": "SAUSAGE, COOKED PORK & BEEF",
    "serving": "2 ounces",
    "mg": 1.8,
    "measured": true
  },
  {
    "id": "h291",
    "group": "Mixed Dishes",
    "item": "MACARONI AND CHEESE",
    "serving": "1 cup",
    "mg": 15.3,
    "measured": false
  },
  {
    "id": "h292",
    "group": "Mixed Dishes",
    "item": "MEAT LASAGNA",
    "serving": "1 piece or cup",
    "mg": 45.7,
    "measured": false
  },
  {
    "id": "h293",
    "group": "Mixed Dishes",
    "item": "PIZZA, RESTAURANT & FROZEN CHEESE",
    "serving": "2 slices",
    "mg": 8.5,
    "measured": true
  },
  {
    "id": "h294",
    "group": "Nuts and Seeds",
    "item": "ALMOND BUTTER, SALTED",
    "serving": "1 tbsp",
    "mg": 41.6,
    "measured": false
  },
  {
    "id": "h295",
    "group": "Nuts and Seeds",
    "item": "ALMONDS, OIL ROASTED, UNSALTED",
    "serving": "1 oz",
    "mg": 72,
    "measured": true
  },
  {
    "id": "h296",
    "group": "Nuts and Seeds",
    "item": "CASHEWS, OIL ROASTED, UNSALTED",
    "serving": "1 oz",
    "mg": 63.5,
    "measured": true
  },
  {
    "id": "h297",
    "group": "Nuts and Seeds",
    "item": "COCONUT MEAT, DRIED (DESICCATED), SWEETENED, SHREDDED",
    "serving": "1 tbsp",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h298",
    "group": "Nuts and Seeds",
    "item": "COCONUT MEAT, RAW",
    "serving": "1/8 cup",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h299",
    "group": "Nuts and Seeds",
    "item": "FLAXSEED, GROUND",
    "serving": "1 tbsp",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h300",
    "group": "Nuts and Seeds",
    "item": "MIXED NUTS WITH PEANUTS, OIL ROASTED, UNSALTED",
    "serving": "1 oz",
    "mg": 45.2,
    "measured": false
  },
  {
    "id": "h301",
    "group": "Nuts and Seeds",
    "item": "PEANUT BUTTER, SALTED, SMOOTH",
    "serving": "1 tbsp",
    "mg": 19.2,
    "measured": true
  },
  {
    "id": "h302",
    "group": "Nuts and Seeds",
    "item": "PEANUTS, ALL TYPES, DRY ROASTED, WITHOUT SALT",
    "serving": "1 oz",
    "mg": 28.8,
    "measured": false
  },
  {
    "id": "h303",
    "group": "Nuts and Seeds",
    "item": "PEANUTS, OIL ROASTED, SALTED",
    "serving": "1 oz",
    "mg": 29,
    "measured": true
  },
  {
    "id": "h304",
    "group": "Nuts and Seeds",
    "item": "PECANS, OIL ROASTED, UNSALTED",
    "serving": "1 oz",
    "mg": 15.7,
    "measured": true
  },
  {
    "id": "h305",
    "group": "Nuts and Seeds",
    "item": "PISTACHIOS, DRY ROASTED, UNSALTED",
    "serving": "1 oz",
    "mg": 9,
    "measured": true
  },
  {
    "id": "h306",
    "group": "Nuts and Seeds",
    "item": "PUMPKIN & SQUASH SEEDS, WHOLE ROASTED, UNSALTED",
    "serving": "1/4 cup",
    "mg": 4.3,
    "measured": false
  },
  {
    "id": "h307",
    "group": "Nuts and Seeds",
    "item": "PUMPKIN AND SQUASH SEED KERNELS, DRIED",
    "serving": "1/4 cup",
    "mg": 7.7,
    "measured": false
  },
  {
    "id": "h308",
    "group": "Nuts and Seeds",
    "item": "SESAME BUTTER, TAHINI, FROM ROASTED & TOASTED KERNALS",
    "serving": "1 tbsp",
    "mg": 16.2,
    "measured": false
  },
  {
    "id": "h309",
    "group": "Nuts and Seeds",
    "item": "SUNFLOWER SEED KERNALS, OIL ROASTED, WITHOUT SALT",
    "serving": "1/4 cup",
    "mg": 8,
    "measured": false
  },
  {
    "id": "h310",
    "group": "Nuts and Seeds",
    "item": "SUNFLOWER SEED, DRIED, KERNELS",
    "serving": "1/4 cup",
    "mg": 2.9,
    "measured": true
  },
  {
    "id": "h311",
    "group": "Nuts and Seeds",
    "item": "WALNUTS",
    "serving": "1 oz",
    "mg": 11.7,
    "measured": true
  },
  {
    "id": "h312",
    "group": "Pasta and Other Grains",
    "item": "BARLEY, COOKED PEARLED",
    "serving": "1 cup",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h313",
    "group": "Pasta and Other Grains",
    "item": "BUCKWHEAT GROATS, ROASTED",
    "serving": "1 cup",
    "mg": 132.6,
    "measured": true
  },
  {
    "id": "h314",
    "group": "Pasta and Other Grains",
    "item": "BULGUR, COOKED",
    "serving": "1 cup",
    "mg": 85.9,
    "measured": true
  },
  {
    "id": "h315",
    "group": "Pasta and Other Grains",
    "item": "COUSCOUS, COOKED",
    "serving": "1 cup",
    "mg": 15.1,
    "measured": true
  },
  {
    "id": "h316",
    "group": "Pasta and Other Grains",
    "item": "OAT BRAN, RAW",
    "serving": "1/2 cup",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h317",
    "group": "Pasta and Other Grains",
    "item": "QUINOA, COOKED",
    "serving": "1 cup",
    "mg": 54.4,
    "measured": false
  },
  {
    "id": "h318",
    "group": "Pasta and Other Grains",
    "item": "RICE, BROWN, COOKED LONG GRAIN",
    "serving": "1 cup",
    "mg": 18.7,
    "measured": true
  },
  {
    "id": "h319",
    "group": "Pasta and Other Grains",
    "item": "RICE, WHITE, COOKED LONG GRAIN",
    "serving": "1 cup",
    "mg": 3.8,
    "measured": true
  },
  {
    "id": "h320",
    "group": "Pasta and Other Grains",
    "item": "SPAGHETTI, COOKED",
    "serving": "1 cup",
    "mg": 16.5,
    "measured": true
  },
  {
    "id": "h321",
    "group": "Pasta and Other Grains",
    "item": "SPAGHETTI, COOKED WHOLE WHEAT",
    "serving": "1 cup",
    "mg": 46.1,
    "measured": false
  },
  {
    "id": "h322",
    "group": "Pasta and Other Grains",
    "item": "WHEAT BERRIES, COOKED",
    "serving": "1 cup",
    "mg": 97.6,
    "measured": false
  },
  {
    "id": "h323",
    "group": "Pasta and Other Grains",
    "item": "WHEAT BRAN, CRUDE",
    "serving": "1 tbsp",
    "mg": 7.5,
    "measured": true
  },
  {
    "id": "h324",
    "group": "Poultry",
    "item": "BACON, TURKEY, MICROWAVED",
    "serving": "2 slices",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h325",
    "group": "Poultry",
    "item": "CHICKEN (MEAT & SKIN), ROASTED",
    "serving": "3 oz",
    "mg": 0.2,
    "measured": true
  },
  {
    "id": "h326",
    "group": "Poultry",
    "item": "CHICKEN BREAST, DELI, ROTISSERIE SEASONED, SLICED, PREPACKAGED",
    "serving": "3 oz",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h327",
    "group": "Poultry",
    "item": "CHICKEN LIVER, SIMMERED",
    "serving": "1 oz",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h328",
    "group": "Poultry",
    "item": "CHICKEN SAUSAGE",
    "serving": "one",
    "mg": 1.8,
    "measured": false
  },
  {
    "id": "h329",
    "group": "Poultry",
    "item": "CHICKEN THIGHS, WINGS, AND LEGS",
    "serving": "2 pieces",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h330",
    "group": "Poultry",
    "item": "CHICKEN, ROASTED MEAT",
    "serving": "3 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h331",
    "group": "Poultry",
    "item": "TURKEY BREAST MEAT & SKIN, ROASTED",
    "serving": "3 oz",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h332",
    "group": "Poultry",
    "item": "TURKEY HOT DOG",
    "serving": "one",
    "mg": 2.5,
    "measured": true
  },
  {
    "id": "h333",
    "group": "Poultry",
    "item": "TURKEY MEAT, ROASTED",
    "serving": "3 oz",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h334",
    "group": "Poultry",
    "item": "TURKEY SAUSAGE, COOKED",
    "serving": "one",
    "mg": 3.5,
    "measured": false
  },
  {
    "id": "h335",
    "group": "Poultry",
    "item": "TURKEY, COOKED GROUND",
    "serving": "3 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h336",
    "group": "Poultry",
    "item": "TURKEY, WHOLE, BREAST, MEAT ONLY, COOKED, ROASTED",
    "serving": "3 oz",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h337",
    "group": "Salad Dressings",
    "item": "MAYONNAISE",
    "serving": "1 tbsp",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h338",
    "group": "Salad Dressings",
    "item": "MAYONNAISE, LOW FAT",
    "serving": "1 tbsp",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h339",
    "group": "Salad Dressings",
    "item": "MAYONNAISE, OLIVE OIL",
    "serving": "1 tbsp",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h340",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, CREAMY RANCH, FAT FREE",
    "serving": "1.5 tbsp",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h341",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, CREAMY RANCH, LITE",
    "serving": "1.5 tbsp",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h342",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, CREAMY RANCH, REGULAR",
    "serving": "1.5 tbsp",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h343",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, ITALIAN",
    "serving": "1.5 tbsp",
    "mg": 0.4,
    "measured": true
  },
  {
    "id": "h344",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, ITALIAN, FAT FREE",
    "serving": "1.5 tbsp",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h345",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, ITALIAN, LITE",
    "serving": "1.5 tbsp",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h346",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, ITALIAN, REGULAR",
    "serving": "1.5 tbsp",
    "mg": 0.2,
    "measured": false
  },
  {
    "id": "h347",
    "group": "Salad Dressings",
    "item": "SALAD DRESSING, OLIVE OIL AND VINEGAR",
    "serving": "1.5 tbsp",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h348",
    "group": "Snacks",
    "item": "BARS, ENERGY",
    "serving": "one",
    "mg": 10.6,
    "measured": false
  },
  {
    "id": "h349",
    "group": "Snacks",
    "item": "BARS, HIGH PROTEIN",
    "serving": "one",
    "mg": 20.1,
    "measured": false
  },
  {
    "id": "h350",
    "group": "Snacks",
    "item": "CORN CHIPS, TORTILLA",
    "serving": "1 oz",
    "mg": 7.1,
    "measured": true
  },
  {
    "id": "h351",
    "group": "Snacks",
    "item": "JELL-O CHOCOLATE PUDDING SNACKS, READY TO EAT",
    "serving": "1 snack cup",
    "mg": 13.6,
    "measured": true
  },
  {
    "id": "h352",
    "group": "Snacks",
    "item": "JELL-O VANILLA PUDDING SNACKS, RTE",
    "serving": "1 snack cup",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h353",
    "group": "Snacks",
    "item": "JELLO, PREPARED FROM PACKET, WATER ADDED",
    "serving": "1/2 cup",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h354",
    "group": "Snacks",
    "item": "POPCORN, AIR POPPED",
    "serving": "3 cups",
    "mg": 3.5,
    "measured": false
  },
  {
    "id": "h355",
    "group": "Snacks",
    "item": "POPCORN, READY TO EAT & MICROWAVE",
    "serving": "3 cups",
    "mg": 4.9,
    "measured": true
  },
  {
    "id": "h356",
    "group": "Snacks",
    "item": "POTATO CHIP/TORTILLA CHIP COMBO , REGULAR, REDUCED FAT, BAKED",
    "serving": "1 oz",
    "mg": 11.8,
    "measured": false
  },
  {
    "id": "h357",
    "group": "Snacks",
    "item": "POTATO CHIPS",
    "serving": "1 oz",
    "mg": 12.1,
    "measured": true
  },
  {
    "id": "h358",
    "group": "Snacks",
    "item": "POTATO CHIPS, BAKED",
    "serving": "1 oz",
    "mg": 19.3,
    "measured": true
  },
  {
    "id": "h359",
    "group": "Snacks",
    "item": "POTATO CHIPS, LIGHT",
    "serving": "1 oz",
    "mg": 12.2,
    "measured": false
  },
  {
    "id": "h360",
    "group": "Snacks",
    "item": "PRETZELS, PLAIN, HARD, SALTED",
    "serving": "1.5 oz",
    "mg": 6.9,
    "measured": true
  },
  {
    "id": "h361",
    "group": "Soups and Chowder",
    "item": "CHOWDER, CLAM, CANNED, RTS",
    "serving": "1 cup",
    "mg": 13.6,
    "measured": true
  },
  {
    "id": "h362",
    "group": "Soups and Chowder",
    "item": "SOUP, CREAM OF MUSHROOM, CANNED, 2% MILK ADDED",
    "serving": "1 cup",
    "mg": 1.5,
    "measured": false
  },
  {
    "id": "h363",
    "group": "Soups and Chowder",
    "item": "SOUP, LENTIL",
    "serving": "1/2 cup",
    "mg": 16.8,
    "measured": false
  },
  {
    "id": "h364",
    "group": "Soups and Chowder",
    "item": "SOUP, MISO",
    "serving": "1 cup",
    "mg": 58.3,
    "measured": false
  },
  {
    "id": "h365",
    "group": "Soups and Chowder",
    "item": "SOUP, TOMATO, CANNED, PREPARED WITH 1/2 WATER & 1/2 MILK",
    "serving": "1 cup",
    "mg": 9,
    "measured": false
  },
  {
    "id": "h366",
    "group": "Artificial Sweeteners",
    "item": "ASPARTAME (\"EQUAL\") NUTRASWEET",
    "serving": "1 packet",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h367",
    "group": "Artificial Sweeteners",
    "item": "SACCHARIN",
    "serving": "1 packet",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h368",
    "group": "Artificial Sweeteners",
    "item": "STEVIA",
    "serving": "1 packet",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h369",
    "group": "Artificial Sweeteners",
    "item": "SUCRALOSE (SPLENDA)",
    "serving": "1 packet",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h370",
    "group": "Artificial Sweeteners",
    "item": "TRUVIA",
    "serving": "1 packet",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h371",
    "group": "Sugars",
    "item": "JAMS AND PRESERVES",
    "serving": "1 tbsp",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h372",
    "group": "Sugars",
    "item": "MOLASSES",
    "serving": "1 tbsp",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h373",
    "group": "Sugars",
    "item": "SUGAR, GRANULATED",
    "serving": "1 tsp",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h374",
    "group": "Sugars",
    "item": "SYRUP, PANCAKE",
    "serving": "1 tbsp",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h375",
    "group": "Vegetables",
    "item": "ARUGULA, RAW",
    "serving": "1/2 cup",
    "mg": 0.3,
    "measured": false
  },
  {
    "id": "h376",
    "group": "Vegetables",
    "item": "ASPARAGUS, BOILED, DRAINED",
    "serving": "1/2 cup",
    "mg": 8.7,
    "measured": false
  },
  {
    "id": "h377",
    "group": "Vegetables",
    "item": "BAKED, UNSALTED WINTER SQUASH",
    "serving": "1/2 cup",
    "mg": 4,
    "measured": true
  },
  {
    "id": "h378",
    "group": "Vegetables",
    "item": "BAMBOO SHOOTS, CANNED, DRAINED SOLIDS",
    "serving": "1/2 cup",
    "mg": 6.3,
    "measured": false
  },
  {
    "id": "h379",
    "group": "Vegetables",
    "item": "BEETS, CANNED, DRAINED",
    "serving": "1/2 cup",
    "mg": 76.4,
    "measured": true
  },
  {
    "id": "h380",
    "group": "Vegetables",
    "item": "BROCCOLI, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 6,
    "measured": false
  },
  {
    "id": "h381",
    "group": "Vegetables",
    "item": "BRUSSELS SPROUTS, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 17,
    "measured": false
  },
  {
    "id": "h382",
    "group": "Vegetables",
    "item": "CABBAGE, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 1.4,
    "measured": true
  },
  {
    "id": "h383",
    "group": "Vegetables",
    "item": "CARROTS, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 8.2,
    "measured": true
  },
  {
    "id": "h384",
    "group": "Vegetables",
    "item": "CARROTS, RAW",
    "serving": "1/2 large",
    "mg": 4.5,
    "measured": true
  },
  {
    "id": "h385",
    "group": "Vegetables",
    "item": "CAULIFLOWER, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h386",
    "group": "Vegetables",
    "item": "CELERY, RAW",
    "serving": "1/2 medium",
    "mg": 7.6,
    "measured": false
  },
  {
    "id": "h387",
    "group": "Vegetables",
    "item": "COLESLAW (FAST FOOD)",
    "serving": "1/2 cup",
    "mg": 2.4,
    "measured": true
  },
  {
    "id": "h388",
    "group": "Vegetables",
    "item": "COLLARDS, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 4.9,
    "measured": false
  },
  {
    "id": "h389",
    "group": "Vegetables",
    "item": "CORN KERNELS, SWEET YELLOW, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 0.8,
    "measured": true
  },
  {
    "id": "h390",
    "group": "Vegetables",
    "item": "CUCUMBER WITH PEEL, RAW",
    "serving": "1/4 cuke",
    "mg": 1,
    "measured": true
  },
  {
    "id": "h391",
    "group": "Vegetables",
    "item": "ENDIVE, RAW",
    "serving": "1 cup",
    "mg": 0.1,
    "measured": false
  },
  {
    "id": "h392",
    "group": "Vegetables",
    "item": "FRENCH FRIES, FAST FOOD",
    "serving": "6 oz",
    "mg": 48.6,
    "measured": true
  },
  {
    "id": "h393",
    "group": "Vegetables",
    "item": "FRENCH FRIES, SWEET POTATO",
    "serving": "6 oz",
    "mg": 37.1,
    "measured": false
  },
  {
    "id": "h394",
    "group": "Vegetables",
    "item": "FROZEN FRENCH FRIES, PREPARED",
    "serving": "6 oz",
    "mg": 36.9,
    "measured": false
  },
  {
    "id": "h395",
    "group": "Vegetables",
    "item": "GARLIC, COOKED",
    "serving": "1 clove",
    "mg": 0.3,
    "measured": false
  },
  {
    "id": "h396",
    "group": "Vegetables",
    "item": "GARLIC, POWDER",
    "serving": "4 shakes",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h397",
    "group": "Vegetables",
    "item": "GARLIC, RAW",
    "serving": "1 clove",
    "mg": 0.4,
    "measured": false
  },
  {
    "id": "h398",
    "group": "Vegetables",
    "item": "GREEN BEANS, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 13.6,
    "measured": true
  },
  {
    "id": "h399",
    "group": "Vegetables",
    "item": "KALE, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 1.1,
    "measured": true
  },
  {
    "id": "h400",
    "group": "Vegetables",
    "item": "KALE, RAW",
    "serving": "1 cup",
    "mg": 0.7,
    "measured": false
  },
  {
    "id": "h401",
    "group": "Vegetables",
    "item": "LETTUCE, ICEBERG",
    "serving": "1 cup",
    "mg": 0.4,
    "measured": true
  },
  {
    "id": "h402",
    "group": "Vegetables",
    "item": "LETTUCE, ROMAINE",
    "serving": "1 cup",
    "mg": 0.3,
    "measured": true
  },
  {
    "id": "h403",
    "group": "Vegetables",
    "item": "LIMA BEANS, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h404",
    "group": "Vegetables",
    "item": "MARINARA/SPAGHETTI SAUCE, READY TO SERVE",
    "serving": "1/2 cup",
    "mg": 10.4,
    "measured": true
  },
  {
    "id": "h405",
    "group": "Vegetables",
    "item": "MIXED FROZEN VEGETABLES, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 4.5,
    "measured": true
  },
  {
    "id": "h406",
    "group": "Vegetables",
    "item": "MUSHROOMS, WHITE RAW",
    "serving": "one",
    "mg": 0,
    "measured": true
  },
  {
    "id": "h407",
    "group": "Vegetables",
    "item": "MUSHROOMS, WHITE, COOKED, BOILED, DRAINED, WITHOUT SALT",
    "serving": "one",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h408",
    "group": "Vegetables",
    "item": "MUSTARD GREENS, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 1.9,
    "measured": false
  },
  {
    "id": "h409",
    "group": "Vegetables",
    "item": "ONIONS, RAW",
    "serving": "one",
    "mg": 2.1,
    "measured": true
  },
  {
    "id": "h410",
    "group": "Vegetables",
    "item": "ONIONS,SPRING OR SCALLIONS (INCLUDING TOPS & BULB), RAW",
    "serving": "one",
    "mg": 0,
    "measured": false
  },
  {
    "id": "h411",
    "group": "Vegetables",
    "item": "PARSLEY, RAW",
    "serving": "1 tbsp",
    "mg": 0.9,
    "measured": false
  },
  {
    "id": "h412",
    "group": "Vegetables",
    "item": "PEAS, GREEN, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 0.5,
    "measured": true
  },
  {
    "id": "h413",
    "group": "Vegetables",
    "item": "PEPPERS, GREEN HOT CHILI, CANNED",
    "serving": "1 oz",
    "mg": 2,
    "measured": true
  },
  {
    "id": "h414",
    "group": "Vegetables",
    "item": "PEPPERS, GREEN, RAW",
    "serving": "2 rings",
    "mg": 2.2,
    "measured": false
  },
  {
    "id": "h415",
    "group": "Vegetables",
    "item": "PEPPERS, RED, RAW",
    "serving": "2 rings",
    "mg": 2.2,
    "measured": false
  },
  {
    "id": "h416",
    "group": "Vegetables",
    "item": "PICKLES, CUCUMBER, SWEET (INCLUDES BREAD & BUTTER PICKLES)",
    "serving": "one",
    "mg": 1,
    "measured": false
  },
  {
    "id": "h417",
    "group": "Vegetables",
    "item": "POTATO SALAD",
    "serving": "1/3 cup",
    "mg": 16.9,
    "measured": true
  },
  {
    "id": "h418",
    "group": "Vegetables",
    "item": "POTATO, BAKED, UNSALTED, FLESH & SKIN",
    "serving": "one",
    "mg": 91.7,
    "measured": true
  },
  {
    "id": "h419",
    "group": "Vegetables",
    "item": "POTATO, MICROWAVED (SKIN&FLESH) WITH NO SALT ADDED",
    "serving": "one",
    "mg": 68,
    "measured": true
  },
  {
    "id": "h420",
    "group": "Vegetables",
    "item": "POTATO, READY TO EAT, INSTANT, & HOME MASHED",
    "serving": "1 cup",
    "mg": 11.6,
    "measured": true
  },
  {
    "id": "h421",
    "group": "Vegetables",
    "item": "POTATO, SWEET, COOKED, BAKED IN SKIN, FLESH, WITHOUT SALT",
    "serving": "1/2 cup",
    "mg": 54.2,
    "measured": true
  },
  {
    "id": "h422",
    "group": "Vegetables",
    "item": "POTATO, SWEET, CANNED, DRAINED WITH SYRUP",
    "serving": "1/2 cup",
    "mg": 14.3,
    "measured": true
  },
  {
    "id": "h423",
    "group": "Vegetables",
    "item": "PUMPKIN, CANNED, WITH NO SALT",
    "serving": "1 cup",
    "mg": 8.8,
    "measured": false
  },
  {
    "id": "h424",
    "group": "Vegetables",
    "item": "RADISHES, RAW",
    "serving": "2 radishes",
    "mg": 0.1,
    "measured": true
  },
  {
    "id": "h425",
    "group": "Vegetables",
    "item": "SALSA",
    "serving": "1/4 cup",
    "mg": 2.8,
    "measured": true
  },
  {
    "id": "h426",
    "group": "Vegetables",
    "item": "SEAWEED",
    "serving": "1/2 cup",
    "mg": 0.7,
    "measured": false
  },
  {
    "id": "h427",
    "group": "Vegetables",
    "item": "SOYBEANS, GREEN, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 48,
    "measured": false
  },
  {
    "id": "h428",
    "group": "Vegetables",
    "item": "SPINACH, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 547.4,
    "measured": true
  },
  {
    "id": "h429",
    "group": "Vegetables",
    "item": "SPINACH, RAW",
    "serving": "1 cup",
    "mg": 316.2,
    "measured": true
  },
  {
    "id": "h430",
    "group": "Vegetables",
    "item": "SQUASH, SUMMER, BOILED, DRAINED, UNSALTED",
    "serving": "1/2 cup",
    "mg": 0.6,
    "measured": true
  },
  {
    "id": "h431",
    "group": "Vegetables",
    "item": "TOMATO PRODUCTS, CANNED, PASTE, WITHOUT SALT ADDED",
    "serving": "1/4 cup",
    "mg": 24.5,
    "measured": false
  },
  {
    "id": "h432",
    "group": "Vegetables",
    "item": "TOMATOES, RIPE, RED",
    "serving": "2 slices",
    "mg": 3.1,
    "measured": true
  },
  {
    "id": "h433",
    "group": "Vegetables",
    "item": "WATERCHESTNUTS, CHINESE ,CANNED, SOLIDS & LIQUIDS",
    "serving": "1/8 cup",
    "mg": 0.2,
    "measured": false
  }
];
