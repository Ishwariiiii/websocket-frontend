"use client";

import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "@/redux/slice/AuthSlice";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { toast } from "react-toastify";
import { AppDispatch, RootState } from "@/redux/store";
import Link from "next/link";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  
  const { isLoading, isError } = useSelector((state: RootState) => state.auth);

  
  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Email is required"),
    password: Yup.string().min(6, "Password must be at least 6 characters").required("Password is required"),
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-5">
      <div className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] h-auto flex items-center justify-center flex-col bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Login</h2>

        <Formik
          initialValues={{ email: "", password: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            dispatch(loginUser(values)).then((result: any) => {
              if (result.payload && result.payload.token) {
                toast.success("Login successful!");
                router.push("/chat"); 
              }
            });
          }}
        >
          {({ isSubmitting }) => (
            <Form className="w-full flex flex-col items-center space-y-6">
              <Field
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1" />

              <Field
                type="password"
                name="password"
                placeholder="Password"
                className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
              />
              <ErrorMessage name="password" component="div" className="text-red-500 text-sm mt-1" />

              {isError && <p className="text-red-500 text-sm mb-2">{isError}</p>}

              <button
                type="submit"
                className="w-full mt-6 py-3 text-center font-semibold text-white bg-[#ad5431] rounded-lg transition-all hover:bg-[#9c4230]  duration-300  shadow-lg"
                disabled={isSubmitting || isLoading}
              >
                {isLoading ? <AiOutlineLoading3Quarters /> : "Login"}
              </button>
            </Form>
          )}
        </Formik>

        <div className="w-full mt-6 text-center">
          <p className="text-white text-sm mb-3">Don't have an account?</p>
          <Link href="/register" className="text-lg font-semibold text-white underline hover:text-gray-300 transition-colors">
            Register now!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
