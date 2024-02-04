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

// "use client";
// import React from "react";
// import DataTable from "react-data-table-component";
// import { memo } from "react";

// const webHookColumns = [
//   {
//     id: "S.NO",
//     name: "S.NO",
//     selector: (row: any) => row.s_No,
//     grow: 0,
//     // cell: (row) => <SelectTheme />,
//   },
//   {
//     id: "REQUESTID",
//     name: "REQUESTID",
//     selector: (row: any) => row.request_Id,
//     // cell: (row) =>
//     //   isLoading ? <Skeleton width={90} height={20} /> : row.request_Id,
//   },
//   {
//     id: "SUBID",
//     name: "SUBID",
//     selector: (row: any) => row.sub_Id,
//   },
//   {
//     id: "BROKER",
//     name: "BROKER",
//     selector: (row: any) => row.broker_Name,
//   },
//   // {
//   //   id: "Type",
//   //   name: "type",
//   //   selector: (row: any) => row.broker_Type,
//   // },
//   {
//     id: "SYNTAX",
//     name: "SYNTAX",
//     selector: (row: any) => row.content_Data,
//   },
//   {
//     id: "ERROR",
//     name: "ERROR",
//     selector: (row: any) => row.error_Logs,
//   },
//   {
//     id: "SUCCESS",
//     name: "SUCCESS",
//     selector: (row: any) => row.success_Logs,
//   },
//   {
//     id: "INFO",
//     name: "INFO",
//     selector: (row: any) => row.info_Logs,
//   },
//   {
//     id: "DATEINTIME",
//     name: "DATEINTIME",
//     selector: (row: any) => row.data_Intime,
//   },
//   {
//     id: "DATEOUTTIME",
//     name: "DATEOUTTIME",
//     selector: (row: any) => row.data_Outtime,
//   },
// ];

// const customStyles = {
//   rows: {
//     style: {
//       // minHeight: "72px", // override the row height
//     },
//   },
//   // headCells: {
//   //   style: {
//   //     paddingLeft: "4px", // override the cell padding for head cells
//   //     paddingRight: "4px",
//   //   },
//   // },
//   cells: {
//     style: {
//       width: 0,
//     },
//   },
// };

// const DataTable1 = memo(({ data }: any) => {
//   return (
//     <div>
//       <div className="dataTables_wrapper" style={{ marginBlock: "6rem" }}>
//         <DataTable
//           data={data}
//           columns={webHookColumns}
//           customStyles={customStyles}
//           // pagination
//           striped={true}
//           // progressPending={isLoading}
//           noDataComponent={false}
//           // progressComponent={<SelectTheme />}
//         />
//       </div>
//     </div>
//   );
// });

// export default DataTable1;

// "use client";
// import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 70 },
//   { field: "firstName", headerName: "First name", width: 130 },
//   { field: "lastName", headerName: "Last name", width: 130 },
//   {
//     field: "age",
//     headerName: "Age",
//     type: "number",
//     width: 90,
//   },
//   {
//     field: "fullName",
//     headerName: "Full name",
//     description: "This column has a value getter and is not sortable.",
//     sortable: false,
//     width: 160,
//     valueGetter: (params: GridValueGetterParams) =>
//       `${params.row.firstName || ""} ${params.row.lastName || ""}`,
//   },
// ];

// const webHookColumns: GridColDef[] = [
//   {
//     field: "s_No",
//     headerName: "S.NO",
//     flex: 1,
//   },
//   {
//     field: "request_Id",
//     headerName: "REQUESTID",
//     flex: 1,
//   },
//   {
//     field: "sub_Id",
//     headerName: "SUBID",
//     flex: 1,
//   },
//   {
//     field: "broker_Name",
//     headerName: "BROKER",
//     flex: 1,
//   },
//   // {
//   //   id: "Type",
//   //   name: "type",
//   //   selector: (row: any) => row.broker_Type,
//   // },
//   {
//     field: "content_Data",
//     headerName: "SYNTAX",
//     flex: 1,
//   },
//   {
//     field: "error_Logs",
//     headerName: "ERROR",
//     flex: 1,
//   },
//   {
//     field: "success_Logs",
//     headerName: "SUCCESS",
//     flex: 1,
//   },
//   {
//     field: "info_Logs",
//     headerName: "INFO",
//     flex: 1,
//   },
//   {
//     field: "data_Intime",
//     headerName: "DATEINTIME",
//     flex: 1,
//   },
//   {
//     field: "data_Outtime",
//     headerName: "DATEOUTTIME",
//     flex: 1,
//   },
// ];

// const rows = [
//   { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
//   { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
//   { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
//   { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
//   { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
//   { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
//   { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
//   { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
//   { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
// ];

// export default function DataTable1({ data }: any) {
//   return (
//     <div style={{ height: 400, width: "100%" }}>
//       <DataGrid
//         rows={data}
//         columns={webHookColumns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//         getRowId={(row) => row.s_No}
//         sx={{
//           boxShadow: 2,
//           border: 2,
//           borderColor: "primary.light",
//           "& .MuiDataGrid-cell:hover": {
//             color: "primary.main",
//           },
//         }}
//       />
//     </div>
//   );
// }
