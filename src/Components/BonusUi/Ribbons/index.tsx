import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColoredBreadcrumb } from "@/Constant";
import { ColoredRibbonSubHeading } from "@/Data/BonusUi/Ribbons";
import { Card, Col, Container, Row } from "reactstrap";
import BookmarkRibbons from "./BookmarkRibbons";
import BottomClipRibbons from "./BottomClipRibbons";
import ColorRibbons from "./ColorRibbons";
import ColoredRibbons from "./ColoredRibbons";
import RightSideRibbons from "./RightSideRibbons";
import TopClipRibbons from "./TopClipRibbons";
import WithIconRibbons from "./WithIconRibbons";

const Ribbons = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Ribbon" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <Col sm="12" xl="12" md="12">
            <Card>
              <CommonCardHeader heading={ColoredBreadcrumb} subHeading={ColoredRibbonSubHeading} />
              <ColoredRibbons />
            </Card>
          </Col>
          <ColorRibbons />
          <RightSideRibbons />
          <WithIconRibbons />
          <BookmarkRibbons />
          <TopClipRibbons />
          <BottomClipRibbons />
        </Row>
      </Container>
    </>
  );
};

export default Ribbons;
