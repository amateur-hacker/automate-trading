"use client";

import React from "react";
import { Col, Container, Row } from "reactstrap";
import PaddingLeftCard from "./AllPaddingCards/PaddingLeftCard";
import PaddingRightCard from "./AllPaddingCards/PaddingRightCard";
import PaddingTopCard from "./AllPaddingCards/PaddingTopCard";
import PaddingBottomCard from "./AllPaddingCards/PaddingBottomCard";
import MarginLeftCard from "./AllMarginCards/MarginLeftCard";
import MarginRightCard from "./AllMarginCards/MarginRightCard";
import MarginTopCard from "./AllMarginCards/MarginTopCard";
import MarginBottomCard from "./AllMarginCards/MarginBottomCard";
import VerticalAlignCard from "./VerticalAlignCard";
import ImageSizeCard from "./ImagesSizeCard";
import TextColorCard from "./AllFontCards/TextColorCard";
import BadgeColorCard from "./BadgeColorCard";
import ButtonColorCard from "./AllButtonCards/ButtonColorCard";
import BackgroundColorCard from "./BackgroundColorCard";
import BorderRadiusCard from "./AllBorderCards/BorderRadiusCard";
import FontWeightCard from "./AllFontCards/FontWeightCard";
import FontStyleCard from "./AllFontCards/FontStyleCard";
import OverflowCard from "./OverflowCard";
import FontSizeCard from "./AllFontCards/FontSizeCard";
import AllBorersColorCard from "./AllBorderCards/AllBordersCard";
import BorderWidthCard from "./AllBorderCards/BorderWidthCard";
import PositionCard from "./PositionCard";
import ButtonOutlineCard from "./AllButtonCards/ButtonOutlineCard";
import MarginCard from "./AllMarginCards/MarginCard";
import PaddingCard from "./AllPaddingCards/PaddingCard";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";

const HelperClasses = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits" pageTitle="Helper Classes" />
      <Container fluid>
        <Row>
          <PaddingCard />
          <MarginCard />
          <PaddingLeftCard />
          <PaddingRightCard />
          <PaddingTopCard />
          <PaddingBottomCard />
          <MarginLeftCard />
          <MarginRightCard />
          <MarginTopCard />
          <MarginBottomCard />
          <VerticalAlignCard />
          <ImageSizeCard />
          <TextColorCard />
          <BadgeColorCard />
          <BackgroundColorCard />
          <ButtonColorCard />
          <Col xl="6">
            <BorderRadiusCard />
            <FontWeightCard />
            <FontStyleCard />
            <OverflowCard />
          </Col>
          <FontSizeCard />
          <AllBorersColorCard />
          <Col xl="6">
            <BorderWidthCard />
            <PositionCard />
            <ButtonOutlineCard />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default HelperClasses;
