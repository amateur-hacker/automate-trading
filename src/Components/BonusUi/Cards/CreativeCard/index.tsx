import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import DirectionalCreativeCard from "./DirectionalCreativeCards";
import ColorStateCreativeCard from "./ColorStateCreativeCard";
import AbsoluteStyleCard from "./AbsoluteStyleCard";
import ColorStateCard from "./ColorStateCard";

const CreativeCard = () => {
  return (
    <>
      <CommonBreadcrumb parent="Bonus Ui" pageTitle="Creative Card" />
      <Container className="basic-cards" fluid>
        <Row>
          <DirectionalCreativeCard />
          <ColorStateCreativeCard />
          <AbsoluteStyleCard />
          <ColorStateCard />
        </Row>
      </Container>
    </>
  );
};

export default CreativeCard;
