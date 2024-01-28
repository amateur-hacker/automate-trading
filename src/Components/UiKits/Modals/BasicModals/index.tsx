import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import BasicBtn from "./Simple";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicModal } from "@/Constant";
import ScrollBtn from "./ScrollButton";
import VerticalBtn from "./VerticallyCenter";
import TooltipModal from "./Tooltip&PopOver";
import GridModal from "./GridButton";

const BasicModals = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={BasicModal} />
        <CardBody className="btn-showcase">
          <BasicBtn />
          <ScrollBtn/>
          <VerticalBtn/>
          <TooltipModal/>
          <GridModal/>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicModals;
