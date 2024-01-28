import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";
import { Card, CardBody, Col, Row } from "reactstrap";
import { MdFavorite, MdFavoriteBorder } from "react-icons/md";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { HeartRating } from "@/Constant";
const HeartRatingClass = () => {
  const [rating, setRating] = useState(3);
  return (
    <Col>
      <Card>
        <CommonCardHeader heading={HeartRating} />
        <CardBody>
          <Row className="rating">
            <Col sm="8">
              <Rating transition fillColor="#655af3" fillIcon={<MdFavorite size={40} />} emptyIcon={<MdFavoriteBorder size={40} />} initialValue={rating} onClick={(rate) => setRating(rate)} />
            </Col>
            <Col sm="4">
              <h6 className="mb-0 text-end">You Rated : {rating}</h6>
            </Col>
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default HeartRatingClass;
