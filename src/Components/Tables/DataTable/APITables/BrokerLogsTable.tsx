import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import AddRows from "./AddRows";
import ChildRows from "./ChildRows";
import BrokerLogs from "./RowSelectionAndDeletion/BrokerLogs";
import CustomFiltering from "./CustomFiltering";

const BrokerLogsTable = () => {
  return (
    <>
      <BrokerLogs />
    </>
  );
};

export default BrokerLogsTable;
