import type { Metadata } from "next";
import { Space_Grotesk, DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  weight: ["300", "400", "500", "700"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  weight: ["300", "400", "500"],
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  title: "Jenn Tran — Product Designer",
  description:
    "Product designer who moves the needle. I research fast, build conviction, and ship products that change how businesses perform.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${cormorant.variable}`}>
      <body className="bg-bg text-text font-sans antialiased">{children}</body>
    </html>
  );
}
