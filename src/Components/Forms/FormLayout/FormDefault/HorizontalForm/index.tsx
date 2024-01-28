import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import CommonCardFooter from "@/Components/Forms/FomControls/Common/CommonCardFooter";
import { HorizontalFormLayout } from "@/Constant";
import { Card, CardBody, Col, Form } from "reactstrap";
import CheckboxOptions from "./CheckboxOptions";
import PersonalInfo from "./PersonalInfo";
import RadioOptions from "./RadioOptions";

const HorizontalForm = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={HorizontalFormLayout} />
        <CardBody>
          <Form className="theme-form">
            <PersonalInfo />
            <RadioOptions />
            <CheckboxOptions />
          </Form>
        </CardBody>
        <CommonCardFooter color="secondary" />
      </Card>
    </Col>
  );
};

export default HorizontalForm;
