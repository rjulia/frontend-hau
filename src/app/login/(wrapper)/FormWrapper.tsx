"use client";

import ReduxProvider from "@/lib/store/provaider";
import LoginForm from "../(components)/FormLoging";

export default function FormWrapper() {
  return (
    <ReduxProvider>
      <LoginForm />
    </ReduxProvider>
  );
}
