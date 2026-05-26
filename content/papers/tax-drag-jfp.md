# Tax-Drag Shelter: A Newly Isolated Component of Roth-Conversion Value

**PV Decomposition of the Two Manifestations and Their Contribution to the Conversion IRR**

**Working paper**
**Date:** 2026-05-25

---

## 1. Concept

**Tax-Drag Shelter (TDS)** is the present-value gap between holding investments inside vs. outside a tax-advantaged wrapper. Inside, investments grow unencumbered by taxes; outside, the same dollars pay annual tax on dividends, interest, realized capital gains, and turnover-driven distributions — a drag that compounds materially over time.

A Roth conversion produces two distinct TDS alphas, corresponding to the two decisions a household makes: **RMD-reduction alpha** from the Convert decision, and **SRC alpha** from the Outside-settlement decision. Each has its own cause, principal, and PV; the household-facing total is their sum.

1. **Convert decision (primary): RMD-reduction alpha.** Converting a principal of $C$ shrinks the Traditional balance and reduces future RMDs. For retirees not consuming the full RMD, the avoided dollars stay sheltered instead of being reinvested taxably. **RMD-reduction alpha** is the PV of that sheltering. It scales with $C$ and is realized under both Inside and Outside payment.

2. **Outside-settlement decision (secondary): SRC alpha.** Paying the conversion tax $K = \tau_C \cdot C$ from outside the retirement account migrates $K$ after-tax dollars from a taxable wrapper into the Roth. These migrated dollars are the **Synthetic Roth Contribution** (SRC; Cheshire 2026) — structurally identical to a statutory Roth contribution under Wrapper Migration Neutrality (Cheshire 2026, §3.5). **SRC alpha** is the PV of $K$ compounding tax-free in the Roth rather than in a taxable counterfactual — the drag-avoidance portion of what Piper (2020) calls the "Hidden Contribution" effect. It scales with $K$ and is realized only under Outside payment.

In the §5 worked example, RMD-reduction alpha PV is \$2,522 versus SRC alpha PV \$1,021 — RMD-reduction is 2.47× larger. The asymmetry is structural: RMD-reduction alpha runs on principal $(1-\tau_C)\cdot C$ scaled by reinvestment share, while SRC alpha runs on principal $K = \tau_C \cdot C$.

This paper contributes (a) **PV identification** for both alphas as named line items, each reducing to a per-dollar simulator output multiplied by the relevant principal, and (b) identification of the per-year, drag-attributable cash-flow streams that each alpha contributes to the conversion's **internal rate of return (IRR)**. Both outputs are surfaced in the deployed reference implementation (RothGPT conversion calculator).

**Scope.** Statutory contributions are the dominant channel through which households realize TDS value over a lifetime. This paper analyzes the Roth conversion specifically because conversions produce two structurally distinct alphas within the TDS framework that the published literature has not isolated separately. Other Roth-conversion value channels — Medicare/IRMAA savings, Social Security tax-torpedo effects, estate-planning advantages — are out of scope here.

---

## 2. The Drag-Shelter Multiplier

### 2.1 Notation

- $r$ — pre-tax asset return (illustrative: 7%)
- $d$ — annual tax drag fraction on the same return when held taxably (planner-input assumption; illustrative value 5% of return)
- $\tilde{r} = r \cdot (1 - d)$ — after-drag growth rate on a taxable balance (illustrative: 6.65%)
- $C$ — converted principal
- $\tau_C$ — effective marginal rate on the conversion
- $K = \tau_C \cdot C$ — conversion tax paid
- $\rho \in [0,1]$ — reinvestment-share assumption (fraction of avoided RMDs that would have been reinvested rather than spent)

### 2.2 The drag-shelter multiplier

The drag-shelter value for a distributing balance is computed by simulating two parallel accounts holding the same starting principal under the same distribution schedule: a **sheltered** account compounding at $r$, and a **taxable counterfactual** compounding at $\tilde{r}$. Per year $t$, the per-dollar distribution differential is $\Delta(t) = D^{S}(t) - D^{B}(t)$. The aggregated per-dollar present-value multiplier is

