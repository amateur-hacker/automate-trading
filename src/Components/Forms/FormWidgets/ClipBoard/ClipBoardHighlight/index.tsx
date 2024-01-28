import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CopyPortionFromParagraph, Highlight } from "@/Constant";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col } from "reactstrap";

const ClipBoardHighlight = () => {
  const [highlightTextValue, setHighlightTextValue] = useState({ value: "dolor ertrsiertertt amet", copied: false });

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={CopyPortionFromParagraph} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Copy Portion From Paragraph</p>
            <h6 className="border rounded card-body f-w-300">
              Lorem ipsum <span className="bg-primary text-white p-1">{Highlight}</span>,consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </h6>
            <div className="mt-3">
              <CopyToClipboard text={highlightTextValue.value} onCopy={(value) => setHighlightTextValue({ value, copied: true })}>
                <Button className="btn-clipboard" color="primary">
                  <i className="fa fa-copy"></i> Copy highLighted text
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipBoardHighlight;
// <CopyToClipboard text={highlightTextValue.value} onCopy={(value) => setHighlightTextValue({ value, copied: true })}>
//  <Button className='btn-clipboard' color='primary'>
//  <i className='fa fa-copy'></i> {CopyHighLightedText}
//  </Button>
//  </CopyToClipboard>