# The Synthetic Roth Contribution: Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions

**Working draft — 2026-05-06**

---

## Abstract

The traditional accounting of a Roth conversion's value focuses on the tax-rate arbitrage between the conversion-year tax rate $t_C$ and a future distribution-year tax rate $t_D$. This framing is incomplete. When the conversion tax is paid from outside the retirement account (e.g., from cash, brokerage, or other taxable savings), the conversion produces a second, distinct economic effect: dollars equivalent to the conversion tax migrate from a taxable wrapper into a tax-free wrapper, where they grow free of income tax for the life of the account holder and any beneficiaries. We name this effect the **Synthetic Roth Contribution** (SRC). It is "synthetic" because no contribution is filed with the IRS and no contribution limit is invoked, yet the economic outcome is identical to a contribution. The SRC framework was introduced in Cheshire (2025, SSRN 5205840), which established the concept, defined the SRC as equal to the conversion tax under $\mathrm{MTR}_D = \mathrm{MTR}_C$, and decomposed conversion-tax payback into SRC plus tax-rate arbitrage components with worked numerical examples. The present paper extends that work with four independent rigorous proofs: (1) an algebraic derivation invoking the annuity-payment / present-value identity, (2) an empirical comparison of two production simulation runs under Fixed Annuity distributions (Inside / Outside), (3) a generalization to RMD-Only distributions (Inside / Outside) verifying the algebraic identity holds across distribution methods, and (4) a decomposition-consistency argument showing that the realized end-of-life wealth difference cannot be reconciled without including the SRC term. The empirical evidence is striking: in 20 of 20 distribution years the Outside − Inside per-year ATCF increment is exactly \$1,695.86, matching the algebraic prediction conversion tax × $\mathrm{AF}(r, N)$ = \$17,966 × 0.094393 to the cent. The PV totals at 7% match between the two scenarios to the dollar (\$9,766 each). Under RMD distributions the per-year increment varies from \$831 to \$3,901, yet the integrated PV closes to within four cents of the conversion tax. These proofs converge on a single conclusion: when discounting at the portfolio rate, the Outside-funded conversion produces a present-value-zero side effect at the moment of conversion that nonetheless raises the lifetime nominal cash flow by exactly the conversion-tax amount times the portfolio's annuity-payment factor each distribution year. The SRC's lasting economic value emerges through the tax-drag-differential channel — a PV-positive alpha that the pure rate-arbitrage framing of conventional Roth-conversion analysis fails to surface. We position our contribution against the closest formal prior work (Reichenstein & Meyer 2017's Strategy 2 vs Strategy 3 comparison), the closest practitioner-quantitative work (McQuarrie & DiLellio 2023; Vanguard 2025 BETR), and the closest independent later articulation (Nalebuff / Haghani / White, June 2025), showing how the PV-equivalence identity at the portfolio rate, the separable IRR decomposition, and the cross-method (FA / RMD) generalization extend rather than replicate that body of work. Most directly, the empirical and theoretical results contradict McQuarrie (2024)'s prominent conclusion that the conversion's upfront tax is not recouped until roughly age 97 — long after the taxpayer's death — with all realized payoff accruing to the heirs: that conclusion arises from omitting from the NPV accounting the increase in post-conversion Roth balance from asset migration into the Roth wrapper, treating the conversion tax under Outside payment as a one-sided cost rather than a wrapper migration of the household's own funds into a tax-free wrapper.

---

## 1. Introduction

The economic value of a Roth conversion is conventionally framed as the present-value gain from converting traditional retirement-account dollars at one marginal tax rate today $t_C$ and avoiding distributions at a different (typically higher) marginal tax rate in retirement $t_D$. The "spread arbitrage" gain is the converted amount times $(t_D - t_C)$, modulated by time, growth, and Social Security / IRMAA / tax-drag interactions.

The funding-source effect is treated unevenly in the existing literature: some practitioner writers note informally that paying conversion tax from outside the retirement account adds value to the Roth, while other published work misses or actively misframes the effect, treating the conversion-tax outflow as a one-sided cost rather than as the wrapper migration it actually is. Across both camps, the funding source has not been formalized as a separable, quantifiable economic component with its own per-year cash flow, IRR, and PV identity. The omission matters. When the conversion tax is paid from **outside** the retirement account (Outside funding), the household removes after-tax dollars from a taxable wrapper to settle the conversion tax; the Roth then holds two components — the *Roth-equivalent conversion amount* (the converted balance minus the conversion tax) plus an additional **Synthetic Roth Contribution** equal to the conversion tax, the after-tax dollars that physically migrated from the taxable wrapper into the Roth via the tax-settlement mechanic. When the conversion tax is paid from **inside** the retirement account (Inside funding, only feasible at age 59½+ to avoid the 10% early-withdrawal penalty), no dollars leave the taxable wrapper; the Roth holds only the Roth-equivalent conversion amount, with no Synthetic Roth Contribution. The two paths produce different end-of-life wealth, and the difference is not the spread arbitrage. It is the Synthetic Roth Contribution.

The Synthetic Roth Contribution framework was introduced in Cheshire (2025, SSRN 5205840), which defined the term, established that the SRC equals the conversion tax under $\mathrm{MTR}_D = \mathrm{MTR}_C$, decomposed conversion-tax payback into SRC plus tax-rate-arbitrage components, and provided worked numerical examples across single and married filers under varying savings, Social Security, and return assumptions. The present paper extends that framework with formal algebraic and empirical proofs, generalizes the identity to RMD-method distributions, and engages directly with the closest related literature (§1B).

---

## 1B. Prior Literature

**Reichenstein & Meyer (2017)** — *Valuing Roth Conversion and Recharacterization Options*, Journal of Financial Planning 30(11): 48–56 — is the closest formal academic precedent. Their Section "Models of Roth Conversions versus Retaining Funds in TDAs" defines three strategies: Strategy 1 (retain in TDA), Strategy 2 (convert, pay tax from inside the Roth), Strategy 3 (convert, pay tax from a taxable account). Comparing Strategies 2 and 3, they write: *"At the end of Year 1, Strategy 3 has tV more dollars growing at the pre-tax return of r in the Roth IRA and tV less dollars growing at the after-tax return of R in the taxable account compared to Strategy 2. The longer the horizon between conversion and withdrawal, n, and the larger the difference between the pre-tax and after-tax rate of return, r − R, the larger is the advantage of paying taxes on the Roth conversion out of the taxable account."* Their wrapper-transition value is therefore expressed as $tV(1 + r)^{n} - tV(1 + R)^{n}$.

This is the closest published decomposition of outside-funded conversion value. It differs from the SRC framework in two ways: (a) the value depends on $r > R$ — it operates entirely through tax-drag arbitrage in the alternative wrapper and collapses to zero when the taxable account has no drag, whereas the SRC's PV-equivalence identity (§4) holds at the wrapper level itself and survives even when $R = r$; and (b) Reichenstein & Meyer give an end-of-period FV expression without the per-year cash-flow stream, separable IRR, or PV-equivalence identity $\mathrm{PV}(\text{Outside} - \text{Inside}) = K$ at the portfolio rate that the SRC framework develops.

