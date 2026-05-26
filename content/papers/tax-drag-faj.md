# A PV Decomposition of the Drag-Avoidance Component of a Roth Conversion into Hidden-Contribution and RMD-Reduction Streams, and Their Contribution to the Conversion's IRR

**A propositional framework for the two manifestations of drag-avoidance alpha**

**Working paper**
**Date:** 2026-05-25

---

## 1. Introduction

A Roth conversion's total wealth effect on a household is conventionally written as a single algebraic object that bundles rate arbitrage between the conversion year and the distribution year, tax-free inside buildup, the "hidden contribution" effect of paying conversion tax from outside the wrapper, and the reduction in lifetime required minimum distributions (RMDs). The literature does not, in general, separate the *drag-avoidance* component — the structural wealth preservation attributable specifically to the absence of annual taxable yield drag inside the wrapper (which we will refer to as drag-avoidance alpha in keeping with established practitioner terminology, though it carries no risk-adjustment implication) — from the other components, nor does it surface drag avoidance as a present-value line item with an explicit cash-flow contribution to the conversion's internal rate of return.

This paper develops such a decomposition. The contribution is narrowly methodological. First, a present-value (PV) decomposition of the drag-avoidance component of a Roth conversion's wealth effect, with two structurally distinct manifestations — a hidden-contribution (HC) stream and an RMD-reduction stream. Second, identification of the per-year cash-flow streams these two manifestations contribute to the conversion's overall internal rate of return (IRR), and the observation that adding those streams materially changes the deployed conversion IRR relative to a specification that omits them. The contribution is not the use of IRR itself, but the attribution of specific incremental cash-flow streams to drag avoidance within the conversion IRR framework. Three propositions formalize the PV decomposition. Sections 2–4 develop the framework; Section 5 worked-examples it; Section 6 reviews the prior literature and identifies the gap; Section 7 states the novelty claim precisely.

The framing follows the asset-location and tax-efficient-withdrawal traditions (Reichenstein 2007; Horan 2005, 2006; Dammon, Spatt & Zhang 2004; Cook, Meyer & Reichenstein 2015; McQuarrie & DiLellio 2023, 2024). It generalizes Horan's effective-tax-on-compounding apparatus into a separable PV decomposition on the conversion-tax outlay specifically, isolates the drag-avoidance portion of the hidden-contribution effect from the bank-counterfactual portion, and shows how the resulting per-year differential streams enter the conversion's IRR cash-flow vector.

---

## 2. Mathematical Framework

### 2.1 Notation

- $r$ — pre-tax asset return (illustrative: 7%)
- $d \in [0, 1]$ — annual tax-drag fraction on the same return when held in a taxable wrapper
- $\tilde{r} = r \cdot (1 - d)$ — the after-drag growth rate of the taxable counterfactual (illustrative $d = 0.05$ gives $\tilde{r} = 6.65\%$)
- $T$ — horizon in years; $g$ — gap years between conversion and first distribution
- $C$ — converted principal; $\tau_C$ — effective marginal rate on the conversion; $K = \tau_C \cdot C$ — conversion tax
- $\rho \in [0, 1]$ — analyst's assumption on the fraction of avoided RMDs that would have been reinvested taxably rather than consumed

### 2.2 Per-dollar drag-shelter multipliers

For a single dollar held in a sheltered wrapper compounding at $r$, with a taxable counterfactual compounding at $\tilde{r}$, and distributing under a common schedule $\{D^S(t), D^B(t)\}_{t=1}^{T+g}$ produced by a deterministic distribution method $M$ (RMD divisors, fixed annuity, or lump):

$$
\Delta(t) \;=\; D^{S}(t) - D^{B}(t), \qquad
\mu_F \;=\; \sum_{t} \Delta(t), \qquad
\mu_P \;=\; \sum_{t} \frac{\Delta(t)}{(1+r)^{t}}.
$$