$$
\mu_{P} \;=\; \sum_{t} \frac{\Delta(t)}{(1+r)^{t}},
$$

with a parallel future-value multiplier $\mu_F = \sum_t \Delta(t)$. The present value of sheltering a principal of $P$ dollars on a given distribution schedule is then $\alpha^{PV}(P) = P \cdot \mu_P$. The formal identity, with proof sketch, appears in Appendix A. The multipliers $\mu_P$ and $\mu_F$ come from a parallel-account simulator (Appendix B; reference implementation in RothGPT). The lump-sum case — a single year-$T$ distribution producing $\mu_P = 1 - ((1+\tilde{r})/(1+r))^T$ — is the special case for a one-shot distribution; RMD schedules produce smaller per-year differentials over more years; fixed-annuity schedules sit in between.

The two TDS alphas in §3 differ only in the principal $P$ being sheltered and the schedule that drives $\mu_P$.

---

## 3. The Two Alphas

A Roth conversion produces two distinct alphas within the TDS framework. We present them in decision order: RMD-reduction alpha first (unlocked by the Convert decision; the larger of the two) and SRC alpha second (unlocked by the Outside-settlement decision).

### 3.1 RMD-reduction alpha — produced by the conversion event

Only a conversion shrinks the Traditional balance, and only a conversion thereby reduces the RMD stream the household is forced to draw. Pre-conversion, those larger RMDs would have flowed out of the shelter and — for retirees with surplus wealth not consuming the full RMD — been reinvested taxably, suffering annual drag thereafter. Post-conversion, the avoided RMD dollars stay sheltered until eventually distributed via the now-smaller RMDs.

The principal whose RMD draw is avoided is the after-tax converted balance scaled by reinvestment share, $P = (1-\tau_C)\cdot C \cdot \rho$. Applying the multiplier under the avoided-RMD schedule produces the RMD multiplier and

$$
\alpha_{RMD}^{PV} \;=\; (1 - \tau_C) \cdot C \cdot \rho \cdot \mu_{P}^{RMD}.
$$

The corresponding per-year stream $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ enters the conversion IRR's cash-flow vector. RMD-reduction alpha PV is defined under **both Inside and Outside payment** of the conversion tax — the benefit depends on the converted principal $C$, not on how the tax is paid. The IRR contribution itself is meaningful only when the conversion IRR is defined (Outside payment).

Typical $\rho$ ranges: $\approx 0.50\text{--}0.75$ for retirees subject to mandatory RMD-driven decumulation; $\rho \to 0$ for retirees consuming the full RMD; $\rho \to 1$ for retirees with surplus wealth and no spending need. The deployed reference implementation defaults $\rho$ to 0.75 when the distribution method is RMD and 0.20 when the distribution method is fixed-annuity (the FA case being more consumption-oriented and therefore producing a smaller surplus available for reinvestment).

**Timing of the $\Delta_{RMD}(t)$ stream.** The per-year RMD-reduction differential is zero during the owner's remaining life and non-zero only during the terminal beneficiary distribution period. Mechanically, the avoided RMD dollars accumulate inside two parallel reinvestment balances over the owner's life — one compounding at $r$ (sheltered counterfactual), one at $\tilde{r}$ (taxable counterfactual). Those balances then distribute as a fixed-period (10-year) annuity to the beneficiary, and the drag-avoidance benefit is realized year-by-year as the differential between the two annuity streams. PV and FV totals capture the full owner-life drag through the accumulated balance differential; the cash-flow stream that feeds the conversion IRR reflects benefit realization at distribution, not at accrual.

### 3.2 SRC alpha — produced by the Outside-settlement choice

