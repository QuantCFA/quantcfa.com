# Tax-Drag Paper — Base Profile

**Locked 2026-08-22.** Replaces the age-69 profile behind the published `tax-drag-jfp.md`
figures. Engine run prices the avoided-RMD stream at $t_D$, not $t_C$ (commit `739d47a`), and
walks the tax-drag RMD divisors from the filer's actual first-RMD age (commit `ecafb3d`).

## Inputs, as entered

| | |
|---|---|
| Traditional savings | $700,000 |
| Roth savings | $0 |
| Social Security benefit (annual) | $25,000 |
| Taxable income when converting | $0 |
| Taxable income during retirement (annual) | $0 |
| Annual return | 7.0% |
| Inflation | 2.5% |
| SS growth | 2.5% |
| Tax drag on taxable account earnings | 5.0% |
| Distribution method | R (RMD) |
| Beneficiary taxable income (annual) | $100,000 |
| Distribution reinvestment | 75% |
| Filing status | S |
| Life expectancy | 20 years |
| Distribution start age | 75 |
| Social Security start age | 65 |
| Medicare coverage | Parts B and D |
| Tax payment source | Outside |

Inflation and SS growth are set equal, as both are CPI-driven. A real wedge exists — SS COLA uses
CPI-W, brackets use chained CPI-U, roughly 0.25–0.3pp/yr — but splitting them invites the charge
that torpedo years were manufactured.

## Derived timeline

Filer is 62 in the 2026 conversion year, so born ~1964. Under SECURE 2.0 §107 the applicable
RMD age is **75** for anyone born 1960 or later, which is why distributions begin at 75 rather
than 73. State the birth cohort explicitly in the paper — the whole schedule depends on it.

| Phase | Years | Ages |
|---|---|---|
| Conversion | 2026 | 62 |
| Gap — no distributions | 2027–2038 | 63–74 |
| Owner distributions (RMD) | 2039–2058 | 75–94 |
| Beneficiary decade (10-yr FA) | 2059–2068 | — |

`years_to_start_year` = 12 (computed as `start_year - run_year - 1`, line 915), `life_years` = 20.
SS begins 2029 at age 65 — after the conversion year, before every distribution year.

## Why these settings

- **Age 62 keeps $t_C$ at the plain statutory rate.** No Social Security in the conversion year
  (SS starts at 65) and no 65+ additional deduction, so $t_C$ is exactly 0 / 10 / 12 / 22 / 24%
  and the converted amounts are clean bracket fills with nothing to explain.
- **The OBBBA senior deduction never applies.** It runs 2025–2028 and requires age 65; this filer
  is 64 when it expires. The age-69 profile had it, which pushed $t_C$ to 22% × 1.06 = 23.3% and
  made the converted amount an unexplained figure — the reviewer's comment #7.
- **Medicare is $0 in every increment.** The 2-year lookback from a 2026 conversion lands in 2028,
  when the filer is 64 — below the 65 the engine requires (`calc_roth_conv_data.py:1518`) — so no
  conversion-year surcharge. And with thresholds inflating at 2.5%, late-year MAGI never reaches
  the single filer's first IRMAA threshold, so there are no distribution-year savings either.
  Medicare drops out of the paper entirely rather than needing a sidebar. At 2.0% inflation it did
  not: the same balance produced +$476 and +$462 in the two lowest increments.
- **SS at $25,000 keeps the torpedo mild**, so $t_D$ stays just below statutory rather than being
  pushed above it. That is what makes the rate-arbitrage deficit small enough for drag to cover at
  the 22% bracket and too large at the 24%.
- **$700,000 rather than $650,000.** Both work, but $700,000 makes the 24% increment fail by
  $1,105 instead of $501. A $501 miss invites the charge that the boundary is inside the noise of
  the assumptions; $1,105 does not.

## Results — bracket increments

| Bracket | Converted | Tax paid | Rate arb | Medicare | Drag | Net PV | $t_C^\Delta$ | $t_D^\Delta$ |
|---|---:|---:|---:|---:|---:|---:|---:|---:|
| Deduction | $16,100 | $0 | +$3,504 | $0 | +$319 | +$3,822 | 0.0% | 21.8% |
| 10% | $12,400 | $1,240 | +$1,423 | $0 | +$349 | +$1,772 | 10.0% | 21.5% |
| 12% | $38,000 | $4,560 | +$3,466 | $0 | +$1,134 | +$4,600 | 12.0% | 21.1% |
| 22% | $55,300 | $12,166 | −$918 | $0 | +$2,117 | **+$1,199** | 22.0% | 20.3% |
| 24% | $96,075 | $23,058 | −$4,978 | $0 | +$3,873 | **−$1,105** | 24.0% | 18.8% |

Rates are finite-increment $t^\Delta$, not levels. Cumulative conversion through each bracket:
$16,100 / $28,500 / $66,500 / $121,800 / $217,875.

## Headline result

Three findings, all inside one table:

1. **Rate arbitrage alone stops at the 12% bracket** — $66,500 converted. The 22% increment is
   −$918 on that channel and the 24% is −$4,978.
2. **Drag carries the conversion through the 22%** — $121,800, an 83% larger conversion, and
   $1,199 of value that rate arbitrage says should not exist.
3. **Drag runs out at the 24%.** Net −$1,105. The boundary is located, not asserted.

**Drag capacity.** Drag delivers 3.83% of the increment at the 22% bracket and 4.03% at the 24%,
against rate deficits of 1.7pp and 5.2pp respectively — so drag absorbs a rate-arbitrage deficit
of roughly **4 percentage points**, and the 24% increment sits 1.17pp beyond it.

Capacity is not constant across increments: it runs 1.98%, 2.81%, 2.98%, 3.83%, 4.03%, climbing
with $t_C$. The reason is structural — SRC alpha scales with the tax paid, so the deduction row
(where $t_C = 0$, hence $K = 0$) has no SRC leg at all. The tipping condition is

$$(1-t_D)\,\rho\,\mu_{RMD} \;+\; t_C\,\mu_{SRC} \;>\; t_C - t_D$$

so the drag channel partly self-finances the rate deficit: the deeper the conversion, the more tax
paid, the more SRC alpha generated. Quote the condition rather than a single threshold figure.

**Why $t_D^\Delta$ declines** (21.8 → 21.5 → 21.1 → 20.3 → 18.8) is the bracket descent. Each
increment displaces distributions from further down the RMD path, where the remaining balance is
smaller and the displaced dollars fall into lower brackets. Combined with $t_C$ climbing 22% → 24%,
that is what widens the gap and drives rate arbitrage increasingly negative.

## Engine notes

**Divisor fix (`ecafb3d`).** Before it, the drag functions walked divisors from `min(rmd_cache)` =
73 while the main distribution loop used actual age — two years young for this cohort, and
invisible in the age-69 profile where the two coincided. The fix raised drag alpha by 1.9%–6.3% by
row and left rate arbitrage, $t_C$ and $t_D$ untouched in all five rows, confirming it stayed
inside the drag calculation.

**SS provisional-income thresholds are correctly held fixed.** `ss_brackets_cache` (lines 787–791)
applies no inflation, unlike the tax brackets and the IRMAA thresholds (line 1378). The
$25,000/$34,000 thresholds have never been indexed, so this is right — and it means the inflation
assumption moves $t_D$ through bracket growth alone, not through the torpedo boundary.

## Unspecified / to confirm

- `use_irs_brackets` — not recorded; core-conversion uses 'Y'.
- Exact birth date. Age 62 in 2026 implies ~1964, which is what puts the filer in the SECURE 2.0
  age-75 cohort.
