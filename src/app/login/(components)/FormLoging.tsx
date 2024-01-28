'use client';

import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useRouter } from "next/navigation";
import { useAppDispatch } from "@/lib/store/store";
import { setAuth, setJid } from "@/lib/store/slices/authSlice";
import { setFav } from "@/lib/store/slices/favSlice";
import { useFavorite } from "@/lib/hooks/useFavorites";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string().required("Password is required"),
});

export default function FormLoging() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const { addFavorites } = useFavorite()

  const dispatch = useAppDispatch();

  type FormValues = {
    email: string;
    password: string;
  };


  const handleSubmit = async (values:FormValues) => {
    setLoading(true);
    try {
      const res = await fetch(`http://localhost:8000/api/users/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
        credentials: "include",
        mode: "cors",
      });
      const data = await res.json();
      console.log("🚀 ~ handleSubmit ~ data:", data)
      if (!res.ok) throw new Error(data.message);
      addFavorites(data.favorites)
      dispatch(setJid(data.token));
      dispatch(setAuth(true));
      router.push("/caracthers");
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Formik
      initialValues={{
        email: "",
        password: "",
      }}
      validationSchema={LoginSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div>
          <label htmlFor="email">Email</label>
          <Field type="email" id="email" name="email" />
          <ErrorMessage name="email" component="div" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Field type="password" id="password" name="password" />
          <ErrorMessage name="password" component="div" />
        </div>
        <button type="submit">Login</button>
      </Form>
    </Formik>
  );
}