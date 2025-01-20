import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CRUD com Next.js",
  description: "CRUD utilizando Next.js, Prisma, React e Tailwind",
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
