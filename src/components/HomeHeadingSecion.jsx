import reload from "../assets/reload.png";
import menu from "../assets/menu.png";
import clock from "../assets/clock.png";

const HomeHeadingSecion = ({ toggleSidebar }) => {
  //function to reload the page
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <div className="flex sm:flex-row flex-col gap-2 w-full justify-between sm:items-center">
      <h1 className="text-black font-bold text-xl">CNAPP Dashboard</h1>
      <div className="rows sm:gap-4 gap-2">
        <button
          className=" font-medium text-gray-300 bg-white rounded-md sm:px-4 sm:py-2 px-2 py-0 text-[12px] sm:text-lg"
          onClick={toggleSidebar}
        >
          Add widget {" + "}
        </button>
        <button
          className="p-2 shadow bg-white rounded-md"
          onClick={handleReload}
        >
          <img src={reload} alt="reload-icon" className="w-5 h-5" />
        </button>
        <button className="p-2 shadow bg-white rounded-md">
          <img src={menu} alt="reload-icon" className="w-5 h-5" />
        </button>
        <div className="relative inline-flex items-center">
          <img
            src={clock}
            alt="Clock Icon"
            className="absolute left-3 w-4 h-4"
          />
          <span className="absolute left-8 -mt-[5px] ml-1">|</span>
          <select className="text-[#124FAB] font-medium bg-white border-[2px] border-[#124FAB] rounded-md pl-12 pr-4 py-2 outline-none shadow">
            <option>Past 2 days</option>
            <option>Past week</option>
            <option>Past month</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default HomeHeadingSecion;
