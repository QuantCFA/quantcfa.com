import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";

export function Markdown({ source }: { source: string }) {
  return (
    <div className="prose-paper">
      <ReactMarkdown
        remarkPlugins={[remarkGfm, remarkMath]}
        rehypePlugins={[
          rehypeKatex,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: "append",
              properties: { className: "anchor", ariaLabel: "Link to section" },
              content: { type: "text", value: "§" },
            },
          ],
        ]}
      >
        {source}
      </ReactMarkdown>
    </div>
  );
}