$\mu_F$ and $\mu_P$ are the per-dollar future-value and present-value multipliers of drag-avoidance under method $M$. The distribution paths $D^S(t)$ and $D^B(t)$ are computed by running two parallel balances under $M$ — sheltered compounding at $r$, taxable at $\tilde{r}$ — depleting each balance via $M$ until the schedule terminates (Section 4 specifies the simulator).

For the lump-sum special case ($M$ = "single distribution at $T$"), $\mu_F = (1+r)^T - (1+\tilde{r})^T$ and $\mu_P = 1 - \left(\frac{1+\tilde{r}}{1+r}\right)^T$. For $T = 17$, $r = 7\%$, $d = 5\%$: $\mu_P \approx 0.067$ per dollar.

### 2.3 Discount-rate convention

PV is evaluated at the pre-tax asset return $r$ throughout. This is the analyst's no-arbitrage discount rate for sheltered cash flows under the framework's equal-tax-rate assumption (see §3.1) and matches the convention in Horan (2005). An alternative — discounting at $\tilde{r}$ to reflect the household's after-tax opportunity cost — yields a larger $\mu_P$; PV ordering between strategies is invariant in $r$ for the realistic parameter regime.

---

## 3. Three Propositions

### 3.1 Assumptions

The propositions are stated under the following standing assumptions, intended to isolate drag avoidance from rate arbitrage and other channels:

**(A1) Equal pre-tax return paths.** The same pre-tax return path $r$ applies to dollars held inside the Roth wrapper, dollars held in the no-conversion Traditional wrapper, and dollars held in the taxable counterfactual.

**(A2) Identical distribution schedule.** Sheltered and taxable counterfactual balances distribute under the same method $M$ at the same calendar dates.

**(A3) Equal marginal tax rates across periods.** $\tau_C = \tau_D$, where $\tau_D$ is the effective marginal rate at distribution. This isolates drag avoidance from rate arbitrage by setting the rate-arbitrage component to zero.

**(A4) Constant drag fraction.** $d$ is constant across years and asset classes. Section 8 discusses relaxations.

**(A5) Outside payment of conversion tax.** The conversion tax $K$ is paid from a taxable account external to the retirement wrapper, so the post-conversion Roth principal is the full $C$ rather than $C - K$. The HC manifestation requires this; RMD-reduction does not (see §3.4).

### 3.2 Proposition 1 (drag-avoidance value of a single sheltered dollar)

**Proposition 1.** *Under (A1)–(A4), the present value of sheltering a single pre-tax dollar from annual taxable drag over the schedule $M$ equals the schedule-discounted differential between the sheltered and the taxable per-dollar distribution paths:*

$$
v(M;\,r,\,d) \;=\; \sum_{t} \frac{D^{S}(t) - D^{B}(t)}{(1+r)^{t}} \;=\; \mu_P(M;\,r,\,d).
$$

*Proof sketch.* Under (A3) the after-tax dollar value of a distribution equals its pre-tax value times a common factor $(1-\tau_D)$; both sides of any comparison absorb the same factor and it can be set to 1 without loss of generality (drag avoidance is by construction the residual after rate arbitrage is netted out). Under (A1)–(A2), the sheltered and taxable balances follow deterministic difference equations $B^S(t) = B^S(t-1)(1+r) - D^S(t)$ and $B^B(t) = B^B(t-1)(1+\tilde{r}) - D^B(t)$ from the same initial dollar, with $D^S(t)$ and $D^B(t)$ generated by the same method $M$ applied to the respective balance. The per-year wealth differential to the household is exactly the distribution differential $\Delta(t)$, because under $M$ all wealth is eventually distributed (no terminal balance). Discounting the differential stream at $r$ gives $\mu_P(M)$. $\square$

*Remark.* Proposition 1 is the unit building block of the framework. It says: drag avoidance has a single closed-form-style PV at the per-dollar level, parameterized by the distribution method $M$ and the structural pair $(r, d)$. The two manifestations in the conversion setting are scalings of this unit value. The proposition makes no IRR claim; it is a PV identity for a single sheltered dollar.

