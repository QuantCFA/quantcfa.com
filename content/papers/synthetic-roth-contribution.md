# The Synthetic Roth Contribution: Empirical and Algebraic Proofs of a Hidden Component in Outside-Funded Roth Conversions

**Steven Cheshire, CFA**
Draft: 2026-05-18

---

## Abstract

Traditional accounting of Roth conversion value focuses on the arbitrage between the conversion-year tax rate $t_C$ and the time-weighted distribution tax rate $t_D$. This framing is incomplete. When the conversion tax is paid from outside the retirement account, after-tax dollars equal to the conversion tax migrate from a taxable wrapper into a tax-free wrapper, where they grow tax-free for the life of the account, including any beneficiary period. We name this effect the **Synthetic Roth Contribution** (SRC). Cheshire (2025, SSRN 5205840) introduced the concept, decomposing conversion-tax payback into SRC plus tax-rate-arbitrage components. Additional SRC alpha lies in tax-drag avoidance. We now formalize the SRC as a separable component with its own PV / FV / IRR identity, distinct from the rate-arbitrage Core.

We prove the SRC's existence four independent ways: (1) algebraically, via the annuity-payment / present-value identity, showing $\mathrm{PV}_r(\mathrm{Outside} - \mathrm{Inside}) = 0$; (2) empirically under Fixed Annuity distributions, where the Outside − Inside per-year ATCF increment is \$1,695.86 in all 20 distribution years, matching the prediction to the cent; (3) empirically under RMD distributions, where varying per-year PV increments sum to within 4 cents of the SRC amount over the 30-year horizon; and (4) by decomposition, showing that the realized Outside/Inside FV difference equals the SRC value.

Prior treatments — Reichenstein & Meyer (2017), McQuarrie & DiLellio (2023), Vanguard's 2025 BETR, Nalebuff/Haghani/White (2025) — recognize the wrapper migration but treat the migrated tax as a forgone cost. We formalize it as a separable asset with its own per-year cash flow and closed-form PV identity, and reconcile McQuarrie (2024)'s "live past 97 to break even" conclusion by incorporating the SRC into the NPV accounting.

---

## 1. Introduction

When a Roth conversion's tax bill is paid from outside the retirement account, after-tax dollars equal to that tax migrate from a taxable wrapper into a tax-free one, where they compound untaxed for the life of the account and any beneficiary period. We call this transfer the **Synthetic Roth Contribution** (SRC). Pay the same tax from inside the account and no such migration occurs — the Roth holds only the converted balance net of tax. The two funding paths produce materially different end-of-life wealth, and the gap is not the spread arbitrage. It is the SRC.

The Roth-conversion literature frames value almost exclusively through the spread arbitrage between the conversion-year rate $t_C$ and the time-weighted distribution rate $t_D$. Funding source is sometimes acknowledged as "helpful" when paid from outside, but has not been formalized as a separable economic component with its own per-year cash flow, PV, FV, and IRR identity — distinct from, and additive to, the rate-arbitrage Core. That is the gap this paper closes.

Cheshire (2025, SSRN 5205840) introduced the SRC framework; §1B summarizes. This paper extends with formal algebraic and empirical proofs, generalizes to RMD-method distributions, and engages directly with the closest related literature.

**Contributions of this paper.**

1. **Formal definition and separable decomposition.** The SRC is defined as the conversion-tax amount $K$ migrating from the bank account into the Roth wrapper under Outside funding, with its own PV / FV / IRR identity distinct from the rate-arbitrage Core, the Medicare-surcharge-reduction alpha, and the RMD tax-drag alpha. To our knowledge, this separable decomposition has not been published outside this framework.

2. **Algebraic proof of the matched-rate PV identity.** When the discount rate equals the portfolio rate, $\mathrm{PV}_r(\mathrm{Outside} - \mathrm{Inside}) = 0$, via the annuity-payment / present-value identity (§4).

3. **Empirical validation under both Fixed Annuity and RMD distributions.** Paired Inside/Outside scenarios confirm the algebraic identity — the constant \$1,695.86/year increment under FA (§5) and a per-year-varying but PV-canceling increment under RMD (§5B), closing the year-0 outflow to within 4 cents over a 30-year horizon.

