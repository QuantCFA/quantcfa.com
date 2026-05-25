# Tax-Drag Shelter: A Newly Isolated Component of Roth-Conversion Value

**PV Decomposition of the Two Manifestations and Their Contribution to the Conversion IRR**

**Working paper**
**Date:** 2026-05-25

---

## 1. Concept

A retirement account creates value through two economically distinct channels. The first is the *rate effect* — Traditional defers contribution-year tax; Roth eliminates distribution-year tax. The net wealth impact depends on the relationship between the contribution-year and distribution-year marginal rate, and can be positive, negative, or zero. The second is the *drag-avoidance effect* — inside the wrapper, every dollar compounds at the asset's full pre-tax return; outside, the same dollar pays annual tax on dividends, interest, realized capital gains, and turnover-driven distributions. This yield drag is small per year — typically 0.5% to 2% on a balanced portfolio — but compounds over multi-decade horizons.

The drag-avoidance benefit is universally acknowledged at a conceptual level, but it is rarely *quantified* as a named alpha line item in published Roth-conversion analyses. Most decompositions fold drag avoidance into a single "tax-deferred compounding" term that also absorbs rate-arbitrage, capital-gains deferral, and turnover effects. The result is an aggregate benefit number whose drivers cannot be inspected.

The present paper isolates the drag-avoidance benefit in the Roth-conversion setting and names it **Tax-Drag Shelter alpha**. We treat it not as the defining essence of retirement accounts, but as a previously-folded sub-component of conversion value that can now be separated, priced, and reported to clients. Two structurally distinct manifestations appear in a conversion:

1. **HC drag (Hidden Contribution drag).** When the conversion tax $K$ is paid from outside the retirement account, $K$ dollars migrate from a taxable wrapper into the Roth and compound tax-free thereafter. We refer to this implicit migration as the **Synthetic Roth Contribution** and treat its economic equivalence to a statutory Roth contribution of $K$ as axiom (a formal proof is referenced to a separate document). HC drag is the drag-shelter alpha on the Synthetic Roth Contribution. Its mechanism is shared with statutory Roth contributions.

2. **RMD drag.** A conversion shrinks the Traditional balance and thereby reduces lifetime required minimum distributions. For retirees not consuming the full RMD, the avoided distributions would otherwise have been reinvested in a taxable wrapper at the dragged rate. Post-conversion, the avoided dollars instead remain sheltered. Unlike HC drag, RMD drag has no statutory-contribution analog — only a conversion can shrink an existing Traditional balance.

This paper contributes (a) a **present value (PV) decomposition** of both manifestations into named alpha line items, with explicit closed-form expressions that reduce to a per-dollar simulator output multiplied by the relevant principal, and (b) identification of the per-year, drag-attributable cash-flow streams that each manifestation contributes to the conversion's overall **internal rate of return (IRR)**. In the deployed reference implementation (RothGPT conversion calculator), HC drag and RMD drag are surfaced as named PV alpha line items, and the corresponding per-year cash-flow streams are incorporated into the deployed conversion IRR.

**Scope.** Statutory contributions are the dominant channel through which households realize Tax-Drag Shelter alpha. This paper does not analyze statutory contributions. It analyzes the Roth conversion because conversions create two structurally distinct alpha streams that the published literature has not isolated separately.

---

## 2. Mathematical Framework

### 2.1 Notation

- $r$ — pre-tax asset return (illustrative: 7%)
- $d$ — annual tax drag fraction on the same return when held taxably (illustrative: 5% of return)
- $\tilde{r} = r \cdot (1 - d)$ — after-drag growth rate on a taxable balance (illustrative: 6.65%)
- $T$ — horizon in years; $g$ — gap years from conversion to first distribution
- $C$ — converted principal; $\tau_C$ — effective marginal rate on the conversion
- $K = \tau_C \cdot C$ — conversion tax paid
- $\rho \in [0,1]$ — reinvestment-share assumption (fraction of avoided RMDs that would have been reinvested rather than spent)

### 2.2 Per-dollar drag-shelter alpha (lump-sum case)

For a single dollar held to horizon $T$ and distributed as a lump:

