"use client";
import Header from "@/components/Header";
import { setAuth, setJid } from "@/lib/store/slices/authSlice";
import { useAppDispatch, useAppSelector } from "@/lib/store/store";
import { useRouter } from "next/navigation";

import { useEffect } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isAuth = useAppSelector((state:any) => state.auth.isAuth);
  const dispatch = useAppDispatch();
  const router = useRouter()
  
  const handleLogout = () => {
    dispatch(setJid(""));
    dispatch(setAuth(false));
  };

  useEffect(() => {
    if(!isAuth) {
      router.push("/login");
    }
  } 
  , [isAuth, router]);


  if(!isAuth) {
    router.push("/");
  }
  return (
    <div>
      <Header 
        title="The Rick and Morty API"
        onHandleLogout={handleLogout}
      />
      {children}
    </div>
  );
}
