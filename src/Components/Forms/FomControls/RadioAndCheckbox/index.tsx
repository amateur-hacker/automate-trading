import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import AnimatedCheckbox from "./AnimatedCheckbox";
import AnimatedRadio from "./AnimatedRadio";
import CustomCheckBoxes from "./CustomCheckbox";
import CustomRadios from "./CustomRadios";
import SquareCheckboxes from "./SquareCheckbox";

const RadioAndCheckbox = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Control" pageTitle="Radio Checkbox" />
      <Container fluid>
        <Row>
          <CustomRadios />
          <CustomCheckBoxes />
          <AnimatedRadio />
          <AnimatedCheckbox />
          <SquareCheckboxes />
        </Row>
      </Container>
    </>
  );
};

export default RadioAndCheckbox;
