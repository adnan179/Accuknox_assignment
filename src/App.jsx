import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="blue-shade overflow-hidden flex flex-col w-full min-h-screen ">
      <Navbar />
      <div className="mt-3">
        <Home />
      </div>
    </div>
  );
};

export default App;
