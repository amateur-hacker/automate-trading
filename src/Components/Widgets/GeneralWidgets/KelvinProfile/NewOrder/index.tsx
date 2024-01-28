import { Loss, NewOrder, Profit } from "@/Constant";
import React from "react";
import CountUp from "react-countup";
import { Card, CardBody, Col, Progress, Row } from "reactstrap";

const NewOrders = () => {
  return (
    <Col xl="12" lg="6" className="box-col-6 ">
      <Card className="order-widget">
        <CardBody>
          <Row className="heder-widget">
            <Col xs="6">
              <span>{NewOrder}</span>
              <h3>
                <CountUp className="total-num counter" end={25639} />
              </h3>
            </Col>
            <Col xs="6">
              <div className="text-end">
                <ul>
                  <li>
                    {Profit}
                    <span className="product-stts font-primary m-l-10">
                      8989<i className="icon-angle-up f-12 m-l-10"></i>
                    </span>
                  </li>
                  <li>
                    {Loss}
                    <span className="product-stts font-primary m-l-10">
                      2560<i className="icon-angle-down f-12 m-l-10"></i>
                    </span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <div className="new-order">
            <div>
              <Progress className="bg-primary sm-progress-bar" style={{ width: "80%" }} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NewOrders;
