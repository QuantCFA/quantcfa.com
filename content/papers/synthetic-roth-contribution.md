# The Synthetic Roth Contribution: Isolating and Valuing the Wrapper-Migration Component of Outside-Funded Roth Conversions

**Steven Cheshire, CFA**
Draft: 2026-10-24

---

## Abstract

Roth conversion analysis usually values only the arbitrage between the conversion-year tax rate $t_C$ and the time-weighted distribution tax rate $t_D$. When the conversion tax is paid from outside the retirement account, after-tax dollars equal to the tax also migrate from a taxable wrapper into the tax-free Roth, where they grow tax-free for the life of the account, including any beneficiary period. Cheshire (2025, SSRN 5205840) named this the **Synthetic Roth Contribution** (SRC). We formalize it as a separable component with its own PV / IRR identity, distinct from the rate-arbitrage Core; its lasting value is tax-drag avoidance.

We prove algebraically that $\mathrm{PV}_r(\mathrm{Outside} - \mathrm{Inside}) = 0$, including the year-0 tax outflow, for any distribution schedule that depletes the account, and verify it in paired engine runs. Under Fixed Annuity distributions, the Outside − Inside increment is \$1,695.86 in all 20 years, matching the prediction to the cent; under RMD distributions, varying increments discount to within 1 cent of the SRC over 30 years.

Prior research recognizes the advantage of Outside funding, and Reichenstein and Meyer (2017) derive the wrapper differential explicitly; existing valuation frameworks net it into a single conversion measure. Isolating it also shows that a cumulative-distribution break-even age need not coincide with economic break-even, because the undistributed Roth balance remains a household asset.

---

## 1. Introduction

When a Roth conversion's tax bill is paid from outside the retirement account, after-tax dollars equal to that tax migrate from a taxable wrapper into a tax-free one, where they compound untaxed for the life of the account and any beneficiary period. We call this transfer the **Synthetic Roth Contribution** (SRC). Pay the same tax from inside the account and no such migration occurs — the Roth holds only the converted balance net of tax. The two funding paths produce different end-of-life wealth whenever taxable assets suffer drag, and the gap is not the spread arbitrage. It is the SRC's tax-drag-avoidance alpha.

The Roth-conversion literature values conversions mainly through the spread between the conversion-year rate $t_C$ and the time-weighted distribution rate $t_D$. Prior work recognizes the advantage of Outside funding, most explicitly as a drag differential between wrappers (Reichenstein and Meyer 2017), but does not isolate it as a separate component with its own per-year cash flow, PV, and IRR identity, additive to the rate-arbitrage Core. This paper does.

Cheshire (2025, SSRN 5205840) introduced the SRC framework; §1B summarizes. This paper extends it with a schedule-independent algebraic result and numerical illustrations, and generalizes to RMD-method distributions.

**Contributions of this paper.**

1. **Formal definition and separable decomposition.** The SRC is defined as the conversion-tax amount $K$ migrating from the bank account into the Roth wrapper under Outside funding, with its own PV / IRR identity distinct from the rate-arbitrage Core, the Medicare-surcharge-reduction alpha, and the RMD tax-drag alpha.

2. **Algebraic proof of the matched-rate PV identity, for any closed distribution schedule.** When the discount rate equals the portfolio rate and the schedule depletes the account, $\mathrm{PV}_r(\mathrm{Outside} - \mathrm{Inside}) = 0$ by closure; the level-payment annuity identity is a special case (§4).

3. **Numerical illustration under both Fixed Annuity and RMD distributions.** Paired Inside/Outside scenarios confirm the algebraic identity — the constant \$1,695.86/year increment under FA (§5) and a per-year-varying but PV-canceling increment under RMD (§5B), closing the year-0 outflow to within 1 cent over a 30-year horizon.

4. **Wrapper Migration Neutrality as a generalizing principle.** Pure wrapper migrations at constant household wealth have zero NPV at the portfolio rate. The SRC is one instance of this principle (§3.5).

---

## 1B. Literature Review

**Formal conversion valuation.** McQuarrie and DiLellio (2023) compare Outside and Inside funding directly and attribute Outside's advantage to tax-free versus taxed growth on the tax dollars, measured as a future-value gap that widens with the horizon. McQuarrie (2024) values conversions by NPV, entering the conversion tax as a year-0 outlay offset by tax avoided on future RMDs, and reports the age at which a cumulative cash-flow NPV turns positive. Passman, Wong, and Dickson (2025) express the decision as a break-even tax rate (BETR); paying from a taxable account lowers it below the current rate because it moves savings from a taxable account into the Roth. Each framework nets the funding effect into a single conversion measure (an ending-value gap, a cumulative cash-flow NPV, or a break-even rate) rather than reporting it as a separate component. Appendix B reconciles two of these frameworks with the decomposition here.

**Recognition of wrapper effects.** Reichenstein and Meyer (2017) give the clearest prior account. Treating the Traditional account as a partnership with the government, they show that Outside funding leaves $K$ more dollars growing at the pre-tax return in the Roth and $K$ fewer at the after-tax return in the taxable account, a terminal gap of $K(1+r)^n - K(1+r_d)^n$: the future value of the drag-avoidance alpha priced in §6. They also show that Outside funding can favor conversion even when the conversion-year rate exceeds the withdrawal rate. Haghani and White (2025), relaying Nalebuff, observe that tax paid from outside the IRA *"is just like adding to the IRA"* and value it as a single future value under constant tax rates. Stowe, Fodor, and Stowe (2013) find that Outside funding raises terminal value by about 3 percentage points, treated as a parameter sensitivity.

