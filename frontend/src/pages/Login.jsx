import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { asyncLoginUser } from "../store/actions/userAction";
import { useDispatch } from "react-redux";

const Login = () => {
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const loginHandler = (user) => {
    dispatch(asyncLoginUser(user));
    reset();
  };
  return (
    <form onSubmit={handleSubmit(loginHandler)} className="flex flex-col w-1/2">
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
      {/* {errors.email && <p className="text-red-500">{errors.email.message}</p>} */}
      <input
        {...register("password", {
          required: "Password is required",
          minLength: {
            value: 6,
            message: "Password must be at least 6 Characters long",
          },
        })}
        className="outline-0 border-b p-2 text-2xl mt-4"
        type="password"
        placeholder="*******"
      />

      <button type="submit" className="mt-4 px-4 py-2 bg-blue-700 rounded">
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
