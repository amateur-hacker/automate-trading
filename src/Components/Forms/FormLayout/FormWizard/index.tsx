import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { FormWizardWithIcon } from "@/Constant";
import { useState } from "react";
import { Step, Stepper } from "react-form-stepper";
import { Col,Card, CardBody, CardHeader, Container, Row } from "reactstrap";
import BirthDate from "./BirthDate";
import Emails from "./Email";
import Registration from "./Registration";

const FormWizard = () => {
  const [goSteps, setGoSteps] = useState(0);
  return (
    <>
      <CommonBreadcrumb parent="Form Layout" pageTitle="Form Wizard" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardHeader>
                <h5>{FormWizardWithIcon}</h5>
              </CardHeader>
              <CardBody>
                <Stepper activeStep={goSteps}>
                  <Step onClick={() => setGoSteps(0)} label="Step 1" />
                  <Step onClick={() => setGoSteps(1)} label="Step 2" />
                  <Step onClick={() => setGoSteps(2)} label="Step 3" />
                </Stepper>
                {goSteps === 0 && <Registration setGoSteps={setGoSteps} />}
                {goSteps === 1 && <Emails goSteps={goSteps} setGoSteps={setGoSteps} />}
                {goSteps === 2 && <BirthDate goSteps={goSteps} setGoSteps={setGoSteps} />}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default FormWizard;