**Practitioner treatments.** Practitioner analyses (Kitces 2021; Van Deusen and Kitces 2022; Piper n.d.) also examine the advantages of Outside funding, generally without isolating the SRC as a separately valued component.

**This paper.** Cheshire (2025) introduced the Synthetic Roth Contribution term and decomposed conversion-tax payback into SRC plus tax-rate arbitrage. Cheshire (forthcoming) values the tax drag the SRC avoids; §6 applies that valuation to $K$.

Prior research recognizes the economic advantage of Outside-funded conversions, sometimes explicitly identifying the migration of taxable assets into the Roth wrapper. The contribution here is isolation, proof, and decision attribution rather than discovery of the mechanism: the present-value identity governing the migrated amount under closed distribution schedules (§4–§5B), its separation from conversion-rate arbitrage, the separate value of the tax-drag advantage (§6), and the separation of the funding decision from the conversion decision (§7).

---

## 2. Notation and Setup

| Symbol | Definition |
|--------|------------|
| $C$ | Pre-tax dollars converted from Traditional to Roth |
| $t_C$ | Effective marginal conversion-year tax rate |
| $K$ | Federal tax owed on the conversion $= C \cdot t_C$ |
| $t_D$ | Time-weighted marginal distribution tax rate |
| $r$ | Portfolio return assumption (used for compounding and as discount rate) |
| $r_d$ | Effective return rate on a taxable account, after tax drag; $r_d = r \cdot (1 - d)$ |
| $d$ | Annual drag fraction on a taxable account's return |
| $N$ | Distribution period (years) |
| $\mathrm{AF}(r, N)$ | Annuity-payment factor at rate $r$ over $N$ years; $\mathrm{AF}(r, N) = r\,/\,(1 - (1 + r)^{-N})$ |
| $\mathrm{PVA}(r, N)$ | Present-value annuity factor; $\mathrm{PVA}(r, N) = (1 - (1 + r)^{-N})\,/\,r = 1\,/\,\mathrm{AF}(r, N)$ |
| ATCF | After-tax cash flow from retirement-account distributions: Traditional distribution + Roth distribution − Federal tax (includes Soc Sec tax). ΔATCF = year-by-year ATCF difference between conversion and no-conversion baseline. |

**Two scenarios:**

- **Inside funding:** Tax $K$ is settled from inside the Traditional account (a separate pre-tax distribution in the conversion year). The Roth receives $C - K$. No taxable-account dollars are spent.
- **Outside funding:** Tax $K$ is settled from a taxable account in the conversion year. The Roth receives the $C - K$ converted amount plus the $K$ tax payment amount.

In both scenarios the Traditional balance is reduced by $C$. The two paths differ only in the source of the $K$ tax payment: a separate inside-the-Traditional pre-tax distribution (Inside funding) or a payment from the bank account (Outside funding).

---

## 3. The Synthetic Roth Contribution

### 3.1 The Balance-Sheet View

A Traditional retirement account is conventionally reported as a gross pre-tax balance. This presentation obscures the underlying economic structure: every dollar in a Traditional account carries an **embedded deferred-tax liability** to the tax authority, owed at whatever marginal rate $t_D$ applies when that dollar is eventually distributed. The Traditional account's *net economic value* to the household is the gross balance minus the liability.

For a \$100,000 Traditional balance at an expected future distribution rate $t_D = 25\%$:

| Asset | Gross | Embedded liability | Net after-tax value |
|---|---|---|---|
| Traditional | \$100,000 | \$25,000 | \$75,000 |

Suppose the household additionally holds \$22,000 of after-tax cash in a bank account, earmarked to settle the deferred tax liability when it eventually comes due — the after-tax reserve set aside against the tax bill. The broader balance sheet at the conversion-readiness moment is then:

| Asset | Pre-tax | After-tax (net of liability) |
|---|---|---|
| Trad | \$100,000 | \$75,000 |
| Bank (after-tax cash, liability offset) | \$22,000 | \$22,000 |
| **Total net after-tax wealth** | | **\$97,000** |

The \$22,000 bank holding is a *liability offset*: a pre-funded reserve against the deferred tax that will eventually be owed on the Traditional balance.

### 3.2 Conversion as Liability Settlement

A Roth conversion at conversion-year marginal rate $t_C = 22\%$ *extinguishes* the embedded deferred tax liability by paying $t_C \cdot C$ = \$22,000 to the tax authority immediately. The household then holds the converted balance in the Roth wrapper, which carries *no* embedded deferred tax liability — every Roth dollar is fully owned, after-tax, and tax-free in distribution.

Because $t_C = 22\%$ is less than the assumed $t_D = 25\%$, the \$22,000 immediate settlement extinguishes a \$25,000 liability. The household captures the \$3,000 difference as a balance-sheet gain — the rate-arbitrage Core of the conversion's NPV.

