import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/cli/shadcn/toast";
import { cn } from "@/lib/utils";
import HomeWrapper from "@/components/layouts/HomeWrapper";
import Providers from "@/providers/Providers";
import { ThemeProvider } from "@/providers/ThemeProvider";

import AuthDialogProvider from "@/providers/AuthDialogProvider";
import FormAuthen from "@/components/utils/FormAuthen";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LearnTok",
  description: "Discover and learn while watching",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <Providers>
          <AuthDialogProvider>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              <FormAuthen />
              <HomeWrapper>
                <Toaster /> {children}
              </HomeWrapper>
            </ThemeProvider>
          </AuthDialogProvider>
        </Providers>
      </body>
    </html>
  );
}
