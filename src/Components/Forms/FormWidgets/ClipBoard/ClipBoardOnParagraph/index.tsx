import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClipboardOnParagraph } from "@/Constant";
import { ClipBoardTextParagraph } from "@/Data/Forms/FormWidgets";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col } from "reactstrap";

const ClipBoardParagraph = () => {
  const [clipBoardValues, setClipBoardValues] = useState({ value: ClipBoardTextParagraph, copied: false });

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={ClipboardOnParagraph} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Copy from paragraph</p>
            <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
              <h6 className="border rounded card-body f-w-300">{ClipBoardTextParagraph}</h6>
            </CopyToClipboard>
            <div className="mt-3">
              <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <Button className="btn-clipboard" color="primary">
                  <i className="fa fa-copy"></i> Copy
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipBoardParagraph;
