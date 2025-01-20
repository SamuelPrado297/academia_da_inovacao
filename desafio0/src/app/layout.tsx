import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Componente com Next.js",
  description: "Primeiro Componente com Next.js. Feito por Samuel Prado e Fabio Luna",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="bg-zinc-900">
        {children}
      </body>
    </html>
  );
}
