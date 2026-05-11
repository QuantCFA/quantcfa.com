# RothGPT: How It Solves the Roth Conversion Decision

*A practitioner's guide for advisors and sophisticated DIY investors*

---

## 1. The Decision Almost No One Solves Correctly

A Roth conversion looks deceptively simple. You move money from a Traditional IRA or 401(k) to a Roth, pay tax on the converted amount today, and avoid tax on it later. The textbook test: *if your future tax rate will be higher than today's, convert; if lower, don't*.

That heuristic is wrong, or at best incomplete, in nearly every real-world case. It fails for three structural reasons that no commercial calculator — Vanguard, Fidelity, Schwab, T. Rowe Price, MaxiFi, Holistiplan, Right Capital — addresses simultaneously:

1. **There is no single "future tax rate."** The phrase is mathematical fiction. A retiree's future income hits different marginal brackets every year, in different amounts, with non-linear interactions from Social Security taxation. The brackets and standard deductions themselves inflate annually, so the targets are moving even when income is flat. An "average" of these rates collapses information that determines the answer.
2. **The account is statutorily forced to zero, not grown in perpetuity.** RMDs (mandatory by federal law starting at age 73 or 75) plus the SECURE Act's 10-year heir liquidation rule mean the account *must* be empty within roughly 40 years. Yet most software displays accounts arching upward parabolically — a projection not simply overly optimistic, but illegal.
3. **The conversion tax is not a cost.** When paid from outside the Traditional account, it is a Roth capital contribution that bypasses statutory contribution limits. Treating it as an expense is a common analytical error.

RothGPT was built around correcting all three errors at once. This document explains how, and why each component is non-negotiable.

---

## 2. The Prerequisite: A Full Distribution Schedule

Before any number — distribution tax rate, tax-rate spread, IRR, PV, break-even — can be computed correctly, the model must answer one question: *exactly how, and when, will every dollar in this Traditional account be distributed?*

This is not optional. Every metric the decision rests on is path-dependent on the answer.

### Why "rules of thumb" fail here

A typical calculator asks for a single "future tax rate" and applies it to the entire converted amount. The retiree, or the advisor, types in 22%. The model proceeds. The output is precise, beautifully rendered, and substantively meaningless — because the retiree will not actually face one tax rate. They will face a different rate every year, depending on:

- Annual Traditional distribution (which depends on the distribution method chosen)
- Social Security benefit (inflated annually)
- The taxable portion of SS (which depends on provisional income, which depends on the distribution)
- Standard deduction (inflated annually)
- Tax brackets (inflated annually)
- IRMAA bracket position (which depends on MAGI two years prior)
- Heir's income during the post-death 10-year liquidation window

A flat-rate assumption ignores all of this.

### The Statutory Distribution Horizon

The relevant horizon is roughly:

```
[run year] → [distribution start] → [owner death] → [10-year heir liquidation] → [forced zero]
```

For a 65-year-old today expecting to live to 90, with adult heirs, the model must project ~25 years to the owner's death and 10 more for the heir window — roughly 35 years in total. That is the universe of dollars the conversion decision is being made about. Distributions over this horizon sum to 100% of the account; any truncation is an omission, not an approximation.

### Two distribution methods

RothGPT models two regimes the user can choose between:

- **Fixed Annuity ('F')**. Constant real annual distributions sized so the account is exactly depleted at the end of the user's chosen life period. Suited to retirees who need a steady income stream.
- **RMD-Only ('R')**. Statutory IRS-table distributions during the owner's life (typically much smaller in early years), then a 10-year level-annuity liquidation by the heir. Suited to retirees who don't need the income and want to maximize the inheritance.

The two regimes produce very different distribution paths and therefore very different time-weighted distribution tax rates. The same Traditional balance, with the same future inflation assumptions, can yield a meaningfully different conversion decision depending which method is selected. Because most software supports neither path properly, this distinction alone separates RothGPT from the field.

