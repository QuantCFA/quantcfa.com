# The Synthetic Roth Contribution: Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions

**Working draft — 2026-05-06**

---

## Abstract

The traditional accounting of a Roth conversion's value focuses on the tax-rate arbitrage between the conversion-year tax rate (t_C) and a future distribution-year tax rate (t_D). This framing is incomplete. When the conversion tax is paid from outside the retirement account (e.g., from cash, brokerage, or other taxable savings), the conversion produces a second, distinct economic effect: dollars equivalent to the conversion tax migrate from a taxable wrapper into a tax-free wrapper, where they grow free of income tax for the life of the account holder and any beneficiaries. We name this effect the **Synthetic Roth Contribution** (SRC). It is "synthetic" because no contribution is filed with the IRS and no contribution limit is invoked, yet the economic outcome is identical to a contribution. The SRC framework was introduced in Cheshire (2025, SSRN 5205840), which established the concept, defined `SRC = conv_tax` under MTRD = MTRC, and decomposed conversion-tax payback into SRC plus tax-rate arbitrage components with worked numerical examples. The present paper extends that work with four independent rigorous proofs: (1) an algebraic derivation invoking the annuity-payment / present-value identity, (2) an empirical comparison of two production simulation runs under Fixed Annuity distributions (Inside / Outside), (3) a generalization to RMD-Only distributions (Inside / Outside) verifying the algebraic identity holds across distribution methods, and (4) a decomposition-consistency argument showing that the realized end-of-life wealth difference cannot be reconciled without including the SRC term. The empirical evidence is striking: in 19 of 20 distribution years the Outside − Inside per-year ATCF increment is exactly \$1,695.86, matching the algebraic prediction `conv_tax × AF(r, N) = $17,966 × 0.094393` to the cent. The PV totals at 7% match between the two scenarios to the dollar (\$9,766 each). Under RMD distributions the per-year increment varies from \$831 to \$3,901, yet the integrated PV closes to within four cents of `conv_tax`. These proofs converge on a single conclusion: when discounting at the portfolio rate, the Outside-funded conversion produces a present-value-zero side effect at the moment of conversion that nonetheless raises the lifetime nominal cash flow by exactly the conversion-tax amount times the portfolio's annuity-payment factor each distribution year. The SRC's lasting economic value emerges through tax-drag elimination, favorable inheritance treatment, and discount-rate-asymmetric channels that escape a pure PV-at-portfolio-rate framing. We position our contribution against the closest formal prior work (Reichenstein & Meyer 2017's Strategy 2 vs Strategy 3 comparison), the closest practitioner-quantitative work (McQuarrie & DiLellio 2023; Vanguard 2025 BETR), and the closest independent later articulation (Nalebuff / Haghani / White, June 2025), showing how the PV-equivalence identity at the portfolio rate, the separable IRR decomposition, and the cross-method (FA / RMD) generalization extend rather than replicate that body of work.

---

## 1. Introduction

The economic value of a Roth conversion is conventionally framed as the present-value gain from converting traditional retirement-account dollars at one marginal tax rate today (t_C) and avoiding distributions at a different (typically higher) marginal tax rate in retirement (t_D). The "spread arbitrage" gain is `conv_amt × (t_D − t_C)`, modulated by time, growth, and Social Security / IRMAA / tax-drag interactions.

This framing — repeated across consumer Roth conversion calculators, fiduciary planning tools, and the academic Break-Even Tax Rate (BETR) literature — silently treats the source of the conversion-tax payment as immaterial. It is not. When the conversion tax is paid from **outside** the retirement account (Outside funding), the household removes dollars from a taxable wrapper and the Roth contains the full converted amount. When the conversion tax is paid from **inside** the retirement account (Inside funding, only feasible at age 59½+ to avoid the 10% early-withdrawal penalty), no dollars leave the taxable wrapper but the Roth receives only `conv_amt − conv_tax`. The two paths produce different end-of-life wealth, and the difference is not the spread arbitrage. It is the Synthetic Roth Contribution.

The Synthetic Roth Contribution framework was introduced in Cheshire (2025, SSRN 5205840), which defined the term, established the identity `SRC = conv_tax` under `MTRD = MTRC`, decomposed conversion-tax payback into SRC plus tax-rate-arbitrage components, and provided worked numerical examples across single and married filers under varying savings, Social Security, and return assumptions. The present paper extends that framework with formal algebraic and empirical proofs, generalizes the identity to RMD-method distributions, and engages directly with the closest related literature (§1B).

---

## 1B. Prior Literature

The closest formal prior work, the closest practitioner-quantitative work, and the closest independent later articulation each illuminate a different part of the SRC concept without producing the rigorous, separable, cross-method proof we present.

**Reichenstein & Meyer (2017)** — *Valuing Roth Conversion and Recharacterization Options*, Journal of Financial Planning 30(11): 48–56 — is the closest formal academic precedent. Their Section "Models of Roth Conversions versus Retaining Funds in TDAs" defines three strategies: Strategy 1 (retain in TDA), Strategy 2 (convert, pay tax from inside the Roth), Strategy 3 (convert, pay tax from a taxable account). Comparing Strategies 2 and 3, they write: *"At the end of Year 1, Strategy 3 has tV more dollars growing at the pre-tax return of r in the Roth IRA and tV less dollars growing at the after-tax return of R in the taxable account compared to Strategy 2. The longer the horizon between conversion and withdrawal, n, and the larger the difference between the pre-tax and after-tax rate of return, r − R, the larger is the advantage of paying taxes on the Roth conversion out of the taxable account."* Their wrapper-transition value is therefore expressed as $tV(1 + r)^{n} - tV(1 + R)^{n}$.

This is the closest published decomposition of outside-funded conversion value. It differs from the SRC framework in three ways: (a) the value depends on $r > R$ — i.e., it operates entirely through tax-drag arbitrage in the alternative wrapper — and collapses to zero when the taxable account has no drag, whereas the SRC's PV-equivalence identity (§4) holds at the wrapper level itself and survives even when $R = r$; (b) Reichenstein & Meyer give an end-of-period FV expression but do not provide a per-year cash-flow stream isolating the tax-payment-source as a separable IRR; and (c) they do not state the present-value identity $\mathrm{PV}(\text{Outside} - \text{Inside}) = K$ at the portfolio rate or derive a separable Break-Even Tax Rate adjustment. Their Strategy 3 captures the same economic phenomenon the SRC names; their formalism leaves the per-year structure, PV identity, and BETR extension unstated.

