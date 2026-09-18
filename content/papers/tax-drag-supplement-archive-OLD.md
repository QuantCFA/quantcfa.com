# Supplemental Verification: Exact RMD-Reduction Alpha

Companion to *Quantifying Tax-Drag Shelter Benefits in Roth Conversions*

Steven Cheshire, CFA  
cheshiresteven@gmail.com | August 30, 2026

---

## Why the two constructions differ

Scalar RMD-reduction alpha is \$2,439, exact is \$2,502. This is the reason, at the 22% fill of §5's worked example.

| Year | $\varepsilon_t$ | Scalar deposit | Exact deposit | Scalar rate $t_D$ | Exact rate |
|:-----|------:|-----------:|-----------:|--------:|--------:|
| 2039 | 24.6 | \$6,616 | \$7,360 | 20.89% | 12.00% |
| 2040 | 23.7 | \$7,069 | \$7,863 | 20.89% | 12.00% |
| 2041 | 22.9 | \$7,520 | \$8,204 | 20.89% | 13.68% |
| 2042 | 22.0 | \$8,033 | \$8,535 | 20.89% | 15.95% |
| 2043 | 21.1 | \$8,582 | \$8,883 | 20.89% | 18.11% |
| 2044 | 20.2 | \$9,167 | \$9,248 | 20.89% | 20.19% |
| 2045 | 19.4 | \$9,740 | \$9,612 | 20.89% | 21.93% |
| 2046 | 18.5 | \$10,403 | \$10,256 | 20.89% | 22.00% |
| 2047 | 17.7 | \$11,046 | \$10,891 | 20.89% | 22.00% |
| 2048 | 16.8 | \$11,795 | \$11,629 | 20.89% | 22.00% |
| 2049 | 16.0 | \$12,514 | \$12,339 | 20.89% | 22.00% |
| 2050 | 15.2 | \$13,272 | \$13,085 | 20.89% | 22.00% |
| 2051 | 14.4 | \$14,068 | \$13,870 | 20.89% | 22.00% |
| 2052 | 13.7 | \$14,795 | \$14,587 | 20.89% | 22.00% |
| 2053 | 12.9 | \$15,666 | \$15,446 | 20.89% | 22.00% |
| 2054 | 12.2 | \$16,440 | \$16,209 | 20.89% | 22.00% |
| 2055 | 11.5 | \$17,232 | \$16,990 | 20.89% | 22.00% |
| 2056 | 10.8 | \$18,038 | \$17,784 | 20.89% | 22.00% |
| 2057 | 10.1 | \$18,852 | \$18,587 | 20.89% | 22.00% |
| 2058 | 9.5 | \$19,461 | \$19,188 | 20.89% | 22.00% |

The 20.89% scalar rate is flat by construction. The actual rises from 12%, crosses in 2045, and pins at 22%. Deposits cross in the same year. Six larger actual deposits come first, followed by fourteen smaller ones. Early larger deposits receive more shelter, so their greater weight more than offsets later shortfalls. That timing asymmetry produces the \$63 difference.

$t_D$ = 20.89% is the PV-weighted average of the exact rate column. The scalar rule uses the right average at the wrong times.

The rest of this supplement reconciles that year by year. Tables S1 and S3 are built in the shape of the manuscript's Table D1 — same years, same divisors, same columns, one added. Tables S2 and S4 give the tax detail behind the exact deposits.

## Reading the tables

S1 and S3 follow Table D1 with one column added. **Old A-T Principal** is D1's scalar $P = (1-t_D)C$ = \$96,359 depleting on the divisors; **Displaced Principal** starts from that same \$96,359 — B.3's closure — but depletes by the actual after-tax avoided RMD, so the two diverge from 2039 and both reach zero in 2068. As in D1, the drag gap is zero while the reinvestment balances accumulate and appears only when they pay out over the beneficiary decade, so only those rows carry PV.

Increments difference the cumulative constructions on both sides, matching how the engine builds bracket parts.

---

## Table S1. Cumulative 22% fill — \$121,800 converted

Compare against Table D1. The Old A-T Principal column reproduces it exactly.

