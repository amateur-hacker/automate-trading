import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import SimpleMaterialTabs from "./SimpleMaterialTabs";
import BottomMaterialTabs from "./BottomMaterialTabs";
import LeftMaterialTabs from "./LeftMaterialTabs";
import RightMaterialTabs from "./RightMaterialTabs";
import MaterialPrimaryColorTab from "./MaterialPrimaryTabs";
import MaterialSecondaryColorTab from "./MaterialSecondaryTabs";
import MaterialSuccessColorTab from "./MaterialSuccessLeftTabs";
import MaterialInfoColorTab from "./MaterialInfoRightTabs";

const LineTabs = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits " pageTitle="Line Tabs" />
      <Container fluid>
        <Row>
          <SimpleMaterialTabs />
          <BottomMaterialTabs />
          <LeftMaterialTabs />
          <RightMaterialTabs />
          <MaterialPrimaryColorTab />
          <MaterialSecondaryColorTab />
          <MaterialSuccessColorTab />
          <MaterialInfoColorTab />
        </Row>
      </Container>
    </>
  );
};

export default LineTabs;