In the balance-sheet framework, the conversion tax is therefore a *settlement of a pre-existing liability* at a discount to the liability's expected face value, not a separate wealth expense. This distinction is structural and load-bearing for everything that follows.

### 3.3 Two Tax Settlement Options

The \$22,000 settlement can be sourced two ways:

**Option A — Inside funding.** The settlement is paid from inside the Traditional account. The Traditional gross is reduced by $C$ = \$100,000: \$78,000 of converted principal moves to Roth (the Traditional conversion amount net of the distributed conversion tax amount), and the \$22,000 distribution is paid to the IRS. The \$22,000 bank account asset is untouched.

**Option B — Outside funding.** The settlement is paid from the bank account. The Traditional gross is reduced by $C$ = \$100,000: the \$78,000 of converted principal plus the \$22,000 tax amount funded from the bank account leave \$100,000 in the Roth and \$0 in the bank account.

Taxable income is \$100,000 under either option: under Inside funding, the \$22,000 sent to the IRS is itself a taxable distribution (penalty-free at age 59½ or older; see §7), so the tax is \$22,000 either way.

Both options settle the same deferred-tax liability and capture the same \$3,000 rate-arbitrage gain, leaving the same \$100,000 total household wealth:

| | Roth (tax-free) | Bank (after-tax) | Total net after-tax wealth |
|---|---|---|---|
| **Inside payment** | \$78,000 | \$22,000 | **\$100,000** |
| **Outside payment** | \$100,000 | \$0 | **\$100,000** |

The \$22,000 Outside/Inside **wrapper-composition** difference — \$22,000 more in the Roth, \$22,000 less in the bank, identical total after-tax wealth — *is* the Synthetic Roth Contribution. Outside payment has not "cost" the household \$22,000; it has *moved* \$22,000 of after-tax cash from a taxable bank account into a tax-free Roth.

### 3.4 Symmetry to Statutory Roth Contributions

A household that contributes \$22,000 to a Roth 401(k) moves \$22,000 of after-tax cash from a bank account into a Roth. The income tax paid on the earnings that produced that cash is not treated as a cost of the contribution; it was owed on those earnings regardless.

The SRC is the same wrapper migration, performed through the Outside tax payment. The tax paid to settle the deferred Traditional liability is not a "conversion cost" any more than the income tax paid on W-2 earnings is a "Roth contribution cost." Both settle obligations that were always owed, both leave after-tax wealth unchanged at the migration moment, and both give the migrated dollars tax-free compounding and inherited-Roth treatment. The relevant distinction is when the income tax is settled: at earning time (statutory contribution) or at conversion time (SRC).

### 3.5 Wrapper Migration Neutrality

**Wrapper Migration Neutrality.** Moving after-tax wealth between tax wrappers at equal contemporaneous value is a reallocation, not an immediate wealth expense. The subsequent economic value depends on the relative characteristics of the wrappers, including their tax treatment.

The SRC and statutory Roth contributions illustrate the principle: contemporaneous wealth is conserved at migration, while differences between the wrappers determine the economic consequences.

### 3.6 Definition

The Synthetic Roth Contribution (SRC) is the conversion-tax amount ($K$) that migrates from the bank account into the Roth wrapper via the conversion-tax payment in an Outside-funded conversion. It is economically equivalent to a same-day statutory Roth contribution of $K$, but is not subject to IRS annual contribution limits.

### 3.7 Properties

**Property 1 — Wrapper transition.** Under Outside funding, the household ends the conversion year with $K$ fewer dollars in the taxable wrapper and $K$ more dollars (relative to the Inside scenario) in the Roth wrapper.

**Property 2 — Tax-drag elimination.** The $K$ dollars now grow at the Roth's tax-free rate $r$ rather than the taxable wrapper's after-drag rate $r_d = r \cdot (1 - d)$. This benefit is approximately $K \cdot (r - r_d)$ per year if the $K$ cash would have remained invested at $r_d$.

### 3.8 What the SRC Is Not

The SRC is not the rate-arbitrage, $(t_D - t_C) \cdot C$, captured at conversion — present in both Outside and Inside settlement. The SRC appears only under Outside settlement, and only as a wrapper-composition difference — not a change in net after-tax wealth.

---

## 4. Algebraic Proof: PV Equivalence at the Portfolio Rate

§3 established the SRC as a purchase of Roth balance at par: $K$ leaves the bank and $K$ enters the Roth. An asset bought at par and discounted at its own return has zero NPV; this section proves the SRC's distribution stream meets that test under any schedule that depletes the account.

A distribution schedule is **closed** when it fully depletes the account at year $N$. For an initial balance $B_0$ earning $r$, the balance recursion is

$$B_t = B_{t-1}(1+r) - D_t.$$

Dividing by $(1+r)^t$, summing over $t = 1, \ldots, N$, and imposing $B_N = 0$ gives the closure identity:

$$B_0 = \sum_{t=1}^{N} \frac{D_t}{(1+r)^t}.$$

The result holds for any closed distribution schedule, regardless of the timing or size of individual payments.

Under Outside funding the Roth holds an additional $K$. Each year, every distribution rule used here withdraws the same fraction of each dollar in the balance, so the Roth distributions attributable to $K$, $D^K_t$ (Outside minus Inside), form a closed schedule on $K$ alone. Applying closure:

