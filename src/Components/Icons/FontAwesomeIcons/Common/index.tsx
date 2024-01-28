import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { IconsCommonProps } from "@/Type/Icons";
import React from "react";
import { Row, Col, Card, CardBody } from "reactstrap";

const FontAwesomeCommon = ({ iconType, title, parentCallback }: IconsCommonProps) => {
  const getITag = (tag: string) => {
    parentCallback(tag);
  };
  return (
    <>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={title} />
          <CardBody>
            <Row className="icon-lists">
              {iconType.map((icon, i) => {
                return (
                  <Col sm="6" md="4" xl="3" key={i} onClick={() => getITag(icon)}>
                    <i className={`fa fa-${icon}`}></i> {"fa fa-"}
                    {icon}
                  </Col>
                );
              })}
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default FontAwesomeCommon;
