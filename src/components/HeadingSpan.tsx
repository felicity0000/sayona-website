interface HeadingSpanProps {
  parts: { pre: string; highlight?: string; post?: string };
}

// Renders "<pre><span class=highlight>highlight</span>post" — the pre/highlight/post
// triplet used by every translated heading, so pages don't hand-roll the split each time.
const HeadingSpan = ({ parts }: HeadingSpanProps) => (
  <>
    {parts.pre}
    {parts.highlight && <span className="text-yellow-400">{parts.highlight}</span>}
    {parts.post}
  </>
);

export default HeadingSpan;
