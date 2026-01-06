import Link from "next/link";
import { ThemeToggle } from "@/components/ui/theme-toggle";

const components = [
  { name: "Accordion", href: "/docs/components/accordion" },
  { name: "Alert Dialog", href: "/docs/components/alert-dialog" },
  { name: "Avatar", href: "/docs/components/avatar" },
  { name: "Button", href: "/docs/components/button" },
  { name: "Card", href: "/docs/components/card" },
  { name: "Checkbox", href: "/docs/components/checkbox" },
  { name: "Collapsible", href: "/docs/components/collapsible" },
  { name: "Dialog", href: "/docs/components/dialog" },
  { name: "Field", href: "/docs/components/field" },
  { name: "Input", href: "/docs/components/input" },
  { name: "Menu", href: "/docs/components/menu" },
  { name: "Number Field", href: "/docs/components/number-field" },
  { name: "Password Input", href: "/docs/components/password-input" },
  { name: "Popover", href: "/docs/components/popover" },
  { name: "Progress", href: "/docs/components/progress" },
  { name: "Radio", href: "/docs/components/radio" },
  { name: "Scroll Area", href: "/docs/components/scroll-area" },
  { name: "Select", href: "/docs/components/select" },
  { name: "Separator", href: "/docs/components/separator" },
  { name: "Slider", href: "/docs/components/slider" },
  { name: "Switch", href: "/docs/components/switch" },
  { name: "Tabs", href: "/docs/components/tabs" },
  { name: "Textarea", href: "/docs/components/textarea" },
  { name: "Toast", href: "/docs/components/toast" },
  { name: "Toggle", href: "/docs/components/toggle" },
  { name: "Toggle Group", href: "/docs/components/toggle-group" },
  { name: "Tooltip", href: "/docs/components/tooltip" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-40 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 max-w-screen-2xl items-center px-4">
          <Link href="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-xl">Neumorphic UI</span>
          </Link>
          <nav className="flex items-center gap-6 text-sm">
            <Link
              href="/docs"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Docs
            </Link>
            <Link
              href="/docs/components/button"
              className="text-foreground/60 hover:text-foreground transition-colors"
            >
              Components
            </Link>
          </nav>
          <div className="ml-auto">
            <ThemeToggle />
          </div>
        </div>
      </header>
      <div className="container flex-1 items-start md:grid md:grid-cols-[220px_minmax(0,1fr)] md:gap-6 lg:grid-cols-[240px_minmax(0,1fr)] lg:gap-10 max-w-screen-2xl px-4">
        <aside className="fixed top-14 z-30 hidden h-[calc(100vh-3.5rem)] w-full shrink-0 md:sticky md:block">
          <div className="h-full py-6 pr-6 lg:py-8 overflow-y-auto">
            <div className="space-y-4">
              <div>
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                  Getting Started
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  <Link
                    href="/docs"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  >
                    Introduction
                  </Link>
                  <Link
                    href="/docs/installation"
                    className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                  >
                    Installation
                  </Link>
                </div>
              </div>
              <div>
                <h4 className="mb-1 rounded-md px-2 py-1 text-sm font-semibold">
                  Components
                </h4>
                <div className="grid grid-flow-row auto-rows-max text-sm">
                  {components.map((component) => (
                    <Link
                      key={component.href}
                      href={component.href}
                      className="group flex w-full items-center rounded-md border border-transparent px-2 py-1 hover:underline text-muted-foreground"
                    >
                      {component.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </aside>
        <main className="relative py-6 lg:gap-10 lg:py-8">
          <div className="mx-auto w-full min-w-0">{children}</div>
        </main>
      </div>
    </div>
  );
}
