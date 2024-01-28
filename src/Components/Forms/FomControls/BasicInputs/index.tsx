import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BasicFormControls from "./BasicFormControl";
import CustomControlsForm from "./CustomControlsForm";
import EdgesInputForm from "./EdgeInputForm";
import FlatInputForm from "./FlatInputForm";
import BasicHtmlFormControls from "./HtmlInputConrols";
import InputSizeForm from "./InputSizing";
import RaiseInputForm from "./RaisedInputForm";
import SolidInputForm from "./SolidInputForm";

const BasicInputs = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Base Input" parent="Form Control" />
      <Container fluid>
        <Row>
          <BasicFormControls />
          <BasicHtmlFormControls />
          <EdgesInputForm />
          <FlatInputForm />
          <RaiseInputForm />
          <SolidInputForm />
          <InputSizeForm />
          <CustomControlsForm />
        </Row>
      </Container>
    </>
  );
};

export default BasicInputs;
