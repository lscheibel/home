import type { Metadata } from "next";
import Theme from "@/components/theme";
import "@radix-ui/themes/styles.css";
import "./globals.css";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });
//
// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {
  title: "Lennard Scheibel",
  description: "Hey there! This is my little corner of the internet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Theme>{children}</Theme>
      </body>
    </html>
  );
}
