"use client";
import Footer from "@/Layout/Footer";
import Header from "@/Layout/Header";
import Sidebar from "@/Layout/Sidebar";
import ThemeCustomizer from "@/Layout/ThemeCustomizer";
import { RootState } from "@/Redux/ReduxStore";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import Cookies from "js-cookie";

const layout = ({ children }: { children: React.ReactNode }) => {
  const sidebarWrapper = useSelector(
    (store: RootState) => store.headerSlice.sidebarWrapper
  );
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 992) {
        document
          .getElementById("page-wrapper")
          ?.classList.remove("horizontal-wrapper");
        document
          .getElementById("page-wrapper")
          ?.classList.add("compact-wrapper");
      } else if (sidebarWrapper != "horizontal-wrapper") {
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
    });
  }, [sidebarWrapper]);
  return (
    <>
      <div className="page-wrapper  modern-sidebar">
        <div className={`page-wrapper ${sidebarWrapper}`} id="page-wrapper">
          <Header />
          <div className="page-body-wrapper ">
            <Sidebar />
            <div className="page-body">
              {/* {children} */}
              <ToastContainer />
            </div>
            <Footer />
          </div>
        </div>
      </div>
      {/* <ThemeCustomizer /> */}
    </>
  );
};

export default layout;