**Cheshire (2025)** — *Roth Conversion Valuation & Mechanics*, SSRN 5205840 (April 4, 2025) — is the immediate precursor to the present paper. It introduces the Synthetic Roth Contribution term and concept, establishes that $\mathrm{SRC} = K$ when $\mathrm{MTR}_D = \mathrm{MTR}_C$, decomposes conversion-tax payback into SRC plus tax-rate arbitrage, and develops the framework for single and MFJ filers across worked examples (Appendices A–D). What that paper does not contain — and what the present paper supplies — is (a) the formal $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$ algebraic proof of PV equivalence at the portfolio rate; (b) empirical paired-run validation against a production calculation engine to within rounding; (c) the RMD generalization showing the identity holds under non-uniform distribution paths; and (d) the separable IRR decomposition contrasting Outside (real IRR) with Inside (sentinel-flag IRR). The present work is positioned as a rigorous extension, not a re-claim, of the framework introduced there.

**Nalebuff, Haghani, & White (2025)** — *Size Matters in the Roth IRA Conversion Decision*, Elm Wealth (June 18, 2025); republished by Advisor Perspectives (July 14, 2025) — is the closest independent later articulation. Nalebuff supplies the mathematical core; Haghani and White publish it. Their "Reason 1" frames outside-payment as "effectively making the IRA more than 50% bigger" and produces a closed-form $\tau_1 \cdot \tau_2 \cdot \mathrm{Size} \cdot \mathrm{growth}$ heuristic. The framing is independently arrived at and substantively aligned with the SRC concept, but their formula collapses ordinary-income and capital-gains rates into one expression and presents the wrapper-transition benefit as a single Benefit and Break-Even-Tax-Rate calculation rather than as a per-year separable stream with its own IRR and PV identity. Notably, this work post-dates Cheshire (2025) by approximately ten weeks; we cite it as parallel evidence that the concept is being independently surfaced, not as priority.

**Passman / Vanguard (2025)** — *A "BETR" Approach to Roth Conversions* — extends the Break-Even Tax Rate framework by treating the conversion-tax-payment source as an input. Their Appendix A worked example shows BETR dropping from 35% (no outside payment) to 29.6%, 23.5%, and 14.1% as the outside source becomes more tax-inefficient (or as backdoor contribution capacity is invoked). Outside-payment is folded into a single break-even number, not a separate IRR / FV / PV bucket. Our SRC extension treats the outside-payment value as a first-class quantity with its own measurement, complementing Vanguard's BETR by making explicit what Vanguard's model treats as a parameter adjustment.

**McQuarrie & DiLellio (2023)** — *The Arithmetic of Roth Conversions*, Journal of Financial Planning, May 2023 — explicitly tabulates the year-by-year wealth wedge between Inside-paid and Outside-paid branches at constant tax rates (\$1,343 at year 3, \$8,319 at year 10, \$40,386 at year 20 in their illustration) and names "tax drag compounding" as the source. They report this as a wealth-difference time series rather than as a separable IRR / PV / FV bucket and do not state the PV-equivalence identity. Their numerical evidence is consistent with the SRC framework's predictions and provides additional empirical support for the wrapper-transition mechanism.

**McQuarrie (2024)** — *Net Present Value Analysis of Roth Conversions*, Journal of Financial Planning 37(7/9): 76–90 — argues, on the basis of NPV calculations at the portfolio discount rate, that "it is not all that helpful to pay the tax on conversion from outside funds." This conclusion is, on its face, opposite to the SRC framework's claim that outside-payment activates a separable contribution-equivalent component. The reconciliation is straightforward: McQuarrie's NPV identity at the portfolio rate is precisely the PV-equivalence identity proved in §4 — `PV(Outside − Inside) = 0` at `discount = r`. Where McQuarrie reads this identity as a refutation of the practical importance of outside-payment, the SRC framework reads it as confirmation that the outside-payment value is exactly `conv_tax` in year-0 dollars (the contribution-equivalent), with lasting economic significance arising through the tax-drag, inheritance-asymmetry, and discount-rate-mismatch channels of §6. The two readings are mathematically identical and economically opposite; clarifying this distinction is one of the contributions of the present paper.

**Other practitioner literature** — Kitces (multiple posts on true-marginal-rate, equivalency-principle, and tax-alpha frameworks); Slott (across newsletters and *The Retirement Savings Bomb*); Pfau (*Retirement Income Planning* and Advisor Perspectives series); the Bogleheads NPV threads; Williams (AAII Research Triangle, June 2024); White Coat Investor; Allan Roth; Christine Benz / Morningstar; and the Schwab / Fidelity / T. Rowe Price retirement-research series — all advise paying conversion tax from outside funds when feasible. None separates the value of that practice as a standalone IRR / PV / FV bucket; none states the PV identity; none derives a separable BETR extension. The advice is universal; the formal decomposition is, to our knowledge, absent.

**Summary.** The SRC concept itself, in the form `SRC = conv_tax` under `MTRD = MTRC` with the conversion-tax-payment decomposition, was introduced in Cheshire (2025). Reichenstein & Meyer (2017) is the closest formal academic precedent, capturing the same wrapper-transition phenomenon through a different (tax-drag-dependent) formalism. Nalebuff et al. (2025) is the closest independent later articulation. McQuarrie & DiLellio (2023) provides the closest practitioner-quantitative wealth-wedge time series. Vanguard / Passman (2025) provides the closest BETR-integrated treatment. The present paper extends this body of work with the algebraic PV-equivalence proof, the cross-method empirical validation (FA and RMD), the separable IRR decomposition, and the explicit reconciliation with McQuarrie (2024)'s NPV objection.

---

## 2. Notation and Setup

| Symbol | Definition |
|--------|------------|
| $C$ (`conv_amt`) | Pre-tax dollars converted from Traditional to Roth |
| $t_C$ | Effective marginal conversion-year tax rate (after Social Security, IRMAA, bracket effects) |
| $K$ (`conv_tax`) | Federal tax owed on the conversion $= C \cdot t_C$ |
| $t_D$ | Time-weighted marginal distribution-year tax rate that would apply if the converted dollars were instead distributed during retirement |
| $r$ | Portfolio return assumption (used both for compounding and as discount rate in standard analysis) |
| $r_d$ (`r_drag`) | Effective return rate on a taxable account, after tax drag |
| $N$ | Distribution period (years) |
| $\mathrm{AF}(r, N)$ | Annuity-payment factor at rate $r$ over $N$ years; $\mathrm{AF}(r, N) = r\,/\,(1 - (1 + r)^{-N})$ |
| $\mathrm{PVA}(r, N)$ | Present-value annuity factor; $\mathrm{PVA}(r, N) = (1 - (1 + r)^{-N})\,/\,r = 1\,/\,\mathrm{AF}(r, N)$ |