$$\mathrm{NPV}_{SRC} = -K + \sum_{t=1}^{N} \frac{D^K_t}{(1+r)^t} = -K + K = 0.$$

Under Fixed Annuity distributions, $D^K_t = K \cdot \mathrm{AF}(r, N)$ and the result reduces to $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$. §5 and §5B verify it numerically under FA and RMD.

The identity requires that $K$ earn $r$, follow the same fractional schedule as the rest of the Roth balance, and deplete with it; no difference in fees, returns, or distribution treatment may separate $K$ from that balance.

Zero NPV is not zero cash flow: under FA at $r = 7\%$, $N = 20$, $K$ generates $K \cdot \mathrm{AF}(r, N) \cdot N = 1.888K$ in nominal lifetime payouts — $K$ plus its time-value return.

**The SRC's lasting value:** $K$ compounds tax-free at $r$ instead of suffering drag at $r_d$. The resulting tax-drag-avoidance alpha is the present value of the distribution gap that differential opens over the schedule (Property 2; §6).

**Scope of the PV identity.** The identity assumes the discount rate equals the portfolio rate, the convention used by McQuarrie (2024), Passman, Wong, and Dickson (2025), and Reichenstein and Meyer (2017). If a household discounts at $\rho \neq r$, the SRC's NPV is negative for $\rho > r$ and positive for $\rho < r$.

**Present value versus net present value.** The SRC's distribution stream has a present value of exactly $K$: under FA, \$1,695.86 × $\mathrm{PVA}(7\%, 20)$ = \$17,965.96; under RMD, the varying increments discount to \$17,966.01 (§5B.3). That stream is what the household acquires. Its *net* present value is zero because the household paid $K$ to acquire it — equivalently, its internal rate of return is exactly $r$. Zero NPV therefore records that the SRC was acquired at fair value, not that nothing was acquired: the conversion-tax outlay is economically a purchase rather than a wealth cost. Two consequences follow. Under the modeled assumptions, value above par arises only from the wrapper differential (§6), so the alpha vanishes at $d = 0$. And because the outlay does not reduce contemporaneous household wealth, a cumulative-distribution break-even age need not coincide with economic break-even.

---

## 5. Numerical Illustration: Paired Inside / Outside Scenarios (Fixed Annuity)

We compare Inside vs Outside simulation runs using identical inputs.

**User profile:**
- Age 69, Single filer
- Traditional savings: \$1,000,000; Roth savings: \$0

**Shared inputs (both scenarios):**
- Distribution method: Fixed Annuity (FA), start age 70
- 20-year owner life expectancy
- Portfolio return assumption: 7.00%
- Inflation assumption: 2.50%
- Social Security benefit: \$50,000/yr starting age 70, 2.50% COLA
- Medicare coverage: Part A only (no income-related surcharges)
- No other taxable income in conversion, distribution, or beneficiary years
- Taxable-account drag $d$ = 5%; freed-up distributions are not reinvested

**Conversion (both scenarios):** $C$ = \$126,745.28, fills through 22% cumulative bracket under 2026 law, including the OBBBA senior deduction. $K$ = \$17,966.00 ($t_C = 14.17\%$). Time-weighted $t_D = 22.62\%$. Annuity-factor multiple = 1.88786.

Medicare surcharges and RMD-reduction tax drag are excluded to isolate the SRC. Both depend only on MAGI and the Traditional distribution path, which are identical under Inside and Outside funding.

**Scope of what is verifiable here.** $K$ is taken as an input to the SRC analysis. Every SRC-specific result below — the constant per-year increment, the present-value identity, the payout multiple, and the drag-avoidance alpha — follows from $K$, $r$, $N$ and $d$ alone, and is reproducible by hand from those four values, together with the IRS Uniform Lifetime divisors in the RMD case. The surrounding ATCF figures, and the derivation of $K$ from $C$ at $t_C$, are output of a full tax model computing bracket fill, Social Security taxation and Medicare surcharges; that model is not the subject of this paper, and its parameterization is not required to verify any claim made here.

**Rounding.** Dollar figures are reported to the cent where they participate in a displayed reconciliation (§5.3, §5B.3, §6) and to the nearest dollar elsewhere.


### 5.1 Year-by-Year ATCF Deltas — Inside vs Outside

For each year we compute ΔATCF = ATCF(conversion) − ATCF(no-conversion baseline) for both Inside and Outside scenarios.

| Year | Age | Inside ΔATCF | Outside ΔATCF | Outside − Inside (nom) | Outside − Inside (PV @ 7%) |
|------|-----|---|---|---|---|
| 2026 | 69 | \$0 | −\$17,966 | −\$17,966 | −\$17,966 |
| 2027 | 70 | \$1,270 | \$2,966 | \$1,696 | \$1,585 |
| 2028 | 71 | \$1,229 | \$2,925 | \$1,696 | \$1,481 |
| ⋯ | ⋯ | ⋯ | ⋯ | \$1,696 | ⋯ |
| 2046 | 89 | \$936 | \$2,632 | \$1,696 | \$438 |
| **Total incl. 2026 tax** |  | **\$19,626** | **\$35,578** | **+\$15,951** | **+\$0** |

Totals include all 21 years (2026–2046). Excluding the 2026 tax payment, Outside totals \$53,544 and Outside − Inside totals \$33,917, the SRC's nominal lifetime payout (Appendix A).