4. **Wrapper Migration Neutrality as a generalizing principle.** Pure wrapper migrations at constant household wealth impose no PV cost at the portfolio rate. The SRC is one instance of this principle (§3.5).

---

## 1B. Prior Literature

**Reichenstein & Meyer (2017)** — *Valuing Roth Conversion and Recharacterization Options*, Journal of Financial Planning 30(11): 48–56 — express the value of paying conversion tax from outside funds as $tV(1+r)^n - tV(1+R)^n$, where $tV$ = conversion tax ($K$), $r$ = tax-free Roth return, $R$ = after-tax bank return, $n$ = horizon. They observe: *"Strategy 3 has tV more dollars growing at the pre-tax return of r in the Roth IRA."*

That observation *is* the SRC mechanism. The term $tV(1+r)^n$ is the migrated tax dollars compounding tax-free in the Roth — the dominant component of outside-funded conversion value, PV = $K$ at the portfolio rate (§4). But the framework immediately nets it against the bank's forgone growth $tV(1+R)^n$, leaving only the much smaller tax-drag residual; at $R = r$ the expression collapses to zero with no Outside benefit. Reichenstein & Meyer report the residual — the tax-drag alpha — without recognizing the wrapper migration as a separable Roth-equivalent contribution.

Their drag-differential expression is real and prior — not a decomposition of outside-funded conversion value, but a tax-drag alpha calculation that assumes $r > R$. The SRC framework treats it as a special case of the §6 tax-drag-avoidance alpha.

**McQuarrie & DiLellio (2023)** — *The Arithmetic of Roth Conversions*, Journal of Financial Planning, May 2023 — explicitly recognize the migrated tax dollars as *"the invisible, but very real, future value of the [tax] sent to the IRS,"* then subtract that grown value from the Outside Roth as a forgone cost. Year 3: \$100K × 1.10³ − \$25K × 1.085³ = \$133,100 − \$31,932 = \$101,168 vs Inside's \$99,825 → \$1,343 wedge (extends to \$40,386 at year 20). The wedge is the tax-drag alpha. Economically, the tax payment sits in the Roth growing tax-free; M&D's math shows it only as a subtracted cost.

**Passman, Wong, & Dickson (2025)** — *A "BETR" Approach to Roth Conversions*, Vanguard (July 2025) — come closest to recognizing the SRC when they observe that *"paying conversion taxes from a taxable account lets investors move some of their savings (the amount of the conversion taxes) from a taxable account to a Roth account."* Yet they omit conversion tax from the Roth side of the convert/no-convert analysis. To make the math work, they also omit counterfactual bank cash. Jill case (\$100K conversion, 35% current/24% future rate, \$35K tax, Roth multiple 3, taxable multiple 2). Two framings — labeled by what each treats the SRC as — yield the same BETR:

```
SRC as Cost (Vanguard): $230K = $300K × (1 − BETR) → 23.3%
SRC (alternative):      $300K = $300K × (1 − BETR) + $70K → 23.3%
```

Conversion is recommended since 24% > 23.3%, despite an immediate \$11,000 loss of wealth (= \$100K × (35% − 24%)).

Does Jill understand that her advisor's assumed taxable multiple of 2 (vs Roth's 3) implies a 37.5% annual tax rate on investment returns (§6) — implausibly high for most investors?

Vanguard frames the tax payment as a cost rather than a migrated asset.

**Nalebuff, Haghani, & White (2025)** — *Size Matters in the Roth IRA Conversion Decision*, Elm Wealth (June 18, 2025) — is a practitioner article on wrapper migration. Their "Reason 1" frames outside-payment as "effectively making the IRA more than 50% bigger" and states (without derivation) a closed-form $\tau_1 \cdot \tau_2 \cdot \mathrm{Size} \cdot \mathrm{growth}$ heuristic. The framing substantively aligns with the SRC concept, but the formula collapses ordinary-income and capital-gains rates into one term and gives a single FV result rather than a year-by-year cash-flow stream with its own IRR and PV identity. The article cites no prior work on the topic. Post-dates Cheshire (2025); cited as parallel evidence the concept is being independently surfaced.

