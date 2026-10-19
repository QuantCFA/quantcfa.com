"""Regenerate the data behind tax-drag-jfp.md Figures 1 (SRC alpha) and 2 (RMD-reduction alpha)
from the app's /tax-drag-chart-data endpoint, write CSVs, and check them against Tables D1/D2."""
import csv, re, sys, os
sys.path.insert(0, r'C:\Users\chesh\Projects\Roth_app')
os.chdir(r'C:\Users\chesh\Projects\Roth_app')
import main

OUT = os.path.dirname(os.path.abspath(__file__))
PAPER = r'C:\Users\chesh\Projects\quantcfa\content\papers\tax-drag-jfp.md'
BASE_YEAR, AGE0, R = 2026, 62, 0.07
C, K, P = 121800, 17966, 96358.75           # P = C(1 - tD); tD solved to match Table D1 to the dollar
TD = 1 - P / C

res = main.tax_drag_chart_data(conv_tax=K, conv_amt=C, return_rate=R, drag_rate=0.05, method='R',
                               dist_reinvest_pct=0.75, years_to_start=12, life_years=20,
                               current_age=AGE0, dist_tax_rate=TD)
rows = res['years']
pv = lambda gap, yr: gap / (1 + R) ** (yr - BASE_YEAR)
# Owner's last year is 2058 (RMDs 2039-2058); 2059-2068 are beneficiary years, so age is left blank
OWNER_LAST_YEAR = BASE_YEAR + 12 + 20
for y in rows:
    if y['year'] > OWNER_LAST_YEAR:
        y['age'] = ''

# Figure 1 — SRC alpha
src, cum, cum_pv = [], 0.0, 0.0
src.append(dict(year=BASE_YEAR, age=AGE0, roth_bal=K, taxdrag_bal=K, roth_dist=0, taxdrag_dist=0,
                gap=0, gap_pv=0, cum_benefit=0, cum_benefit_pv=0))
for y in rows:
    g = round(y['hc_roth_dist'] - y['hc_tax_dist'], 2)
    cum += g; cum_pv += pv(g, y['year'])
    src.append(dict(year=y['year'], age=y['age'], roth_bal=y['hc_roth_bal'], taxdrag_bal=y['hc_tax_bal'],
                    roth_dist=y['hc_roth_dist'], taxdrag_dist=y['hc_tax_dist'], gap=g,
                    gap_pv=round(pv(g, y['year']), 2), cum_benefit=round(cum), cum_benefit_pv=round(cum_pv)))

# Figure 2 — RMD-reduction alpha
rmd, cum, cum_pv = [], 0.0, 0.0
rmd.append(dict(year=BASE_YEAR, age=AGE0, after_tax_principal=round(P), reinvest_roth_bal=0, reinvest_taxdrag_bal=0,
                roth_dist=0, taxdrag_dist=0, gap=0, gap_pv=0, cum_benefit=0, cum_benefit_pv=0))
for y in rows:
    g = round(y['rmd_roth_dist'] - y['rmd_tax_dist'], 2)
    cum += g; cum_pv += pv(g, y['year'])
    rmd.append(dict(year=y['year'], age=y['age'], after_tax_principal=y['trad_bal'],
                    reinvest_roth_bal=y['rmd_roth_bal'], reinvest_taxdrag_bal=y['rmd_tax_bal'],
                    roth_dist=y['rmd_roth_dist'], taxdrag_dist=y['rmd_tax_dist'], gap=g,
                    gap_pv=round(pv(g, y['year']), 2), cum_benefit=round(cum), cum_benefit_pv=round(cum_pv)))

for name, data in [('src-alpha-chart-data.csv', src), ('rmd-alpha-chart-data.csv', rmd)]:
    with open(os.path.join(OUT, name), 'w', newline='') as f:
        w = csv.DictWriter(f, fieldnames=list(data[0])); w.writeheader(); w.writerows(data)

print('endpoint totals:', {k: v for k, v in res.items() if k != 'years'})
print('CSV PV totals: SRC', src[-1]['cum_benefit_pv'], ' RMD', rmd[-1]['cum_benefit_pv'])

# Check every single-year row of Tables D1/D2
text = open(PAPER, encoding='utf-8').read()
num = lambda s: float(s.replace('\\$', '').replace('$', '').replace(',', '').strip() or 0)
def table(start):
    out = {}
    for line in text[text.index(start):].split('\n')[3:]:
        if not line.startswith('|'): break
        cells = [c.strip() for c in line.strip('|').split('|')]
        if re.fullmatch(r'\d{4}', cells[0]): out[int(cells[0])] = cells
    return out
d1, d2 = table('**Table D1.'), table('**Table D2.')
by_r = {r['year']: r for r in rmd}; by_s = {r['year']: r for r in src}
mism = []
for yr, c in d1.items():
    want = [num(c[2]), num(c[3]), num(c[4])] + ([num(c[5]), num(c[6])] if c[5] != '—' else [])
    got = [by_r[yr]['after_tax_principal'], by_r[yr]['reinvest_roth_bal'], by_r[yr]['reinvest_taxdrag_bal']] + \
          ([round(by_r[yr]['gap']), round(by_r[yr]['gap_pv'])] if c[5] != '—' else [])
    if [round(x) for x in want] != got: mism.append(('D1', yr, want, got))
for yr, c in d2.items():
    want = [num(c[2]), num(c[3])] + ([num(c[4]), num(c[5])] if c[4] != '—' else [])
    got = [by_s[yr]['roth_bal'], by_s[yr]['taxdrag_bal']] + \
          ([by_s[yr]['gap'], by_s[yr]['gap_pv']] if c[4] != '—' else [])
    if [round(x, 2) for x in want] != [round(x, 2) for x in got]: mism.append(('D2', yr, want, got))
print(f'checked D1 {len(d1)} rows, D2 {len(d2)} rows; mismatches: {len(mism)}')
for m in mism: print(m)
