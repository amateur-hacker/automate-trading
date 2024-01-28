import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BasicColorDropDown from "./BasicColorDropdown";
import BasicDropDown from "./BasicDropdown";
import RoundedDropDown from "./RoundedDropdown";
import SplitButtonDropDown from "./SplitButtonDropdown";
import WithDisableDropDown from "./WithDisableDropdown";
import WithDividerDropDown from "./WithDividerDropdown";
import WithDropUpDropDown from "./WithDropUpDropdown";
import WithHeaderDropDown from "./WithHeaderDropdown";

const Dropdown = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Dropdown" parent="Ui Kits" />
      <Container fluid>
        <Row>
          <BasicDropDown />
          <BasicColorDropDown />
          <SplitButtonDropDown />
          <RoundedDropDown />
          <WithDividerDropDown />
          <WithHeaderDropDown />
          <WithDropUpDropDown />
          <WithDisableDropDown />
        </Row>
      </Container>
    </>
  );
};

export default Dropdown;
