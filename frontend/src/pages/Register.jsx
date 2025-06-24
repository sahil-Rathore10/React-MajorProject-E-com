import { nanoid } from "nanoid";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { asyncRegisterUser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Register = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    dispatch(asyncRegisterUser(user));
    reset();
    navigate("/login");
  };
  return (
    <form
      onSubmit={handleSubmit(registerHandler)}
      className="flex flex-col w-1/2"
    >
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
