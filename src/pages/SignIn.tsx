import React, { FormEvent } from "react";
import { useFormik } from "formik";
import { signIn } from "../api/auth";

const validate = (data: any) => {
  const errors: any = {};
  if (!data.username) {
    errors.username = "Username is required";
  }
  if (!data.password) {
    errors.password = "Password is required";
  } else if (data.password.length < 6) {
    errors.password = "Password must be 6 characters or more";
  }
  return errors;
};

const SignIn = () => {
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validate,
    onSubmit: (values) => {
      signIn(values).then((res) =>
        localStorage.setItem("token", JSON.stringify(res.data.accessToken))
      );
    },
  });

  return (
    <div className="flex justify-center items-center h-screen bg-amber-400">
      <div className="w-4/5 sm:w-96 bg-white rounded px-4 py-8 shadow-lg">
        <div className="text-center space-y-2 mb-4">
          <h1 className="font-bold text-3xl">Chat App</h1>
          <p>Sign in to your account</p>
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

          <label htmlFor="password" className="block">
            <div className="flex justify-between items-center mb-2">
              <span className="font-medium">Password</span>
              <button className="text-sm text-gray-500 hover:underline">
                Forgotten password?
              </button>
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
            Sign in
          </button>
          <p className="text-center text-sm">
            No account?{" "}
            <span className="text-amber-400 hover:underline">Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
