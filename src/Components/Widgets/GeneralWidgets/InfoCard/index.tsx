import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { APRIL } from "@/Constant";

const InfoCard = () => {
  return (
    <Col sm="12" lg="6" xl="4" md="12" className="box-col-6">
      <Card className="height-equal">
        <div className="calender-widget">
          <div className="cal-img"></div>
          <div className="cal-date">
            <h5>
              25
              <br />
              {APRIL}
            </h5>
          </div>
          <CardBody className="cal-desc text-center">
            <h3>I must explain to you how?</h3>
            <p>Denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, Letraset sheets containing Lorem Ipsum passages, and more recently with desktop Lorem Ipsum is simply.</p>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};
export default InfoCard;