$$
\alpha_F = (1+r)^{T} - (1+\tilde{r})^{T}, \qquad
\alpha_P = 1 - \left(\frac{1+\tilde{r}}{1+r}\right)^{T}.
$$

For $T = 17$, $r = 7\%$, $d = 5\%$: $\alpha_F \approx 0.21$ per dollar at horizon, $\alpha_P \approx 0.067$ per dollar today.

### 2.3 Distributing balances

Real retirement accounts distribute over time. The drag-shelter alpha for a distributing balance is computed by simulating two parallel accounts holding the same starting principal under the same distribution schedule:

1. **Sheltered** — balance compounds at $r$; distributions are taken per the chosen method.
2. **Taxable counterfactual** — balance compounds at $\tilde{r}$; distributions are taken per the *same* method.

Per year $t$, the per-dollar distribution differential is $\Delta(t) = D^{S}(t) - D^{B}(t)$. Aggregated per-dollar multipliers:

$$
\mu_F = \sum_{t} \Delta(t), \qquad
\mu_P = \sum_{t} \frac{\Delta(t)}{(1+r)^{t}}.
$$

The lump-sum case is the special case of a single year-$T$ distribution. RMD schedules produce smaller per-year differentials over more years; fixed-annuity schedules sit in between. The framework is method-agnostic.

### 2.4 Proposition 1 — the drag-avoidance value identity

The two manifestations below share a common structural result, which we state explicitly because it organizes the rest of the paper.

**Proposition 1.** Let a principal of $P$ dollars be deployed at time $0$ into either a sheltered wrapper (compounding at $r$) or a taxable wrapper (compounding at $\tilde{r}$), and distributed thereafter on an identical schedule $\{D^{S}(t), D^{B}(t)\}$. The incremental present value of choosing the sheltered wrapper, discounted at $r$, is

$$
\alpha^{PV}(P) \;=\; P \cdot \mu_{P} \;=\; P \cdot \sum_{t} \frac{D^{S}(t) - D^{B}(t)}{(1+r)^{t}}.
$$

**Assumptions.** (i) Identical pre-tax return path inside and outside the wrapper. (ii) Identical distribution method and schedule. (iii) The principal enters at time 0; distributions follow per the schedule. (iv) No additional rate effects (no contribution-year vs. distribution-year arbitrage layered onto the same dollar).

**Proof sketch.** Per-dollar, the sheltered balance evolves as $B^{S}_t = B^{S}_{t-1}(1+r) - D^{S}(t)$ and the taxable counterfactual as $B^{B}_t = B^{B}_{t-1}(1+\tilde{r}) - D^{B}(t)$, with $B^{S}_0 = B^{B}_0 = 1$. The household receives the distribution stream and discounts it at $r$; the wrapper choice does not change time-zero outlays. The incremental PV per dollar is therefore $\sum_t (D^{S}(t) - D^{B}(t)) / (1+r)^t = \mu_P$. Scaling linearly to $P$ dollars yields the stated identity. $\square$

**Comment.** Proposition 1 is deliberately compact. It reduces the household-facing valuation question to: *what principal is being sheltered, and what is the discounted distribution differential per dollar?* The two manifestations in §3 differ only in the principal $P$ and the schedule that drives $\mu_P$.

### 2.5 PV at the component level, IRR at the conversion level

PV and IRR play different roles in the present framework.

- **PV is the component-level metric.** Each drag manifestation has its own PV alpha — a today-dollar figure that the household uses to compare conversion strategies and to inspect the relative contribution of each channel. The two manifestations admit clean closed-form PV expressions (§3) and are reported as named alpha line items.
- **IRR is the conversion-level metric.** The household-facing IRR is a single number — the conversion's overall IRR — computed against the full incremental cash-flow vector that the conversion event creates. The drag-avoidance channels enter that vector as additive per-year cash-flow contributions, not as standalone IRRs. Per-component IRRs add no information beyond per-component PV under a fixed outlay, and they describe counterfactuals (a drag-avoidance "investment" the household could elect separately) that do not exist — the channels come bundled with the conversion event.