| Year | $\varepsilon_t$ | Old A-T Principal | Displaced Principal | RMD Reinvest — Roth | RMD Reinvest — Tax-Drag | RMD drag (nominal) | RMD drag PV |
|:-------|------:|-----------:|-----------:|------------:|------------:|------------:|-----------:|
| 2026 | — | \$96,359 | \$96,359 | \$0 | \$0 | — | — |
| 2027–2038 | — | \$103,104 → \$217,018 | \$103,104 → \$217,018 | \$0 | \$0 | — | — |
| 2039 | 24.6 | \$223,388 | \$222,397 | \$7,360 | \$7,360 | — | — |
| 2040 | 23.7 | \$229,599 | \$227,480 | \$15,738 | \$15,713 | — | — |
| 2041 | 22.9 | \$235,645 | \$232,464 | \$25,044 | \$24,962 | — | — |
| 2042 | 22.0 | \$241,429 | \$237,357 | \$35,333 | \$35,157 | — | — |
| 2043 | 21.1 | \$246,887 | \$242,128 | \$46,689 | \$46,378 | — | — |
| 2044 | 20.2 | \$251,947 | \$246,747 | \$59,205 | \$58,709 | — | — |
| 2045 | 19.4 | \$256,596 | \$251,203 | \$72,961 | \$72,225 | — | — |
| 2046 | 18.5 | \$260,688 | \$255,112 | \$88,324 | \$87,285 | — | — |
| 2047 | 17.7 | \$264,208 | \$258,449 | \$105,398 | \$103,980 | — | — |
| 2048 | 16.8 | \$266,976 | \$261,035 | \$124,405 | \$122,524 | — | — |
| 2049 | 16.0 | \$268,978 | \$262,856 | \$145,452 | \$143,010 | — | — |
| 2050 | 15.2 | \$270,111 | \$263,809 | \$168,719 | \$165,606 | — | — |
| 2051 | 14.4 | \$270,261 | \$263,782 | \$194,399 | \$190,489 | — | — |
| 2052 | 13.7 | \$269,452 | \$262,797 | \$222,595 | \$217,744 | — | — |
| 2053 | 12.9 | \$267,426 | \$260,598 | \$253,622 | \$247,669 | — | — |
| 2054 | 12.2 | \$264,226 | \$257,228 | \$287,584 | \$280,348 | — | — |
| 2055 | 11.5 | \$259,745 | \$252,581 | \$324,705 | \$315,981 | — | — |
| 2056 | 10.8 | \$253,877 | \$246,550 | \$365,219 | \$354,778 | — | — |
| 2057 | 10.1 | \$246,512 | \$239,025 | \$409,371 | \$396,958 | — | — |
| 2058 | 9.5 | \$237,819 | \$230,173 | \$457,215 | \$442,544 | — | — |
| 2059 | — | \$220,606 | \$213,757 | \$424,123 | \$409,980 | \$3,104 | \$333 |
| 2060 | — | \$202,189 | \$196,192 | \$388,714 | \$375,251 | \$3,104 | \$311 |
| 2061 | — | \$182,482 | \$177,397 | \$350,827 | \$338,212 | \$3,104 | \$291 |
| 2062 | — | \$161,396 | \$157,287 | \$310,288 | \$298,711 | \$3,104 | \$272 |
| 2063 | — | \$138,833 | \$135,657 | \$266,911 | \$256,582 | \$3,104 | \$254 |
| 2064 | — | \$114,691 | \$112,358 | \$220,498 | \$211,652 | \$3,104 | \$237 |
| 2065 | — | \$88,860 | \$87,270 | \$170,835 | \$163,734 | \$3,104 | \$222 |
| 2066 | — | \$61,220 | \$60,263 | \$117,697 | \$112,630 | \$3,104 | \$207 |
| 2067 | — | \$31,645 | \$31,200 | \$60,838 | \$58,127 | \$3,104 | \$194 |
| 2068 | — | \$0 | \$0 | \$0 | \$0 | \$3,104 | \$181 |
| **Total** | | | | | | **\$31,044** | **\$2,502** |

