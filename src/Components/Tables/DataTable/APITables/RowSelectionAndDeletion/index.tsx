import CommonMultipleSubHeading from "@/CommonComponents/CommonMultipleSubHeading";
import { RowsSelectionAndDeletionHeading } from "@/Constant";
import {
  RowsSelectionAndDeletionSubHeading,
  DeleteDataTableColumns,
} from "@/Data/Table/DataTable";
import { SetStateAction, useCallback, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { Button, Card, CardBody, Col, Row } from "reactstrap";
// import ExpandedComponent from "./ExpandedComponent";
import ModalButton from "./Common/ModalButton";
// import { ChevronDown, ChevronRight } from "react-feather";
import Cookies from "js-cookie";
// import showApiDataModal from "./tableApiDataShowModel";
// import { DeleteRowData } from "@/Data/Table/DataTable";

import CommonModal from "./CommonModal";
// import { Modal, ScrollingLongContent } from "@/Constant";
// import { ScrollButtonData } from "@/Data/UiKits/Modal";
import React, { Fragment } from "react";
import ReactJson from "react-json-view";
// import SimpleMaterialTabs from "./SimpleMaterialTabs";
import { Nav } from "reactstrap";
import CommonTabNav from "./CommonTabNav";

const RowSelectionAndDeletion = () => {
  const [data, setData] = useState<any[]>([]);
  const [selectedRows, setSelectedRows] = useState<any[]>([]);
  const [toggleCleared, setToggleCleared] = useState(false);

  const [rowClicked, setRowClicked] = useState(false);
  const ScrollModalToggle = () => setRowClicked(!rowClicked);

  const [selectedRowData, setSelectedRowData] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const [basicLineTab, setBasicLineTab] = useState("1");

  // ... (existing code)

  const handleRowSelected = useCallback((state: any) => {
    setSelectedRows(state.selectedRows);
  }, []);

  const handleRowClick = (row: any) => {
    // Parse the content_Data property to convert it to a JavaScript object
    const parsedContentData = JSON.parse(row.content_Data);

    // Create a new object with the entire row and the parsed content_Data
    const rowWithParsedContentData = {
      ...row,
      content_Data: parsedContentData,
    };

    // Set the entire row as the selected data
    setSelectedRowData(rowWithParsedContentData);

    // Open the modal
    setModalOpen(true);
  };

  const columns = [
    {
      id: "s_No",
      name: "s_no",
      selector: (row: any) => row.s_No,
    },
    {
      id: "Request_Id",
      name: "request_id",
      selector: (row: any) => row.request_Id,
    },
    {
      id: "Sub_Id",
      name: "sub_id",
      selector: (row: any) => row.sub_Id,
    },
    {
      id: "Broker",
      name: "broker",
      selector: (row: any) => row.broker_Name,
    },
    {
      id: "Type",
      name: "type",
      selector: (row: any) => row.broker_Type,
    },
    {
      id: "Content",
      name: "content",
      selector: (row: any) => row.content_Data,
    },
    {
      id: "Error_Logs",
      name: "error_logs",
      selector: (row: any) => row.error_Logs,
    },
    {
      id: "Success_Logs",
      name: "success_logs",
      selector: (row: any) => row.success_Logs,
    },
    {
      id: "Info_Logs",
      name: "info_logs",
      selector: (row: any) => row.info_Logs,
    },
    {
      id: "Data_Intime",
      name: "data_intime",
      selector: (row: any) => row.data_Intime,
    },
    {
      id: "Data_Outtime",
      name: "data_outtime",
      selector: (row: any) => row.data_Outtime,
    },
  ];

  // const handleRowSelected = useCallback((state: any) => {
  //   setSelectedRows(state.selectedRows);
  // }, []);

  // const handleDelete = () => {
  //   if (
  //     window.confirm(
  //       `Are you sure you want to delete:\r ${selectedRows.map(
  //         (r: deleteRowData) => r.name
  //       )}?`
  //     )
  //   ) {
  //     setToggleCleared(!toggleCleared);
  //     setData(
  //       data.filter((item) =>
  //         selectedRows.filter((elem: deleteRowData) => elem.id === item.id)
  //           .length > 0
  //           ? false
  //           : true
  //       )
  //     );
  //     setSelectedRows([]);
  //   }
  // };

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

  const handleGetWebHookLogs = async () => {
    try {
      const authToken = Cookies?.get("authtoken");
      console.log(authToken);

      const response = await fetch(
        "https://nextlevelpine.com/get-webhook-logs",
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: authToken ?? "",
          },
        }
      );

      const apiData = await response.json();
      console.log(apiData);

      // Map the API data to the format expected by DataTable
      const transformedData = apiData["$values"].map((item: any) => ({
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

      setData(transformedData);
    } catch (error) {
      console.log(
        `Error coming from handleGetWebHookLogs function: ${error.message}`
      );
    }
  };

  useEffect(() => {
    handleGetWebHookLogs();
  }, []);

  return (
    <Col sm="12">
      <Card>
        {/* <SimpleMaterialTabs /> */}
        <CommonMultipleSubHeading
          heading={RowsSelectionAndDeletionHeading}
          subHeading={RowsSelectionAndDeletionSubHeading}
        />

        {typeof window !== "undefined" && (
          <ReactJson
            src={selectedRowData ? selectedRowData : {}}
            theme="codeschool"
            displayDataTypes={false}
            displayObjectSize={false}
            collapsed={false}
          />
        )}

        <CardBody>
          <Nav className="border-tab" tabs>
            <CommonTabNav state={basicLineTab} setState={setBasicLineTab} />
          </Nav>
          <div className="table-responsive">
            {selectedRows.length !== 0 && (
              <>
                <h4 className="text-muted  m-0">Delete Selected Data</h4>
                <Button
                  color="secondary"
                  onClick={handleDelete}
                  className="mb-3"
                >
                  Delete Row
                </Button>
              </>
            )}

            <ModalButton btnText="Edit And Delete" defaultVal="@Mat" />

            <div className="dataTables_wrapper">
              <DataTable
                data={data}
                columns={columns}
                striped={true}
                pagination
                selectableRows
                onSelectedRowsChange={handleRowSelected}
                clearSelectedRows={toggleCleared}
                // expandableIcon={{
                //   collapsed: <ChevronRight className="chevron" />,
                //   expanded: <ChevronDown className="chevron" />,
                // }}
                // expandableRows
                // expandableRowsComponent={ExpandedComponent}
                // fixedHeader
                // fixedHeaderScrollHeight="300px" // Set this height according to your design
                onRowClicked={(row) => {
                  handleRowClick(row);
                  ScrollModalToggle();
                }}
              />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RowSelectionAndDeletion;
