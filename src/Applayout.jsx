import { useEffect, useState } from "react";
import NavBar from "./ui/NavBar";
import SideBar from "./ui/SideBar";
import Footer from "./ui/Footer";
import { Outlet, useLocation } from "react-router";
import DesktopSidebar from "./ui/DesktopSidebar";

function Applayout() {
  const [isSideBarVisible, setIsSideBarVisible] = useState(true);

  const location = useLocation();
  useEffect(
    function () {
      setIsSideBarVisible(false);
    },
    [location.pathname]
  );

  const toggleSideBar = () => {
    setIsSideBarVisible((prev) => !prev);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavBar toggleSideBar={toggleSideBar} />
      {isSideBarVisible && <SideBar onToggle={toggleSideBar} />}
      <div className="flex-1 lg:grid lg:grid-cols-3">
        <DesktopSidebar />
        <main className="lg:col-span-2 p-2 md:flex md:items-center md:justify-center  overflow-scroll">
          <Outlet />
        </main>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Applayout;
