import {  ColorState } from "@/Constant";
import { CardsData } from "@/Data/BonusUi/Cards";
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ColorStateCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card-absolute">
        <CardHeader className="bg-secondary">
          <h5>{ColorState}</h5>
        </CardHeader>
        <CardBody>
          <p>{CardsData}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColorStateCard;