### 3.3 Proposition 2 (Hidden-Contribution drag)

**Proposition 2.** *Under (A1)–(A5), the drag-avoidance value of the conversion-tax dollar $K$ paid from outside the retirement wrapper equals $K$ times the unit value from Proposition 1 evaluated under the post-conversion Roth distribution method $M_{\mathrm{HC}}$:*

$$
\alpha_{HC}^{PV} \;=\; K \cdot \mu_P(M_{\mathrm{HC}};\,r,\,d) \;=\; K \cdot \mu_P^{HC}.
$$

Proposition 2 invokes the *Synthetic Roth Contribution equivalence* established in Cheshire (2026), "The Synthetic Roth Contribution: Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions," SSRN #6772118 — the result that conversion-tax dollars $K$ paid from outside the retirement wrapper migrate into the Roth and compound there identically to a same-year statutory Roth contribution of size $K$. The proof sketch below invokes that equivalence and applies the Proposition 1 scaling.

*Proof sketch.* By the Synthetic Roth Contribution equivalence (Cheshire 2026), the $K$ dollars paid as conversion tax behave inside the Roth as a same-year statutory contribution of size $K$, compounding at $r$ on a balance segment that would otherwise have compounded at $\tilde{r}$ in the taxable wrapper under method $M_{\mathrm{HC}}$ (the post-conversion Roth distribution schedule applied to the $K$-dollar segment of post-conversion balance). Linearity in initial principal of the difference equation $B^S(t) = B^S(t-1)(1+r) - D^S(t)$, combined with $M_{\mathrm{HC}}$ producing distributions proportional to balance (RMD divisors; fixed-annuity factors), gives $\alpha_{HC}^{PV} = K \cdot v(M_{\mathrm{HC}}) = K \cdot \mu_P^{HC}$ as a direct corollary of Proposition 1. $\square$

For inside payment of the conversion tax (relaxing A5), no dollar migrates from the taxable wrapper into the Roth and $\alpha_{HC}^{PV} \equiv \alpha_{HC}^{FV} \equiv 0$. The Hidden-Contribution effect is well-known qualitatively (Piper 2020; Vanguard BETR); Proposition 2 isolates the *drag-avoidance portion* of it, separated from the bank-counterfactual growth component $K \cdot B(T) = K \cdot (1+\tilde{r})^T$ that is conventionally folded into the figure $K \cdot S(T)$.

### 3.4 Proposition 3 (RMD-reduction drag)

**Proposition 3.** *Under (A1)–(A4), the drag-avoidance value of the reduced future-RMD reinvestment stream produced by the conversion equals $(1-\tau_C) \cdot C \cdot \rho$ times the unit value from Proposition 1 evaluated under the avoided-RMD reinvestment schedule $M_{\mathrm{RMD}}$:*

$$
\alpha_{RMD}^{PV} \;=\; (1-\tau_C)\cdot C\cdot \rho \cdot \mu_P(M_{\mathrm{RMD}};\,r,\,d) \;=\; (1-\tau_C)\cdot C\cdot \rho \cdot \mu_P^{RMD}.
$$

*Proof sketch.* The conversion reduces the Traditional balance by $C$, which reduces the lifetime sequence of RMDs by an amount equal to applying the IRS Uniform Lifetime divisors to the $C$-dollar slice of the Traditional balance and to its forward growth. The avoided per-year RMD, *after distribution-year tax* at $\tau_C$ (by A3), is $(1-\tau_C)$ times the gross avoided amount; the fraction $\rho$ of that after-tax stream is the household's reinvestment behavior (the rest is consumed and exits the framework). Reinvested in the post-conversion Roth (which absorbs the converted principal) versus reinvested in a taxable account in the no-conversion counterfactual, the reinvested stream then earns the unit drag-avoidance value $\mu_P^{RMD}$ on each dollar reinvested. Linearity in principal completes the argument. $\square$