---

## 3. The Time-Weighted Distribution Tax Rate (t_D)

Once the distribution schedule exists, the central calculation becomes possible: the **time-weighted distribution tax rate**, *t_D*. This is the rate at which Traditional dollars *are actually taxed when they leave the account*, with every dollar mapped to the specific marginal bracket it lands in, in the specific year it lands.

The formula is conceptually simple:

```
t_D = (sum of federal tax owed on all future Trad distributions)
      ÷ (sum of all future Trad distributions)
```

The arithmetic is simple. The work is in computing both numerator and denominator dollar-by-dollar through every year of the distribution schedule, with all inflation adjustments applied to brackets, deductions, and SS benefits, and with the SS torpedo properly captured at the marginal level. IRMAA does not enter t_D — it's a Medicare premium surcharge, not a federal tax — but it enters the IRR calculation as a cash-flow component (Section 5.5).

### Why averaging fails

Suppose a retiree's distribution schedule passes through years where marginal brackets are 12%, 22%, and 24%. An advisor who quotes "an average future rate of about 19%" is making the same error as quoting an "average return" on a portfolio with sequence-of-returns risk. The average loses the information that determines the decision.

What matters is *which dollars get taxed at which rate, in which year*. The first dollar of a distribution may face 12%; the last dollar of the same distribution may face 24% if it spills into the next bracket. The "average" tells you neither.

### The 1.85x Social Security Torpedo Multiplier

The most punishing — and most overlooked — feature of retiree taxation is the way Social Security becomes taxable. Once provisional income exceeds the upper threshold, every additional dollar of *other* taxable income makes up to **\$0.85 of additional Social Security taxable**.

Concretely: a retiree in the nominal 22% bracket with SS being incrementally taxed sees an effective marginal rate of **22% × 1.85 = 40.7%**. A retiree in the nominal 12% bracket with the same dynamic sees **12% × 1.85 = 22.2%**.

These are the *real* tax rates. They are what the dollar coming out of the Traditional account actually pays.

### The torpedo drifts; it is not a static hump

A subtle point that almost every other tool gets wrong: the torpedo zone is not a fixed event in early retirement that ends. It is a dynamic field that *moves* through the retiree's lifetime.

The reason: SS benefits are inflated annually (cost-of-living adjustments). Tax brackets are inflated annually. But the SS provisional-income thresholds (\$25,000 / \$34,000 single; \$32,000 / \$44,000 joint) were set in 1983 and **have never been indexed**. They are nominal, fixed, and shrinking in real terms every year.

Meanwhile, Fixed Annuity distributions are typically held flat in nominal terms. So a retiree starts retirement with their distributions in (say) the 22% nominal bracket, where the torpedo produces a 40.7% actual rate. Years later, with brackets having inflated past those flat distributions, the same retiree drifts into the 12% nominal bracket — but the SS thresholds haven't moved, so the torpedo still applies, now at 22.2% (12% × 1.85).

This drift is invisible to any model using a single "average future tax rate." RothGPT captures it because every year is computed independently with the actual inflated brackets, the actual SS benefit for that year, and the actual marginal mechanics for that filer in that year.

### IRMAA non-linearities

Medicare Part B and Part D premiums step up at specific MAGI thresholds, with two-year lookbacks. A conversion that triggers a single dollar past a threshold today can cost thousands in surcharges *two years later*. Conversely, future Traditional distributions reduced by the conversion can drop below future inflation-adjusted MAGI thresholds and save those surcharges.

The IRMAA effect is non-marginal in the textbook sense — it's a step function — but in practice it acts like a sharp marginal-rate spike at each cliff. RothGPT computes the IRMAA savings (or cost, where applicable) for every distribution year of every conversion strategy, then discounts to present value.

---

## 4. The Conversion as a Capital Allocation Decision

The orthodox framing of a Roth conversion is "pay tax now to avoid tax later." That framing is incomplete and, when the tax is paid from outside the Traditional account, actively misleading.

