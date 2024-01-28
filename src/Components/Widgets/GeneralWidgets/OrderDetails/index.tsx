import React from "react";
import { Row, Col, Card, CardHeader, CardBody, Media } from "reactstrap";
import { CommonWidgetsDropdown, OrderDetailsData } from "@/Data/Widgets/General";
import { NewOrder, Orderdetails } from "@/Constant";

const OrderDetails = () => {
  return (
    <Col xl="6" className="box-col-12">
      <Card className="widget-joins">
        <CardHeader className="pb-0">
          <Media>
            <Media className="text-start" body>
              <h5>{Orderdetails}</h5>
            </Media>
            {CommonWidgetsDropdown}
          </Media>
        </CardHeader>
        <CardBody>
          <Row className="gy-4">
            {OrderDetailsData.map((item) => (
              <Col sm="6" key={item.id}>
                <div className="widget-card">
                  <Media className="align-self-center">
                    <div className={item.class}>{item.icon1}</div>
                    <Media body>
                      <h6>{NewOrder}</h6>
                      <h5>
                        {item.number1}
                        <span className="font-roboto font-success f-w-700">
                          <i className={item.class1}></i> {item.number2}
                        </span>
                      </h5>
                      <div className="icon-bg">{item.icon2}</div>
                    </Media>
                  </Media>
                </div>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OrderDetails;
