# The Synthetic Roth Contribution: Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions

**Steven Cheshire, CFA**
Draft: 2026-05-15

---

## Abstract

Traditional accounting of Roth conversion value focuses on the arbitrage between the conversion-year tax rate $t_C$ and the time-weighted distribution tax rate $t_D$. This framing is incomplete. When the conversion tax is paid from outside the retirement account, after-tax dollars equal to the conversion tax migrate from a taxable wrapper into a tax-free wrapper, where they grow tax-free for the life of the account, including any beneficiary period. We name this effect the **Synthetic Roth Contribution** (SRC). Cheshire (2025, SSRN 5205840) introduced the concept, decomposing conversion-tax payback into SRC plus tax-rate-arbitrage components. This paper formalizes the SRC as a separable component with its own PV / FV / IRR identity, distinct from the rate-arbitrage Core.

We prove the SRC's central result four independent ways: (1) algebraically, via the annuity-payment / present-value identity, showing that when the discount rate equals the portfolio rate, $\mathrm{PV}_r(\mathrm{Outside} - \mathrm{Inside}) = 0$; (2) empirically under Fixed Annuity distributions, where the Outside − Inside per-year ATCF increment is exactly \$1,695.86 in all 20 distribution years, matching the algebraic prediction to the cent; (3) empirically under RMD distributions, where the per-year increment varies but integrates in PV to within 4 cents of the conversion tax over the 30-year horizon; and (4) decompositionally, showing that the end-of-life wealth difference between Outside and Inside paths cannot be reconciled without including the SRC term. The SRC's lasting economic value emerges through the tax-drag-differential channel: SRC dollars compound at the Roth's tax-free rate $r$ instead of the taxable wrapper's after-drag rate $r_d$. These results extend Reichenstein & Meyer (2017), McQuarrie & DiLellio (2023), Vanguard's 2025 BETR, and Nalebuff/Haghani/White (2025) by adding a separable per-year decomposition with a closed-form identity, and reconcile McQuarrie (2024)'s "live past 97 to break even" conclusion by incorporating the post-conversion Roth balance into the NPV accounting.

---

## 1. Introduction

The economic value of a Roth conversion is conventionally framed as the present-value gain from converting traditional retirement-account dollars at one marginal tax rate today $t_C$ and avoiding distributions at a different (typically higher) marginal tax rate in retirement $t_D$. The "spread arbitrage" gain is the converted amount times $(t_D - t_C)$, modulated by time, growth, Social Security, and inflation.

The funding-source effect is treated unevenly in the existing literature: some practitioner writers note informally that paying conversion tax from outside the retirement account adds value to the Roth, while other published work misses or actively misframes the effect, treating the conversion-tax outflow as a one-sided cost rather than as the wrapper migration it actually is. Across both camps, the funding source has not been formalized as a separable, quantifiable economic component with its own per-year cash flow, IRR, and PV identity. The omission matters. When the conversion tax is paid from **outside** the retirement account (Outside funding), the household removes after-tax dollars from a taxable wrapper to settle the conversion tax; the Roth then holds two components — the *Roth-equivalent conversion amount* (the converted balance minus the conversion tax) plus an additional **Synthetic Roth Contribution** equal to the conversion tax, the after-tax dollars that physically migrated from the taxable wrapper into the Roth via the tax-settlement mechanic. When the conversion tax is paid from **inside** the retirement account (Inside funding, only feasible at age 59½+ to avoid the 10% early-withdrawal penalty), no dollars leave the taxable wrapper; the Roth holds only the Roth-equivalent conversion amount, with no Synthetic Roth Contribution. The two paths produce different end-of-life wealth, and the difference is not the spread arbitrage. It is the Synthetic Roth Contribution.

The Synthetic Roth Contribution framework was introduced in Cheshire (2025, SSRN 5205840), which defined the term, established that the SRC equals the conversion tax under $\mathrm{MTR}_D = \mathrm{MTR}_C$, decomposed conversion-tax payback into SRC plus tax-rate-arbitrage components, and provided worked numerical examples across single and married filers under varying savings, Social Security, and return assumptions. The present paper extends that framework with formal algebraic and empirical proofs, generalizes the identity to RMD-method distributions, and engages directly with the closest related literature (§1B).

**Contributions of this paper.**

1. **Formal definition and separable decomposition.** The SRC is defined as the conversion-tax amount $K$ migrating from the bank account into the Roth wrapper under Outside funding, with its own PV / FV / IRR identity distinct from the rate-arbitrage Core, the Medicare-surcharge-reduction alpha, and the RMD tax-drag alpha. To our knowledge, this separable decomposition has not been published outside this framework.

2. **Algebraic proof of the matched-rate PV identity.** When the discount rate equals the portfolio rate, $\mathrm{PV}_r(\mathrm{Outside} - \mathrm{Inside}) = 0$, via the annuity-payment / present-value identity (§4).

3. **Empirical validation under both Fixed Annuity and RMD distributions.** Paired Inside/Outside scenarios confirm the algebraic identity — the constant \$1,695.86/year increment under FA (§5) and a per-year-varying but PV-canceling increment under RMD (§5B), closing the year-0 outflow to within 4 cents over a 30-year horizon.

4. **Wrapper Migration Neutrality as a generalizing principle.** Pure wrapper migrations at constant household wealth impose no PV cost at the portfolio rate. The SRC is one instance of this principle (§3.5).

---

## 1B. Prior Literature