### 5.2 Numerical Confirmation: The Constant +\$1,695.86 / Year Increment

The Outside − Inside column is constant at \$1,695.86 every year, matching the algebraic prediction:

$$
K \cdot \mathrm{AF}(r = 7\%,\, N = 20) \;=\; \$17{,}966 \times 0.094393 \;=\; \$1{,}695.86 \quad\checkmark
$$

where $\mathrm{AF}(7\%, 20) = 0.07\,/\,(1 - 1.07^{-20}) = 0.094393$.

### 5.3 The PV Identity

The Outside − Inside (PV @ 7%) column sums to approximately zero across all 21 rows — numerical confirmation of the algebraic identity proved in Section 4. The −\$17,966 year-0 outflow is offset by the 20-year constant \$1,696 distribution stream PV:

$$
\begin{aligned}
\text{PV of 20 annual SRC distributions}
  &= \$1{,}695.86 \times \mathrm{PVA}(7\%, 20) \\[4pt]
  &= \$1{,}695.86 \times 10.594 \\[4pt]
  &\approx \$17{,}966 \quad\checkmark
\end{aligned}
$$

Equivalently, Inside ΔATCF total PV at 7% (\$10,701) equals Outside ΔATCF total PV at 7% (\$10,701).

The owner paid \$17,966 at year 0 and received its PV equivalent back over 20 years — the identity confirmed; SRC IRR = 7% portfolio rate. The rate-arbitrage spread is identical between Inside and Outside (\$10,701 PV). When the conversion's rate-arbitrage cash flows are included alongside the SRC distributions, the IRR measured against the \$17,966 Outside tax outlay rises to 14.15%. Inside receives the same rate-arbitrage cash flows with no outlay from the bank account, so the higher IRR reflects the conversion's rate-arbitrage benefit, not an additional return attributable to Outside funding.

---

## 5B. Verification Under RMD: Paired Inside / Outside Scenarios

Closure (§4) proves the identity for any depleting schedule. A second paired simulation, with all inputs identical except the distribution method set to RMD-Only, checks it where the per-year increment varies and shows how the SRC manifests when the owner's death leaves a balance for beneficiaries.

### 5B.1 Setup

All §5 inputs apply except distribution method: $C$ = \$126,745.28, $K$ = \$17,966, 7.00% portfolio return, 20-year life expectancy; time-weighted $t_D$ = 25.44%. RMDs run ages 73–92 using IRS Uniform Lifetime Table divisors; ages 93–102 use level annuity distributions under SECURE Act's 10-year beneficiary period. Roth accounts have no RMDs but are modeled identically to Traditional here for Outside-vs-Inside comparability.

### 5B.2 Year-by-Year ΔATCF — Inside vs Outside Under RMD

Under RMD, the per-year (Outside − Inside) increment varies during the owner RMD period and is constant during the 10-year beneficiary annuity period.

| Year | Age | Inside ΔATCF | Outside ΔATCF | Outside − Inside (nom) | Outside − Inside (PV @ 7%) |
|------|-----|---|---|---|---|
| 2030 | 73 | \$1,361 | \$2,192 | \$831 | \$634 |
| 2031 | 74 | \$1,667 | \$2,558 | \$891 | \$635 |
| ⋯ | | | | | |
| 2035 | 78 | \$1,339 | \$2,495 | \$1,156 | \$629 |
| ⋯ | | | | | |
| 2040 | 83 | \$877 | \$2,467 | \$1,589 | \$616 |
| ⋯ | | | | | |
| 2045 | 88 | \$1,175 | \$3,304 | \$2,129 | \$589 |
| ⋯ | | | | | |
| 2049 | 92 | \$1,451 | \$4,046 | \$2,595 | \$547 |
| **Owner totals** | | **\$24,544** | **\$56,767** | **+\$32,224** | **+\$12,187** |
| 2050 | 93 | \$2,153 | \$6,054 | \$3,901 | \$769 |
| ⋯ | ⋯ | ⋯ | ⋯ | ⋯ | ⋯ |
| 2059 | 102 | \$2,153 | \$6,054 | \$3,901 | \$418 |
| **Beneficiary totals** | | **\$21,533** | **\$60,539** | **+\$39,006** | **+\$5,779** |
| **30-yr total** | | **\$46,077** | **\$117,306** | **+\$71,230** | **+\$17,966** |

Totals include all 30 years, computed from unrounded values; displayed amounts are rounded to the nearest dollar.

### 5B.3 The PV Identity Holds — to the Penny

Adding the year-0 outflow under Outside (−\$17,966), the net PV difference between Outside and Inside scenarios is:

$$
-\$17{,}966.00 \;+\; \$17{,}966.01 \;=\; +\$0.01
$$

A one-cent rounding residual. **The general result of §4 is confirmed numerically under RMD distributions**, despite varying per-year differentials from \$831 to \$2,595 for the owner plus a flat \$3,901 for the beneficiary.

Unlike FA's flat \$1,695.86 per-year differential (§5.2), RMD's varies as the divisor changes annually. Across both methods, the SRC's NPV at the portfolio rate equals zero.

### 5B.4 The Payout Multiple — Closed Form and Numerical Validation

