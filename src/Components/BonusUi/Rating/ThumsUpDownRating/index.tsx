//@ts-nocheck
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ThumbsUpDownRating } from "@/Constant";
import React, { useState } from "react";
import Rating from "react-rating";
import { Card, CardBody, Col, Row } from "reactstrap";

const ThumbsUpDownClass = () => {
  const [thumbs, setThumbs] = useState(0);
  return (
    <Col lg="12" xl="6" md="6">
      <Card>
        <CommonCardHeader heading={ThumbsUpDownRating} />
        <CardBody>
          <Row className="rating">
            <Col sm="8">
              <Rating initialRating={thumbs} emptySymbol={<i className="fa fa-thumbs-down fa-2x" />} fullSymbol={<i className="fa fa-thumbs-up fa-2x" />} onClick={(rate) => setThumbs(rate)}></Rating>
            </Col>
            <Col sm="4">
              <h6 className="mb-0 text-end">
                {"You Rated"} : {thumbs}
              </h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ThumbsUpDownClass;