Columns are rounded for display; the unrounded total is \$2,501.80. D1's counterparts are \$3,026 nominal and \$2,439 PV.

## Table S2. Deposit derivation — cumulative 22% fill

$\mathrm{Tax}_0$ is the no-conversion path, $\mathrm{Tax}_C$ the \$121,800 path. The last column is the deposit entering both reinvestment balances in Table S1.

| Year | $\Delta D_t$ | $\mathrm{Tax}_0$ | $\mathrm{Tax}_C$ | $\Delta\mathrm{Tax}_t$ | After tax | Deposit $a^{\text{exact}}(t)$ |
|:-------|---------:|---------:|---------:|---------:|---------:|-------------:|
| 2039 | \$11,151 | \$7,610 | \$6,272 | \$1,338 | \$9,813 | \$7,360 |
| 2040 | \$11,914 | \$8,135 | \$6,705 | \$1,430 | \$10,485 | \$7,863 |
| 2041 | \$12,673 | \$8,869 | \$7,135 | \$1,734 | \$10,939 | \$8,204 |
| 2042 | \$13,539 | \$9,785 | \$7,626 | \$2,159 | \$11,380 | \$8,535 |
| 2043 | \$14,463 | \$10,770 | \$8,151 | \$2,620 | \$11,844 | \$8,883 |
| 2044 | \$15,449 | \$11,829 | \$8,710 | \$3,119 | \$12,330 | \$9,248 |
| 2045 | \$16,416 | \$12,859 | \$9,259 | \$3,600 | \$12,816 | \$9,612 |
| 2046 | \$17,532 | \$14,073 | \$10,216 | \$3,857 | \$13,675 | \$10,256 |
| 2047 | \$18,617 | \$15,242 | \$11,146 | \$4,096 | \$14,521 | \$10,891 |
| 2048 | \$19,879 | \$16,630 | \$12,257 | \$4,373 | \$15,506 | \$11,629 |
| 2049 | \$21,092 | \$17,951 | \$13,310 | \$4,640 | \$16,451 | \$12,339 |
| 2050 | \$22,368 | \$19,347 | \$14,426 | \$4,921 | \$17,447 | \$13,085 |
| 2051 | \$23,710 | \$20,820 | \$15,604 | \$5,216 | \$18,494 | \$13,870 |
| 2052 | \$24,936 | \$22,141 | \$16,655 | \$5,486 | \$19,450 | \$14,587 |
| 2053 | \$26,403 | \$23,761 | \$17,952 | \$5,809 | \$20,594 | \$15,446 |
| 2054 | \$27,708 | \$25,170 | \$19,075 | \$6,096 | \$21,612 | \$16,209 |
| 2055 | \$29,042 | \$26,611 | \$20,222 | \$6,389 | \$22,653 | \$16,990 |
| 2056 | \$30,400 | \$28,076 | \$21,388 | \$6,688 | \$23,712 | \$17,784 |
| 2057 | \$31,773 | \$29,552 | \$22,562 | \$6,990 | \$24,783 | \$18,587 |
| 2058 | \$32,800 | \$30,585 | \$23,369 | \$7,216 | \$25,584 | \$19,188 |

The displaced rate $\Delta\mathrm{Tax}_t / \Delta D_t$ runs 12.0% in 2039 and reaches 22.0% by 2046.

$\Delta D_t$ itself is checkable without any tax detail. The conversion displaces \$121,800 pre-tax, compounding twelve gap years to \$274,317 at end-2038; \$274,317 / 24.6 = **\$11,151**, the 2039 entry. The scalar construction divides its smaller after-tax base instead: \$217,018 / 24.6 = \$8,822.

---

## Table S3. Incremental 22% bracket — \$55,300 above the 12% fill

Both principal columns are differences of the cumulative paths, so both start at \$96,359 − \$52,307 = \$44,052. The closure holds here too: the PV of the incremental after-tax displaced distributions is \$44,051.67.

