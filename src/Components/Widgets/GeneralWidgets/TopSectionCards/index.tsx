import { EarningsData } from "@/Data/Widgets/General";
import React from "react";
import CountUp from "react-countup";
import { Card, CardBody, Col, Media, Progress } from "reactstrap";

const TopSectionCards = () => {
  return (
    <>
      {EarningsData.map((item, i) => (
        <Col sm="6" xl="3" lg="6" key={i}>
          <Card className="o-hidden">
            <CardBody>
              <Media className="static-widget">
                <Media body>
                  <h6 className="font-roboto">{item.product}</h6>
                  <h4 className="mb-0 counter">{item.count}</h4>
                </Media>
                {item.icon}
              </Media>
              <div className="progress-widget">
                <Progress className={`${item.class} sm-progress-bar progress-animate`} style={{ width: "75%" }}>
                  <span className="animate-circle"></span>
                </Progress>
              </div>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};
export default TopSectionCards;