**Cheshire (2025)** — *Roth Conversion Valuation & Mechanics*, SSRN 5205840 (April 4, 2025) — is the immediate precursor to the present paper. It introduces the Synthetic Roth Contribution term and concept, establishes that the SRC equals the conversion tax when $\mathrm{MTR}_D = \mathrm{MTR}_C$, decomposes conversion-tax payback into SRC plus tax-rate arbitrage, and develops the framework for single and MFJ filers across worked examples (Appendices A–D). What that paper does not contain — and what the present paper supplies — is (a) the formal $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$ algebraic proof of PV equivalence at the portfolio rate; (b) empirical paired-run validation against a production calculation engine to within rounding; (c) the RMD generalization showing the identity holds under non-uniform distribution paths; and (d) the separable IRR decomposition on the Outside-funded cash-flow stream. The present work is positioned as a rigorous extension, not a re-claim, of the framework introduced there.

**Nalebuff, Haghani, & White (2025)** — *Size Matters in the Roth IRA Conversion Decision*, Elm Wealth (June 18, 2025); republished by Advisor Perspectives (July 14, 2025) — is the closest independent later articulation. Their "Reason 1" frames outside-payment as "effectively making the IRA more than 50% bigger" and produces a closed-form $\tau_1 \cdot \tau_2 \cdot \mathrm{Size} \cdot \mathrm{growth}$ heuristic. The framing is substantively aligned with the SRC concept, but the formula collapses ordinary-income and capital-gains rates into one expression and presents the wrapper-transition benefit as a single Benefit and BETR calculation rather than a per-year separable stream with its own IRR and PV identity. This work post-dates Cheshire (2025) by approximately ten weeks; we cite it as parallel evidence that the concept is being independently surfaced, not as priority.

**Passman / Vanguard (2025)** — *A "BETR" Approach to Roth Conversions* — extends the Break-Even Tax Rate framework to take the conversion-tax-payment source as a parameter input. BETR subtracts a "forgone after-tax value" of the conversion-tax dollar from the Roth side of the comparison, collapsing the Roth and outside-cash position into a single net figure; the deduction cancels symmetrically against an analogous implicit omission in the no-conversion counterfactual, so the BETR rate itself is mathematically correct. The convention, however, obscures the wrapper-migration mechanic, and the assumed taxable-account growth rate multiple, $M'$, that the convention treats as a neutral input is in fact the recommendation driver. The SRC framework makes the wrapper migration explicit and quantifies the outside-payment value as a first-class component rather than embedding it in a parameter adjustment.

