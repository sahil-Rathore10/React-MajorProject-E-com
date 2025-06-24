import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
import { useEffect } from "react";
import { asyncCurrentUser } from "./store/actions/userAction";
import { useDispatch } from "react-redux";
const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, []);

  return (
    <div
      className="px-[10%]
    w-screen h-screen bg-gray-800 text-white font-thin"
    >
      <Navbar />
      <Mainroutes />
    </div>
  );
};

export default App;