**Cheshire (2025)** — *Roth Conversion Valuation & Mechanics*, SSRN 5205840 (April 4, 2025) — is the immediate precursor to the present paper. It introduces the Synthetic Roth Contribution term and concept, establishes that the SRC equals the conversion tax when $\mathrm{MTR}_D = \mathrm{MTR}_C$, decomposes conversion-tax payback into SRC plus tax-rate arbitrage, and develops the framework for single and MFJ filers across worked examples (Appendices A–D). What that paper does not contain — and what the present paper supplies — is (a) the formal $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$ algebraic proof of PV equivalence at the portfolio rate; (b) empirical paired-run validation against a production calculation engine to within rounding; (c) the RMD generalization showing the identity holds under non-uniform distribution paths; and (d) the separable IRR decomposition on the Outside-funded cash-flow stream. The present work is positioned as a rigorous extension, not a re-claim, of the framework introduced there.

**McQuarrie (2024)** — *Net Present Value Analysis of Roth Conversions*, Journal of Financial Planning 37(7/9): 76–90. Wrapper migration at the heart of Outside-funded conversions is not separately tracked in McQuarrie's NPV accounting: \$22,000 of after-tax dollars moves from a taxable into a tax-free wrapper, compounding tax-free for the life of the account. That migration is the Synthetic Roth Contribution.

McQuarrie's framework offsets the tax payment against future RMD tax savings, discounted at the portfolio rate. In his 22% → 25% base case on \$100K, *"\$7,000 remains to be defrayed"* at life expectancy and *"\$22,000 is totally cashed out"* at age 97. He concludes the \$22K was *"in all but name, a loan to the government"* and that paying conversion tax from outside funds is *"not all that helpful."*

Two considerations arise.

*First*, the loan analogy is backwards. The IRS effectively lends the deferred tax to the investor — interest-free, for potentially decades. Under Inside funding, the IRS gets the same \$22K back with no out-of-pocket cash, confirming there was never a taxpayer loan. Settling a \$25K liability today repays the IRS loan while booking a \$3K profit — helpful and prudent.

*Second*, McQuarrie's framework misses the wrapper composition. The RMD-savings stream is identical under Inside funding — his framework does not distinguish the two funding paths. The *"\$22,000 paid out of pocket up front"* he calls a loan actually sits in the Roth. The NPV = 0 result obscures this wrapper migration.

| | Trad (pre-tax) | Roth (tax-free) | Bank (after-tax) | Total after-tax |
|---|---|---|---|---|
| **Pre-conversion** | \$100K (\$75K AT) | \$0 | \$22K | **\$97K** |
| **Outside payment** | \$0 | \$100K | \$0 | **\$100K** |
| **Inside payment** | \$0 | \$78K | \$22K | **\$100K** |

Outside and Inside create identical wealth but Outside puts \$22K more in the Roth wrapper. McQuarrie's analysis runs off the \$100K Traditional balance and does not track the post-conversion Roth separately, so this \$22K cannot appear in his calculation. The matched-rate PV identity of §4 explains why his discounted RMD savings come up exactly \$22K short: Table 1 Column 8 — tax-at-22% on each RMD, discounted at his 6% portfolio rate — sums to \$22K, equal to the tax payment. McQuarrie published the column and computed Col 7 − Col 8 (the \$3K Core), treating the \$22K as a cost. Col 9 itself encodes the decomposition: −\$22K (SRC) at start, +\$3K (Core) at end — separated by \$25K = PV(Col 7). The matching \$22K asset — sitting in the Roth — remains outside the calculation.

Further considerations.

*First*, conversion NPV is a positive or negative number, locked in at year 0. McQuarrie's Col 9, labeled "NPV-to-This-Point," runs from −\$22K at year 0 to +\$3K at distribution end — as if NPV accrues over time. But NPV is a year-0 scalar by definition; the decision was settled at conversion. Time only unfolds the consequences.

*Second*, the "not all that helpful" conclusion is antithetical to the widely accepted desirability of moving dollars into a tax-free wrapper. The benefit holds even absent any rate-spread profit — applying equally to statutory Roth contributions and the Synthetic Roth Contribution.