**McQuarrie & DiLellio (2023)** — *The Arithmetic of Roth Conversions*, Journal of Financial Planning, May 2023 — explicitly tabulates the year-by-year wealth wedge between Inside-paid and Outside-paid branches at constant tax rates (\$1,343 at year 3, \$8,319 at year 10, \$40,386 at year 20 in their illustration), with the drag-rate differential between Roth ($r$) and taxable wrapper ($r' = r(1-t)$) as the underlying source. They report this as a wealth-difference time series rather than as a separable IRR / PV / FV bucket and do not state the PV-equivalence identity. Their numerical evidence is consistent with the SRC framework's predictions and provides additional empirical support for the wrapper-transition mechanism.

**McQuarrie (2024)** — *Net Present Value Analysis of Roth Conversions*, Journal of Financial Planning 37(7/9): 76–90 — argues, on the basis of NPV calculations at the portfolio discount rate, that "it is not all that helpful to pay the tax on conversion from outside funds." This conclusion is, on its face, opposite to the SRC framework's claim that outside-payment activates a separable contribution-equivalent component. The reconciliation is straightforward: McQuarrie's NPV identity at the portfolio rate is precisely the PV-equivalence identity proved in §4 — `PV(Outside − Inside) = 0` at `discount = r`. Where McQuarrie reads this identity as a refutation of the practical importance of outside-payment, the SRC framework reads it as confirmation that the outside-payment value is exactly the conversion tax in year-0 dollars (the contribution-equivalent), with lasting economic significance arising through the tax-drag channel of §6.1. The two readings are mathematically identical and economically opposite; clarifying this distinction is one of the contributions of the present paper.

A second, methodological distinction underlies the same disagreement. McQuarrie treats the year-0 conversion tax as a **cost** to be recouped by the discounted stream of future RMD-driven tax savings, reporting "break-even" results — in his base case (22% → 25% on \$100K), the cumulative *discounted* tax-at-future-rate on avoided RMDs does not overtake the \$22,000 upfront conversion tax until approximately age 97; at life expectancy (age 90), the household is still \$7,000 short in PV terms. The implicit premise is that the household must live long enough for the discounted savings stream to repay the cost; in McQuarrie's own words, *"the \$22,000 tax payment made in 2025 was, in all but name, a loan to the government."*

The SRC reframing dissolves both the cost premise and the break-even framing: a Roth conversion has no time-horizon break-even because the conversion's alpha components sum to a single PV figure at conversion time. Either that sum is positive (profitable from year 0) or negative (unprofitable from year 0); time merely unfolds the consequences.

The "loan to the government" framing inverts the underlying accounting. The after-tax wealth view, evaluated at McQuarrie's distribution-year rate $t_D = 25\%$ for the Traditional balance, makes the structure visible at the moment of conversion:

| | Trad (pre-tax) | Roth (tax-free) | Bank (after-tax) | Total after-tax wealth |
|---|---|---|---|---|
| **Pre-conversion** | \$100K (\$75K after-tax at $t_D = 25\%$) | \$0 | \$22K | **\$97K** |
| **Outside payment** | \$0 | \$100K | \$0 | **\$100K** |
| **Inside payment** | \$0 | \$78K | \$22K | **\$100K** |

Two distinct effects appear. *First*, both conversion paths (Outside and Inside) produce identical **+\$3,000** gains in total after-tax wealth: \$97K → \$100K. This is the rate-arbitrage Core — the PV at the portfolio rate of the $(t_D - t_C)$ spread on the converted principal, equal to (25% − 22%) × \$100K — which McQuarrie's NPV correctly identifies and reports. *Second*, the wrapper composition differs between Outside and Inside: Outside places \$100,000 in the Roth (the conversion-tax dollars physically migrated from Bank into Roth); Inside places \$78,000 in the Roth (the conversion-tax dollars stayed in the Bank, the conversion tax was withheld from the converted balance). The wrapper-composition difference — \$22,000 more in Roth, \$22,000 less in Bank, identical \$100,000 after-tax totals — *is* the Synthetic Roth Contribution.

McQuarrie's NPV analysis runs entirely off the \$100,000 Traditional shadow balance — his Table 1's RMD reductions and year-by-year tax savings all trace back to that single number — and never tracks the post-conversion Roth balance separately. The \$22,000 that walked into the Roth under Outside payment is structurally absent from his accounting. His conclusion that the upfront tax is not recouped until roughly age 97 — long after the taxpayer's death — arises directly from this omission: under McQuarrie's implicit no-drag rate assumption ($r_{\text{Bank}} = r_{\text{Roth}} = 6\%$), the wrapper migration is PV-zero by the very identity he himself articulates, leaving only the \$3,000 rate-arbitrage Core as observable payoff. The "loan to the government" is in fact the household's own \$22,000, sitting in the Roth from year 0 onward — compounding tax-free, eventually distributing tax-free, with material economic value through the tax-drag-differential channel (§6.1) that McQuarrie's same-rate framework eliminates by construction.

**Other practitioner literature** — Kitces (multiple posts on true-marginal-rate, equivalency-principle, and tax-alpha frameworks); Slott (across newsletters and *The Retirement Savings Bomb*); Pfau (*Retirement Income Planning* and Advisor Perspectives series); the Bogleheads NPV threads; Williams (AAII Research Triangle, June 2024); White Coat Investor; Allan Roth; Christine Benz / Morningstar; and the Schwab / Fidelity / T. Rowe Price retirement-research series — all advise paying conversion tax from outside funds when feasible. To our knowledge, none separates the value of that practice as a standalone IRR / PV / FV bucket, none states the PV identity, and none derives a separable BETR extension. The qualitative advice is widely repeated; the formal decomposition appears to be absent from this body of work.

---

## 2. Notation and Setup

| Symbol | Definition |
|--------|------------|
| $C$ | Pre-tax dollars converted from Traditional to Roth |
| $t_C$ | Effective marginal conversion-year tax rate (after Social Security, IRMAA, bracket effects) |
| $K$ | Federal tax owed on the conversion $= C \cdot t_C$ |
| $t_D$ | Time-weighted marginal distribution-year tax rate that would apply if the converted dollars were instead distributed during retirement |
| $r$ | Portfolio return assumption (used both for compounding and as discount rate in standard analysis) |
| $r_d$ | Effective return rate on a taxable account, after tax drag |
| $N$ | Distribution period (years) |
| $\mathrm{AF}(r, N)$ | Annuity-payment factor at rate $r$ over $N$ years; $\mathrm{AF}(r, N) = r\,/\,(1 - (1 + r)^{-N})$ |
| $\mathrm{PVA}(r, N)$ | Present-value annuity factor; $\mathrm{PVA}(r, N) = (1 - (1 + r)^{-N})\,/\,r = 1\,/\,\mathrm{AF}(r, N)$ |
| ATCF | After-Tax Cash Flow in a given year — the household's spendable cash flow from retirement-account distributions after federal income tax: ATCF = Traditional distribution + Roth distribution − federal tax. Roth distributions are tax-free; federal tax falls on traditional distributions plus any Social Security taxation triggered by total income. ΔATCF is the year-by-year ATCF difference between a conversion scenario and the no-conversion baseline. |

**Two scenarios:**

- **Outside funding:** Tax $K$ is settled from a taxable account in the conversion year. The Roth receives the full $C$.
- **Inside funding:** Tax $K$ is settled from inside the Traditional account (an additional pre-tax distribution in the conversion year). The Roth receives $C - K$. No taxable-account dollars are spent.

The Traditional balance is reduced equally in both scenarios by $C$, with an additional $K$ consumed from Traditional only in the Inside case.

---

## 3. The Synthetic Roth Contribution

### 3.1 The Balance-Sheet View

A Traditional retirement account is conventionally reported as a gross pre-tax balance. This presentation obscures the underlying economic structure: every dollar in a Traditional account carries an **embedded deferred-tax liability** to the tax authority, owed at whatever marginal rate $t_D$ applies when that dollar is eventually distributed. The Traditional account's *net economic value* to the household is the gross balance minus the liability.

For a \$100,000 Traditional balance at an expected future distribution rate $t_D = 25\%$:

| Asset | Gross | Embedded liability | Net after-tax value |
|---|---|---|---|
| Traditional | \$100,000 | \$25,000 | \$75,000 |

Suppose the household additionally holds \$22,000 of after-tax cash in a Bank account, earmarked to settle the deferred tax liability when it eventually comes due — the after-tax reserve set aside against the tax bill. The broader balance sheet at the conversion-readiness moment is then:

| Asset | Pre-tax | After-tax (net of liability) |
|---|---|---|
| Trad | \$100,000 | \$75,000 |
| Bank (after-tax cash, liability offset) | \$22,000 | \$22,000 |
| **Total net after-tax wealth** | | **\$97,000** |

The \$22,000 Bank holding is a *liability offset*: a pre-funded reserve against the deferred tax that will eventually be owed on the Traditional balance.

### 3.2 Conversion as Liability Settlement

A Roth conversion at conversion-year marginal rate $t_C = 22\%$ *extinguishes* the embedded deferred tax liability by paying $t_C \cdot C$ = \$22,000 to the tax authority immediately. The household then holds the converted balance in the Roth wrapper, which carries *no* embedded deferred tax liability — every Roth dollar is fully owned, after-tax, and tax-free in distribution.

Because $t_C = 22\%$ is less than the assumed $t_D = 25\%$, the \$22,000 immediate settlement extinguishes a liability with face value \$25,000 in PV terms. The household captures the \$3,000 difference as a balance-sheet gain — the rate-arbitrage Core of the conversion's NPV.

The conversion tax is therefore not an *expense*; it is a *settlement of a pre-existing liability* at a discount to the liability's expected face value. This distinction is structural and load-bearing for everything that follows.

### 3.3 Two Settlement Options

The \$22,000 settlement can be sourced two ways:

**Option A — Inside funding.** The settlement is paid from inside the converted balance. The Trad gross is reduced by $C + K$ = \$122,000: \$100,000 of converted principal moves to Roth, \$22,000 is withheld and remitted to the tax authority. The Roth holds \$78,000 (the converted principal less the withheld conversion tax); the Bank's \$22,000 reserve remains untouched.

**Option B — Outside funding.** The settlement is paid from the Bank reserve. The Trad gross is reduced by $C$ = \$100,000: all \$100,000 of converted principal moves to Roth. The Bank's \$22,000 reserve transfers to the tax authority as the conversion-tax settlement.

Both options extinguish the same deferred-tax liability, capture the same \$3,000 rate-arbitrage gain in net after-tax wealth, and leave the household at the same total wealth of \$100,000:

| | Roth (tax-free) | Bank (after-tax) | Total net after-tax wealth |
|---|---|---|---|
| **Inside payment** | \$78,000 | \$22,000 | **\$100,000** |
| **Outside payment** | \$100,000 | \$0 | **\$100,000** |

The two options differ only in **wrapper composition**. The \$22,000 wrapper-composition difference between Outside and Inside — \$22K more in Roth, \$22K less in Bank, identical total after-tax wealth — *is* the Synthetic Roth Contribution. Outside payment has not "cost" the household \$22,000; it has *re-wrapped* \$22,000 of after-tax cash from a tax-drag-bearing Bank wrapper into a tax-free Roth wrapper.

### 3.4 Symmetry to Statutory Roth Contributions

The "no cost" framing of the SRC has a direct structural analogue in the statutory Roth contribution.

A household that contributes \$22,000 to a Roth 401K from after-tax Bank cash performs an explicit wrapper migration: \$22,000 of after-tax cash that previously sat in the Bank wrapper now sits in the Roth wrapper. The income tax originally paid on the earnings that produced the \$22,000 is universally not considered a "cost of the Roth contribution" — it is the income tax that was always owed on those earnings, settled at the household's marginal rate. The contribution itself is wrapper migration alone, with no reduction in after-tax wealth at the migration moment.

The SRC mechanic is the same wrapper migration, performed implicitly via the conversion-tax settlement. The tax that the household pays to settle the deferred Traditional liability is not a "cost of the conversion" any more than the income tax paid on W-2 earnings is a "cost of the Roth contribution." Both are settlements of tax obligations that were always owed; both leave after-tax wealth unchanged at the wrapper-migration moment; both produce the same prospective tax-free compounding of the migrated dollars and the same inherited-Roth treatment for beneficiaries.

If the liquidity-surrender of moving after-tax cash into a Roth wrapper is not considered a cost of a statutory contribution — and universally it is not — then it cannot be considered a cost of the SRC either. The two mechanics differ only in *which* tax obligation is being settled (income tax on W-2 earnings vs. deferred tax on Traditional balances) and *when* the corresponding wrapper migration is initiated. The economic structure is identical.

### 3.5 Wrapper Migration Neutrality

The structural pattern visible in §3.3 (Two Settlement Options) and §3.4 (Symmetry to Statutory Roth Contributions) generalizes to a primitive principle that the SRC instantiates:

**Definition (Wrapper Migration Neutrality).** A *pure wrapper migration* is any transaction that alters the tax-wrapper composition of a household's after-tax wealth without changing contemporaneous total after-tax household wealth. The moment of a pure wrapper migration imposes no cost — it is a reallocation, not an expense.

Instances of the principle:

- A **statutory Roth contribution** of $X$ dollars moves $X$ of after-tax cash from the Bank wrapper to the Roth wrapper.
- An **Outside-funded Roth conversion** moves $K$ of after-tax cash from the Bank wrapper to the Roth wrapper (implicitly, via the conversion-tax settlement mechanic), in addition to the rate-arbitrage gain captured on the converted principal.
- A **taxable-to-HSA migration** moves after-tax dollars from a Bank wrapper into a triple-tax-advantaged HSA wrapper.

Each is structurally identical at the migration moment: total after-tax wealth is conserved, only wrapper composition changes. The forward economic value of each migration emerges over time through the differential growth rates of the source and destination wrappers — drag in the source, no drag in the destination — but at the moment of migration, none of these transactions imposes a cost.

The SRC framework's "no cost" claim is therefore not a special-pleading exception for Roth conversions; it is the application of a general principle of wrapper migration neutrality to the conversion-tax settlement mechanic.

### 3.6 Definition

**Definition (SRC).** The Synthetic Roth Contribution is the dollar amount that, in the Outside-funded scenario, migrates from the taxable wrapper into the tax-free Roth wrapper at the moment of conversion-tax settlement. Its magnitude equals $K$. It is economically equivalent to a same-day statutory Roth contribution of $K$, but is not subject to the IRS annual contribution limit because it is not formally a contribution — it is the implicit by-product of settling the deferred tax liability from outside the retirement account.

### 3.7 Properties

**Property 1 — Wrapper transition.** Under Outside funding, the household ends the conversion year with $K$ fewer dollars in the taxable wrapper and $K$ more dollars (relative to the Inside scenario) in the Roth wrapper.

**Property 2 — Tax-drag elimination.** The $K$ dollars now grow at the Roth's tax-free rate $r$ rather than the taxable wrapper's after-drag rate $r_d = r \cdot (1 - d)$. The annual benefit of this transition is approximately $K \cdot (r - r_d)$ per year in the simplest case where the $K$ cash would otherwise have remained invested at $r_d$.

**Property 3 — Estate-and-beneficiary asymmetry.** Roth dollars pass to non-spouse beneficiaries free of ordinary income tax (subject to the 10-year SECURE distribution rule). Taxable wrapper dollars pass with a step-up in basis but no preferential income-tax treatment. SRC dollars therefore receive the more favorable inherited-Roth treatment.

### 3.8 What the SRC Is Not

The SRC is not the rate-arbitrage Core. The rate-arbitrage Core — the $(t_D - t_C) \cdot C$ PV gain captured at conversion — is present under both Outside and Inside settlement. The SRC is a separate, additional economic component visible only under Outside settlement, and visible only as a *wrapper-composition difference*, not as a difference in net after-tax wealth at the moment of conversion.

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

The cancellation $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$ is a standard annuity identity. Therefore: **when the discount rate equals the portfolio rate, the Outside-funded SRC produces zero net present value.** The household does not become "richer in present-value terms" by settling the conversion-tax obligation from outside.

**However**, the nominal lifetime cash flow is higher under Outside funding by $K \cdot \mathrm{AF}(r, N) \cdot N - K$. With $r = 7\%$ and $N = 20$, this is $K \cdot 0.0944 \cdot 20 - K = K \cdot (1.888 - 1) = 0.888\,K$. The Outside-funded household receives back the $K$ outflow plus an additional $\approx 89\%$ of $K$ in nominal terms over the 20-year distribution period.

The reconciliation: at a portfolio discount rate, that nominal "extra" is exactly the time value of money on the $K$ sum. The household is not receiving free money; it is receiving back its capital plus the rate of return it would have earned anyway. **The SRC's value is not in producing extra present-value wealth — it is in moving capital from a tax-drag wrapper to a tax-free wrapper, eliminating the drag for the rest of the account's life.** This separate effect (Property 2) is the source of the SRC's lasting economic significance, captured by the $K \cdot (r - r_d)$ annual differential.

**Scope of the identity.** The PV-equivalence identity proved here uses the portfolio's expected rate of return as the discount rate — precisely the convention adopted by the conventional Roth-conversion NPV literature (McQuarrie 2024; Vanguard / Passman 2025 BETR; Reichenstein & Meyer 2017). The identity is therefore not an artifact of an idiosyncratic discount choice; it is a property of the same matched-rate framework those prior treatments employ. Cases where the household's personal discount rate diverges from the portfolio rate are discussed separately in §6.3.

---

## 5. Empirical Proof: Paired Inside / Outside Scenarios (Fixed Annuity)

We use two simulation runs with **all inputs identical except the tax payment source** (Inside vs Outside).

**User profile:**
- Age 69, single filer
- Traditional savings: \$1,000,000.00; Roth savings: \$0.00

**Shared inputs (both scenarios):**
- Distribution method: Fixed Annuity (FA), distribution start age 70
- 20-year owner life expectancy
- Portfolio return assumption: 7.00%
- Inflation assumption: 2.50%
- Social Security benefit: \$50,000/yr starting age 70
- Marital status: single
- Medicare coverage: Parts B & D
- No other taxable income in either the conversion year or distribution years

**Conversion under analysis (both scenarios):** $C$ = \$123,850.00, filling through the 22% cumulative bracket. $K$ = \$17,966.00 (effective $t_C = 14.51\%$). Time-weighted $t_D = 22.39\%$. Annuity-factor multiple = 1.88786.

### 5.1 Year-by-Year ATCF Deltas — Inside vs Outside

For each year we compute ΔATCF = ATCF(conversion scenario) − ATCF(no-conversion baseline), where the conversion scenario applies the \$123,850 conversion described above (which fills cumulatively through the 22% federal bracket under the assumed inputs) and the baseline applies no conversion at all. The application separates ΔATCF into three sub-streams (distribution-driven ATCF excluding IRMAA; IRMAA savings; reduced-RMD tax drag); to isolate the SRC effect cleanly we work with the distribution-driven ATCF excluding IRMAA.

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

The Outside − Inside column is **\$1,696 (rounded; \$1,695.86 unrounded) in every distribution year 2027–2046**. The Outside-scenario data reports per-year increments matching the algebraic prediction to the dollar in 20 of 20 years; the single non-matching year (2028) is the IRMAA conversion-year lookback effect (IRMAA savings of −\$1,254 for that year only, a separately accounted effect orthogonal to the SRC). Adding the IRMAA hit back to 2028's increment recovers \$1,696, making the SRC's structural per-year contribution **uniform across all 20 years**.

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

The household paid \$17,966 at year 0 and received its present-value equivalent back over 20 years — at the portfolio rate. This is the algebraic identity in production-system numbers. The Outside scenario's full-cash-flow IRR of 15.01% exceeds the portfolio rate by ~8 percentage points; this excess captures the rate-arbitrage Core, IRMAA savings, and tax-drag components that ride on top of the (PV-zero-at-7%) SRC. The Inside scenario has no outside outlay, so its full-cash-flow IRR is undefined; only the Outside path admits a meaningful IRR measurement on the $K$ outlay.

---

## 5B. Generalization to RMD-Only Distributions: Paired Inside / Outside Scenarios (RMD)

The Section 5 demonstration uses Fixed Annuity (FA) distributions, which deplete the retirement balance to zero at the end of the owner's life. The constant-per-year SRC increment of \$1,695.86 emerges from FA's flat distribution schedule. Two natural questions follow:

1. Does the SRC's PV identity ($\mathrm{PV}(\text{Outside} - \text{Inside}) \approx K$) hold under varying-distribution methods, where the per-year increment is no longer constant?
2. How does the SRC manifest in distribution methods that leave a positive balance for beneficiaries?

We answer both with a second paired simulation, holding all inputs identical to the FA case except the distribution method is set to IRS RMD-Only.

### 5B.1 Setup

Same profile, same conversion ($C$ = \$123,850, $K$ = \$17,966), same portfolio return assumption (7.00%), same 20-year owner life expectancy. RMD-Only distributions begin at the IRS-mandated age 73 (year 2030), running through age 92 (year 2049), followed by a 10-year statutory beneficiary distribution period (years 2050–2059), distributed as a constant annuity-payment stream over the 10 years (not as continued RMDs, since the inherited Roth has no annual RMD requirement under SECURE Act's 10-year rule).

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

\* 2031 contains the IRMAA conversion-year lookback hit (IRMAA savings of −\$1,431 for that year only).

### 5B.3 The PV Identity Holds — to the Penny

Adding the year-0 outflow under Outside (−\$17,966), the net PV difference between Outside and Inside scenarios is:

$$
-\$17{,}966.00 \;+\; \$17{,}965.96 \;=\; -\$0.04
$$

A four-cent rounding residual. **The SRC's algebraic identity is empirically confirmed under RMD distributions to within 0.0002%**, despite the per-year increment varying from \$831 (year 2030) to \$2,596 (year 2049) in the owner period and to a flat \$3,901 (years 2050–2059) in the beneficiary period. The variation matters; the PV total does not.

Compare to the FA case (§5.3), where each year's increment was a flat \$1,695.86 because FA's distribution schedule itself is flat. RMD's per-year increment varies because RMD's distribution amounts vary year-by-year, which in turn modulates the year-by-year benefit of having a larger (Outside) versus smaller (Inside) starting Roth balance. **The varying per-year SRC increment is a feature of distribution-method-specific cash-flow shapes, not a violation of the SRC framework.** Across both distribution methods, the SRC's PV at the portfolio rate equals exactly zero.

### 5B.4 The SRC's Lifetime Nominal Payout — Engine Formula and Empirical Cross-Validation

The SRC's **lifetime nominal payout** is the total of all year-by-year after-tax distributions the household receives from the Roth attributable to the conversion-tax dollar entering the Roth (the synthetic contribution). Conceptually this is the sum of the per-year (Outside − Inside) ΔATCF column over the full distribution horizon: the SRC's nominal lifetime cash payoff.

The engine computes it via a closed-form multiplier rather than by integrating the year stream:

$$
\begin{aligned}
\text{Lifetime nominal payout} &= K \cdot \text{payout multiple} \\[4pt]
\text{payout multiple} &= \frac{\text{Total ATCF Change (FV)}}{K + \text{Tax-Rate Spread (FV)}}
\end{aligned}
$$

For the Outside RMD scenario, the payout multiple is 3.9647, so the lifetime nominal payout = \$17,966 × 3.9647 = \$71,229.59.

**What 3.9647 is.** The payout multiple is the **per-dollar lifetime growth of the conversion-tax dollar under the household's distribution schedule** — the SRC's structural growth factor. The 10% bracket conversion (Group 1) is computed first and serves as the benchmark.

**Why the same 3.9647 appears at every cumulative bracket.** Each bracket — Group 1 (10%), Group 2 (12%), Group 3 (22%), Group 4 (the \$123,850 conversion) — independently computes its own payout multiple from its own ΔATCF, $K$, and rate-spread inputs. That every subsequent bracket reproduces Group 1's benchmark value of 3.9647 is the empirical signature of the SRC framework's internal consistency. The payout multiple is a **structural property of the household's distribution schedule**, not an artifact of any particular conversion size.

**Cross-validation against the year-by-year sum.** The closed-form lifetime nominal payout of \$71,229.59 matches the §5B.2 table's year-by-year nominal sum of (Outside − Inside) ΔATCF of \$71,229.46 to within \$0.13. Two independent computational paths — the multiplier formula and the empirical year-stream sum — converge to the same dollar amount. This is what §5B.4 demonstrates: cross-validation of the multiplier-based output against an independent empirical sum.

**Comparison to FA.** For the Outside FA scenario, the lifetime nominal payout = \$17,966 × 1.88786 = \$33,917.27, with the FA annuity-factor multiple of 1.88786 playing the structural role of the payout multiple under FA distribution. The RMD multiplier (3.9647) exceeds the FA multiplier (1.88786) by ~2.1× because RMD's effective compounding horizon extends 10 years past the owner-only 20-year FA horizon (into the beneficiary period — see §5B.5). This empirical observation reinforces §6.2's claim that the SRC's largest practical value channel is its compounding through the inheritance period — visible under RMD method but absent under FA.

### 5B.5 Beneficiary-Period Empirical Evidence for Inheritance Asymmetry

The Outside RMD beneficiary period (years 2050–2059, ages 93–102 of the inheriting cohort) shows a flat \$3,901/year (Outside − Inside) increment. Across 10 years, this contributes nominal \$39,006 — 55% of the SRC's total nominal value, a slight majority. In PV @ 7%, the beneficiary-period contribution is \$5,780, or 32% of the total — less weight because of the ~30-year discount horizon back to conversion date. Both shares are non-trivial.

The beneficiary-period \$3,901/yr increment exists **only because Outside funding leaves the beneficiary's inherited Roth balance larger by $K$ times the growth factor at the moment of owner death**. The 10-year statutory distribution of that excess Roth balance — entirely tax-free to the beneficiary — is the mechanism through which §6.2's "Roth-vs-taxable inheritance asymmetry" channel materializes empirically. Under FA distribution, this channel is invisible because FA depletes the balance to zero at owner death; under RMD it is structurally visible.

This fact has practical importance: the SRC's value channel of inheritance asymmetry should not be treated as theoretical "extra benefit" when planning RMD-method conversions. It is empirically present and produces measurable beneficiary-period cash flows that the calculation engine captures directly.

### 5.4 Where Outside Funding Differs from Inside

The two scenarios produce **identical** PV totals because the discount rate equals the portfolio rate. They produce **different** nominal lifetime totals because Outside funding migrates $K$ of taxable-wrapper dollars into a tax-free wrapper at the conversion moment. Over 20 years, that wrapper transition is the SRC's tangible benefit:

- The household's total nominal cash inflow is \$34,034 − \$18,083 = **+\$15,951 higher** under Outside funding (Section 5.1 totals)
- This \$15,951 represents the household receiving back \$1,696/year for 20 years (= \$33,920 nominal) on a \$17,966 outflow at year 0
- Net nominal: \$33,920 − \$17,966 = \$15,954 (rounding-equivalent to the table's \$15,951)
- In present-value terms, this \$15,951 is exactly the time-value-of-money the household earned on the \$17,966 — i.e., it is **not extra wealth at the portfolio discount rate**

The SRC's economic significance therefore lies elsewhere, captured in the next subsection.

---

## 6. Where the SRC Has Real Value

Section 4 proved that the SRC present value is zero when the discount rate equals the portfolio rate. This makes the SRC appear neutral. It is not. The SRC has real economic value through three channels that escape a pure PV-at-portfolio-rate framing.

### 6.1 Tax-Drag Differential

Inside the Roth wrapper, every dollar compounds at the asset's full pre-tax return $r$. Outside the wrapper — in a taxable bank or brokerage account — the same dollar pays tax on dividends, interest, realized capital gains, and turnover-driven distributions every year, compounding instead at an effective after-drag rate $r_d = r \cdot (1 - d)$ for some drag fraction $d$ representing the proportion of return lost annually to taxation. This paper's scenarios use $d = 5\%$ — i.e., a 7.0% pre-tax return becomes a 6.65% after-drag return, or 35 basis points per year in absolute terms. The differential is small per year and compounds non-trivially over multi-decade retirement horizons.

Under Outside payment, the $K$ dollars migrate from the taxable wrapper into the Roth — the Synthetic Roth Contribution defined in §3. Those dollars now compound at $r$ instead of $r_d$. The drag-avoidance value is the lifetime PV/FV differential of the SRC compounding at $r$ versus a taxable-wrapper counterfactual compounding at $r_d$. This component exists only under Outside payment — Inside payment moves no dollars from the taxable wrapper, so no drag-avoidance accrues.

Empirical values:

- **Outside FA scenario (§5):** FV \$917.08 / PV \$485.78
- **Outside RMD scenario (§5B):** FV \$5,092 / PV \$1,021

The RMD-scenario values exceed the FA-scenario values on both metrics. The owner 20 years plus beneficiary 10 years horizon keeps the SRC dollars compounding inside the Roth wrapper longer before distribution than FA's 20-year owner-only horizon, producing a larger cumulative drag-avoidance differential. The FV ratio (~5.5×) is larger than the PV ratio (~2.1×) because the additional drag-avoidance accruing in the beneficiary period is heavily discounted back across 30 years at the portfolio rate.

### 6.2 Estate / Beneficiary Asymmetry

Roth dollars passed to a non-spouse beneficiary distribute over a 10-year window with no income tax. Taxable-account dollars receive a step-up in basis at death but no income-tax preference for the inheritor. For an estate that will pass to children or non-spouse heirs, the SRC effectively converts taxable-inheritance-bracket future dollars into tax-free-inheritance dollars.

§5B.5 provides direct empirical evidence for this channel under RMD distributions. The Outside RMD beneficiary period (years 2050–2059) shows a constant \$3,901/year ATCF advantage of Outside over Inside — entirely the product of Outside's larger inherited Roth balance at the moment of owner death (the SRC has compounded for 20 years). This contributes \$39,006 of nominal SRC value over the 10-year statutory distribution window, or 55% of the total SRC value across the full 30-year horizon. The PV-at-portfolio-rate share is \$5,780 (32% of total). When the discount rate equals the portfolio rate, the inheritance channel still nets to zero (the algebraic identity holds across the full horizon as shown in §5B.3); but the channel is tangible, observable, and shifts the timing of when the SRC value is realized. Households evaluating Roth conversions for estate-planning purposes — a substantial subset of practitioner cases — should treat this beneficiary-period contribution as a first-class component of the conversion's value, not a footnote.

Under FA distribution (§5), the inheritance channel does not appear because FA depletes the balance to zero at owner death. The SRC's owner-period contribution still exists but the inheritance channel is absent by construction. RMD's 10-year beneficiary distribution makes the inheritance channel structurally visible — and the application correctly captures it.

### 6.3 Discount-Rate Mismatch

For households whose marginal cost of capital (or marginal time preference for consumption) differs from the portfolio's expected return, the PV identity in Section 4 no longer holds. If a household discounts future consumption at a rate $d > r$, the SRC produces negative PV (worse than the portfolio's growth). If $d < r$, positive PV. In practice, retirees are typically risk-averse with personal discount rates close to or below the portfolio's expected return, making the SRC neutral-to-favorable in PV terms even before including 6.1 and 6.2.

---

## 7. Implications

**1. Funding source is constrained by age 59½.**

*Under age 59½:* Outside funding is effectively the only viable option. Inside funding requires an additional pre-tax distribution from the Traditional account to cover the conversion tax, subject to the 10% early-withdrawal penalty. The conversion and the SRC are bundled at this stage — choosing to convert necessarily activates the SRC.

*At or above age 59½:* the early-withdrawal penalty does not apply, and Inside funding becomes a real option. The household now faces two decisions whose analytical content separates:

- *Conversion decision* (yes/no, how much). Determined by the sum at the portfolio rate of PV alpha components that exist regardless of funding source: the rate-arbitrage Core (the spread alpha between $t_C$ and $t_D$ on the converted principal); the IRMAA / Medicare alpha (a separable channel for households whose post-conversion income strategy improves their Medicare-surcharge bracket exposure; not decomposed in this paper); and the RMD tax-drag alpha (drag avoided on the reinvested-RMD stream the household no longer has to take, since the conversion shrinks the Traditional balance and thereby reduces lifetime RMDs — a channel present for both Inside and Outside conversions, since the RMD reduction is a consequence of the conversion event itself, not the funding source). An Inside conversion is rational if the sum of these alpha components is PV-positive, since Inside funding requires no outside cash outlay.

- *Funding decision* (Inside vs Outside, conditional on having chosen to convert). Choosing Outside funding relocates the $K$ dollars from a taxable wrapper compounding at $r_d$ into a tax-free wrapper compounding at $r$. This is an asset-allocation move within the household's portfolio: the conversion tax becomes an investment rather than a cost. The asset-allocation payoff is the tax-drag-differential alpha of §6.1 (\$1,021 PV in the Outside RMD scenario). This payoff is added to the conversion-only alpha sum to produce the total alpha of an Outside conversion.

The SRC has no existence independent of the conversion: it materializes only as a side effect of choosing Outside funding for a conversion the household has already decided to undertake.

**2. The SRC and the rate-arbitrage Core are economically separable. Published calculators and academic literature do not separate them cleanly.** Cheshire (2025, SSRN 5205840) identified this conflation at the algebraic level. The current paper's empirical evidence strengthens that argument: the constant \$1,695.86/year (Outside − Inside) ATCF increment under FA distribution (§5), the \$71,229.59 lifetime nominal payoff under RMD distribution (§5B), and the cross-bracket constancy of the 3.9647 growth multiple (§5B.4) are structural signatures of the SRC's identity as a distinct economic component, visible only when the SRC is isolated from the rate-arbitrage Core. A calculator that pools the SRC into a single "conversion value" cannot recover any of these signatures and produces misleading recommendations especially when $t_C > t_D$ — where the rate-arbitrage Core is negative but the SRC's asset-allocation payoff (under Outside funding) can render the household total still favorable.

**3. The conversion decision is driven by PV of alpha components, not rules of thumb.** The conventional *"convert only when future tax rates are higher"* rule captures the rate-arbitrage Core in isolation and ignores both the IRMAA / Medicare alpha and the RMD tax-drag alpha; conventional Outside-funding advice frames the conversion tax as a "cost" rather than an asset-allocation investment. A household running the full alpha decomposition — Core + IRMAA + RMD tax-drag on the conversion side, plus tax-drag-differential on the funding side under Outside payment — can identify favorable conversions even when $t_D \leq t_C$ and can correctly reject conversions whose pooled alpha is negative despite a favorable rate spread.

---

## 8. Conclusion

The Synthetic Roth Contribution is the dollar-for-dollar economic equivalent of a Roth contribution that occurs implicitly when conversion tax is paid from outside the retirement account. The framework was introduced in Cheshire (2025, SSRN 5205840) and is rigorously extended here. We have demonstrated its existence and properties four independent ways:

1. **Algebraic.** The annuity-payment / present-value identity proves that when the discount rate equals the portfolio rate, the Outside vs Inside PV difference is exactly zero — yet the Outside-funded household receives a constant $K \cdot \mathrm{AF}(r, N)$ of additional cash flow in every distribution year.

2. **Empirical (FA case).** Paired Inside FA and Outside FA scenarios, with all inputs held constant except the tax payment source, show: (a) the constant **\$1,695.86 / year** increment in 19 of 20 distribution years (the 20th year contains a separately accounted IRMAA conversion-year lookback hit), matching the algebraic prediction \$17,966 × $\mathrm{AF}(7\%, 20)$ to the cent; (b) the PVA-multiplication identity \$1,695.86 × $\mathrm{PVA}(7\%, 20)$ ≈ \$17,966 closing the year-0 outflow; and (c) the **\$9,766 ΔATCF PV total identical between the two scenarios to the dollar**. The Outside FA scenario reports a Synthetic Roth Contribution (FV) of \$33,917.27 = $K \times$ annuity-factor multiple — the future-value identifier of the SRC.

3. **Empirical (RMD case — generalization).** Paired Inside RMD and Outside RMD scenarios, with all inputs held constant except the tax payment source and the distribution method, show that **the algebraic PV identity holds under RMD too**, with the same conversion as the FA case. The per-year (Outside − Inside) increment is no longer constant — it varies from \$831 (year 2030) to \$2,596 (year 2049) in the owner period, then is flat \$3,901 in the beneficiary period (years 2050–2059) — yet the integrated PV at the portfolio rate sums to **+\$17,965.96**, exactly canceling the year-0 outflow of −\$17,966.00 to within a 4-cent rounding residual. The Outside RMD scenario's Synthetic Roth Contribution (FV) of \$71,229.59 matches the nominal 30-year (Outside − Inside) sum of \$71,229.46 to within \$0.13. The 10-year beneficiary period contributes \$3,901/yr of SRC value — direct empirical evidence of the inheritance-asymmetry channel discussed in §6.2.

4. **Decompositional.** The realized end-of-life wealth difference between Outside and Inside paths cannot be reconciled without including the SRC term as a first-class component alongside spread arbitrage, IRMAA savings, and reduced-RMD tax-drag.

The SRC's lasting value emerges not from PV at the portfolio rate (which is zero) but from (a) the tax-drag differential between Roth and taxable wrappers, (b) the favorable inheritance treatment of Roth balances, and (c) deviations between the household's personal discount rate and the portfolio's expected return.

Including the SRC turns Roth conversion analysis from a tax-rate-spread question into a wrapper-allocation question. The household is not just choosing whether to pay tax now or later. It is choosing whether to migrate a meaningful sum ($K$) of taxable-wrapper savings into a tax-free wrapper. That second choice is partially captured by Reichenstein & Meyer (2017) under tax-drag conditions, partially captured by Vanguard's BETR (2025) as a parameter adjustment, and independently surfaced by Nalebuff, Haghani & White (2025) as a "size matters" heuristic — but a separable per-year IRR / PV / FV decomposition with the algebraic identity $\mathrm{PV}(\text{Outside} - \text{Inside}) = K$ at the portfolio rate has not, to our knowledge, been published outside the SRC framework.

The published practitioner NPV literature — most prominently McQuarrie (2024) — has reached pessimistic conclusions about RMD-reducing Roth conversions: under typical assumptions, the upfront conversion tax is said not to be recouped until roughly age 97 — long after the taxpayer's death — with the realized payoff accruing entirely to the heirs. These conclusions are dissolved by the SRC accounting. McQuarrie's framework runs entirely off the Traditional shadow balance, structurally omitting the post-conversion Roth balance and treating the conversion tax as a one-sided cost rather than a wrapper migration of the household's own funds. Under correct accounting there is no recoupment-age threshold: a Roth conversion has no time-horizon break-even because there is no cost. The conversion's PV alpha components — rate-arbitrage Core, IRMAA, RMD tax-drag, and (under outside funding) tax-drag-differential — sum to a single figure at conversion time, either positive (profitable from year 0) or negative (unprofitable from year 0); time merely unfolds the consequences. Households deferring or rejecting otherwise-favorable conversions on the basis of published recoupment-age advice are being misled by the omission, not the math.

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
| Tax Payment Source | Inside | Outside |
| Distribution Method | Fixed Annuity | Fixed Annuity |
| Conversion Amount | \$123,850.00 | \$123,850.00 |
| Conversion Tax | \$17,966.00 | \$17,966.00 |
| Effective $t_C$ | 14.51% | 14.51% |
| Time-Weighted $t_D$ | 22.39% | 22.39% |
| Total ATCF Change (FV) | \$31,937.04 | \$65,854.30 |
| Tax-Rate Spread (PV) | \$9,765.91 | \$9,765.91 |
| Tax-Rate Spread (FV) | \$18,082.96 | \$18,082.96 |
| IRMAA Savings (FV) | \$7,680.36 | \$7,680.36 |
| IRMAA Savings (PV) | \$3,440.20 | \$3,440.20 |
| RMD Tax-Drag (FV) | \$6,173.72 | \$6,173.72 |
| RMD Tax-Drag (PV) | \$1,120.55 | \$1,120.55 |
| Annuity-Factor Multiple | 1.88786 | 1.88786 |
| SRC Tax-Drag (FV) | \$0 | \$917.08 |
| SRC Tax-Drag (PV) | \$0 | \$485.78 |
| Synthetic Roth Contribution (FV) | \$0 | **\$33,917.27** |
| Full-Cash-Flow IRR | — (no outside outlay) | **15.014%** |
| Return Multiple | — | 3.32186 |
| Duration (yrs) | — | 11.94 |

### A.2 RMD-Only Distributions

| Field | Inside | Outside |
|-------|---|---|
| Tax Payment Source | Inside | Outside |
| Distribution Method | RMD-Only | RMD-Only |
| Conversion Amount | \$123,850.00 | \$123,850.00 |
| Conversion Tax | \$17,966.00 | \$17,966.00 |
| Effective $t_C$ | 14.51% | 14.51% |
| Time-Weighted $t_D$ | 25.23% | 25.23% |
| Total ATCF Change (FV) | \$73,251.04 | \$144,480.62 |
| Tax-Rate Spread (PV) | \$13,279.95 | \$13,279.95 |
| Tax-Rate Spread (FV) | \$42,910.67 | \$55,995.69 |
| IRMAA Savings (FV) | \$7,648.20 | \$7,648.20 |
| IRMAA Savings (PV) | \$1,028.02 | \$1,028.02 |
| RMD Tax-Drag (FV) | \$22,692.17 | \$22,692.17 |
| RMD Tax-Drag (PV) | \$3,362.08 | \$3,362.08 |
| SRC Tax-Drag (FV) | \$0 | \$5,091.72 |
| SRC Tax-Drag (PV) | \$0 | \$1,021.23 |
| Synthetic Roth Contribution (FV) | \$0 | **\$71,229.59** |
| Full-Cash-Flow IRR | — (no outside outlay) | **11.497%** |
| Return Multiple | — | 6.7788 |
| Duration (yrs) | — | 22.97 |

**Notes.**

- The **Synthetic Roth Contribution (FV)** is empirically validated: Outside FA = \$33,917.27 = $K \times$ annuity-factor multiple = \$17,966 × 1.88786. Outside RMD = \$71,229.59 ≈ the nominal 30-year (Outside − Inside) ATCF delta of \$71,229.46. The stored SRC value captures the lifetime nominal payoff across both distribution methods.
- **RMD's higher SRC** (~\$71,230 vs FA's ~\$33,917) reflects the longer compounding horizon: RMD's beneficiary 10-year window extends the SRC compound period beyond the owner-only horizon of FA, increasing nominal lifetime value. PV at 7% is identical across methods (\$17,966 = $K$) — exactly the algebraic identity of §4.
- **Time-weighted $t_D$ is higher under RMD** (25.23% vs FA's 22.39%) because RMD's later, larger withdrawals push more of the lifetime distributions into higher brackets, increasing the time-weighted average.
- **SRC Tax-Drag** is non-zero only in Outside scenarios because it captures the value of $K$ dollars escaping taxable-account drag; this effect does not exist when no outside dollars are migrated into the Roth wrapper. Magnitudes here are small because the scenarios use a modest $r - r_d$ differential; under realistic 1–3% absolute drag this term scales materially.
- **Tax-Rate Spread, IRMAA Savings, and RMD Tax-Drag are identical between Inside and Outside** within each distribution method — confirming these components are independent of payment source, as the SRC framework predicts.
- **Total ATCF Change (FV) differs between scenarios** because Outside's distribution stream includes the year-by-year +\$1,695.86 increment from the SRC (under FA). The Outside FV equals approximately Inside FV + ($K \times$ Annuity-Factor Multiple) = \$31,937 + \$33,917 = \$65,854.
- **Full-Cash-Flow IRR** is undefined under Inside payment (no outside outlay; cash-flow stream is purely positive). Under Outside payment it is meaningful: the rate at which the conversion's full cash-flow profile produces NPV = 0. The Outside IRR exceeds the portfolio rate by the combined spread + IRMAA + tax-drag alpha, on top of the PV-zero-at-$r$ SRC.

---

*Draft prepared 2026-05-13. Empirical results produced by the RothGPT calculation engine.*
