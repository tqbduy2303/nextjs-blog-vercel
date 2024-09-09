import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";
import Header from "@/components/header";
import NextThemeProvider from "@/providers/theme-provider";
import GlobalState from "@/context";
import NextAuthProvider from "@/providers/next-auth-provider";
import {NextIntlClientProvider} from 'next-intl';
import {getLocale, getMessages} from 'next-intl/server';
import {headers} from "next/headers";      
import {notFound} from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const header = headers();
  const localeHeader = header.get('x-next-intl-locale');
  if (localeHeader === null) {
      notFound();
  }
  const locale = await getLocale();
 
  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();
  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-primaryColor1 dark:bg-primaryColor`}>
      <NextIntlClientProvider messages={messages}>
        <NextThemeProvider>
          <NextAuthProvider>
            <GlobalState>
              <Header/>
              {children}
            </GlobalState>
          </NextAuthProvider>
        </NextThemeProvider>
      </NextIntlClientProvider>
      </body>
    </html>
  );
}
