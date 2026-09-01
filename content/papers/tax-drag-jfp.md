# Quantifying Tax-Drag Shelter Benefits in Roth Conversions

**RMD Reduction and the Hidden Roth Contribution**

Steven Cheshire, CFA  
cheshiresteven@gmail.com | Draft: August 31, 2026

---

## Executive Summary

- A Roth conversion involves two distinct planning decisions: whether to convert, and conditional on converting, whether conversion tax should be paid from Inside or Outside assets. These decisions generate two tax-drag shelter (TDS) alphas: **RMD-reduction alpha** and **Synthetic Roth Contribution (SRC) alpha**. *(§2)*
- **RMD-reduction alpha** arises because conversion reduces Traditional-account balances and future Required Minimum Distributions (RMDs). The reinvested share of avoided-RMD dollars remains sheltered rather than compounding in taxable accounts. It applies to both Inside- and Outside-funded conversions. *(§4.2)*
- **SRC alpha** arises only under Outside-funded conversions. Paying conversion tax from taxable assets migrates after-tax dollars into the Roth wrapper, creating a Synthetic Roth Contribution. The benefit is the wrapper-migration differential between Roth and taxable growth, not the full future value of the conversion-tax dollars. *(§4.1, App A.1)*
- Both alphas use $\alpha = P\mu$, where $P$ is sheltered principal and $\mu$ the per-dollar PV of the sheltered-vs-taxable gap. For SRC alpha, $P = K$. For RMD alpha, $P = C(1-t_D)$, a scalar approximating the yearly shape of after-tax avoided RMDs. The SECURE Act's mandated beneficiary terminus closes the cash-flow stream and permits finite PV measurement. *(§3, App A, B.3)*
- In the worked example, RMD-reduction alpha (\$2,439) exceeds SRC alpha (\$1,480) at the 22% fill, because its sheltered principal exceeds the conversion-tax principal. The margin narrows as the conversion deepens: on the 22% bracket increment, the two are near parity. *(§5)*
- Tax-drag shelter can be attributed separately within the conversion IRR, letting planners distinguish drag avoidance from rate arbitrage. *(§4.3, App C)*
- TDS alphas are positive whenever tax drag is positive, so a conversion can create value when rate arbitrage is negative. **Planners weighing only rate arbitrage may reject beneficial conversions:** in the worked example the 22% bracket increment has −\$918 of rate arbitrage but is worth +\$1,199 once Outside-funded drag is priced, moving the optimal conversion from \$66,500 to \$121,800. *(§5, §6)*

---

## 1. Literature Review

Published treatment of tax drag as a quantified, named PV line item in the Roth-conversion setting is sparse.

The mechanism itself is established. McQuarrie and DiLellio (2023), in *The Arithmetic of Roth Conversions*, reinvest after-tax counterfactual RMDs at $r(1-d)$ while the Roth compounds at $r$ (Equation 4, Tables 4–5), showing that drag compounds rather than accruing linearly. What their framework leaves open is the terminus. Absent one, the after-tax wedge runs indefinitely and naturally produces a breakeven age; bounding it at the SECURE Act's mandated 10-year beneficiary depletion creates a finite cash-flow stream with an exact PV and IRR. This lets RMD-reduction alpha be priced as a decision-specific line item rather than a breakeven scalar.

Others price the wrapper effect without isolating it. Reichenstein and Meyer (2017) compare an outside-funded conversion with an inside-funded one and compute $tV(1+r)^n - tV(1+R)^n$ — algebraically what this paper isolates as SRC alpha — but report a FV rather than a PV, do not extend it to avoided-RMDs, and do not identify the two channels’ common valuation structure. Kitces (2021) and Van Deusen and Kitces (2022) analyze tax diversification, Roth optimization and account-level tax alpha, showing that paying conversion tax from non-IRA cash preserves the full converted balance for market upside; neither isolates the conversion-tax dollar's $r(1-d)$ counterfactual as a separately priced component. Piper names both the outside-payment and RMD-reduction benefits qualitatively, without PV or IRR figures. Murray (2022) supplies the yield-split asset-location framework underlying this paper's drag-rate assumptions, but does not address conversion payment-source mechanics.