**Other practitioner literature** — Kitces, Slott, Pfau, the Bogleheads NPV threads, and major brokerage research — advises paying conversion tax from outside funds when feasible but never separates the value as a standalone PV / FV / IRR bucket or states the PV identity. Stowe, Fodor, and Stowe (2013) — *Financial Analysts Journal* — note in their now-defunct recharacterization-option analysis that outside-funded tax raises terminal value by ~3 percentage points, but treat it as a parameter sensitivity. The formal decomposition is absent from this body of work.

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

The pattern in §3.3 and §3.4 generalizes:

**Wrapper Migration Neutrality**: any transaction altering tax-wrapper composition without changing contemporaneous after-tax wealth imposes no cost — it is reallocation, not expense.

Examples:

- A **statutory Roth contribution** of $X$ dollars moves $X$ of after-tax cash from the bank wrapper to the Roth wrapper.
- An **Outside-funded Roth conversion** moves $K$ after-tax dollars from the bank wrapper to the Roth wrapper (implicitly, via the conversion-tax payment), in addition to the rate-arbitrage on converted principal.
- A **taxable-to-HSA migration** moves after-tax dollars from a bank wrapper into a triple-tax-advantaged HSA wrapper.

Each is identical at the migration moment: after-tax wealth conserved, only wrapper composition changes. Future value emerges through the source/destination drag differential, but migration itself imposes no cost.

### 3.6 Definition

The Synthetic Roth Contribution (SRC) is the conversion-tax amount ($K$) that migrates from the bank account into the Roth wrapper via the conversion-tax payment in an Outside-funded conversion. It is economically equivalent to a same-day statutory Roth contribution of $K$, but is not subject to IRS annual contribution limits.

### 3.7 Properties

**Property 1 — Wrapper transition.** Under Outside funding, the household ends the conversion year with $K$ fewer dollars in the taxable wrapper and $K$ more dollars (relative to the Inside scenario) in the Roth wrapper.

**Property 2 — Tax-drag elimination.** The $K$ dollars now grow at the Roth's tax-free rate $r$ rather than the taxable wrapper's after-drag rate $r_d = r \cdot (1 - d)$. This benefit is approximately $K \cdot (r - r_d)$ per year if the $K$ cash would have remained invested at $r_d$.

### 3.8 What the SRC Is Not

The SRC is not the rate-arbitrage, $(t_D - t_C) \cdot C$, captured at conversion — present in both Outside and Inside settlement. The SRC appears only under Outside settlement, and only as a wrapper-composition difference — not a change in net after-tax wealth.

---

## 4. Algebraic Proof: PV Equivalence at the Portfolio Rate

At the portfolio discount rate, the SRC adds a cash-flow stream with zero NPV — nominal-cash-flow-positive over the distribution period.

Outside funding adds yearly Roth distributions of $K \cdot \mathrm{AF}(r, N)$ (fixed-annuity payment formula) with year-0 outflow of $-K$. The Outside-vs-Inside ATCF difference is exactly $K \cdot \mathrm{AF}(r, N)$ in each of the $N$ distribution years.

**Net present value of the SRC stream (Outside vs Inside with constant inputs):**

$$
\begin{aligned}
\mathrm{PV}_{SRC}
  &= -K + \sum_{t=1}^{N} \frac{K \cdot \mathrm{AF}(r, N)}{(1 + r)^{t}} \\[6pt]
  &= -K + K \cdot \mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) \\[4pt]
  &= -K + K \cdot 1 \\[4pt]
  &= 0
\end{aligned}
$$

The cancellation $\mathrm{AF}(r, N) \cdot \mathrm{PVA}(r, N) = 1$ is an annuity identity. When discount and portfolio rates are equal, the **Outside-funded SRC produces zero net present value.** However, the SRC's K dollars generate $K \cdot \mathrm{AF}(r, N) \cdot N = 1.888K$ in nominal lifetime payouts (at $r = 7\%$, $N = 20$) — K plus its time-value return.

**The SRC's lasting value:** $K$ compounds tax-free at $r$ instead of suffering drag at $r_d$, generating $K \cdot (r - r_d)$ in annual tax-drag-avoidance alpha (Property 2; §6).

