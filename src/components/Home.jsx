import { useState } from "react";
import Sidebar from "./Sidebar";
import HomeHeadingSecion from "./HomeHeadingSecion";
import CsmpDashboard from "./CsmpDashboard";
import CwppDashboard from "./CwppDashboard";
import RegistryScan from "./RegistryScan";

const Home = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [visibleWidgets, setVisibleWidgets] = useState({
    cloudAccounts: true,
    cloudRiskAssessment: true,
    workload: true,
    namespaces: true,
    imageRisk: true,
    imageSecurity: true,
  });

  const toggleSidebar = () => {
    setIsSidebarOpen((prevState) => !prevState);
  };

  const handleWidgetToggle = (widget, isVisible) => {
    setVisibleWidgets((prevWidgets) => ({
      ...prevWidgets,
      [widget]: isVisible,
    }));
  };

  return (
    <div className="flex flex-col w-full sm:px-10 px-5">
      <HomeHeadingSecion toggleSidebar={toggleSidebar} />
      {/* Render Sidebar only when isSidebarOpen is true */}
      {isSidebarOpen && (
        <Sidebar
          toggleSidebar={toggleSidebar}
          onWidgetToggle={handleWidgetToggle}
          visibleWidgets={visibleWidgets}
        />
      )}
      <CsmpDashboard
        visibleWidgets={visibleWidgets}
        toggleSidebar={toggleSidebar}
      />
      <CwppDashboard
        visibleWidgets={visibleWidgets}
        toggleSidebar={toggleSidebar}
      />
      <RegistryScan
        visibleWidgets={visibleWidgets}
        toggleSidebar={toggleSidebar}
      />
    </div>
  );
};

export default Home;