Drag can also appear as an assumption rather than a result. Passman, Wong and Dickson (2025) compute Jill's break-even tax rate (BETR) from a Roth multiple $M = 3$, taxable multiple $M' = 2$ and $n = 20$, obtaining $t_D = 23.3\%$. That parameterization embeds a drag of approximately 37.5\%, $d = 1 - (M'^{1/n} - 1)/(M^{1/n} - 1)$, yet the model's 23.3\% tax rate appears plausible while a 37.5\% portfolio drag may not. Thus, a break-even on $t_D$ is also a break-even on $d$: their framing substitutes a future statutory rate for a portfolio-level drag the planner can estimate and influence.

Across these treatments tax drag appears as an embedded assumption, a breakeven condition, or a qualitative benefit, but not as two separately priced PV alphas mapped to the planner's two decisions. To our knowledge no prior Roth-conversion study reports the drag avoided on the counterfactual reinvestment of eliminated RMDs as a separately priced present-value component. The contribution is isolation, quantification and decision attribution rather than discovery of the underlying mechanism, plus unification: both alphas share the same valuation identity, differing only in sheltered principal and schedule.

---

## 2. Tax-Drag Shelter

**Tax-Drag Shelter (TDS)** is the present-value gap between investing inside vs. outside a tax-advantaged wrapper. Inside, investments grow unencumbered by taxes; outside, the same dollars pay annual tax on dividends, interest, realized capital gains, and turnover-driven distributions — a drag that compounds over time.

A Roth conversion involves two sequential decisions — whether to convert, and if converting, whether to pay the tax from Outside assets. Each affirmative decision creates a distinct, positive tax-drag shelter alpha.

1. **RMD-reduction alpha (primary):**

    All conversions (Inside & Outside) reduce the Traditional account by $C$, reducing future RMDs. RMD reductions that would have been reinvested taxably remain sheltered. **RMD-reduction alpha** is the PV of that sheltering.

2. **SRC alpha (secondary):**

    Outside-funded conversions migrate $K$ ($t_C \cdot C$) after-tax dollars into the Roth wrapper — **a hidden Roth contribution**, formally a **Synthetic Roth Contribution** (SRC; Cheshire 2025, 2026). **SRC alpha** is the PV gain of $K$ compounding tax-free as it distributes vs. in the taxable counterfactual. Identical alpha accrues to a same-sized statutory Roth contribution.

---

## 3. The Drag-Shelter Valuation Identity

A common process creates both TDS alphas: run two parallel accounts on a shared distribution schedule — one sheltered at $r$, one taxable at $\tilde{r} = r(1-d)$ — and sum the PV of the yearly distribution gap. For principal $P$, the **drag-shelter multiplier** $\mu_P$ is this per-dollar sum (derivation in Appendix A; simulator in Appendix B):

$$
\alpha \;=\; P \cdot \mu_{P}.
$$

§4 specializes the identity twice: SRC alpha on principal $K$, distributed across owner life and the beneficiary decade; RMD-reduction alpha on avoided-RMD dollars, which accumulate through owner life and distribute only in the beneficiary decade. For SRC alpha, the identity applies directly. RMD-reduction alpha depends on the yearly shape of after-tax avoided RMDs, which §4.2 approximates with the scalar principal $C(1-t_D)$ (Appendix B.3).

---

## 4. The Two TDS Alphas

### 4.1 SRC alpha — Outside-funded conversions only

Specializing §3 with $P = K$,

$$
\alpha_{SRC} \;=\; K \cdot \mu_{SRC}.
$$

**Two-stage construction (RMD distribution).** Phase 1 (owner-life): $K$ compounds in two parallel balances — sheltered at $r$, taxable at $\tilde{r}$ — and each draws down by the RMD divisor, a common fractional spending rule rather than a mandate on either wrapper. The sheltered-vs-taxable distribution gap accrues as alpha. Phase 2 (beneficiary period): the residual distributes as a 10-year fixed annuity (FA), continuing the same gap. Appendix B.1 gives the construction. (Under FA distribution, Phase 1 is itself a fixed annuity across owner life — no separate Phase 2.)

The conventional Hidden Contribution figure equates the conv-tax dollar's value with its full sheltered-wrapper future value — implicitly assuming it would have done nothing absent conversion. The proper counterfactual is taxable growth at $\tilde{r}$. TDS therefore captures only the sheltered-vs-taxable differential as drag-avoidance value, leaving taxable growth attributed to the conv-tax dollar regardless of conversion. (Appendix A.1 gives the decomposition.)

**Inside payment.** No after-tax dollars move into the Roth wrapper, so $\alpha_{SRC} = 0$.

![](figures/src-alpha-chart.png)

**Figure 1.** SRC alpha. $K$ = \$17,966 compounds in a sheltered Roth vs. a taxable counterfactual (drag $d$ = 5%), drawing down on the $\varepsilon_t$ schedule then the beneficiary annuity; the annual gaps have PV = \$1,480.

### 4.2 RMD-reduction alpha — Inside- and Outside-funded conversions

The scalar approximation sets sheltered principal to $P = (1-t_D) \cdot C$, where $t_D$ is the rate on Traditional distributions displaced by the conversion. The reinvestment share $\rho$ scales the avoided-RMD flow, not the principal. Specializing §3 on the avoided-RMD schedule,

$$
\alpha_{RMD}^{t_D} \;=\; (1-t_D) \cdot C \cdot \rho \cdot \mu_{RMD}.
$$

Because RMD divisors $\varepsilon_t$ depend on age, not balance, the avoided-RMD stream scales linearly in $C$, so its scalar principal is proportional to $C$. The multiplier $\mu_{RMD}$ (Appendix B.2) prices the drag-shelter value per dollar of principal at full reinvestment ($\rho = 1$). Because $\rho$ multiplies every reinvestment deposit, $\alpha_{RMD}$ is proportional to $\rho$.

Applying one $t_D$ to the stream is an approximation because each avoided distribution bears its own year-specific rate. Those rate differences change the size of each after-tax deposit, and early differences compound longest, so they weigh most heavily in RMD alpha. Appendix B.3 gives the exact construction and measures the error: 3.5% or less in the cases tested, cumulative and incremental alike. We report the scalar form because planners without year-by-year tax engines can compute it.

**Two-stage construction.** Phase 1 (owner-life): each year's avoided RMD enters two parallel balances — sheltered at $r$, taxable at $\tilde{r}$. Nothing distributes; the owner-life drag accumulates in the balance gap. Phase 2 (beneficiary period): both balances distribute as a 10-year fixed annuity — the sheltered wrapper's mandated depletion period, applied to the taxable counterfactual as a common measurement window — and the yearly sheltered-vs-taxable gap delivers the alpha. $\rho$ is the surplus-wealth reinvestment share; consumed RMDs cancel across conversion and counterfactual paths and are out of scope.

![](figures/rmd-alpha-chart.png)

**Figure 2.** RMD-reduction alpha. Avoided RMDs reinvest in parallel sheltered and taxable balances during Phase 1; both distribute as a 10-year fixed annuity in Phase 2. The after-tax principal $P = C(1-t_D)$ = \$96,359 — the \$121,800 conversion net of $t_D$ = 20.89% — is applied to the divisor-based deposit schedule; Appendix B.3 measures the approximation. Cumulative drag-avoidance benefit reaches $\alpha_{RMD}^{t_D}$ = \$2,439.

Both figures show balances depleting to zero — the SECURE-mandated 10-year beneficiary depletion closes the schedule, making both alphas present values rather than breakevens (with an IRR for SRC alpha). SRC alpha requires no $t_D$ approximation; RMD alpha uses the one assessed in Appendix B.3.

### 4.3 Total TDS alpha

Under Outside payment,

$$
\alpha_{TDS} \;=\; \alpha_{SRC} \;+\; \alpha_{RMD}.
$$

Under Inside payment, $\alpha_{TDS} = \alpha_{RMD}$ because $\alpha_{SRC} = 0$.

Both alphas feed the conversion's IRR through yearly drag-related cash flows — the SRC flow over owner-life and beneficiary distributions, the RMD-reduction flow over the beneficiary period — letting planners quantify drag avoidance within the IRR. Appendix C gives the per-year definitions. Under Inside payment (no user outlay) the conversion IRR is undefined and the RMD-reduction PV stands alone.

---

## 5. Worked Example

Converting \$121,800 fills through the 22% bracket, at an effective conversion rate of 14.75%.

| Inputs | Symbol | Value |
|---|---|---|
| Filer | | Single, age 62 |
| Traditional balance | | \$700,000 |
| Social Security | | \$25,000/yr at 65 |
| Other taxable income | | \$0 |
| Beneficiary income | | \$100,000/yr; no SS |
| Pre-tax return | $r$ | 7% |
| Tax-drag rate | $d$ | 5% |
| Inflation | | 2.5% |
| Distribution | | RMD from age 75 |
| Schedule | | 12 / 20 / 10 yrs |
| RMD reinvestment | $\rho$ | 75% |
| **Derived** | | |
| After-drag return | $\tilde{r} = r(1-d)$ | 6.65% |
| Conversion (22% fill) | $C$ | \$121,800 |
| Conversion rate | $t_C$ | 14.75% |
| Conversion tax | $K = t_C \cdot C$ | \$17,966 |
| Displaced rate | $t_D$ | 20.89% |

$t_C$ is incremental conversion-year tax divided by $C$. $t_D$ is the effective rate on conversion-displaced Traditional distributions, based on rates they face over time. Rate arbitrage is the spread between them on the converted principal, $C(t_D - t_C)$. SRC alpha is driven by $K = t_C C$, the tax paid; the RMD alpha scalar approximation by $(1-t_D)C$, the after-tax value of the no-conversion distribution stream. Thus $P + K \neq C$ unless $t_D = t_C$.

**Table 1. Cumulative conversion results — fills each bracket.** At the 22% fill, scalar RMD alpha is \$2,439 vs. \$2,502 exact; the \$63 difference leaves the optimum unchanged.

| Cum | $C$ | Rate arb | $\alpha_{SRC}$ | $\alpha_{RMD}^{t_D}$ | **Net PV** | $t_C$ | $t_D$ |
|---|---:|---:|---:|---:|---:|---:|---:|
| SDed | \$16,100 | \$3,504 | \$0 | \$319 | \$3,822 | 0.00% | 21.76% |
| 10% | \$28,500 | \$4,927 | \$102 | \$565 | \$5,594 | 4.35% | 21.64% |
| 12% | \$66,500 | **\$8,393** | \$478 | \$1,324 | \$10,194 | 8.72% | 21.34% |
| 22% | \$121,800 | \$7,475 | \$1,480 | **\$2,439** | **\$11,394** | 14.75% | 20.89% |
| 24% | \$217,875 | \$2,497 | \$3,379 | \$4,413 | \$10,289 | 18.83% | 19.98% |

Figures are Outside-funded; under Inside funding $\alpha_{SRC} = 0$, so TDS is $\alpha_{RMD}$ alone and conversion IRR is undefined because there is no outlay. At the 22% fill, both funding sources yield \$2,439 RMD-reduction alpha; Outside adds \$1,480 SRC alpha, for \$3,919 of tax-drag shelter. RMD alpha is 65% larger despite SRC's higher per-dollar multiplier.

At the 22% fill, Outside's 8.94% IRR reflects the 7% base return, \$7,475 of rate arbitrage and \$3,919 TDS alpha. Rate arbitrage alone is maximised at the 12% fill; pricing drag moves the optimum to the 22% fill, a \$121,800 conversion rather than \$66,500.

**Table 2. Incremental conversion results - Marginal brackets**

| Marg | $\Delta C$ | Rate arb | $\alpha_{SRC}$ | $\alpha_{RMD}^{t_D}$ | **Net PV** | $t_C$ | $t_D$ |
|---|---:|---:|---:|---:|---:|---:|---:|
| SDed | \$16,100 | \$3,504 | \$0 | \$319 | \$3,822 | 0.00% | 21.76% |
| 10% | \$12,400 | \$1,423 | \$102 | \$246 | \$1,772 | 10.00% | 21.48% |
| 12% | \$38,000 | \$3,466 | \$376 | \$759 | \$4,600 | 12.00% | 21.12% |
| 22% | \$55,300 | −\$918 | \$1,002 | \$1,115 | **\$1,199** | 22.00% | 20.34% |
| 24% | \$96,075 | −\$4,978 | \$1,899 | \$1,974 | **−\$1,105** | 24.00% | 18.82% |

These are finite-increment rates, not the cumulative rates above: converting the 22% bracket costs the statutory 22.00% while displacing distributions taxed at 20.34%, so rate arbitrage on that increment is negative. Cumulatively the same conversion shows $t_C$ of 14.75% against $t_D$ of 20.89% — both are correct, but averaging conceals the sign.

On RMD-reduction alpha alone the 22% increment nets \$197 — near indifference — while SRC alpha lifts it to \$1,199. Funding source determines whether the last bracket barely or comfortably clears. The 24% increment is negative under either funding source, so drag moves the stopping point by one bracket and no further. Appendix D reconciles both alphas year by year; §5.2 tests longer life, higher drag, and reinvestment share.

### 5.1 Calibrating $d$ and $\rho$

$d$ is the fraction of pre-tax return lost annually to tax in the taxable counterfactual. Murray's yield-split analysis implies $d$ of 9.9%, 6.7% and 3.5% under no, conventional and yield-split asset location, respectively, when applied to the 7% assumed here.

The 5% baseline assumes highest-yielding holdings are sheltered and broad, low-turnover index funds held taxable; households mirroring allocations across accounts should use a higher $d$. Sialm and Zhang (2020) estimate investment taxes averaging 1.08% annually for US equity mutual fund shareholders in the highest tax bracket — $d$ = 15% at $r$ = 7% — roughly tripling the alphas above. The baseline is deliberately conservative: the drag implicitly embedded in Vanguard's BETR example is roughly 37.5% (§1).

These parameters are observable to the planner: asset mix and asset location are advisor decisions, so $d$ is better estimated by the advisor than by a model default.

The 2009 RMD holiday offers direct evidence on $\rho$. Brown, Poterba and Richardson (2017) find that roughly one third of affected investors stopped distributions when permitted; among those continuing, 66% reported little dependence on distributions for daily spending. Their wealthier TIAA sample plausibly matches the advised households considered here. These findings support $\rho$ near the upper end of a 60–75% range; because $\alpha_{RMD}$ is exactly linear in $\rho$ (§5.2), planners can rescale for individual households.

### 5.2 Sensitivity

**Direction of effects.**

| Parameter Change | SRC Alpha | RMD Alpha |
|----------------------------------------|:------:|:------:|
| Longer life | ↗ | ↑ |
| Higher drag $d$ | ↑ | ↑ |
| Higher RMD reinvestment $\rho$ | — | ↑ |

**Magnitude examples (base + parameter variations).**

| Scenario | RMD alpha | SRC alpha | RMD/SRC |
|------------------------------|----------------:|-----------:|---------:|
| Base (to age 94, $d$=5%, $\rho$=75%) | \$2,439 | \$1,480 | 1.65× |
| Low reinvestment ($\rho$=50%) | \$1,626 | \$1,480 | 1.10× |
| Full reinvestment ($\rho$=100%) | \$3,252 | \$1,480 | 2.20× |
| Longer life (to age 99) | \$3,480 | \$1,504 | 2.31× |
| Higher drag ($d$=7%) | \$3,380 | \$2,035 | 1.66× |
| Both (age 99, $d$=7%) | \$4,813 | \$2,066 | 2.33× |

RMD-reduction alpha is time-sensitive: five further years of life raise it 43%, versus 2% for SRC alpha. Life and $d$ compound: together they raise RMD alpha to \$4,813, \$392 more than their separate effects imply. The alphas are nearly proportional to $d$, while $\rho$ scales RMD alpha alone and exactly, allowing planners to rescale either assumption directly. $d$ also sets how far to convert: at 5% the optimum is the 22% bracket; at 7% the 24% increment turns positive and the optimum moves to \$217,875.

### 5.3 Limitations: taxable counterfactual and beneficiary schedule

Both alphas price the gap between compounding at $r$ inside the wrapper and $r(1-d)$ outside, with a single $d$ applied across the whole horizon.  For tax-efficient taxable holdings, the appropriate $d$ may be smaller: municipal bonds produce federally exempt interest, while qualified dividends and long-term gains may face a 0% rate. If avoided RMDs are consumed rather than reinvested, there is no taxable reinvestment counterfactual for those dollars; $\rho$ specifies the share reinvested.

A household holding appreciated positions until death avoids deferred capital-gains tax through step-up. This does not undermine the construction because $d$ captures annually recurring distribution tax, not terminal gains (App A (4)); step-up leaves the effective rate unchanged where returns are fully distributed (Shoven and Sialm 2003, n. 10). The baseline therefore should not include drag on unrealized appreciation, making studies that charge such an accrual (Bergstresser and Poterba 2002) inappropriate calibration sources for these households.

Two structural assumptions bind harder than $d$. Allocation is held constant across wrappers (App A (1)), yet households practice asset location, so wrapper and location effects interact rather than add cleanly. The finite distribution schedule rests on the SECURE-Act 10-year rule: an eligible designated beneficiary — spouse, owner's minor child, or one less than ten years younger — faces a different schedule, and both alphas would need re-deriving.

---

## 6. Conclusion

In the worked example, pricing tax-drag shelter moves the household's optimal conversion from \$66,500 to \$121,800. Rate arbitrage alone stops at the 12% bracket; the 22% bracket looks like a \$918 loss on that measure but is worth \$1,199 once Outside-funded drag is priced. The 24% bracket is negative on both measures, so drag moves the boundary one bracket and no further.

Implications for conversion planning.

1. **Price RMD-reduction alpha in the conversion decision.** It applies to both Inside- and Outside-funded conversions and belongs with rate arbitrage in valuing the conversion itself.

2. **Price SRC alpha in the Outside-settlement decision.** It captures the value of moving $K$ dollars into the Roth — identical to what a same-sized statutory Roth contribution gains. Because that funding benefit is separately positive, it can make an otherwise marginal conversion worth executing as part of the combined Outside-funded transaction, subject to liquidity and Roth wrapper preference.

3. **Attribute, don't aggregate.** A single conversion IRR conflates rate arbitrage, Medicare effects, and drag shelter. The two alphas show which slice of IRR each decision buys and what ($t_C$, $t_D$, $d$, $\rho$, owner life) drives it.

4. **Approximate when necessary.** $t_D$ is a conversion-specific output of a year-by-year tax calculation, but most planners will estimate and use it in the scalar RMD-alpha calculation. Even this exact $t_D$ does not price the conversion's RMD-reduction alpha exactly because each year's avoided RMD is reinvested after tax at that year's rate, rather than the conversion's scalar $t_D$. And exact $t_D$ is not itself a shortcut: the year-by-year tax calculation it might appear to avoid is required to produce it. Appendix B.3 shows that the scalar approximation is within a few percent; only the yearly stream gives it exactly. Accordingly, a bottom-up tax engine is needed to measure rate arbitrage reliably and RMD-reduction alpha exactly; without one, the scalar approximation still lets planners price value that would otherwise be omitted.

5. **The Decision Consequence.** A conversion can create value even when rate arbitrage is negative. Evaluating conversions on rate arbitrage alone can therefore reject beneficial conversions. Tax-drag shelter can change not merely the value assigned to a conversion, but the conversion decision itself.

---

## Appendix A. The Drag-Avoidance Value Identity

**Notation.** The following symbols are used throughout Appendices A–C.

| Symbol | Meaning |
|---------------|--------------------------------------------------------------------|
| $S$ | Sheltered wrapper; compounds at $r$ |
| $U$ | Taxable wrapper; compounds at $\tilde{r} = r(1-d)$ |
| $B^{S}_t, B^{U}_t$ | Balance at time $t$ in each wrapper |
| $A^{S}_t, A^{U}_t$ | Accumulation balance for avoided RMDs (Appendix B.2) |
| $D^{S}(t), D^{U}(t)$ | Distribution in year $t$ from each wrapper |
| $\Delta(t)$ | $D^{S}(t) - D^{U}(t)$, the yearly distribution gap |
| $S(T), U(T)$ | FV factor at horizon $T$: $(1+r)^T$, $(1+\tilde{r})^T$ (no distributions) |
| $t_C$ | Effective conversion tax rate |
| $t_D$ | Effective rate on displaced Traditional distributions |
| $\rho$ | Reinvestment share of avoided RMDs (§4.2) |
| $\mu_P$ | $\alpha / P$, per-dollar PV multiplier |
| $\mu_{SRC}, \mu_{RMD}$ | Schedule-specific multipliers (App B), $\mu_{RMD}$ at $\rho = 1$ |

**The identity.** Place a principal of $P$ dollars at $t=0$ into either a sheltered wrapper (compounding at $r$) or a taxable wrapper (compounding at $\tilde{r}$), and distribute each on a common schedule $\{D^{S}(t), D^{U}(t)\}$. The household receives the distribution stream; wrapper choice does not change time-zero outlay. Discounting at $r$, the incremental present value of the sheltered wrapper is

$$
\alpha \;=\; \sum_{t} \frac{D^{S}(t) - D^{U}(t)}{(1+r)^{t}} \;=\; P \cdot \mu_{P},
$$

where $\mu_P = \alpha/P$ is the per-dollar multiplier surfaced in §4.

**Assumptions.**

1. Identical pre-tax return and asset allocation inside and outside the wrapper. The construction isolates the wrapper effect; asset-location optimization, which would change both $r$ and $d$ by wrapper, is excluded.

2. Identical distribution schedule in both wrappers. A Roth IRA has no owner-life RMD, and a taxable account has no SECURE ten-year mandate. Appendix B uses RMD divisors as a proportional drawdown rule and the ten-year annuity as a common measurement window. The inherited Roth's mandated depletion sets the terminus; thereafter both paths are taxable and no further alpha accrues. Alpha depends on the schedule because the taxable leg compounds at $\tilde{r}$ but is discounted at $r$.

3. End-of-period distributions. Balances accrue a full year of return before each distribution, matching the Appendix B simulator.

4. The taxable counterfactual is held for the full horizon and bears drag $d$ in every year. $d$ captures annually recurring tax on dividends, interest and turnover distributions (§5.1), not deferred capital-gains tax on sale. For SRC only, the taxable SRC balance distributes during owner life as well as across the beneficiary decade, realizing gains before death that $d$ does not price. Including those taxes would reduce $D^{U}$ and increase $\alpha_{SRC}$, so reported SRC alpha is understated. Appendix B.2's reinvestment balances distribute only after death and are unaffected.

**Proof sketch.** The sheltered balance evolves as $B^{S}_t = B^{S}_{t-1}(1+r) - D^{S}(t)$ with $B^{S}_0 = P$, and the taxable counterfactual as $B^{U}_t = B^{U}_{t-1}(1+\tilde{r}) - D^{U}(t)$ with $B^{U}_0 = P$. The household receives the distribution stream and discounts it at $r$. The incremental PV is therefore $\sum_t (D^{S}(t) - D^{U}(t)) / (1+r)^t$. Linearity in $P$ gives the per-dollar form $\mu_P = \alpha/P$.

**Comment.** The identity reduces to two questions: *what principal is being sheltered, and what distribution schedule drives $\mu_P$?* §4.1 sets $P = K$ on the post-conversion Roth schedule; §4.2 approximates $P$ with $(1-t_D)C$ on the avoided-RMD schedule, with $\rho$ scaling the reinvested flow.

### A.1 SRC alpha within total SRC value

Let $S(T) = (1+r)^T$ and $U(T) = (1+\tilde{r})^T$ denote per-dollar future values at horizon $T$ in the sheltered and taxable wrappers (no distributions). The Synthetic Roth Contribution's total wealth value decomposes into two components:

- **Taxable-counterfactual growth**, $K \cdot U(T)$ — the future value the $K$ dollars would have earned at $\tilde{r}$ in the taxable wrapper, attributable to the conv-tax dollar regardless of conversion choice.
- **Drag-avoidance benefit**, $K \cdot (S(T) - U(T))$ — the excess generated by the $K$ dollars compounding at $r$ inside the Roth rather than at $\tilde{r}$ outside. This is the wrapper-migration benefit that SRC alpha prices; $\alpha_{SRC} = K \cdot \mu_{SRC}$ is its present value once the distribution schedule of B.1 is applied.

The conventional Hidden Contribution figure $K \cdot S(T)$, used in Cheshire (2025), implicitly assumes a zero-growth taxable counterfactual and conflates the two components; the TDS framing extracts only the differential as alpha.

---

## Appendix B. Drag-Shelter Simulator

Both alphas run a sheltered balance at $r$ and a taxable counterfactual at $\tilde{r} = r(1-d)$ on a common distribution schedule, then sum the PV of the yearly gap $\Delta(t) = D^{S}(t) - D^{U}(t)$ discounted at $r$.

**Annuity factor.** $\mathrm{af}(x, N) = x / (1 - (1+x)^{-N})$, the level annual payment per dollar of starting balance over $N$ years at rate $x$.

**Distribution methods.** RMD uses an age-indexed life-expectancy divisor $\varepsilon_t$: $D(t) = B / \varepsilon_t$. FA payments are constant at $\mathrm{af}(x, N) \cdot B_0$ across $N$ years.

### B.1 SRC alpha: distribution from K

Place $K$ dollars at $t=0$ in parallel sheltered and taxable balances $B^{S}, B^{U}$.

**Phase 1 — owner-life proportional drawdown.** For each of the $L$ owner-life distribution years, beginning at the first RMD age: distribute $D^{S}(t) = B^{S}_{t-1}/\varepsilon_t$ and $D^{U}(t) = B^{U}_{t-1}/\varepsilon_t$; update $B^{S}_t \leftarrow B^{S}_{t-1}(1+r) - D^{S}(t)$ and $B^{U}_t \leftarrow B^{U}_{t-1}(1+\tilde{r}) - D^{U}(t)$. The distribution gap $\Delta(t) = D^{S}(t) - D^{U}(t)$ contributes to SRC alpha in each owner-life year.

**Phase 2 — beneficiary decade.** Hold payments constant at $D^{S}(t) = \mathrm{af}(r, 10) \cdot B^{S}_L$ and $D^{U}(t) = \mathrm{af}(\tilde{r}, 10) \cdot B^{U}_L$, updating balances each year as in Phase 1.

$$
\alpha_{SRC} \;=\; \sum_{t} \frac{\Delta(t)}{(1+r)^t} \;=\; K \cdot \mu_{SRC}.
$$

(Under FA distribution, Phase 1 is a fixed annuity across owner life with no Phase 2.)

### B.2 RMD-reduction alpha: accumulation before distribution

Let $a^{t_D}(t)$ be the avoided RMD in year $t$, net of tax using scalar $t_D$ and scaled by reinvestment share $\rho$. The avoided RMD is generated by $C$ depleting on the owner-life RMD schedule. Reinvestment balances $A^{S}, A^{U}$ start at zero.

**Phase 1 — owner-life accumulation.** For years $t = 1, \ldots, L$: compound prior balances at $r$ and $\tilde{r}$, then add $a^{t_D}(t)$ to each. No distributions, so $\Delta^{t_D}(t) = 0$ throughout owner life.

**Phase 2 — beneficiary decade.** Hold payments constant at $D^{S}(t) = \mathrm{af}(r, 10) \cdot A^{S}_L$ and $D^{U}(t) = \mathrm{af}(\tilde{r}, 10) \cdot A^{U}_L$, updating balances each year as in B.1 Phase 1.

$$
\alpha_{RMD}^{t_D} \;=\; \sum_{t} \frac{\Delta^{t_D}(t)}{(1+r)^t} \;=\; (1-t_D) \cdot C \cdot \rho \cdot \mu_{RMD}.
$$

The Phase-2 $\Delta^{t_D}(t)$ is the RMD-reduction per-year flow used in Appendix C; owner-life entries are zero. $\mu_{RMD}$ is the multiplier evaluated at $\rho = 1$: because $A^{S}, A^{U}$ start at zero and $\rho$ multiplies every deposit, $\alpha^{t_D}_{RMD}$ is exactly linear in $\rho$.

### B.3 Exact deposits and the scalar-rate approximation

B.2 sizes each year's deposit by applying one conversion-level $t_D$ to the divisor-based depletion path. The exact deposit is the actual after-tax displaced distribution for that year,

$$a^{\text{exact}}(t) \;=\; \rho\Bigl[\bigl(D_{0}(t) - D_{C}(t)\bigr) \;-\; \bigl(\mathrm{Tax}_{0}(t) - \mathrm{Tax}_{C}(t)\bigr)\Bigr],$$

where subscript $0$ denotes the no-conversion path and $C$ the post-conversion path; both differences come from the same year-by-year tax calculation that produces $t_D$. The exact deposits enter the same two reinvestment balances and distribute over the same beneficiary decade, giving

$$\alpha_{RMD}^{\text{exact}} \;=\; \sum_{t} \frac{\Delta^{\text{exact}}(t)}{(1+r)^{t}},$$

with $\Delta^{\text{exact}}(t)$ the Phase-2 gap those deposits generate. Write $\alpha_{RMD}^{t_D}$ for the B.2 form. Under B.2 each deposit is $P$ times a factor from the divisor table, so the sum collapses to principal times multiplier. Under B.3 each deposit requires a year-specific tax calculation, with and without the conversion, so no such collapse is available without a tax engine. That is why the body reports the scalar form.

**Principal equivalence is not sufficient.** Writing $\Delta D_t = D_0(t) - D_C(t)$ and $\Delta\mathrm{Tax}_t = \mathrm{Tax}_0(t) - \mathrm{Tax}_C(t)$, discounting each year's after-tax avoided RMD to time zero and summing gives the exact RMD-reduction principal:

$$P^{*}_{RMD} \;=\; \sum_{t} \frac{\Delta D_t - \Delta\mathrm{Tax}_t}{(1+r)^{t}}.$$

When deposits span the full displaced-distribution schedule, $P^{*}_{RMD} = C(1-t_D)$: the PV of displaced distributions equals $C$, and $t_D$ is their PV-weighted effective tax rate.

Equal principal does not imply equal alpha: earlier deposits receive longer shelter, so the stream's yearly shape determines its multiplier. The approximation substitutes the pre-tax distribution shape for the after-tax shape, and the two coincide only if yearly displaced tax rates are constant.

**Table B1. Measured error.** Reports $\alpha_{RMD}^{t_D}$ against $\alpha_{RMD}^{\text{exact}}$ for the cumulative and incremental conversions in Tables 1 and 2 (§5). At the optimal 22% fill, the scalar estimate is \$2,439 against \$2,502 exact cumulatively and \$1,115 against \$1,149 incrementally:

| Bracket | Cumulative | Increment |
|------------|--------:|--------:|
| Std Ded | −1.8% | −1.8% |
| 10% | −1.9% | −2.1% |
| 12% | −2.2% | −2.4% |
| 22% | −2.5% | −2.9% |
| 24% | −3.0% | −3.5% |

**Table B2. Varying schedule and tax path.** The error is invariant to $\rho$, which scales both constructions identically and so cancels in the ratio, and changed negligibly across the tested values of $d$. It varies instead with the distribution schedule and tax path. Across three schedules:

| Schedule | Cumulative | Increments |
|------------------------------|--------------|--------------|
| RMD, SS \$25,000 (§5 profile) | −1.8% to −3.0% | −1.8% to −3.5% |
| FA, SS \$25,000 | +0.0% to +0.3% | +0.0% to +1.0% |
| FA, SS \$40,000 | −1.3% to +0.4% | −2.2% to +1.3% |

The sign follows the slope of the displaced rate across the deposit window. Where it rises, the scalar rule understates; where it falls, the rule overstates, because earlier deposits receive more years of tax shelter and therefore greater weight in alpha. In the §5 profile's 22% fill, that rate runs 12.0% in 2039 and climbs to 22.0% from 2046, so the rule understates. In the \$40,000 Social Security case, the 22% increment instead rises through the phase-in band to 39.6% by 2038 before falling back to 22.2%, causing the scalar rule to overstate.

$\alpha_{SRC}$ is unaffected throughout. It scales on $K$, a known conversion-year amount, so it requires no $t_D$ approximation.

---

## Appendix C. IRR Attribution: Per-Year Drag-Related Cash Flows

§4.3 reports that the conversion IRR carries a drag-avoidance share. This appendix gives the per-year cash flows behind that claim.

**Per-year flows.** Let $\Delta_{SRC}(t)$ be the per-dollar sheltered-vs-taxable gap on SRC alpha's two-phase schedule (Appendix B.1), and $\Delta_{RMD}(t)$ the corresponding per-dollar Phase-2 gap on RMD-reduction alpha's beneficiary 10-year annuity (Appendix B.2), evaluated at full reinvestment. The conversion's incremental cash flow in year $t$ picks up two drag-related terms:

$$\mathrm{CF}_{\mathrm{drag}}^{t_D}(t) \;=\; K\cdot\Delta_{SRC}(t)\;+\;(1-t_D)\cdot C\cdot\rho\cdot\Delta_{RMD}(t).$$

The first runs over the owner's remaining life and beneficiary period; the second is non-zero only in the beneficiary period. Exact attribution replaces the scalar RMD flow with the flow generated by B.3's yearly after-tax deposits.

**Legitimacy.** Both flows arise from the conversion decisions: $K\cdot\Delta_{SRC}(t)$ disappears under Inside payment by construction; $(1-t_D)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ arises from the reduction in the Traditional balance generating RMDs. Discounting at $r$,

$\sum_t \mathrm{CF}_{\mathrm{drag}}^{t_D}(t)/(1+r)^t = \alpha_{SRC} + \alpha_{RMD}^{t_D}$.

**Scope.** The conversion IRR is defined only under Outside payment, where $K$ is paid from taxable assets (an external outlay). Under Inside payment the IRR is undefined and the RMD-reduction PV is the reportable figure.

---

## Appendix D. Worked Example: Per-Year TDS Cash Flows and Balances

Two tables report each alpha's per-year cash-flow gap (PV discounted at $r$ = 7%) and the balances driving it: depleting converted principal and parallel reinvestment balances for RMD-reduction alpha; parallel sheltered and taxable balances for SRC alpha.

**Table D1. RMD-reduction alpha: Per-Year Cash Flows and Balances.** After-Tax Principal is §4.2's scalar $P = (1-t_D)C$, which depletes via owner-life RMDs then the beneficiary 10-year annuity; $\rho = 75\%$ of each RMD enters the reinvestment balances and the remainder is consumed. **RMD Reinvest — Roth/Tax-Drag** are the parallel avoided-RMD reinvestment balances (Appendix B.2's $A^S_t, A^U_t$): zero until age 75 (2039), accumulating through owner life, then distributing over the beneficiary decade (2059–2068). The 2027–2038 gap years are compressed to one row because the principal simply compounds at $r$ with no distributions. The table reports $\alpha_{RMD}^{t_D} = \$2,439$: the exact B.3 construction gives \$2,502, a 2.5% difference.