**Scope of the PV identity:** It is a property of the same matched-rate framework employed by McQuarrie (2024), Vanguard / Passman (2025) BETR, and Reichenstein & Meyer (2017) — not an artifact of discount choice. If a retiree's discount rate $\rho$ differs from $r$, the identity breaks ($\rho > r$ → negative SRC PV; $\rho < r$ → positive), but most risk-averse retirees have $\rho \le r$, keeping the SRC neutral-to-favorable.

---

## 5. Empirical Proof: Paired Inside / Outside Scenarios (Fixed Annuity)

We compare Inside vs Outside simulation runs using identical inputs.

**User profile:**
- Age 69, Single filer
- Traditional savings: \$1,000,000; Roth savings: \$0

**Shared inputs (both scenarios):**
- Distribution method: Fixed Annuity (FA), start age 70
- 20-year owner life expectancy
- Portfolio return assumption: 7.00%
- Inflation assumption: 2.50%
- Social Security benefit: \$50,000/yr starting age 70
- Medicare coverage: Parts B & D
- No other taxable income in conversion or distribution years

**Conversion (both scenarios):** $C$ = \$123,850.00, fills through 22% cumulative bracket. $K$ = \$17,966.00 ($t_C = 14.51\%$). Time-weighted $t_D = 22.39\%$. Annuity-factor multiple = 1.88786.


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

All §5 inputs apply except distribution method: $C$ = \$123,850, $K$ = \$17,966, 7.00% portfolio return, 20-year life expectancy. RMDs run ages 73–92 (years 2030–2049) using IRS Uniform Lifetime Table divisors; ages 93–102 (years 2050–2059) use level annuity distributions under SECURE Act's 10-year beneficiary period. Roth accounts have no RMDs but are modeled identically to Traditional here for Outside-vs-Inside comparability.

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

- **Funding (Inside vs Outside), conditional on conversion:** Outside relocates $K$ from a taxable wrapper compounding at $r_d$ to a tax-free wrapper compounding at $r$ — the IRS allows this conversion-tax investment (SRC) that others miscast as a cost. The payoff is the tax-drag-avoidance alpha of §6 (\$1,021 PV in the Outside RMD scenario), added to the conversion alpha sum to give total Outside-conversion alpha.

Once the conversion decision is made, Outside funding is simply an added capital allocation decision.

---

## 8. Conclusion

The Synthetic Roth Contribution is the economic equivalent of a Roth contribution that occurs when conversion tax is paid from outside the retirement account. Cheshire (2025, SSRN 5205840) introduced the concept; this paper proves it four independent ways:

1. **Algebraic.** The annuity-payment / present-value identity proves that when the discount rate equals the portfolio rate, the Outside vs Inside PV difference is exactly zero — yet Outside funding creates a constant $K \cdot \mathrm{AF}(r, N)$ of additional cash flow in every distribution year.

2. **Empirical (FA case).** Paired Inside FA and Outside FA scenarios confirm a constant **\$1,695.86/year** increment matching the algebraic prediction to the cent, with identical **\$9,766 PV totals**. SRC (FV) = \$33,917.27 = $K \times$ annuity-factor multiple (§5).

3. **Empirical (RMD case — generalization).** Under RMD, the per-year (Outside − Inside) increment varies but its PV sums to **+\$17,965.96**, within 4 cents of $K$. SRC (FV) = \$71,229.59 matches the 30-year nominal sum to \$0.13 (§5B).

4. **Decompositional.** The realized FV difference between Outside and Inside paths cannot be reconciled without including the SRC term as a separable component alongside spread arbitrage, Medicare-surcharge savings, and reduced-RMD tax-drag.

The SRC's lasting value emerges not from PV at the portfolio rate (which is zero) but from the tax-drag differential between Roth and taxable wrappers — the channel that compounds the SRC's $K$ dollars at $r$ instead of $r_d$ over the post-conversion horizon. **Establishing the SRC turns Roth conversion analysis from a tax-rate-spread calculation into a convert plus wrapper-allocation decision.**

**Implications for practice:**

- **The SRC is a separable wrapper migration with its own PV / FV / IRR identity.** The matched-rate PV identity $\mathrm{PV}(\text{Outside} - \text{Inside}) = 0$ at the portfolio rate has not, to our knowledge, been published outside this framework. Reichenstein & Meyer (2017), Vanguard BETR (2025), and Nalebuff/Haghani/White (2025) each capture related parts but do not state the identity.

