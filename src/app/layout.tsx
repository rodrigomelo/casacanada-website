import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Casa Canadá",
  description:
    "Intercâmbio comercial e cultural entre Brasil e Canadá desde 1997",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