Unlike HC drag, RMD-reduction drag has no statutory-contribution analog: only a Roth conversion shrinks the existing Traditional balance and thereby reduces the RMD sequence. Importantly, Proposition 3 *does not require (A5)*: the avoided-RMD stream is a function of the converted principal $C$, not of how the conversion tax $K$ is paid. Under inside payment of the conversion tax, $\alpha_{RMD}^{PV}$ and $\alpha_{RMD}^{FV}$ are unchanged. The reinvestment-share $\rho$ is a behavioral assumption; sensitivity analysis is mandatory in any household-level application.

### 3.5 Corollary: joint PV and the drag-avoidance contribution to the conversion's IRR

Because both manifestations share the same outlay $K$ under outside payment, the total drag-avoidance PV is additive:

$$
\alpha_{TDS}^{PV} \;=\; \alpha_{HC}^{PV} \;+\; \alpha_{RMD}^{PV}.
$$

Under inside payment of the conversion tax, $\alpha_{HC}^{PV} = 0$ and the total reduces to $\alpha_{RMD}^{PV}$ alone. PV totals are decomposition-level objects: they price the wealth contribution of each manifestation independently of any IRR construction.

The Roth conversion as a household decision has a single internal rate of return — the rate $i$ that zeroes the NPV of the conversion's full incremental cash-flow stream against the no-conversion counterfactual, with the conversion tax $K$ as the year-0 outlay (defined only under outside payment; under inside payment $K$ is not an outlay and the conversion IRR is undefined). The drag-avoidance manifestations enter that single IRR through additive contributions to its per-year cash-flow vector. Specifically, the conversion's incremental after-tax-distribution stream against the no-conversion counterfactual is augmented by

$$
CF_{TDS}(t) \;=\; K \cdot \Delta_{HC}(t) \;+\; (1-\tau_C)\cdot C\cdot \rho \cdot \Delta_{RMD}(t), \qquad t = g+1, \ldots, T+g,
$$

where the first term is present only under (A5) and the second under both payment modes. The conversion IRR is then the rate $i$ solving

$$
-K \;+\; \sum_{t=g+1}^{T+g} \frac{CF_{\mathrm{conv}}(t) + CF_{TDS}(t)}{(1+i)^{t}} \;=\; 0,
$$

solved numerically, where $CF_{\mathrm{conv}}(t)$ is the conversion's incremental after-tax-distribution differential before drag adjustments. The drag streams are not associated with separate per-component IRRs.

### 3.6 On the IRR construction

A reviewer-anticipated concern: the drag-avoidance benefit is realized through future differential cash flows attributed to a conversion event, and one might ask why those differential streams legitimately enter the conversion's IRR cash-flow vector. Three points justify the construction.

First, **the conversion's IRR is the right level for the IRR claim**, not a per-component IRR. The conversion is the actual decision the household makes — a single discrete event with a single discretionary outlay $K$ at $t = 0$ (under outside payment of conversion tax) and a sequence of incremental after-tax-distribution effects against the no-conversion counterfactual. The drag-avoidance manifestations are not standalone investment projects the household can elect — they come bundled with the conversion. Reporting per-component IRRs would describe counterfactuals the household never faces. Reporting one IRR — the conversion's — with a transparent decomposition of which cash-flow streams contribute to it answers the economically meaningful question.

