"use client";

import { Check, Copy } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { codeToHtml } from "shiki";
import { cn } from "@/lib/utils";

function getBaseUrl() {
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return "http://localhost:3000";
}

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
  className?: string;
}

export function CodeBlock({
  code,
  language = "tsx",
  filename,
  showLineNumbers = false,
  className,
}: CodeBlockProps) {
  const [html, setHtml] = useState<string>("");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    codeToHtml(code.trim(), {
      lang: language,
      theme: "github-dark-default",
    }).then(setHtml);
  }, [code, language]);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative rounded-lg bg-[#0d1117] shadow-neu-inset overflow-hidden",
        className,
      )}
    >
      {filename && (
        <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
          <span className="text-xs text-muted-foreground font-mono">
            {filename}
          </span>
        </div>
      )}
      <div className="relative">
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white"
          aria-label="Copy code"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <div
          className={cn(
            "overflow-x-auto p-4 text-sm [&_pre]:!bg-transparent [&_pre]:!p-0 [&_code]:!bg-transparent",
            showLineNumbers && "[&_code]:counter-reset-[line]",
          )}
          // biome-ignore lint/security/noDangerouslySetInnerHtml: shiki output
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  );
}

interface InstallCommandProps {
  name: string;
  className?: string;
}

type PackageManager = "npx" | "pnpm" | "yarn" | "bun";

const packageManagerCommands: Record<PackageManager, string> = {
  npx: "npx shadcn@latest add",
  pnpm: "pnpm dlx shadcn@latest add",
  yarn: "yarn dlx shadcn@latest add",
  bun: "bunx --bun shadcn@latest add",
};

export function InstallCommand({ name, className }: InstallCommandProps) {
  const [baseUrl, setBaseUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [pm, setPm] = useState<PackageManager>("npx");

  useEffect(() => {
    setBaseUrl(getBaseUrl());
  }, []);

  const command = `${packageManagerCommands[pm]} "${baseUrl}/r/${name}.json"`;

  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={cn(
        "relative rounded-lg bg-[#0d1117] shadow-neu-inset overflow-hidden",
        className,
      )}
    >
      <div className="flex items-center justify-between px-4 py-2 border-b border-white/10 bg-white/5">
        <div className="flex gap-1">
          {(Object.keys(packageManagerCommands) as PackageManager[]).map(
            (manager) => (
              <button
                key={manager}
                type="button"
                onClick={() => setPm(manager)}
                className={cn(
                  "px-2 py-1 text-xs font-mono rounded transition-colors",
                  pm === manager
                    ? "bg-white/20 text-white"
                    : "text-white/50 hover:text-white/80 hover:bg-white/10",
                )}
              >
                {manager}
              </button>
            ),
          )}
        </div>
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={handleCopy}
          className="absolute top-3 right-3 p-2 rounded-md bg-white/10 hover:bg-white/20 transition-colors text-white/70 hover:text-white"
          aria-label="Copy command"
        >
          {copied ? <Check size={16} /> : <Copy size={16} />}
        </button>
        <div className="overflow-x-auto p-4 text-sm font-mono text-green-400">
          <span className="text-gray-500">$</span> {command}
        </div>
      </div>
    </div>
  );
}

interface ComponentPreviewProps {
  children: React.ReactNode;
  className?: string;
}

export function ComponentPreview({
  children,
  className,
}: ComponentPreviewProps) {
  return (
    <div
      className={cn(
        "flex min-h-[200px] items-center justify-center rounded-lg bg-surface p-8 shadow-neu-inset",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface ComponentExampleProps {
  children: React.ReactNode;
  code: string;
  language?: string;
}

export function ComponentExample({
  children,
  code,
  language = "tsx",
}: ComponentExampleProps) {
  return (
    <div className="space-y-4">
      <ComponentPreview>{children}</ComponentPreview>
      <CodeBlock code={code} language={language} />
    </div>
  );
}
