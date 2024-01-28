import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PearlStepState } from "@/Constant";
import { PearlStepStatsSubHeading } from "@/Data/BonusUi/Steps";
import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

const PearlStepStates = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={PearlStepState} subHeading={PearlStepStatsSubHeading} />
        <CardBody>
          <Row className="mb-5">
            <Col xs="4" className="u-pearl current ">
              <div className="u-pearl-number">1</div>
              <span className="u-pearl-title">Account Info</span>
            </Col>
            <Col xs="4" className="u-pearl disabled">
              <div className="u-pearl-number">2</div>
              <span className="u-pearl-title">Billing Info</span>
            </Col>
            <Col xs="4" className="u-pearl disabled ">
              <div className="u-pearl-number">3</div>
              <span className="u-pearl-title">Confirmation</span>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs="4" className="u-pearl done ">
              <div className="u-pearl-number">1</div>
              <span className="u-pearl-title">Account Info</span>
            </Col>
            <Col xs="4" className="u-pearl current ">
              <div className="u-pearl-number">2</div>
              <span className="u-pearl-title">Billing Info</span>
            </Col>
            <Col xs="4" className="u-pearl disabled ">
              <div className="u-pearl-number">3</div>
              <span className="u-pearl-title">Confirmation</span>
            </Col>
          </Row>
          <Row className="mb-5">
            <Col xs="4" className="u-pearl done ">
              <div className="u-pearl-number">1</div>
              <span className="u-pearl-title">Account Info</span>
            </Col>
            <Col xs="4" className="u-pearl current error ">
              <div className="u-pearl-number">2</div>
              <span className="u-pearl-title">Billing Info</span>
            </Col>
            <Col xs="4" className="u-pearl disabled ">
              <div className="u-pearl-number">3</div>
              <span className="u-pearl-title">Confirmation</span>
            </Col>
          </Row>
          <Row >
            <Col xs="4" className="u-pearl done ">
              <div className="u-pearl-number">1</div>
              <span className="u-pearl-title">Account Info</span>
            </Col>
            <Col xs="4" className="u-pearl done ">
              <div className="u-pearl-number">2</div>
              <span className="u-pearl-title">Billing Info</span>
            </Col>
            <Col xs="4" className="u-pearl current ">
              <div className="u-pearl-number">3</div>
              <span className="u-pearl-title">Confirmation</span>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PearlStepStates;
