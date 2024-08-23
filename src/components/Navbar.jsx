import { useState } from "react";
import notification from "../assets/notification.png";
import profile from "../assets/profile.png";
import { AiOutlineSearch, AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { Disclosure } from "@headlessui/react";

const Navbar = () => {
  const [search, setSearch] = useState("");
  const clearSearch = () => {
    setSearch("");
  };

  return (
    <div className="bg-white px-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center h-[6vh]">
        <h2 className="text-gray-300">
          Home{" > "}
          <span className="text-blue-800 font-medium">Dashboard v2</span>
        </h2>
        <div className="hidden md:flex gap-4 items-center">
          <div className="relative w-64">
            {/* Search Icon */}
            <AiOutlineSearch className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400" />

            {/* Input Field */}
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search anything..."
              className="w-full pl-8 pr-8 py-1 rounded-md border border-gray-300 text-gray-400 focus:text-black focus:outline-none"
            />

            {/* Clear Icon */}
            {search && (
              <AiOutlineClose
                onClick={clearSearch}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 cursor-pointer"
              />
            )}
          </div>
          <select className="px-2 py-1 border border-gray-300 rounded-md text-gray-400">
            <option>Option-1</option>
            <option>Option-2</option>
            <option>Option-3</option>
          </select>
          <img src={notification} alt="notification icon" className="w-6 h-6" />
          <img src={profile} alt="profile icon" className="w-6 h-6" />
        </div>
        <div className="md:hidden flex items-center z-50">
          <Disclosure>
            {({ open }) => (
              <>
                <Disclosure.Button className="text-blue-800">
                  <AiOutlineMenu className="w-6 h-6" />
                </Disclosure.Button>
                <Disclosure.Panel className="absolute top-16 right-4 w-48 bg-white border border-gray-300 shadow-lg rounded-md">
                  <div className="p-4 flex flex-col space-y-2">
                    <input
                      type="text"
                      value={search}
                      onChange={(e) => setSearch(e.target.value)}
                      placeholder="Search anything..."
                      className="w-full pl-2 pr-8 py-1 rounded-md border border-gray-300 text-gray-400 focus:text-black focus:outline-none"
                    />
                    {search && (
                      <AiOutlineClose
                        onClick={clearSearch}
                        className="text-gray-400 cursor-pointer"
                      />
                    )}
                    <select className="w-full px-2 py-1 border border-gray-300 rounded-md text-gray-400">
                      <option>Option-1</option>
                      <option>Option-2</option>
                      <option>Option-3</option>
                    </select>
                    <img
                      src={notification}
                      alt="notification icon"
                      className="w-6 h-6"
                    />
                    <img src={profile} alt="profile icon" className="w-6 h-6" />
                  </div>
                </Disclosure.Panel>
              </>
            )}
          </Disclosure>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
