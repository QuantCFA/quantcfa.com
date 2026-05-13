-- Word centers/tabs OMML math objects in table cells, producing weird
-- alignment on short symbols. Inside table cells only, replace inline
-- math with italic text (Emph) so cells left-align consistently.
-- Outside tables, math renders normally as OMML equations.

local function math_to_emph(elem)
  if elem.t == 'Math' then
    -- Strip surrounding {} groups and \mathrm{} that won't render in plain text
    local text = elem.text
      :gsub('\\mathrm%{([^}]+)%}', '%1')
      :gsub('\\text%{([^}]+)%}', '%1')
      :gsub('\\_', '_')
      :gsub('\\%%', '%%')
      :gsub('\\cdot', '·')
      :gsub('\\tau', 'τ')
      :gsub('\\alpha', 'α')
      :gsub('\\mu', 'μ')
      :gsub('\\Delta', 'Δ')
      :gsub('\\rho', 'ρ')
      :gsub('\\tilde%{r%}', 'r̃')
      :gsub('\\approx', '≈')
      :gsub('\\leq', '≤')
      :gsub('\\geq', '≥')
      :gsub('\\,', ' ')
      :gsub('\\;', ' ')
    return pandoc.Emph({ pandoc.Str(text) })
  end
end

function Table(tbl)
  return pandoc.walk_block(tbl, { Math = math_to_emph })
end
