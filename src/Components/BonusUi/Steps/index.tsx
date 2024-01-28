import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import DefaultSteps from "./DefaultSteps";
import StepsWithIcon from "./StepsWithIcon";
import StepsStates from "./StepsStates";
import StepsSizing from "./StepSizing";
import VerticalSteps from "./VerticalSteps";
import DefaultPearlSteps from "./DefaultPearlSteps";
import PearlStepWithIcons from "./PearlStepWithIcons";
import PearlStepSizing from "./PearlStepSizing";
import PearlStepStates from "./PearlStates";

const Steps = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Steps" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <DefaultSteps />
          <StepsWithIcon />
          <StepsStates />
          <StepsSizing />
          <VerticalSteps />
          <DefaultPearlSteps />
          <PearlStepWithIcons />
          <PearlStepSizing />
          <PearlStepStates />
        </Row>
      </Container>
    </>
  );
};

export default Steps;
