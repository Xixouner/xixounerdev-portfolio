"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "~/ui/primitives/button";
import { navLinks } from "~/lib/data-contact";
import { cn } from "~/lib/utils";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/40 bg-surface/80 backdrop-blur-lg supports-[backdrop-filter]:bg-surface/60">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#hero"
          className="text-xl font-bold tracking-tight text-primary"
        >
          Xixouner<span className="text-accent">Dev</span>
        </a>

        {/* Desktop */}
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm font-medium text-text-light transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Button size="sm" asChild>
              <a href="#contact">Devis gratuit</a>
            </Button>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="rounded-lg p-2 text-text-light hover:bg-border/50 md:hidden"
          aria-label="Menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={cn(
          "overflow-hidden border-t border-border/40 bg-surface transition-all duration-300 md:hidden",
          open ? "max-h-80" : "max-h-0"
        )}
      >
        <ul className="flex flex-col gap-2 px-6 py-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={() => setOpen(false)}
                className="block rounded-lg px-3 py-2 text-sm font-medium text-text-light hover:bg-accent/10 hover:text-accent"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <Button className="w-full" size="sm" asChild>
              <a href="#contact" onClick={() => setOpen(false)}>
                Devis gratuit
              </a>
            </Button>
          </li>
        </ul>
      </div>
    </header>
  );
}
