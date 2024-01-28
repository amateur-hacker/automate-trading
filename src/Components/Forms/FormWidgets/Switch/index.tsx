import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BasicSwitches from "./BasicSwitch";
import ColorSwitch from "./ColorSwitch";
import OutlineSwitch from "./OutlineSwitch";
import SizingSwitch from "./SizingSwitch";
import UncheckedOutlineSwitch from "./UncheckedOutlineSwitch";
import WithColorSwitch from "./WithColorSwitch";
import WithIconSwitch from "./WithIconSwitch";

const Switch = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Switch" parent="Form Widgets" />
      <Container fluid>
        <Row>
          <BasicSwitches />
          <ColorSwitch />
          <OutlineSwitch />
          <UncheckedOutlineSwitch />
          <SizingSwitch />
          <WithIconSwitch />
          <WithColorSwitch />
        </Row>
      </Container>
    </>
  );
};
export default Switch;
