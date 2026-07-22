import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";
import { siteContent } from "@/lib/content";
import { ThemeProvider } from "@/components/ui/ThemeProvider";
import { SmoothScrollProvider } from "@/components/ui/SmoothScrollProvider";
import { LoadingScreen } from "@/components/ui/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { Navbar } from "@/components/ui/Navbar";
import { FloatingBookButton } from "@/components/ui/FloatingBookButton";
import { FloatingWhatsAppButton } from "@/components/ui/FloatingWhatsAppButton";
import { CalendlyLoader } from "@/components/ui/CalendlyLoader";
import { Footer } from "@/components/sections/Footer";

const inter = Inter({
  variable: "--font-sans-body",
  subsets: ["latin"],
});

const oswald = Oswald({
  variable: "--font-display-heading",
  subsets: ["latin"],
  weight: ["500", "600"],
});

export const metadata: Metadata = {
  title: `${siteContent.businessName} | Cabeleireiro em Trofa`,
  description:
    "Cabeleireiro de precisão em Trofa. Cortes de cabelo, barba e tratamentos com atenção ao detalhe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt"
      suppressHydrationWarning
      className={`${inter.variable} ${oswald.variable}`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://assets.calendly.com/assets/external/widget.css"
        />
      </head>
      <body className="min-h-full antialiased">
        <CalendlyLoader />
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
        >
          <SmoothScrollProvider>
            <LoadingScreen />
            <CustomCursor />
            <Navbar />
            {children}
            <Footer />
            <FloatingBookButton />
            <FloatingWhatsAppButton />
          </SmoothScrollProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
