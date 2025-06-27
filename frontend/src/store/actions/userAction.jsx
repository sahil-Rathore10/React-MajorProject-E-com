import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";

export const asyncCurrentUser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loaduser(user));
      console.log("Session Restored!");
    } else {
      console.log("user not logged in");
    }
  } catch (error) {
    console.log(error);
  }
};

export const asyncLogoutUser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    console.log("user Logged out");
  } catch (error) {
    console.log(error);
  }
};

export const asyncLoginUser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `/users?email=${user.email}&password=${user.password}`
    );

    if (data.length > 0) {
      // ✅ User found
      const loggedInUser = data[0];

      // Save to localStorage
      localStorage.setItem("user", JSON.stringify(loggedInUser));

      // Optional: dispatch to redux if you have a reducer
      dispatch({ type: "LOGIN_SUCCESS", payload: loggedInUser });
    } else {
      // ❌ No user found
      alert("Invalid email or password");
    }
  } catch (error) {
    console.log("Login failed", error);
    alert("Something went wrong. Try again later.");
  }
};

export const asyncRegisterUser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
    console.log(res);
  } catch (error) {
    toastify.error("Error..");
  }
};
