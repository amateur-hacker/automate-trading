"use client";
import React from "react";
import { AiOutlineEdit, AiOutlineDelete } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
// import SweetAlert from "sweetalert2";
import SweetAlert from "sweetalert2/dist/sweetalert2.js";
import { useState, memo } from "react";

const WebHookTable = ({ data }: any) => {
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
      <div className="tw-max-w-full tw-overflow-x-auto tw-mx-[20px] tw-my-[30px]">
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
            {updatedData.map((item: any, index: any) => (
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
};

export default WebHookTable;
