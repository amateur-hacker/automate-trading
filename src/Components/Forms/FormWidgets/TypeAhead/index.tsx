import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BasicDemo from "./BasicDemo";
import CustomSelectionTypeAhead from "./CustomSelections";
import MultipleTypeAhead from "./MultipleSelections";
import RemoteTypeahead from "./RemoteTypeAhead";

const TypeAhead = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Widgets" pageTitle="TypeAhead" />
      <Container fluid>
        <div className="typeahead">
          <Row>
            <BasicDemo />
            <MultipleTypeAhead />
            <CustomSelectionTypeAhead />
            <RemoteTypeahead />
          </Row>
        </div>
      </Container>
    </>
  );
};

export default TypeAhead;
