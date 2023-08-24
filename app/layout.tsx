import "./globals.css";
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin", "latin-ext"] });

export const metadata: Metadata = {
  title: {
    template: "Andrea Lopez | %s",
    default: "Andrea Lopez",
  },
  description:
    "Andrea Lopez is a clinical research coordinator at Children's National Hopsital's Center for Autism Spectrum Disorders. Her passions include interventions within the Latinx, LGBTQ, and other underserved communities.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${playfair.className} bg-off-white`}>
        {children}
      </body>
    </html>
  );
}
