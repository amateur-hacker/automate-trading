import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { BasicCardData, CardsData } from "@/Data/BonusUi/Cards";
import React from "react";
import { Card, CardBody, CardFooter, CardHeader, Col, Container, Row } from "reactstrap";

const BasicCard = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Basic Card" parent="Bonus Ui" />
      <Container className="basic-cards" fluid>
        <Row>
          <Col sm="12" xl="6">
            <Card>
              <CardHeader>
                <h5>Basic Card</h5>
              </CardHeader>
              <CardBody>
                <p className="mb-0">{CardsData}</p>
              </CardBody>
            </Card>
          </Col>
          {BasicCardData.map((item, i) => (
            <Col sm="12" xl="6" key={i}>
              <Card className={item.flatClass}>
                <CardHeader className={item.colorClass && item.colorClass}>
                  <h5>
                    {item.icon && item.icon}
                    {item.title}
                  </h5>
                </CardHeader>
                <CardBody className={item.colorClass ? item.colorClass : item.bodyClass && item.bodyClass}>
                  <p className="mb-0">{CardsData}</p>
                </CardBody>
                {item.footer && (
                  <CardFooter className={item.colorClass ? item.colorClass : item.footerClass && item.footerClass}>
                    <h6 className="mb-0">{item.footer}</h6>
                  </CardFooter>
                )}
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default BasicCard;
