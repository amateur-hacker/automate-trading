// "use client";
// import React from "react";
// import Cookies from "js-cookie";
// const authToken = Cookies?.get("authtoken");
// const DataTable1 = ({ children }: any) => {
//   return (
//     <div>
//       {authToken ?? ""}
//       {children}
//     </div>
//   );
// };

// export default DataTable1;

"use client";
import React from "react";
import DataTable from "react-data-table-component";

const webHookColumns = [
  {
    id: "S.NO",
    name: "S.NO",
    selector: (row: any) => row.s_No,
    grow: 0,
    // cell: (row) => <SelectTheme />,
  },
  {
    id: "REQUESTID",
    name: "REQUESTID",
    selector: (row: any) => row.request_Id,
    // cell: (row) =>
    //   isLoading ? <Skeleton width={90} height={20} /> : row.request_Id,
  },
  {
    id: "SUBID",
    name: "SUBID",
    selector: (row: any) => row.sub_Id,
  },
  {
    id: "BROKER",
    name: "BROKER",
    selector: (row: any) => row.broker_Name,
  },
  // {
  //   id: "Type",
  //   name: "type",
  //   selector: (row: any) => row.broker_Type,
  // },
  {
    id: "SYNTAX",
    name: "SYNTAX",
    selector: (row: any) => row.content_Data,
  },
  {
    id: "ERROR",
    name: "ERROR",
    selector: (row: any) => row.error_Logs,
  },
  {
    id: "SUCCESS",
    name: "SUCCESS",
    selector: (row: any) => row.success_Logs,
  },
  {
    id: "INFO",
    name: "INFO",
    selector: (row: any) => row.info_Logs,
  },
  {
    id: "DATEINTIME",
    name: "DATEINTIME",
    selector: (row: any) => row.data_Intime,
  },
  {
    id: "DATEOUTTIME",
    name: "DATEOUTTIME",
    selector: (row: any) => row.data_Outtime,
  },
];

const DataTable1 = ({data}: any) => {
  return (
    <div>
      <DataTable data={data} columns={webHookColumns} />
    </div>
  );
};

export default DataTable1;