### Inside vs. Outside funding: same arbitrage, different second component

When the conversion tax is paid **from inside** the Traditional account (the IRS allows it if you're 59½ or older), the user's net worth changes immediately by the Net PV of the conversion shown in the conversion table — the present value of the spread profit, IRMAA savings, and tax-drag avoided on reduced future Traditional distributions. This is *realized*, not pending: the wealth shift happens at the moment of conversion. No outside cash is required; nothing leaves the user's pocket.

When the tax is paid **from outside** the Traditional account, the same Net PV is realized — the spread, IRMAA savings, and reduced-distribution tax-drag components are identical to inside-funded conversions. What's *additional* for outside is that the cash used to pay the conversion tax has been relocated into the Roth wrapper as a **Hidden Roth Contribution**. That cash now grows tax-free; its tax-drag avoidance is reflected in the Future-Value section of the table as part of the Hidden Contribution's FV (not in the Net PV column, which is funding-method-neutral). It is a Roth capital contribution the statute does not otherwise permit.

This is the **Synthetic Roth Contribution**. Outside-funded conversions execute it; inside-funded conversions do not. It is the single most under-appreciated feature of retirement tax planning.

The economic distinction:

| | Inside-funded | Outside-funded |
|---|---|---|
| Tax-rate spread profit (PV) | Yes | Yes |
| IRMAA savings (PV) | Yes | Yes |
| Reduced-distribution tax-drag (PV) | Yes | Yes |
| Hidden Roth Contribution (FV) | No | Yes |
| Net out-of-pocket today | Zero | The conversion tax |

Inside-funded conversions are "free" arbitrage (assuming the user is past 59½). Outside-funded conversions are an investment — the user is choosing to deploy capital today for a future return. RothGPT shows both side-by-side.

### The conversion tax is the purchase price, not the cost

For outside-funded conversions, the practitioner-relevant reframe:

- Old framing: *"You pay \$20,000 in tax now to save tax later."*
- Correct framing: *"You purchase \$20,000 of permanent Roth-wrapped wealth at par, plus a tax-rate spread asset whose value depends on the difference between today's conversion rate and your future time-weighted distribution rate, plus a stream of avoided IRMAA surcharges, plus elimination of tax drag on the \$20,000 over the rest of your lifetime."*

The price is the same (\$20,000 today). What's purchased is a bundle. RothGPT prices each component separately and sums them.

---

## 5. What RothGPT Quantifies (and How)

For every conversion strategy the user considers, RothGPT computes the following components, each in present-value today's dollars:

### 5.1 Tax-Rate Spread (PV)

The spread is computed bottom-up from year-by-year **after-tax cash-flow deltas** caused by the conversion. The mechanism each year: the conversion shifts dollars out of taxable Traditional distributions and into tax-free Roth distributions. Traditional distributions go down (and the federal tax on them goes down at whatever marginal rate that bracket would have triggered); Roth distributions correspondingly go up *in proportion to the converted amount*, keeping total distributions constant. The user's net after-tax cash flow rises by the avoided tax — that net rise is the conversion's per-year cash-flow benefit. RothGPT discounts each annual delta to present value at the portfolio return rate, then subtracts the conversion tax paid today:

```
spread (PV) = −conv_tax + PV( ATCF_post_conv − ATCF_pre_conv,  for each year )
```

This bottom-up approach is required: the tax rate on every distributed dollar depends on which marginal bracket it lands in, what the SS torpedo is doing that year, and how brackets have inflated by then — none of which collapses cleanly into a single rate ex ante. The time-weighted distribution tax rate *t_D* (Section 3) is built from this same data, not the other way around.

The classical algebraic form

```
spread (PV) ≈ (t_D − t_C) × X
```

is a useful verification check (where *t_C* is the conversion-year tax rate, *t_D* is the time-weighted distribution rate, *X* is the converted amount). Bottom-up and algebraic-form results should agree to within rounding.

The spread captures the pure tax-rate arbitrage: converting today at *t_C* vs. distributing later at *t_D*. Positive spread (*t_D > t_C*) favors conversion; negative spread (*t_D < t_C*) favors doing nothing. But spread is one of three PV components — the conversion decision is determined by Net PV (Section 5.4), not by spread alone. A negative spread can still produce a profitable conversion if IRMAA savings or reduced-distribution tax-drag dominate; a positive spread can still produce a loss if conversion-year IRMAA cliff costs dominate.

### 5.2 Medicare Surcharge Impact (PV)

For every future year of the distribution schedule, RothGPT compares the IRMAA premium liability with and without the conversion, sums the differences, and discounts to present value at the portfolio rate. The result can be positive (net savings) or negative (net cost), depending on the conversion size and the user's MAGI position relative to the IRMAA bracket cliffs.

The mechanics resolve into two opposing forces:

- **Future savings.** The conversion shrinks the Traditional balance, which reduces future RMDs and distributions, which lowers future MAGI. If future MAGI drops below an IRMAA threshold the user would otherwise have crossed, the savings can be thousands of dollars per year for a couple.
- **Conversion-year cost.** In the conversion year itself, the conversion *increases* MAGI by the converted amount. With IRMAA's two-year lookback, this raises the user's IRMAA bracket two years later. For a retiree converting near a cliff, this conversion-year-driven cost can be the dominant component — and in many cases the only one — making the net IRMAA PV negative.

The number reported in the table is the net of both effects, sign-correct. A negative IRMAA PV doesn't necessarily kill the conversion (the spread or tax-drag components may still dominate), but it must be included for Net PV to be honest.

### 5.3 Tax Drag Benefit (PV)

When a conversion shrinks the Traditional balance, future distributions correspondingly shrink. After paying taxes, these avoided distributions, had they occurred, would be reinvested in a taxable account — leaking roughly 1–3% per year to capital gains, dividend, and state taxes (more for high-income filers). The conversion eliminates this leak: leaving dollars in the Roth wrapper, drag-free. The PV of avoided drag over the remaining lifetime contributes to Net PV. This component is funding-method-neutral — it depends on reduced future distributions, not whether the conversion tax was paid from inside or outside.

**Reinvestment percentage (unique to RothGPT).** Most tools that even attempt this calculation assume avoided distributions are 100% reinvested. RothGPT lets the user set the reinvestment percentage explicitly, with sensible defaults: **100% for the RMD-only distribution method** (since the retiree, by definition, didn't need that income — that's why they chose RMD-only) and **20% for the Fixed Annuity method** (since fixed-annuity distributions are typically structured for spending, with only a small surplus reinvested). The reinvestment assumption materially affects the magnitude of the tax-drag component, so making it explicit and adjustable matters.

**Hidden Roth Contribution drag.** The drag-avoidance described in the previous paragraph — keeping dollars in a tax-advantaged wrapper rather than a taxable one — is *the* fundamental advantage of any retirement-account wrapper, Roth or Traditional. The Hidden Contribution applies that same mechanism to the conversion-tax dollars: cash that the statutory Roth contribution limit would otherwise have left in the taxable wrapper, leaking annually, now sits inside the Roth, drag-free.

For outside-funded conversions, this drag-avoidance is *not* a separate PV line item. It is embedded in the Future Value of the Hidden Contribution: those dollars now compound tax-free inside the Roth, where they would otherwise have grown at portfolio-return-minus-drag in the taxable account. That FV difference appears in the Future-Value section of the table, not the PV section.

### 5.4 Net PV

```
Net PV = spread_PV + IRMAA_PV + reduced_distribution_tax_drag_PV
```

This is the **immediate wealth gain** of executing the conversion, expressed in today's dollars. It is the single number that tells the user, in plain terms, "this conversion is worth $X to you today." Positive Net PV means a profitable conversion; negative Net PV means an unprofitable one.

The PV components don't simply add to a total — they interact, often in non-intuitive ways. Larger conversions deepen the spread but may push the retiree across an IRMAA cliff or trigger more SS-torpedo years on the conversion side. A small conversion may capture mostly tax-drag avoidance with negligible spread; a larger one may tip into materially positive territory because the Traditional balance reduction drops the retiree into a lower future IRMAA bracket. These interactions can't be predicted from the component definitions — they depend on the specific user's distribution path, IRMAA position, and SS situation. RothGPT's response is to present every component's PV separately, for every IRS bracket-fill increment, in rank-ordered tables. The advisor or DIY user can scan the columns (spread, Medicare surcharge, tax drag, Net PV) across the bracket sizes and see at a glance which component is driving the answer, where the cliffs hit, and where the sweet spot lives. Component-level transparency is what other software doesn't provide.

(Hidden-Contribution drag is reflected in the FV section)

### 5.5 IRR on the Tax Payment

For outside-funded conversions, RothGPT computes the Internal Rate of Return on the conversion tax dollar. The cash flow stream is:

```
Year 0:   −(conversion tax paid)
Years 1..N: +(annual net after-tax cash flow effect of the conversion)
```

The annual cash flow in years 1..N captures every channel through which the conversion alters the user's after-tax cash flow that year:

- **Distribution swap and federal tax delta.** Smaller Trad distribution + larger Roth distribution + lower fed tax owed = a single net after-tax distribution change.
- **IRMAA delta.** Savings (positive) or cost (negative) from the conversion's MAGI effect.
- **Tax-drag avoidance.** Drag the user *would have* paid on reinvested portions of distributions that no longer occur.

Solving for the IRR yields the *return on the capital deployed as conversion tax*. This number is directly comparable to the user's portfolio return assumption. If the IRR exceeds the portfolio return, the conversion has alpha — better than letting that capital sit in a taxable brokerage account (equivalently: Net PV > 0). If IRR lags, the conversion has negative alpha and Net PV < 0.

For inside-funded conversions with no out-of-pocket cost, IRR is undefined and Net PV is the relevant criterion. IRR is reported as +100% when Net PV is positive and −100% when negative.

### 5.6 Break-Even: Rate, Not Time

Practitioners hit two "break-even" frameworks in the conversion literature: **break-even time** (how long until the conversion "pays for itself"?) and **break-even rate** (what threshold rate makes conversion indifferent?). The first is mythical; the second is salvageable but commonly misimplemented. RothGPT subsumes both — via Net PV (which captures the answer at the moment of conversion) and the dollar-valued tax-drag components in §5.3 (which capture the rate-equivalent insight in actionable form).

**Break-even time is a mirage.** Such frameworks assume the Roth grows indefinitely until tax-free growth overtakes the upfront tax, but RMDs force distributions until the heir's 10-year window forces full liquidation. The account rises then glides to zero over a 30–40-year schedule. Because the account life is statutorily fixed and deterministic, what would otherwise be an open-ended search problem becomes a closed-form valuation — spread effects, IRR, and Net PV are computable exactly at the moment of conversion, with the future cash-flow stream bounded and known. There is no "break-even year"; the conversion is profitable or not over the fixed account lifecycle.

**Break-even rate** is the right concept, but Vanguard's BETR ("A BETR Approach to Roth Conversions," 2025) implements it with a circularity: BETR is fully determined by the advisor's tax-drag multiple *M'*. M' = 2.0 yields one BETR; M' = 2.1 yields a different one — different enough to flip the recommendation. The "break-even" is whatever the advisor's drag assumption makes it. A more actionable framing inverts the question: *"what tax drag on taxable investments makes the conversion indifferent, given expected t_D?"*. The advisor can act on this — restructure the client's taxable holdings to keep actual drag below the break-even threshold. The drag rate becomes a managed variable, not a hidden assumption.

**What RothGPT does BETTER.** RothGPT operationalizes the actionable framing via the **reduced-distribution tax drag PV** and the **Hidden Roth Contribution FV drag** (both §5.3), which quantify drag's dollar-cost with and without the conversion. The tax drag on taxable investments is an explicit input (`tax_drag_assum`); Net PV absorbs the components and answers the conversion question in dollars, not implied rates.

---

## 6. Why the Discount Rate is the Portfolio Return

A common question: when discounting future IRMAA savings or future spread cash flows to present value, why use the portfolio return rate rather than inflation, or a "risk-free" rate?

Three reasons:

1. **Consistent nominal-on-nominal**. The cash flows are in nominal future dollars (brackets, SS, IRMAA thresholds, premiums all inflate annually in the model). Discounting at the nominal portfolio return gives a consistent NPV. Using inflation alone would inflate (literally) the PV by ignoring opportunity cost; using a risk-free rate would make all the components look much larger and falsely flatter the conversion case.
2. **Opportunity cost is portfolio return**. The user could have invested those future avoided-tax dollars in their portfolio. The portfolio return is what the dollars are forgoing if locked in the Traditional account versus released as savings. That is the textbook NPV setup.
3. **Conservatism**. Future tax savings are arguably statutorily more certain than equity returns, so a sophisticated argument could justify a lower (more bond-like) discount rate, which would *increase* their PV. Using portfolio return is the *conservative* choice — it makes the conversion work harder to show positive Net PV. RothGPT errs on conservatism.

All four PV components (spread, IRMAA, tax drag, IRR cash flows) use the same discount rate. The internal consistency means the components are summable and comparable.

---

## 7. The Upside-Down U: The Wealth Path That Is Honest

Almost every retirement-planning tool plots projected account value as a smooth upward curve, often into the user's nineties or beyond. This is not optimistic. It is **mathematically wrong**.

The federal tax code requires:
- RMDs from age 73 or 75 onward (mandatory withdrawals scaling with statutory divisors)
- Full liquidation by the heir within 10 years of the owner's death (SECURE Act)

The path the account *must* follow, by law, is:
- Wealth accumulation through working years (upward)
- Peak around retirement / pre-RMD
- Decumulation through RMDs and distributions (downward)
- Forced liquidation in 10 years post-death (downward to zero)

That shape is an **upside-down U**, sometimes flattened or skewed depending on inputs, but always terminating at zero. RothGPT visualizes the account this way because that is what is actually going to happen.

The practitioner consequence: any tool projecting infinite growth is implicitly assuming the law won't apply to the client. Conversion math built on that assumption is built on a fiction.

---

## 8. What the Output Looks Like

Concretely: when the user enters their data and runs the calculation, RothGPT returns two stacked tables on the Conversions tab. The first is the decision view; the second is the analytical decomposition.

**The Decision Table (cumulative).** Each row is a candidate conversion strategy — bracket-fill amounts that progressively grow. The user picks one.

```
Bracket  Amount Conv   Tax Paid   Spread PV  Medicare PV  Drag PV   Net PV (alpha)  HC Growth   Net FV (alpha)  Total Spend   IRR     t_C    t_D
0%       $18,150       $0         $5,107     $0           $192      $5,299          $0          $11,733         $11,733       100%    0%     28.1%
10%      $30,550       $1,240     $7,558     $0           $310      $7,868          $2,341      $17,730         $20,071       52%     4%     28.8%
12%      $68,550       $5,800     $15,711    $0           $664      $16,376         $10,950     $36,784         $47,734       29%     9%     31.4%
22%      $123,850      $17,966    $24,695    −$1,095      $1,121    $24,720         $33,917     $53,606         $87,523       20%     15%    34.4%
24%      $219,925      $41,024    $32,550    −$6,062      $1,893    $28,382         $77,448     $62,212         $139,659      14%     19%    33.5%
32%      $274,375      $58,448    $27,412    −$6,062      $2,285    $23,636         $110,342    $54,512         $164,853      11%     21%    31.3%
35%      $650,000      $189,917   −$50,876   −$6,616      $4,869    −$52,623        $358,536    −$79,599        $278,937      4%      29%    21.4%
```

*(User 3's outside-funded run, 7% portfolio return assumption.)*

The advisor or DIY user sees:
- Whether each conversion is profitable (Net PV (alpha) column)
- Why it is profitable (component columns show the source)
- How attractive the return on capital is (IRR column)
- How *t_D* shifts with conversion size (the rate climbs because larger conversions leave more SS exposed in early distribution years)

Reading this table: Net PV (alpha) peaks at the 24% bracket (\$28,382 from a \$219,925 conversion) — the recommended conversion. The 35% row turns the cumulative Net PV deeply negative because *t_C* has crossed *t_D*.

**The Analytical Decomposition (marginal).** The second table shows the marginal value of each individual bracket in isolation. Sum any prefix and you reproduce the corresponding cumulative row.

```
Bracket  Amount    Tax Paid   Spread PV   Medicare PV  Drag PV   Net PV (alpha)  Net FV (alpha)  Total Spend  IRR    t_C    t_D
0%       $18,150   $0         $5,107      $0           $192      $5,299          $11,733         $11,733      100%   0%     28.1%
10%      $12,400   $1,240     $2,451      $0           $118      $2,570          $5,998          $8,338       23%    10%    29.8%
12%      $38,000   $4,560     $8,153      $0           $354      $8,507          $19,054         $27,662      22%    12%    33.5%
22%      $55,300   $12,166    $8,984      −$1,095      $456      $8,345          $16,822         $39,790      15%    22%    38.2%
24%      $96,075   $23,058    $7,855      −$4,966      $773      $3,662          $8,605          $52,136      9%     24%    32.2%
32%      $54,450   $17,424    −$5,138     $0           $392      −$4,746         −$7,700         $25,194      3%     32%    22.6%
35%      $375,625  $131,469   −$78,289    −$554        $2,584    −$76,259        −$134,110       $114,084     −1%    35%    14.2%
```

The inflection is unmistakable: the 24% bracket still adds positive Net PV (alpha), but the 32% bracket subtracts — *t_C* (32%) has crossed *t_D* (22.6%). The user reads directly which bracket to stop filling.

Beyond the Conversions tab, the Recommendation tab provides a year-by-year drill-down for the chosen conversion: provisional income, taxable SS, MTRs both nominal and SS-adjusted (the "actual" rate the retiree faces), IRMAA bracket position, premiums saved. This is the audit trail — every number in the headline tables traces back to year-by-year mechanics.

---

## 9. Honest Limitations

A practitioner-grade tool needs honest limitations. RothGPT's:

- **Single-filer simulation per run.** A married couple is modeled as joint, but the model does not optimize jointly across two separate Traditional balances belonging to spouses with separate distribution timing. A workaround is to run separate simulations.
- **Deterministic returns.** Portfolio return is a single user-supplied assumption; no Monte Carlo. The argument: the conversion decision is more sensitive to tax mechanics (which are deterministic) than to return distribution (which is uncertain in ways that are mostly symmetric). Users who want stochastic analysis should overlay it externally.
- **Federal tax only.** State income tax is not modeled. For users in high-tax states, the spread can shift materially. Manual adjustment is recommended where state mechanics matter.
- **Assumes current federal tax law continues**, with brackets and standard deductions inflating at user-specified rates. The 2018 brackets are now permanent (One Big Beautiful Bill Act, 2025), so the major sunset risk is gone, but legislative change remains a residual model assumption.
- **Two distribution methods only.** Fixed Annuity and RMD-only with 10-year heir window. Hybrid or step-up distribution patterns are not modeled directly.

These limitations are explicit, not buried. The intent is that a sophisticated user can decide where the model's outputs are load-bearing and where they need adjustment.

---

## 10. For the Advisor

The decision-defending question every fiduciary advisor faces: *can I justify this recommendation under audit?*

What RothGPT gives the advisor:

- A **Net PV in today's dollars** that is the simplest possible client-facing number.
- A **component breakdown** showing why the recommendation is profitable: it isn't just "lower future taxes" — it's a specific dollar amount of tax-rate spread, plus a specific dollar amount of IRMAA savings, plus a specific dollar amount of tax drag avoidance.
- A **time-weighted t_D** with a year-by-year table that walks the client through every distribution year and the marginal rate they would actually face. This is the answer to the inevitable "how can you possibly know my future tax rate?" question — and the honest answer is "we don't guess, we compute it from your actual projected income mix and the federal tax code applied year by year."
- An **IRR on the tax payment** for outside-funded conversions, which translates the decision into an asset-allocation framework the advisor and client are already comfortable with: comparing the conversion's return to the portfolio return.
- A **published research basis**. The mathematical framework underlying these calculations was published on SSRN ("Roth Conversion Valuation & Mechanics," 2025) — defensible, citable, and externally reviewable.

The advisor's job becomes: educate the client on the components, walk them through their own table, and let the math do the persuasion. The recommendation is not "trust me, this is good"; it is "here are five candidate conversion sizes, here is the dollar value of each, here is why."

---

## 11. For the Sophisticated DIY Investor

If you've come this far, you've likely done your own conversion math in a spreadsheet, run the popular online calculators, and noticed they disagree with each other in non-trivial ways.

What RothGPT lets you confirm:

- **Whether your future tax rate intuition is right.** Most DIY investors significantly underestimate their *t_D* because they imagine themselves in the same nominal bracket they're in today, ignoring the SS torpedo and IRMAA. The year-by-year MTR table will correct this — sometimes dramatically. A retiree who "feels" like a 22% bracket taxpayer may actually be in a 40.7% effective rate for two decades.
- **Whether outside-funded vs. inside-funded matters for you.** It matters more than you think. The Synthetic Roth Contribution alone often pays for the conversion tax over 20-30 years.
- **Where the sweet spot is.** A small conversion captures little spread; a giant conversion may trigger IRMAA cliffs and SS-torpedo years on the conversion side. The optimal size is rarely intuitive. RothGPT presents the full spectrum of bracket fills so you can see the inflection point.
- **What you'd lose by waiting.** Each year of delay can change the answer: SS benefits inflate, brackets inflate, the 2-year IRMAA lookback shifts. The model lets you stress-test "what if I wait one year" against "what if I convert now."

The output is dense; the underlying math is more so. But the headline number — Net PV — is one dollar amount that tells you, to a first-order approximation, *what executing this conversion is worth to you today*. That is the conversation the calculator was built to enable.

---

## 12. Closing: The Path Is the Profit

The single insight that unifies every component above:

> **A Roth conversion's value is determined entirely by the path of distributions the retiree's account will follow over the rest of its statutory life — including the heir's compressed 10-year window. There is no "average tax rate." There is a year-by-year sequence of brackets, with non-linear interactions from Social Security taxation and Medicare premiums, and the conversion either profitably alters that path or does not.**

RothGPT solves the conversion decision by modeling that path explicitly, in full, and pricing every component of the alteration the conversion induces. The Net PV that emerges is not a heuristic, it is a present-value calculation of the actual wealth shift the conversion produces.

The conversion tax, paid from outside the Traditional account, is the purchase price of this wealth shift. The IRR on that purchase price tells you whether the deal is good. The component breakdown tells you why.

For both the advisor and the sophisticated DIY investor, the practical takeaway is the same: the question is no longer *"will my future tax rate be higher than today's?"* (the wrong question, with no answerable form). The question is *"what is the present value of the wealth shift this conversion produces, given my actual projected distribution path?"* And that, with the right model behind it, has a clean numerical answer.
