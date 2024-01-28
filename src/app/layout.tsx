'use client';
import type { Metadata } from "next";
import ReduxProvider from "@/lib/store/provaider";
import { Roboto } from 'next/font/google'
import "./globals.css";

const roboto = Roboto({
  weight: ['100', '400','500', '900'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ReduxProvider>
          {children}
        </ReduxProvider>
      </body>
    </html>
  );
}
