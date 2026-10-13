import type { Metadata, Viewport } from "next";
import { Anton, Inter } from "next/font/google";
import "./globals.css";
import { site } from "@/lib/site";

// Anton = impacto nos títulos | Inter = leitura profissional
const anton = Anton({ weight: "400", subsets: ["latin"], variable: "--font-anton" });
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: `Academia Molina | Melhor Academia de Hapkido em ${site.city} | Hapkido de Verdade`,
  description: `Hapkido e defesa pessoal em ${site.city}-${site.state} com o Mestre Eduardo Molina. Aula experimental grátis. Entre para o time que não aceita fracos.`,
  openGraph: {
    title: "Academia Molina | Hapkido que forja guerreiros",
    description: "Sem frescura. Só tatame. Agende sua aula experimental.",
    url: site.url,
    siteName: site.name,
    locale: "pt_BR",
    type: "website",
    images: [{ url: "/logo_tigre.png", width: 1475, height: 1475 }],
  },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#050505" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR" className={`${anton.variable} ${inter.variable}`}>
      <body>{children}</body>
    </html>
  );
}
