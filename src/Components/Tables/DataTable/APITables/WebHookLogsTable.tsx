import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import AddRows from "./AddRows";
import ChildRows from "./ChildRows";
import RowSelectionAndDeletion from "./RowSelectionAndDeletion/WebHookLogs";
import CustomFiltering from "./CustomFiltering";
import WebHookLogs from "./RowSelectionAndDeletion/WebHookLogs";

const APITables = () => {
  return (
    <>
      <WebHookLogs />
    </>
  );
};

export default APITables;
