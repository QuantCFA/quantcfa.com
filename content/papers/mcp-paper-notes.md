# MCP Paper — Notes and Ideas

Saved 2026-10-20. Not yet started.

## Proposed outline (from GPT)

**Beyond the Chatbot: Integrating Deterministic Financial Models with Conversational AI**
*An MCP-Based Case Study in Roth Conversion Planning*

1. **Introduction.** LLMs reason conversationally but are unreliable at path-dependent financial calculation. Thesis: the engine supplies numerical rigor; the LLM supplies interpretation, accessibility, and interactive exploration.
2. **Architecture.** Tested Roth conversion engine → MCP → Claude. A working connection is not enough: tool definitions, glossaries, and structured outputs carry the weight. Iterative testing refined the MCP interface, not the model.
3. **Case study, three levels.** Recommendation (optimal fill, PV alpha decomposition); investigation (cumulative vs marginal brackets); attribution (year-by-year tax, Social Security, IRMAA).
4. **Empirical comparison.** Same questions, same model, with and without MCP. Score numerical accuracy, marginal-vs-cumulative understanding, explanation of tax interactions, clarity, unsupported claims. Side-by-side excerpts; comparison against engine results.
5. **Discussion: what makes an effective MCP interface.** Semantic definitions matter as much as connectivity; progressive disclosure; iterative testing; computation and conversation are complements.
6. **Implications.** Democratized access; generalizes to other computational fields; limitations (model assumptions, interpretation errors, reproducibility, professional judgment).

Section 4 is the empirical centerpiece; Section 5 the principal contribution. Name RothGPT and Claude in methodology; keep conclusions product-neutral. ~3,000–4,000 words, 2–3 figures/tables.

## Claude's notes

1. **Material from the Oct 2026 SRC-revision session (Section 5 evidence):**
   - *Engine drift.* August vs October results differed — RMD-drag method changed to the jfp B.3 exact construction; IRMAA moved out of ΔATCF. Tool output gave no signal. Lesson: stamp an engine version and run ID on every response.
   - *Side effects.* `run_conversion_analysis` overwrites saved inputs; inputs had to be saved and restored by hand. Lesson: separate what-if runs from saving.
   - *Verification through tools.* Claude rebuilt the RMD-drag construction to the cent from `get_year_detail`, and traced a bad Appendix A cell ($55,995.69) in the SRC paper. The attribution level working, and exposing an engine change.
   - *Shifting optimum.* Recommended bracket moved 22% → 24% → 12% as inputs changed — a ready illustration of marginal vs cumulative economics.
2. **Fair baseline for Section 4.** Three arms, not two: Claude alone; Claude + code execution (can build its own tax model); Claude + MCP. The middle arm is the real competitor. 20+ questions across the three levels, multiple runs per question, written rubric, blind graders if possible.
3. **Ground truth.** Validate the engine independently — the core paper's closure and identity checks (Appendix B.2) validate it against theory and break the circularity.
4. **Disclosure.** Explicit conflict-of-interest statement (author owns RothGPT).
5. **Keep a log now.** Section 5 needs before/after examples: misread definition → glossary change → corrected answer.
6. **Trim Section 3** to avoid reading as marketing; put the words in Sections 4 and 5.
7. **Venue.** Practitioner/technology outlet (JFP technology piece, SSRN, arXiv) rather than a finance journal.