Second, **the drag-attributable streams are well-defined additive contributions to the conversion IRR's cash-flow vector**, by linearity in initial principal. Proposition 2 establishes $CF_{HC}(t) = K \cdot \Delta_{HC}(t)$ as the per-year differential in after-tax distributable cash between the HC-segment of post-conversion Roth balance (size $K$) and its no-conversion taxable counterfactual; Proposition 3 establishes $CF_{RMD}(t) = (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ as the per-year differential in after-tax reinvested-RMD distributable cash. Both streams are time-indexed differences against the same no-conversion counterfactual that produces $CF_{\mathrm{conv}}(t)$. Adding them to $CF_{\mathrm{conv}}(t)$ in the IRR cash-flow vector therefore neither double-counts (they describe wealth differentials the underlying conversion incremental-distribution stream does not capture) nor introduces a recognition gap (PV and FV are exactly the discounted-sum and undiscounted-sum of the same yearly stream).

Third, **uniqueness of the conversion IRR is preserved when drag streams are added.** Under (A1)–(A4), $\Delta_{HC}(t) \geq 0$ and $\Delta_{RMD}(t) \geq 0$ for all $t$ (the sheltered balance dominates the taxable balance pointwise by monotonicity of $(1+r)/(1+\tilde{r}) > 1$ applied to non-negative balances). Adding non-negative drag-attributable streams to the conversion's incremental cash-flow vector preserves the sign pattern that underwrites Descartes-rule uniqueness of the conversion IRR. Multiple IRRs do not arise; the conversion IRR is well-defined.

The timing of the $\Delta_{RMD}(t)$ stream warrants explicit treatment. By construction, $\Delta_{RMD}(t) = 0$ during the owner's remaining life and is non-zero only during the terminal beneficiary distribution period. The avoided RMD dollars accumulate inside two parallel reinvestment balances over the owner's life — compounding at $r$ in the sheltered counterfactual and at $\tilde{r}$ in the taxable counterfactual — and the accumulated differential is then realized year-by-year as the difference between the two balances' fixed-period (10-year) annuity distributions to the beneficiary. This is an attribution choice, not a recognition choice: the household's wealth differential exists continuously during the owner's life (inside the reinvestment balances), but is *realized as distributable cash* only at the beneficiary stage. PV and FV totals are unaffected — the full owner-life drag is captured in the accumulated balance differential before distribution — but the conversion IRR figure reflects benefit realization at distribution, not at accrual, and is therefore conservative as a measure of the time-value return on the conversion outlay.

What the conversion IRR is *not*: it is not a drag-only IRR. The conversion's IRR absorbs rate-arbitrage and other effects in addition to drag-avoidance; the drag streams are one identifiable additive contribution. The paper's IRR-related contribution is to identify which cash-flow streams the drag-avoidance channels contribute and to show that the contribution is material.

---

## 4. Algorithmic Specification

### 4.1 Per-dollar drag-shelter simulator

**Input.** $r$; $d$; method $M \in \{\mathrm{RMD},\,\mathrm{FA}\}$; horizon $T$; gap $g$; (for RMD) life-expectancy divisors $\varepsilon_t$.

**Output.** $\mu_F$, $\mu_P$, $\Delta(\cdot)$.

Initialize $B^S = 1$, $B^B = 1$, $\mu_F = 0$, $\mu_P = 0$, $\tilde{r} = r(1-d)$. For each year $t = 1, \ldots, T+g$:

1. If $t \leq g$: $B^S \leftarrow B^S(1+r)$, $B^B \leftarrow B^B(1+\tilde{r})$; continue.
2. Compute $D^S(t), D^B(t)$ under $M$:
   - **RMD:** $D^S(t) = B^S / \varepsilon_t$, $D^B(t) = B^B / \varepsilon_t$.
   - **FA:** $D^S(t) = \mathrm{af}(r, T-g) \cdot B^S(g{+}1)$, constant; analogously for $D^B$ at $\tilde{r}$.
3. $B^S \leftarrow B^S(1+r) - D^S(t)$, $B^B \leftarrow B^B(1+\tilde{r}) - D^B(t)$.
4. $\Delta(t) = D^S(t) - D^B(t)$; $\mu_F \mathrel{+}= \Delta(t)$; $\mu_P \mathrel{+}= \Delta(t)/(1+r)^t$.

### 4.2 Manifestation scaling and IRR cash-flow contribution

