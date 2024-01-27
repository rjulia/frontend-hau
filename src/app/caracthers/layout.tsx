
import Header from "@/components/Header";
import { Suspense } from "react";
import Loading from "./loading";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Header title="The Rick and Morty API"/>
      {children}
    </div>
  );
}
