-- Insert a Word page break before the very first heading in the document.
-- With pandoc's --toc, the TOC is rendered between the start of the doc and
-- the first heading. So this puts the break exactly between TOC and body.

local inserted = false

function Header(elem)
  if not inserted then
    inserted = true
    local pageBreak = pandoc.RawBlock(
      'openxml',
      '<w:p><w:r><w:br w:type="page"/></w:r></w:p>'
    )
    return { pageBreak, elem }
  end
  return elem
end
