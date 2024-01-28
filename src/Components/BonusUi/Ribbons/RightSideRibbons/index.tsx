import { Ribbon } from "@/Constant";
import { ColorRibbonsData, RibbonData } from "@/Data/BonusUi/Ribbons";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const RightSideRibbons = () => {
  return (
    <>
      <Col sm="14" md="6" lg="4">
        <Card className="ribbon-wrapper">
          <CardBody>
            <div className="ribbon ribbon-right ribbon-primary">{Ribbon}</div>
            <p>{RibbonData}</p>
          </CardBody>
        </Card>
      </Col>
      {ColorRibbonsData.map((item, i) => (
        <Col key={i} sm="14" md="6" lg="4">
          <Card className="ribbon-wrapper">
            <CardBody>
              <div className={`ribbon ribbon-right ribbon-${item}`}>{Ribbon}</div>
              <p>{RibbonData}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default RightSideRibbons;
