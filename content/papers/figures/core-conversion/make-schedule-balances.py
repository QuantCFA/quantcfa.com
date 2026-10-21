# -*- coding: utf-8 -*-
"""Figure 1 of core-conversion.md: Traditional balance under the two schedules.

Writes schedule-balances.png beside this file.

Case B (fixed annuity) is reconstructed from its parameters — no database needed.
Case D (RMDs) is read from the Roth_app database, from the MOST RECENT run. That run
must be the case D configuration: $610,000 balance, $40,000 Social Security, RMDs from
age 75, life 9, inside funding, beneficiary decade at $100,000 heirs' income. The
assert on row count is the guard: 9 owner years + 10 beneficiary years = 19 rows.
Re-run case D in the app first if the assert fires.

Case D was called case E until 2026-09-17; the screenshot files on disk still use the
old letter. The legend labels here follow the paper.
"""
import sys
from decimal import Decimal as D
sys.path.insert(0, r"C:\Users\chesh\Projects\Roth_app")
import matplotlib
matplotlib.use("Agg")
import matplotlib.pyplot as plt
from matplotlib.ticker import FuncFormatter
from sqlalchemy.orm import sessionmaker
from sqlalchemy import func
from create_retire_database import engine, RetireYrData

B0, r = D("610000"), D("0.05")
CONV_YEAR, CONV_AGE = 2026, 62

# ---- case B: fixed annuity, distributions 2028..2047 ----
PMT = D("51395.37709564")
fa = {CONV_YEAR: B0}
bal = B0
for y in range(CONV_YEAR + 1, 2048):
    bal = bal * (1 + r) - (PMT if y >= 2028 else D(0))
    fa[y] = max(bal, D(0))

# ---- case D: RMD, from the engine ----
S = sessionmaker(bind=engine)
s = S()
try:
    RUN = s.query(func.max(RetireYrData.run_id)).scalar()
    rows = (s.query(RetireYrData).filter_by(run_id=RUN, conv_group_num=0)
            .order_by(RetireYrData.year).all())
    assert len(rows) == 19, len(rows)
    rmd = {CONV_YEAR: B0}
    bal = B0
    for y in range(CONV_YEAR + 1, rows[0].year.year):          # accumulation
        bal = bal * (1 + r)
        rmd[y] = bal
    for row in rows:                                            # engine output
        rmd[row.year.year] = D(row.trad_savings_opt)
finally:
    s.close()

# Expected: FA 2026..2047 terminal 0.00; RMD 2026..2057 terminal 0.00; peak 2044 ~1,129,994
print("FA  : %d..%d, terminal %.2f" % (min(fa), max(fa), fa[max(fa)]))
print("RMD : %d..%d, terminal %.2f" % (min(rmd), max(rmd), rmd[max(rmd)]))
print("RMD peak: %d  %.0f" % (max(rmd, key=lambda y: rmd[y]), max(rmd.values())))

fig, ax = plt.subplots(figsize=(7.0, 3.6))
for series, label, style in ((fa, "FA (case B)", "-"),
                             (rmd, "RMDs (case D)", "--")):
    yrs = sorted(series)
    ax.plot([y - CONV_YEAR + CONV_AGE for y in yrs],
            [float(series[y]) for y in yrs], style, linewidth=1.9, label=label)

ax.set_xlabel("Age")
ax.set_ylabel("Traditional balance")
ax.yaxis.set_major_formatter(FuncFormatter(lambda v, _: "$%.0fk" % (v / 1000)))
ax.set_xlim(CONV_AGE, 95)
ax.set_ylim(0, 1_320_000)
ax.legend(frameon=False, loc="upper left")
ax.spines[["top", "right"]].set_visible(False)
ax.grid(axis="y", alpha=0.25, linewidth=0.6)
fig.tight_layout()
out = r"C:\Users\chesh\Projects\quantcfa\content\papers\figures\core-conversion\schedule-balances.png"
fig.savefig(out, dpi=200)
print("wrote", out)