Run §4.1 with $M = M_{\mathrm{HC}}$ to get $\mu_P^{HC}, \mu_F^{HC}, \Delta_{HC}(\cdot)$, and with $M = M_{\mathrm{RMD}}$ on the avoided-RMD reinvestment stream (owner remaining horizon plus terminal beneficiary period) to get $\mu_P^{RMD}, \mu_F^{RMD}, \Delta_{RMD}(\cdot)$. Apply the principal scalings of Propositions 2 and 3 to obtain $\alpha_{HC}^{PV}$, $\alpha_{HC}^{FV}$, $\alpha_{RMD}^{PV}$, $\alpha_{RMD}^{FV}$. Under (A5), the drag-avoidance contributions to the conversion IRR's per-year cash-flow vector are $K \cdot \Delta_{HC}(t)$ and $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$, added year-by-year to the conversion's incremental after-tax-distribution differential before the IRR is solved numerically. With inside payment, only the RMD stream is computed (PV/FV); $K$ is not an outlay, and the conversion IRR is undefined.

---

## 5. Worked Example

Stylized 22%-bracket Roth conversion, outside payment of the conversion tax.

**Inputs.**

| Parameter | Symbol | Value |
|---|---|---|
| Pre-tax return | $r$ | 7% |
| Drag fraction | $d$ | 5% (→ $\tilde{r} = 6.65\%$) |
| Conversion principal | $C$ | \$123,850 |
| Effective conversion rate | $\tau_C$ | 22% |
| Conversion tax | $K$ | \$17,966 |
| Distribution method | RMD-only, age-73 onset | |
| Owner remaining horizon | $T_O$ | 17 years |
| Beneficiary terminal period | $T_B$ | 10 years |
| Reinvestment-share | $\rho$ | 0.75 |
| Gap years | $g$ | 13 |

**Per-dollar multipliers** (output of §4.1):

| | $\mu_P$ | $\mu_F$ |
|---|---|---|
| HC stream | 0.0568 | 0.2834 |
| RMD-reduction stream | 0.0238 | 0.1607 |

**PV and FV.**

| Component | PV | FV |
|---|---|---|
| HC drag $= K \cdot \mu_P^{HC}$ | \$1,021 | \$5,092 |
| RMD drag $= (1-\tau_C)\cdot C\cdot \rho \cdot \mu_P^{RMD}$ | \$2,522 | \$17,019 |
| **Total drag-avoidance** | **\$3,543** | **\$22,111** |

**IRR contribution.** The drag-attributable per-year flows $K \cdot \Delta_{HC}(t)$ and $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ enter the conversion's IRR cash-flow vector — non-zero only over the distribution window $t = g+1, \ldots, T+g$, with $\Delta_{RMD}(t)$ realized in the terminal 10-year beneficiary period per §3.6. The conversion IRR is then solved numerically over the augmented vector. Incorporating these streams materially changes the deployed figure relative to a specification that includes only $CF_{\mathrm{conv}}(t)$; the magnitude depends on the conversion's other cash flows and is reported by the reference implementation in §8.

---

## 6. Literature Review

The published literature on tax-advantaged retirement accounts is voluminous. Coverage of *drag avoidance* as a separately quantified PV component in the Roth-conversion setting, with explicit identification of the cash-flow streams it contributes to the conversion's IRR, is sparse.

### 6.1 Academic

The tax-policy literature from **Burman, Coe & Gale (NBER WP 6227, 1997)** onward partitions retirement-account benefits into rate-arbitrage and tax-free-inside-buildup buckets, with the latter treated as a single algebraic object. **Reichenstein (2007),** "Calculating After-Tax Asset Allocation," *JFP*, and **Cook, Meyer & Reichenstein (2015),** "Tax-Efficient Withdrawal Strategies," *FAJ* 71(2): 16–29, formalize the pre-tax/after-tax wrapper inequivalence; the IRA benefit is treated as a single inside-buildup term, not decomposed into drag-avoidance and rate-arbitrage components.

