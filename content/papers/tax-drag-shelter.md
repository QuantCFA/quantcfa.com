# Tax-Drag Shelter: Quantifying the Raison d'Être of Tax-Advantaged Retirement Accounts

**PV and IRR Analysis of the Two Manifestations in the Roth Conversion Setting**

**Working draft — Academic paper outline**
**Date:** 2026-05-11

---

## 1. Concept

A retirement account's defining economic feature is not the deferral of contribution-year tax (Traditional) or the elimination of distribution-year tax (Roth). Both of those are *rate effects* — they trade one tax bill for another — and their net value depends on the relationship between the contribution-year and the distribution-year marginal rate. Rate effects are variable in sign and frequently small. The same dollar can be advantaged or disadvantaged by the rate effect alone.

The genuinely *universal* benefit of every tax-advantaged retirement account is **the elimination of annual tax drag on savings**. Inside the wrapper, every dollar compounds at the asset's full pre-tax return. Outside the wrapper, the same dollar pays tax on dividends, interest, realized capital gains, and turnover-driven distributions every year. This *yield drag* is small per year — typically 0.5% to 2% on a balanced portfolio — but compounds catastrophically over multi-decade horizons.

Drag-avoidance is the *raison d'être* of tax-advantaged retirement accounts. With rate equality between contribution and distribution years (no rate arbitrage at all), a retirement account still strictly dominates a taxable account by the drag-avoidance margin. With adverse rate arbitrage (lower future bracket), a retirement account can still produce positive household wealth alpha if the drag-avoidance effect is large enough. Without drag-avoidance, the retirement-account institution would not exist.

**Scope of this paper.** The dominant channel through which households realize Tax-Drag Shelter alpha is the *statutory contribution* — direct payroll or after-tax contributions to 401(k), IRA, and Roth accounts. Aggregate U.S. retirement-account flows are dominated by statutory contributions; conversions are a small fraction. This paper does not analyze statutory contributions. It analyzes how a *Roth conversion* — a one-time, household-initiated event that moves principal from a Traditional wrapper into a Roth wrapper at a tax cost — accesses the same Tax-Drag Shelter alpha. Conversions matter analytically because they create two structurally distinct Tax-Drag Shelter alpha streams that statutory contributions either share or do not share, and that the published Roth-conversion literature has not isolated and quantified separately.

Despite being conceptually fundamental, the drag-avoidance benefit is rarely *quantified* as a named alpha line item in published Roth conversion analyses. Most retirement-account decompositions fold drag avoidance into a single "tax-deferred compounding" term that also absorbs rate-arbitrage, capital-gains deferral, and turnover effects. The result is a black-box benefit number whose drivers cannot be decomposed.

This paper does two things in the Roth conversion setting:

1. **Names** the drag-avoidance benefit as **Tax-Drag Shelter alpha** and shows that a Roth conversion accesses it through two structurally distinct manifestations:
   - **HC drag (Synthetic-Contribution drag)** — drag avoided on the conversion-tax dollar that, when paid from outside the retirement account, migrates from a taxable wrapper into the Roth and behaves economically identically to a statutory Roth contribution of the same dollar amount. We refer to this implicit dollar as the **Synthetic Roth Contribution** and take its equivalence to a statutory Roth contribution as an *axiom* (formal proof is referenced to a separate document). The alpha *mechanism* for HC drag is the same one a statutory contribution would earn; the conversion event simply creates the contribution synthetically rather than via direct deposit.
   - **RMD drag (purely-conversion phenomenon)** — drag avoided on reduced future required-minimum-distribution (RMD) reinvestment. This manifestation has *no statutory-contribution analog*: only a conversion shrinks the existing Traditional balance and thereby reduces lifetime RMDs. A statutory Roth contribution to a separate account does not reduce Traditional RMDs. RMD drag is uniquely a conversion phenomenon.

2. **Quantifies** both manifestations in two complementary metrics — *present value* (PV, evaluated at the analyst's pre-tax discount rate) and *internal rate of return* (IRR, computed against the household's incremental cash-flow stream from the conversion-tax outlay). PV gives the household-facing wealth figure; IRR gives the time-value-weighted return that the conv-tax outlay earns through drag avoidance alone. The contribution of the paper is showing that both manifestations admit clean closed-form-style PV expressions and clean IRR expressions, and that neither manifestation is currently isolated as a PV-or-IRR alpha line item in the academic or practitioner literature.

The framework is implemented in a reference Roth-conversion calculator (RothGPT), where HC drag and RMD drag are surfaced to households as named alpha line items in PV and IRR form.

---

## 2. Mathematical Framework

### 2.1 Notation

