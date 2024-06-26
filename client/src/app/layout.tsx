import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/site-header";
import { ReactQueryClientProvider } from "@/components/_providers/react-query.provider";
import { SessionProvider } from "next-auth/react";
import { auth } from "./(auth)/auth";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth();

  return (
    <html lang="en">
      <body className={spaceGrotesk.className}>
        <SessionProvider session={session}>
          <div className="relative flex min-h-screen flex-col bg-background">
            <SiteHeader />
            <main className="flex flex-1 justify-center items-center">
              <div className="container relative">
                <ReactQueryClientProvider>{children}</ReactQueryClientProvider>
              </div>
            </main>
          </div>
        </SessionProvider>
      </body>
    </html>
  );
}
