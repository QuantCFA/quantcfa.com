# Quantifying Tax-Drag Shelter Benefits in Roth Conversions

**RMD Reduction and the Hidden Roth Contribution**

Steven Cheshire, CFA  
cheshiresteven@gmail.com | Draft: August 2, 2026

---

## Executive Summary

- A Roth conversion involves two distinct planning decisions: whether to convert, and conditional on converting, whether conversion tax should be paid from Inside or Outside assets. These decisions generate two distinct tax-drag shelter (TDS) alphas: **RMD-reduction alpha** and **Synthetic Roth Contribution (SRC) alpha**. *(§2)*
- **RMD-reduction alpha** arises because conversion reduces future Traditional-account balances and therefore future Required Minimum Distributions (RMDs). Reinvested avoided-RMD dollars remain sheltered rather than compounding in taxable accounts. This benefit exists under both Inside- and Outside-funded conversions. *(§4.2)*
- **SRC alpha** arises only under Outside-funded conversions. Paying conversion tax from taxable assets migrates those after-tax dollars into the Roth wrapper, creating a Synthetic Roth Contribution. The benefit is the wrapper-migration differential between Roth and taxable growth, not the full future value of the conversion-tax dollars. *(§4.1, App A.1)*
- Both alphas reduce to the valuation identity $\alpha = P \cdot \mu$, where $P$ is sheltered principal and $\mu$ is the per-dollar PV of the yearly sheltered-vs-taxable distribution gap. Embedding SECURE 2.0's bounded owner-life and beneficiary distribution schedule is the critical addition: it closes the cash-flow stream and admits closed-form present-value measurement of both alphas. *(§3, App A)*
- In the worked example, RMD-reduction alpha (\$2,591) exceeds SRC alpha (\$1,021) because the principal sheltered through reduced future RMDs substantially exceeds the conversion-tax principal generating SRC alpha. *(§5)*
- Tax-drag shelter contributes ~19% of the additional value beyond the base return in the worked example, and can be separately attributed within conversion IRR — letting planners distinguish drag-avoidance benefits from rate-arbitrage and Medicare effects. *(§4.3, App C)*
- TDS alphas are positive whenever tax drag is positive, so a conversion can create value even when rate-arbitrage and Medicare effects are jointly negative. Planners weighing only those two may reject beneficial conversions. *(§5, §6)*

---

## 1. Literature Review

Published treatment of tax drag as a quantified, named PV line item in the Roth-conversion setting is sparse. Six entries illustrate this gap.

**McQuarrie & DiLellio (2023), "The Arithmetic of Roth Conversions,"** *Journal of Financial Planning*. Equation 4 and Tables 4–5 reinvest after-tax counterfactual RMDs at $r(1-d)$ while the Roth compounds at $r$, establishing that drag compounds rather than accruing linearly. The present paper expands this framework by embedding the full SECURE 2.0 distribution schedule — owner-life RMDs followed by 10-year beneficiary depletion — into the same arithmetic. That finite distribution schedule is the key methodological addition: absent a terminal distribution schedule, the after-tax wedge remains open-ended and a breakeven age is the natural output. Closing the schedule at the legally mandated terminus turns the same wedge into a finite cash-flow stream that admits a closed-form PV and an IRR, which is what lets us price RMD-reduction alpha as a separate per-decision line item rather than report it as a breakeven scalar.

**Reichenstein & Meyer (2017), "Valuing Roth Conversion and Recharacterization Options,"** *Journal of Financial Planning* 30(11): 48–56. Their Strategy 3 (outside-funded conversion) vs Strategy 2 (inside-funded) comparison computes $tV(1+r)^n - tV(1+R)^n$, the drag wedge on the conversion-tax dollars — algebraically what the present paper isolates as SRC alpha. R&M do not extend this to the RMD-reduction channel: the avoided-RMD stream sheltered from drag (the dominant alpha in most conversions) is not separately priced, and the common valuation structure linking the two channels is not separately identified. Results are reported as FV ratios at the withdrawal year rather than PV at the conversion year.

