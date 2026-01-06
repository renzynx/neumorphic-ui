import type { MDXComponents } from "mdx/types";
import Link from "next/link";
import type { ReactElement } from "react";
import { CodeBlock } from "@/components/docs/code-block";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight text-foreground mb-4">
        {children}
      </h1>
    ),
    h2: ({ children }) => (
      <h2 className="scroll-m-20 border-b border-border pb-2 text-2xl font-semibold tracking-tight text-foreground mt-10 mb-4 first:mt-0">
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="scroll-m-20 text-xl font-semibold tracking-tight text-foreground mt-8 mb-4">
        {children}
      </h3>
    ),
    h4: ({ children }) => (
      <h4 className="scroll-m-20 text-lg font-semibold tracking-tight text-foreground mt-6 mb-2">
        {children}
      </h4>
    ),
    p: ({ children }) => (
      <p className="leading-7 text-foreground/80 [&:not(:first-child)]:mt-4">
        {children}
      </p>
    ),
    ul: ({ children }) => (
      <ul className="my-6 ml-6 list-disc text-foreground/80 [&>li]:mt-2">
        {children}
      </ul>
    ),
    ol: ({ children }) => (
      <ol className="my-6 ml-6 list-decimal text-foreground/80 [&>li]:mt-2">
        {children}
      </ol>
    ),
    li: ({ children }) => <li className="leading-7">{children}</li>,
    blockquote: ({ children }) => (
      <blockquote className="mt-6 border-l-4 border-primary pl-6 italic text-foreground/70">
        {children}
      </blockquote>
    ),
    code: ({ children }) => (
      <code className="relative rounded bg-surface-shadow/20 dark:bg-surface-highlight/20 px-[0.4rem] py-[0.2rem] font-mono text-sm text-foreground">
        {children}
      </code>
    ),
    pre: ({ children }) => {
      const codeElement = children as ReactElement<{
        children: string;
        className?: string;
      }>;
      const code =
        typeof codeElement?.props?.children === "string"
          ? codeElement.props.children
          : "";
      const className = codeElement?.props?.className || "";
      const language = className.replace("language-", "") || "tsx";

      return (
        <CodeBlock code={code} language={language} className="mb-4 mt-6" />
      );
    },
    a: ({ href, children }) => {
      const isExternal = href?.startsWith("http");
      if (isExternal) {
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
          >
            {children}
          </a>
        );
      }
      return (
        <Link
          href={href || "#"}
          className="font-medium text-primary underline underline-offset-4 hover:text-primary/80"
        >
          {children}
        </Link>
      );
    },
    strong: ({ children }) => (
      <strong className="font-semibold text-foreground">{children}</strong>
    ),
    hr: () => <hr className="my-8 border-border" />,
    table: ({ children }) => (
      <div className="my-6 w-full overflow-x-auto rounded-xl border border-border">
        <table className="w-full border-collapse text-sm">{children}</table>
      </div>
    ),
    thead: ({ children }) => <thead className="bg-surface">{children}</thead>,
    tbody: ({ children }) => <tbody>{children}</tbody>,
    tr: ({ children }) => (
      <tr className="border-b border-border last:border-b-0">{children}</tr>
    ),
    th: ({ children }) => (
      <th className="px-4 py-3 text-left font-semibold text-foreground">
        {children}
      </th>
    ),
    td: ({ children }) => (
      <td className="px-4 py-3 text-foreground/80">{children}</td>
    ),
    ...components,
  };
}
