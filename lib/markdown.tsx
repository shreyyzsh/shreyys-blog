import type { Components } from "react-markdown";

export const markdownComponents: Components = {
  h1: ({ children }) => (
    <h1 className="mt-10 mb-4 text-2xl font-normal leading-snug tracking-tight first:mt-0">
      {children}
    </h1>
  ),
  h2: ({ children }) => (
    <h2 className="mt-8 mb-3 text-xl font-normal leading-snug tracking-tight">
      {children}
    </h2>
  ),
  h3: ({ children }) => (
    <h3 className="mt-7 mb-2 text-lg font-normal leading-snug tracking-tight">
      {children}
    </h3>
  ),
  p: ({ children }) => <p className="mb-5">{children}</p>,
  ul: ({ children }) => (
    <ul className="mb-5 list-disc pl-6">{children}</ul>
  ),
  ol: ({ children }) => (
    <ol className="mb-5 list-decimal pl-6">{children}</ol>
  ),
  li: ({ children }) => <li className="mb-1.5">{children}</li>,
  blockquote: ({ children }) => (
    <blockquote className="mb-5 border-l-2 border-border pl-5 text-muted">
      {children}
    </blockquote>
  ),
  pre: ({ children }) => (
    <pre className="mb-5 overflow-x-auto border border-border bg-card p-4 font-mono text-sm leading-normal">
      {children}
    </pre>
  ),
  code: ({ className, children }) => {
    const isBlock = className?.includes("language-");

    if (isBlock) {
      return <code className="font-mono text-sm">{children}</code>;
    }

    return (
      <code className="border border-border px-1 font-mono text-[0.9em]">
        {children}
      </code>
    );
  },
  hr: () => <hr className="my-8 border-0 border-t border-border" />,
  img: ({ src, alt }) => (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={alt ?? ""}
      className="my-6 block max-w-full border border-border bg-card"
    />
  ),
};
