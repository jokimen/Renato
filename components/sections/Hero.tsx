"use client";

import { motion } from "framer-motion";
import { Scissors } from "lucide-react";
import Image from "next/image";
import { siteContent } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="from-background via-background relative flex min-h-screen items-center overflow-hidden bg-gradient-to-b to-black/20"
    >
      <motion.div
        aria-hidden
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="pointer-events-none absolute top-1/2 -right-6 hidden h-[440px] w-[440px] -translate-y-1/2 lg:block"
      >
        <motion.div
          initial={{ rotate: -12 }}
          animate={{ rotate: [-12, -6, -12], y: [0, -14, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 right-0 -translate-y-1/2"
        >
          <Scissors
            size={360}
            strokeWidth={0.6}
            className="text-gold-500 drop-shadow-[0_0_60px_rgba(201,163,92,0.35)]"
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.45 }}
        transition={{ duration: 1.2 }}
        className="pointer-events-none absolute top-1/2 -left-8 hidden h-[360px] w-[320px] -translate-y-1/2 lg:block"
      >
        <motion.div
          animate={{ y: [0, 12, 0] }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.4,
          }}
          className="absolute bottom-4 left-0"
        >
          <Image
            src="/images/cadeira.png"
            alt=""
            width={200}
            height={219}
            priority
            className="mix-blend-screen"
          />
        </motion.div>

        <motion.div
          initial={{ rotate: 18 }}
          animate={{ rotate: [18, 12, 18], y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.8,
          }}
          className="absolute top-2 left-32"
        >
          <Image
            src="/images/maquina.png"
            alt=""
            width={130}
            height={142}
            priority
            className="mix-blend-screen"
          />
        </motion.div>
      </motion.div>

      <motion.div
        aria-hidden
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.18 }}
        transition={{ duration: 1 }}
        className="pointer-events-none absolute inset-0 flex items-center justify-center gap-6 lg:hidden"
      >
        <Scissors
          size={220}
          strokeWidth={0.6}
          className="text-gold-500 -rotate-[15deg]"
        />
        <Image
          src="/images/cadeira.png"
          alt=""
          width={82}
          height={90}
          priority
          className="mix-blend-screen"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(201,163,92,0.12),_transparent_60%)]" />

      <div className="relative mx-auto flex max-w-6xl flex-col items-start px-6 pt-24">
        <motion.span
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-gold-500 mb-4 text-xs font-semibold tracking-[0.35em] uppercase"
        >
          {siteContent.tagline}
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-display max-w-2xl text-5xl leading-[1.05] font-medium text-balance sm:text-6xl lg:text-7xl"
        >
          {siteContent.businessName}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="text-foreground/70 mt-6 max-w-md text-lg text-balance"
        >
          Cortes de precisão e cuidado capilar, num espaço pensado para o
          detalhe. {siteContent.social.recommendPercent}% de recomendação por
          quem já passou por aqui.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10"
        >
          <motion.a
            href="#marcacoes"
            whileHover={{ scale: 1.04, y: -2 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", stiffness: 400, damping: 20 }}
            className="bg-gold-500 hover:bg-gold-400 shadow-gold-500/30 inline-flex items-center justify-center rounded-full px-8 py-3 text-sm font-semibold tracking-wide text-black uppercase shadow-[0_0_30px_-8px] transition-colors"
          >
            Marcar Agora
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="border-foreground/30 absolute bottom-10 left-1/2 h-10 w-6 -translate-x-1/2 rounded-full border-2"
      >
        <motion.div
          animate={{ y: [2, 14, 2], opacity: [1, 0, 1] }}
          transition={{ duration: 1.6, repeat: Infinity }}
          className="bg-gold-500 mx-auto mt-2 h-2 w-2 rounded-full"
        />
      </motion.div>
    </section>
  );
}
