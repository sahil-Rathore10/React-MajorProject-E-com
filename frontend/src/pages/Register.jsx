import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();

  const registerHandler = (user) => {
    user.id = nanoid();
    console.log(user);
  };
  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex flex-col w-1/2"
    >
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

      <button className="mt-4 px-4 py-2 bg-blue-400 rounded">
        Register User
      </button>

      <p className="mt-5">
        Already have an account!{" "}
        <Link className="text-blue-400" to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Register;
