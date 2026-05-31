# Quantifying Tax-Drag Shelter Benefits in Roth Conversions

**RMD Reduction and Hidden Contributions**

**Working paper**
**Date:** 2026-05-29

---

## Executive Summary

- **Tax-Drag Shelter (TDS)** is the present-value gap between holding investments inside vs. outside a tax-advantaged wrapper — universally acknowledged, rarely quantified as a named line item.
- A Roth conversion produces two distinct TDS alphas: **RMD-reduction alpha** (from the Convert decision) and **SRC alpha** (from the Outside-settlement choice).
- Both alphas are special cases of a single valuation identity: the present value of the distribution gap between sheltered and taxable growth paths.
- This paper provides PV identification for both alphas and attributes the corresponding share of the conversion IRR to drag avoidance.
- **Scope.** Roth conversion only; other conversion-value channels (Medicare/IRMAA, Social Security tax-torpedo, estate-planning) are out of scope.

---

## 1. Tax-Drag Shelter

**Tax-Drag Shelter (TDS)** is the present-value gap between holding investments inside vs. outside a tax-advantaged wrapper. Inside, investments grow unencumbered by taxes; outside, the same dollars pay annual tax on dividends, interest, realized capital gains, and turnover-driven distributions — a drag that compounds materially over time.

A Roth conversion can capture this benefit in two ways, each creating positive alpha.

1. **RMD-reduction alpha (primary):**

    All conversions (Inside & Outside) reduce the Traditional account by an amount $C$, causing reduced future RMDs. RMD reductions that would have been reinvested taxably remain sheltered. **RMD-reduction alpha** is the PV of that sheltering.

2. **SRC alpha (secondary):**

    Outside-funded conversions migrate $K$ ($\tau_C \cdot C$) after-tax dollars into the Roth wrapper, a **Synthetic Roth Contribution** (SRC; Cheshire 2026). **SRC alpha** is the PV gain of $K$ compounding tax-free as it distributes vs. in the taxable counterfactual. Identical alpha accrues to a same-sized statutory Roth contribution.

---

## 2. Worked Example

Converting \$123,850 fills through the 22% bracket, with an effective tax rate of 14.5%.

**Inputs.**

| Parameter | Symbol | Value |
|---|---|---|
| Pre-tax return | $r$ | 7% |
| Tax-drag rate | $d$ | 5% |
| After-drag return | $\tilde{r} = r(1-d)$ | 6.65% |
| Conversion principal | $C$ | \$123,850 |
| Conversion-year effective rate | $\tau_C$ | 14.5% |
| Conversion tax | $K = \tau_C \cdot C$ | \$17,966 |
| Owner remaining life | | 23 years (69–92) |
| Beneficiary period | | 10 years |
| RMD reinvestment | $\rho$ | 75% |

**The two alphas — Outside- vs. Inside-funded tax payment:**

| Component | Outside payment | Inside payment |
|---|---|---|
| RMD-reduction alpha | \$2,522 | \$2,522 |
| SRC alpha | \$1,021 | \$0 |
| **TDS total** | **\$3,543** | **\$2,522** |
| Conversion IRR | 11.56% | undefined (no outlay) |

**Interpretation.** Inside & Outside-funded conversions both yield \$2,522 RMD-reduction alpha. Outside funding adds \$1,021 SRC alpha, identical to a statutory Roth contribution of $K$. RMD-reduction is 2.47× larger since it scales with $C$ rather than with $K$ ($\tau_C \cdot C$).

RMD-reduction alpha is inherent in all Roth conversions while SRC alpha is unique to Outside funding, where $K$ dollars migrate from taxable to tax-free wrapper. Outside's 11.56% IRR comprises a 7% base plus a 4.56% additional alpha from rate-arbitrage (\$13,280) + Medicare (\$1,028) + tax-drag shelter (\$3,543). Tax-drag shelter contributes 19.8% of that additional value.

---

## 3. The Drag-Shelter Valuation Identity

Both alphas in §4 come from the same calculation: run two parallel accounts on a common distribution schedule — one sheltered at $r$, one taxable at $\tilde{r}$. The present value of the yearly distribution gap is the alpha per dollar.

