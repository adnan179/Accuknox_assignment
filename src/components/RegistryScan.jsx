import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import SectionHeading from "./SectionHeading";

// Register the required components for the chart
ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend
);

const RegistryScan = ({ toggleSidebar, visibleWidgets }) => {
  const data = {
    labels: [""],
    datasets: [
      {
        label: "Critical",
        data: [9],
        backgroundColor: "#FF0000", // Red for critical
      },
      {
        label: "High",
        data: [150],
        backgroundColor: "#FF4500", // Orange for high
      },
      {
        label: "Medium",
        data: [750],
        backgroundColor: "#FFD700", // Yellow for medium
      },
      {
        label: "Low",
        data: [561],
        backgroundColor: "#C0C0C0", // Gray for low
        borderRadius: {
          topRight: 10,
          bottomRight: 10,
        },
      },
    ],
  };

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        stacked: true,
      },
      y: {
        stacked: true,
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom",
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };
  const data2 = {
    labels: ["Total Images"], // Single label for the horizontal bar
    datasets: [
      {
        label: "Critical",
        data: [3],
        backgroundColor: "#FF5B75", // Pink for critical
      },
      {
        label: "High",
        data: [7],
        backgroundColor: "#FFD56E", // Yellow for high
      },
      {
        label: "Moderate",
        data: [8],
        backgroundColor: "#5AB1F5", // Blue for moderate
      },
      {
        label: "Low",
        data: [11],
        backgroundColor: "#5CCEC5", // Teal for low
      },
      {
        label: "None",
        data: [2], // No actual value, but included for rounded edges
        backgroundColor: "#C0C0C0", // Grey for no risk
        borderRadius: {
          topRight: 10,
          bottomRight: 10,
        }, // Rounded right edges
      },
    ],
  };

  const options2 = {
    indexAxis: "y", // Horizontal bar chart
    scales: {
      x: {
        stacked: true, // Stack the bars
        display: false, // Hide the x-axis labels
      },
      y: {
        stacked: true, // Stack the bars
        display: false, // Hide the y-axis labels
      },
    },
    plugins: {
      legend: {
        display: true,
        position: "bottom", // Position the legend at the bottom
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.dataset.label}: ${context.raw}`, // Custom tooltip labels
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="flex flex-col px-4 pt-0 pb-3 mt-2 rounded-lg shadow-md bg-gray-400 bg-opacity-10">
      <SectionHeading heading={"Registry Scan:"} />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-2 pl-3 pt-3">
        {visibleWidgets.imageRisk && (
          <div className="csmp-container">
            <h2 className="graph-heading">Image Risk Assessment</h2>
            <h2 className="text-black font-light  mt-5">
              <span className="font-medium">1470</span> Total vulnerabilities
            </h2>
            <div className="">
              <Bar data={data} options={options} />
            </div>
          </div>
        )}
        {visibleWidgets.imageSecurity && (
          <div className="csmp-container">
            <h2 className="graph-heading">Image Security Issues</h2>
            <h2 className="text-black font-light  mt-5">
              <span className="font-medium">29</span> Total Images
            </h2>
            <div className="">
              <Bar data={data2} options={options2} />
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

export default RegistryScan;
