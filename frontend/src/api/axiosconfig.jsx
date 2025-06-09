import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/",
});

// interceptor b add kr skte hai

export default instance;
