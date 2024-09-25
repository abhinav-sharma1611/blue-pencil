import type { Metadata } from "next";
import { Providers } from './providers'

import { cn } from "@/lib/utils";
import "./globals.css";

export const metadata: Metadata = {
  title: "Blue Pencil",
  description: "Landing Page",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="light">
      <body
        className={cn(
          "flex min-h-screen flex-col font-sans antialiased",
        )}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