| Year | $\varepsilon_t$ | Old A-T Principal | Displaced Principal | RMD Reinvest — Roth | RMD Reinvest — Tax-Drag | RMD drag (nominal) | RMD drag PV |
|:-------|------:|-----------:|-----------:|------------:|------------:|------------:|-----------:|
| 2026 | — | \$44,052 | \$44,052 | \$0 | \$0 | — | — |
| 2027–2038 | — | \$47,135 → \$99,213 | \$47,135 → \$99,213 | \$0 | \$0 | — | — |
| 2039 | 24.6 | \$102,125 | \$101,702 | \$3,341 | \$3,341 | — | — |
| 2040 | 23.7 | \$104,964 | \$104,061 | \$7,146 | \$7,134 | — | — |
| 2041 | 22.9 | \$107,728 | \$106,282 | \$11,443 | \$11,406 | — | — |
| 2042 | 22.0 | \$110,372 | \$108,312 | \$16,301 | \$16,221 | — | — |
| 2043 | 21.1 | \$112,868 | \$110,210 | \$21,706 | \$21,563 | — | — |
| 2044 | 20.2 | \$115,181 | \$112,174 | \$27,538 | \$27,311 | — | — |
| 2045 | 19.4 | \$117,306 | \$114,201 | \$33,835 | \$33,495 | — | — |
| 2046 | 18.5 | \$119,177 | \$115,986 | \$40,860 | \$40,379 | — | — |
| 2047 | 17.7 | \$120,786 | \$117,512 | \$48,665 | \$48,009 | — | — |
| 2048 | 16.8 | \$122,052 | \$118,698 | \$57,351 | \$56,482 | — | — |
| 2049 | 16.0 | \$122,967 | \$119,538 | \$66,968 | \$65,840 | — | — |
| 2050 | 15.2 | \$123,485 | \$119,984 | \$77,596 | \$76,159 | — | — |
| 2051 | 14.4 | \$123,553 | \$119,986 | \$89,326 | \$87,521 | — | — |
| 2052 | 13.7 | \$123,183 | \$119,555 | \$102,201 | \$99,965 | — | — |
| 2053 | 12.9 | \$122,257 | \$118,574 | \$116,368 | \$113,625 | — | — |
| 2054 | 12.2 | \$120,794 | \$117,061 | \$131,873 | \$128,540 | — | — |
| 2055 | 11.5 | \$118,746 | \$114,971 | \$148,818 | \$144,802 | — | — |
| 2056 | 10.8 | \$116,063 | \$112,253 | \$167,310 | \$162,506 | — | — |
| 2057 | 10.1 | \$112,696 | \$108,858 | \$187,461 | \$181,751 | — | — |
| 2058 | 9.5 | \$108,722 | \$104,863 | \$209,295 | \$202,549 | — | — |
| 2059 | — | \$100,853 | \$97,435 | \$194,146 | \$187,645 | \$1,425 | \$153 |
| 2060 | — | \$92,433 | \$89,487 | \$177,938 | \$171,750 | \$1,425 | \$143 |
| 2061 | — | \$83,424 | \$80,982 | \$160,595 | \$154,798 | \$1,425 | \$133 |
| 2062 | — | \$73,784 | \$71,883 | \$142,037 | \$136,718 | \$1,425 | \$125 |
| 2063 | — | \$63,469 | \$62,033 | \$122,181 | \$117,436 | \$1,425 | \$117 |
| 2064 | — | \$52,433 | \$51,340 | \$100,935 | \$96,872 | \$1,425 | \$109 |
| 2065 | — | \$40,623 | \$39,777 | \$78,202 | \$74,940 | \$1,425 | \$102 |
| 2066 | — | \$27,987 | \$27,404 | \$53,877 | \$51,550 | \$1,425 | \$95 |
| 2067 | — | \$14,467 | \$14,166 | \$27,849 | \$26,604 | \$1,425 | \$89 |
| 2068 | — | \$0 | \$0 | \$0 | \$0 | \$1,425 | \$83 |
| **Total** | | | | | | **\$14,252** | **\$1,149** |

Columns are rounded for display; the unrounded total is \$1,148.52. The scalar counterpart is \$1,115.

## Table S4. Deposit derivation — incremental 22% bracket

