import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import ButtonClassToLink from "./ButtonToLink";
import DecimalValueTouchSpin from "./DecimalTouchSpin";
import DefaultTouchSpin from "./DefaultTouchSpin";
import IconButtonTouchspin from "./IconButtonTouchspin";
import LargeHorizontalTouchspin from "./LargeHorizontalTouchSpin";
import MinMaxTouchspin from "./MinMaxTouchSpin";
import MouseWheelDisabled from "./MouseWheelDisable";
import Postfix from "./PostFix";
import Prefix from "./Prefix";
import SmallHorizontalTouchspin from "./SmallHorizontalTouchSpin";
import TouchspinSteps from "./StepsTouchspin";
import VerticalTouchSpin from "./VerticalTouchSpin";
import WithDropdownTouchspin from "./WithDropdownTouchSpin";
import WithIconTouchspin from "./WithIconTouchSpin";
import InitialValueTouchspin from "./WithInitialValue";

const TouchSpin = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Controls" pageTitle="Touchspin" />
      <Container fluid>
        <Row>
          <DefaultTouchSpin />
          <VerticalTouchSpin />
          <Postfix />
          <Prefix />
          <MinMaxTouchspin />
          <InitialValueTouchspin />
          <TouchspinSteps />
          <DecimalValueTouchSpin />
          <ButtonClassToLink />
          <WithIconTouchspin />
          <IconButtonTouchspin />
          <WithDropdownTouchspin />
          <MouseWheelDisabled />
          <SmallHorizontalTouchspin />
          <LargeHorizontalTouchspin />
        </Row>
      </Container>
    </>
  );
};

export default TouchSpin;