The SRC's lifetime nominal payout = $K$ × payout multiple, a structural property of the distribution schedule. Under FA at $r = 7\%$, $N = 20$, the multiple equals $\mathrm{AF}(r, N) \cdot N$ = 1.88786. Under RMD (20-year owner + 10-year beneficiary), it is determined numerically: the Outside RMD scenario yields 3.9647 (3.964688), giving lifetime payout = \$17,966 × 3.964688 = \$71,229.59.

**3.9647 is a structural constant:** Different sized conversions — filling through the 10%, 12%, or 22% bracket (the \$126,745 case examined here) — each compute the same 3.9647 payout multiple, a structural property of the distribution schedule and input assumptions.

**Numerical validation:** Using the unrounded payout multiple, the 10% bracket conversion predicts a \$71,229.59 lifetime payout for the 22% bracket's \$17,966 SRC, matching the independently computed distribution total to the cent.

**Comparison to FA.** Under FA, $K$ × 1.887859 = \$33,917.27. RMD's 3.9647 multiple is 2.1× larger thanks to the 30-year horizon (vs FA's 20). Both produce zero NPV at the portfolio rate (§4); only nominal totals differ.

---

## 6. SRC Alpha: Tax-Drag Avoidance

**Two comparisons.** §4 compares the present value of the SRC's Roth distributions, discounted at $r$, with the initial investment of $K$: zero NPV, an asset acquired at fair value. This section compares the same distributions with $K$ retained in the taxable account earning $r_d$, the household's alternative. That comparison measures the value added by wrapper migration: positive when $d > 0$ under the modeled assumptions, subject to the step-up caveat below.

Under Outside funding, $K$ compounds at the Roth's $r$ instead of the taxable account's $r_d = r \cdot (1 - d)$, where $d$ is the annual return lost to taxation. Cheshire (forthcoming, *Journal of Financial Planning*) is the primary treatment of tax-drag valuation; this section applies it to $K$. At $d = 5\%$, a 7% portfolio return becomes 6.65% in the taxable account after drag — a 35-bp annual differential producing the SRC's drag-avoidance alpha:

- **FA (§5):** \$485.78 PV / \$917.08 nominal
- **RMD (§5B):** \$1,021 PV / \$5,092 nominal

This alpha accrues only under Outside funding.

**General form.** By closure (§4), the Roth leg's distributions on $K$ have present value exactly $K$. With the taxable counterfactual drawn to zero on the same schedule at $r_d$, for any closed schedule

$$\alpha_{SRC} = K - \mathrm{PV}_r\bigl(D^{\text{taxable}}\bigr).$$

Under FA this is $K\,[1 - \mathrm{AF}(r_d, N)\,\mathrm{PVA}(r, N)]$.

**Sensitivity to $d$.** Alpha scales close to linearly in $d$, so a different drag assumption can be applied by proportion. At $d = 0$ it is exactly zero: with no drag, the funding choice is a matter of indifference on wrapper grounds, and the separable decomposition reports that rather than concealing it.

**Step-up in basis.** Two features of the taxable counterfactual are not modeled above. Funding the conversion from taxable assets may require selling appreciated holdings, realizing gains in the conversion year — a year-0 cost $d$ does not capture. And dollars left in taxable and held until death receive a basis step-up under §1014, so their appreciation escapes income tax entirely, a benefit forgone when those dollars go to the IRS instead. The $d$ used here measures recurring tax on dividends, interest and turnover distributions, which a step-up does not erase; but for a bequest-motivated household holding low-yield, low-turnover assets in taxable, that recurring drag is small and the forgone step-up can outweigh the SRC alpha. Outside funding is not automatically preferred for such households.

---

## 7. Implications: Convert? Then Fund Inside or Outside?

*Under age 59½:* Inside funding requires a pre-tax distribution to cover the conversion tax, generally subject to the 10% additional tax unless an exception applies. This increases the effective conversion cost under Inside funding, reducing its rate-arbitrage alpha relative to Outside funding. Outside funding also captures the SRC's tax-drag advantage. Together, these effects can favor a larger optimal conversion under Outside funding. Outside funding is therefore generally more attractive under age 59½ when Inside funding triggers the penalty.

*At age 59½+:* both funding paths are available, and the household's decision largely separates into two:

- **Conversion (yes/no, how much):** driven by the sum of PV alpha components that don't depend on funding source — the rate-arbitrage Core (spread on converted principal), the Medicare-surcharge-reduction alpha (not decomposed here), and the RMD tax-drag alpha — drag avoided on reinvested RMDs the conversion eliminates (Cheshire, forthcoming). Each follows from the conversion event itself, not from how the tax is paid. Under Inside funding, convert if the sum is PV-positive; under Outside funding, convert if the sum including SRC alpha is PV-positive.

- **Funding (Inside vs Outside), conditional on conversion:** Outside relocates $K$ from a taxable wrapper compounding at $r_d$ to a tax-free wrapper compounding at $r$. The payoff is the tax-drag-avoidance alpha of §6 (\$1,021 PV in the Outside RMD scenario), added to the conversion alpha sum to give total Outside-conversion alpha, subject to the §6 caveats on realized gains and step-up and to the household's liquidity needs. Because SRC alpha increases with the conversion tax paid from Outside funds, Outside funding can support a larger optimal conversion than Inside funding.

