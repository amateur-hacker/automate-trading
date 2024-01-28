import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BoxShadowSubHeading } from "@/Data/UiKits/Shadow";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import LargeShadows from "./LargeShadows";
import NoShadows from "./NoShadows";
import RegularShadows from "./RegularShadows";
import SmallShadows from "./SmallShadows";

const BoxShadow = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle=" Box Shadow" parent="Ui Kits" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card className="box-shadow-title">
              <CommonCardHeader heading="Examples" subHeading={BoxShadowSubHeading} />
              <CardBody>
                <Row>
                  <LargeShadows />
                  <RegularShadows />
                  <SmallShadows />
                  <NoShadows />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default BoxShadow;
