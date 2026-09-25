#!/usr/bin/env python3
"""Convert a Harvard oxalate table spreadsheet into data/harvard.js.

Usage:
    python3 tools/harvard_xlsx_to_js.py docs/Harvard-OXALATE-TABLE-1_3-Nov2023.xlsx [--posted "November 2023"]

Requires: pip install openpyxl

The Harvard sheet layout (Nov 2023 file): the food group is in column A on the first row of each
group, the item in column C, the serving in column E, the value in column G, and "*" in column H
when the value was directly measured. Header rows precede the data. If Harvard changes the layout,
adjust COLS below and re-run; then run `node tools/validate.js` and review `git diff data/harvard.js`.
"""
import sys, json, datetime, re
try:
    import openpyxl
except ImportError:
    sys.exit('pip install openpyxl')

COLS = dict(group=0, item=2, serving=4, value=6, star=7)

def main():
    if len(sys.argv) < 2:
        sys.exit(__doc__)
    path = sys.argv[1]
    posted = 'November 2023'
    if '--posted' in sys.argv:
        posted = sys.argv[sys.argv.index('--posted') + 1]
    wb = openpyxl.load_workbook(path, data_only=True)
    ws = wb.worksheets[0]
    rows, group, started = [], None, False
    for row in ws.iter_rows(values_only=True):
        c = list(row) + [None] * 8
        g, item, serving, val, star = c[COLS['group']], c[COLS['item']], c[COLS['serving']], c[COLS['value']], c[COLS['star']]
        if isinstance(g, str) and g.strip().upper() == 'FOOD GROUP':
            started = True; continue
        if not started:
            continue
        if g and str(g).strip():
            group = str(g).strip()
        if item is None or val is None or not isinstance(val, (int, float)):
            continue
        rows.append(dict(
            id=f'h{len(rows) + 1:03d}',
            group=' '.join(str(group).split()).title().replace(' And ', ' and '),
            item=' '.join(str(item).split()),
            serving=' '.join(str(serving).split()) if serving else '',
            mg=val,
            measured=bool(star) and str(star).strip() == '*',
        ))
    today = datetime.date.today().isoformat()
    meta = dict(posted=posted, file=path.split('/')[-1], rows=len(rows), importedOn=today,
                sourcePage='https://hsph.harvard.edu/department/nutrition/nutrition-questionnaire-service-center/',
                note='Includes animal foods for completeness; the curated list is vegan-only.')
    header = (f"// Harvard T.H. Chan School of Public Health oxalate table, posted {posted} (file {meta['file']}).\n"
              "// Measurements by Dr John Knight's laboratory, University of Alabama School of Medicine.\n"
              "// measured=true means the value was directly measured (the \"*\" in the original); others are calculated.\n"
              "// Regenerate with: python3 tools/harvard_xlsx_to_js.py <xlsx>\n"
              f"// Last updated: {today}\n\n")
    out = header + 'const HARVARD_META = ' + json.dumps(meta, indent=2, ensure_ascii=False) + ';\n\n' \
        + 'const HARVARD_DB = ' + json.dumps(rows, indent=2, ensure_ascii=False) + ';\n'
    with open('data/harvard.js', 'w', encoding='utf-8') as fh:
        fh.write(out)
    print(f'wrote data/harvard.js with {len(rows)} rows')

if __name__ == '__main__':
    main()
