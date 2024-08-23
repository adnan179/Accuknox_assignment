import { useState, useEffect } from "react";

const Sidebar = ({ toggleSidebar, onWidgetToggle, visibleWidgets }) => {
  const [selectedCategory, setSelectedCategory] = useState("CSPM");

  // Initialize checkedWidgets from visibleWidgets
  const [checkedWidgets, setCheckedWidgets] = useState({
    cloudAccounts: visibleWidgets.cloudAccounts,
    cloudRiskAssessment: visibleWidgets.cloudRiskAssessment,
    workload: visibleWidgets.workload,
    namespaces: visibleWidgets.namespaces,
    imageRisk: visibleWidgets.imageRisk,
    imageSecurity: visibleWidgets.imageSecurity,
  });

  // Sync checkedWidgets with visibleWidgets when sidebar opens
  useEffect(() => {
    if (visibleWidgets) {
      setCheckedWidgets({
        cloudAccounts: visibleWidgets.cloudAccounts,
        cloudRiskAssessment: visibleWidgets.cloudRiskAssessment,
        workload: visibleWidgets.workload,
        namespaces: visibleWidgets.namespaces,
        imageRisk: visibleWidgets.imageRisk,
        imageSecurity: visibleWidgets.imageSecurity,
      });
    }
  }, [visibleWidgets]);

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleWidgetToggle = (e) => {
    const { name, checked } = e.target;
    setCheckedWidgets((prev) => ({
      ...prev,
      [name]: checked,
    }));
    onWidgetToggle(name, checked);
  };

  return (
    <div className="fixed inset-0 z-40 flex justify-end w-full min-h-screen">
      {/* Transparent black overlay */}
      <div
        className="xl:w-[60%] md:w-[50%] w-[30%] h-full bg-black/50 cursor-pointer"
        onClick={toggleSidebar}
      ></div>
      {/* Sidebar */}
      <div className="flex flex-col xl:w-[40%] md:w-[50%] w-[70%] h-full bg-white shadow-lg transform transition-transform duration-300">
        <div className="flex w-full px-4 justify-between items-center h-10 bg-blue-800 text-xl">
          <h2 className="text-white font-medium">Add Widget</h2>
          <button
            className="text-white text-lg font-bold bg-transparent border-none"
            onClick={toggleSidebar}
          >
            &times;
          </button>
        </div>
        <ul className="mt-4 rows gap-3 px-6">
          {["CSPM", "CWPP", "Image", "Ticket"].map((category) => (
            <li
              key={category}
              onClick={() => handleCategorySelect(category)}
              className={`cursor-pointer py-2 ${
                selectedCategory === category
                  ? "text-blue-800 border-b-2 border-blue-800"
                  : "text-gray-700"
              }`}
            >
              {category}
            </li>
          ))}
        </ul>
        {/* csmp category options */}
        {selectedCategory === "CSPM" && (
          <div className="px-6 py-4">
            <label className="flex items-center space-x-2 mt-3 w-full px-4 py-2 border-[1px] rounded-md">
              <input
                type="checkbox"
                name="cloudAccounts"
                checked={checkedWidgets.cloudAccounts}
                onChange={handleWidgetToggle}
              />
              <span>Cloud Accounts</span>
            </label>
            <label className="flex items-center space-x-2 mt-3 w-full px-4 py-2 border-[1px] rounded-md">
              <input
                type="checkbox"
                name="cloudRiskAssessment"
                checked={checkedWidgets.cloudRiskAssessment}
                onChange={handleWidgetToggle}
              />
              <span>Cloud Risk Assessment</span>
            </label>
          </div>
        )}
        {/* cwpp category options */}
        {selectedCategory === "CWPP" && (
          <div className="px-6 py-4">
            <label className="flex items-center space-x-2 mt-3 w-full px-4 py-2 border-[1px] rounded-md">
              <input
                type="checkbox"
                name="namespaces"
                checked={checkedWidgets.namespaces}
                onChange={handleWidgetToggle}
              />
              <span>Top 5 Namespaces specific alerts</span>
            </label>
            <label className="flex items-center space-x-2 mt-3 w-full px-4 py-2 border-[1px] rounded-md">
              <input
                type="checkbox"
                name="workload"
                checked={checkedWidgets.workload}
                onChange={handleWidgetToggle}
              />
              <span>Workload alerts</span>
            </label>
          </div>
        )}
        {/* image category options */}
        {selectedCategory === "Image" && (
          <div className="px-6 py-4">
            <label className="flex items-center space-x-2 mt-3 w-full px-4 py-2 border-[1px] rounded-md">
              <input
                type="checkbox"
                name="imageRisk"
                checked={checkedWidgets.imageRisk}
                onChange={handleWidgetToggle}
              />
              <span>Image Risk Assessment</span>
            </label>
            <label className="flex items-center space-x-2 mt-3 w-full px-4 py-2 border-[1px] rounded-md">
              <input
                type="checkbox"
                name="imageSecurity"
                checked={checkedWidgets.imageSecurity}
                onChange={handleWidgetToggle}
              />
              <span>Image Security Issues</span>
            </label>
          </div>
        )}
        {/* ticket category options */}
        {selectedCategory === "Ticket" && (
          <div className="px-6 py-4">
            <p>Nothing here!</p>
          </div>
        )}
        <div className="absolute bottom-4 right-4 flex gap-2">
          <button
            className="bg-transparent border-blue-800 border hover:scale-110 transition ease-in-out duration-300 text-gray-800 font-medium py-2 px-4 rounded"
            onClick={toggleSidebar}
          >
            Cancel
          </button>
          <button
            className="bg-blue-800 hover:scale-110 transition ease-in-out duration-300 text-white font-medium py-2 px-4 rounded"
            onClick={toggleSidebar}
          >
            Confirm
          </button>
        </div>
      </div>
      {/* Sidebar */}
    </div>
  );
};

export default Sidebar;
