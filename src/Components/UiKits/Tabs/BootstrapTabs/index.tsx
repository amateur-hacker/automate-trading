import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BasicTab from "./BasicTabs";
import BottomLeftAlignTabs from "./BottomLeftAlignTabs";
import DangerColorTabs from "./DangerColorTabs";
import InfoColorTabs from "./InfoColorTabs";
import PillDarkTab from "./PillDarkTabs";
import PillTabWithIcon from "./PillTabWithIcon";
import PillTab from "./PillTabs";
import PrimaryColorTabs from "./PrimaryColorTabs";
import RightAlignTabs from "./RightAlignTabs";
import SecondaryColorTabs from "./SecondaryColorTabs";
import SuccessColorTabs from "./SuccessColorTabs";
import VerticalTabs from "./VerticalTabs";
import WarningColorTabs from "./WarningColorTabs";
import WithIconTabs from "./WithIconTabs";

const BootstrapTab = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Bootstrap Tabs" parent="Ui Kits" />
      <Container fluid>
        <Row>
          <BasicTab />
          <BottomLeftAlignTabs />
          <WithIconTabs />
          <RightAlignTabs />
          <VerticalTabs />
          <PillTab />
          <PillTabWithIcon />
          <PillDarkTab />
          <PrimaryColorTabs />
          <SecondaryColorTabs />
          <SuccessColorTabs />
          <InfoColorTabs />
          <WarningColorTabs />
          <DangerColorTabs />
        </Row>
      </Container>
    </>
  );
};

export default BootstrapTab;
