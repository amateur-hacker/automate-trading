"use client";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import DataTable from "react-data-table-component";

const SelectTheme = () => {
  return (
    <div className="d-flex w-100">
      <Skeleton height={20} containerClassName="flex-fill" />
    </div>
  );
};

// import { useEffect, useState } from "react";
// import Cookies from "js-cookie";

// const ExampleTable = async () => {
//   const [time, setTime] = useState<{ datetime: string } | undefined>();

//   const [data, setData] = useState([]);

//   const getTime = async () => {
//     const response = await fetch(
//       "https://worldtimeapi.org/api/timezone/Asia/Kolkata"
//     );
//     const data = await response.json();
//     setTime(data);
//     // return response.json();
//   };

//   const handleGetWebHookLogs = async () => {
//     try {
//       const authToken = Cookies?.get("authToken");
//       const response = await fetch(
//         "https://nextlevelpine.com/get-webhook-logs",
//         {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json",
//             Authorization: authToken ?? "",
//           },
//           next: {
//             revalidate: 0,
//           },
//         }
//       );
//       const apiData = await response.json();
//       const transformedData = apiData["$values"].map((item: any) => ({
//         s_No: item.sNo !== null ? item.sNo : "null",
//         request_Id: item.request_Id !== null ? item.request_Id : "null",
//         sub_Id: item.sub_Id !== null ? item.sub_Id : "null",
//         broker_Name: item.broker_Name !== null ? item.broker_Name : "null",
//         broker_Type: item.broker_Type !== null ? item.broker_Type : "null",
//         content_Data: item.content_Data !== null ? item.content_Data : "null",
//         error_Logs: item.error_Logs !== null ? item.error_Logs : "null",
//         success_Logs: item.success_Logs !== null ? item.success_Logs : "null",
//         info_Logs: item.info_Logs !== null ? item.info_Logs : "null",
//         data_Intime: item.data_Intime !== null ? item.data_Intime : "null",
//         data_Outtime: item.data_Outtime !== null ? item.data_Outtime : "null",
//       }));

//       setData(transformedData);
//       console.log(data)
//     } catch (error) {
//       console.log(
//         `Error coming from handleGetWebHookLogs function: ${error.message}`
//       );
//     }
//   };

//   useEffect(() => {
//     handleGetWebHookLogs();
//     getTime();
//   }, []);

//   return (
//     <div>
//       <h1>Hello It's the current time</h1>
//       <h2 className="bg-black">{time?.datetime}</h2>
//       <h1>And It's the current webhook table data</h1>
//       {/* <pre
//         style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}
//         className="p-3 w-100 overflow-wrap"
//       >
//         {JSON.stringify(data)}
//       </pre> */}
//       <table className="table" border={1}>
//         <thead>
//           <tr className="bg-black">
//             <th className="text-primary">S. No</th>
//             <th className="text-primary">Request ID</th>
//             <th className="text-primary">Sub ID</th>
//             <th className="text-primary">Broker Name</th>
//             <th className="text-primary">Broker Type</th>
//             <th className="text-primary">Content Data</th>
//             <th className="text-primary">Error Logs</th>
//             <th className="text-primary">Success Logs</th>
//             <th className="text-primary">Info Logs</th>
//             <th className="text-primary">Data Intime</th>
//             <th className="text-primary">Data Outtime</th>
//           </tr>
//         </thead>
//         <tbody>
//           {data.map((item: any, index: any) => (
//             <tr key={index} className="bg-dark">
//               <td className="text-white">{item.s_No}</td>
//               <td className="text-white">{item.request_Id}</td>
//               <td className="text-white">{item.sub_Id}</td>
//               <td className="text-white">{item.broker_Name}</td>
//               <td className="text-white">{item.broker_Type}</td>
//               <td className="text-white">{item.content_Data}</td>
//               <td className="text-white">{item.error_Logs}</td>
//               <td className="text-white">{item.success_Logs}</td>
//               <td className="text-white">{item.info_Logs}</td>
//               <td className="text-white">{item.data_Intime}</td>
//               <td className="text-white">{item.data_Outtime}</td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   );
// };

// export default ExampleTable;

import React, { useEffect, useState } from "react";
import Cookies from "js-cookie";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

const customStyles = {
  rows: {
    style: {
      // minHeight: "72px", // override the row height
    },
  },
  // headCells: {
  //   style: {
  //     paddingLeft: "4px", // override the cell padding for head cells
  //     paddingRight: "4px",
  //   },
  // },
  cells: {
    style: {
      width: 0,
    },
  },
};