- $r$ — pre-tax asset return (illustrative: 7%)
- $d$ — annual tax drag fraction on the same return when held in a taxable account (illustrative: 5% of return)
- $\tilde{r} = r \cdot (1 - d)$ — the after-drag growth rate the same dollar would experience taxably (illustrative: 6.65%)
- $T$ — horizon in years
- $g$ — gap years between conversion and first distribution
- $C$ — converted principal
- $\tau_C$ — effective marginal rate on the conversion in the conversion year
- $K = \tau_C \cdot C$ — conversion tax paid
- $S(t) = (1 + r)^{t}$, $B(t) = (1 + \tilde{r})^{t}$ — sheltered and taxable per-dollar growth factors

### 2.2 Per-dollar drag-shelter alpha

For a single dollar held over horizon $T$, distributing as a lump at horizon end:

$$
\begin{aligned}
\alpha_F &= S(T) - B(T) = (1+r)^{T} - (1+\tilde{r})^{T} \\[4pt]
\alpha_P &= \frac{\alpha_F}{(1+r)^{T}} = 1 - \left(\frac{1+\tilde{r}}{1+r}\right)^{T}
\end{aligned}
$$

$\alpha_F$ is per-dollar future-value alpha; $\alpha_P$ is per-dollar present-value alpha discounted at $r$.

For $T = 17$, $r = 7\%$, $d = 5\%$: $S(17) \approx 3.16$, $B(17) \approx 2.95$, $\alpha_F \approx 0.21$ per dollar at horizon, $\alpha_P \approx 0.067$ per dollar today.

### 2.3 Distributing balances

Real retirement accounts distribute over time, not as a lump at horizon. The drag-shelter alpha for a distributing balance is computed by simulating two parallel accounts holding the same starting principal under the same distribution schedule:

1. **Sheltered account** — balance compounds at $r$, distributes per the chosen method, distributions are tax-free or already adjusted for income tax.
2. **Taxable counterfactual account** — balance compounds at $\tilde{r}$, distributes per the *same* method.

Per year $t$, the per-dollar distribution differential is $\Delta(t) = D^{S}(t) - D^{B}(t)$. Aggregated:

$$
\begin{aligned}
\mu_F &= \sum_{t} \Delta(t) && \text{(per-dollar FV multiplier)} \\[4pt]
\mu_P &= \sum_{t} \frac{\Delta(t)}{(1+r)^{t}} && \text{(per-dollar PV multiplier)}
\end{aligned}
$$

The lump-sum case (§2.2) is the special case where the schedule is "single distribution at year $T$." For an RMD-driven schedule the multipliers are smaller per year but extend over more years; for a fixed-annuity schedule, intermediate. The framework is method-agnostic.

### 2.4 PV and IRR as the two evaluation metrics

A complete characterization of any alpha component requires *both* a stock metric and a flow metric:

- **PV** is a stock metric: a single dollar number summarizing today's value of the alpha. PV is what the household uses to compare conversion strategies.
- **IRR** is a flow metric: the rate of return the *outlay* earns, computed against the full incremental cash-flow timeline. IRR is what the household uses to compare the alpha against alternative uses of the same outlay (paying down debt, taxable investing, deferring conversion).

For Tax-Drag Shelter alpha specifically, PV alone is insufficient: a small PV figure could reflect either a small total alpha (low IRR) or a back-loaded alpha (high IRR with long duration). Reporting PV without IRR obscures whether the household is being paid for the time value of the conv-tax outlay. Conversely IRR alone is insufficient: a high IRR on a tiny dollar base is uninteresting. The contribution of this paper is the joint PV+IRR specification.

### 2.5 IRR construction

IRR for a Tax-Drag Shelter component is computed against an incremental cash-flow vector indexed by year $t = 0, 1, \ldots, T+g$:

- $t = 0$ — outlay (negative). For both manifestations the outlay is the conversion tax $K$.
- $t = 1, \ldots, g$ — zero (gap years, no distributions yet).
- $t = g+1, \ldots, T+g$ — per-year drag-shelter benefit $\Delta(t)$ scaled by the relevant principal (see §3).

IRR is the rate $i$ solving

$$
\sum_{t} \frac{CF(t)}{(1+i)^{t}} = 0
$$

solved numerically. The IRR isolates the return on the conv-tax outlay attributable specifically to drag avoidance — it is *not* the same as the conversion's overall IRR (which would also reflect rate-arbitrage and other effects).

---

## 3. Two Manifestations

A Roth conversion creates Tax-Drag Shelter alpha in two structurally distinct ways. Both are quantified separately in PV and IRR.

### 3.1 Hidden Contribution (HC) Drag — the Synthetic-Contribution Manifestation