For a given principal $P$ and distribution schedule, the **drag-shelter multiplier** $\mu_P$ is the per-dollar PV of the yearly sheltered-vs-taxable gap (derivation in Appendix A; simulator in Appendix B). The PV of sheltering $P$ dollars is

$$
\alpha \;=\; P \cdot \mu_{P}.
$$

§4 specializes the calculation twice. SRC alpha applies it to principal $K$, distributed on the planner's chosen schedule across owner life and the 10-year beneficiary annuity. RMD-reduction alpha applies it to avoided-RMD dollars that accumulate during owner life, then distribute over the 10-year beneficiary annuity only.

---

## 4. The Two TDS Alphas

### 4.1 SRC alpha — Outside-funded conversions only

Specializing §3 with $P = K$,

$$
\alpha_{SRC} \;=\; K \cdot \mu_{SRC}.
$$

**Two-stage construction (RMD distribution).** Phase 1 (owner-life): per-dollar $K$ compounds in two parallel balances — sheltered at $r$, taxable at $\tilde{r}$ — and distributes each year via the RMD divisor. The yearly sheltered-vs-taxable distribution gap accrues as alpha. Phase 2 (beneficiary period): the residual distributes as a 10-year fixed annuity; the same gap mechanic continues. Appendix B.2 gives the per-dollar simulator. (Under FA distribution, Phase 1 is itself a fixed annuity across owner life — no separate Phase 2.)

**Inside payment.** No wrapper migration occurs, so $\alpha_{SRC} = 0$.

SRC alpha is the drag-avoidance component of total SRC value; Appendix A.1 splits it from the taxable-side growth term.

### 4.2 RMD-reduction alpha — all conversions

The principal being sheltered is the after-tax converted balance scaled by the reinvestment share, $P = (1-\tau_C) \cdot C \cdot \rho$ — the lump-sum equivalent of the stream of avoided future RMDs accumulating year by year. Specializing §3 on the avoided-RMD schedule,

$$
\alpha_{RMD} \;=\; (1-\tau_C) \cdot C \cdot \rho \cdot \mu_{RMD}.
$$

**Two-stage construction.** Phase 1 (owner-life): each year's avoided RMD enters two parallel balances — sheltered at $r$, taxable at $\tilde{r}$. Nothing distributes; the owner-life drag accumulates in the balance gap. Phase 2 (beneficiary period): under the SECURE-Act 10-year mandate, both balances distribute as a 10-year fixed annuity, and the yearly sheltered-vs-taxable gap delivers the alpha. Phase 2 is identical in structure to SRC alpha's Phase 2.

**Applicability.** Both Inside and Outside payment unlock this alpha; it depends on the converted principal $C$, not on how the tax is settled.

### 4.3 Total TDS alpha

Under Outside payment,

$$
\alpha_{TDS} \;=\; \alpha_{SRC} \;+\; \alpha_{RMD}.
$$

Under Inside payment, $\alpha_{TDS} = \alpha_{RMD}$ since no wrapper migration occurs and $\alpha_{SRC} = 0$.

Both alphas also feed the conversion's IRR through yearly drag-related cash flows — the SRC flow over owner-life and beneficiary distributions, the RMD-reduction flow over the beneficiary period — so a planner can attribute a quantified share of the deployed IRR to drag avoidance. Appendix C gives the per-year definitions. Under Inside payment (no user outlay) the conversion IRR is undefined and the RMD-reduction PV stands alone.

---

## 5. Literature Review

Published treatment of tax drag as a quantified, named PV line item in the Roth-conversion setting is sparse. Four entries locate the gap.

**McQuarrie & DiLellio (2023), "The Arithmetic of Roth Conversions,"** *Journal of Financial Planning*. The closest academic engagement: Equation 4 and Tables 4–5 construct a single-counterfactual reinvestment of after-tax RMDs at $r(1-d)$ against a Roth compounding at $r$, and observe that *"tax drag compounds."* This is the same mechanism the present paper isolates as RMD-reduction alpha, but stated as a breakeven-age scalar rather than a separately priced PV with an attributable per-year cash-flow stream. Two further scope differences: M&D apply the mechanism to the full no-conversion RMD stream, where the present framework applies it to the pre-/post-conversion *differential*; and M&D's construction has no terminal distribution, so the drag advantage grows without bound, while the SECURE-Act 10-year beneficiary depletion bounds the present framework's PV and FV by construction.

