import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SupportedElements } from "@/Constant";
import { BrowserDefaultsFormSubHeading } from "@/Data/Forms/FormControl";
import { Card, CardBody, Form } from "reactstrap";
import CheckBoxElement from "./CheckBoxElement";
import FileElement from "./FileElement";
import RadioElement from "./RadioElements";
import SelectBoxElement from "./SelectBoxElement";

const FormSupportedElements = () => {
  return (
    <Card>
      <CommonCardHeader heading={SupportedElements} subHeading={BrowserDefaultsFormSubHeading} />
      <CardBody>
        <Form className="was-validated">
          <CheckBoxElement />
          <RadioElement />
          <SelectBoxElement />
          <FileElement />
        </Form>
      </CardBody>
    </Card>
  );
};

export default FormSupportedElements;
