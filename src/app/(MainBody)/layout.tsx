"use client";
// Import necessary dependencies
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Sidebar from "@/Layout/Sidebar";
import ThemeCustomizer from "@/Layout/ThemeCustomizer";
import { RootState } from "@/Redux/ReduxStore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";
// import "@/app/globals.css"

// Define the layout component
const Layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarWrapper = useSelector(
    (store: RootState) => store.headerSlice.sidebarWrapper
  );

  // State to manage the loading status
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to handle window resize
    const handleResize = () => {
      setLoading(true);
      if (window.innerWidth < 992) {
        document
          .getElementById("page-wrapper")
          ?.classList.remove("horizontal-wrapper");
        document
          .getElementById("page-wrapper")
          ?.classList.add("compact-wrapper");
      } else if (sidebarWrapper !== "horizontal-wrapper") {
        document
          .getElementById("page-wrapper")
          ?.classList.remove("horizontal-wrapper");
        document
          .getElementById("page-wrapper")
          ?.classList.add("compact-wrapper");
      } else {
        document
          .getElementById("page-wrapper")
          ?.classList.add("horizontal-wrapper");
        document
          .getElementById("page-wrapper")
          ?.classList.remove("compact-wrapper");
      }
      // Set loading to false after 2 seconds
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [sidebarWrapper]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {/* Show loading overlay if loading is true */}

      {/* The main content */}
      <div className={`page-wrapper ${sidebarWrapper}`} id="page-wrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body" style={{position: "relative"}}>
            {loading && (
              <div
                style={{
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100%",
                  background: "black",
                  color: "white",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  zIndex: 9999, // Adjust the z-index as needed
                }}
              >
                <div
                  style={{
                    fontSize: "1.5rem",
                    animation: "loadingAnimation 1s infinite",
                  }}
                >
                  Loading...
                </div>
              </div>
            )}
            {children}
            <ToastContainer />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
      <ThemeCustomizer />
    </>
  );
};

export default Layout;