**Mike Piper, "The 4 Effects of a Roth Conversion."** Names the Outside-payment benefit and the RMD-reduction benefit qualitatively but does not quantify either as drag avoidance or produce PV/IRR figures.

**Reichenstein (2007), "Calculating After-Tax Asset Allocation Is Key…,"** *Journal of Financial Planning*. The conceptual ancestor; treats the IRA benefit as a single tax-exemption-on-inside-buildup term and does not decompose drag avoidance from rate arbitrage.

**Vanguard BETR and Kitces.** Both acknowledge the Outside-payment benefit and account-level drag qualitatively; neither isolates the conv-tax dollar's $r(1-d)$ counterfactual as a PV or IRR line item.

Across these treatments, drag is discussed qualitatively but is not isolated as two separately priced PV alphas with explicit IRR attribution.

---

## 6. Contribution

This paper adds three things to the Roth-conversion literature.

1. **PV identification of two distinct alphas, organized as a decision hierarchy.** RMD-reduction alpha (unlocked by the Convert decision) and SRC alpha (unlocked by the Outside-settlement decision) are each expressed as $P \cdot \mu_P$ for the relevant principal. The decision-hierarchy framing — RMD-reduction alpha first, SRC alpha second — clarifies what each planner decision actually buys and makes the Inside-vs-Outside contrast immediate.

2. **Correcting the implicit zero-growth taxable counterfactual.** The conventional Hidden Contribution figure equates the conv-tax dollar's value with its full sheltered-wrapper future value — implicitly assuming it would have done nothing absent conversion. The realistic counterfactual is taxable growth at $\tilde{r}$. The TDS framing extracts only the sheltered-vs-taxable differential as drag-avoidance value, leaving the would-have-grown-anyway portion correctly attributed to the conv-tax dollar regardless of conversion. (Appendix A.1 gives the decomposition.)

3. **Conversion IRR attributable to drag avoidance.** The two alphas pin down which slice of an Outside-funded conversion's IRR is delivered by drag avoidance rather than by rate arbitrage (Inside payment has no IRR). Per-year definitions and the legitimacy argument are in Appendix C.

The contribution is isolation and quantification, not discovery of the underlying intuition.

---

## 7. Conclusion

Three takeaways for conversion planning.

1. **RMD-reduction alpha is the dominant TDS contribution and applies to every conversion.** It depends on the converted principal $C$, not on how the conversion tax is settled. Both Inside and Outside payment unlock it.

2. **SRC alpha is secondary, available only under Outside settlement.** It is the wrapper-migration benefit on the conv-tax dollar $K$, identical to what a same-sized statutory Roth contribution earns.

3. **Separating the two clarifies the planner sequence.** The Convert decision is judged on RMD-reduction alpha; the Outside-settlement decision adds SRC alpha. Drag shelter materially contributes to conversion economics.

**Sensitivity considerations.**

| Parameter Change | Effect on SRC Alpha | Effect on RMD Alpha |
|---|---|---|
| Higher $\tau_C$ | ↑ | ↓ |
| Higher $\rho$ | — | ↑ |
| Higher drag $d$ | ↑ | ↑ |
| Longer owner remaining life | ↑ | ↑ |

RMD-reduction alpha scales linearly in $\rho$; realistic ranges run 0.50–1.00 for surplus-wealth retirees and $\rho \approx 0$ for retirees consuming the full RMD. The illustrative $d = 5\%$ is a middle-of-the-road estimate for a balanced taxable portfolio; Morningstar's Tax-Cost Ratio offers a per-fund empirical anchor.

---

## Appendix A. The Drag-Avoidance Value Identity

**The identity.** Let a principal of $P$ dollars enter at time $0$ into either a sheltered wrapper (compounding at $r$) or a taxable wrapper (compounding at $\tilde{r}$), and be distributed thereafter on an identical schedule $\{D^{S}(t), D^{B}(t)\}$. The incremental present value of choosing the sheltered wrapper, discounted at $r$, is

$$
\alpha \;=\; P \cdot \mu_{P} \;=\; P \cdot \sum_{t} \frac{D^{S}(t) - D^{B}(t)}{(1+r)^{t}}.
$$

