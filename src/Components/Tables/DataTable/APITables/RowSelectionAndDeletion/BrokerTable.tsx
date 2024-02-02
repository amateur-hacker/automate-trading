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

const apiCall = async () => {
  try {
    const authToken = Cookies?.get("authtoken");
    const response = await fetch("https://nextlevelpine.com/get-broker-logs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: authToken ?? "",
      },
      next: {
        revalidate: 0,
      },
    });
    const apiData = await response.json();
    const transformedData = apiData["$values"].map((item: any) => ({
      s_No: item.sNo !== null && item.sNo !== "" ? item.sNo : "null",
      request_Id:
        item.request_Id !== null && item.request_Id !== ""
          ? item.request_Id
          : "null",
      api_Id: item.api_Id !== null && item.api_Id !== "" ? item.apiId : "null",
      sub_Id: item.sub_Id !== null && item.sub_Id !== "" ? item.sub_Id : "null",
      broker_Name:
        item.broker_Name !== null && item.broker_Name !== ""
          ? item.broker_Name
          : "null",
      broker_Type:
        item.broker_Type !== null && item.broker_Type !== ""
          ? item.broker_Type
          : "null",
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
    return transformedData;
    // setData(transformedData);
  } catch (error) {
    console.log(
      `Error coming from handleGetWebHookLogs function: ${error.message}`
    );
  }
};
const brokerColumns = [
  {
    id: "s_no",
    name: "s_no",
    selector: (row: any) => row.s_No,
  },
  {
    id: "request_id",
    name: "request_id",
    selector: (row: any) => row.request_Id,
  },
  {
    id: "api_id",
    name: "api_id",
    selector: (row: any) => row.api_Id,
  },
  {
    id: "sub_id",
    name: "sub_id",
    selector: (row: any) => row.sub_Id,
  },
  {
    id: "broker",
    name: "broker",
    selector: (row: any) => row.broker_Name,
  },
  {
    id: "type",
    name: "type",
    selector: (row: any) => row.broker_Type,
  },
  {
    id: "content_data",
    name: "content_data",
    selector: (row: any) => row.content_Data,
  },
  {
    id: "broker_data",
    name: "broker_data",
    selector: (row: any) => row.broker_Data,
  },
  {
    id: "request_name",
    name: "request_name",
    selector: (row: any) => row.request_Name,
  },
  {
    id: "error_logs",
    name: "error_logs",
    selector: (row: any) => row.error_Logs,
  },
  {
    id: "success_logs",
    name: "success_logs",
    selector: (row: any) => row.success_Logs,
  },
  {
    id: "info_logs",
    name: "info_logs",
    selector: (row: any) => row.info_Logs,
  },
  {
    id: "data_intime",
    name: "data_intime",
    selector: (row: any) => row.data_Intime,
  },
  {
    id: "data_outtime",
    name: "data_outtime",
    selector: (row: any) => row.data_Outtime,
  },
];

const truncateText = (text: any, maxLength: any) => {
  if (text.length > maxLength) {
    return `${text.substring(0, maxLength)}...`;
  }
  return text;
};

const BrokerTable = async () => {
  const data = await apiCall();

  return (
    <>
      <table
        className="table table-striped table-dark rounded"
        border={1}
        cellSpacing={5}
        cellPadding={5}
      >
        <thead>
          <tr>
            {brokerColumns.map((column) => (
              <th scope="col" key={column.id}>
                {column.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data?.map((row: any) => (
            <tr key={row.s_No}>
              {brokerColumns.map((column) => (
                <td key={column.id} className="logs-table-cell">
                  {row}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BrokerTable;
