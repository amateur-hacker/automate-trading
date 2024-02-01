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
import { usePathname } from "next/navigation";
import { Center } from "@/Data/Maps";
import Image from "next/image";
import "./loader.css"
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

  const pathName = usePathname();
  const pagesUrl = [
    {
      url: "/logs/webhook",
      api: "https://nextlevelpine.com/get-webhook-logs",
    },
    {
      url: "/logs/broker",
      api: "https://nextlevelpine.com/get-webhook-logs",
    },
  ];
  const getApiResponse = async (url: any) => {
    try {
      const authToken = Cookies?.get("authtoken");
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: authToken ?? "",
        },
        cache: "force-cache",
      });

      if (response.status === 200) {
        setTimeout(() => {
          setLoading(false);
        }, 1000);
      } else {
        setTimeout(() => {
          setLoading(true);
        }, 1000);
      }
    } catch (error) {
      console.error("Error fetching API:", error);
      setLoading(true);
    }
  };

  useEffect(() => {
    // setLoading(true);
    // setTimeout(() => {
    //   setLoading(false);
    // }, 2000);

    // Check if the current pathName matches any of the defined URLs
    const matchedPage = pagesUrl.find((page) => page.url === pathName);

    // If a matching page is found, call the respective API
    if (matchedPage) {
      getApiResponse(matchedPage.api);
    } else {
      // console.error(
      //   "No matching page found for the current pathName:",
      //   pathName
      // );
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500);
    }
  }, []);

  // ... (previous code)

  return (
    <>
      {/* The main content */}

      <div className={`page-wrapper ${sidebarWrapper}`} id="page-wrapper">
        <Header />
        <div className="page-body-wrapper">
          <Sidebar />
          <div className="page-body">
            {children}
            <ToastContainer />
          </div>
          {/* <Footer /> */}
        </div>
      </div>
      <ThemeCustomizer />

      {/* Add keyframes for progressAnimation */}
      <style>
        {`
        @keyframes progressAnimation {
          0% {
            width: 0%;
          }
          25% {
            width: 25%;
          }
          50% {
            width: 50%;
          }
          75% {
            width: 75%;
          }
          100% {
            width: 100%;
          }
        }
      `}
      </style>
    </>
  );
};
export default Layout;
