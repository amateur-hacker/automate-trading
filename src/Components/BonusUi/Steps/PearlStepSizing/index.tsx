import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Pearls_Step_Sizing } from "@/Constant";
import { PearlStepSizingData, StepsSizingSubHeading } from "@/Data/BonusUi/Steps";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const PearlStepSizing = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Pearls_Step_Sizing} subHeading={StepsSizingSubHeading}/>
        <CardBody>
          {PearlStepSizingData.map((item, i) => (
            <Row key={i} className={`mb-5  ${item}`}>
              <Col sx="4" className="u-pearl done">
                <span className="u-pearl-number">1</span>
                <span className="u-pearl-title">Account Info</span>
              </Col>
              <Col xs="4" className="u-pearl current ">
                <span className="u-pearl-number">2</span>
                <span className="u-pearl-title">Billing Info</span>
              </Col>
              <Col xs="4" className="u-pearl ">
                <span className="u-pearl-number">3</span>
                <span className="u-pearl-title">Confirmation</span>
              </Col>
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PearlStepSizing;
