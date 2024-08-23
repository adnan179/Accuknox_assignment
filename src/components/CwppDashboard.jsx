import SectionHeading from "./SectionHeading";
import graph from "../assets/graph.png";

const CwppDashboard = ({ toggleSidebar, visibleWidgets }) => {
  return (
    <div className="flex flex-col px-4 pt-0 pb-3 mt-2 rounded-lg shadow-md bg-gray-400 bg-opacity-10">
      <SectionHeading heading={"CWPP Dashboard:"} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 pl-3 pt-3">
        {visibleWidgets.namespaces && (
          <div className="cwpp-container">
            <h2 className="graph-heading">Top 5 Namespaces specific alerts</h2>
            <div className="flex-center flex-col w-full h-full">
              <img src={graph} alt="graph-icon" className="w-14 h-14" />
              <p className="text-gray-400">No graph data Available!</p>
            </div>
          </div>
        )}
        {visibleWidgets.workload && (
          <div className="cwpp-container">
            <h2 className="graph-heading">Workload alerts</h2>
            <div className="flex-center flex-col w-full h-full">
              <img src={graph} alt="graph-icon" className="w-14 h-14" />
              <p className="text-gray-400">No graph data Available!</p>
            </div>
          </div>
        )}

        <div
          className="cwpp-container flex-center cursor-pointer"
          onClick={toggleSidebar}
        >
          <button className="rounded-md text-gray-400/40 font-medium text-lg bg-transparent border-[2px] border-gray-400/40 px-4 py-2">
            Add Widget
          </button>
        </div>
      </div>
    </div>
  );
};

export default CwppDashboard;
