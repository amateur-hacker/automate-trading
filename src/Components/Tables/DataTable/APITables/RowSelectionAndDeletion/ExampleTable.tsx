// import { Table, Column, HeaderCell, Cell } from "rsuite-table";
// // import "rsuite-table/lib/less/index.less"; // or 'rsuite-table/dist/css/rsuite-table.css'
// import "rsuite-table/dist/css/rsuite-table.css";
// import React from "react";
// import Cookies from "js-cookie";

// // const data = mockUsers(10000);
// function capitalizeAfterUnderscore(str) {
//   return str.replace(/_./g, (match) => `_${match.charAt(1).toUpperCase()}`);
// }

// const columnName = "request_id";
// const capitalizedColumnName = capitalizeAfterUnderscore(columnName);
// console.log(capitalizedColumnName);

// const webHookColumns = [
//   {
//     name: "s_no",
//   },
//   {
//     name: "request_id",
//   },
//   {
//     name: "sub_id",
//   },
//   {
//     name: "broker",
//   },
//   {
//     name: "type",
//   },
//   {
//     name: "content",
//   },
//   {
//     name: "error_logs",
//   },
//   {
//     name: "success_logs",
//   },
//   {
//     name: "info_logs",
//   },
//   {
//     name: "data_intime",
//   },
//   {
//     name: "data_outtime",
//   },
// ];

// const handleGetWebHookLogs = async () => {
//   try {
//     const authToken = Cookies?.get("authtoken");
//     const response = await fetch("https://nextlevelpine.com/get-webhook-logs", {
//       method: "GET",
//       headers: {
//         "Content-Type": "application/json",
//         Authorization: authToken ?? "",
//       },
//       cache: "force-cache",
//     });
//     const apiData = await response.json();
//     const transformedData = apiData["$values"].map((item: any) => ({
//       s_No: item.sNo !== null ? item.sNo : "null",
//       request_Id: item.request_Id !== null ? item.request_Id : "null",
//       sub_Id: item.sub_Id !== null ? item.sub_Id : "null",
//       broker_Name: item.broker_Name !== null ? item.broker_Name : "null",
//       broker_Type: item.broker_Type !== null ? item.broker_Type : "null",
//       content_Data: item.content_Data !== null ? item.content_Data : "null",
//       error_Logs: item.error_Logs !== null ? item.error_Logs : "null",
//       success_Logs: item.success_Logs !== null ? item.success_Logs : "null",
//       info_Logs: item.info_Logs !== null ? item.info_Logs : "null",
//       data_Intime: item.data_Intime !== null ? item.data_Intime : "null",
//       data_Outtime: item.data_Outtime !== null ? item.data_Outtime : "null",
//     }));
//     // setData(transformedData);
//     return transformedData;
//   } catch (error) {
//     console.log(
//       `Error coming from handleGetWebHookLogs function: ${error.message}`
//     );
//   }
// };

// console.log(capitalizeAfterUnderscore("request_id"));

// const LargeListsTable = async () => {
//   const response = await handleGetWebHookLogs();
//   console.log(response);
//   return (
//     <div>

//         {/* {webHookColumns.map((column_name) => (
//           <>
//           <p>{capitalizeAfterUnderscore(column_name.name)}</p>
//           </>
//         ))} */}
//       <Table

//         virtualized
//         height={600}
//         data={response}
//         ref={tableRef}
//         onRowClick={(data) => {
//           console.log(data);
//         }}
//       >
//         {webHookColumns.map((column_name) => (
//           <>
//             <Column width={120} align="center" fixed fullText>
//               <HeaderCell style={{color: "black"}}>{column_name.name}</HeaderCell>
//               <Cell style={{color: "black"}} dataKey={capitalizeAfterUnderscore(column_name.name)} />
//             </Column>
//           </>
//         ))}
//       </Table>
//     </div>
//   );
// };
// export default LargeListsTable;