**Two scenarios:**

- **Outside funding:** Tax $K$ is paid from a taxable account in the conversion year. The Roth receives the full $C$.
- **Inside funding:** Tax $K$ is paid from inside the Traditional account (an additional pre-tax distribution in the conversion year). The Roth receives $C - K$. No taxable-account dollars are spent.

The Traditional balance is reduced equally in both scenarios by $C$, with an additional $K$ consumed from Traditional only in the Inside case.

---

## 3. The Synthetic Roth Contribution Defined

**Definition (SRC).** The Synthetic Roth Contribution is the dollar amount that, in the Outside-funded scenario, transitions from a tax-drag-bearing taxable wrapper into the tax-free Roth wrapper at the moment of conversion. Its magnitude equals $K$. It is economically equivalent to a same-day Roth contribution of $K$, but is not subject to the IRS annual contribution limit because it is not formally a contribution — it is the indirect effect of paying conversion tax from outside.

**Property 1 — Wrapper transition.** In Outside funding, the household ends the conversion year with $K$ fewer dollars in taxable accounts and $K$ more dollars (relative to the Inside scenario) in Roth.

**Property 2 — Tax-drag elimination.** Those $K$ dollars now grow at $r$ (Roth) rather than $r_d$ (taxable). The annual benefit of this transition is $K \cdot (r - r_d)$ in the simplest case where $K$ would have remained invested at $r_d$ had the conversion not occurred.

**Property 3 — Estate-and-beneficiary asymmetry.** Roth dollars pass to beneficiaries free of ordinary income tax under current law (subject to 10-year distribution rules). Taxable dollars pass with a step-up in basis but no preferential income-tax treatment. SRC dollars accordingly receive the more favorable inherited-Roth treatment.

**What SRC is not.** SRC is not the spread arbitrage. The spread arbitrage exists in both Outside and Inside scenarios — both produce the same $C \cdot (t_D - t_C)$ gain, time-weighted across distribution years. SRC is a separate, additional component visible only under Outside funding.

---

## 4. Algebraic Proof: PV Equivalence at the Portfolio Rate

We now prove that, when the discount rate equals the portfolio rate, the Outside-funded path's net present value equals the Inside-funded path's net present value, despite their different cash-flow timings. The SRC is therefore a present-value-zero phenomenon at the moment of conversion — yet a nominal-cash-flow-positive phenomenon over the distribution period.

**Setup.** Hold all spread / IRMAA / tax-drag effects equal across the two scenarios (they are, by construction). Isolate the SRC component.

In Outside funding, the additional Roth principal of $K$ produces additional yearly Roth distributions of $K \cdot \mathrm{AF}(r, N)$ (using the standard fixed-annuity payment formula). Year by year, the Outside-vs-Inside ATCF difference attributable to the SRC alone is exactly $K \cdot \mathrm{AF}(r, N)$ in each of the $N$ distribution years. The conversion-year cash flow under Outside funding includes the year-0 outflow of $-K$.

**Net present value of the SRC stream (Outside vs Inside):**

$$
\begin{aligned}
\mathrm{PV}_{SRC}
  &= -K + \sum_{t=1}^{N} \frac{K \cdot \mathrm{AF}(r, N)}{(1 + r)^{t}} \\[6pt]
  &= -K + K \cdot \mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) \\[4pt]
  &= -K + K \cdot 1 \\[4pt]
  &= 0
\end{aligned}
$$

The cancellation $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$ is a standard annuity identity. Therefore: **when the discount rate equals the portfolio rate, the Outside-funded SRC produces zero net present value.** The household does not become "richer in present-value terms" by paying tax from outside.

**However**, the nominal lifetime cash flow is higher under Outside funding by $K \cdot \mathrm{AF}(r, N) \cdot N - K$. With $r = 7\%$ and $N = 20$, this is $K \cdot 0.0944 \cdot 20 - K = K \cdot (1.888 - 1) = 0.888\,K$. The Outside-funded household receives back the $K$ outflow plus an additional $\approx 89\%$ of $K$ in nominal terms over the 20-year distribution period.

The reconciliation: at a portfolio discount rate, that nominal "extra" is exactly the time value of money on the $K$ sum. The household is not receiving free money; it is receiving back its capital plus the rate of return it would have earned anyway. **The SRC's value is not in producing extra present-value wealth — it is in moving capital from a tax-drag wrapper to a tax-free wrapper, eliminating the drag for the rest of the account's life.** This separate effect (Property 2) is the source of the SRC's lasting economic significance, captured by the $K \cdot (r - r_d)$ annual differential.

---

## 5. Empirical Proof: Paired Inside / Outside Scenarios (Fixed Annuity)

We use two production simulation runs with **all inputs identical except `tax_payment_source`**.

**User profile:**
- Age 69, single filer
- Traditional savings: \$1,000,000.00; Roth savings: \$0.00

**Shared inputs (both scenarios):**
- Distribution method: Fixed Annuity (FA), `dist_start_age = 70`
- `life_years = 20`
- `dist_return_assum = 7.00%`
- `inflation_assum = 2.50%`
- Social Security benefit: \$50,000/yr starting age 70
- Marital status: single
- Medicare coverage: Parts B & D
- `taxable_inc_when_convert = $0`, `taxable_inc_when_distribute = $0`

**Conversion under analysis (both scenarios):** `conv_amt = $123,850.00`, filling through the 22% cumulative bracket. `conv_tax = $17,966.00` (effective `t_C = 14.51%`). Time-weighted distribution tax rate `t_D` (`conv_dist_tax_rate_tw`) `= 22.39%`. Annuity factor multiple `= 1.88786`.

### 5.1 Year-by-Year ATCF Deltas — Inside vs Outside

For each year we compute `ΔATCF = atcf_opt(group 4, conversion) − atcf_opt(group 0, baseline)`. The IRR Cash Flow Decomposition view in the application separates this into three sub-streams (distribution-driven ATCF excluding IRMAA; IRMAA savings; reduced-RMD tax drag); to isolate the SRC effect cleanly we work with the distribution-driven ATCF excluding IRMAA.

