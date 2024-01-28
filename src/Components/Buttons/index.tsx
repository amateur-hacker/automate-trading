"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import GroupButtons from "./ButtonGroup";
import DefaultButtons from "./DefaultButtons";
import DisabledButtons from "./DisabledButtons";
import EdgeButtons from "./EdgeButtons";
import FlatButtons from "./FlatButtons";
import GradienButtons from "./GradienButtons";
import AllOutlineButtons from "./OutlineButtons";
import RaisedButtons from "./RaisedButtons";
import SizingButtons from "./SizingButtons";

export const Buttons = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Default Style" parent="Button" />
      <Container fluid>
        <Row>
          <FlatButtons />
          <EdgeButtons />
          <RaisedButtons />
          <GroupButtons />
          <DefaultButtons />
          <SizingButtons />
          <DisabledButtons />
          <AllOutlineButtons />
          <GradienButtons />
        </Row>
      </Container>
    </>
  );
};

export default Buttons;
