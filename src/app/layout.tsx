import type { Metadata } from "next";
import Theme from "@/components/theme";
import { ThemeProvider } from "next-themes";
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
  metadataBase: new URL("https://lscheibel.vercel.app"),
  title: "Lennard Scheibel",
  description: "Hey there! This is my little corner of the internet.",
  icons: [{ url: "/favicon.svg", type: "image/svg+xml" }],
  openGraph: { images: "/og-image.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <ThemeProvider attribute="class">
          <Theme>{children}</Theme>
        </ThemeProvider>
      </body>
    </html>
  );
}
