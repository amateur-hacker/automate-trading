import React from "react";
import CountUp from "react-countup";
import { Col, Card, CardHeader, Media, CardBody, Row } from "reactstrap";
import { CommonWidgetsDropdown, SalesData } from "@/Data/Widgets/General";
import { SaleDetails } from "@/Constant";

const SalesDetails = () => {
  return (
    <Col xl="6" className="xl-100 box-col-12">
      <Card className="widget-joins widget-arrow">
        <CardHeader className="pb-0">
          <Media>
            <Media className="text-start" body>
              <h5>{SaleDetails}</h5>
            </Media>
            {CommonWidgetsDropdown}
          </Media>
        </CardHeader>
        <CardBody>
          <Row className="gy-4">
            {SalesData.map((item, i) => (
              <Col sm="6" key={i}>
                <div className="widget-card">
                  <Media className="align-self-center">
                    <div className={item.class1}>
                      <i className={item.class2}></i>
                    </div>
                    <Media body>
                      <h6>{item.week}</h6>
                      <h5>
                        {item.logo}
                        <CountUp end={25698} className="counter" />
                        <span className={item.class3}>{item.num}</span>
                      </h5>
                      <span className="font-roboto"> {item.week2}</span>
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
export default SalesDetails;