**Assumptions.** (i) Identical pre-tax return path inside and outside the wrapper. (ii) Identical distribution method and schedule. (iii) Principal enters at time 0; distributions follow per the schedule. (iv) No additional rate effects layered onto the same dollar (no contribution-year vs. distribution-year arbitrage).

**Proof sketch.** Per-dollar, the sheltered balance evolves as $B^{S}_t = B^{S}_{t-1}(1+r) - D^{S}(t)$ and the taxable counterfactual as $B^{B}_t = B^{B}_{t-1}(1+\tilde{r}) - D^{B}(t)$, with $B^{S}_0 = B^{B}_0 = 1$. The household receives the distribution stream and discounts it at $r$; the wrapper choice does not change time-zero outlays. The incremental PV per dollar is therefore $\sum_t (D^{S}(t) - D^{B}(t)) / (1+r)^t = \mu_P$. Scaling linearly to $P$ dollars yields the stated identity. $\square$

**Comment.** The identity reduces the household-facing valuation question to two specializations: *what principal is being sheltered, and what distribution schedule drives $\mu_P$?* §4.1 sets $P = K$ on the post-conversion Roth schedule; §4.2 sets $P = (1-\tau_C)\cdot C\cdot \rho$ on the avoided-RMD schedule.

### A.1 SRC alpha within total SRC value

Let $S(T) = (1+r)^T$ and $B(T) = (1+\tilde{r})^T$ denote per-dollar future values at horizon $T$ in the sheltered and taxable wrappers respectively (no distributions). The Synthetic Roth Contribution's total wealth value (Cheshire 2026) decomposes into two components:

- **Taxable-counterfactual growth**, $K \cdot B(T)$ — the future value the $K$ dollars would have earned at $\tilde{r}$ had they remained in the taxable wrapper. This value is properly attributed to the conv-tax dollar regardless of conversion choice.
- **Drag-avoidance alpha**, $K \cdot (S(T) - B(T))$ — the excess generated by the $K$ dollars compounding at $r$ inside the Roth rather than at $\tilde{r}$ outside. This is the wrapper-migration benefit and is available only inside the Roth.

SRC alpha in this paper is the **drag-avoidance component**: $\alpha_{SRC} = K \cdot \mu_{SRC}$ (Appendix B.2 defines $\mu_{SRC}$). The conventional Hidden Contribution figure $K \cdot S(T)$ implicitly assumes a zero-growth taxable counterfactual and conflates the two components; the TDS framing extracts only the differential as alpha.

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