When the conversion tax $K$ is paid from outside the retirement account, the post-conversion Roth principal is the full $C$ rather than $C - K$. The $K$ dollars that migrate from the taxable wrapper into the Roth compound tax-free thereafter, *identically to a statutory Roth contribution of $K$* made in the same year. We refer to the implicit $K$ dollars inside the Roth as the **Synthetic Roth Contribution**; the formal equivalence proof — same after-tax distribution stream, same wrapper, same tax treatment — is established in Cheshire (2026), "The Synthetic Roth Contribution: Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions," SSRN #6772118.

By **Wrapper Migration Neutrality** (Cheshire 2026, §3.5), the Outside-payment decision is economically identical to a statutory Roth contribution decision: both move $K$ after-tax dollars from a taxable wrapper into a Roth wrapper at no current-wealth cost. SRC alpha is the drag-avoidance value of that wrapper migration — a benefit available wherever such migration is feasible, not a conversion-specific phenomenon.

Applying the multiplier with $P = K$ on the post-conversion Roth distribution schedule:

$$
\alpha_{SRC}^{PV} \;=\; K \cdot \mu_{P}^{SRC}.
$$

The corresponding per-year stream $K \cdot \Delta_{SRC}(t)$ enters the conversion IRR's cash-flow vector as the SRC channel's drag-avoidance contribution; it is non-zero only under Outside payment of the conversion tax. Under Inside payment, no wrapper migration occurs — $K$ is withheld from the converted balance, no dollar moves between wrappers, and $\alpha_{SRC} = 0$.

**SRC alpha within total SRC value.** The SRC itself has a total wealth value — the full migration value of $K$ dollars moved from the taxable wrapper into the Roth — quantified separately in Cheshire (2026). That total SRC value decomposes economically into a *bank-counterfactual growth* component ($K \cdot B(T)$, what $K$ would have earned in a taxable wrapper compounding at $\tilde{r}$, which the conversion-tax dollar produces regardless of the conversion choice) and a *drag-avoidance alpha* component ($K \cdot (S(T) - B(T))$, which exists only because the dollar is now in the Roth). **SRC alpha is the drag-avoidance component.** The PV reported above is the future-value differential between the two counterfactuals, discounted to today at $r$ — alpha against the realistic dragged-taxable counterfactual, not a free-standing benefit.

**Timing of the $\Delta_{SRC}(t)$ stream.** The SRC stream has the *opposite timing profile* from RMD-reduction alpha. Because the post-conversion Roth holds $K$ extra principal under Outside payment, the Roth produces year-by-year RMDs that are $K/\varepsilon_t$ larger than the no-conversion counterfactual every year of the owner's remaining life. The per-year SRC differential $\Delta_{SRC}(t)$ is therefore **non-zero during the owner's life** — realized as the difference between those larger RMDs and what the same $K$ would have produced if it had remained in the taxable wrapper compounding at $\tilde{r}$ and distributed on the same schedule. The residual balance distributes via the 10-year beneficiary period. PV and FV totals capture both segments; the cash-flow stream that feeds the conversion IRR reflects benefit realization at distribution, year-by-year throughout the owner's life and the beneficiary period.

