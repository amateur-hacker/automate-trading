import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import Basic from "./BasicTooltip";
import Directions from "./DirectionTooltip";
import HtmlContentTooltip from "./HTMLContentTooltip";
import OffsetTooltip from "./OffsetTooltip";

const Tooltip = () => {
  return (
    <>
      <CommonBreadcrumb parent="Ui Kits" pageTitle="Tooltip" />
      <Container fluid>
        <Row>
          <Basic />
          <Directions />
          <HtmlContentTooltip />
          <OffsetTooltip />
        </Row>
      </Container>
    </>
  );
};

export default Tooltip;