For a given conversion amount, Outside funding is a separate capital allocation decision.

---

## 8. Conclusion

The Synthetic Roth Contribution is the economic equivalent of a Roth contribution that occurs when conversion tax is paid from outside the retirement account. It illustrates Wrapper Migration Neutrality: moving after-tax wealth between wrappers at equal contemporaneous value is a reallocation, not an immediate wealth expense. Cheshire (2025, SSRN 5205840) introduced the concept; this paper isolates it and establishes its present-value identity:

1. **Algebraic.** When the discount rate equals the portfolio rate and the schedule depletes the account, the SRC's distributions have present value exactly $K$, so its NPV is zero for any fully depleting distribution schedule, while Outside funding still adds nominal cash flow in every distribution year (§4).

2. **Numerical.** Paired engine runs confirm the identity: a constant \$1,695.86 annual increment under Fixed Annuity distributions, and varying RMD increments whose PV sums to \$17,966.01, within 1 cent of $K$ (§5, §5B).

The SRC's lasting value comes not from its NPV at the portfolio rate, which is zero, but from the tax-drag differential between Roth and taxable wrappers (§6). **Establishing the SRC turns Roth conversion analysis from a tax-rate-spread calculation into a conversion decision plus a wrapper-allocation decision.**

**Implications for practice:**

- **The SRC's tax-drag-avoidance alpha is a separate conversion alpha component**, alongside the rate-arbitrage Core, Medicare-surcharge-reduction alpha, and RMD tax-drag alpha. Calculators that pool funding source into a single conversion value obscure this component, especially when $t_C > t_D$, where the Core is negative but the total can still be positive. Calculators should value the conversion and its funding source separately, treating Outside funding as a Roth contribution of $K$ rather than a cost.

- **Distribution break-even is not economic break-even.** A cumulative-distribution break-even age need not coincide with economic break-even. The undistributed Roth balance remains a household asset, so valuation must account for both distributions and remaining account value.

---

## References

Cheshire, S. (2025). *Roth Conversion Valuation & Mechanics*. SSRN Working Paper 5205840 (April 4, 2025). https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5205840

Cheshire, S. (forthcoming). *Quantifying Tax-Drag Shelter Benefits in Roth Conversions*. *Journal of Financial Planning*. SSRN Working Paper 6879378. https://papers.ssrn.com/sol3/papers.cfm?abstract_id=6879378

Haghani, V., & White, J. (2025). *Size Matters in the Roth IRA Conversion Decision* (relaying analysis by B. Nalebuff). Elm Wealth Research Note (June 18, 2025). Republished by Advisor Perspectives, July 14, 2025. https://elmwealth.com/roth-conversion/

Kitces, M. (2021). *Limits of Tax Diversification and the Tax Alpha of Roth Optimization*. Kitces.com (August 25, 2021). https://www.kitces.com/blog/tax-diversification-roth-optimization-conversion-tax-alpha/

McQuarrie, E. F. (2024). *Net Present Value Analysis of Roth Conversions*. Journal of Financial Planning 37(9): 76–90.

McQuarrie, E. F., & DiLellio, J. (2023). *The Arithmetic of Roth Conversions*. Journal of Financial Planning 36(5): 72–89.

Passman, J. M., Wong, B. C., & Dickson, J. M. (2025). *A "BETR" Approach to Roth Conversions*. Vanguard Research (July 2025). https://corporate.vanguard.com/content/dam/corp/research/pdf/a_betr_approach_to_roth_conversions_072025.pdf

Piper, M. (n.d.). *The 4 Effects of a Roth Conversion*. Oblivious Investor. https://obliviousinvestor.com/the-4-effects-of-a-roth-conversion/

Reichenstein, W., & Meyer, W. (2017). *Valuing Roth Conversion and Recharacterization Options*. Journal of Financial Planning 30(11): 48–56.

Stowe, D. L., Fodor, A., & Stowe, J. D. (2013). *The Value and Use of the IRA Recharacterization Option*. Financial Analysts Journal 69(5): 61–75.

Van Deusen, A., & Kitces, M. (2022). *Leveraging Tax Advantages of Roth Conversion in Bear Markets*. Kitces.com (June 22, 2022). https://www.kitces.com/blog/roth-conversion-bear-market-downturn-tax-savings-cost-conversion-averaging-isolate-ira-basis/

---

## Appendix A: Selected Values from All Four Scenarios

### A.1 Fixed Annuity Distributions

| Field | Inside | Outside |
|-------|---|---|
| Tax Payment Source | Inside | Outside |
| Distribution Method | Fixed Annuity | Fixed Annuity |
| Conversion Amount | \$126,745.28 | \$126,745.28 |
| Conversion Tax | \$17,966.00 | \$17,966.00 |
| Effective $t_C$ | 14.17% | 14.17% |
| Time-Weighted $t_D$ | 22.62% | 22.62% |
| Total ATCF Change (nominal, excluding conversion-year tax) | \$19,626.49 | \$53,543.69 |
| Tax-Rate Spread (PV) | \$10,701.15 | \$10,701.15 |
| Tax-Rate Spread (nominal) | \$19,626.49 | \$19,626.49 |
| Annuity-Factor Multiple | 1.88786 | 1.88786 |
| SRC Tax-Drag (nominal) | \$0 | \$917.08 |
| SRC Tax-Drag (PV) | \$0 | \$485.78 |
| Synthetic Roth Contribution (nominal) | \$0 | **\$33,917.27** |
| Cash-Flow IRR | — (no bank-account outlay) | **14.15%** |