**Vanguard BETR (Passman, Wong & Dickson 2025).** Computes Jill's break-even future tax rate from Roth multiple $M = 3$, taxable multiple $M' = 2$, and $n = 20$; $\tau_D = 23.3\%$ — our equivalent embedded drag $d = 1 - \dfrac{M'^{1/n} - 1}{M^{1/n} - 1} \approx 37.5\%$ (Cheshire 2026, §6). The framings are algebraically identical, yet 23.3% vs. Jill's expected 24% reads as plausible; the equivalent tax-drag rates of 37.5% and 34.95% (from $M' = M(\tau_D/\tau_C) = 2.057$) may appear less so. Viewed through the present framework, BETR can be re-expressed as an implied tax-drag assumption: the break-even on $\tau_D$ is algebraically a break-even on $d$, with $d \approx 37.5\%$ as the implied figure in Jill's case. The reframing substitutes a future statutory rate for an embedded portfolio-level drag the planner can estimate and influence.

**Mike Piper, "The 4 Effects of a Roth Conversion."** Names the Outside-payment benefit and the RMD-reduction benefit qualitatively but does not quantify either or produce PV/IRR figures.

**Murray (Kitces.com).** Establishes the yield-split asset-location framework underlying this paper's tax-drag-rate assumptions; does not address Roth-conversion payment-source mechanics.

**Kitces; Van Deusen & Kitces.** Analyze tax diversification, Roth optimization, and account-level tax alpha, and demonstrate the Outside-payment benefit — paying conversion tax from non-IRA cash preserves the full converted balance for market upside. Neither isolates the conversion-tax dollar's $r(1-d)$ counterfactual as a separately priced PV or IRR component.

Across these treatments, tax drag appears as an embedded assumption, breakeven condition, or qualitative benefit — rather than as two separately priced PV alphas corresponding to the planner's two distinct decisions: whether to convert, and conditional on converting, whether to fund the tax from inside or outside assets.

To our knowledge, prior Roth-conversion studies have not reported the drag avoided on the counterfactual reinvestment of eliminated RMDs as a separately priced present-value component of conversion value. The contribution is isolation, quantification, and decision attribution — not discovery of the underlying drag-compounding mechanism. A further contribution is unification: both alphas arise from the same valuation identity, differing only in the principal sheltered and the schedule over which it is valued.

---

## 2. Tax-Drag Shelter

**Tax-Drag Shelter (TDS)** is the present-value gap between holding investments inside vs. outside a tax-advantaged wrapper. Inside, investments grow unencumbered by taxes; outside, the same dollars pay annual tax on dividends, interest, realized capital gains, and turnover-driven distributions — a drag that compounds materially over time.

A Roth conversion involves two sequential decisions — whether to convert, and if converting, whether to pay the tax from Outside assets. Each affirmative decision creates a distinct, positive tax-drag shelter alpha.

1. **RMD-reduction alpha (primary):**

    All conversions (Inside & Outside) reduce the Traditional account by an amount $C$, causing reduced future RMDs. RMD reductions that would have been reinvested taxably remain sheltered. **RMD-reduction alpha** is the PV of that sheltering.

2. **SRC alpha (secondary):**

    Outside-funded conversions migrate $K$ ($\tau_C \cdot C$) after-tax dollars into the Roth wrapper — **a hidden Roth contribution**, formally a **Synthetic Roth Contribution** (SRC; Cheshire 2026). **SRC alpha** is the PV gain of $K$ compounding tax-free as it distributes vs. in the taxable counterfactual. Identical alpha accrues to a same-sized statutory Roth contribution.

---

## 3. The Drag-Shelter Valuation Identity

A common process creates both TDS alphas: run two parallel accounts on a shared distribution schedule — one sheltered at $r$, one taxable at $\tilde{r} = r(1-d)$ — and sum the PV of the yearly distribution gap. For principal $P$, the **drag-shelter multiplier** $\mu_P$ is this per-dollar sum (derivation in Appendix A; simulator in Appendix B):

$$
\alpha \;=\; P \cdot \mu_{P}.
$$

§4 specializes the identity twice: SRC alpha on principal $K$, distributed across owner life and the beneficiary decade; RMD-reduction alpha on avoided-RMD dollars, which accumulate through owner life and distribute only in the beneficiary decade.

---

## 4. The Two TDS Alphas

### 4.1 SRC alpha — Outside-funded conversions only

Specializing §3 with $P = K$,

$$
\alpha_{SRC} \;=\; K \cdot \mu_{SRC}.
$$

**Two-stage construction (RMD distribution).** Phase 1 (owner-life): $K$ compounds in two parallel balances — sheltered at $r$, taxable at $\tilde{r}$ — and distributes each year via the RMD divisor. The yearly sheltered-vs-taxable distribution gap accrues as alpha. Phase 2 (beneficiary period): the residual distributes as a 10-year fixed annuity (FA); the same gap mechanic continues. Appendix B.1 gives the construction. (Under FA distribution, Phase 1 is itself a fixed annuity across owner life — no separate Phase 2.)

The conventional Hidden Contribution figure equates the conv-tax dollar's value with its full sheltered-wrapper future value — implicitly assuming it would have done nothing absent conversion. The counterfactual is taxable growth at $\tilde{r}$. The TDS framing extracts only the sheltered-vs-taxable differential as drag-avoidance value, leaving the would-have-grown-anyway portion correctly attributed to the conv-tax dollar regardless of conversion. (Appendix A.1 gives the decomposition.)

**Inside payment.** No after-tax dollars move into the Roth wrapper, so $\alpha_{SRC} = 0$.

SRC alpha is the tax-drag-shelter component of total SRC value; Appendix A.1 splits it from the taxable-side growth term.

![](figures/src-alpha-chart.png)

**Figure 1.** SRC alpha. $K$ = \$17,966 conversion-tax dollars compound in a sheltered Roth vs. a taxable counterfactual (drag $d$ = 5%), distributing under RMD, then FA for beneficiary; the per-year gap accrues PV = \$1,021.

### 4.2 RMD-reduction alpha — Inside- and Outside-funded conversions

The principal being sheltered is the after-tax converted balance, $P = (1-\tau_C) \cdot C$ — the balance whose future RMDs the conversion avoids. The reinvestment share $\rho$ scales the avoided-RMD flow, not the principal. Specializing §3 on the avoided-RMD schedule,

$$
\alpha_{RMD} \;=\; (1-\tau_C) \cdot C \cdot \rho \cdot \mu_{RMD}.
$$

Because RMD divisors $\varepsilon_t$ depend on age, not balance, the avoided-RMD stream scales linearly in $C$, justifying the use of $P = (1-\tau_C) \cdot C$ as the principal in the identity above. The multiplier $\mu_{RMD}$ (Appendix B.2) prices the drag-shelter value per dollar of principal at full reinvestment ($\rho = 1$). Because the reinvestment balances start at zero and $\rho$ multiplies every deposit, $\alpha_{RMD}$ is exactly proportional to $\rho$.

**Two-stage construction.** Phase 1 (owner-life): each year's avoided RMD enters two parallel balances — sheltered at $r$, taxable at $\tilde{r}$. Nothing distributes; the owner-life drag accumulates in the balance gap. Phase 2 (beneficiary period): under the SECURE-Act 10-year mandate, both balances distribute as a 10-year fixed annuity, and the yearly sheltered-vs-taxable gap delivers the alpha. Phase 2 is identical in structure to SRC alpha's Phase 2.

$\rho$ is the surplus-wealth reinvestment share; consumed RMDs cancel across conversion and counterfactual paths and are out of scope.

![](figures/rmd-alpha-chart.png)

**Figure 2.** RMD-reduction alpha. Avoided RMDs reinvest in parallel sheltered and taxable balances during Phase 1 (owner life); both distribute as a 10-year fixed annuity in Phase 2 (beneficiary period). Cumulative drag-avoidance benefit reaches PV = \$2,591.

Both figures show balances depleting to zero — owner-life RMDs plus SECURE-mandated 10-year beneficiary distribution form a finite schedule that admits closed-form PV (and IRR for SRC alpha).

### 4.3 Total TDS alpha

Under Outside payment,

$$
\alpha_{TDS} \;=\; \alpha_{SRC} \;+\; \alpha_{RMD}.
$$

Under Inside payment, $\alpha_{TDS} = \alpha_{RMD}$ since no wrapper migration occurs and $\alpha_{SRC} = 0$.

Both alphas also feed the conversion's IRR through yearly drag-related cash flows — the SRC flow over owner-life and beneficiary distributions, the RMD-reduction flow over the beneficiary period — so a planner can attribute a quantified share of the deployed IRR to drag avoidance. Appendix C gives the per-year definitions. Under Inside payment (no user outlay) the conversion IRR is undefined and the RMD-reduction PV stands alone.

---

## 5. Worked Example

Converting \$126,745 fills through the 22% bracket, with an effective tax rate of 14.2%.

**Inputs.**

| Parameter | Symbol | Value |
|---|---|---|
| Pre-tax return | $r$ | 7% |
| Tax-drag rate | $d$ | 5% |
| After-drag return | $\tilde{r} = r(1-d)$ | 6.65% |
| Conversion principal | $C$ | \$126,745 |
| Conversion-year effective rate | $\tau_C$ | 14.2% |
| Conversion tax | $K = \tau_C \cdot C$ | \$17,966 |
| Owner remaining life | | 23 years (69–92) |
| Beneficiary period | | 10 years |
| RMD reinvestment | $\rho$ | 75% |

$\tau_C$ is the effective conversion federal tax rate — incremental conversion-year tax divided by $C$. Both alphas are exactly linear in the resulting split of $C$ into $P = (1-\tau_C)C$ and $K = \tau_C C$, so substituting another $\tau_C$ rescales them and leaves the Appendix B recursions unchanged.

**The two alphas — Outside- vs. Inside-funded tax payment:**

| Component | Outside payment | Inside payment |
|---|---|---|
| RMD-reduction alpha | \$2,591 | \$2,591 |
| SRC alpha | \$1,021 | \$0 |
| **TDS total** | **\$3,612** | **\$2,591** |
| Conversion IRR | 11.76% | undefined (no outlay) |

**Interpretation.** Inside- and Outside-funded conversions both yield \$2,591 RMD-reduction alpha. Outside funding adds \$1,021 SRC alpha. RMD alpha is 2.54× larger because far more principal is sheltered: $\rho = 75\%$ of $P = (1-\tau_C)\cdot C = $ \$108,779 leaves \$81,584 of reinvested flow, 4.54× $K = $ \$17,966. SRC's smaller principal earns a higher per-dollar multiplier ($\mu_{SRC} \approx 0.057$ vs. $\mu_{RMD} \approx 0.032$), but not enough to overcome that scale advantage.

All Roth conversions produce RMD-reduction alpha while only Outside conversions create SRC alpha. Outside's 11.76% IRR is the 7% base plus rate-arbitrage (\$14,828) + Medicare (\$953) + TDS (\$3,612) alphas. TDS contributes 18.6% of that alpha, which may be on the small side: our example's rate-arbitrage alpha is inflated by the Social Security tax-torpedo impact, so typical conversions may have a larger TDS share. In fact, some conversions with negative combined Rate Arbitrage and Medicare alphas have positive overall alpha due to the always positive TDS alphas.

Appendix D reconciles the RMD-reduction and SRC alphas year by year, with the underlying balances in nominal and PV terms; §5.2 shows sensitivity to longer life, higher drag, and reinvestment share.

### 5.1 Calibrating $d$ and $\rho$

$d$ is the fraction of pre-tax return lost annually to tax in the taxable counterfactual. Murray's yield-split analysis prices a \$1M portfolio holding 40% in taxable at 2021 yields (1.3% equity, 1.7% bond), applying a 36% blended rate to dividend income. Its annual drag of \$2,770 without asset location, \$1,872 under conventional location and \$990 under yield-split is 69, 47 and 25 basis points per taxable dollar — $d$ = 9.9%, 6.7% and 3.5% when borne by dollars earning the 7% assumed here.

The 5% baseline therefore embeds an assumption about placement as well as about tax rates: it describes a household keeping its highest-yielding holdings sheltered and broad, low-turnover index funds in the taxable account. Households mirroring the same allocation in every account should use a higher $d$. At the upper end, Sialm and Zhang (2020) estimate that US equity mutual fund shareholders in the highest tax bracket paid investment taxes averaging 1.08% of investment value per year over 1990–2016 — $d$ = 15% at $r$ = 7% — so a fund-held counterfactual would roughly triple the alphas above. The baseline is deliberately conservative: the drag implicitly embedded in Vanguard's illustrative BETR example is roughly 37.5% (§1).

These parameters are not unobservable to the planner: asset mix and asset location are precisely what an advisor sets, so $d$ is better estimated by the advisor than by any model default — and improving it is a distinct source of value that adds to, rather than overlaps with, the wrapper effect priced here.

The 2009 RMD holiday offers direct evidence on $\rho$. Brown, Poterba and Richardson (2017) find that roughly one third of those affected by the rules in 2008 discontinued distributions entirely once permitted to; among those who continued, 39% reported that depending on distributions for daily spending was not an important factor, and a further 27% rated it only somewhat important. Their TIAA sample is wealthier than retirees generally — a skew that plausibly matches the advised households this analysis addresses. Together these support $\rho$ near the upper end of a 60–75% range, and because $\alpha_{RMD}$ is exactly linear in $\rho$ (§5.2), a planner judging a household differently can rescale directly.

### 5.2 Sensitivity

**Direction of effects.**

| Parameter Change | SRC Alpha | RMD Alpha |
|----------------------------------------|:------:|:------:|
| Longer life | ↗ | ↑ |
| Higher drag $d$ | ↑ | ↑ |
| Higher RMD reinvestment $\rho$ | — | ↑ |

**Magnitude examples (base + parameter variations).**

| Scenario | RMD-reduction alpha | SRC alpha | RMD/SRC | TDS total |
|------------------------------|----------------:|-----------:|---------:|-----------:|
| Base ($L$=23, $d$=5%, $\rho$=75%) | \$2,591 | \$1,021 | 2.54× | \$3,612 |
| Low reinvestment ($\rho$=50%) | \$1,727 | \$1,021 | 1.69× | \$2,748 |
| Full reinvestment ($\rho$=100%) | \$3,455 | \$1,021 | 3.38× | \$4,476 |
| Longer life ($L$=28) | \$3,703 | \$1,055 | 3.51× | \$4,758 |
| Higher drag ($d$=7%) | \$3,591 | \$1,410 | 2.55× | \$5,001 |
| Both ($L$=28, $d$=7%) | \$5,122 | \$1,455 | 3.52× | \$6,577 |

RMD-reduction alpha is quite time-sensitive: longer life extends Phase 1 accumulation, producing a larger Phase 2 starting balance. SRC alpha is self-limiting: extending Phase 1 distributes more of $K$, shrinking the Phase 2 residual — Phase 1 gains roughly offset Phase 2 shrinkage. For RMD-reduction, $L$ and $d$ compound: changing both increases alpha by \$2,531 — ~\$419 more than their individual sum (\$1,112 + \$1,000 = \$2,112). Alpha is very nearly proportional to $d$, so a planner substituting a different drag rate can rescale directly. $\rho$ enters differently: it scales RMD-reduction alpha exactly — $\alpha_{RMD} = \$3,455 \times \rho$ — and leaves SRC alpha untouched, so a planner can substitute a household-specific reinvestment share without re-simulating.

### 5.3 Limitations: taxable counterfactual and beneficiary schedule

Both alphas price the gap between compounding at $r$ inside the wrapper and $r(1-d)$ outside, with a single $d$ applied across the whole horizon — a household whose surplus dollars sit in a taxable brokerage account and are taxed annually on distributions. Where that description fails, it mostly fails toward a smaller $d$: municipal bonds in the taxable sleeve produce federally exempt interest, and a retiree whose income keeps qualified dividends and long-term gains in the 0% bracket bears almost no annual drag. If avoided RMDs are consumed rather than reinvested, there is no taxable reinvestment counterfactual for those dollars; $\rho$ specifies the fraction that does enter it.

A household holding appreciated positions until death avoids the deferred capital-gains tax entirely. This does not undermine the construction, because $d$ is calibrated to annually recurring distribution tax rather than to terminal gains (App A (vi)) — step-up leaves the effective rate unchanged where returns are fully distributed (Shoven and Sialm 2003, n. 10), and matters least for tax-inefficient portfolios, whose unrealized gains are smallest. It does mean the baseline should not be inflated to capture unrealized appreciation, and that studies charging an accrual on unrealized gains (Bergstresser and Poterba 2002) are the wrong calibration source for such a household.

Two structural assumptions bind harder than $d$. Allocation is held constant across wrappers (App A (i)), yet real households practice asset location, so the wrapper effect priced here and the location effect interact rather than add cleanly. And the finite distribution schedule rests on the SECURE-Act 10-year rule: an eligible designated beneficiary — spouse, minor child, or one less than ten years younger — faces a different schedule, and both alphas would need re-deriving.

---

## 6. Conclusion

Three implications for conversion planning.

1. **Judge the Conversion decision on RMD-reduction alpha alone.** It applies to both Inside- and Outside-funded conversions, scales with the after-tax converted principal $(1-\tau_C)\cdot C$ (and linearly with $\rho$) and is the dominant TDS alpha.

2. **Judge the Outside-settlement decision (paying conversion tax with outside funds) on SRC alpha.** It captures the value of moving $K$ dollars into the Roth — identical to what a same-sized statutory Roth contribution gains.

3. **Attribute, don't aggregate.** Reporting a single conversion IRR conflates rate arbitrage, Medicare effects, and drag shelter. The two alphas let a planner show clients which slice of the IRR each decision actually buys, and which assumptions ($\tau_C$, $d$, $\rho$, owner life) drive which slice.

**Takeaway.** Tax-drag shelter is captured predominantly through the RMD-reduction channel — available to both Inside- and Outside-funded conversions — while the wrapper-migration benefit of Outside funding is the smaller, less time-leveraged piece. Because both alphas are positive whenever tax drag is positive, a conversion can create value even when rate-arbitrage and Medicare effects are jointly negative; evaluating conversions on those two effects alone risks rejecting beneficial ones.

---

## Appendix A. The Drag-Avoidance Value Identity

**Notation.** The following symbols are used throughout Appendices A–C.

| Symbol | Meaning |
|---------------|--------------------------------------------------------------------|
| $S$ | Sheltered wrapper; compounds at $r$ |
| $U$ | Unsheltered taxable wrapper; compounds at $\tilde{r} = r(1-d)$ |
| $B^{S}_t, B^{U}_t$ | Balance at time $t$ in each wrapper |
| $A^{S}_t, A^{U}_t$ | Accumulation balance for avoided RMDs (Appendix B.2) |
| $D^{S}(t), D^{U}(t)$ | Distribution in year $t$ from each wrapper |
| $\Delta(t)$ | $D^{S}(t) - D^{U}(t)$, the yearly distribution gap |
| $S(T), U(T)$ | FV factor at horizon $T$: $(1+r)^T$, $(1+\tilde{r})^T$ (no distributions) |
| $\rho$ | Reinvestment share of avoided RMDs (§4.2) |
| $\mu_P$ | $\alpha / P$, per-dollar PV multiplier |
| $\mu_{SRC}, \mu_{RMD}$ | Schedule-specific multipliers (App B), $\mu_{RMD}$ at $\rho = 1$; $\alpha_{SRC} = K \cdot \mu_{SRC}$, $\alpha_{RMD} = (1-\tau_C) C \cdot \rho \cdot \mu_{RMD}$ |

**The identity.** Place a principal of $P$ dollars at $t=0$ into either a sheltered wrapper (compounding at $r$) or an unsheltered taxable wrapper (compounding at $\tilde{r}$), and distribute each on a common schedule $\{D^{S}(t), D^{U}(t)\}$. The household receives the distribution stream; wrapper choice does not change time-zero outlay. Discounting at $r$, the incremental present value of the sheltered wrapper is

$$
\alpha \;=\; \sum_{t} \frac{D^{S}(t) - D^{U}(t)}{(1+r)^{t}} \;=\; P \cdot \mu_{P},
$$

where $\mu_P = \alpha/P$ is the per-dollar multiplier surfaced in §4.

**Assumptions.** (i) Identical pre-tax return path and identical asset allocation inside and outside the wrapper — the construction isolates the wrapper effect at constant allocation and does not model asset-location optimization, which would change both $r$ and $d$ by wrapper. (ii) Identical distribution method and schedule. (iii) Principal enters at time 0; distributions follow per the schedule. (iv) No additional rate effects layered onto the same dollar (no contribution-year vs. distribution-year arbitrage). (v) End-of-period distributions: balances accrue a full year of return before the year's distribution is taken, matching the simulator step order in Appendix B. (vi) The taxable counterfactual is held for the full horizon and bears drag $d$ in every year. $d$ is calibrated to annually recurring tax on dividends, interest and turnover distributions (§5.1) — not to the deferred capital-gains tax due on sale. A household holding appreciated positions until death receives a step-up in basis and avoids that deferred tax, but still bears the annual drag measured here; the construction therefore does not depend on assuming no step-up. Shoven and Sialm (2003, n. 10) make the same point: step-up does not affect the effective tax rate when returns are fully distributed.

**Proof sketch.** The sheltered balance evolves as $B^{S}_t = B^{S}_{t-1}(1+r) - D^{S}(t)$ with $B^{S}_0 = P$, and the unsheltered counterfactual as $B^{U}_t = B^{U}_{t-1}(1+\tilde{r}) - D^{U}(t)$ with $B^{U}_0 = P$. The household receives the distribution stream and discounts it at $r$. The incremental PV is therefore $\sum_t (D^{S}(t) - D^{U}(t)) / (1+r)^t$. Linearity in $P$ gives the per-dollar form $\mu_P = \alpha/P$.

**Comment.** The identity reduces to two questions: *what principal is being sheltered, and what distribution schedule drives $\mu_P$?* §4.1 sets $P = K$ on the post-conversion Roth schedule; §4.2 sets $P = (1-\tau_C)\cdot C$ on the avoided-RMD schedule, with $\rho$ scaling the reinvested flow.

### A.1 SRC alpha within total SRC value

Let $S(T) = (1+r)^T$ and $U(T) = (1+\tilde{r})^T$ denote per-dollar future values at horizon $T$ in the sheltered and taxable wrappers respectively (no distributions). The Synthetic Roth Contribution's total wealth value (Cheshire 2026) decomposes into two components:

- **Taxable-counterfactual growth**, $K \cdot U(T)$ — the future value the $K$ dollars would have earned at $\tilde{r}$ had they remained in the taxable wrapper. This value is properly attributed to the conv-tax dollar regardless of conversion choice.
- **Drag-avoidance alpha**, $K \cdot (S(T) - U(T))$ — the excess generated by the $K$ dollars compounding at $r$ inside the Roth rather than at $\tilde{r}$ outside. This is the wrapper-migration benefit and is available only inside the Roth.

SRC alpha is the **tax-drag-shelter component**: $\alpha_{SRC} = K \cdot \mu_{SRC}$ (Appendix B.1 defines $\mu_{SRC}$). The conventional Hidden Contribution figure $K \cdot S(T)$ implicitly assumes a zero-growth taxable counterfactual and conflates the two components; the TDS framing extracts only the differential as alpha.

---

## Appendix B. Drag-Shelter Simulator

Both alphas run a sheltered balance at $r$ and an unsheltered counterfactual at $\tilde{r} = r(1-d)$ on a common distribution schedule, then sum the PV of the yearly gap $\Delta(t) = D^{S}(t) - D^{U}(t)$ discounted at $r$. End-of-period convention: a full year of return accrues before the year's distribution is taken (App A assumption (v)).

**Annuity factor.** $\mathrm{af}(x, N) = x / (1 - (1+x)^{-N})$, the level annual payment per dollar of starting balance over $N$ years at rate $x$.

**Distribution methods.** RMD applies an age-indexed life-expectancy divisor $\varepsilon_t$ to the running balance: $D(t) = B / \varepsilon_t$. FA payments are constant at $\mathrm{af}(x, N) \cdot B_0$ across $N$ years.

### B.1 SRC alpha: distribution from K

Place $K$ dollars at $t=0$ in parallel sheltered and unsheltered balances $B^{S}, B^{U}$.

**Phase 1 — owner-life RMD distribution.** For years $t = 1, \ldots, L$ of the owner's remaining life: distribute $D^{S}(t) = B^{S}_{t-1}/\varepsilon_t$ and $D^{U}(t) = B^{U}_{t-1}/\varepsilon_t$; update $B^{S}_t \leftarrow B^{S}_{t-1}(1+r) - D^{S}(t)$ and $B^{U}_t \leftarrow B^{U}_{t-1}(1+\tilde{r}) - D^{U}(t)$. The realized gap $\Delta(t)$ is the owner-life SRC flow.

**Phase 2 — beneficiary 10-year fixed annuity.** Hold payments constant at $D^{S}(t) = \mathrm{af}(r, 10) \cdot B^{S}_L$ and $D^{U}(t) = \mathrm{af}(\tilde{r}, 10) \cdot B^{U}_L$; update balances each year.

$$
\alpha_{SRC} \;=\; \sum_{t} \frac{\Delta(t)}{(1+r)^t} \;=\; K \cdot \mu_{SRC}.
$$

(Under FA distribution method, Phase 1 is itself a fixed annuity across owner life with no separate Phase 2.)

### B.2 RMD-reduction alpha: accumulation before distribution

Let $a(t)$ be the avoided RMD dollars in year $t$ — the pre-conversion-minus-post-conversion RMD differential scaled by reinvestment share $\rho$. The differential is generated by the principal $P = (1-\tau_C)\cdot C$ depleting on the owner-life RMD schedule; $\rho$ enters only here, on the flow. Reinvestment balances $A^{S}, A^{U}$ start at zero.

**Phase 1 — owner-life accumulation.** For years $t = 1, \ldots, L$: compound prior balances at $r$ and $\tilde{r}$, then add $a(t)$ to each. No distributions, so $\Delta(t) = 0$ throughout owner life.

**Phase 2 — beneficiary 10-year fixed annuity.** Hold payments constant at $D^{S}(t) = \mathrm{af}(r, 10) \cdot A^{S}_L$ and $D^{U}(t) = \mathrm{af}(\tilde{r}, 10) \cdot A^{U}_L$; update balances each year.

$$
\alpha_{RMD} \;=\; \sum_{t} \frac{\Delta(t)}{(1+r)^t} \;=\; (1-\tau_C) \cdot C \cdot \rho \cdot \mu_{RMD}.
$$

The Phase-2 $\Delta(t)$ is the RMD-reduction per-year flow used in Appendix C; owner-life entries are zero. $\mu_{RMD}$ is the multiplier evaluated at $\rho = 1$: because $A^{S}, A^{U}$ start at zero and $\rho$ multiplies every deposit, $\alpha_{RMD}$ is exactly linear in $\rho$.

---

## Appendix C. IRR Attribution: Per-Year Drag-Related Cash Flows

§4.3 reports that the conversion IRR carries a drag-avoidance share. This appendix gives the per-year cash flows behind that claim.

**Per-year flows.** Let $\Delta_{SRC}(t)$ be the yearly sheltered-vs-taxable gap on SRC alpha's two-phase schedule (Appendix B.1), and $\Delta_{RMD}(t)$ the analogous Phase-2 gap on RMD-reduction alpha's beneficiary 10-year annuity (Appendix B.2). Both are per dollar of principal, $\Delta_{RMD}(t)$ at full reinvestment. The conversion's incremental cash flow in year $t$ picks up two drag-related terms:

$$\mathrm{CF}_{\mathrm{drag}}(t) \;=\; K\cdot\Delta_{SRC}(t)\;+\;(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t).$$

The first runs over the owner's remaining life and beneficiary period; the second is non-zero only in the beneficiary period.

**Legitimacy.** Both flows exist because of the conversion decisions: $K\cdot\Delta_{SRC}(t)$ disappears under Inside payment by construction; $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ exists only because the conversion reduced the Traditional balance generating RMDs. Discounting at $r$, $\sum_t \mathrm{CF}_{\mathrm{drag}}(t)/(1+r)^t = \alpha_{TDS}$.

**Scope.** The conversion IRR is defined only under Outside payment (where $K$ is a real outlay). Under Inside payment the IRR is undefined and the RMD-reduction PV is the reportable figure.

---

## Appendix D. Worked Example: Per-Year TDS Cash Flows and Balances

Two alpha tables: the per-year cash-flow gap (PV discounted at $r$ = 7%) plus the balances driving it — depleting converted principal and parallel reinvestment balances for RMD-reduction alpha; parallel sheltered/taxable balances for SRC alpha.

### D.1 RMD-reduction alpha

**After-Tax Conv Amt** is §4.2's principal, $P = (1-\tau_C)C = (1-0.142)\times\$126,745 = \$108,779$ in 2026, depleting via full RMDs (owner-life) then the beneficiary 10-year annuity; $\rho = 75\%$ of each RMD enters the reinvestment balances, the remainder is consumed. **RMD Reinvest — Roth/Tax-Drag** are the parallel avoided-RMD reinvestment balances (Appendix B.2's $A^S_t, A^U_t$): zero until age 73 (2030, when RMDs first apply), then accumulating through owner life, then distributing over the 10-year beneficiary annuity (2050–2059).

| Year | $\varepsilon_t$ | After-Tax Conv Amt | RMD Reinvest — Roth | RMD Reinvest — Tax-Drag | RMD drag (nominal) | RMD drag PV |
|----------|------:|---------------:|-----------------:|--------------------:|--------------:|-----------:|
| 2026 | — | \$108,779 | \$0 | \$0 | — | — |
| 2027 | — | \$116,394 | \$0 | \$0 | — | — |
| 2028 | — | \$124,541 | \$0 | \$0 | — | — |
| 2029 | — | \$133,259 | \$0 | \$0 | — | — |
| 2030 | 26.5 | \$137,559 | \$3,771 | \$3,771 | — | — |
| 2031 | 25.5 | \$141,793 | \$8,081 | \$8,068 | — | — |
| 2032 | 24.6 | \$145,955 | \$12,970 | \$12,928 | — | — |
| 2033 | 23.7 | \$150,013 | \$18,497 | \$18,406 | — | — |
| 2034 | 22.9 | \$153,964 | \$24,705 | \$24,543 | — | — |
| 2035 | 22.0 | \$157,743 | \$31,683 | \$31,424 | — | — |
| 2036 | 21.1 | \$161,309 | \$39,507 | \$39,121 | — | — |
| 2037 | 20.2 | \$164,615 | \$48,262 | \$47,712 | — | — |
| 2038 | 19.4 | \$167,652 | \$58,004 | \$57,248 | — | — |
| 2039 | 18.5 | \$170,326 | \$68,862 | \$67,852 | — | — |
| 2040 | 17.7 | \$172,626 | \$80,899 | \$79,581 | — | — |
| 2041 | 16.8 | \$174,434 | \$94,268 | \$92,580 | — | — |
| 2042 | 16.0 | \$175,742 | \$109,044 | \$106,913 | — | — |
| 2043 | 15.2 | \$176,482 | \$125,348 | \$122,695 | — | — |
| 2044 | 14.4 | \$176,580 | \$143,315 | \$140,046 | — | — |
| 2045 | 13.7 | \$176,052 | \$163,013 | \$159,025 | — | — |
| 2046 | 12.9 | \$174,728 | \$184,660 | \$179,836 | — | — |
| 2047 | 12.2 | \$172,637 | \$208,328 | \$202,537 | — | — |
| 2048 | 11.5 | \$169,710 | \$234,170 | \$227,264 | — | — |
| 2049 | 10.8 | \$165,876 | \$262,347 | \$254,163 | — | — |
| 2050 | — | \$153,870 | \$243,359 | \$235,461 | \$1,748 | \$345 |
| 2051 | — | \$141,024 | \$223,042 | \$215,515 | \$1,748 | \$322 |
| 2052 | — | \$127,279 | \$201,302 | \$194,243 | \$1,748 | \$301 |
| 2053 | — | \$112,571 | \$178,041 | \$171,556 | \$1,748 | \$281 |
| 2054 | — | \$96,834 | \$153,152 | \$147,361 | \$1,748 | \$263 |
| 2055 | — | \$79,996 | \$126,520 | \$121,557 | \$1,748 | \$246 |
| 2056 | — | \$61,978 | \$98,024 | \$94,036 | \$1,748 | \$230 |
| 2057 | — | \$42,700 | \$67,534 | \$64,686 | \$1,748 | \$215 |
| 2058 | — | \$22,072 | \$34,909 | \$33,384 | \$1,748 | \$201 |
| 2059 | — | \$0 | \$0 | \$0 | \$1,748 | \$187 |
| **Total** | | | | | **\$17,484** | **\$2,591** |

**Replication.** Divisors $\varepsilon_t$ are IRS Uniform Lifetime Table values for the owner's age (69 in 2026; RMDs begin at 73 in 2030; none apply in the beneficiary period, which is a 10-year annuity). Two years illustrate the Appendix B.2 recursions:

*2030 — age 73.* Avoided RMD: \$133,259 / 26.5 = \$5,028. Principal: \$133,259 × 1.07 − \$5,028 = \$137,559. Reinvested: \$5,028 × $\rho$ = \$3,771 into each leg — equal in the arrival year, since prior balances compound at 1.07 ($r$) and 1.0665 ($\tilde r$) *before* the new deposit is added. (2031: 3,771 × 1.07 + 4,046 = \$8,081 vs. 3,771 × 1.0665 + 4,046 = \$8,068.)

*2050 — first beneficiary year.* $D^{S}$ = \$262,347 × af(7%, 10) = \$262,347 × 0.142376 = \$37,340; $D^{U}$ = \$254,163 × af(6.65%, 10) = \$254,163 × 0.140086 = \$35,595; gap = \$1,748, constant across 2050–2059.

D.2's Phase-1 distributions apply the same $\varepsilon_t$ to each parallel balance.

### D.2 SRC alpha

**SRC Roth/Tax-Drag** are the two parallel balances holding $K$ (Appendix B.1's $B^S_t, B^U_t$): both start at $K$ = \$17,966 in 2026, compound at $r$ (sheltered) vs. $\tilde r$ (taxable), and distribute under RMD (2030 onward, once age 73 is reached) then the beneficiary 10-year annuity (2050–2059).

| Year | $\varepsilon_t$ | SRC Roth Bal | SRC Tax-Drag Bal | SRC drag (nominal) | SRC drag PV |
|-------|------:|----------------:|------------------:|---------------:|-----------:|
| 2026 | — | \$17,966 | \$17,966 | — | — |
| 2027 | — | \$19,224 | \$19,161 | — | — |
| 2028 | — | \$20,569 | \$20,435 | — | — |
| 2029 | — | \$22,008 | \$21,795 | — | — |
| 2030 | 26.5 | \$22,720 | \$22,422 | \$8 | \$6 |
| 2031 | 25.5 | \$23,419 | \$23,032 | \$12 | \$8 |
| 2032 | 24.6 | \$24,107 | \$23,627 | \$16 | \$10 |
| 2033 | 23.7 | \$24,777 | \$24,202 | \$20 | \$13 |
| 2034 | 22.9 | \$25,429 | \$24,755 | \$25 | \$15 |
| 2035 | 22.0 | \$26,052 | \$25,276 | \$31 | \$17 |
| 2036 | 21.1 | \$26,642 | \$25,758 | \$37 | \$19 |
| 2037 | 20.2 | \$27,188 | \$26,196 | \$44 | \$21 |
| 2038 | 19.4 | \$27,689 | \$26,588 | \$51 | \$23 |
| 2039 | 18.5 | \$28,131 | \$26,918 | \$60 | \$25 |
| 2040 | 17.7 | \$28,510 | \$27,188 | \$68 | \$27 |
| 2041 | 16.8 | \$28,810 | \$27,378 | \$79 | \$29 |
| 2042 | 16.0 | \$29,026 | \$27,488 | \$89 | \$30 |
| 2043 | 15.2 | \$29,148 | \$27,508 | \$101 | \$32 |
| 2044 | 14.4 | \$29,164 | \$27,427 | \$114 | \$34 |
| 2045 | 13.7 | \$29,076 | \$27,247 | \$127 | \$35 |
| 2046 | 12.9 | \$28,859 | \$26,947 | \$142 | \$37 |
| 2047 | 12.2 | \$28,512 | \$26,530 | \$157 | \$38 |
| 2048 | 11.5 | \$28,029 | \$25,988 | \$172 | \$39 |
| 2049 | 10.8 | \$27,396 | \$25,311 | \$189 | \$40 |
| 2050 | — | \$25,413 | \$23,447 | \$355 | \$70 |
| 2051 | — | \$23,291 | \$21,462 | \$355 | \$65 |
| 2052 | — | \$21,022 | \$19,344 | \$355 | \$61 |
| 2053 | — | \$18,593 | \$17,084 | \$355 | \$57 |
| 2054 | — | \$15,993 | \$14,675 | \$355 | \$53 |
| 2055 | — | \$13,212 | \$12,105 | \$355 | \$50 |
| 2056 | — | \$10,237 | \$9,364 | \$355 | \$47 |
| 2057 | — | \$7,052 | \$6,441 | \$355 | \$44 |
| 2058 | — | \$3,645 | \$3,324 | \$355 | \$41 |
| 2059 | — | \$0 | \$0 | \$355 | \$38 |
| **Total** | | | | **\$5,092** | **\$1,021** |

Both alphas accumulate internally before realizing as cash flows: the SRC $K$ balance compounds at sheltered vs. taxable rates during gap years 2026–2029, and the avoided-RMD dollars compound in two parallel reinvestment balances throughout owner life (2026–2049, zero-valued until age 73 in 2030). SRC realization begins in 2030 with owner-life RMDs and continues through the beneficiary 10-year annuity (2050–2059); RMD-reduction's full accumulated drag is realized only during the beneficiary period (2050–2059). PV totals reconcile to the §5 figures.

---

## References

Bergstresser, D., & Poterba, J. (2002, March). Do after-tax returns affect mutual fund inflows? *Journal of Financial Economics*, 63(3), 381–414. https://www.nber.org/papers/w7595

Brown, J. R., Poterba, J. M., & Richardson, D. P. (2017). Do required minimum distribution rules matter? The effect of the 2009 holiday on retirement plan distributions. *Journal of Public Economics*, 151, 96–109.

Cheshire, S. M. (2026). *The Synthetic Roth Contribution: Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions*. Working paper, SSRN. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6772118

Kitces, M. (2021, August 25). *Limits of tax diversification and the tax alpha of Roth optimization*. Kitces.com. https://www.kitces.com/blog/tax-diversification-roth-optimization-conversion-tax-alpha/

McQuarrie, E. F., & DiLellio, J. A. (2023). The arithmetic of Roth conversions. *Journal of Financial Planning*, 36(5), 72–89. https://www.financialplanningassociation.org/learning/publications/journal/MAY23-arithmetic-roth-conversions-OPEN

Murray, C. (2022, March 30). *The "yield-split" method of asset location to improve tax efficiency of index funds*. Kitces.com. https://www.kitces.com/blog/yield-split-asset-location-tax-drag-alpha-efficiency-index-funds/

Passman, J., Wong, B., & Dickson, J. (2025, July). *A BETR Approach to Roth Conversions*. Vanguard Research. https://corporate.vanguard.com/content/dam/corp/research/pdf/a_betr_approach_to_roth_conversions_072025.pdf

Piper, M. (n.d.). The 4 effects of a Roth conversion. Oblivious Investor. https://obliviousinvestor.com/the-4-effects-of-a-roth-conversion/ (and related Bogleheads video, *Prepay Taxes with Roth Conversions?*).

Reichenstein, W., & Meyer, W. (2017, November). Valuing Roth conversion and recharacterization options. *Journal of Financial Planning*, 30(11), 48–56. https://www.financialplanningassociation.org/sites/default/files/2021-08/NOV17%20Reichenstein.pdf

Shoven, J. B., & Sialm, C. (2003). Asset location in tax-deferred and conventional savings accounts. *Journal of Public Economics*, 88, 23–38. https://doi.org/10.1016/S0047-2727(02)00083-X

Sialm, C., & Zhang, H. (2020, April). Tax-efficient asset management: Evidence from equity mutual funds. *Journal of Finance*, 75(2), 735–777. https://doi.org/10.1111/jofi.12843 (working paper: https://ssrn.com/abstract=2368625)

Van Deusen, A., & Kitces, M. (2022, June 22). *Leveraging Tax Advantages of Roth Conversion in Bear Markets*. Kitces.com. https://www.kitces.com/blog/roth-conversion-bear-market-downturn-tax-savings-cost-conversion-averaging-isolate-ira-basis/