| Year | $\varepsilon_t$ | After-Tax Principal | RMD Reinvest — Roth | RMD Reinvest — Tax-Drag | RMD drag (nominal) | RMD drag PV |
|----------|------:|---------------:|-----------------:|--------------------:|--------------:|-----------:|
| 2026 | — | \$96,359 | \$0 | \$0 | — | — |
| 2027–2038 | — | \$103,104 → \$217,018 | \$0 | \$0 | — | — |
| 2039 | 24.6 | \$223,388 | \$6,616 | \$6,616 | — | — |
| 2040 | 23.7 | \$229,599 | \$14,149 | \$14,126 | — | — |
| 2041 | 22.9 | \$235,645 | \$22,659 | \$22,585 | — | — |
| 2042 | 22.0 | \$241,429 | \$32,278 | \$32,120 | — | — |
| 2043 | 21.1 | \$246,887 | \$43,119 | \$42,837 | — | — |
| 2044 | 20.2 | \$251,947 | \$55,304 | \$54,853 | — | — |
| 2045 | 19.4 | \$256,596 | \$68,916 | \$68,241 | — | — |
| 2046 | 18.5 | \$260,688 | \$84,143 | \$83,181 | — | — |
| 2047 | 17.7 | \$264,208 | \$101,079 | \$99,759 | — | — |
| 2048 | 16.8 | \$266,976 | \$119,949 | \$118,188 | — | — |
| 2049 | 16.0 | \$268,978 | \$140,860 | \$138,562 | — | — |
| 2050 | 15.2 | \$270,111 | \$163,992 | \$161,048 | — | — |
| 2051 | 14.4 | \$270,261 | \$189,540 | \$185,826 | — | — |
| 2052 | 13.7 | \$269,452 | \$217,603 | \$212,979 | — | — |
| 2053 | 12.9 | \$267,426 | \$248,501 | \$242,808 | — | — |
| 2054 | 12.2 | \$264,226 | \$282,336 | \$275,395 | — | — |
| 2055 | 11.5 | \$259,745 | \$319,332 | \$310,940 | — | — |
| 2056 | 10.8 | \$253,877 | \$359,723 | \$349,656 | — | — |
| 2057 | 10.1 | \$246,512 | \$403,756 | \$391,760 | — | — |
| 2058 | 9.5 | \$237,819 | \$451,480 | \$437,274 | — | — |
| 2059 | — | \$220,606 | \$418,803 | \$405,098 | \$3,026 | \$325 |
| 2060 | — | \$202,189 | \$383,839 | \$370,782 | \$3,026 | \$303 |
| 2061 | — | \$182,482 | \$346,427 | \$334,185 | \$3,026 | \$283 |
| 2062 | — | \$161,396 | \$306,396 | \$295,154 | \$3,026 | \$265 |
| 2063 | — | \$138,833 | \$263,563 | \$253,527 | \$3,026 | \$248 |
| 2064 | — | \$114,691 | \$217,732 | \$209,132 | \$3,026 | \$231 |
| 2065 | — | \$88,860 | \$168,693 | \$161,785 | \$3,026 | \$216 |
| 2066 | — | \$61,220 | \$116,221 | \$111,289 | \$3,026 | \$202 |
| 2067 | — | \$31,645 | \$60,075 | \$57,435 | \$3,026 | \$189 |
| 2068 | — | \$0 | \$0 | \$0 | \$3,026 | \$177 |
| **Total** | | | | | **\$30,260** | **\$2,439** |

