import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();

  const loginHandler = (user) => {
    user.id = nanoid();
    console.log(user);
  };
  return (
    <form onSubmit={handleSubmit(loginHandler)} className="flex flex-col w-1/2">
      <input
        {...register("username")}
        className="outline-0 border-b p-2 text-2xl"
        type="text"
        placeholder="John-Doe"
      />
      <input
        {...register("email", {
          required: "Email is required",
          pattern: {
            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Basic email regex
            message: "Please enter a valid email address",
          },
        })}
        className="outline-0 border-b p-2 text-2xl"
        type="email"
        placeholder="John@Doe.com"
      />
      <input
        {...register("password")}
        className="outline-0 border-b p-2 text-2xl"
        type="password"
        placeholder="*******"
      />

      <button className="mt-4 px-4 py-2 bg-blue-700 rounded">
        Login button
      </button>

      <p className="mt-5">
        Don't have an account!{" "}
        <Link className="text-blue-400" to="/register">
          Register
        </Link>
      </p>
    </form>
  );
};

export default Login;
