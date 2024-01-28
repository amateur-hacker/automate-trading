
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import StarRatingClass from "./StarRating";
import HeartRatingClass from "./HeartRating";
import ThumbsUpDownClass from "./ThumsUpDownRating";
import PillRatingClass from "./PillRating";

const RatingClass = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Rating Class" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <StarRatingClass />
          <HeartRatingClass />
          <ThumbsUpDownClass />
          <PillRatingClass />
        </Row>
      </Container>
    </>
  );
};

export default RatingClass;