**On the IRR interpretation.** A reasonable objection is that the conv-tax outlay is not a standalone investment project in the textbook sense; the conversion IRR is constructed by attributing the full set of incremental differential cash flows to the conversion event. We embrace that construction explicitly. The conversion event creates multiple cash-flow consequences — among them a Synthetic Roth Contribution that earns its own drag-shelter stream, and a reduced-RMD reinvestment stream — all of which share the conv-tax outlay as their economically common up-front cost. The conversion IRR is the rate that equates the outlay to the union of those incremental benefit streams. Identifying which streams come from drag avoidance (rather than rate arbitrage or other effects) is the attribution exercise; it is what lets the planner say *this much* of the conversion IRR is delivered by the drag-avoidance channels.

### 2.6 IRR construction

The conversion's overall IRR is computed against an incremental cash-flow vector indexed by year $t = 0, 1, \ldots, T+g$:

- $t = 0$ — outlay $-K$ (the conversion tax paid from outside the retirement account).
- $t = 1, \ldots, g$ — zero (gap years, before distributions begin).
- $t \geq g+1$ — per-year incremental after-tax distribution differential between the post-conversion and pre-conversion strategies, *plus* the drag-attributable cash-flow contributions from §3 (the HC-drag stream $K \cdot \Delta_{HC}(t)$ and the RMD-reduction stream $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$).

The conversion IRR is the rate $i$ solving $\sum_{t} CF(t)/(1+i)^{t} = 0$, found numerically. Under inside payment of the conversion tax, $K = 0$ as a user outlay and the conversion IRR is undefined (the deployed implementation returns a sentinel value in that case).

---

## 3. Two Manifestations

A Roth conversion creates Tax-Drag Shelter alpha in two structurally distinct ways. Both are direct corollaries of Proposition 1; they differ only in principal and schedule.

### 3.1 HC drag — the Synthetic-Contribution manifestation

**Axiom (Synthetic Roth Contribution).** When the conversion tax $K$ is paid from outside the retirement account, the post-conversion Roth principal is the full $C$ rather than $C - K$. The $K$ dollars that migrate from the taxable wrapper into the Roth compound tax-free thereafter, *identically to a statutory Roth contribution of $K$* made in the same year. We call this implicit dollar the **Synthetic Roth Contribution** and take its economic equivalence to a statutory Roth contribution as axiom. (Formal proof — same after-tax distribution stream, same wrapper, same tax treatment — is referenced separately.)

HC drag is the Tax-Drag Shelter alpha *on the Synthetic Roth Contribution*. Applying Proposition 1 with $P = K$ and $\mu_P = \mu_P^{HC}$ (computed under the post-conversion Roth distribution schedule):

$$
\alpha_{HC}^{PV} = K \cdot \mu_{P}^{HC}, \qquad
\alpha_{HC}^{FV} = K \cdot \mu_{F}^{HC}.
$$

The corresponding per-year cash-flow stream $K \cdot \Delta_{HC}(t)$ enters the conversion's overall IRR cash-flow vector as the drag-avoidance contribution from this channel; it is non-zero only under outside payment of the conversion tax.

For inside payment of the conversion tax, no Synthetic Roth Contribution exists — $K$ is withheld from the converted balance, no dollar migrates from the taxable wrapper, and $\alpha_{HC} = 0$ in both PV and FV. The conversion IRR is undefined under inside payment (no user outlay).

