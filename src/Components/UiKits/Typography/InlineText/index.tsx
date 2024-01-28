import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InlineTextElements } from "@/Constant";
import { InlineTextSubHeading } from "@/Data/UiKits/Typography";
import { Card, CardBody, Col } from "reactstrap";

const InlineText = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={InlineTextElements} subHeading={InlineTextSubHeading} />
        <CardBody className="radio-text">
          <p>
            You can use the mark tag to
            <mark>highlight</mark> text.
          </p>
          <p>
            <del>This line of text is meant to be treated as deleted text.</del>
          </p>
          <p>
            <s>This line of text is meant to be treated as no longer accurate.</s>
          </p>
          <p>
            <ins>This line of text is meant to be treated as an addition to the document.</ins>
          </p>
          <p>
            <u>This line of text will render as underlined</u>
          </p>
          <p>
            <small>This line of text is meant to be treated as fine print.</small>
          </p>
          <p>
            <strong>This line rendered as bold text.</strong>
          </p>
          <p>
            <em>This line rendered as italicized text.</em>
          </p>
        </CardBody>
      </Card>
    </Col>
  );
};

export default InlineText;
