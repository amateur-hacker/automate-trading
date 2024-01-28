import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Step_With_Icon } from "@/Constant";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const StepsWithIcon = () => {
  return (
    <>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={Step_With_Icon} />
          <CardBody>
            <Row className="u-steps">
              <Col md="4" className="u-step  ">
                <span className="u-step-icon icon-shopping-cart-full"></span>
                <div className="u-step-desc">
                  <span className="u-step-title">Shopping</span>
                </div>
              </Col>
              <Col md="4" className="u-step current">
                <span className="u-step-icon icon-notepad"></span>
                <div className="u-step-desc">
                  <span className="u-step-title">Billing</span>
                </div>
              </Col>
              <Col md="4" className="u-step">
                <span className="u-step-icon icon-time"></span>
                <div className="u-step-desc">
                  <span className="u-step-title">Getting</span>
                </div>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default StepsWithIcon;
