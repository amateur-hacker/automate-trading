import { Ribbon } from "@/Constant";
import { BookmarkRibbonsData, RibbonData } from "@/Data/BonusUi/Ribbons";
import React from "react";
import { Card, CardBody, Col } from "reactstrap";

const BookmarkRibbons = () => {
  return (
    <>
      <Col sm="14" md="6" lg="4">
        <Card className="ribbon-wrapper">
          <CardBody>
            <div className="ribbon ribbon-bookmark ribbon-primary">{Ribbon}</div>
            <p>{RibbonData}</p>
          </CardBody>
        </Card>
      </Col>
      {BookmarkRibbonsData.map((item, i) => (
        <Col key={i} sm="14" md="6" lg="4">
          <Card className="ribbon-wrapper">
            <CardBody>
              <div className={`ribbon ribbon-bookmark ${item}`}>{Ribbon}</div>
              <p>{RibbonData}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default BookmarkRibbons;
