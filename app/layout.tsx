import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ahona | Portfolio",
  description: "A beautiful, modern, and cute portfolio of Sanjida Farha Khan Ahona - CSE Student at Southeast University.",
  keywords: ["Sanjida Farha Khan Ahona", "Portfolio", "CSE Student", "Southeast University"],
  authors: [{ name: "Ahona" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="min-h-full antialiased">
      <body className="min-h-full flex flex-col font-sans">
        {children}
      </body>
    </html>
  );
}