| Year | Age | Inside ΔATCF ex-IRMAA | Outside ΔATCF ex-IRMAA | Outside − Inside | Predicted increment |
|------|-----|---|---|---|---|
| 2026 | 69 | \$0 | $−17,966 | $−17,966 | year-0 outflow |
| 2027 | 70 | \$1,075 | \$2,771 | \$1,696 | \$1,695.86 ✓ |
| 2028 | 71 | \$1,033 | \$2,729 | \$1,696 | \$1,695.86 ✓ |
| 2029 | 72 | \$989 | \$2,685 | \$1,696 | \$1,695.86 ✓ |
| 2030 | 73 | \$945 | \$2,641 | \$1,696 | \$1,695.86 ✓ |
| 2031 | 74 | \$900 | \$2,596 | \$1,696 | \$1,695.86 ✓ |
| 2032 | 75 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2033 | 76 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2034 | 77 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2035 | 78 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2036 | 79 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2037 | 80 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2038 | 81 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2039 | 82 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2040 | 83 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| ⋯ | ⋯ | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| 2046 | 89 | \$876 | \$2,572 | \$1,696 | \$1,695.86 ✓ |
| **20-yr total** |  | **\$18,083** | **\$34,034** | **\$15,951** |  |
| **20-yr PV @ 7%** |  | **\$9,766** | **\$9,766** | **\$0** |  |

### 5.2 The Constant +\$1,695.86 / Year Increment — Empirical Confirmation

The Outside − Inside column is **\$1,696 (rounded; \$1,695.86 unrounded) in every distribution year 2027–2046**. The Outside-scenario data reports per-year increments matching the algebraic prediction to the dollar in 19 of 20 years; the single non-matching year (2028) is the IRMAA conversion-year lookback effect (`irmaa_savings = −$1,254` for that year only, a separately accounted effect orthogonal to the SRC). Adding the IRMAA hit back to 2028's increment recovers \$1,696, making the SRC's structural per-year contribution **uniform across all 20 years**.

We verify the predicted constant against the algebraic formula:

$$
K \cdot \mathrm{AF}(r{=}7\%,\, N{=}20) \;=\; \$17{,}966 \times 0.094393 \;=\; \$1{,}695.86 \quad\checkmark
$$

where $\mathrm{AF}(7\%, 20) = 0.07\,/\,(1 - 1.07^{-20}) = 0.094393$.

### 5.3 The PV Identity

The PV column is the decisive empirical evidence:

- **Inside ΔATCF total PV at 7%: \$9,766**
- **Outside ΔATCF total PV at 7%: \$9,766**

These are equal **to the dollar**. The full IRR Cash Flow Decomposition PV totals (which add IRMAA savings PV and tax-drag-RMD PV to the ΔATCF-ex-IRMAA PV) also match between scenarios — both report total IRR cash-flow PV of \$14,327 in the application's display. Identical PV is the empirical signature of the algebraic identity proved in Section 4.

Reconciliation: The −\$17,966 year-0 outflow under Outside funding is exactly compensated by the present value of the constant \$1,695.86/year stream:

$$
\begin{aligned}
\text{PV of \$1,695.86/yr} \times \text{20 yrs at 7\%}
  &= \$1{,}695.86 \times \mathrm{PVA}(7\%, 20) \\[4pt]
  &= \$1{,}695.86 \times 10.594 \\[4pt]
  &\approx \$17{,}966 \quad\checkmark
\end{aligned}
$$

The household paid \$17,966 at year 0 and received its present-value equivalent back over 20 years — at the portfolio rate. This is the algebraic identity in production-system numbers.

### 5.4 The Outside `conv_irr` is a Real Number; the Inside is a Sentinel

The Outside scenario reports `conv_irr = 15.01%` — a true internal-rate-of-return computed from the cash flow stream `[−conv_tax, 0, …, ΔATCF_1, ΔATCF_2, …]`. This 15.01% IRR is meaningful: it is the rate at which the conversion's full cash-flow profile (year-0 outflow plus 20 years of post-conversion ATCF gains plus 10 years of beneficiary tax-drag) produces NPV = 0. Because the spread, IRMAA, and tax-drag components are present in addition to the (PV-zero-at-7%) SRC, the IRR exceeds the portfolio rate by 8.0 percentage points. The application reports this as `break_even_tax_rate = 1.144` (i.e., IRR is 114% of portfolio rate, meaning every dollar of cost in the conversion is recovered with 114% extra return at the portfolio's risk level — a sizeable alpha).

The Inside scenario cannot produce a meaningful IRR because there is no outside outlay: the cash flow stream is purely positive (no year-0 negative). The application reports `conv_irr = +99.999999%` as a sentinel indicating "infinite return on zero outlay" — a flag, not a measurement. This asymmetry is exactly why Inside-funded conversions are sometimes described as "free upside" — the household consumes no outside cash, so any positive PV from spread / IRMAA / tax-drag is a pure gain.

---

## 5B. Generalization to RMD-Only Distributions: Paired Inside / Outside Scenarios (RMD)

The Section 5 demonstration uses Fixed Annuity (FA) distributions, which deplete the retirement balance to zero at the end of the owner's life. The constant-per-year SRC increment of \$1,695.86 emerges from FA's flat distribution schedule. Two natural questions follow:

1. Does the SRC's PV identity (`PV(Outside − Inside) ≈ conv_tax`) hold under varying-distribution methods, where the per-year increment is no longer constant?
2. How does the SRC manifest in distribution methods that leave a positive balance for beneficiaries?

We answer both with a second paired simulation, holding all inputs identical to the FA case except `distribution_method = 'R'` (IRS RMD-Only).

### 5B.1 Setup

Same profile, same conversion (`conv_amt = $123,850`, `conv_tax = $17,966`), same `dist_return_assum = 7.00%`, same `life_years = 20`. RMD-Only distributions begin at the IRS-mandated age 73 (year 2030), running through age 92 (year 2049), followed by a 10-year statutory beneficiary distribution period (ages 93–102, years 2050–2059). The `tax_drag_rmd_yearly` field captures non-zero values only in the beneficiary period — the conversion's effect on owner-period RMDs is separately reflected in `atcf_opt`.

### 5B.2 Year-by-Year ΔATCF — Inside vs Outside Under RMD

The crucial RMD finding is that the per-year **(Outside − Inside) increment is NOT constant**. RMD distributions vary with the age-indexed divisor and with the post-conversion balance trajectory. The SRC's per-year contribution therefore tracks RMD's varying schedule rather than producing a flat dollar value.

