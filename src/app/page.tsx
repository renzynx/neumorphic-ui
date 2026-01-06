"use client";

import {
  ArrowRight,
  GithubLogo,
  Lightning,
  Moon,
  Stack,
} from "@phosphor-icons/react";
import Link from "next/link";
import { useState } from "react";

import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  Input,
  Slider,
  Switch,
  ThemeToggle,
  ToastProvider,
} from "@/components/ui";

export default function LandingPage() {
  const [sliderValue, setSliderValue] = useState(85);
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <ToastProvider>
      <div className="min-h-screen bg-background text-foreground selection:bg-primary/20">
        <header className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-white/20 dark:border-black/20">
          <div className="container mx-auto px-6 h-16 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-primary/20 flex items-center justify-center text-primary font-bold shadow-neu-xs">
                N
              </div>
              <span className="text-xl font-bold tracking-tight">
                Neumorph<span className="text-primary">UI</span>
              </span>
            </div>
            <nav className="flex items-center gap-6">
              <Link
                href="/docs"
                className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                Documentation
              </Link>
              <Link
                href="https://github.com/renzynx/neumorphic-ui"
                className="hidden md:block text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
              >
                GitHub
              </Link>
              <ThemeToggle />
            </nav>
          </div>
        </header>

        <main>
          <section className="pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
            <div className="container mx-auto max-w-6xl">
              <div className="flex flex-col md:flex-row items-center gap-16">
                <div className="flex-1 space-y-8 text-center md:text-left">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface shadow-neu-xs text-xs font-medium text-primary">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
                    </span>
                    Now in Beta
                  </div>

                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight text-foreground">
                    Soft. Tactile. <br />
                    <span className="text-primary bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                      Modern.
                    </span>
                  </h1>

                  <p className="text-xl text-muted-foreground max-w-2xl mx-auto md:mx-0 leading-relaxed">
                    A design system that brings depth back to the web. Built
                    with Tailwind CSS and Base UI for interfaces you can almost
                    feel.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
                    <Link href="/docs" className="w-full sm:w-auto">
                      <Button
                        size="lg"
                        variant="primary"
                        className="w-full gap-2 font-semibold"
                      >
                        Get Started{" "}
                        <ArrowRight className="h-4 w-4" weight="bold" />
                      </Button>
                    </Link>
                    <Link
                      href="https://github.com/renzynx/neumorphic-ui"
                      className="w-full sm:w-auto"
                    >
                      <Button
                        size="lg"
                        variant="default"
                        className="w-full gap-2"
                      >
                        <GithubLogo className="h-4 w-4" weight="fill" /> GitHub
                      </Button>
                    </Link>
                  </div>
                </div>

                <div className="flex-1 w-full max-w-md md:max-w-full relative">
                  <div className="absolute -top-20 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl opacity-50 dark:opacity-20 animate-pulse" />
                  <div className="absolute -bottom-20 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-3xl opacity-50 dark:opacity-20" />

                  <Card
                    variant="raised"
                    className="relative z-10 p-6 md:p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500"
                  >
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="flex items-center justify-between">
                        <span>Component Library</span>
                        <div className="flex gap-2">
                          <div className="h-3 w-3 rounded-full bg-red-400/80 shadow-inner" />
                          <div className="h-3 w-3 rounded-full bg-yellow-400/80 shadow-inner" />
                          <div className="h-3 w-3 rounded-full bg-green-400/80 shadow-inner" />
                        </div>
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6 p-0">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                          <span className="text-muted-foreground">
                            Brightness
                          </span>
                          <span>{sliderValue}%</span>
                        </div>
                        <Slider
                          value={[sliderValue]}
                          onValueChange={(val: number | readonly number[]) =>
                            setSliderValue(
                              typeof val === "number" ? val : val[0],
                            )
                          }
                          max={100}
                          step={1}
                        />
                      </div>

                      <div className="flex items-center justify-between p-4 rounded-xl shadow-neu-inset bg-surface/50">
                        <span className="text-sm font-medium">Dark Mode</span>
                        <Switch
                          checked={isDarkMode}
                          onCheckedChange={setIsDarkMode}
                        />
                      </div>

                      <div className="grid grid-cols-2 gap-4">
                        <Button variant="ghost" className="w-full">
                          Cancel
                        </Button>
                        <Button variant="primary" className="w-full">
                          Save Changes
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <section className="py-20 bg-surface/50">
            <div className="container mx-auto px-6">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold">
                  Why Neumorphism?
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Break away from the flat design trend. Give your users
                  interface elements that feel tangible, responsive, and alive.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                <Card
                  variant="flat"
                  className="hover:-translate-y-2 transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-surface shadow-neu flex items-center justify-center text-primary mb-4">
                      <Stack className="h-6 w-6" weight="fill" />
                    </div>
                    <CardTitle>Soft & Tactile</CardTitle>
                    <CardDescription>
                      Mimics real-world light and shadow to create elements that
                      appear to be extruded from the background.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card
                  variant="flat"
                  className="hover:-translate-y-2 transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-surface shadow-neu flex items-center justify-center text-primary mb-4">
                      <Moon className="h-6 w-6" weight="fill" />
                    </div>
                    <CardTitle>Dark Mode Ready</CardTitle>
                    <CardDescription>
                      Fully compatible with dark mode out of the box. Shadows
                      invert intelligently to maintain depth perception.
                    </CardDescription>
                  </CardHeader>
                </Card>

                <Card
                  variant="flat"
                  className="hover:-translate-y-2 transition-transform duration-300"
                >
                  <CardHeader>
                    <div className="h-12 w-12 rounded-xl bg-surface shadow-neu flex items-center justify-center text-primary mb-4">
                      <Lightning className="h-6 w-6" weight="fill" />
                    </div>
                    <CardTitle>Tailwind Powered</CardTitle>
                    <CardDescription>
                      Built entirely with Tailwind CSS v4 utility classes and
                      custom plugin configurations for easy extension.
                    </CardDescription>
                  </CardHeader>
                </Card>
              </div>
            </div>
          </section>

          <section className="py-20 px-6">
            <div className="container mx-auto max-w-5xl">
              <div className="flex flex-col md:flex-row gap-12 items-center">
                <div className="flex-1 space-y-6">
                  <h2 className="text-3xl font-bold">Ready for Production</h2>
                  <p className="text-muted-foreground text-lg">
                    Not just a pretty face. These components are built on top of
                    Base UI primitives, ensuring full accessibility and keyboard
                    navigation support.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <span>WAI-ARIA Compliant</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <span>Keyboard Navigable</span>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="h-8 w-8 rounded-full bg-green-500/20 text-green-600 flex items-center justify-center font-bold text-xs">
                        ✓
                      </div>
                      <span>Screen Reader Friendly</span>
                    </div>
                  </div>

                  <div className="pt-4">
                    <div className="p-4 rounded-xl bg-black/5 dark:bg-white/5 font-mono text-sm overflow-x-auto">
                      <span className="text-primary">npx</span> shadcn@latest
                      add https://neumorphic-ui.vercel.app/r/button.json
                    </div>
                  </div>
                </div>

                <div className="flex-1 w-full">
                  <Card variant="pressed" className="p-8">
                    <div className="space-y-6">
                      <Input placeholder="Enter your email address" />
                      <div className="flex gap-4">
                        <Button className="flex-1">Subscribe</Button>
                        <Button variant="secondary" className="flex-1">
                          Learn More
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          <footer className="py-12 border-t border-white/10 dark:border-black/10 bg-surface/30">
            <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
              <div className="flex items-center gap-2">
                <div className="h-6 w-6 rounded bg-primary/20 flex items-center justify-center text-primary text-xs font-bold">
                  N
                </div>
                <span className="font-bold text-foreground/80">NeumorphUI</span>
              </div>

              <div className="flex gap-8 text-sm text-muted-foreground">
                <Link href="/docs" className="hover:text-primary">
                  Docs
                </Link>
                <Link href="#" className="hover:text-primary">
                  Components
                </Link>
                <Link href="#" className="hover:text-primary">
                  Themes
                </Link>
                <Link
                  href="https://github.com/renzynx/neumorphic-ui"
                  className="hover:text-primary"
                >
                  GitHub
                </Link>
              </div>

              <p className="text-xs text-muted-foreground">
                © {new Date().getFullYear()} renzynx.
              </p>
            </div>
          </footer>
        </main>
      </div>
    </ToastProvider>
  );
}
