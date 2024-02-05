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
"use client";
import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
// import SweetAlert from "sweetalert2";
import SweetAlert from "sweetalert2/dist/sweetalert2.js";
import { useState, memo } from "react";

const DataTable = memo(({ data }: any) => {
  const [selectAll, setSelectAll] = useState(false);
  const [isRowSelected, setIsRowSelected] = useState(false);
  const [selectedRows, setSelectedRows] = useState([] as number[]);
  const [updatedData, setUpdatedData] = useState(data);
  const [showMultiDeleteButton, setShowMultiDeleteButton] = useState(false);

  const toggleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      const allRows = data.map((item: any) => item.s_No);
      setSelectedRows(allRows);
    } else {
      setSelectedRows([]);
    }
  };
  // const toggleRowSelection = (sNo: number) => {
  //   setIsRowSelected(!isRowSelected);
  //   if (selectedRows.includes(sNo)) {
  //     const updatedSelectedRows = selectedRows.filter((row) => row !== sNo);
  //     setSelectedRows(updatedSelectedRows);
  //     setSelectAll(false);
  //   } else {
  //     setSelectedRows([...selectedRows, sNo]);
  //   }
  // };
  const toggleRowSelection = (sNo: number) => {
    const updatedSelectedRows = [...selectedRows];

    if (updatedSelectedRows.includes(sNo)) {
      const index = updatedSelectedRows.indexOf(sNo);
      updatedSelectedRows.splice(index, 1);
    } else {
      updatedSelectedRows.push(sNo);
    }

    setSelectedRows(updatedSelectedRows);
    setSelectAll(updatedSelectedRows.length === data.length);
    setIsRowSelected(!isRowSelected);
  };

  const columns = [
    <input
      className="tw-cursor-pointer tw-accent-[#7070f0]"
      type="checkbox"
      name="checkbox"
      checked={selectAll}
      onChange={toggleSelectAll}
    />,
    "S. NO",
    "REQUEST ID",
    "SUB ID",
    "BROKER",
    "SYNTAX",
    "ERROR",
    "SUCCESS",
    "INFO",
    "DATE INTIME",
    "DATE OUTTIME",
    "EDIT, DELETE AND MORE",
  ];

  // const deleteRow = (sNo: any) => {
  //   SweetAlert.fire({
  //     title: `Are you sure you want to do this ${sNo} row?`,
  //     cancelButtonText: "No",
  //     confirmButtonText: "Yes",
  //     reverseButtons: true,
  //     showCancelButton: true,
  //   });
  // };

  const deleteRow = (sNo: any) => {
    const isRowSelected = selectedRows.includes(sNo);

    if (isRowSelected) {
      SweetAlert.fire({
        title: `Are you sure you want to delete row ${sNo}?`,
        cancelButtonText: "No",
        confirmButtonText: "Yes",
        reverseButtons: true,
        showCancelButton: true,
        icon: "warning",
      }).then((result) => {
        if (result.isConfirmed) {
          // Delete logic for a single row
          const updatedData = data.filter((item: any) => item.s_No !== sNo);
          setUpdatedData(updatedData);

          // Update state and re-render
          setSelectedRows(selectedRows.filter((row) => row !== sNo));
          setIsRowSelected(false);
          // alert(selectedRows);
          // Call your API or state update logic here with updatedData
        }
      });
    }
  };

  const handleMultiRowDelete = () => {
    const selectedRowsString = selectedRows.join(", ");

    SweetAlert.fire({
      title: `Are you sure you want to delete rows ${selectedRowsString}?`,
      cancelButtonText: "No",
      confirmButtonText: "Yes",
      reverseButtons: true,
      showCancelButton: true,
      icon: "warning",
    }).then((result) => {
      if (result.isConfirmed) {
        // Delete logic for multiple rows
        const updatedDataAfterDelete = updatedData.filter(
          (item: any) => !selectedRows.includes(item.s_No)
        );
        setUpdatedData(updatedDataAfterDelete);
        // Update state and re-render
        setSelectedRows([]);
        setSelectAll(false);
        // setShowMultiDeleteButton(false);
        // Call your API or state update logic here with updatedDataAfterDelete
      }
    });
  };

  const handleTdClick = (content: string) => {
    SweetAlert.fire({
      title: "Copy to clipboard",
      text: content,
      showCancelButton: false,
      confirmButtonText: "Click to copy",
    }).then((result) => {
      if (result.isConfirmed) {
        navigator.clipboard.writeText(content);
        SweetAlert.fire({
          text: "Copied successfully!",
          icon: "success",
        });
      }
    });
  };

  return (
    <div>
      <div className="tw-max-w-full tw-overflow-x-auto tw-mx-[20px] tw-my-[100px]">
        <table
          className={`tw-text-center tw-w-full tw-border-2 tw-border-white/80 tw-relative tw-select-none`}
          border={1}
        >
          <thead>
            <tr className="tw-bg-black/50">
              {columns.map((column, index) => (
                <th className="tw-p-4" key={index}>
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {updatedData?.map((item: any, index: any) => (
              <tr
                key={index}
                className="even:tw-bg-gray-800 odd:tw-bg-[#1f232b] tw-min-h-[50px] tw-border tw-border-white/50"
              >
                <td className="tw-p-4">
                  <input
                    className="tw-cursor-pointer tw-accent-[#7070f0]"
                    type="checkbox"
                    name="checkbox"
                    checked={selectedRows.includes(item.s_No)}
                    onChange={() => toggleRowSelection(item.s_No)}
                  />
                </td>
                {Object.keys(item).map((key) => (
                  <td
                    key={key}
                    className="tw-text-gray-300/90 tw-p-4 tw-max-w-[10ch] tw-whitespace-nowrap tw-overflow-hidden tw-text-ellipsis webhooklog-td"
                    onClick={() => handleTdClick(item[key])}
                  >
                    {item[key]}
                  </td>
                ))}
                <td className="tw-p-4">
                  <div className="tw-space-x-3 tw-flex tw-justify-center tw-w-full">
                    <button
                      disabled={false}
                      className="tw-bg-transparent tw-outline-none tw-border-none"
                    >
                      <BsInfoCircle className="tw-text-2xl tw-text-green-600 hover:tw-text-white tw-transition-colors tw-duration-500 tw-ease-in" />
                    </button>

                    <button
                      disabled={false}
                      className="tw-bg-transparent tw-outline-none tw-border-none"
                    >
                      <AiOutlineEdit className="tw-text-2xl tw-text-yellow-600 hover:tw-text-white tw-transition-colors tw-duration-500 tw-ease-in" />
                    </button>

                    <button
                      disabled={!isRowSelected}
                      className="tw-bg-transparent tw-outline-none tw-border-none"
                      onClick={() => deleteRow(item.s_No)}
                    >
                      <MdOutlineDelete className={`tw-text-2xl tw-text-red-600 ${isRowSelected && "hover:tw-text-white"} tw-transition-colors tw-duration-500 tw-ease-in`} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {selectedRows.length > 1 && (
          <button
            className={`tw-bg-red-500 tw-outline-none tw-border-none tw-text-white tw-py-3 tw-px-5 tw-rounded-md tw-mt-10 ${
              selectedRows.length < 1 && "tw-bg-gray-500"
            }`}
            onClick={handleMultiRowDelete}
            disabled={selectedRows.length < 1}
          >
            Delete
          </button>
        )}
      </div>
    </div>
  );
});

export default DataTable;