The baseline shifts: differences are measured against the \$66,500 12%-bracket fill, not the no-conversion path.

| Year | $\Delta D_t$ | $\mathrm{Tax}_{12\%}$ | $\mathrm{Tax}_{22\%}$ | $\Delta\mathrm{Tax}_t$ | After tax | Deposit $a^{\text{exact}}(t)$ |
|:-------|---------:|---------:|---------:|---------:|---------:|-------------:|
| 2039 | \$5,063 | \$6,880 | \$6,272 | \$608 | \$4,455 | \$3,341 |
| 2040 | \$5,409 | \$7,354 | \$6,705 | \$649 | \$4,760 | \$3,570 |
| 2041 | \$5,754 | \$7,826 | \$7,135 | \$690 | \$5,064 | \$3,798 |
| 2042 | \$6,147 | \$8,364 | \$7,626 | \$738 | \$5,409 | \$4,057 |
| 2043 | \$6,567 | \$9,033 | \$8,151 | \$882 | \$5,684 | \$4,263 |
| 2044 | \$7,014 | \$9,973 | \$8,710 | \$1,263 | \$5,751 | \$4,313 |
| 2045 | \$7,453 | \$10,887 | \$9,259 | \$1,628 | \$5,825 | \$4,369 |
| 2046 | \$7,960 | \$11,967 | \$10,216 | \$1,751 | \$6,209 | \$4,657 |
| 2047 | \$8,452 | \$13,005 | \$11,146 | \$1,860 | \$6,593 | \$4,945 |
| 2048 | \$9,025 | \$14,242 | \$12,257 | \$1,986 | \$7,040 | \$5,280 |
| 2049 | \$9,576 | \$15,417 | \$13,310 | \$2,107 | \$7,469 | \$5,602 |
| 2050 | \$10,156 | \$16,660 | \$14,426 | \$2,234 | \$7,921 | \$5,941 |
| 2051 | \$10,765 | \$17,972 | \$15,604 | \$2,368 | \$8,397 | \$6,298 |
| 2052 | \$11,321 | \$19,145 | \$16,655 | \$2,491 | \$8,831 | \$6,623 |
| 2053 | \$11,987 | \$20,590 | \$17,952 | \$2,637 | \$9,350 | \$7,013 |
| 2054 | \$12,580 | \$21,842 | \$19,075 | \$2,768 | \$9,812 | \$7,359 |
| 2055 | \$13,186 | \$23,123 | \$20,222 | \$2,901 | \$10,285 | \$7,714 |
| 2056 | \$13,802 | \$24,424 | \$21,388 | \$3,037 | \$10,766 | \$8,074 |
| 2057 | \$14,426 | \$25,736 | \$22,562 | \$3,174 | \$11,252 | \$8,439 |
| 2058 | \$14,892 | \$26,645 | \$23,369 | \$3,276 | \$11,616 | \$8,712 |

Here the displaced rate runs 12.0% in 2039 and does not reach 22.0% until 2058.

---

## Reconciliation to Table B1

| | Scalar $\alpha_{RMD}^{t_D}$ | Exact $\alpha_{RMD}^{\text{exact}}$ | Error |
|:-----------------------|---------:|---------:|-------:|
| Cumulative 22% fill | \$2,439 | \$2,502 | −2.5% |
| Incremental 22% bracket | \$1,115 | \$1,149 | −2.9% |

Everything reduces to one number per table. Same ten beneficiary years, same annuity factors, same discounting: the cumulative gap is \$3,104 exact against \$3,026 scalar, and the incremental gap is \$1,425 against \$1,383.

The sign follows B.3's explanation. Because the displaced rate rises across the deposit window, the early deposits — the ones receiving the most years of shelter — bear a lower rate than the PV-weighted $t_D$ the scalar rule applies uniformly, so the scalar rule understates. Both constructions start from the same \$96,359 and both deplete to zero; only the schedule between differs. Neither the sign nor the magnitude changes the optimum.

Larger approximation errors can arise when marginal tax rates vary more sharply across the displaced-distribution window, including cases in which RMD changes interact materially with the taxation of Social Security benefits.