**Reichenstein & Meyer (2017)** — *Valuing Roth Conversion and Recharacterization Options*, Journal of Financial Planning 30(11): 48–56 — is the closest formal academic precedent. Their Section "Models of Roth Conversions versus Retaining Funds in TDAs" defines three strategies: Strategy 1 (retain in TDA), Strategy 2 (convert, pay tax from inside the Roth), Strategy 3 (convert, pay tax from a taxable account). Comparing Strategies 2 and 3, they write: *"At the end of Year 1, Strategy 3 has tV more dollars growing at the pre-tax return of r in the Roth IRA and tV less dollars growing at the after-tax return of R in the taxable account compared to Strategy 2. The longer the horizon between conversion and withdrawal, n, and the larger the difference between the pre-tax and after-tax rate of return, r − R, the larger is the advantage of paying taxes on the Roth conversion out of the taxable account."* Their wrapper-transition value is therefore expressed as $tV(1 + r)^{n} - tV(1 + R)^{n}$.

This is the closest published decomposition of outside-funded conversion value. It differs from the SRC framework in two ways: (a) the value depends on $r > R$ — it operates entirely through tax-drag arbitrage in the alternative wrapper and collapses to zero when the taxable account has no drag, whereas the SRC's PV-equivalence identity (§4) holds at the wrapper level itself and survives even when $R = r$; and (b) Reichenstein & Meyer give an end-of-period FV expression without the per-year cash-flow stream, separable IRR, or PV-equivalence identity $\mathrm{PV}(\text{Outside} - \text{Inside}) = K$ at the portfolio rate that the SRC framework develops.

**Cheshire (2025)** — *Roth Conversion Valuation & Mechanics*, SSRN 5205840 (April 4, 2025) — is the immediate precursor to the present paper. It introduces the Synthetic Roth Contribution term and concept, establishes that the SRC equals the conversion tax when $\mathrm{MTR}_D = \mathrm{MTR}_C$, decomposes conversion-tax payback into SRC plus tax-rate arbitrage, and develops the framework for single and MFJ filers across worked examples (Appendices A–D). What that paper does not contain — and what the present paper supplies — is (a) the formal $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$ algebraic proof of PV equivalence at the portfolio rate; (b) empirical paired-run validation against a production calculation engine to within rounding; (c) the RMD generalization showing the identity holds under non-uniform distribution paths; and (d) the separable IRR decomposition on the Outside-funded cash-flow stream. The present work is positioned as a rigorous extension, not a re-claim, of the framework introduced there.

**Nalebuff, Haghani, & White (2025)** — *Size Matters in the Roth IRA Conversion Decision*, Elm Wealth (June 18, 2025); republished by Advisor Perspectives (July 14, 2025) — is the closest independent later articulation. Their "Reason 1" frames outside-payment as "effectively making the IRA more than 50% bigger" and produces a closed-form $\tau_1 \cdot \tau_2 \cdot \mathrm{Size} \cdot \mathrm{growth}$ heuristic. The framing is substantively aligned with the SRC concept, but the formula collapses ordinary-income and capital-gains rates into one expression and presents the wrapper-transition benefit as a single Benefit and BETR calculation rather than a per-year separable stream with its own IRR and PV identity. This work post-dates Cheshire (2025) by approximately ten weeks; we cite it as parallel evidence that the concept is being independently surfaced, not as priority.

