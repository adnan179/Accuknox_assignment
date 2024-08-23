import SectionHeading from "./SectionHeading";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

// Register the required components for the chart
ChartJS.register(ArcElement, Tooltip, Legend);

const CsmpDashboard = ({ toggleSidebar, visibleWidgets }) => {
  let connected = 5;
  let notConnected = 3;
  const total = connected + notConnected;

  const data1 = {
    labels: ["Connected", "Not Connected"],
    datasets: [
      {
        data: [connected, notConnected],
        backgroundColor: ["#1E3A8A", "#BFDBFE"],
        borderWidth: 1,
      },
    ],
  };

  const options1 = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#000",
          boxWidth: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  const data2 = {
    labels: ["Failed", "Passed", "Warning", "Not Available"],
    datasets: [
      {
        data: [1689, 7253, 681, 36],
        backgroundColor: ["#FF0000", "#00FF00", "#FFD700", "#808080"],
        borderWidth: 1,
      },
    ],
  };

  const options2 = {
    plugins: {
      legend: {
        display: true,
        position: "right",
        labels: {
          color: "#000",
          boxWidth: 10,
        },
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col px-4 pt-0 pb-3 mt-2 rounded-lg shadow-md bg-gray-400 bg-opacity-10">
      <SectionHeading heading={"CSMP Executive Dashboard"} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 pl-3 pt-3">
        {visibleWidgets.cloudAccounts && (
          <div className="csmp-container">
            <h2 className="graph-heading">Cloud Accounts</h2>
            <div className="relative flex-center mt-5">
              <Doughnut data={data1} options={options1} />
              <div className="absolute left-[4.9rem] flex-center flex-col">
                <span className="text-xl font-semibold">{total}</span>
                <span className="text-lg font-medium text-gray-700">Total</span>
              </div>
            </div>
          </div>
        )}
        {visibleWidgets.cloudRiskAssessment && (
          <div className="csmp-container">
            <h2 className="graph-heading">Cloud Account Risk Assessment</h2>
            <div className="relative flex-center mt-5">
              <Doughnut data={data2} options={options2} />
              <div className="absolute left-[4.9rem] flex-center flex-col">
                <span className="text-xl font-semibold">{total}</span>
                <span className="text-lg font-medium text-gray-700">Total</span>
              </div>
            </div>
          </div>
        )}
        <div
          className="csmp-container flex-center cursor-pointer"
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

export default CsmpDashboard;