const ExampleTable = () => {
  // Access the client
  const queryClient = useQueryClient();

  const handleGetWebHookLogs = async () => {
    const authToken = Cookies.get("authToken");
    const response = await fetch("https://nextlevelpine.com/get-webhook-logs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIyNCIsImVtYWlsIjoic2FjaGluMTIzNEBnbWFpbC5jb20iLCJ1aWQiOiJyUDhsbW1NRDZ2YjZDbWJVbnY2OGZlOTRLc20yIiwicGhvbmUiOiIxMjM0NTY3ODkwIiwiVXNlcm5hbWUiOiJzYWNoaW4xMjM0IiwiaWQiOiIyNCIsIm5iZiI6MTcwNzAwMDkyMSwiZXhwIjoxNzA3MDg3MzIxLCJpYXQiOjE3MDcwMDA5MjF9.fQZKBzN3XCP9_l1J1DpwCjA7JtOMtK_qP54jjmWyi2w",
      },
    });
    const data = await response.json();

    const transformedData = data["$values"].map((item: any) => ({
      s_No: item.sNo !== null ? item.sNo : "null",
      request_Id: item.request_Id !== null ? item.request_Id : "null",
      sub_Id: item.sub_Id !== null ? item.sub_Id : "null",
      broker_Name: item.broker_Name !== null ? item.broker_Name : "null",
      broker_Type: item.broker_Type !== null ? item.broker_Type : "null",
      content_Data: item.content_Data !== null ? item.content_Data : "null",
      error_Logs: item.error_Logs !== null ? item.error_Logs : "null",
      success_Logs: item.success_Logs !== null ? item.success_Logs : "null",
      info_Logs: item.info_Logs !== null ? item.info_Logs : "null",
      data_Intime: item.data_Intime !== null ? item.data_Intime : "null",
      data_Outtime: item.data_Outtime !== null ? item.data_Outtime : "null",
    }));
    return transformedData;
  };

  const { isLoading, error, data, isFetching } = useQuery({
    queryKey: ["logs"],
    queryFn: handleGetWebHookLogs,
    staleTime: 4000,
    refetchInterval: 3000,
  });

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

  // Mutations
  // const mutation = useMutation({
  //   mutationFn: postTodo,
  //   onSuccess: () => {
  //     // Invalidate and refetch
  //     queryClient.invalidateQueries({ queryKey: ["todos"] });
  //   },
  // });

  // if (isLoading)
  //   return (
  //     <div style={{ marginTop: "6rem" }}>
  //       <SkeletonTheme baseColor="#474E68" highlightColor="#C7C8CC">
  //         <Skeleton count={5} height={40} />
  //       </SkeletonTheme>
  //     </div>
  //   );

  console.log(data);

  const modifiedColumns = webHookColumns.map((column) => ({
    ...column,
    cell: (row: any) => (
      <React.Fragment>
        {isFetching ? (
          <div className="d-flex w-100">
            <Skeleton height={20} containerClassName="flex-fill" />
          </div>
        ) : (
          <div
            style={{
              textOverflow: "ellipsis",
              overflow: "hidden",
              whiteSpace: "nowrap",
              maxWidth: "15ch",
            }}
          >
            {column.selector(row)}
          </div>
        )}
      </React.Fragment>
    ),
  }));

  const conditionalRowStyles = [
    {
      when: (row: any) => row.s_No % 2 === 0,
      style: {
        backgroundColor: "#262932",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
    {
      when: (row: any) => row.s_No % 2 !== 0,
      style: {
        backgroundColor: "#1F232B",
        color: "white",
        "&:hover": {
          cursor: "pointer",
        },
      },
    },
  ];

  return (
    <div className="">
      <SkeletonTheme baseColor="#474E68" highlightColor="#C7C8CC">
        <div className="dataTables_wrapper" style={{ marginTop: "6rem" }}>
          <DataTable
            data={data}
            columns={modifiedColumns}
            customStyles={customStyles}
            pagination
            striped={true}
            // progressPending={isLoading}
            noDataComponent={false}
            conditionalRowStyles={conditionalRowStyles}
            // progressComponent={<SelectTheme />}
          />
        </div>
      </SkeletonTheme>
    </div>
  );
};

export default ExampleTable;
