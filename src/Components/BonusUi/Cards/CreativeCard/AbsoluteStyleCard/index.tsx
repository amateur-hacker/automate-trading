import { AbsoluteStyle, } from "@/Constant";
import { CardsData } from "@/Data/BonusUi/Cards";
import React from "react";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const AbsoluteStyleCard = () => {
  return (
    <Col sm="12" xl="6">
      <Card className="card-absolute">
        <CardHeader className="bg-primary">
          <h5>{AbsoluteStyle}</h5>
        </CardHeader>
        <CardBody>
          <p>{CardsData}</p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AbsoluteStyleCard;
