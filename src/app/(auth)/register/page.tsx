"use client";
import { useFormik } from "formik";
import Link from "next/link";

const Register = () => {
  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      console.log("Form Submitted", values);
    },
    validate: (values) => {
      const errors: { [key: string]: string } = {};

      if (!values.firstName) errors.firstName = "First Name is required";
      if (!values.lastName) errors.lastName = "Last Name is required";
      if (!values.email) errors.email = "Email is required";
      else if (!/\S+@\S+\.\S+/.test(values.email)) errors.email = "Invalid email address";
      if (!values.password) errors.password = "Password is required";
      if (!values.confirmPassword) errors.confirmPassword = "Confirm your password";
      else if (values.confirmPassword !== values.password) errors.confirmPassword = "Passwords must match";

      return errors;
    },
  });

  return (
    <div className="w-full h-screen flex items-center justify-center bg-gradient-to-r from-[#1a1a2e] to-[#16213e] py-5">
      <div className="w-[90%] sm:w-[70%] md:w-[40%] lg:w-[30%] h-auto flex items-center justify-center flex-col bg-white/10 backdrop-blur-lg rounded-3xl shadow-2xl p-12 border border-white/20">
        <h2 className="text-3xl font-bold text-white mb-6 text-center">Register</h2>
        <h2>fdgfhghf</h2>

        <form className="w-full flex flex-col items-center space-y-6" onSubmit={formik.handleSubmit}>
          <input
            type="text"
            placeholder="User Name"
            name="userName"
            value={formik.values.firstName}
            onChange={formik.handleChange}
            className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
          />
          {formik.errors.firstName && <p className="text-red-500 text-sm">{formik.errors.firstName}</p>}

          <input
            type="email"
            placeholder="Email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
          />
          {formik.errors.email && <p className="text-red-500 text-sm">{formik.errors.email}</p>}

          <input
            type="password"
            placeholder="Password"
            name="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            className="w-full bg-white/20 backdrop-blur-md text-white px-4 py-3 rounded-lg outline-none placeholder-white"
          />
          {formik.errors.password && <p className="text-red-500 text-sm">{formik.errors.password}</p>}

          <button
            type="submit"
            className="w-full mt-6 py-3 text-center font-semibold text-white bg-[#ad5431] rounded-lg hover:bg-[#9c4230]rounded-lg transition-all duration-300 shadow-lg"
          >
            Register
          </button>
        </form>

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
