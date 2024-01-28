import React from "react";
import { Card, CardBody, Col } from "reactstrap";
import { CustomerFeedbacks, Negative, Positive } from "@/Constant";
import { MessageSvg } from "@/Data/Widgets/WidgetsSvg";

const CustomerFeedback = () => {
  return (
    <Col xl="3" md="6 box-col-6">
      <Card>
        <CardBody className="widget-feedback">
          <div className="feedback-top text-center">
            <MessageSvg />
            <h3>{CustomerFeedbacks}</h3>
            <h6 className="font-roboto f-w-400">385749</h6>
          </div>
          <div id="feedback-chart"></div>
          <ul className="simple-list flex-row">
            <li className="font-roboto">
              <h4>{Positive}</h4>
              <h5 className="font-success">90%</h5>
            </li>
            <li className="font-roboto">
              <h4>{Negative}</h4>
              <h5 className="font-danger">10%</h5>
            </li>
          </ul>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CustomerFeedback;
