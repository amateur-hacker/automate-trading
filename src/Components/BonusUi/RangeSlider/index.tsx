import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import BasicSliders from "./BasicSlider";
import NegativeValuesSlider from "./NegativeValues";
import DisabledSlider from "./DisabledSlider";
import FormattedLabel1 from "./FormattedSlider1";
import FormattedLabel2 from "./FormattedSlider2";
import DraggableRangeSlider from "./DraggableSlider";

const RangeSlider = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Range Slider" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <BasicSliders />
          <NegativeValuesSlider />
          <DisabledSlider />
          <FormattedLabel1 />
          <FormattedLabel2 />
          <DraggableRangeSlider />
        </Row>
      </Container>
    </>
  );
};

export default RangeSlider;
