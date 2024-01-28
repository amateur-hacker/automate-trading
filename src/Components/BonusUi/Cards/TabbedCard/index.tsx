import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import SimpleTabCard from "./SimpleTabCard";
import TabWithIcon from "./TabsWithIcon";
import ColorTabCard from "./ColorTabCard";
import ColorOptionCard from "./ColorOption";
import MaterialTabCard from "./MaterialTabCard";
import MaterialWithIcon from "./MaterialWithIconTabCard";
import MaterialSecondaryCard from "./MaterialSecondaryTab";
import MaterialSuccessCard from "./MaterialSuccessCard";

const TabCards = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Tab Card" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <SimpleTabCard />
          <TabWithIcon />
          <ColorTabCard />
          <ColorOptionCard />
          <MaterialTabCard />
          <MaterialWithIcon />
          <MaterialSecondaryCard />
          <MaterialSuccessCard />
        </Row>
      </Container>
    </>
  );
};

export default TabCards;
