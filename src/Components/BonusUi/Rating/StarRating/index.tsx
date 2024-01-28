import React, { Fragment, useState } from "react";
import { Row, Col, Card, CardBody } from "reactstrap";
import { Rating } from "react-simple-star-rating";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StarRating } from "@/Constant";

const StarRatingClass = () => {
  const [rating, setRating] = useState(5);
  return (
    <Fragment>
      <Col xl="6" lg="12" md="6">
        <Card>
          <CommonCardHeader heading={StarRating} />
          <CardBody>
            <Row className="rating">
              <Col sm="8">
                <Rating fillColor="#655af3" initialValue={rating} onClick={(rate) => setRating(rate)} />
              </Col>
              <Col sm="4">
                <h6 className="mb-0 text-end">You Rated : {rating}</h6>
              </Col>
            </Row>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default StarRatingClass;