**Replication.** Divisors $\varepsilon_t$ are IRS Uniform Lifetime Table values for the owner's age (62 in 2026; RMDs begin at 75 in 2039 under SECURE 2.0 for a filer born in 1964; none apply in the beneficiary period, which is a 10-year annuity). Two years illustrate the Appendix B.2 recursions:

*2039 — age 75.* Avoided RMD: \$217,018 / 24.6 = \$8,822. Principal: \$217,018 × 1.07 − \$8,822 = \$223,388. Reinvested: \$8,822 × $\rho$ = \$6,616 into each leg. In 2040, prior balances compound before the new deposit: 6,616 × 1.07 + 7,069 = \$14,149 vs. 6,616 × 1.0665 + 7,069 = \$14,126.

*2059 — first beneficiary year.* $D^{S}$ = \$451,480 × af(7%, 10) = \$451,480 × 0.142378 = \$64,281; $D^{U}$ = \$437,274 × af(6.65%, 10) = \$437,274 × 0.140083 = \$61,255; gap = \$3,026, constant across 2059–2068.

Table D2 applies the same $\varepsilon_t$ to each parallel balance during Phase 1.

**Table D2. SRC alpha: Per-Year Cash Flows and Balances.** SRC Roth/Tax-Drag are the two parallel balances holding $K$ (Appendix B.1's $B^S_t, B^U_t$): both start at $K$ = \$17,966 in 2026, compound at $r$ (sheltered) vs. $\tilde r$ (taxable), and draw down on the $\varepsilon_t$ schedule from 2039 (age 75) then the beneficiary 10-year annuity (2059–2068). As in D.1, the 2027–2038 gap years are compressed; both balances simply compound.

| Year | $\varepsilon_t$ | SRC Roth Bal | SRC Tax-Drag Bal | SRC drag (nominal) | SRC drag PV |
|-------|------:|----------------:|------------------:|---------------:|-----------:|
| 2026 | — | \$17,966 | \$17,966 | — | — |
| 2027–2038 | — | \$19,224 → \$40,463 | \$19,161 → \$38,903 | — | — |
| 2039 | 24.6 | \$41,650 | \$39,908 | \$63 | \$26 |
| 2040 | 23.7 | \$42,809 | \$40,879 | \$74 | \$29 |
| 2041 | 22.9 | \$43,936 | \$41,812 | \$84 | \$31 |
| 2042 | 22.0 | \$45,014 | \$42,692 | \$97 | \$33 |
| 2043 | 21.1 | \$46,032 | \$43,507 | \$110 | \$35 |
| 2044 | 20.2 | \$46,975 | \$44,247 | \$125 | \$37 |
| 2045 | 19.4 | \$47,842 | \$44,909 | \$141 | \$39 |
| 2046 | 18.5 | \$48,605 | \$45,467 | \$159 | \$41 |
| 2047 | 17.7 | \$49,261 | \$45,922 | \$177 | \$43 |
| 2048 | 16.8 | \$49,777 | \$46,243 | \$199 | \$45 |
| 2049 | 16.0 | \$50,151 | \$46,428 | \$221 | \$47 |
| 2050 | 15.2 | \$50,362 | \$46,461 | \$245 | \$48 |
| 2051 | 14.4 | \$50,390 | \$46,324 | \$271 | \$50 |
| 2052 | 13.7 | \$50,239 | \$46,023 | \$297 | \$51 |
| 2053 | 12.9 | \$49,861 | \$45,516 | \$327 | \$53 |
| 2054 | 12.2 | \$49,265 | \$44,812 | \$356 | \$54 |
| 2055 | 11.5 | \$48,429 | \$43,895 | \$387 | \$54 |
| 2056 | 10.8 | \$47,335 | \$42,750 | \$420 | \$55 |
| 2057 | 10.1 | \$45,962 | \$41,360 | \$454 | \$56 |
| 2058 | 9.5 | \$44,341 | \$39,757 | \$484 | \$56 |
| 2059 | — | \$41,132 | \$36,831 | \$744 | \$80 |
| 2060 | — | \$37,698 | \$33,711 | \$744 | \$75 |
| 2061 | — | \$34,024 | \$30,384 | \$744 | \$70 |
| 2062 | — | \$30,092 | \$26,835 | \$744 | \$65 |
| 2063 | — | \$25,885 | \$23,051 | \$744 | \$61 |
| 2064 | — | \$21,384 | \$19,014 | \$744 | \$57 |
| 2065 | — | \$16,568 | \$14,709 | \$744 | \$53 |
| 2066 | — | \$11,414 | \$10,118 | \$744 | \$50 |
| 2067 | — | \$5,900 | \$5,222 | \$744 | \$46 |
| 2068 | — | \$0 | \$0 | \$744 | \$43 |
| **Total** | | | | **\$12,129** | **\$1,480** |

Both alphas accumulate before realizing as cash flows. SRC realization begins with owner-life drawdown in 2039 and continues through the beneficiary decade; RMD-reduction alpha is realized only during the beneficiary period. PV totals reconcile to the §5 figures.

---

## References

Bergstresser, Daniel, and James Poterba. 2002. "Do After-Tax Returns Affect Mutual Fund Inflows?" *Journal of Financial Economics* 63 (3): 381–414.

Brown, Jeffrey R., James M. Poterba, and David P. Richardson. 2017. "Do Required Minimum Distribution Rules Matter? The Effect of the 2009 Holiday on Retirement Plan Distributions." *Journal of Public Economics* 151: 96–109.

Cheshire, Steven. 2025. "Roth Conversion Valuation & Mechanics." SSRN Working Paper 5205840. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5205840

Cheshire, Steven M. 2026. "The Synthetic Roth Contribution: Isolating and Valuing the Wrapper-Migration Component of Outside-Funded Roth Conversions." SSRN Working Paper 6772118. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6772118

Kitces, Michael. 2021. "Limits of Tax Diversification and the Tax Alpha of Roth Optimization." Kitces.com, August 25. https://www.kitces.com/blog/tax-diversification-roth-optimization-conversion-tax-alpha/

McQuarrie, Edward F., and James A. DiLellio. 2023. "The Arithmetic of Roth Conversions." *Journal of Financial Planning* 36 (5): 72–89.

Murray, C. 2022. "The 'Yield-Split' Method of Asset Location to Improve Tax Efficiency of Index Funds." Kitces.com, March 30. https://www.kitces.com/blog/yield-split-asset-location-tax-drag-alpha-efficiency-index-funds/

Passman, James M., Boris C. Wong, and Joel M. Dickson. 2025. "A 'BETR' Approach to Roth Conversions." Vanguard Research, July. https://corporate.vanguard.com/content/dam/corp/research/pdf/a_betr_approach_to_roth_conversions_072025.pdf

Piper, Mike. n.d. "The 4 Effects of a Roth Conversion." Oblivious Investor. https://obliviousinvestor.com/the-4-effects-of-a-roth-conversion/

Reichenstein, William, and William Meyer. 2017. "Valuing Roth Conversion and Recharacterization Options." *Journal of Financial Planning* 30 (11): 48–56.

Shoven, John B., and Clemens Sialm. 2003. "Asset Location in Tax-Deferred and Conventional Savings Accounts." *Journal of Public Economics* 88: 23–38.

Sialm, Clemens, and Hanjiang Zhang. 2020. "Tax-Efficient Asset Management: Evidence from Equity Mutual Funds." *Journal of Finance* 75 (2): 735–777.

Van Deusen, Adam, and Michael Kitces. 2022. "Leveraging Tax Advantages of Roth Conversion in Bear Markets." Kitces.com, June 22. https://www.kitces.com/blog/roth-conversion-bear-market-downturn-tax-savings-cost-conversion-averaging-isolate-ira-basis/
