import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import DefaultLists from "./DefaultLists";
import LinkAndButtonLists from "./LinkAndButtonLists";
import FlushStyleLists from "./FlushStyleList";
import ContexualLists from "./ContexualLists";
import WithBadgesLists from "./WithBadgesList";
import CustomLists from "./CustomLists";
import JavascriptBehaviorLists from "./JavascriptBehaviorLists";
import WithIconLists from "./WithIconLists";
import WithImagesLists from "./WithImagesList";
import WithRoundedImageLists from "./WithRoundedImageLists";

const Lists = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits" pageTitle="List" />
      <Container fluid className="list-page">
        <Row>
          <DefaultLists />
          <LinkAndButtonLists />
          <FlushStyleLists />
          <ContexualLists />
          <WithBadgesLists />
          <CustomLists />
          <JavascriptBehaviorLists />
          <WithIconLists />
          <WithImagesLists />
          <WithRoundedImageLists />
        </Row>
      </Container>
    </>
  );
};

export default Lists;