- **SRC alpha.** Under RMD distribution, use the two-phase construction in B.2 below to compute $\mu_{SRC}$. Under FA distribution, run the simulator above directly with $M = \mathrm{FA}$, $g$ = gap years; the output is $\mu_{SRC}$. Multiply by $K$ for $\alpha_{SRC}$ (Outside payment only).
- **RMD-reduction alpha.** Use the two-phase construction in B.1 below (accumulation during owner's life, then beneficiary fixed annuity) to compute $\mu_{RMD}$. Multiply by $(1-\tau_C)\cdot C\cdot \rho$ for $\alpha_{RMD}$.
- **Combined.** Sum PV and FV components. Both per-year streams feed Appendix C.

### B.2 SRC alpha: owner-life distribution before beneficiary annuity

Under RMD distribution, the §4.1 mechanic has a two-phase structure analogous to B.1 but with non-zero Phase-1 distributions. Per-dollar of $K$:

**Phase 1 — owner-life RMD distribution.** Initialize $B^{S} = 1$, $B^{B} = 1$. For each year $t = 1, \ldots, L$ of the owner's remaining life:

1. Distributions: $D^{S}(t) = B^{S}/\varepsilon_t$, $D^{B}(t) = B^{B}/\varepsilon_t$.
2. Update: $B^{S} \leftarrow B^{S}(1+r) - D^{S}(t)$, $B^{B} \leftarrow B^{B}(1+\tilde{r}) - D^{B}(t)$.
3. Record $\Delta(t) = D^{S}(t) - D^{B}(t)$. Accumulate $\mu_F \mathrel{+}= \Delta(t)$, $\mu_P \mathrel{+}= \Delta(t)/(1+r)^t$.

**Phase 2 — beneficiary 10-year fixed annuity.** Identical to B.1 Phase 2 with $N = 10$ and starting balances $B^{S}_L$, $B^{B}_L$: $D^{S}(t) = \mathrm{af}(r, N) \cdot B^{S}_L$, $D^{B}(t) = \mathrm{af}(\tilde{r}, N) \cdot B^{B}_L$, held constant; balances update each year; gap accumulates into $\mu_F$ and $\mu_P$.

The output is **$\mu_{SRC}$**; multiply by $K$ for $\alpha_{SRC}$.

### B.1 RMD-reduction: accumulation before distribution

The §4.2 mechanic has a two-phase structure that the per-dollar simulator above does not make explicit: avoided RMD dollars *accumulate* across the owner's remaining life inside two parallel reinvestment balances, then *distribute* over the 10-year beneficiary period. Per-dollar:

**Phase 1 — owner-life accumulation.** Initialize $A^{S} = 0$, $A^{B} = 0$. For each year $t = 1, \ldots, L$ of the owner's remaining life:

1. Avoided per-dollar RMD this year: $a(t) = 1/\varepsilon_t$ applied to the pre-conversion-minus-post-conversion balance differential (per-dollar normalization).
2. Compound prior accumulations: $A^{S} \leftarrow A^{S}(1+r)$, $A^{B} \leftarrow A^{B}(1+\tilde{r})$.
3. Add the year's avoided amount: $A^{S} \mathrel{+}= a(t)$, $A^{B} \mathrel{+}= a(t)$.
4. No distribution differential is realized in Phase 1; $\Delta(t) = 0$.

**Phase 2 — beneficiary 10-year fixed annuity.** Let $N = 10$. Per-year annuity payments are $D^{S}(t) = \mathrm{af}(r, N) \cdot A^{S}_L$ and $D^{B}(t) = \mathrm{af}(\tilde{r}, N) \cdot A^{B}_L$, held constant over the period. Each year update the balances $A^{S} \leftarrow A^{S}(1+r) - D^{S}(t)$ and $A^{B} \leftarrow A^{B}(1+\tilde{r}) - D^{B}(t)$. Record $\Delta(t) = D^{S}(t) - D^{B}(t)$. Accumulate $\mu_F \mathrel{+}= \Delta(t)$ and $\mu_P \mathrel{+}= \Delta(t) / (1+r)^t$, where $t$ is the year-from-conversion.

The output is **$\mu_{RMD}$**; multiply by $(1-\tau_C) \cdot C \cdot \rho$ to obtain RMD-reduction alpha; multiply $\mu_F$ by the same factor for the FV figure (alpha grown to horizon). The Phase-2 $\Delta(t)$, scaled by $(1-\tau_C)\cdot C\cdot\rho$, is the RMD-reduction per-year flow used in Appendix C; owner-life entries are zero, beneficiary-period entries carry the realized gap.

---

## Appendix C. IRR Attribution: Per-Year Drag-Related Cash Flows

§4.3 reports that the conversion IRR carries a drag-avoidance share. This appendix gives the per-year cash flows behind that claim.

**Per-year flows.** Let $\Delta_{SRC}(t)$ be the yearly sheltered-vs-taxable gap on SRC alpha's two-phase schedule (Appendix B.2), and $\Delta_{RMD}(t)$ the analogous Phase-2 gap on RMD-reduction alpha's beneficiary 10-year annuity (Appendix B.1). The conversion's incremental cash flow in year $t$ picks up two drag-related terms:

$$\mathrm{CF}_{\mathrm{drag}}(t) \;=\; K\cdot\Delta_{SRC}(t)\;+\;(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t).$$

The first runs over the owner's remaining life and beneficiary period; the second is non-zero only in the beneficiary period.

**Legitimacy.** Both flows exist because of the conversion decisions: $K\cdot\Delta_{SRC}(t)$ disappears under Inside payment by construction; $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ exists only because the conversion reduced the Traditional balance generating RMDs. Discounting at $r$, $\sum_t \mathrm{CF}_{\mathrm{drag}}(t)/(1+r)^t = \alpha_{TDS}$.

**Scope.** The conversion IRR is defined only under Outside payment (where $K$ is a real outlay). Under Inside payment the IRR is undefined and the RMD-reduction PV is the reportable figure.
