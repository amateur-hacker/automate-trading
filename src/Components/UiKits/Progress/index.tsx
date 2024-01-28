"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Progress } from "@/Constant";
import { Container, Row } from "reactstrap";
import Animated from "./Animated";
import Basic from "./Basic";
import Custom from "./Custom";
import Large from "./Large";
import MultiBars from "./MultipleBars";
import Small from "./Small";
import States from "./States";
import Striped from "./Striped";

const ProgressBar = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle={Progress} parent="Ui Kits" />
      <Container fluid>
        <Row>
          <Basic />
          <Small />
          <Large />
          <Custom />
          <States />
          <MultiBars />
          <Striped />
          <Animated />
        </Row>
      </Container>
    </>
  );
};

export default ProgressBar;