- **The SRC's tax-drag-avoidance alpha is a fourth conversion alpha component.** Alongside the rate-arbitrage Core, Medicare-surcharge-reduction alpha, and RMD tax-drag alpha, the SRC's tax-drag-avoidance alpha (under Outside funding) emerges from $K$ compounding at the Roth's tax-free $r$ instead of the taxable account's drag-affected $r_d$. Calculators that pool funding-source into a single "conversion value" miss this distinct signal — especially when $t_C > t_D$, where the rate-arbitrage Core is negative but the tax-drag-avoidance alpha can still render a positive total.

- **Break-even time frames no longer hold under SRC accounting.** Profits are booked at conversion time and play out over the horizon — there is no recoupment-age threshold because there is no cost. McQuarrie (2024)'s age-97 break-even is one example: discounted RMD savings are computed against a one-sided conversion-tax "cost" rather than against a wrapper migration of the household's own funds. The framing also misreads saving intent: a horizon out to age 97 doesn't make a conversion bad, it confirms the household is doing what investing is for.

---

## References

Cheshire, S. (2025). *Roth Conversion Valuation & Mechanics*. SSRN Working Paper 5205840 (April 4, 2025). https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5205840

Nalebuff, B., Haghani, V., & White, J. (2025). *Size Matters in the Roth IRA Conversion Decision*. Elm Wealth Research Note (June 18, 2025). Republished by Advisor Perspectives, July 14, 2025. https://elmwealth.com/roth-conversion/

McQuarrie, E. F. (2024). *Net Present Value Analysis of Roth Conversions*. Journal of Financial Planning 37(7/9): 76–90.

McQuarrie, E. F., & DiLellio, J. (2023). *The Arithmetic of Roth Conversions*. Journal of Financial Planning, May 2023.

Passman, A. (2025). *A "BETR" Approach to Roth Conversions*. Vanguard Research (July 2025). https://corporate.vanguard.com/content/dam/corp/research/pdf/a_betr_approach_to_roth_conversions_072025.pdf

Reichenstein, W., & Meyer, W. (2017). *Valuing Roth Conversion and Recharacterization Options*. Journal of Financial Planning 30(11): 48–56.

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
| Cash-Flow IRR | — (no outside outlay) | **15.014%** |
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
| Cash-Flow IRR | — (no outside outlay) | **11.497%** |
| Return Multiple | — | 6.7788 |
| Duration (yrs) | — | 22.97 |

**Notes.**

- **Synthetic Roth Contribution (FV).** Outside FA = \$33,917.27 = $K \times$ 1.88786; Outside RMD = \$71,229.59 ≈ nominal 30-year (Outside − Inside) ATCF delta of \$71,229.46. RMD's larger nominal SRC reflects longer compounding — RMD's 10-year beneficiary window compounds beyond FA's owner-only 20 years. PV at 7% is identical (\$17,966 = $K$), as the §4 identity requires.
- **Time-weighted $t_D$ is higher under RMD** (25.23% vs FA's 22.39%) because RMD's later, larger distributions push into higher brackets.
- **SRC Tax-Drag** alpha is non-zero only under Outside payment — capturing the value of $K$ dollars avoiding taxable-account drag.
- **Conversion alpha components — identical for Inside and Outside** — confirm funding-source independence under each distribution method. Alphas: Tax-Rate Spread, Medicare-Surcharge Savings, and RMD Tax-Drag.
- **Total ATCF (FV) differs between scenarios by the SRC's lifetime payout.** Under FA: Outside \$65,854 = Inside \$31,937 + SRC \$33,917.
- **Cash-Flow IRR** for Outside (15.0% FA, 11.5% RMD) exceeds the 7% portfolio rate because the lifetime distributions include the conversion's alpha — rate-arbitrage spread, Medicare savings, RMD tax-drag savings, and SRC tax-drag avoidance. Inside has no out-of-pocket cash; IRR is undefined.

---

*Draft prepared 2026-05-18. Empirical results produced by the RothGPT calculation engine.*