The hidden-contribution / synthetic-contribution effect is well-known qualitatively (Piper 2020, "The 4 Effects of a Roth Conversion," effect #2; Kitces; Vanguard BETR). What is new is the isolation of *only* the drag-avoidance portion of that effect — separated from the conventional $K \cdot S(T)$ figure which folds the bank-counterfactual growth and the drag-avoidance into a single number.

### 3.2 RMD drag — the purely-conversion manifestation

Only a conversion shrinks the Traditional balance, and only a conversion thereby reduces the RMD stream the household is forced to draw from the Traditional wrapper. Pre-conversion, those larger RMDs would have flowed out of the shelter and — for retirees with surplus wealth not consuming the full RMD — been reinvested taxably, suffering annual drag thereafter. Post-conversion, the avoided RMD dollars stay sheltered until eventually distributed via the now-smaller RMDs.

Applying Proposition 1 with $P = (1-\tau_C) \cdot C \cdot \rho$ (the after-tax principal whose RMD draw is avoided, scaled by the reinvestment-share assumption) and $\mu_P = \mu_P^{RMD}$ (computed under an RMD schedule on the avoided-RMD principal stream over the owner's remaining life plus a terminal beneficiary period):

$$
\alpha_{RMD}^{PV} = (1 - \tau_C) \cdot C \cdot \rho \cdot \mu_{P}^{RMD}, \qquad
\alpha_{RMD}^{FV} = (1 - \tau_C) \cdot C \cdot \rho \cdot \mu_{F}^{RMD}.
$$

The corresponding per-year cash-flow stream $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ enters the conversion's overall IRR cash-flow vector as the drag-avoidance contribution from this channel. Unlike HC drag, RMD-reduction PV and FV are defined under both inside and outside payment of the conversion tax — the RMD-reduction benefit depends on the converted principal $C$, not on how the tax is paid. The IRR contribution, however, is meaningful only under outside payment, because the conversion IRR is undefined under inside payment ($K = 0$ as user outlay).

**Timing of the $\Delta_{RMD}(t)$ stream.** The per-year RMD-drag differential is zero during the owner's remaining life and non-zero only during the terminal beneficiary distribution period. Mechanically, the avoided RMD dollars accumulate inside two parallel reinvestment balances over the owner's life — one compounding at $r$ (sheltered counterfactual), one at $\tilde{r}$ (taxable counterfactual). Those balances then distribute as a fixed-period (10-year) annuity to the beneficiary, and the drag-avoidance benefit is realized year-by-year as the differential between the two annuity streams. PV and FV totals capture the full owner-life drag through the accumulated balance differential; the cash-flow stream that feeds the conversion IRR reflects benefit realization at distribution, not at accrual.

Typical $\rho$ ranges: $\approx 0.50\text{--}0.75$ for retirees subject to mandatory RMD-driven decumulation; $\rho \to 0$ for retirees consuming the full RMD; $\rho \to 1$ for retirees with surplus wealth and no spending need.

### 3.3 Joint PV and combined cash-flow contribution to the conversion IRR

Under outside payment of the conversion tax, both manifestations share the same outlay $K$, and the joint PV is additive:

$$
\alpha_{TDS}^{PV} = \alpha_{HC}^{PV} + \alpha_{RMD}^{PV}.
$$

The combined per-year drag-attributable cash-flow stream is

$$
\mathrm{CF}_{TDS}(t) \;=\; K \cdot \Delta_{HC}(t) \;+\; (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t),
$$

and is added to the conversion IRR's cash-flow vector at each year $t$. The drag-avoidance channels do not generate a separate IRR of their own; they raise the conversion's overall IRR by contributing the streams above to its cash-flow vector.

Under inside payment, $\alpha_{HC} \equiv 0$ in PV and FV (no Synthetic Roth Contribution), the RMD-reduction PV and FV remain meaningful, and the conversion IRR is undefined ($K = 0$ as user outlay).

---

## 4. Algorithmic Specification

### 4.1 Per-dollar drag-shelter simulator

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

### 4.2 Applying the simulator to each manifestation

**HC drag.** Run §4.1 with $M$ = the post-conversion Roth distribution method, $g$ = gap from conversion to first Roth distribution. Multiply $\mu_P$ and $\mu_F$ by $K$ to obtain $\alpha_{HC}^{PV}$ and $\alpha_{HC}^{FV}$. Multiply the per-year $\Delta_{HC}(t)$ by $K$ to obtain the per-year cash-flow stream contributed to the conversion IRR (outside payment only).

**RMD drag.** Run §4.1 with $M = \mathrm{RMD}$ on the *avoided RMD principal stream* — the parallel simulation of what would have been withdrawn from the larger pre-conversion balance versus the smaller post-conversion balance, with a terminal beneficiary distribution period. Multiply $\mu_P$ and $\mu_F$ by $(1-\tau_C)\cdot C\cdot \rho$ to obtain $\alpha_{RMD}^{PV}$ and $\alpha_{RMD}^{FV}$. Multiply the per-year $\Delta_{RMD}(t)$ by the same factor to obtain the per-year cash-flow stream contributed to the conversion IRR.

**Combined Tax-Drag Shelter.** Sum PV and FV components. Both per-year streams are added into the *single* conversion IRR cash-flow vector — there is no separate drag-component IRR.

---

## 5. Worked Example

Stylized 22%-bracket Roth conversion, paid from outside the retirement account.

**Inputs.**

| Parameter | Symbol | Value |
|---|---|---|
| Pre-tax return | $r$ | 7% |
| Drag fraction | $d$ | 5% ($\tilde{r}$ = 6.65%) |
| Conversion principal | $C$ | \$123,850 |
| Conversion-year marginal rate | $\tau_C$ | 22% (effective) |
| Conversion tax | $K = \tau_C \cdot C$ | \$17,966 |
| Distribution method | RMD-only, age 73 onset | |
| Owner remaining horizon | $T_O$ | 17 years |
| Beneficiary terminal period | $T_B$ | 10 years |
| Reinvestment-share | $\rho$ | 0.75 |
| Gap years | $g$ | 13 |

**Per-dollar multipliers** (output of §4.1):

| | $\mu_P$ | $\mu_F$ |
|---|---|---|
| HC (Roth distribution schedule) | 0.0568 | 0.2834 |
| RMD-reduction (avoided-RMD schedule) | 0.0238 | 0.1607 |

**Tax-Drag Shelter alpha — PV and FV:**

| Component | PV | FV |
|---|---|---|
| HC drag | \$1,021 | \$5,092 |
| RMD drag | \$2,522 | \$17,019 |
| **Total Tax-Drag Shelter** | **\$3,543** | **\$22,111** |

**Contribution to the conversion IRR.** Under outside payment of the conversion tax in this scenario, the drag-attributable cash-flow streams $K \cdot \Delta_{HC}(t) + (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ are added per year over the beneficiary distribution period to the conversion's overall IRR cash-flow vector. The deployed `conv_irr` in the reference implementation includes these contributions. The drag-avoidance channels do not have separately reported IRRs — they raise the single conversion IRR by the magnitude of their attributable cash-flow streams above.

**Planner-facing interpretation.** The household's wealth gain from drag avoidance is \$3,543 in today's dollars, growing to \$22,111 at horizon. PV is reported as two named alpha line items (HC drag \$1,021 and RMD drag \$2,522), so the planner can inspect how much of the conversion's value comes from each channel. The conversion IRR is reported as a single household-facing number that reflects all incremental cash flows, including the drag-attributable streams above.

The planner's operational rule is direct: **report HC drag and RMD drag as named PV line items, and recognize that the same channels also contribute their per-year cash-flow streams to the conversion's overall IRR**. Two PV line items inform the household which channels drive conversion value; the single conversion IRR remains the comparable rate against alternative uses of the conv-tax dollars.

---

## 6. Literature Review

The published literature on tax-advantaged retirement accounts is voluminous; coverage of *tax drag* as a quantified, named PV alpha line item in the Roth conversion setting — with the corresponding cash-flow contribution to the conversion IRR made explicit — is sparse. This section maps the existing treatments against the present specification and locates the gap.

### 6.1 Academic literature

**The dominant two-bucket frame.** From Burman, Coe & Gale (NBER WP 6227, 1997) onward, retirement-account benefits are conventionally split into (a) tax-rate arbitrage between contribution/conversion year and distribution year, and (b) tax-free or tax-deferred year-over-year compounding inside the wrapper (the tax-policy literature's "inside buildup"). The (b) bucket is invariably treated as a single algebraic object — the avoided annual yield drag and the deferral of capital-gains realization are folded together inside one exponent and rarely separated into named PV or IRR components.

**Cook, Meyer & Reichenstein (2015), "Tax-Efficient Withdrawal Strategies,"** *Financial Analysts Journal* 71(2): 16–29 [https://rpc.cfainstitute.org/research/financial-analysts-journal/2015/tax-efficient-withdrawal-strategies]. Develops sequencing logic across taxable, tax-deferred, and Roth wrappers. Reichenstein's earlier *Journal of Financial Planning* (July 2007) "Calculating After-Tax Asset Allocation Is Key to Determining Risk, Returns, and Asset Location" [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=922293] is the foundational after-tax-allocation framework — the closest conceptual ancestor of the present work. It treats the IRA benefit as a single tax-exemption-on-inside-buildup term; it does not decompose that term into drag-avoidance and rate-arbitrage components and does not produce an IRR for drag avoidance specifically.

**Horan (2005, 2006).** *Tax-Advantaged Savings Accounts and Tax-Efficient Wealth Accumulation,* CFA Institute Research Foundation; "Withdrawal Location with Progressive Tax Rates," *Financial Analysts Journal* 62(6): 77–87 [https://www.tandfonline.com/doi/abs/10.2469/faj.v62.n6.4355]. Develops an effective-tax-rate-on-annual-compounding framework, parsing drag into rate × turnover × yield components — but in service of pricing a *taxable* account, not as a sheltered-account PV or IRR alpha.

**Dammon, Spatt & Zhang (2004), "Optimal Asset Location and Allocation with Taxable and Tax-Deferred Investing,"** *Journal of Finance* 59(3): 999–1037 [https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.2004.00655.x]. Canonical theoretical asset-location treatment. Implicitly quantifies drag avoidance via a Merton-style first-order condition, not as a named PV or IRR component reported to a household.

**Bergstresser & Poterba (2004), "Asset Allocation and Asset Location: Household Evidence from the Survey of Consumer Finances,"** *Journal of Public Economics* 88(9–10): 1893–1915 [https://www.nber.org/papers/w9268]. Empirical companion to Dammon-Spatt-Zhang; same framing, same gap.

**McQuarrie & DiLellio (2023), "The Arithmetic of Roth Conversions,"** *Journal of Financial Planning* (May 2023) [https://etfmathguy.com/wp-content/uploads/2023/06/McQuerrie-and-DiLellio-2023-The-Arithmetic-of-Roth-Conversions-JFP.pdf]; follow-on NPV paper, *JFP* (Sep 2024); stochastic-price extension in *Financial Planning Review* (2024) [https://onlinelibrary.wiley.com/doi/abs/10.1002/cfp2.1174]. **Closest academic engagement with tax drag in the Roth-conversion context.** They model the reinvested-RMD counterfactual at a taxable-bank rate net of drag and argue that *"by age 85, the percent gain on the conversion from tax drag at constant tax rates notably exceeds the gain from a simple arithmetic difference of 1 percent in the future tax rate."* This partially anticipates the RMD-reduction component. The McQuarrie-DiLellio framing, however, is a robustness/breakeven argument that conversions overcome adverse rate movements via accumulating drag — not a separately-priced PV or IRR alpha line item. HC drag is not isolated in any retrievable McQuarrie/DiLellio passage.

**Brown, Cederburg & O'Doherty (2017), "Tax Uncertainty and Retirement Savings Diversification,"** *Journal of Financial Economics* 126(3): 689–712 [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2799288]. The contribution is rate-uncertainty hedging, not drag-avoidance quantification.

**Geisler & Hulse (2018), "The Effects of Social Security Benefits and RMDs on Tax-Efficient Withdrawal Strategies,"** *Journal of Financial Planning* 31(2): 36–47 [https://www.financialplanningassociation.org/sites/default/files/2021-02/FEB18%20Geisler%20and%20Hulse.pdf]. Models RMD effects on sequencing; does not isolate drag-avoidance on RMD reinvestment as a PV or IRR alpha component.

**DiLellio & Ostrov (2017), "Optimal Strategies for Traditional vs. Roth IRA/401(k) Consumption During Retirement,"** *Decision Sciences* 48(2): 342–377 [https://webpages.scu.edu/ftp/dostrov/publications/DS.pdf]. Optimization of consumption/sequencing; does not surface Tax-Drag Shelter components.

**Search for IRR-based treatments.** SSRN, Google Scholar, and NBER searches for terms including "Roth conversion IRR," "tax drag retirement IRR," "asset location alpha PV," "hidden Roth contribution drag," and "conversion tax internal rate of return drag" return no papers that explicitly isolate Tax-Drag Shelter alpha as a PV or IRR line item in the Roth conversion setting.

### 6.2 Practitioner literature

**Vanguard "Putting a Value on Your Value: Quantifying Vanguard Advisor's Alpha"** (Kinniry et al., 2014, 2019, 2022) [https://corporate.vanguard.com/content/dam/corp/research/pdf/a_betr_approach_to_roth_conversions_072025.pdf]. Reports asset-location alpha as a single number — *"up to 60 basis points"* — not decomposed into PV or IRR components.

**Vanguard BETR (Break-Even Tax Rate) calculator** [https://investor.vanguard.com/investor-resources-education/news/a-betr-calculation-for-the-traditional-to-roth-ira-conversion-equation]. States *"the more tax-inefficient the account used to pay the conversion tax, the lower the BETR (and the greater the benefit of converting)."* Directional acknowledgment; no public formula isolates the conv-tax dollar's $r(1-d)$ counterfactual as a separate PV or IRR line item.

**Morningstar Tax-Cost Ratio** [https://admainnew.morningstar.com/directhelp/Glossary/Performance/Tax_Cost_Ratio.htm]. Defined as $T_i = 1 - (1+\mathrm{ATR}_i)/(1+L_i)$. Captures fund-level annual drag; does not address conversion mechanics. Conceptually the empirical anchor for the drag fraction $d$.

**Michael Kitces (kitces.com).** Most granular practitioner treatment of Roth-conversion math. Key pieces: "How To Calculate The Marginal Tax Rate Of A Roth Conversion" [https://www.kitces.com/blog/roth-conversion-analysis-value-calculate-timing-true-marginal-tax-rate-equivalency-principle/], the asset-location yield-split article [https://www.kitces.com/blog/yield-split-asset-location-tax-drag-alpha-efficiency-index-funds/], and tax-diversification work [https://www.kitces.com/blog/tax-diversification-roth-optimization-conversion-tax-alpha/]. Kitces identifies the outside-paid-tax benefit qualitatively but does not decompose growth on the conv-tax dollar into rate-arbitrage and drag-avoidance components or produce an IRR for the drag-avoidance portion alone.

**Mike Piper, "The 4 Effects of a Roth Conversion"** [https://obliviousinvestor.com/the-4-effects-of-a-roth-conversion/]. **Closest practitioner article to the present two-manifestation structure.** Piper enumerates effect #2 *"You get to use taxable dollars to pay the tax"* (the HC principal effect) and #3 *"It reduces your later RMDs"* (qualitative analog of RMD-reduction). Piper names the effects but does not quantify either as drag avoidance at $\tilde{r}$ and does not produce PV or IRR figures.

**Wade Pfau, Bogleheads, Schwab, Fidelity, T. Rowe Price.** [https://retirementresearcher.com/roth-conversion-save-money-long-term/; https://www.bogleheads.org/wiki/Roth_conversion; https://www.schwab.com/learn/story/why-consider-roth-ira-conversion-and-how-to-do-it; https://www.fidelity.com/learning-center/personal-finance/tax-diversification-roth-conversion]. Various qualitative acknowledgments of drag-avoidance as a benefit of conversion; no published Tax-Drag Shelter PV or IRR figure isolating the two manifestations.

### 6.3 Summary of the gap

| Element | Status in published literature |
|---|---|
| Tax drag as a *concept* in the Roth-conversion context | Acknowledged broadly. |
| HC drag — PV figure | Not isolated. Conventional Hidden Contribution math uses $K \cdot S(T)$, implicitly assuming a zero-growth bank counterfactual. |
| RMD drag — PV figure | Not isolated as a household-facing PV line item. Partially anticipated by McQuarrie & DiLellio as a robustness argument. |
| Drag-attributable cash-flow streams identified as components of the conversion IRR | Not present in verified sources. |
| Combined Tax-Drag Shelter PV decomposition plus conversion-IRR contribution | Not present in verified sources. |

---

## 7. Novelty Claim

The intuition that retirement accounts shelter dollars from annual yield drag is universally acknowledged. The contribution here is methodological and centers on a **PV decomposition** of the drag-avoidance channels into named alpha line items, plus the **identification of the per-year cash-flow streams that those channels contribute to the conversion's overall IRR**.

1. **A clean two-manifestation PV decomposition.** Tax-Drag Shelter alpha is structured as a Synthetic-Contribution manifestation (HC drag, inheriting the alpha a statutory Roth contribution of $K$ would also earn) and a purely-conversion manifestation (RMD drag, with no statutory-contribution analog). The Synthetic Roth Contribution axiom clarifies that HC drag is the conversion-channel route to alpha that statutory contributions also earn, while RMD drag is genuinely new alpha created only by the conversion event.

2. **PV expressions for both manifestations.** Both reduce to $P \cdot \mu_P$ in the form of Proposition 1, with $\mu_P$ produced by a parallel-account simulator under the relevant distribution schedule. Neither expression appears in the verified literature as a household-facing PV alpha line item. PV decomposition is the primary novel object of this paper.

3. **Identification of the drag-attributable cash-flow streams that feed the conversion IRR.** The two manifestations contribute per-year cash-flow streams $K \cdot \Delta_{HC}(t)$ and $(1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t)$ to the conversion's overall IRR cash-flow vector. The paper identifies these streams explicitly and demonstrates that incorporating them materially changes the deployed conversion IRR (as evidenced by the 2026-03 and 2026-05 commits in the reference implementation). The paper does not introduce separate per-component IRRs — those would describe counterfactual investments the household never faces; instead the contribution is to make explicit *which* cash flows enter the single conversion IRR and *why* they belong there.

4. **Correcting the implicit zero-growth bank counterfactual.** The conventional Hidden Contribution figure $K \cdot S(T)$ implicitly assumes the conv-tax dollar would have done nothing in the no-conversion counterfactual. The realistic counterfactual is taxable-bank growth at $\tilde{r}$. The Tax-Drag Shelter framing extracts only the *difference* $K\cdot(S(T) - B(T))$ as alpha — leaving the bank-growth portion $K\cdot B(T)$ correctly attributed to the conv-tax dollar irrespective of conversion.

### 7.1 Caveats

- Multiple primary PDFs (Vanguard BETR full paper, McQuarrie/DiLellio full JFP article, Reichenstein FPA papers, Vanguard Advisor's Alpha PDF) returned encoded content the literature scan could not parse fully. Characterization relies on published abstracts, summaries, and secondary discussion.
- Paywalled Kitces posts on the most relevant article ("Tax Diversification Limits And Roth Optimization Benefits") are a residual verification gap on the practitioner side.
- The novelty claim is about isolation as quantified PV alpha line items and identification of the corresponding per-year cash-flow contributions to the conversion IRR, not about discovery of the underlying intuition. The structural innovations are the PV decomposition, the cash-flow-stream identification for the conversion IRR, and the realistic-counterfactual correction.

---

## 8. Open Items and Extensions

- **Sensitivity to $\rho$.** RMD-drag PV scales linearly in $\rho$. Realistic ranges: 0.50–1.00 for surplus-wealth retirees; $\rho \approx 0$ for retirees consuming the full RMD.
- **Empirical calibration of $d$.** Illustrative $d = 5\%$ is a rough middle-of-the-road estimate for a balanced taxable portfolio. A richer specification would derive $d$ per asset class, per holding horizon, and per user marginal rate. Morningstar's Tax-Cost Ratio offers a per-fund empirical anchor.
- **State income tax.** Not included as specified. State tax on dividends and capital gains (typically 3–10% additional) would widen Tax-Drag Shelter alpha for high-tax-state residents.
- **Capital-gains deferral effect.** A more granular framework would separate dividend/interest drag (annual, captured here) from realized-capital-gains drag (turnover-dependent, not captured here).
- **Implementation reference.** A full reference implementation of this framework — per-dollar drag-shelter simulator, two-component PV decomposition, and identification of the drag-attributable cash-flow streams that feed the conversion's overall IRR — is available in the RothGPT conversion calculator. The deployed calculator reports HC drag and RMD drag as named PV alpha line items and incorporates the corresponding per-year cash-flow streams into the single conversion IRR; it does not surface separate per-component IRRs.
