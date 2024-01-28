import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Select2Card from "./Select2Card";
import OutlineSelect2 from "./OutlineSelect2";
import FullColoredSelect2 from "./FullColoredVariant";

const Select2 = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Widgets" pageTitle="Select-2" />
      <Container fluid>
        <div className="select2-drpdwn">
          <Row>
            <Select2Card />
            <OutlineSelect2 />
            <FullColoredSelect2 />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Select2;
