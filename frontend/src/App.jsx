import Mainroutes from "./routes/Mainroutes";
import Navbar from "./components/Navbar";
const App = () => {
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