**Horan (2005, 2006)** — *Tax-Advantaged Savings Accounts and Tax-Efficient Wealth Accumulation* (CFA Institute Research Foundation) and "Withdrawal Location with Progressive Tax Rates," *FAJ* 62(6): 77–87 — develops the effective-tax-on-compounding apparatus, parsing drag into rate × turnover × yield components in service of pricing a *taxable* account; the sheltered case sets the effective rate to zero and drag avoidance is not surfaced as a separately priced PV object on the conversion-tax outlay. **Dammon, Spatt & Zhang (2004),** *Journal of Finance* 59(3): 999–1037, is the canonical theoretical treatment of asset location; drag avoidance is implicit in a Merton-style first-order condition, not a reported PV component. **Bergstresser & Poterba (2004),** *JPubE* 88(9–10): 1893–1915, is the empirical companion.

**McQuarrie & DiLellio (2023, 2024)** — "The Arithmetic of Roth Conversions," *JFP* (May 2023); NPV extension *JFP* (Sep 2024); stochastic-price extension *Financial Planning Review* (2024) — is the closest academic engagement with tax drag in the conversion context. The reinvested-RMD counterfactual is modeled at a taxable-bank rate net of drag, and the authors argue drag compounds enough to overcome adverse rate movements at long horizons. This partially anticipates the RMD-reduction manifestation but as a breakeven argument, not as a separately priced PV component on the outlay; the HC manifestation is not isolated.

**Brown, Cederburg & O'Doherty (2017),** *JFE* 126(3): 689–712 (rate-uncertainty hedging); **Geisler & Hulse (2018),** *JFP* 31(2): 36–47 (RMD-driven sequencing); and **DiLellio & Ostrov (2017),** *Decision Sciences* 48(2): 342–377 (consumption/sequencing optimization) do not isolate drag avoidance on the conversion-tax outlay. SSRN, NBER, and Google Scholar searches for terms including "Roth conversion IRR," "tax drag retirement IRR," "asset-location alpha PV," and "conversion-tax internal rate of return drag" return no source that does so.

### 6.2 Practitioner

**Vanguard BETR** acknowledges that drag on the tax-payment source matters directionally; the public formula does not isolate the conv-tax dollar's $\tilde{r}$ counterfactual. **Morningstar Tax-Cost Ratio** ($T_i = 1 - (1+\mathrm{ATR}_i)/(1+L_i)$) is an empirical anchor for $d$ at the fund level. **Kitces** identifies the outside-paid-tax benefit and quantifies asset-location drag at ~10 bps/year, ~6% cumulative over decades, but does not join drag to the conversion-tax outlay as a decomposed PV object. **Piper (2020), "The 4 Effects of a Roth Conversion,"** is the closest practitioner enumeration: effect #2 names the outside-paid-tax mechanism, effect #3 names RMD reduction; neither is quantified as drag avoidance at $\tilde{r}$. **Vanguard Advisor's Alpha** (Kinniry et al., 2014/2019/2022) reports asset-location alpha as a single ~60 bp figure, not decomposed.

### 6.3 Summary of the gap

| Element | Status in published literature |
|---|---|
| Drag avoidance as a *concept* in Roth conversions | Acknowledged broadly. |
| HC drag — PV figure | Not isolated. Conventional HC math uses $K \cdot S(T)$, implicitly a zero-growth bank counterfactual. |
| RMD-reduction drag — PV figure | Not isolated as a household-facing PV component; partially anticipated by McQuarrie & DiLellio as a robustness argument. |
| Identified cash-flow contribution of either manifestation to a conversion's IRR | Not present. |
| Combined PV decomposition with explicit IRR cash-flow construction on the conv-tax outlay | Not present. |

---

## 7. Novelty Claim

