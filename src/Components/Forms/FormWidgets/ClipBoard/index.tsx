import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import ClipBoardHighlight from "./ClipBoardHighlight";
import ClipBoardParagraph from "./ClipBoardOnParagraph";
import ClipBoardText from "./ClipBoardText";
import ClipboardTextarea from "./ClipBoardTextarea";

const Clipboard = () => {
  return (
    <>
      <CommonBreadcrumb parent="Form Widgets" pageTitle="Clipboard" />
      <Container fluid>
        <Row>
          <ClipBoardText />
          <ClipboardTextarea />
          <ClipBoardParagraph />
          <ClipBoardHighlight />
        </Row>
      </Container>
    </>
  );
};

export default Clipboard;
