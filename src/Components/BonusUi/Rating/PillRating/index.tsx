//@ts-nocheck
import React, {  useState } from "react";
import { Col, Card, CardBody, Row } from "reactstrap";
import Rating from "react-rating";
import { PillRating } from "@/Constant";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";

const PillRatingClass = () => {
  const [rating, setRating] = useState(0);
  return (
    <>
      <Col xl="6" lg="12" md="6">
        <Card>
          <CommonCardHeader heading={PillRating} />
          <CardBody>
            <Row className="rating">
              <Col sm="8">
                <Rating
                  className="rating"
                  emptySymbol={<span style={{ margin: "10px" }}>---</span>}
                  fullSymbol={["A", "B", "C", "D", "E"].map((n) => (
                    <span style={{ fontSize: "20px" }}>{n}</span>
                  ))}
                  onClick={(rate) => {
                    setRating(rate);
                    alert("You Rated : " + rate);
                  }}
                />
              </Col>
              <Col sm="4">
                <h6 className="mb-0 text-end">You Rated : {rating}</h6>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};

export default PillRatingClass;
