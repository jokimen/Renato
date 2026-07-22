"use client";

import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { Menu, Moon, Sun, X } from "lucide-react";
import { useTheme } from "next-themes";
import Image from "next/image";
import { useState } from "react";
import { siteContent } from "@/lib/content";
import { cn } from "@/lib/utils";
import { useMounted } from "@/lib/useMounted";

const NAV_LINKS = [
  { href: "#sobre", label: "Sobre" },
  { href: "#servicos", label: "Serviços" },
  { href: "#galeria", label: "Galeria" },
  { href: "#equipa", label: "Equipa" },
  { href: "#testemunhos", label: "Testemunhos" },
  { href: "#contacto", label: "Contacto" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const { resolvedTheme, setTheme } = useTheme();
  const mounted = useMounted();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 40);
  });

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-background/80 border-border border-b backdrop-blur-md"
          : "bg-transparent",
      )}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <a href="#top" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt={siteContent.businessName}
            width={600}
            height={226}
            priority
            className="h-16 w-auto drop-shadow-[0_2px_6px_rgba(0,0,0,0.55)]"
          />
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium tracking-wide md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="hover:text-gold-500 transition-colors"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            type="button"
            aria-label="Alternar tema"
            onClick={() =>
              setTheme(resolvedTheme === "dark" ? "light" : "dark")
            }
            className="hover:text-gold-500 hidden h-9 w-9 items-center justify-center rounded-full transition-colors md:flex"
          >
            {mounted && resolvedTheme === "dark" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          <a
            href="#marcacoes"
            className="bg-gold-500 hover:bg-gold-400 hidden rounded-full px-5 py-2 text-sm font-semibold text-black transition-colors md:inline-flex"
          >
            Marcar Agora
          </a>
          <button
            type="button"
            aria-label="Abrir menu"
            onClick={() => setOpen((v) => !v)}
            className="flex h-9 w-9 items-center justify-center md:hidden"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          exit={{ opacity: 0, height: 0 }}
          className="bg-background border-border border-t md:hidden"
        >
          <ul className="flex flex-col gap-1 px-6 py-4">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-gold-500 block py-2 text-sm font-medium"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#marcacoes"
                onClick={() => setOpen(false)}
                className="bg-gold-500 mt-2 inline-flex rounded-full px-5 py-2 text-sm font-semibold text-black"
              >
                Marcar Agora
              </a>
            </li>
          </ul>
        </motion.div>
      )}
    </motion.header>
  );
}