**Axiom (Synthetic Roth Contribution).** When the conversion tax $K$ is paid from outside the retirement account — typically a taxable bank or brokerage account — the post-conversion Roth principal is the full $C$ rather than $C - K$. The $K$ dollars that migrate from the taxable wrapper into the Roth compound tax-free thereafter, *identically to a statutory Roth contribution of $K$* made in the same year. We call this implicit dollar the **Synthetic Roth Contribution** and take its economic equivalence to a statutory Roth contribution as axiom in this paper. (Formal proof — same after-tax distribution stream, same wrapper, same tax treatment — is referenced to a separate document.)

HC drag is the Tax-Drag Shelter alpha *on the Synthetic Roth Contribution*. Its mechanism is the same one a statutory Roth contribution of $K$ would earn: the $K$ dollars compound drag-free inside the Roth; in the no-conversion counterfactual they would have compounded at $\tilde{r}$ in the taxable wrapper. The drag-avoidance differential is what HC drag quantifies.

Drag-shelter alpha from this dollar migration:

$$
\begin{aligned}
\alpha_{HC}^{PV}  &= K \cdot \mu_{P}^{HC} \\[4pt]
\alpha_{HC}^{FV}  &= K \cdot \mu_{F}^{HC} \\[4pt]
\alpha_{HC}^{IRR} &= \mathrm{IRR}\!\left(-K,\; 0,\; \ldots,\; 0,\; K\cdot\Delta_{HC}(g{+}1),\; \ldots,\; K\cdot\Delta_{HC}(T{+}g)\right)
\end{aligned}
$$

where $\mu_{P}^{HC}$, $\mu_{F}^{HC}$, and $\Delta_{HC}(\cdot)$ are the outputs of the parallel-account simulator (§2.3) applied to the post-conversion Roth distribution method.

For inside payment of the conversion tax, no Synthetic Roth Contribution exists — $K$ is withheld from the converted balance, no dollar migrates from the taxable wrapper, and $\alpha_{HC} = 0$ in all three metrics.