The hidden-contribution effect is well-known qualitatively (Piper, "The 4 Effects of a Roth Conversion," effect #2; Kitces; Vanguard BETR). What is new is the isolation of the *drag-avoidance* portion of that effect: the conventional Hidden Contribution figure $K \cdot S(T)$ implicitly assumes a zero-growth counterfactual, folding bank-counterfactual growth and drag-avoidance into a single number; the realistic $\tilde{r}$ counterfactual is what isolates the drag-avoidance alpha cleanly.

---

## 4. Joint PV and the Conversion IRR

Under Outside payment, the joint TDS PV is additive:

$$
\alpha_{TDS}^{PV} \;=\; \alpha_{SRC}^{PV} \;+\; \alpha_{RMD}^{PV}.
$$

The combined per-year drag-attributable cash-flow stream $K \cdot \Delta_{SRC}(t) + (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ enters the conversion's full incremental cash-flow vector. The conversion IRR is the rate solving $\sum_t CF(t)/(1+i)^t = 0$ on that full vector; the drag-attributable streams enter as additive contributions, and identifying *which* streams come from drag avoidance (rather than rate arbitrage) is the attribution exercise that lets a planner say *this much* of the conversion IRR is delivered by drag avoidance. Under Inside payment, $K = 0$ as a user outlay and the conversion IRR is undefined (the deployed implementation returns a sentinel value); the RMD-reduction PV remains meaningful.

---

## 5. Worked Example

Stylized 22%-bracket Roth conversion.

**Inputs.**

| Parameter | Symbol | Value |
|---|---|---|
| Pre-tax return | $r$ | 7% |
| Drag fraction | $d$ | 5% ($\tilde{r}$ = 6.65%) |
| Conversion principal | $C$ | \$123,850 |
| Conversion-year marginal rate | $\tau_C$ | 22% (effective) |
| Conversion tax | $K = \tau_C \cdot C$ | \$17,966 |
| Distribution method | RMD-only, age 73 onset | |
| Owner remaining horizon | 17 years | |
| Beneficiary terminal period | 10 years | |
| Reinvestment-share | $\rho$ | 0.75 |
| Gap years | 13 | |

**Per-dollar multipliers** (output of Appendix B):

| | $\mu_P$ | $\mu_F$ |
|---|---|---|
| RMD multiplier (avoided-RMD schedule) | 0.0238 | 0.1607 |
| SRC multiplier (Roth distribution schedule) | 0.0568 | 0.2834 |

**The two alphas — Outside vs. Inside payment:**

| Component | Outside payment | Inside payment |
|---|---|---|
| RMD-reduction alpha PV | \$2,522 | \$2,522 (unchanged) |
| SRC alpha PV | \$1,021 | \$0 |
| **TDS total PV** | **\$3,543** | **\$2,522** |
| RMD-reduction alpha FV | \$17,019 | \$17,019 |
| SRC alpha FV | \$5,092 | \$0 |
| Conversion IRR | computed (includes drag streams) | undefined ($K = 0$ outlay) |

**Planner-facing interpretation.** The asymmetry is visible at a glance. The Convert decision delivers \$2,522 of RMD-reduction alpha PV regardless of how the conversion tax is settled. The Outside-settlement decision adds a further \$1,021 of SRC alpha PV — the same kind of benefit a statutory Roth contribution of $K$ would earn. The Inside-payment column makes the structural separation concrete: RMD-reduction alpha is genuinely new value created only by the conversion event, while SRC alpha is the conversion-channel route to value that statutory contributions also earn. Total TDS value to the household is \$3,543 today (Outside) or \$2,522 today (Inside), with the FV figures showing the same asymmetry carried out to horizon.

---

## 6. Literature Review

Published treatment of tax drag as a quantified, named PV line item in the Roth-conversion setting — with the corresponding cash-flow contribution to the conversion IRR made explicit — is sparse. The six entries below map the existing treatments against the present specification and locate the gap.

### 6.1 Closest predecessors

**McQuarrie & DiLellio (2023), "The Arithmetic of Roth Conversions,"** *Journal of Financial Planning* (May 2023). Closest academic engagement with tax drag in the Roth-conversion context. Equation 4 and Tables 4–5 construct a single-counterfactual comparison: after-tax RMDs from the no-conversion TDA are reinvested in a taxable side-account compounding at $\tilde{r} = r(1-d)$, with the Roth on the other side compounding at $r$. Under matched tax rates ($\tau_C = \tau_D$), the "Roth gain" column is pure tax-drag alpha; M&D state that *"tax drag compounds"* and that drag alpha at constant rates exceeds the gain from a 1pp positive rate movement by age 85. This is structurally the same drag-avoidance mechanism the present paper isolates as RMD-reduction alpha, with four differences:

(i) M&D apply the mechanism to the **full** after-tax RMD stream from the no-conversion counterfactual; the present framework applies it to the **differential** between the pre-conversion and post-conversion RMD streams.

(ii) M&D implicitly fix the reinvestment share at $\rho = 1$; the present framework treats $\rho$ as a planner-input assumption (deployed defaults: 0.75 for RMD, 0.20 for FA).

(iii) M&D report a breakeven age in years; the present framework reports a separately priced PV (and FV) line item with an attributable per-year cash-flow stream that feeds the conversion IRR.

(iv) M&D's construction has no terminal distribution — both the Roth and the taxable side-account compound perpetually — so the drag advantage grows without bound. Under SECURE-Act 10-year beneficiary depletion, the drag-vs-shelter differential is bounded by the finite distribution schedule (owner remaining life plus the 10-year beneficiary period); the present framework integrates over that finite schedule, so PV and FV are bounded by construction.

Beyond these four structural differences, M&D's breakeven-age construct is itself analytically constrained. It assumes rate-effect alpha is well-summarized by a single scalar; but in realistic settings rate alpha is path-dependent — Social Security taxation tiers, IRMAA cliffs, filing-status changes, and time-varying state tax exposure all vary over the distribution horizon — so a single year of "breakeven" is not well-defined. A PV decomposition of each alpha is the more robust comparison primitive, a point implicit in but not central to the present paper's drag-decomposition contribution.

**Mike Piper, "The 4 Effects of a Roth Conversion"** [https://obliviousinvestor.com/the-4-effects-of-a-roth-conversion/]. Closest practitioner article to the two-alpha structure. Piper names effect #2 ("use taxable dollars to pay the tax" — qualitative HC) and effect #3 ("reduces your later RMDs" — qualitative RMD-reduction analog), but does not quantify either as drag avoidance at $\tilde{r}$ or produce PV/IRR figures.

### 6.2 Reference frames

**Michael Kitces (kitces.com).** The most granular practitioner treatment of Roth-conversion math, the asset-location yield-split [https://www.kitces.com/blog/yield-split-asset-location-tax-drag-alpha-efficiency-index-funds/], and tax-diversification [https://www.kitces.com/blog/tax-diversification-roth-optimization-conversion-tax-alpha/]. Identifies the outside-paid-tax benefit qualitatively but does not decompose growth on the conv-tax dollar into rate-arbitrage and drag-avoidance components or produce an IRR for the drag-avoidance portion alone.

**Vanguard BETR (Break-Even Tax Rate) calculator** [https://investor.vanguard.com/investor-resources-education/news/a-betr-calculation-for-the-traditional-to-roth-ira-conversion-equation]. States *"the more tax-inefficient the account used to pay the conversion tax, the lower the BETR (and the greater the benefit of converting)."* Directional acknowledgment; no public formula isolates the conv-tax dollar's $r(1-d)$ counterfactual as a separate PV or IRR line item.

**Reichenstein (2007), "Calculating After-Tax Asset Allocation Is Key to Determining Risk, Returns, and Asset Location,"** *Journal of Financial Planning* (July 2007). Foundational after-tax-allocation framework and the closest conceptual ancestor of the present work. Treats the IRA benefit as a single tax-exemption-on-inside-buildup term; does not decompose into drag-avoidance and rate-arbitrage components and does not produce an IRR for drag avoidance specifically.

**Morningstar Tax-Cost Ratio** [https://admainnew.morningstar.com/directhelp/Glossary/Performance/Tax_Cost_Ratio.htm]. Defined as $T_i = 1 - (1+\mathrm{ATR}_i)/(1+L_i)$. Captures fund-level annual drag; conceptually the empirical anchor for the drag fraction $d$.

### 6.3 Summary of the gap

| Element | Status in published literature |
|---|---|
| RMD-reduction alpha — PV figure | Not isolated as a household-facing PV line item. Partially anticipated by McQuarrie & DiLellio as a robustness argument. |
| SRC alpha — PV figure | Not isolated. Conventional Hidden Contribution math uses $K \cdot S(T)$, implicitly assuming a zero-growth bank counterfactual. |
| Drag-attributable cash-flow streams as components of the conversion IRR | Not present in verified sources. |
| Combined TDS PV decomposition plus conversion-IRR contribution | Not present in verified sources. |

---

## 7. Novelty Claim

The intuition that retirement accounts shelter dollars from annual yield drag is universally acknowledged. The contribution here is methodological.

1. **PV identification of two distinct alphas, organized as a decision hierarchy.** RMD-reduction alpha (unlocked by the Convert decision; the larger of the two) and SRC alpha (unlocked by the Outside-settlement decision) are each expressed as $P \cdot \mu_P$ for the relevant principal. The decision-hierarchy framing — RMD-reduction alpha first, SRC alpha second — clarifies what each planner decision actually buys and makes the Inside-vs-Outside contrast immediate. Neither expression appears in the verified literature as a household-facing PV line item.

2. **Drag-attributable cash-flow streams identified within the conversion IRR.** The drag-attributable streams $K \cdot \Delta_{SRC}(t)$ and $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ enter the conversion's full incremental cash-flow vector. *The contribution is not the use of IRR itself, but the attribution of specific incremental cash-flow streams to drag avoidance within the conversion IRR framework.* Incorporating them materially changes the deployed conversion IRR. No separate per-component IRRs are introduced — those would describe counterfactual investments the household never faces.

3. **Correcting the implicit zero-growth bank counterfactual.** The conventional Hidden Contribution figure $K \cdot S(T)$ implicitly assumes the conv-tax dollar would have done nothing in the no-conversion counterfactual. The realistic counterfactual is taxable-bank growth at $\tilde{r}$; the TDS framing extracts only the *difference* $K \cdot (S(T) - B(T))$ as drag-avoidance value, leaving the bank-growth portion $K \cdot B(T)$ correctly attributed to the conv-tax dollar irrespective of conversion.

The novelty claim is about isolation and quantification, not about discovery of the underlying intuition. Multiple primary PDFs (Vanguard BETR full paper, McQuarrie/DiLellio full JFP article, Reichenstein FPA papers) returned encoded content the literature scan could not parse fully; characterization relies on published abstracts, summaries, and secondary discussion.

---

## 8. Open Items and Extensions

- **Sensitivity to $\rho$.** RMD-reduction alpha PV scales linearly in $\rho$. Realistic ranges: 0.50–1.00 for surplus-wealth retirees; $\rho \approx 0$ for retirees consuming the full RMD.
- **Empirical calibration of $d$.** Illustrative $d = 5\%$ is a rough middle-of-the-road estimate for a balanced taxable portfolio. A richer specification would derive $d$ per asset class, per holding horizon, and per user marginal rate. Morningstar's Tax-Cost Ratio offers a per-fund empirical anchor.
- **State income tax.** Not included. State tax on dividends and capital gains (typically 3–10% additional) would widen TDS value for high-tax-state residents.
- **Capital-gains deferral effect.** A more granular framework would separate dividend/interest drag (annual, captured here) from realized-capital-gains drag (turnover-dependent, not captured here).
- **Implementation reference.** A full reference implementation — per-dollar drag-shelter simulator, PV identification of both alphas, and the drag-attributable cash-flow streams feeding the conversion IRR — is deployed in the RothGPT conversion calculator.

---

## Appendix A. Proposition 1 — The Drag-Avoidance Value Identity

**Proposition 1.** Let a principal of $P$ dollars be deployed at time $0$ into either a sheltered wrapper (compounding at $r$) or a taxable wrapper (compounding at $\tilde{r}$), and distributed thereafter on an identical schedule $\{D^{S}(t), D^{B}(t)\}$. The incremental present value of choosing the sheltered wrapper, discounted at $r$, is

$$
\alpha^{PV}(P) \;=\; P \cdot \mu_{P} \;=\; P \cdot \sum_{t} \frac{D^{S}(t) - D^{B}(t)}{(1+r)^{t}}.
$$

**Assumptions.** (i) Identical pre-tax return path inside and outside the wrapper. (ii) Identical distribution method and schedule. (iii) Principal enters at time 0; distributions follow per the schedule. (iv) No additional rate effects (no contribution-year vs. distribution-year arbitrage layered onto the same dollar).

**Proof sketch.** Per-dollar, the sheltered balance evolves as $B^{S}_t = B^{S}_{t-1}(1+r) - D^{S}(t)$ and the taxable counterfactual as $B^{B}_t = B^{B}_{t-1}(1+\tilde{r}) - D^{B}(t)$, with $B^{S}_0 = B^{B}_0 = 1$. The household receives the distribution stream and discounts it at $r$; the wrapper choice does not change time-zero outlays. The incremental PV per dollar is therefore $\sum_t (D^{S}(t) - D^{B}(t)) / (1+r)^t = \mu_P$. Scaling linearly to $P$ dollars yields the stated identity. $\square$

**Comment.** Proposition 1 reduces the household-facing valuation question to: *what principal is being sheltered, and what is the discounted distribution differential per dollar?* The two alphas in §3 differ only in the principal $P$ and the schedule that drives $\mu_P$.

---

## Appendix B. Per-Dollar Drag-Shelter Simulator

**Input.** Pre-tax return $r$; drag fraction $d$; distribution method $M \in \{\mathrm{RMD},\, \mathrm{FA}\}$; horizon $T$; gap years $g$; (for RMD) age-indexed life-expectancy divisors $\varepsilon_t$.

**Output.** Per-dollar FV multiplier $\mu_F$, per-dollar PV multiplier $\mu_P$, per-year differential $\Delta(\cdot)$.

Initialize $B^{S} = 1$, $B^{B} = 1$, $\mu_F = 0$, $\mu_P = 0$, $\tilde{r} = r\cdot(1-d)$.

For each year $t = 1, \ldots, T + g$:

1. If $t \leq g$: $B^{S} \leftarrow B^{S}(1+r)$, $B^{B} \leftarrow B^{B}(1+\tilde{r})$. Continue.
2. Distributions under method $M$:
   - **RMD**: $D^{S}(t) = B^{S}/\varepsilon_t$; $D^{B}(t) = B^{B}/\varepsilon_t$.
   - **FA**: $D^{S}(t) = \mathrm{af}(r, T{-}g)\cdot B^{S}(g{+}1)$, constant; $D^{B}(t) = \mathrm{af}(\tilde{r}, T{-}g)\cdot B^{B}(g{+}1)$, constant.
3. Update: $B^{S} \leftarrow B^{S}(1+r) - D^{S}(t)$; $B^{B} \leftarrow B^{B}(1+\tilde{r}) - D^{B}(t)$.
4. $\Delta(t) = D^{S}(t) - D^{B}(t)$. $\mu_F \mathrel{+}= \Delta(t)$. $\mu_P \mathrel{+}= \Delta(t)/(1+r)^{t}$.

**Applying to each alpha.**

- **RMD-reduction alpha.** Run the simulator with $M = \mathrm{RMD}$ on the *avoided RMD principal stream* — the parallel simulation of what would have been withdrawn from the larger pre-conversion balance versus the smaller post-conversion balance, with a terminal beneficiary distribution period. Multiply $\mu_P$ and $\mu_F$ by $(1-\tau_C)\cdot C\cdot \rho$.
- **SRC alpha.** Run the simulator with $M$ = the post-conversion Roth distribution method, $g$ = gap from conversion to first Roth distribution. Multiply $\mu_P$ and $\mu_F$ by $K$ (Outside payment only).
- **Combined.** Sum PV and FV components. Both per-year streams are added into the single conversion IRR cash-flow vector.