### A.2 RMD-Only Distributions

| Field | Inside | Outside |
|-------|---|---|
| Tax Payment Source | Inside | Outside |
| Distribution Method | RMD-Only | RMD-Only |
| Conversion Amount | \$126,745.28 | \$126,745.28 |
| Conversion Tax | \$17,966.00 | \$17,966.00 |
| Effective $t_C$ | 14.17% | 14.17% |
| Time-Weighted $t_D$ | 25.44% | 25.44% |
| Total ATCF Change (nominal, excluding conversion-year tax) | \$46,076.30 | \$117,305.89 |
| Tax-Rate Spread (PV) | \$14,284.11 | \$14,284.11 |
| Tax-Rate Spread (nominal) | \$46,076.30 | \$46,076.30 |
| Payout Multiple | 3.9647 | 3.9647 |
| SRC Tax-Drag (nominal) | \$0 | \$5,091.72 |
| SRC Tax-Drag (PV) | \$0 | \$1,021.23 |
| Synthetic Roth Contribution (nominal) | \$0 | **\$71,229.59** |
| Cash-Flow IRR | — (no bank-account outlay) | **11.27%** |

**Notes.**

- **Synthetic Roth Contribution (nominal).** Outside FA = \$33,917.27 = $K \times$ 1.887859; Outside RMD = \$71,229.59 = nominal 30-year (Outside − Inside) ATCF delta. RMD's larger nominal SRC reflects longer compounding — RMD's 10-year beneficiary window compounds beyond FA's owner-only 20 years. PV at 7% is identical (\$17,966 = $K$), as the §4 identity requires.
- **Time-weighted $t_D$ is higher under RMD** (25.44% vs FA's 22.62%) because RMD's later, larger distributions push into higher brackets.
- **SRC Tax-Drag** alpha is non-zero only under Outside payment — capturing the value of $K$ dollars avoiding taxable-account drag.
- **The tax-rate spread is identical for Inside and Outside**, confirming funding-source independence under each distribution method.
- **Total ATCF (nominal) differs between scenarios by the SRC's lifetime payout.** Under FA: Outside \$53,544 = Inside \$19,626 + SRC \$33,917.
- **Cash-Flow IRR** for Outside (14.2% FA, 11.3% RMD) exceeds the 7% portfolio rate because the lifetime distributions include the conversion's rate-arbitrage spread. Inside has no outlay from the bank account, so its IRR on this basis is undefined.

## Appendix B: Reconciliation with Prior Valuation Frameworks

**McQuarrie (2024).** Consider a \$100K conversion at 22%, with a 25% expected future distribution rate and a 6% portfolio return:

| | Trad (pre-tax) | Roth (tax-free) | Bank (after-tax) | Total after-tax |
|---|---|---|---|---|
| **Pre-conversion** | \$100K (\$75K AT) | \$0 | \$22K | **\$97K** |
| **Outside payment** | \$0 | \$100K | \$0 | **\$100K** |
| **Inside payment** | \$0 | \$78K | \$22K | **\$100K** |

Outside and Inside leave identical wealth; Outside holds \$22K more in the Roth. McQuarrie's Table 1 follows the Traditional balance the conversion removes, so its figures are the same under either funding path. Col 9, "NPV to This Point," starts at −\$22K and adds the discounted tax avoided on each RMD. Col 8, the 22% tax on each RMD, discounted at 6%, sums to exactly \$22K: the migrated dollars returning as Roth distributions. Net of the rate gain accrued to date (Col 11), Col 9 equals the negative of 22% of the remaining balance $B_t$, in PV, in every row of his table:

$$\text{Col 9}_t - \text{Col 11}_t = -\frac{0.22\,B_t}{1.06^{t}}$$

Col 9 turns positive near age 97 as the Roth balance is depleted; the conversion's full-horizon NPV, however, is determined at year 0. Separately, in his constant-22%-rate scenario, the approximately \$9,000 reported as outstanding at life expectancy is the present value of 22% of the undistributed Roth balance: 0.22 × \$110,825 / 1.06¹⁷ = \$9,054. Discounting at the portfolio rate also excludes the taxable-account drag differential, whose separate valuation is developed in §6.

**Passman, Wong, and Dickson (2025).** In their Jill example (\$100K conversion, 35% current and 24% future rate, \$35K tax paid from savings, Roth multiple 3, taxable multiple 2), netting the grown savings against the conversion side, or adding them to the no-conversion side, gives the same BETR:

    Netted (Vanguard):  $230K = $300K × (1 − BETR)          → 23.3%
    Gross (this paper): $300K = $300K × (1 − BETR) + $70K   → 23.3%

The gross form makes explicit the wrapper migration that the BETR incorporates implicitly. At year 20 the household holds \$300K converting versus \$298K not: the conversion at 35% against a 24% future rate contributes −\$33K, and the \$35K moved into the Roth contributes +\$35K (= \$35K × (3 − 2)).