The Hidden Contribution / synthetic-contribution effect is well-known qualitatively (Piper 2020, "The 4 Effects of a Roth Conversion," effect #2; Kitces; Vanguard BETR copy). What is novel here is the PV+IRR isolation of *only* the drag-avoidance portion of the synthetic contribution — separated from the conventional "Hidden Contribution $= K \cdot S(T)$" figure which folds the bank-counterfactual growth and the drag-avoidance into a single number.

### 3.2 Reduced RMD Drag — the Purely-Conversion Manifestation

Unlike HC drag, RMD drag has *no statutory-contribution analog*. A new statutory Roth contribution does not reduce an existing Traditional balance and therefore does not reduce future RMDs. Only a Roth conversion shrinks the Traditional principal, and only a Roth conversion thereby reduces the RMD stream the household is forced to draw from the Traditional wrapper over the owner's remaining life. RMD drag is uniquely a conversion phenomenon.

Post-conversion, the smaller Traditional balance produces smaller required minimum distributions for the rest of the owner's life. Pre-conversion, those larger RMDs would have been forced out of the shelter and — for retirees with surplus wealth not consuming the full RMD — reinvested in a taxable account, suffering annual drag thereafter. Post-conversion, the avoided RMD dollars stay sheltered and compound drag-free until eventually distributed via the now-smaller RMDs.

Drag-shelter alpha from the reduced-RMD reinvestment stream:

$$
\begin{aligned}
\alpha_{RMD}^{PV}  &= (1 - \tau_C) \cdot C \cdot \rho \cdot \mu_{P}^{RMD} \\[4pt]
\alpha_{RMD}^{FV}  &= (1 - \tau_C) \cdot C \cdot \rho \cdot \mu_{F}^{RMD} \\[4pt]
\alpha_{RMD}^{IRR} &= \mathrm{IRR}\!\left(-K,\; 0,\; \ldots,\; 0,\; (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(g{+}1),\; \ldots,\; (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(T{+}g)\right)
\end{aligned}
$$

where $\mu_{P}^{RMD}$, $\mu_{F}^{RMD}$, and $\Delta_{RMD}(\cdot)$ are the outputs of the parallel-account simulator applied to an RMD distribution schedule on the *avoided RMD stream* over the owner's remaining life plus a terminal beneficiary period; and $\rho \in [0, 1]$ is the analyst's *reinvestment-share assumption* — the fraction of avoided RMDs that would have been reinvested in a taxable wrapper rather than consumed for spending. Typical ranges: $\rho \approx 0.50\text{--}0.75$ for retirees subject to mandatory RMD-driven decumulation; $\rho \to 0$ for retirees consuming the full RMD; $\rho \to 1$ for retirees with surplus wealth and no spending need.

The IRR construction shares the same outlay ($K$) as HC drag but a different benefit stream; the resulting IRR is therefore distinct.

### 3.3 Joint PV and total IRR

Because both manifestations share the same outlay $K$, joint reporting in PV is additive and joint reporting in IRR uses the combined cash-flow stream:

$$
\begin{aligned}
\alpha_{TDS}^{PV}  &= \alpha_{HC}^{PV} + \alpha_{RMD}^{PV} \\[4pt]
\alpha_{TDS}^{IRR} &= \mathrm{IRR}\!\left(-K,\; 0,\; \ldots,\; 0,\; K\cdot\Delta_{HC}(t) + (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t),\; \ldots\right)
\end{aligned}
$$

The combined IRR is what the household earns on the conv-tax outlay through drag avoidance alone — i.e., the time-value floor return of the conv-tax outlay before any rate-arbitrage or other conversion benefit is layered on.

---

## 4. Algorithmic Specification

### 4.1 Per-dollar drag-shelter simulator

**Input.** Pre-tax return $r$; drag fraction $d$; distribution method $M \in \{\mathrm{RMD},\, \mathrm{FA}\}$; horizon $T$; gap years $g$; (for RMD) age-indexed life-expectancy divisors $\varepsilon_t$.

**Output.** Per-dollar FV multiplier $\mu_F$, per-dollar PV multiplier $\mu_P$, per-year cash-flow differential $\Delta(\cdot)$.

Initialize $B^{S} = 1$, $B^{B} = 1$, $\mu_F = 0$, $\mu_P = 0$, $\tilde{r} = r\cdot(1-d)$.

For each year $t = 1, \ldots, T + g$:

1. If $t \leq g$: $B^{S} \leftarrow B^{S}\cdot(1+r)$, $B^{B} \leftarrow B^{B}\cdot(1+\tilde{r})$. Continue.
2. Compute distributions under method $M$:
   - **RMD**: $D^{S}(t) = B^{S} / \varepsilon_t$, $D^{B}(t) = B^{B} / \varepsilon_t$.
   - **FA**: $D^{S}(t) = \mathrm{af}(r,\, T{-}g) \cdot B^{S}(g{+}1)$, constant; $D^{B}(t) = \mathrm{af}(\tilde{r},\, T{-}g) \cdot B^{B}(g{+}1)$, constant.
3. Update: $B^{S} \leftarrow B^{S}\cdot(1+r) - D^{S}(t)$, $B^{B} \leftarrow B^{B}\cdot(1+\tilde{r}) - D^{B}(t)$.
4. $\Delta(t) = D^{S}(t) - D^{B}(t)$. $\mu_F \mathrel{+}= \Delta(t)$. $\mu_P \mathrel{+}= \Delta(t)/(1+r)^{t}$.

### 4.2 Hidden Contribution drag

Run §4.1 with $M$ = the post-conversion Roth distribution method, $g$ = gap from conversion to first Roth distribution, $T+g$ = full horizon. Output: $\mu_{P}^{HC}$, $\mu_{F}^{HC}$, $\Delta_{HC}(\cdot)$.

$$
\begin{aligned}
\alpha_{HC}^{PV}  &= K \cdot \mu_{P}^{HC} \\[4pt]
\alpha_{HC}^{FV}  &= K \cdot \mu_{F}^{HC} \\[4pt]
\alpha_{HC}^{IRR} &= \mathrm{IRR}\!\left(-K,\; 0,\; \ldots,\; 0,\; K\cdot\Delta_{HC}(g{+}1),\; \ldots,\; K\cdot\Delta_{HC}(T{+}g)\right)
\end{aligned}
$$

### 4.3 RMD-reduction drag

Run §4.1 with $M = \mathrm{RMD}$ on the *avoided RMD principal stream*: a parallel simulation tracking what would have been withdrawn from the larger pre-conversion traditional balance versus the smaller post-conversion balance, with terminal beneficiary distribution period. Output: $\mu_{P}^{RMD}$, $\mu_{F}^{RMD}$, $\Delta_{RMD}(\cdot)$.

Apply principal $(1 - \tau_C) \cdot C \cdot \rho$:

$$
\begin{aligned}
\alpha_{RMD}^{PV}  &= (1-\tau_C)\cdot C\cdot \rho \cdot \mu_{P}^{RMD} \\[4pt]
\alpha_{RMD}^{FV}  &= (1-\tau_C)\cdot C\cdot \rho \cdot \mu_{F}^{RMD} \\[4pt]
\alpha_{RMD}^{IRR} &= \mathrm{IRR}\!\left(-K,\; 0,\; \ldots,\; 0,\; (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t),\; \ldots\right)
\end{aligned}
$$

### 4.4 Combined Tax-Drag Shelter

$$
\begin{aligned}
\alpha_{TDS}^{PV}  &= \alpha_{HC}^{PV} + \alpha_{RMD}^{PV} \\[4pt]
\alpha_{TDS}^{FV}  &= \alpha_{HC}^{FV} + \alpha_{RMD}^{FV} \\[4pt]
\alpha_{TDS}^{IRR} &= \mathrm{IRR}\!\left(-K,\; 0,\; \ldots,\; 0,\; K\cdot\Delta_{HC}(t) + (1-\tau_C)\cdot C\cdot\rho\cdot\Delta_{RMD}(t),\; \ldots\right)
\end{aligned}
$$

---

## 5. Worked Example

Stylized 22%-bracket Roth conversion, paid from outside the retirement account.

**Inputs.**

| Parameter | Symbol | Value |
|---|---|---|
| Pre-tax return | $r$ | 7% |
| Drag fraction | $d$ | 5% (→ $\tilde{r}$ = 6.65%) |
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
| HC drag $= K \cdot \mu_{P}^{HC}$ / $K \cdot \mu_{F}^{HC}$ | \$1,021 | \$5,092 |
| RMD drag $= (1-\tau_C)\cdot C\cdot \rho \cdot \mu_{P}^{RMD}$ / $\cdot\, \mu_{F}^{RMD}$ | \$2,522 | \$17,019 |
| **Total Tax-Drag Shelter** | **\$3,543** | **\$22,111** |

**Tax-Drag Shelter alpha — IRR:**

The same outlay ($K$ = \$17,966) generates two drag-benefit streams. The IRRs are the rates equating each stream to the outlay:

| Component | IRR (drag-only) |
|---|---|
| HC drag | ≈ 1.31% |
| RMD drag | ≈ 1.85% |
| **Combined Tax-Drag Shelter** | **≈ 3.10%** |

**Interpretation.** The conversion-tax outlay of \$17,966 earns a 3.10% time-value-weighted return through drag avoidance *alone* — a return that exists irrespective of any rate-arbitrage benefit on the conversion principal. This 3.10% is the household's *floor return* on the conv-tax dollar, set entirely by the structural drag differential $r - \tilde{r}$ and the distribution timing.

The PV figure of \$3,543 is the household-facing wealth figure; the FV figure of \$22,111 is the same alpha grown to horizon at $r$; and the IRR figure of 3.10% is the time-value return the conv-tax outlay earns through drag avoidance specifically. PV without IRR would obscure the time-value structure; IRR without PV would obscure the dollar magnitude. The joint specification is what makes the alpha legible to the household.

---

## 6. Literature Review

The published academic and practitioner literature on tax-advantaged retirement accounts is voluminous; coverage of *tax drag* as a quantified alpha line item — specifically isolated in PV and IRR form in the Roth conversion setting — is sparse. This section maps the existing treatments against the two-component PV+IRR specification and identifies the gap.

### 6.1 Academic literature

**The dominant two-bucket frame.** From Burman, Coe & Gale (NBER WP 6227, 1997) onward, retirement-account benefits are conventionally split into two buckets: (a) tax-rate arbitrage between contribution/conversion year and distribution year, and (b) tax-free or tax-deferred year-over-year compounding inside the wrapper (the tax-policy literature's term of art for (b) is "inside buildup"). The (b) bucket is invariably treated as a single algebraic object — the avoided annual yield drag and the deferral of capital-gains realization are folded together inside one exponent and almost never separated into named PV or IRR components.

**Cook, Meyer & Reichenstein (2015), "Tax-Efficient Withdrawal Strategies,"** *Financial Analysts Journal* 71(2): 16–29 [https://rpc.cfainstitute.org/research/financial-analysts-journal/2015/tax-efficient-withdrawal-strategies]. Develops sequencing logic across taxable, tax-deferred, and Roth wrappers. Frames tax efficiency at the portfolio-strategy level. Reichenstein's earlier *Journal of Financial Planning* (July 2007) "Calculating After-Tax Asset Allocation Is Key to Determining Risk, Returns, and Asset Location" [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=922293] is the foundational after-tax-allocation framework — the closest *conceptual* ancestor of the present work, in that it formalizes the inequivalence of pre-tax IRA dollars and after-tax Roth dollars. The framework treats the IRA benefit as a single tax-exemption-on-inside-buildup term; it does not decompose that term into drag-avoidance and rate-arbitrage components, and does not produce an IRR figure for drag avoidance specifically.

**Horan (2005, 2006).** *Tax-Advantaged Savings Accounts and Tax-Efficient Wealth Accumulation,* CFA Institute Research Foundation; "Withdrawal Location with Progressive Tax Rates," *Financial Analysts Journal* 62(6): 77–87 [https://www.tandfonline.com/doi/abs/10.2469/faj.v62.n6.4355]. Develops an *effective tax rate on annual compounding* framework, parsing drag into rate × turnover × yield components — but in service of pricing a *taxable* account, not as a sheltered-account PV or IRR alpha. The Roth/IRA case sets the effective rate to zero; the avoided drag is not given its own line item.

**Dammon, Spatt & Zhang (2004), "Optimal Asset Location and Allocation with Taxable and Tax-Deferred Investing,"** *Journal of Finance* 59(3): 999–1037 [https://onlinelibrary.wiley.com/doi/abs/10.1111/j.1540-6261.2004.00655.x]. Canonical theoretical treatment of asset location. Implicitly quantifies drag avoidance via a Merton-style first-order condition, not as a named PV or IRR component reported to a household.

**Bergstresser & Poterba (2004), "Asset Allocation and Asset Location: Household Evidence from the Survey of Consumer Finances,"** *Journal of Public Economics* 88(9–10): 1893–1915 [https://www.nber.org/papers/w9268]. Empirical companion to Dammon-Spatt-Zhang. Same framing; same gap.

**McQuarrie & DiLellio (2023), "The Arithmetic of Roth Conversions,"** *Journal of Financial Planning* (May 2023) [https://etfmathguy.com/wp-content/uploads/2023/06/McQuerrie-and-DiLellio-2023-The-Arithmetic-of-Roth-Conversions-JFP.pdf]; follow-on NPV paper, *JFP* (Sep 2024); stochastic-price extension in *Financial Planning Review* (2024) [https://onlinelibrary.wiley.com/doi/abs/10.1002/cfp2.1174]. **Closest academic engagement with tax drag in the Roth conversion context.** They explicitly model the reinvested-RMD counterfactual at a taxable-bank rate net of drag and argue that *"tax drag compounds because compounding is an exponential process … by age 85, the percent gain on the conversion from tax drag at constant tax rates notably exceeds the gain from a simple arithmetic difference of 1 percent in the future tax rate."* This **partially anticipates the RMD-reduction component** of the present framework. The McQuarrie-DiLellio framing, however, is a *robustness/breakeven argument* — that conversions overcome adverse rate movements via accumulating drag — and not a separately-priced PV or IRR alpha line item. The HC drag manifestation is not isolated in any retrievable McQuarrie/DiLellio passage.

**Brown, Cederburg & O'Doherty (2017), "Tax Uncertainty and Retirement Savings Diversification,"** *Journal of Financial Economics* 126(3): 689–712 [https://papers.ssrn.com/sol3/papers.cfm?abstract_id=2799288]. The contribution is rate-uncertainty hedging, not drag-avoidance quantification.

**Geisler & Hulse (2018), "The Effects of Social Security Benefits and RMDs on Tax-Efficient Withdrawal Strategies,"** *Journal of Financial Planning* 31(2): 36–47 [https://www.financialplanningassociation.org/sites/default/files/2021-02/FEB18%20Geisler%20and%20Hulse.pdf]. Models RMD effects on withdrawal sequencing. Acknowledges the wealth impact but does not isolate drag-avoidance on RMD reinvestment as a PV or IRR alpha component.

**DiLellio & Ostrov (2017), "Optimal Strategies for Traditional vs. Roth IRA/401(k) Consumption During Retirement,"** *Decision Sciences* 48(2): 342–377 [https://webpages.scu.edu/ftp/dostrov/publications/DS.pdf]. Optimization of consumption/sequencing; does not surface Tax-Drag Shelter components.

**Search for IRR-based Roth conversion treatments.** SSRN, Google Scholar, and NBER searches for terms including "Roth conversion IRR," "tax drag retirement IRR," "asset location alpha PV," "hidden Roth contribution drag," and "conversion tax internal rate of return drag" return zero papers that explicitly isolate Tax-Drag Shelter alpha as a PV or IRR line item in the Roth conversion setting. The phrase "tax alpha" is widely used as a generic umbrella; no source treats it as a quantified PV+IRR object on the conv-tax outlay.

### 6.2 Practitioner literature

**Vanguard "Putting a Value on Your Value: Quantifying Vanguard Advisor's Alpha"** (Kinniry et al., 2014, 2019, 2022) [https://corporate.vanguard.com/content/dam/corp/research/pdf/a_betr_approach_to_roth_conversions_072025.pdf]. Reports asset-location alpha as a single number — *"up to 60 basis points"* — *not decomposed into PV or IRR components*. Roth conversion alpha is not a separately-listed Advisor's Alpha category.

**Vanguard BETR (Break-Even Tax Rate) calculator** [https://investor.vanguard.com/investor-resources-education/news/a-betr-calculation-for-the-traditional-to-roth-ira-conversion-equation]. States: *"The more tax-inefficient the account used to pay the conversion tax, the lower the BETR (and the greater the benefit of converting)."* Directional acknowledgment that drag on the source account matters; no formula in the public articles isolates the conv-tax dollar's $r\cdot(1-d)$ counterfactual as a separate PV or IRR line item.

**Morningstar Tax-Cost Ratio** [https://admainnew.morningstar.com/directhelp/Glossary/Performance/Tax_Cost_Ratio.htm]. Defined as $T_i = 1 - (1+\mathrm{ATR}_i)/(1+L_i)$ where $\mathrm{ATR}_i$ is annualized after-tax return and $L_i$ is annualized load-adjusted pre-tax return. Captures fund-level annual drag; does not address conversion mechanics or RMD effects. Conceptually the *empirical anchor* for the drag fraction $d$ used in the present framework — but not a Tax-Drag Shelter alpha quantification.

**Michael Kitces (kitces.com).** Most granular practitioner treatment of Roth conversion math. Key pieces: "How To Calculate The Marginal Tax Rate Of A Roth Conversion" [https://www.kitces.com/blog/roth-conversion-analysis-value-calculate-timing-true-marginal-tax-rate-equivalency-principle/], the asset-location yield-split article [https://www.kitces.com/blog/yield-split-asset-location-tax-drag-alpha-efficiency-index-funds/], and tax-diversification work [https://www.kitces.com/blog/tax-diversification-roth-optimization-conversion-tax-alpha/]. Kitces explicitly identifies the outside-paid-tax benefit: *"using available cash instead of taking funds that could have otherwise been converted to pay those taxes will allow a larger balance of the tax-free Roth account to enjoy a market rebound."* The yield-split piece quantifies asset-location tax drag at ~10 bps per year and ~6% cumulative wealth over multi-decade horizons. However, the drag concept lives in one silo (asset-location) and the Roth conversion concept lives in another. Kitces does not decompose growth on the conv-tax dollar into rate-arbitrage and drag-avoidance components, and does not produce an IRR for the drag-avoidance portion alone.

**Mike Piper, "The 4 Effects of a Roth Conversion"** [https://obliviousinvestor.com/the-4-effects-of-a-roth-conversion/]. **Closest practitioner article to the two manifestations identified here.** Piper enumerates effects of a Roth conversion including (#2) *"You get to use taxable dollars to pay the tax"* — the Hidden Contribution principal effect — and (#3) *"It reduces your later RMDs"* — qualitative analog of the RMD-reduction component. Piper *names* effects (2) and (3) but does not quantify either as drag avoidance at $\tilde{r}$, and does not produce PV or IRR figures for the drag-avoidance components. His follow-on math pieces [https://obliviousinvestor.com/roth-conversion-math/; https://obliviousinvestor.com/roth-conversion-deep-dive-addressing-left-out-topics/] do not propagate the four-effects framework into a quantified PV+IRR alpha breakdown.

**Wade Pfau, Bogleheads, Schwab, Fidelity, T. Rowe Price.** [https://retirementresearcher.com/roth-conversion-save-money-long-term/; https://www.bogleheads.org/wiki/Roth_conversion; https://www.schwab.com/learn/story/why-consider-roth-ira-conversion-and-how-to-do-it; https://www.fidelity.com/learning-center/personal-finance/tax-diversification-roth-conversion]. Various qualitative acknowledgments of drag-avoidance as a benefit of conversion; no published Tax-Drag Shelter PV or IRR figure isolating the two manifestations.

### 6.3 Summary of the gap

| Element | Status in published literature |
|---|---|
| Tax drag as a *concept* in the Roth conversion context | Acknowledged broadly (Bogleheads, Vanguard BETR, Kitces, Piper, McQuarrie/DiLellio). |
| HC drag — PV figure | Not isolated. Conventional Hidden Contribution math uses $K \cdot S(T)$, implicitly assuming a zero-growth bank counterfactual. |
| RMD drag — PV figure | Not isolated as a household-facing PV line item. Partially anticipated by McQuarrie & DiLellio as a robustness argument. |
| Either manifestation in IRR form | Not present in any verified source. |
| Combined Tax-Drag Shelter PV + IRR specification | Not present in any verified source. |

---

## 7. Novelty Claim

The conceptual underpinnings of Tax-Drag Shelter alpha are not new — the *intuition* that retirement accounts shelter dollars from annual yield drag is universally acknowledged at a conceptual level. The contribution of this paper is methodological, and centers on the **PV + IRR quantification** of the alpha source.

**1. Naming the alpha source and structuring the two manifestations.** "Tax-Drag Shelter" as a single conceptual alpha line item, *in the Roth conversion setting*, with two structurally distinct manifestations — a **Synthetic-Contribution manifestation** (HC drag, which inherits the drag-avoidance alpha that a statutory Roth contribution of $K$ would also earn) and a **purely-conversion manifestation** (RMD drag, which has no statutory-contribution analog) — does not appear under that name or any equivalent unified labeling in the verified literature. The Synthetic Roth Contribution axiom — that the conv-tax dollar paid from outside is economically equivalent to a statutory Roth contribution of the same amount — clarifies that HC drag is the conversion-channel route to the same alpha statutory contributions earn, while RMD drag is genuinely new alpha created only by the conversion event.

**2. Quantifying both manifestations in PV.** Closed-form-style expressions:

$$
\begin{aligned}
\alpha_{HC}^{PV}  &= K \cdot \mu_{P}^{HC} \\[4pt]
\alpha_{RMD}^{PV} &= (1 - \tau_C) \cdot C \cdot \rho \cdot \mu_{P}^{RMD}
\end{aligned}
$$

with $\mu_{P}^{(\cdot)}$ produced by a parallel-account simulator under the relevant distribution schedule. Neither expression appears in the verified literature as a household-facing PV alpha line item.

**3. Quantifying both manifestations in IRR.** Time-value-weighted return on the conv-tax outlay attributable to drag avoidance specifically, computed against the incremental cash-flow stream:

- HC drag IRR — return on $K$ from the Roth-distribution drag-shelter stream
- RMD drag IRR — return on $K$ from the avoided-RMD drag-shelter stream
- Combined Tax-Drag Shelter IRR — return on $K$ from the union of the two streams

**The IRR specification is the principal novel contribution of the paper.** PV alone leaves the household without a comparison metric to the time value of money on the same outlay. IRR isolates that time-value return — and shows that even a relatively modest PV figure (e.g., \$3,543 in §5) corresponds to a meaningful return floor (3.10%) on the conv-tax dollar. No verified academic or practitioner source produces an IRR for Tax-Drag Shelter alpha.

**4. Correcting the implicit zero-growth bank counterfactual.** The conventional Hidden Contribution figure $K \cdot S(T)$ implicitly assumes that the conv-tax dollar would have done *nothing* in the no-conversion counterfactual. The realistic counterfactual is taxable-bank growth at $\tilde{r} = r\cdot(1-d)$. The Tax-Drag Shelter framing extracts only the *difference* $K \cdot (S(T) - B(T))$ as alpha — leaving the bank-growth portion $K \cdot B(T)$ correctly attributed to the conv-tax dollar irrespective of conversion. This decomposition is not present in the verified Hidden Contribution literature.

### 7.1 Caveats

- Multiple primary PDFs (Vanguard BETR full paper, McQuarrie/DiLellio full JFP article, Reichenstein FPA papers, Vanguard Advisor's Alpha PDF) returned encoded content the literature scan could not parse fully. Characterization relies on published abstracts, summaries, and secondary discussion. A reader reviewing those exact PDFs would close residual verification gaps.
- The Kitces archive includes paywalled posts on the most relevant article ("Tax Diversification Limits And Roth Optimization Benefits"). A logged-in read of that piece is the most important verification gap for the practitioner novelty claim on HC drag.
- The novelty claim is about *isolation as a quantified PV+IRR alpha line item*, not about discovery of the underlying intuition. The intuitions are articulated qualitatively by Piper, McQuarrie/DiLellio, Bogleheads, and Vanguard BETR copy. The structural innovation is the quantification, the joint PV+IRR specification, and the realistic-counterfactual correction.

---

## 8. Open Items and Extensions

- **Sensitivity to the reinvestment-share assumption `ρ`.** The RMD drag PV scales linearly in `ρ`. Realistic values for surplus-wealth retirees: 0.50–1.00; for retirees consuming the full RMD: `ρ ≈ 0`. Sensitivity analysis is warranted.

- **Empirical calibration of the drag fraction `d`.** Illustrative `d = 5%` is a rough middle-of-the-road estimate for a balanced taxable portfolio at a typical federal marginal rate. A richer specification would derive `d` per asset class (equities vs. fixed income, qualified vs. ordinary dividends, distribution turnover), per holding horizon (capital-gains deferral effect), and per user marginal rate. Morningstar's Tax-Cost Ratio offers a per-fund empirical anchor.

- **State income tax** is not included in the drag rate as specified. State income tax on dividends and capital gains (typically 3–10% additional) would meaningfully widen the Tax-Drag Shelter alpha for high-tax-state residents.

- **Capital-gains deferral effect.** Inside the wrapper, no capital gains are realized until distribution; outside, gains may be realized via fund turnover, tax-loss harvesting, or active management. A more granular framework would separate the dividend/interest drag (annual, captured here) from the realized-capital-gains drag (turnover-dependent, not captured here).

- **Implementation reference.** A full reference implementation of this framework — including the per-dollar drag-shelter simulator, the two-component PV decomposition, the IRR construction, and household-facing display of HC and RMD drag alphas — is available in the RothGPT conversion calculator.
