import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Providers from "./Providers";
import HomeLayout from "@/components/ui/layouts/HomeLayout";
import { ThemeProvider } from "@/context/Theme-provider";
import AuthDialogProvider from "@/context/AuthDialog";
import { Toaster } from "@/components/cli/sonner";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "LearnTok",
  description:
    "Discover the ultimate fusion of education and entertainment with Learntok! Explore bite-sized educational content covering a variety of subjects, from science and history to languages and math. Engage with interactive quizzes, challenges, and discussions, and join a vibrant community of learners and creators. Revolutionize your learning experience today with Learntok!",
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
          "h-screen overflow-auto font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Providers>
            <AuthDialogProvider>
              <HomeLayout>{children}</HomeLayout>
              <Toaster />
            </AuthDialogProvider>
          </Providers>
        </ThemeProvider>
      </body>
    </html>
  );
}
