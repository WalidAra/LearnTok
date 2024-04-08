import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { NextUI } from "./NextUI";
import { ChakraProvider } from "@chakra-ui/react";
import HomeLayout from "@/components/ui/layouts/HomeLayout";
import ThemeProvider from "@/context/Theme";
import AuthDialogProvider from "@/context/AuthDialog";
import AuthDialog from "@/components/ui/molecules/AuthDialog";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={inter.className}>
        <ThemeProvider>
          <NextUI>
            <ChakraProvider>
              <AuthDialogProvider>
                <AuthDialog />
                <HomeLayout>{children}</HomeLayout>
              </AuthDialogProvider>
            </ChakraProvider>
          </NextUI>
        </ThemeProvider>
      </body>
    </html>
  );
}