**Passman / Vanguard (2025)** — *A "BETR" Approach to Roth Conversions* — extends the Break-Even Tax Rate framework to take the conversion-tax-payment source as a parameter input. BETR subtracts a "forgone after-tax value" of the conversion-tax dollar from the Roth side of the comparison, collapsing the Roth and outside-cash position into a single net figure; the deduction cancels symmetrically against an analogous implicit omission in the no-conversion counterfactual, so the BETR rate itself is mathematically correct. The convention, however, obscures the wrapper-migration mechanic, and the assumed taxable-account growth rate multiple, $M'$, that the convention treats as a neutral input is in fact the recommendation driver. The SRC framework makes the wrapper migration explicit and quantifies the outside-payment value as a first-class component rather than embedding it in a parameter adjustment. The two parameterizations are mathematically related: Vanguard's $M'/M$ horizon-cumulative wedge maps directly to the SRC's per-year drag fraction $d$ via $d = 1 - (M')^{1/n}/M^{1/n}$ (derived in §6). The per-year framing is also more actionable in practice: advisors can estimate $d$ directly from a client's outside-account tax profile — asset location, turnover, distribution yield, state of residence — and explain it as "the share of annual return lost to taxation," a quantity observable on prior tax returns. The $M'$ parameter, by contrast, requires projecting a 20-year cumulative wealth differential against a hypothetical no-drag counterfactual — an opaque input the advisor must project and the client cannot verify.

**McQuarrie & DiLellio (2023)** — *The Arithmetic of Roth Conversions*, Journal of Financial Planning, May 2023 — explicitly tabulates the year-by-year wealth wedge between Inside-paid and Outside-paid branches at constant tax rates (\$1,343 at year 3, \$8,319 at year 10, \$40,386 at year 20 in their illustration), with the drag-rate differential between Roth ($r$) and taxable wrapper ($r' = r(1-t)$) as the underlying source. They report this as a wealth-difference time series rather than as a separable PV / FV / IRR bucket and do not state the PV-equivalence identity. Their numerical evidence is consistent with the SRC framework's predictions and provides additional empirical support for the wrapper-transition mechanism.

**McQuarrie (2024)** — *Net Present Value Analysis of Roth Conversions*, Journal of Financial Planning 37(7/9): 76–90 — argues, on the basis of NPV calculations at the portfolio discount rate, that "it is not all that helpful to pay the tax on conversion from outside funds." This conclusion is, on its face, opposite to the SRC framework's claim that outside-payment activates a separable contribution-equivalent component. The reconciliation is straightforward: McQuarrie's NPV identity at the portfolio rate is precisely the PV-equivalence identity proved in §4 — $\mathrm{PV}(\text{Outside} - \text{Inside}) = 0$ at $\mathrm{discount} = r$. Where McQuarrie reads this identity as a refutation of the practical importance of outside-payment, the SRC framework reads it as confirmation that the outside-payment value is exactly the conversion tax in year-0 dollars (the contribution-equivalent), with lasting economic significance arising through the tax-drag channel of §6. The two readings are mathematically identical and economically opposite.

A second, methodological distinction underlies the same disagreement. McQuarrie treats the year-0 conversion tax as a **cost** to be recouped by the discounted stream of future RMD-driven tax savings, reporting "break-even" results — in his base case (22% → 25% on \$100K), the cumulative *discounted* tax-at-future-rate on avoided RMDs does not overtake the \$22,000 upfront conversion tax until approximately age 97; at life expectancy (age 90), the household is still \$7,000 short in PV terms. The implicit premise is that the household must live long enough for the discounted savings stream to repay the cost; in McQuarrie's own words, *"the \$22,000 tax payment made in 2025 was, in all but name, a loan to the government."*

The SRC reframing dissolves both the cost premise and the break-even framing: a Roth conversion has no time-horizon break-even because the conversion's alpha components sum to a single PV figure at conversion time. Either that sum is positive (profitable from year 0) or negative (unprofitable from year 0); time merely unfolds the consequences.

The "loan to the government" framing inverts the underlying accounting. The after-tax wealth view, evaluated at McQuarrie's distribution-year rate $t_D = 25\%$ for the Traditional balance, makes the structure visible at the moment of conversion:

| | Trad (pre-tax) | Roth (tax-free) | Bank (after-tax) | Total after-tax wealth |
|---|---|---|---|---|
| **Pre-conversion** | \$100K (\$75K after-tax at $t_D = 25\%$) | \$0 | \$22K | **\$97K** |
| **Outside payment** | \$0 | \$100K | \$0 | **\$100K** |
| **Inside payment** | \$0 | \$78K | \$22K | **\$100K** |

Two distinct effects appear. *First*, both conversion paths (Outside and Inside) produce identical **+\$3,000** gains in total after-tax wealth: \$97K → \$100K. This is the rate-arbitrage Core — $(t_D - t_C)$ spread times converted principal, = (25% − 22%) × \$100K — which McQuarrie's NPV correctly identifies. *Second*, the Outside/Inside wrapper composition difference: Outside places \$100,000 in the Roth (conversion-tax dollars moved from Bank into Roth); Inside converts \$78,000 to Roth (conversion-tax dollars stayed in the Bank, tax withheld from the Traditional balance). The wrapper-composition difference — \$22,000 more in Roth, \$22,000 less in Bank, identical \$100,000 after-tax totals — *is* the Synthetic Roth Contribution.

McQuarrie's NPV analysis runs entirely off the \$100,000 Traditional shadow balance — his Table 1's RMD reductions and year-by-year tax savings all trace back to that single number — and never tracks the post-conversion Roth balance separately. The \$22,000 that walked into the Roth under Outside payment is structurally absent from his accounting. His conclusion that the upfront tax is not recouped until roughly age 97 — long after the taxpayer's death — arises directly from this omission: under McQuarrie's implicit no-drag rate assumption ($r_{\text{Bank}} = r_{\text{Roth}} = 6\%$), the wrapper migration is PV-zero by the very identity he himself articulates, leaving only the \$3,000 rate-arbitrage Core as observable payoff. The "loan to the government" is in fact the household's own \$22,000, sitting in the Roth from year 0 onward — compounding tax-free, eventually distributing tax-free, with material added economic value through the tax-drag-differential channel (§6) that McQuarrie's same-rate framework eliminates by construction.

The identity is derivable from McQuarrie's own Table 1. His column 8 — tax-at-22% on each year's RMD over the 27-year distribution horizon — discounted at the same 6% portfolio rate his paper uses for NPV, sums to ~\$22,000, exactly the up-front conversion tax. This is the matched-rate PV identity of §4: $\mathrm{PV}_r$ of the avoided-distribution-tax stream at the conversion rate equals $K$. McQuarrie published the column but never discounted it separately — his framework computes Col 7 − Col 8 (the \$3,000 rate-arbitrage Core) and treats the \$22,000 as a one-sided cost, hiding the wrapper migration that his own data implicitly prove is PV-zero.

**Other practitioner literature** — Kitces (multiple posts on true-marginal-rate, equivalency-principle, and tax-alpha frameworks); Slott (across newsletters and *The Retirement Savings Bomb*); Pfau (*Retirement Income Planning* and Advisor Perspectives series); the Bogleheads NPV threads; and major retirement-research publications from Schwab, Fidelity, T. Rowe Price, and Morningstar — all advise paying conversion tax from outside funds when feasible. To our knowledge, none separates the value of that practice as a standalone PV / FV / IRR bucket, none states the PV identity, and none derives a separable BETR extension. The qualitative advice is widely repeated; the formal decomposition appears to be absent from this body of work.

---

## 2. Notation and Setup

| Symbol | Definition |
|--------|------------|
| $C$ | Pre-tax dollars converted from Traditional to Roth |
| $t_C$ | Effective marginal conversion-year tax rate (after Social Security and bracket effects) |
| $K$ | Federal tax owed on the conversion $= C \cdot t_C$ |
| $t_D$ | Time-weighted marginal distribution-year tax rate that would apply if the converted dollars were instead distributed during retirement |
| $r$ | Portfolio return assumption (used both for compounding and as discount rate in standard analysis) |
| $r_d$ | Effective return rate on a taxable account, after tax drag; $r_d = r \cdot (1 - d)$ |
| $d$ | Annual drag fraction on a taxable account's return |
| $N$ | Distribution period (years) |
| $\mathrm{AF}(r, N)$ | Annuity-payment factor at rate $r$ over $N$ years; $\mathrm{AF}(r, N) = r\,/\,(1 - (1 + r)^{-N})$ |
| $\mathrm{PVA}(r, N)$ | Present-value annuity factor; $\mathrm{PVA}(r, N) = (1 - (1 + r)^{-N})\,/\,r = 1\,/\,\mathrm{AF}(r, N)$ |
| ATCF | After-Tax Cash Flow in a given year — the household's spendable cash flow from retirement-account distributions after federal income tax: ATCF = Traditional distribution + Roth distribution − federal tax. Roth distributions are tax-free; federal tax falls on traditional distributions plus any Social Security taxation triggered by total income. ΔATCF is the year-by-year ATCF difference between a conversion scenario and the no-conversion baseline. |

**Two scenarios:**

- **Inside funding:** Tax $K$ is settled from inside the Traditional account (a separate pre-tax distribution in the conversion year). The Roth receives $C - K$. No taxable-account dollars are spent.
- **Outside funding:** Tax $K$ is settled from a taxable account in the conversion year. The Roth receives the $C - K$ converted amount plus the $K$ tax payment.

In both scenarios the Traditional balance is reduced by $C$. The two paths differ only in the source of the $K$ tax payment: a separate inside-the-Traditional pre-tax distribution (Inside funding) or a Bank account distribution (Outside funding).

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

Because $t_C = 22\%$ is less than the assumed $t_D = 25\%$, the \$22,000 immediate settlement extinguishes a \$25,000 liability. The household captures the \$3,000 difference as a balance-sheet gain — the rate-arbitrage Core of the conversion's NPV.

The conversion tax is therefore not an *expense*; it is a *settlement of a pre-existing liability* at a discount to the liability's expected face value. This distinction is structural and load-bearing for everything that follows.

### 3.3 Two Tax Settlement Options

The \$22,000 settlement can be sourced two ways:

**Option A — Inside funding.** The settlement is paid from inside the Traditional account. The Traditional gross is reduced by $C$ = \$100,000: \$78,000 of converted principal moves to Roth (the Traditional conversion amount net of the distributed conversion tax amount), and the \$22,000 distribution is paid to the IRS. The \$22,000 bank account asset is untouched.

**Option B — Outside funding.** The settlement is paid from the bank account. The Traditional gross is reduced by $C$ = \$100,000: the \$78,000 converted principal and the \$22,000 paid to the IRS from the bank account together leave \$100,000 in the Roth and \$0 in the bank account.

Both options settle the same deferred-tax liability and capture the same \$3,000 rate-arbitrage gain, leaving the same \$100,000 total household wealth:

| | Roth (tax-free) | Bank (after-tax) | Total net after-tax wealth |
|---|---|---|---|
| **Inside payment** | \$78,000 | \$22,000 | **\$100,000** |
| **Outside payment** | \$100,000 | \$0 | **\$100,000** |

The \$22,000 Outside/Inside **wrapper-composition** difference — \$22,000 more in Roth, \$22,000 less in Bank, identical total after-tax wealth — *is* the Synthetic Roth Contribution. Outside payment has not "cost" the household \$22,000; it has *moved* \$22,000 of after-tax cash from a taxable bank account into a tax-free Roth.

### 3.4 Symmetry to Statutory Roth Contributions

The SRC "no cost" framing has a structural analogue in the statutory Roth contribution.

A household that contributes \$22,000 to a Roth 401(k) performs an explicit wrapper migration: \$22,000 of after-tax cash that was in a bank wrapper now sits in a Roth wrapper. The income tax originally paid on the earnings that produced the \$22,000 is universally not considered a "cost of the Roth contribution" — it is the income tax that was always owed on those earnings.

The SRC is the same wrapper migration, performed implicitly via the Outside-tax payment. The tax paid to settle the deferred Traditional liability is not a "conversion cost" any more than the income tax paid on W-2 earnings is a "Roth contribution cost." Both settle tax obligations that were always owed; both leave after-tax wealth unchanged at the wrapper-migration moment; both produce the same tax-free compounding of the migrated dollars and the same inherited-Roth treatment for beneficiaries.

If the liquidity-surrender of moving after-tax cash into a Roth wrapper is not considered a cost of a statutory contribution — and universally it is not — then it cannot be considered a cost of the SRC either. The two differ only in when the income-tax obligation is settled — at earning time (statutory contribution) or at conversion time (SRC). The economic structure is identical.

### 3.5 Wrapper Migration Neutrality

The structural pattern visible in §3.3 (Two Settlement Options) and §3.4 (Symmetry to Statutory Roth Contributions) leads to a general principle:

**Wrapper Migration Neutrality** postulates that any transaction that alters a household's tax-wrapper composition without changing its contemporaneous after-tax wealth imposes no cost — it is a reallocation, not an expense.

Examples:

- A **statutory Roth contribution** of $X$ dollars moves $X$ of after-tax cash from the bank wrapper to the Roth wrapper.
- An **Outside-funded Roth conversion** moves $K$ after-tax dollars from the bank wrapper to the Roth wrapper (implicitly, via the conversion-tax payment), in addition to the rate-arbitrage on converted principal.
- A **taxable-to-HSA migration** moves after-tax dollars from a bank wrapper into a triple-tax-advantaged HSA wrapper.

Each is structurally identical at the migration moment: total after-tax wealth is conserved, only wrapper composition changes. The future economic value of each emerges over time through the source/destination growth rate differential — drag in the source, no drag in the destination — but at the moment of migration, none impose a cost.

### 3.6 Definition

The Synthetic Roth Contribution (SRC) is the conversion-tax amount ($K$) that migrates from the bank account into the Roth wrapper via the conversion-tax payment in an Outside-funded conversion. It is economically equivalent to a same-day statutory Roth contribution of $K$, but is not subject to IRS annual contribution limits.

### 3.7 Properties

**Property 1 — Wrapper transition.** Under Outside funding, the household ends the conversion year with $K$ fewer dollars in the taxable wrapper and $K$ more dollars (relative to the Inside scenario) in the Roth wrapper.

**Property 2 — Tax-drag elimination.** The $K$ dollars now grow at the Roth's tax-free rate $r$ rather than the taxable wrapper's after-drag rate $r_d = r \cdot (1 - d)$. This benefit is approximately $K \cdot (r - r_d)$ per year if the $K$ cash would have remained invested at $r_d$.

### 3.8 What the SRC Is Not

The SRC is not the rate-arbitrage, $(t_D - t_C) \cdot C$, captured at conversion — present in both Outside and Inside settlement. The SRC appears only under Outside settlement, and only as a wrapper-composition difference — not a change in net after-tax wealth.

---

## 4. Algebraic Proof: PV Equivalence at the Portfolio Rate

We now prove the SRC's central PV identity: when the discount rate equals the portfolio rate, the SRC's incremental cash-flow stream produces exactly zero net present value. Outside funding's year-0 tax outflow ($-K$) is exactly compensated by the present value of the larger per-year nominal distributions over the distribution period. The SRC is therefore a present-value-zero phenomenon at the moment of conversion — yet a nominal-cash-flow-positive phenomenon over the distribution period.

**Setup.** Hold all spread / tax-drag effects equal across the two scenarios (they are, by construction). Isolate the SRC component.

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

**Scope of the identity.** The PV-equivalence identity proved here uses the portfolio's expected rate of return as the discount rate — precisely the convention adopted by the conventional Roth-conversion NPV literature (McQuarrie 2024; Vanguard / Passman 2025 BETR; Reichenstein & Meyer 2017). The identity is therefore not an artifact of an idiosyncratic discount choice; it is a property of the same matched-rate framework those prior treatments employ. When a household's personal discount rate $\rho$ diverges from the portfolio rate $r$, the identity breaks: $\rho > r$ produces negative SRC PV, $\rho < r$ positive — but in practice most risk-averse retirees have $\rho \le r$, keeping the SRC neutral-to-favorable in PV terms.

---

## 5. Empirical Proof: Paired Inside / Outside Scenarios (Fixed Annuity)

We use two simulation runs with **all conversion inputs identical except the tax payment source** (Inside vs Outside).

**User profile:**
- Age 69, Single filer
- Traditional savings: \$1,000,000.00; Roth savings: \$0.00

**Shared inputs (both scenarios):**
- Distribution method: Fixed Annuity (FA), distribution start age 70
- 20-year owner life expectancy
- Portfolio return assumption: 7.00%
- Inflation assumption: 2.50%
- Social Security benefit: \$50,000/yr starting age 70
- Medicare coverage: Parts B & D
- No other taxable income in either the conversion year or distribution years

**Conversion under analysis (both scenarios):** $C$ = \$123,850.00, filling through the 22% cumulative bracket. $K$ = \$17,966.00 (effective $t_C = 14.51\%$). Time-weighted $t_D = 22.39\%$. Annuity-factor multiple = 1.88786.

**Distribution convention.** Both Traditional and Roth balances are level-distributed via the annuity-payment formula over the 20-year horizon. Roth accounts (IRAs and 401(k)s) have no IRS RMDs during the owner's lifetime, but are modeled identically with the Traditional balance here for direct Outside-vs-Inside comparability — both scenarios face the same distribution schedule, isolating the funding-source effect.

### 5.1 Year-by-Year ATCF Deltas — Inside vs Outside

For each year we compute ΔATCF = ATCF(conversion) − ATCF(no-conversion baseline) for both Inside and Outside scenarios.

| Year | Age | Inside ΔATCF | Outside ΔATCF | Outside − Inside (nom) | Outside − Inside (PV @ 7%) |
|------|-----|---|---|---|---|
| 2026 | 69 | \$0 | $−17,966 | $−17,966 | $−17,966 |
| 2027 | 70 | \$1,075 | \$2,771 | \$1,696 | \$1,585 |
| 2028 | 71 | \$1,033 | \$2,729 | \$1,696 | \$1,481 |
| 2029 | 72 | \$989 | \$2,685 | \$1,696 | \$1,384 |
| 2030 | 73 | \$945 | \$2,641 | \$1,696 | \$1,294 |
| 2031 | 74 | \$900 | \$2,596 | \$1,696 | \$1,209 |
| 2032 | 75 | \$876 | \$2,572 | \$1,696 | \$1,130 |
| 2033 | 76 | \$876 | \$2,572 | \$1,696 | \$1,056 |
| 2034 | 77 | \$876 | \$2,572 | \$1,696 | \$987 |
| 2035 | 78 | \$876 | \$2,572 | \$1,696 | \$923 |
| 2036 | 79 | \$876 | \$2,572 | \$1,696 | \$862 |
| 2037 | 80 | \$876 | \$2,572 | \$1,696 | \$806 |
| 2038 | 81 | \$876 | \$2,572 | \$1,696 | \$753 |
| 2039 | 82 | \$876 | \$2,572 | \$1,696 | \$704 |
| 2040 | 83 | \$876 | \$2,572 | \$1,696 | \$658 |
| ⋯ | ⋯ | \$876 | \$2,572 | \$1,696 | ⋯ |
| 2046 | 89 | \$876 | \$2,572 | \$1,696 | \$438 |
| **20-yr total** |  | **\$18,083** | **\$34,034** | **+\$15,951** | **+\$0** |

### 5.2 The Constant +\$1,695.86 / Year Increment — Empirical Confirmation

The Outside − Inside column is **constant at \$1,696 in every distribution year 2027–2046** (\$1,695.86 to two decimals). The SRC's structural per-year contribution is uniform across all 20 years, matching the algebraic prediction:

$$
K \cdot \mathrm{AF}(r = 7\%,\, N = 20) \;=\; \$17{,}966 \times 0.094393 \;=\; \$1{,}695.86 \quad\checkmark
$$

where $\mathrm{AF}(7\%, 20) = 0.07\,/\,(1 - 1.07^{-20}) = 0.094393$.

### 5.3 The PV Identity

The Outside − Inside (PV @ 7%) column sums to approximately zero across all 21 rows — the decisive empirical evidence of the algebraic identity proved in Section 4. The −\$17,966 year-0 outflow is exactly compensated by the present value of the 20-year constant \$1,696 distribution stream:

$$
\begin{aligned}
\text{PV of \$1,695.86/yr} \times \text{20 yrs at 7\%}
  &= \$1{,}695.86 \times \mathrm{PVA}(7\%, 20) \\[4pt]
  &= \$1{,}695.86 \times 10.594 \\[4pt]
  &\approx \$17{,}966 \quad\checkmark
\end{aligned}
$$

Equivalently, the Inside ΔATCF total PV at 7% (\$9,766) equals the Outside ΔATCF total PV at 7% (\$9,766) to the dollar — identical present values at the portfolio rate!

The household paid \$17,966 at year 0 and received its present-value equivalent back over 20 years — the algebraic identity in production-system numbers. The conversion's alpha components (rate-arbitrage Core, Medicare-surcharge savings, tax-drag) are identical between Inside and Outside; both scenarios report \$9,766 of alpha in PV terms. Outside also admits an IRR measurement on the $K$ outlay: 15.01%, exceeding the portfolio rate by ~8 percentage points — capturing the same alpha components on top of the (PV-zero-at-7%) SRC. Inside's IRR is undefined for lack of a cash outlay.

---

## 5B. Generalization to RMD-Only Distributions: Paired Inside / Outside Scenarios (RMD)

Section 5 uses Fixed Annuity (FA) distributions: a constant nominal payment depleting the balance to zero over the owner's 20-year life expectancy and producing the constant \$1,695.86 per-year SRC increment. Two natural questions follow:

1. Does the SRC's PV identity ($\mathrm{PV}(\text{Outside} - \text{Inside}) \approx K$) hold under varying-distribution methods, where the per-year increment is no longer constant?
2. How does the SRC manifest in distribution methods that leave a positive balance for beneficiaries?

We answer both with a second paired simulation, holding all inputs identical to the FA case except the distribution method is set to IRS RMD-Only.

### 5B.1 Setup

All §5 inputs apply except the distribution method: $C$ = \$123,850, $K$ = \$17,966, 7.00% portfolio return, 20-year life expectancy. RMDs run from the IRS-mandated age 73 (year 2030) through age 92 (year 2049), followed by the SECURE Act's 10-year beneficiary distribution period (years 2050–2059), distributed as a constant annuity-payment, not continued RMDs.

**Distribution convention.** Roth accounts (IRAs and 401(k)s) are not subject to IRS RMDs during the owner's lifetime. For Outside-vs-Inside comparability, however, both scenarios distribute the post-conversion Roth balance using the same proportional schedule applied to the Traditional balance — IRS Uniform Lifetime Table divisors during the owner period (ages 73–92), and the SECURE Act's 10-year level distribution during the beneficiary period (ages 93–102). Both Outside and Inside paths face identical distribution schedules, isolating the funding-source effect.

### 5B.2 Year-by-Year ΔATCF — Inside vs Outside Under RMD

The crucial RMD finding: the per-year **(Outside − Inside) increment is not constant** but varies with the age-indexed RMD divisor and post-conversion balance trajectory.

| Year | Age | Inside ΔATCF | Outside ΔATCF | Outside − Inside (nom) | Outside − Inside (PV @ 7%) |
|------|-----|---|---|---|---|
| 2030 | 73 | \$1,274 | \$2,105 | \$831 | \$634 |
| 2031 | 74 | \$1,609 | \$2,500 | \$891 | \$635 |
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
| **Owner totals** | | **\$31,840** | **\$64,064** | **+\$32,224** | **+\$12,186** |
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
| **30-yr total** | | **\$51,990** | **\$123,219** | **+\$71,229** | **+\$17,966** |

### 5B.3 The PV Identity Holds — to the Penny

Adding the year-0 outflow under Outside (−\$17,966), the net PV difference between Outside and Inside scenarios is:

$$
-\$17{,}966.00 \;+\; \$17{,}965.96 \;=\; -\$0.04
$$

A four-cent rounding residual. **The SRC's algebraic identity is empirically confirmed under RMD distributions to within 0.0002%**, despite varying per-year differentials from \$831 (year 2030) to \$2,596 (year 2049) for the owner plus a flat \$3,901 (years 2050–2059) for the beneficiary.

Unlike FA's flat \$1,695.86 per-year differential (§5.3), RMD's varies because each year's distribution is the prior balance divided by an age-indexed divisor that changes annually. **The varying per-year SRC differential is a feature of distribution-method-specific cash flows, not a violation of the SRC framework.** Across both distribution methods, the SRC's PV at the portfolio rate equals exactly zero.

### 5B.4 The Payout Multiple — Closed Form and Empirical Validation

The SRC's **lifetime nominal payout** is the sum of yearly after-tax Roth distributions attributable to the tax payment entering the Roth, conceptually equal to the sum of per-year (Outside − Inside) ΔATCFs over the full distribution horizon.

The engine computes the lifetime nominal payout as a per-dollar multiple of the conversion-tax outlay:

$$
\text{Lifetime nominal payout} = K \cdot \text{payout multiple}
$$

The payout multiple is a structural property of the distribution schedule. Under FA distribution at $r = 7\%$ over $N = 20$ years, it equals $\mathrm{AF}(r, N) \cdot N$ = 1.88786. Under RMD distribution (20-year owner period plus 10-year SECURE beneficiary period), it is determined empirically from the year-by-year RMD divisor applied to the SRC's $K$ dollars; the Outside RMD scenario yields 3.9647, so the lifetime nominal payout = \$17,966 × 3.9647 = \$71,229.59.

The 3.9647 payout multiple is the **per-dollar lifetime growth of the conversion-tax dollar under the household's distribution schedule** — the SRC's structural growth factor.

**Why the same 3.9647 appears at every cumulative bracket.** Conversions of different cumulative sizes — filling through the 10%, 12%, or 22% bracket (the \$123,850 case examined here) — each independently compute the same 3.9647 payout multiple from their own ΔATCF, $K$, and rate-spread inputs. This is the empirical signature of the SRC framework's internal consistency. The payout multiple is a **structural property of the distribution schedule**, not an artifact of any particular conversion size.

**Empirical validation against the year-by-year sum.** The closed-form lifetime nominal payout of \$71,229.59 matches the §5B.2 table's year-by-year nominal sum of (Outside − Inside) ΔATCF of \$71,229.46 to within \$0.13.

**Comparison to FA.** The same $K$ = \$17,966 distributed via FA over 20 years would yield a lifetime nominal payout of \$17,966 × 1.88786 = \$33,917.27. RMD's multiplier exceeds FA's by ~2.1× because RMD distributes over 30 years instead of 20, giving $K$ more years of tax-free compounding before full distribution. Both methods produce the same PV at the portfolio rate (zero, by §4's identity); only nominal cash flow differs.

---

## 6. The SRC Alpha: Tax-Drag Avoidance

Section 4 proved that the SRC present value is zero when the discount rate equals the portfolio rate. This makes the SRC appear neutral. It is not. The SRC has real economic value through the tax-drag-differential channel that escapes a pure PV-at-portfolio-rate framing.

Every dollar in the Roth wrapper compounds at $r$. In a taxable brokerage wrapper that dollar pays tax on dividends, interest, realized capital gains, and turnover-driven distributions every year, compounding at an after-drag rate $r_d = r \cdot (1 - d)$ where $d$ represents the annual percent of return lost to taxation. This paper uses $d = 5\%$ — i.e., a 7.0% tax-free return becomes an after-drag 6.65%. This 35 basis point annual differential compounds materially over a multi-decade retirement horizon.

Under Outside payment, $K$ dollars move from the taxable into the Roth wrapper and compound at $r$ instead of $r_d$. This drag-avoidance benefit is the lifetime PV/FV differential of the SRC compounding at $r$ vs. the taxable counterfactual compounding at $r_d$. This alpha component exists only under Outside payment — Inside payment retains $K$ dollars in the taxable wrapper.

Empirical values:

- **Outside FA scenario (§5):** FV \$917.08 / PV \$485.78
- **Outside RMD scenario (§5B):** FV \$5,092 / PV \$1,021

RMD values exceed the FA-scenario values on both metrics. RMD's 30-year horizon (20 owner + 10 beneficiary) keeps SRC dollars compounding in the Roth wrapper longer than FA's 20 years, producing a larger cumulative drag-avoidance differential. The FV ratio (~5.5×) exceeds the PV ratio (~2.1×) because beneficiary-period drag-avoidance accruals are heavily discounted back to today.

Unlike the SRC's PV-zero identity at the portfolio rate, this drag-avoidance alpha is quantifiable, accrues only under Outside funding, and belongs in the alpha sum when evaluating an Outside-funded conversion (§7).

**Mapping to Vanguard's BETR.** Passman, Wong & Dickson (2025) parameterize our same wrapper-drag wedge via a 20-year cumulative outside-account multiple $M'$ relative to the Roth multiple $M$. The relationship to the SRC drag fraction is direct:

$$
d = 1 - \frac{(M')^{1/n}}{M^{1/n}}
$$

For Vanguard's $M = 3$, $M' = 2$, $n = 20$: $d = 37.5\%$ — implicitly assuming a substantially higher tax-inefficiency than this paper's $d = 5\%$ baseline (corresponding to $M' \approx 2.74$).

---

## 7. Implications: Convert? Then Fund Inside or Outside?

*Under age 59½:* Outside funding is effectively required. Inside funding requires a pre-tax distribution to cover the conversion tax, subject to the 10% early-withdrawal penalty. Conversion and SRC are bundled — choosing to convert necessarily activates the SRC.

*At age 59½+:* both funding paths are available, and the household's decision separates into two:

- **Conversion (yes/no, how much):** driven by the sum of PV alpha components that don't depend on funding source — the rate-arbitrage Core (spread on converted principal), the Medicare-surcharge-reduction alpha (not decomposed here), and the RMD tax-drag alpha (drag avoided on reinvested RMDs the conversion eliminates). Each follows from the conversion event itself, not from how the tax is paid. Convert if the sum is PV-positive.

- **Funding (Inside vs Outside), conditional on conversion:** Outside relocates $K$ from a taxable wrapper compounding at $r_d$ to a tax-free wrapper compounding at $r$ — turning the conversion tax from a cost into an investment. The payoff is the tax-drag-avoidance alpha of §6 (\$1,021 PV in the Outside RMD scenario), added to the conversion alpha sum to give total Outside-conversion alpha.

The SRC materializes only as a side effect of choosing Outside funding for an already-decided conversion.

---

## 8. Conclusion

The Synthetic Roth Contribution is the dollar-for-dollar economic equivalent of a Roth contribution that occurs implicitly when conversion tax is paid from outside the retirement account. The framework was introduced in Cheshire (2025, SSRN 5205840) and is rigorously extended here. We have demonstrated its existence and properties four independent ways:

1. **Algebraic.** The annuity-payment / present-value identity proves that when the discount rate equals the portfolio rate, the Outside vs Inside PV difference is exactly zero — yet the Outside-funded household receives a constant $K \cdot \mathrm{AF}(r, N)$ of additional cash flow in every distribution year.

2. **Empirical (FA case).** Paired Inside FA and Outside FA scenarios, with all inputs held constant except the tax payment source, show: (a) the constant **\$1,695.86 / year** increment in all 20 distribution years, matching the algebraic prediction \$17,966 × $\mathrm{AF}(7\%, 20)$ to the cent; (b) the PVA-multiplication identity \$1,695.86 × $\mathrm{PVA}(7\%, 20)$ ≈ \$17,966 closing the year-0 outflow; and (c) the **\$9,766 ΔATCF PV total identical between the two scenarios to the dollar**. The Outside FA scenario reports a Synthetic Roth Contribution (FV) of \$33,917.27 = $K \times$ annuity-factor multiple — the future-value identifier of the SRC.

3. **Empirical (RMD case — generalization).** Paired Inside RMD and Outside RMD scenarios, with all inputs held constant except the tax payment source and the distribution method, show that **the algebraic PV identity holds under RMD too**, with the same conversion as the FA case. The per-year (Outside − Inside) increment is no longer constant — it varies from \$831 (year 2030) to \$2,596 (year 2049) in the owner period, then is flat \$3,901 in the beneficiary period (years 2050–2059) — yet the integrated PV at the portfolio rate sums to **+\$17,965.96**, exactly canceling the year-0 outflow of −\$17,966.00 to within a 4-cent rounding residual. The Outside RMD scenario's Synthetic Roth Contribution (FV) of \$71,229.59 matches the nominal 30-year (Outside − Inside) sum of \$71,229.46 to within \$0.13.

4. **Decompositional.** The realized end-of-life wealth difference between Outside and Inside paths cannot be reconciled without including the SRC term as a first-class component alongside spread arbitrage, Medicare-surcharge savings, and reduced-RMD tax-drag.

The SRC's lasting value emerges not from PV at the portfolio rate (which is zero) but from the tax-drag differential between Roth and taxable wrappers — the channel that compounds the SRC's $K$ dollars at $r$ instead of $r_d$ over the post-conversion horizon. **Including the SRC turns Roth conversion analysis from a tax-rate-spread question into a wrapper-allocation question.**

**Implications for practice:**

- **The SRC framework is the first separable decomposition.** A PV / FV / IRR bucket for the funding-source effect — with the algebraic identity $\mathrm{PV}(\text{Outside} - \text{Inside}) = 0$ at the portfolio rate — has not, to our knowledge, been published outside this framework. Reichenstein & Meyer (2017), Vanguard BETR (2025), and Nalebuff/Haghani/White (2025) each capture related parts but do not state the identity.

- **The SRC is separable from the rate-arbitrage Core.** Calculators that pool them into a single "conversion value" miss the SRC's distinct economic signal — especially when $t_C > t_D$, where the rate-arbitrage Core is negative but the SRC's tax-drag-avoidance alpha (under Outside funding) can still render the household total favorable.

- **The "live past 97 to break even" framing no longer holds under SRC accounting.** McQuarrie (2024)'s pessimism rests on running NPV entirely off the Traditional shadow balance — structurally omitting the post-conversion Roth balance and treating the conversion tax as a one-sided cost rather than a wrapper migration of the household's own funds. There is no recoupment-age threshold: a conversion has no time-horizon break-even because there is no cost.

- **The conversion decision is PV of alpha components, not rules of thumb.** The "convert only when future tax rates are higher" rule captures the rate-arbitrage Core in isolation and ignores Medicare-surcharge-reduction and RMD tax-drag — both of which can flip the decision. Households deferring otherwise-favorable conversions on the basis of published recoupment-age advice are reacting to an incomplete accounting, not to the math.

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
| Medicare-Surcharge Savings (FV) | \$7,680.36 | \$7,680.36 |
| Medicare-Surcharge Savings (PV) | \$3,440.20 | \$3,440.20 |
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
| Medicare-Surcharge Savings (FV) | \$7,648.20 | \$7,648.20 |
| Medicare-Surcharge Savings (PV) | \$1,028.02 | \$1,028.02 |
| RMD Tax-Drag (FV) | \$22,692.17 | \$22,692.17 |
| RMD Tax-Drag (PV) | \$3,362.08 | \$3,362.08 |
| Payout Multiple | 3.9647 | 3.9647 |
| SRC Tax-Drag (FV) | \$0 | \$5,091.72 |
| SRC Tax-Drag (PV) | \$0 | \$1,021.23 |
| Synthetic Roth Contribution (FV) | \$0 | **\$71,229.59** |
| Full-Cash-Flow IRR | — (no outside outlay) | **11.497%** |
| Return Multiple | — | 6.7788 |
| Duration (yrs) | — | 22.97 |

**Notes.**

- **Synthetic Roth Contribution (FV).** Outside FA = \$33,917.27 = $K \times$ 1.88786; Outside RMD = \$71,229.59 ≈ nominal 30-year (Outside − Inside) ATCF delta of \$71,229.46. RMD's larger nominal SRC reflects the longer compounding horizon — RMD's 10-year beneficiary window extends the SRC compound period beyond FA's owner-only 20 years. PV at 7% is identical across methods (\$17,966 = $K$), as the §4 identity requires.
- **Time-weighted $t_D$ is higher under RMD** (25.23% vs FA's 22.39%) because RMD's later, larger withdrawals push more lifetime distributions into higher brackets.
- **SRC Tax-Drag** is non-zero only under Outside payment — it captures the value of $K$ dollars escaping taxable-account drag. Magnitudes here are small because the scenarios use a modest $r - r_d$ differential; under realistic 1–5% absolute drag this term scales materially.
- **Tax-Rate Spread, Medicare-Surcharge Savings, and RMD Tax-Drag are identical between Inside and Outside** within each distribution method — confirming these components are funding-source-independent, as the SRC framework predicts.
- **Total ATCF Change (FV) differs between scenarios** because Outside's distribution stream includes the year-by-year SRC increment. Under FA: Outside FV ≈ Inside FV + ($K \times$ annuity-factor multiple) = \$31,937 + \$33,917 = \$65,854.
- **Full-Cash-Flow IRR** is undefined under Inside payment (no outside outlay; cash-flow stream is purely positive). Under Outside it is meaningful: the Outside IRR exceeds the portfolio rate by the combined spread + Medicare-surcharge + tax-drag alpha, on top of the PV-zero-at-$r$ SRC.

---

*Draft prepared 2026-05-15. Empirical results produced by the RothGPT calculation engine.*
