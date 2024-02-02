"use client";
import React from "react";
import Cookies from "js-cookie";
const authToken = Cookies?.get("authtoken");
const DataTable1 = ({ children }: any) => {
  return (
    <div>
      {authToken ?? ""}
      {children}
    </div>
  );
};

export default DataTable1;
