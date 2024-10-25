import "@/styles/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EndoReport",
  description: "Page d'accueil de l'application EndoReport",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