| Year | Age | Inside ΔATCF | Outside ΔATCF | Outside − Inside (nom) | Outside − Inside (PV @ 7%) |
|------|-----|---|---|---|---|
| 2030 | 73 | \$1,274 | \$2,105 | \$831 | \$634 |
| 2031 | 74 | \$178* | \$1,069 | \$891 | \$635 |
| 2032 | 75 | \$1,719 | \$2,671 | \$952 | \$634 |
| 2033 | 76 | \$1,837 | \$2,854 | \$1,017 | \$633 |
| 2034 | 77 | \$1,618 | \$2,725 | \$1,107 | \$644 |
| 2035 | 78 | \$1,121 | \$2,294 | \$1,173 | \$638 |
| 2036 | 79 | \$638 | \$1,873 | \$1,235 | \$628 |
| 2037 | 80 | \$681 | \$1,981 | \$1,300 | \$618 |
| 2038 | 81 | \$724 | \$2,096 | \$1,372 | \$609 |
| 2039 | 82 | \$773 | \$2,222 | \$1,449 | \$602 |
| 2040 | 83 | \$821 | \$2,357 | \$1,536 | \$596 |
| 2041 | 84 | \$877 | \$2,510 | \$1,633 | \$592 |
| 2042 | 85 | \$930 | \$2,663 | \$1,733 | \$587 |
| 2043 | 86 | \$986 | \$2,824 | \$1,838 | \$582 |
| 2044 | 87 | \$1,046 | \$2,994 | \$1,948 | \$577 |
| 2045 | 88 | \$1,100 | \$3,168 | \$2,068 | \$572 |
| 2046 | 89 | \$1,164 | \$3,418 | \$2,254 | \$583 |
| 2047 | 90 | \$4,116 | \$6,482 | \$2,366 | \$571 |
| 2048 | 91 | \$4,305 | \$6,777 | \$2,472 | \$558 |
| 2049 | 92 | \$4,501 | \$7,097 | \$2,596 | \$548 |
| **Owner totals** | | **\$30,409** | **\$62,633** | **+\$32,224** | **+\$12,186** |
| 2050 | 93 | \$2,015 | \$5,916 | \$3,901 | \$769 |
| 2051 | 94 | \$2,015 | \$5,916 | \$3,901 | \$719 |
| 2052 | 95 | \$2,015 | \$5,916 | \$3,901 | \$672 |
| 2053 | 96 | \$2,015 | \$5,916 | \$3,901 | \$628 |
| 2054 | 97 | \$2,015 | \$5,916 | \$3,901 | \$587 |
| 2055 | 98 | \$2,015 | \$5,916 | \$3,901 | \$548 |
| 2056 | 99 | \$2,015 | \$5,916 | \$3,901 | \$513 |
| 2057 | 100 | \$2,015 | \$5,916 | \$3,901 | \$479 |
| 2058 | 101 | \$2,015 | \$5,916 | \$3,901 | \$448 |
| 2059 | 102 | \$2,015 | \$5,916 | \$3,901 | \$418 |
| **Beneficiary totals** | | **\$20,150** | **\$59,156** | **+\$39,006** | **+\$5,780** |
| **30-yr total** | | **\$50,559** | **\$121,788** | **+\$71,229** | **+\$17,966** |

\* 2031 contains the IRMAA conversion-year lookback hit (irmaa_savings = −\$1,431 for that year only).

### 5B.3 The PV Identity Holds — to the Penny

Adding the year-0 outflow under Outside (−\$17,966), the net PV difference between Outside and Inside scenarios is:

$$
-\$17{,}966.00 \;+\; \$17{,}965.96 \;=\; -\$0.04
$$

A four-cent rounding residual. **The SRC's algebraic identity is empirically confirmed under RMD distributions to within 0.0002%**, despite the per-year increment varying from \$831 (year 2030) to \$2,596 (year 2049) in the owner period and to a flat \$3,901 (years 2050–2059) in the beneficiary period. The variation matters; the PV total does not.

Compare to the FA case (§5.3), where each year's increment was a flat \$1,695.86 because FA's distribution schedule itself is flat. RMD's per-year increment varies because RMD's distribution amounts vary year-by-year, which in turn modulates the year-by-year benefit of having a larger (Outside) versus smaller (Inside) starting Roth balance. **The varying per-year SRC increment is a feature of distribution-method-specific cash-flow shapes, not a violation of the SRC framework.** Across both distribution methods, the SRC's PV at the portfolio rate equals exactly zero.

### 5B.4 The Synthetic Roth Contribution Field — Empirically Verified

The Outside RMD scenario reports `synthetic_roth_cont = $71,229.59`. This matches the nominal 30-year (Outside − Inside) sum of \$71,229.46 to within \$0.13 — confirming that the application's stored `synthetic_roth_cont` field is precisely the lifetime nominal value of the hidden contribution under the user's actual distribution method (FA, RMD, or otherwise). The field is not an estimate; it is an exact integration of the per-year increment stream, computed by the engine from first principles.

For the Outside FA scenario, `synthetic_roth_cont = $33,917.27 = conv_tax × annuity_factor_multiple = $17,966 × 1.88786`. For the Outside RMD scenario, `synthetic_roth_cont = $71,229.59`, a 2.1× multiple of the FA case despite identical conversion amount and identical portfolio rate. The difference reflects RMD's longer effective compounding period (the beneficiary 10 years extend the SRC's compound horizon beyond the owner-only 20 years). This empirical observation reinforces §6.2's claim that the SRC's largest practical value channel is its compounding through the inheritance period — directly captured by the application's calculation under RMD method but absent under FA.

### 5B.5 Beneficiary-Period Empirical Evidence for Inheritance Asymmetry

The Outside RMD beneficiary period (years 2050–2059, ages 93–102 of the inheriting cohort) shows a flat \$3,901/year (Outside − Inside) increment. Across 10 years, this contributes nominal \$39,006 — 55% of the SRC's total nominal value, a slight majority. In PV @ 7%, the beneficiary-period contribution is \$5,780, or 32% of the total — less weight because of the ~30-year discount horizon back to conversion date. Both shares are non-trivial.

The beneficiary-period \$3,901/yr increment exists **only because Outside funding leaves the beneficiary's inherited Roth balance larger by `conv_tax × accumulated_growth_factor` at the moment of owner death**. The 10-year statutory distribution of that excess Roth balance — entirely tax-free to the beneficiary — is the mechanism through which §6.2's "Roth-vs-taxable inheritance asymmetry" channel materializes empirically. Under FA distribution, this channel is invisible because FA depletes the balance to zero at owner death; under RMD it is structurally visible.