The contribution of this paper is the **PV decomposition of the drag-avoidance component on the Roth-conversion tax outlay $K$**, with HC and RMD-reduction manifestations as separable additive streams under the linearity-in-principal property of $\mu_P$, together with **identification of the per-year cash-flow streams those manifestations contribute to the conversion's overall IRR**. The contribution is methodological, not conceptual: the intuition that retirement accounts shelter dollars from annual yield drag is universally acknowledged at a qualitative level (Piper, McQuarrie & DiLellio, Vanguard BETR, Kitces); the gap is in the *isolation and joint PV quantification* of drag avoidance and in the explicit construction by which it enters the conversion's IRR.

Three specific claims:

1. **Decomposition.** The drag-avoidance component admits a clean linear decomposition into HC and RMD-reduction streams (Propositions 2 and 3), with closed-form-style PV expressions $\alpha_{HC}^{PV} = K \cdot \mu_P^{HC}$ and $\alpha_{RMD}^{PV} = (1-\tau_C)\cdot C\cdot\rho\cdot\mu_P^{RMD}$, where $\mu_P^{(\cdot)}$ are outputs of the per-dollar simulator (§4.1) under the relevant distribution schedule. Neither expression appears in the verified literature.

2. **IRR cash-flow identification.** The paper identifies $K \cdot \Delta_{HC}(t)$ and $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ as the per-year streams the drag-avoidance manifestations contribute to the conversion's IRR under outside payment, and shows that incorporating them materially changes the deployed figure. The construction is one IRR — the conversion's — with transparent drag-attributable contributions; no separate per-component IRR is claimed. §3.6 defends the IRR-level choice and the legitimacy of the additive contribution.

3. **Counterfactual correction.** The conventional HC figure $K \cdot S(T)$ implicitly assumes a zero-growth bank counterfactual. The realistic counterfactual is taxable-bank growth at $\tilde{r}$, and the drag-avoidance component is only the difference $K \cdot (S(T) - B(T))$. The bank-growth portion $K \cdot B(T)$ accrues to the household irrespective of the conversion and should not be credited to it. This decomposition is not present in the verified Hidden-Contribution literature.

### 7.1 Caveats

- Several primary PDFs (Vanguard BETR, McQuarrie/DiLellio JFP article, Reichenstein FPA papers, Vanguard Advisor's Alpha) returned encoded content the literature scan could not parse fully; characterization relies on published abstracts and summaries.
- The Kitces archive includes paywalled posts on the most relevant article ("Tax Diversification Limits And Roth Optimization Benefits"); a logged-in read is the most important verification gap.
- The novelty claim is about *isolation as a quantified PV component with explicit IRR cash-flow contributions*, not about discovery of the underlying intuition.

---

## 8. Extensions

- **Sensitivity to $\rho$.** $\alpha_{RMD}^{PV}$ is linear in $\rho$. Realistic ranges: 0.50–1.00 for surplus-wealth retirees, 0 for retirees consuming the full RMD. Sensitivity analysis is mandatory in household applications.
- **Empirical calibration of $d$.** Illustrative $d = 5\%$ is a balanced-portfolio middle. A richer specification would derive $d$ per asset class, holding horizon (capital-gains deferral), and marginal rate. Morningstar's Tax-Cost Ratio is a per-fund empirical anchor.
- **State income tax.** Not in $d$ as specified; additional 3–10% on dividends and gains widens drag in high-tax states.
- **Capital-gains-deferral effect.** The framework as stated captures dividend/interest drag, not realized-CG drag, which is turnover-dependent.
- **Rate-arbitrage interaction.** (A3) is for isolation; relaxing it requires modeling rate-arbitrage as an additive component, which is well-developed in Reichenstein (2007).
- **Implementation reference.** A reference implementation — per-dollar simulator, two-component PV decomposition of drag-avoidance, and addition of the drag-attributable per-year streams to the conversion's IRR cash-flow vector — is available in the RothGPT conversion calculator.
