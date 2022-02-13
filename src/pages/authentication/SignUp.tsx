import { useFormik } from "formik";
import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "./Authentication";
import { RoutePath } from "../loader/RoutesLoader";

const validate = (data: any) => {
  const errors: any = {};
  if (!data.username) {
    errors.username = "Username is required";
  }

  if (!data.email) {
    errors.email = "Email is required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(data.email)) {
    errors.email = "Invalid email";
  }

  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be 6 characters or more";
  }
  return errors;
};

const SignUp = () => {
  const navigate = useNavigate();
  const location = useLocation() as any;
  const auth = useAuth();

  const formik = useFormik({
    initialValues: {
      username: "",
      email: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      const { username, email, password } = values;
      auth.signup(username, email, password, () => {
        navigate(RoutePath.Chat, { replace: true });
      });
    },
  });

  return (
    <>
      <div className="text-center space-y-2 mb-4">
        <h1 className="font-bold text-3xl">Chat App</h1>
        <p>Create an account and join our incredible community</p>
      </div>
      <form className="space-y-4" onSubmit={formik.handleSubmit}>
        <label htmlFor="username" className="block">
          <span className="block mb-2 font-medium">Username</span>
          <div className="relative">
            <span className="material-icons-outlined absolute left-3 top-1/2 text-xl -translate-y-1/2 text-gray-400">
              alternate_email
            </span>
            <input
              type="text"
              id="username"
              value={formik.values.username}
              onChange={formik.handleChange}
              placeholder="Enter username"
              className="w-full p-3 pl-11 rounded-md shadow-inner text-sm border border-gray-200 outline-amber-400"
              required
            />
            {/* Extraer componente */}
            {formik.errors.username ? (
              <div className="flex items-center lg:absolute lg:top-1/2 lg:left-96 lg:-translate-y-1/2 bg-white w-fit px-4 py-2 rounded border border-red-500">
                <span className="material-icons-outlined text-red-600">
                  error_outline
                </span>
                <span className="ml-2 font-medium text-sm">
                  {formik.errors.username}
                </span>
              </div>
            ) : null}
          </div>
        </label>

        <label htmlFor="email" className="block">
          <span className="block mb-2 font-medium">Email</span>
          <div className="relative">
            <span className="material-icons-outlined absolute left-3 top-1/2 text-xl -translate-y-1/2 text-gray-400">
              email
            </span>
            <input
              type="email"
              id="email"
              value={formik.values.email}
              onChange={formik.handleChange}
              placeholder="Enter email"
              className="w-full p-3 pl-11 rounded-md shadow-inner text-sm border border-gray-200 outline-amber-400"
              required
            />
            {/* Extraer componente */}
            {formik.errors.email ? (
              <div className="flex items-center lg:absolute lg:top-1/2 lg:left-96 lg:-translate-y-1/2 bg-white w-fit px-4 py-2 rounded border border-red-500">
                <span className="material-icons-outlined text-red-600">
                  error_outline
                </span>
                <span className="ml-2 font-medium text-sm">
                  {formik.errors.email}
                </span>
              </div>
            ) : null}
          </div>
        </label>

        <label htmlFor="password" className="block">
          <div className="flex justify-between items-center mb-2">
            <span className="font-medium">Password</span>
          </div>
          <div className="relative">
            <span className="material-icons-outlined absolute left-3 top-1/2 text-xl -translate-y-1/2 text-gray-400">
              lock
            </span>
            <input
              type="password"
              id="password"
              value={formik.values.password}
              onChange={formik.handleChange}
              placeholder="Enter password"
              className="w-full p-3 pl-11 rounded-md shadow-inner text-sm border border-gray-200 outline-amber-400"
              required
            />
            {/* Extraer componente */}
            {formik.errors.password ? (
              <div className="flex items-center lg:absolute lg:top-1/2 lg:left-96 lg:-translate-y-1/2 bg-white w-fit px-4 py-2 rounded border border-red-500">
                <span className="material-icons-outlined text-red-600">
                  error_outline
                </span>
                <span className="ml-2 font-medium text-sm">
                  {formik.errors.password}
                </span>
              </div>
            ) : null}
          </div>
        </label>
        <button
          type="submit"
          className="block w-full py-2 rounded text-white font-medium bg-amber-400 hover:bg-amber-500"
        >
          Sign up
        </button>
        <p className="text-center text-sm">
          Got an account?{" "}
          <Link
            to={RoutePath.SingIn}
            className="text-amber-400 hover:underline"
          >
            Sign in
          </Link>
        </p>
      </form>
    </>
  );
};

export default SignUp;
