import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRUD com Nest.js",
  description: "CRUD utilizando Nest.js, PostgreSQL e Prisma para o Back-end, e TailwindCSS, Next.js para o front-end",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body>
        {children}
      </body>
    </html>
  );
}