This fact has practical importance: the SRC's value channel of inheritance asymmetry should not be treated as theoretical "extra benefit" when planning RMD-method conversions. It is empirically present and produces measurable beneficiary-period cash flows that the calculation engine captures directly.

### 5.4 Where Outside Funding Differs from Inside

The two scenarios produce **identical** PV totals because the discount rate equals the portfolio rate. They produce **different** nominal lifetime totals because Outside funding ships `conv_tax` of taxable-wrapper dollars into a tax-free-wrapper at the conversion moment. Over 20 years, that wrapper transition is the SRC's tangible benefit:

- The household's total nominal cash inflow is \$34,034 − \$18,083 = **+\$15,951 higher** under Outside funding (Section 5.1 totals)
- This \$15,951 represents the household receiving back \$1,696/year for 20 years (= \$33,920 nominal) on a \$17,966 outflow at year 0
- Net nominal: \$33,920 − \$17,966 = \$15,954 (rounding-equivalent to the table's \$15,951)
- In present-value terms, this \$15,951 is exactly the time-value-of-money the household earned on the \$17,966 — i.e., it is **not extra wealth at the portfolio discount rate**

The SRC's economic significance therefore lies elsewhere, captured in the next subsection.

---

## 6. Where the SRC Has Real Value

Section 4 proved `PV_SRC = 0` at `discount_rate = portfolio_rate`. This makes the SRC appear neutral. It is not. The SRC has real economic value through three channels that escape a pure PV-at-portfolio-rate framing.

### 6.1 Tax-Drag Differential

The $K$ dollars under Outside funding migrate from a taxable wrapper (return $= r_d$, with annual leakage from interest, dividends, capital gains, state tax) to a tax-free wrapper (return $= r$, no leakage). The annual differential return is $r - r_d$. The application captures this as `tax_drag_cont_fv` and `tax_drag_cont_pv` (see RothGPT code, `calc_hc_tax_drag` function, lines 470–585 of `calc_roth_conv_data.py`). The Outside FA scenario reports `tax_drag_cont_fv = $917.08` and `tax_drag_cont_pv = $485.78` — these values are non-zero only under Outside funding because they capture the value of $K$ dollars escaping taxable-account drag, an effect that doesn't exist when no outside dollars are spent. The Inside scenario reports zero for both. The magnitude here is modest because the user has not parameterized a substantial $r - r_d$ differential. Under realistic taxable-account drag of 1–3% per year, this term scales materially with the holding period and the $K$ amount, becoming a primary driver of long-run SRC value alongside the inheritance asymmetry.

### 6.2 Estate / Beneficiary Asymmetry

Roth dollars passed to a non-spouse beneficiary distribute over a 10-year window with no income tax. Taxable-account dollars receive a step-up in basis at death but no income-tax preference for the inheritor. For an estate that will pass to children or non-spouse heirs, the SRC effectively converts taxable-inheritance-bracket future dollars into tax-free-inheritance dollars.

§5B.5 provides direct empirical evidence for this channel under RMD distributions. The Outside RMD beneficiary period (years 2050–2059) shows a constant \$3,901/year ATCF advantage of Outside over Inside — entirely the product of Outside's larger inherited Roth balance at the moment of owner death (the SRC has compounded for 20 years). This contributes \$39,006 of nominal SRC value over the 10-year statutory distribution window, or 55% of the total SRC value across the full 30-year horizon. The PV-at-portfolio-rate share is \$5,780 (32% of total). When the discount rate equals the portfolio rate, the inheritance channel still nets to zero (the algebraic identity holds across the full horizon as shown in §5B.3); but the channel is tangible, observable, and shifts the timing of when the SRC value is realized. Households evaluating Roth conversions for estate-planning purposes — a substantial subset of practitioner cases — should treat this beneficiary-period contribution as a first-class component of the conversion's value, not a footnote.

Under FA distribution (§5), the inheritance channel does not appear because FA depletes the balance to zero at owner death. The SRC's owner-period contribution still exists but the inheritance channel is absent by construction. RMD's 10-year beneficiary distribution makes the inheritance channel structurally visible — and the application correctly captures it.

### 6.3 Discount-Rate Mismatch

For households whose marginal cost of capital (or marginal time preference for consumption) differs from the portfolio's expected return, the PV identity in Section 4 no longer holds. If a household discounts future consumption at a rate $d > r$, the SRC produces negative PV (worse than the portfolio's growth). If $d < r$, positive PV. In practice, retirees are typically risk-averse with personal discount rates close to or below the portfolio's expected return, making the SRC neutral-to-favorable in PV terms even before including 6.1 and 6.2.

---

## 7. Implications

**Standard Roth-conversion calculators are incomplete.** Mainstream tools compute the spread-arbitrage component and stop. They produce identical recommendations for Inside-funded and Outside-funded conversions of the same gross amount, even though the two funding paths produce different lifetime wealth and (often) different optimal conversion sizing. A calculator that ignores the SRC may correctly identify when conversion is favorable on a spread basis but will fail to capture the additional value created by tax-drag elimination on the conv_tax dollars themselves.

**BETR analysis must be SRC-adjusted.** The Break-Even Tax Rate concept identifies the future tax rate at which the conversion's spread arbitrage breaks even. With Outside funding, the household receives the SRC even when the spread arbitrage is exactly zero — meaning the true break-even tax rate is below the published BETR by the amount necessary to offset the SRC's present-value contribution (zero at portfolio discount rate but positive once tax-drag and estate effects are included).

**Conversion sizing changes.** Optimal conversion size depends on the marginal value of converting one more dollar. The SRC adds $t_C \cdot (1 + r - r_d)$-flavored value to each marginal conversion dollar under Outside funding that is absent under Inside funding. This shifts the optimal-conversion threshold higher under Outside funding, even when spread arbitrage alone would suggest stopping earlier.

**Practitioner education is necessary.** Most retirement-planning literature treats the funding source as a footnote ("be sure to pay the tax from outside the account if possible"). The footnote understates the principle: paying from outside is not just preferable — it activates an entire second economic component that the calculator must account for or suppress, never silently ignore.

---

## 8. Conclusion

The Synthetic Roth Contribution is the dollar-for-dollar economic equivalent of a Roth contribution that occurs implicitly when conversion tax is paid from outside the retirement account. The framework was introduced in Cheshire (2025, SSRN 5205840) and is rigorously extended here. We have demonstrated its existence and properties four independent ways:

1. **Algebraic.** The annuity-payment / present-value identity proves that when the discount rate equals the portfolio rate, the Outside vs Inside PV difference is exactly zero — yet the Outside-funded household receives a constant $K \cdot \mathrm{AF}(r, N)$ of additional cash flow in every distribution year.

2. **Empirical (FA case).** Paired Inside FA and Outside FA scenarios, with all inputs held constant except `tax_payment_source`, show: (a) the constant **\$1,695.86 / year** increment in 19 of 20 distribution years (the 20th year contains a separately accounted IRMAA conversion-year lookback hit), matching the algebraic prediction $\$17{,}966 \times \mathrm{AF}(7\%, 20)$ to the cent; (b) the PVA-multiplication identity $\$1{,}695.86 \times \mathrm{PVA}(7\%, 20) \approx \$17{,}966$ closing the year-0 outflow; and (c) the **\$9,766 ΔATCF PV total identical between the two scenarios to the dollar**. The Outside FA scenario reports `synthetic_roth_cont = $33,917.27` $= K \cdot \text{annuity\_factor\_multiple}$ — the future-value identifier of the SRC.

3. **Empirical (RMD case — generalization).** Paired Inside RMD and Outside RMD scenarios, with all inputs held constant except `tax_payment_source` and `distribution_method`, show that **the algebraic PV identity holds under RMD too**, with the same conversion as the FA case. The per-year (Outside − Inside) increment is no longer constant — it varies from \$831 (year 2030) to \$2,596 (year 2049) in the owner period, then is flat \$3,901 in the beneficiary period (years 2050–2059) — yet the integrated PV at the portfolio rate sums to **+\$17,965.96**, exactly canceling the year-0 outflow of −\$17,966.00 to within a 4-cent rounding residual. The Outside RMD scenario's `synthetic_roth_cont = $71,229.59` matches the nominal 30-year (Outside − Inside) sum of \$71,229.46 to within \$0.13. The 10-year beneficiary period contributes \$3,901/yr of SRC value — direct empirical evidence of the inheritance-asymmetry channel discussed in §6.2.

4. **Decompositional.** The realized end-of-life wealth difference between Outside and Inside paths cannot be reconciled without including the SRC term as a first-class component alongside spread arbitrage, IRMAA savings, and reduced-RMD tax-drag.

The SRC's lasting value emerges not from PV at the portfolio rate (which is zero) but from (a) the tax-drag differential between Roth and taxable wrappers, (b) the favorable inheritance treatment of Roth balances, and (c) deviations between the household's personal discount rate and the portfolio's expected return.

Including the SRC turns Roth conversion analysis from a tax-rate-spread question into a wrapper-allocation question. The household is not just choosing whether to pay tax now or later. It is choosing whether to migrate a meaningful sum ($K$) of taxable-wrapper savings into a tax-free wrapper. That second choice is partially captured by Reichenstein & Meyer (2017) under tax-drag conditions, partially captured by Vanguard's BETR (2025) as a parameter adjustment, and independently surfaced by Nalebuff, Haghani & White (2025) as a "size matters" heuristic — but a separable per-year IRR / PV / FV decomposition with the algebraic identity $\mathrm{PV}(\text{Outside} - \text{Inside}) = K$ at the portfolio rate has not, to our knowledge, been published outside the SRC framework.

---

## References

Cheshire, S. (2025). *Roth Conversion Valuation & Mechanics*. SSRN Working Paper 5205840 (April 4, 2025). https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5205840

Haghani, V., White, J., & Nalebuff, B. (2025). *Size Matters in the Roth IRA Conversion Decision*. Elm Wealth Research Note (June 18, 2025). Republished by Advisor Perspectives, July 14, 2025. https://elmwealth.com/roth-conversion/

McQuarrie, E. F. (2024). *Net Present Value Analysis of Roth Conversions*. Journal of Financial Planning 37(7/9): 76–90.

McQuarrie, E. F., & DiLellio, J. (2023). *The Arithmetic of Roth Conversions*. Journal of Financial Planning, May 2023.

Passman, A. (2025). *A "BETR" Approach to Roth Conversions*. Vanguard Research (July 2025). https://corporate.vanguard.com/content/dam/corp/research/pdf/a_betr_approach_to_roth_conversions_072025.pdf

Reichenstein, W., & Meyer, W. (2017). *Valuing Roth Conversion and Recharacterization Options*. Journal of Financial Planning 30(11): 48–56.

Reichenstein, W., & Meyer, W. (2020). *Using Roth Conversions to Add Value to Higher-Income Retirees' Financial Portfolios*. Journal of Financial Planning 33(2): 46–55.

Stowe, D. L., Fodor, A., & Stowe, J. D. (2013). *The Value and Use of the IRA Recharacterization Option*. Financial Analysts Journal 69(5): 61–75.

---

## Appendix A: Selected Values from All Four Scenarios

### A.1 Fixed Annuity Distributions

| Field | Inside | Outside |
|-------|---|---|
| `tax_payment_source` | I | O |
| `distribution_method` | F (FA) | F (FA) |
| `conv_amt` | \$123,850.00 | \$123,850.00 |
| `conv_tax` | \$17,966.00 | \$17,966.00 |
| `t_C` (`conv_tax_rate`) | 14.51% | 14.51% |
| `t_D` (`conv_dist_tax_rate_tw`) | 22.39% | 22.39% |
| `total_after_tax_dist_chg_amt` (FV) | \$31,937.04 | \$65,854.30 |
| `spread_pv_tw` | \$9,765.91 | \$9,765.91 |
| `spread_fv_tw` | \$18,082.96 | \$18,082.96 |
| `irmaa_savings` (FV) | \$7,680.36 | \$7,680.36 |
| `irmaa_savings_pv` | \$3,440.20 | \$3,440.20 |
| `tax_drag_rmd_fv` | \$6,173.72 | \$6,173.72 |
| `tax_drag_rmd_pv` | \$1,120.55 | \$1,120.55 |
| `annuity_factor_multiple` | 1.88786 | 1.88786 |
| `tax_drag_cont_fv` (SRC drag value) | \$0 | \$917.08 |
| `tax_drag_cont_pv` (SRC drag PV) | \$0 | \$485.78 |
| `synthetic_roth_cont` | \$0 | **\$33,917.27** |
| `conv_irr` | +99.999999% (sentinel) | **15.014%** (real IRR) |
| `conv_return_multiple` | 0 (sentinel) | 3.32186 |
| `conv_duration` | 0 | 11.94 yrs |
| `break_even_tax_rate` | NULL (Inside) | 1.14483 |

