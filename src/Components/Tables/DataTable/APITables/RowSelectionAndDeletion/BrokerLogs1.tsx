import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { RowsSelectionAndDeletionHeading } from "@/Constant";
import {
  RowsSelectionAndDeletionSubHeading,
  DeleteDataTableColumns,
} from "@/Data/Table/DataTable";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody, Col, Row, NavItem, NavLink } from "reactstrap";
import ModalButton from "./Common/ModalButton";
import Cookies from "js-cookie";
import CommonModal from "./CommonModal";
import React, { Fragment } from "react";
import ReactJson from "react-json-view";
import { Nav } from "reactstrap";
import CommonTabNav from "./CommonTabNav";
import { memo } from "react";

const BrokerLogs = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const [rowClicked, setRowClicked] = useState(false);
  const ScrollModalToggle = () => setRowClicked(!rowClicked);

  const [selectedRowData, setSelectedRowData] = useState({});
  const [selectedCellData, setSelectedCellData] = useState();
  const [selectedColumnName, setSelectedColumnName] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);

  const [basicLineTab, setBasicLineTab] = useState("1");
  const [CopysuccessMessage, setCopysuccessMessage] = useState("");

  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleRowClick = (row: any) => {
    // const parsedContentData = JSON.parse(row.content_Data);
    // const rowWithParsedContentData = {
    //   ...row,
    //   content_Data: parsedContentData,
    // };
    setSelectedRowData(row);
  };

  const handleCopyClick = () => {
    navigator.clipboard.writeText(selectedCellData || "");
    setCopysuccessMessage("Copied successfully!");

    setTimeout(() => {
      setCopysuccessMessage("");
    }, 1000);
  };

  const brokerColumns = [
    {
      id: "S.No",
      name: "S.NO",
      selector: (row: any) => row.s_No,
      grow: 0,
    },
    {
      id: "ApiId",
      name: "APIID",
      selector: (row: any) => row.api_Id,
    },
    {
      id: "RequestId",
      name: "REQUESTID",
      selector: (row: any) => row.request_Id,
    },
    {
      id: "SubId",
      name: "SUBID",
      selector: (row: any) => row.sub_Id,
    },
    {
      id: "Broker",
      name: "BROKER",
      selector: (row: any) => row.broker_Name,
    },
    // {
    //   id: "type",
    //   name: "type",
    //   selector: (row: any) => row.broker_Type,
    // },
    // {
    //   id: "content_data",
    //   name: "content_data",
    //   selector: (row: any) => row.content_Data,
    // },
    {
      id: "BrokerData",
      name: "BROKERDATA",
      selector: (row: any) => row.broker_Data,
    },
    {
      id: "RequestName",
      name: "REQUESTNAME",
      selector: (row: any) => row.request_Name,
    },
    {
      id: "ErrorLogs",
      name: "ERROR",
      selector: (row: any) => row.error_Logs,
    },
    {
      id: "Success",
      name: "Success",
      selector: (row: any) => row.success_Logs,
    },
    {
      id: "InfoLogs",
      name: "INFO",
      selector: (row: any) => row.info_Logs,
    },
    {
      id: "DataIntime",
      name: "DATAINTIME",
      selector: (row: any) => row.data_Intime,
    },
    {
      id: "DataOuttime",
      name: "DATAOUTTIME",
      selector: (row: any) => row.data_Outtime,
    },
  ];

  const customStyles = {
    cells: {
      style: {
        width: 0,
      },
    },
  };

  useEffect(() => {
    // Add event listener to handle cell clicks
    // const handleCellClick = (event: any) => {
    //   const cellContent = event.target.textContent;
    //   setSelectedCellData(cellContent);
    //   setModalOpen(!isModalOpen);
    // };
    const handleCellClick = (event: any) => {
      const cellContent = event.target.textContent;

      const isCheckboxCell = event.target.tagName.toLowerCase() === "input";
      // const isParentTableCell =
      event.target.parentElement.classList?.contains("rdt_TableCell");
      const isChildInput =
        event.target.firstElementChild?.tagName.toLowerCase() === "input";

      if (!isCheckboxCell && !isChildInput) {
        setSelectedCellData(cellContent);
        setModalOpen(!isModalOpen);
      }
    };

    // Attach event listener to cells with class 'rdt_TableCell'
    const cells = document.querySelectorAll(".rdt_TableCell");
    cells.forEach((cell) => {
      cell.addEventListener("click", handleCellClick);
    });

    // Cleanup event listeners when component unmounts
    return () => {
      cells.forEach((cell) => {
        cell.removeEventListener("click", handleCellClick);
      });
    };
  }, [data]); // Ensure the effect runs when data changes

  const handleBrokerLogs = async () => {
    try {
      const authToken = Cookies?.get("authtoken");
      const response = await fetch(
        "https://nextlevelpine.com/get-broker-logs",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken ?? "",
          },
        }
      );
      const apiData = await response.json();
      const transformedData = apiData["$values"].map((item: any) => ({
        s_No: item.sNo !== null && item.sNo !== "" ? item.sNo : "null",
        api_Id:
          item.api_Id !== null && item.apiId !== "" ? item.apiId : "null",
        request_Id:
          item.request_Id !== null && item.request_Id !== ""
            ? item.request_Id
            : "null",
        sub_Id:
          item.sub_Id !== null && item.sub_Id !== "" ? item.sub_Id : "null",
        broker_Name:
          item.broker_Name !== null && item.broker_Name !== ""
            ? item.broker_Name
            : "null",
        // broker_Type:
        //   item.broker_Type !== null && item.broker_Type !== ""
        //     ? item.broker_Type
        //     : "null",
        content_Data:
          item.content_Data !== null && item.content_Data !== ""
            ? item.content_Data
            : "null",
        broker_Data:
          item.broker_Data !== null && item.broker_Data !== ""
            ? item.broker_Data
            : "null",
        request_Name:
          item.request_Name !== null && item.request_Name !== ""
            ? item.request_Name
            : "null",
        error_Logs:
          item.error_Logs !== null && item.error_Logs !== ""
            ? item.error_Logs
            : "null",
        success_Logs:
          item.success_Logs !== null && item.success_Logs !== ""
            ? item.success_Logs
            : "null",
        info_Logs:
          item.info_Logs !== null && item.info_Logs !== ""
            ? item.info_Logs
            : "null",
        data_Intime:
          item.data_Intime !== null && item.data_Intime !== ""
            ? item.data_Intime
            : "null",
        data_Outtime:
          item.data_Outtime !== null && item.data_Outtime !== ""
            ? item.data_Outtime
            : "null",
      }));
      setData(transformedData);
    } catch (error) {
      console.log(
        `Error coming from handleGetWebHookLogs function: ${error.message}`
      );
    }
  };

  const handleDelete = () => {
    if (
      window.confirm(
        `Are you sure you want to delete:\r ${selectedRows
          .map((row: any) => row.s_No)
          .join(", ")}?`
      )
    ) {
      setToggleCleared(!toggleCleared);
      setData((prevData) =>
        prevData.filter((item) =>
          selectedRows.every(
            (selectedRow: any) => selectedRow.s_No !== item.s_No
          )
        )
      );
      setSelectedRows([]);
    }
  };

  useEffect(() => {
    handleBrokerLogs();
  }, []);

  return (
    <>
      <Fragment>
        <CommonModal
          isOpen={isModalOpen}
          title="Selected Cell Data"
          toggler={() => {
            setModalOpen(!isModalOpen);
          }}
        >
          <div className="d-flex justify-content-center align-items-center flex-column">
            <pre
              style={{ whiteSpace: "pre-wrap", overflowWrap: "anywhere" }}
              className="p-3 w-100 overflow-wrap text-center"
            >
              {selectedCellData}
            </pre>
            <Button
              className="signup-btn"
              color="primary"
              onClick={handleCopyClick}
            >
              Copy
            </Button>
            <span className={CopysuccessMessage && "mt-2"}>
              {CopysuccessMessage}
            </span>
          </div>
        </CommonModal>
      </Fragment>

      <div className="table-responsive">
        {selectedRows.length !== 0 && (
          <>
            <h4 className="text-muted  m-0">Delete Selected Data</h4>
            <Button color="secondary" onClick={handleDelete} className="mb-3">
              Delete Row
            </Button>
          </>
        )}

        <div className="dataTables_wrapper">
          <DataTable
            data={data}
            columns={brokerColumns}
            striped={true}
            pagination
            selectableRows
            onSelectedRowsChange={handleRowSelected}
            clearSelectedRows={toggleCleared}
            // onRowClicked={(row): any => {
            //   handleGetColumnName(row);
            // }}
            onRowClicked={(row) => {
              handleRowClick(row);
              ScrollModalToggle();
              // handleGetColumnName(row);
            }}
            customStyles={customStyles}
          />
        </div>
      </div>
    </>
  );
};

export default BrokerLogs;