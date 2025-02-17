"use client";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/redux/store";
import { registerUser } from "@/redux/slice/AuthSlice";
import { useRouter } from "next/navigation";

const Register: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router=useRouter()

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-5">
      <div className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] h-auto flex items-center justify-center flex-col bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Register</h2>

        <Formik
          initialValues={{ username: "", email: "", password: "" }}
          validate={(values) => {
            const errors: Record<string, string> = {};
            if (!values.username) errors.username = "Username is required";
            if (!values.email) errors.email = "Email is required";
            else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Invalid email address";
            if (!values.password) errors.password = "Password is required";
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(registerUser(values));
            setSubmitting(false);
            router.push("./chat")
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col items-center space-y-6">
              <Field
                type="text"
                name="username"
                placeholder="User Name"
                className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
              />
              <ErrorMessage name="username" component="p" className="text-red-500 text-sm" />

              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
              />
              <ErrorMessage name="email" component="p" className="text-red-500 text-sm" />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
              />
              <ErrorMessage name="password" component="p" className="text-red-500 text-sm" />

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full mt-6 py-3 text-center font-semibold text-white bg-[#ad5431] rounded-lg hover:bg-[#9c4230] transition-all duration-300 shadow-lg"
              >
                Register
              </button>
            </Form>
          )}
        </Formik>

        <div className="w-full mt-6 text-center">
          <p className="text-white text-sm mb-3">Already have an account?</p>
          <Link href="/login" className="text-lg font-semibold text-white underline hover:text-gray-300 transition-colors">
            Login now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