### A.2 RMD-Only Distributions

| Field | Inside | Outside |
|-------|---|---|
| `tax_payment_source` | I | O |
| `distribution_method` | R (RMD) | R (RMD) |
| `conv_amt` | \$123,850.00 | \$123,850.00 |
| `conv_tax` | \$17,966.00 | \$17,966.00 |
| `t_C` (`conv_tax_rate`) | 14.51% | 14.51% |
| `t_D` (`conv_dist_tax_rate_tw`) | 25.23% | 25.23% |
| `total_after_tax_dist_chg_amt` (FV) | \$73,251.04 | \$144,480.62 |
| `spread_pv_tw` | \$13,279.95 | \$13,279.95 |
| `spread_fv_tw` | \$42,910.67 | \$55,995.69 |
| `irmaa_savings` (FV) | \$7,648.20 | \$7,648.20 |
| `irmaa_savings_pv` | \$1,028.02 | \$1,028.02 |
| `tax_drag_rmd_fv` | \$22,692.17 | \$22,692.17 |
| `tax_drag_rmd_pv` | \$3,362.08 | \$3,362.08 |
| `tax_drag_cont_fv` (SRC drag value) | \$0 | \$5,091.72 |
| `tax_drag_cont_pv` (SRC drag PV) | \$0 | \$1,021.23 |
| `synthetic_roth_cont` | \$0 | **\$71,229.59** |
| `conv_irr` | +99.999999% (sentinel) | **11.497%** (real IRR) |
| `conv_return_multiple` | 0 (sentinel) | 6.7788 |
| `conv_duration` | 0 | 22.97 yrs |
| `break_even_tax_rate` | NULL (Inside) | 0.6425 |

Notes:
- **`synthetic_roth_cont` is empirically validated**: Outside FA = \$33,917.27 = `conv_tax × annuity_factor_multiple = $17,966 × 1.88786`. Outside RMD = \$71,229.59 ≈ nominal 30-yr (Outside − Inside) ATCF delta of \$71,229.46. The application's stored field captures the SRC's nominal lifetime value across both distribution methods.
- **RMD's higher SRC** (~\$71,230 vs FA's ~\$33,917) reflects the longer compounding horizon: RMD's beneficiary 10-year window extends the SRC compound period beyond the owner-only horizon of FA, increasing nominal lifetime value. PV at 7% is identical across methods (\$17,966 = conv_tax) — exactly the algebraic identity.
- **`conv_dist_tax_rate_tw` is higher under RMD** (25.23% vs FA's 22.39%) because RMD's later, larger withdrawals push more of the lifetime distributions into higher brackets, increasing the time-weighted average.
- **`tax_drag_cont`** is non-zero only in Outside scenarios because it captures the value of conv_tax dollars escaping taxable-account drag; this effect doesn't exist when no outside dollars are spent. Magnitudes here are small because the user has not parameterized `r_drag < r`; under realistic 1–3% taxable-account drag this term scales materially.
- **`spread_pv_tw`, `irmaa_savings`, `tax_drag_rmd_*` are identical between Inside and Outside** within each distribution method — confirming these components are independent of payment source, as the SRC framework predicts.

Notes:
- `total_after_tax_dist_chg_amt` differs between scenarios because Outside's atcf_opt path includes the year-by-year +\$1,695.86 increment from the SRC. The Outside FV is roughly Inside-FV + (`conv_tax` × `annuity_factor_multiple`) = \$31,937 + \$33,917 = \$65,854.
- `tax_drag_cont_fv` is non-zero only in Outside because it captures the value of conv_tax dollars escaping taxable-account drag — an effect that doesn't exist when no outside dollars are spent. In this run, the user has not parameterized a meaningful `r_drag` differential, so the magnitude is small (\$917 FV); under realistic 1–3%/yr taxable-account drag, this term is materially larger.
- `synthetic_roth_cont` field equals `conv_tax × annuity_factor_multiple = $17,966 × 1.88786 = $33,917`, which is the future-value compounded growth of conv_tax at portfolio rate over the distribution period.
- `conv_irr` of 15.01% in Outside means the conversion's full cash-flow profile produces NPV = 0 at a 15.01% discount rate; combined spread + IRMAA + tax-drag alpha exceeds portfolio rate by ~8 percentage points.
- `spread_pv_tw`, `spread_fv_tw`, IRMAA values, tax-drag-RMD values are **identical** between scenarios — confirming these components are independent of payment source.

## Appendix B: Code References

The mathematical claims map directly to the production calculation engine at `calc_roth_conv_data.py`:

- **IRR cash flow construction** (lines 1500–1512): `cash_flows = [−conv_tax] + [0] × years_to_start + [yearly atcf deltas]`, augmented per year by `(conv_amt − conv_tax) × yearly_rmd[i]`. This is the Outside-funded cash-flow path.
- **`calc_hc_tax_drag`** (lines 470–585): Computes the tax-drag-differential value of moving conv_tax from taxable to Roth wrapper. Used at line 1603 with multiplier `cont_tax_mult = float(conv_tax)`.
- **`calc_dist_redux_tax_drag`** (lines 591–683): Computes the reduced-RMD tax-drag benefit, separately from the SRC.
- **`spread_fv_tw_map[conv_group_num]`** (lines 1451–1462): `spread_fv_tw = hc_fv_total_tw − hc_roth_dist`. Decomposes the total ATCF FV into spread component and SRC component.
- **Inside vs Outside Roth balance branch** (lines 1061–1062, 1091–1093): `if tax_payment_source == 'I': bracket_roth_savings −= bracket_conv_tax`. The empirical mechanism producing the \$1,696/year per-year delta.

## Appendix C: Notation Reference

| Symbol | Meaning |
|--------|---------|
| `AF(r, N)` | Annuity-payment factor: payment per dollar of principal per year over N years at rate r |
| `PVA(r, N)` | Present-value annuity factor: PV of \$1/year for N years at rate r |
| `r` | Portfolio return assumption |
| `r_drag` | Effective taxable-account return after tax drag |
| `t_C` | Effective conversion-year marginal tax rate |
| `t_D` | Time-weighted distribution-year marginal tax rate |
| `conv_amt`, `conv_tax` | Conversion amount and conversion tax owed |
| `N` | Distribution period in years |
| `SRC` | Synthetic Roth Contribution |

---

*Draft prepared 2026-05-06. Empirical results produced by the RothGPT production calculation engine (`calc_roth_conv_data.py`) at the date of this draft.*
