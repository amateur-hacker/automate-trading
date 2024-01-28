import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClipboardOnTextarea } from "@/Constant";
import { ClipBoardTextParagraph } from "@/Data/Forms/FormWidgets";
import { useState } from "react";
import CopyToClipboard from "react-copy-to-clipboard";
import { Button, Card, CardBody, Col, Input } from "reactstrap";

const ClipboardTextarea = () => {
  const [clipBoardValues, setClipBoardValues] = useState({ value: ClipBoardTextParagraph, copied: false });

  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={ClipboardOnTextarea} />
        <CardBody>
          <div className="clipboaard-container">
            <p className="card-description">Cut/copy from text area</p>
            <Input type="textarea" rows="1" spellCheck="false" value={clipBoardValues.value} onChange={({ target: { value } }) => setClipBoardValues({ value, copied: false })} />
            <div className="mt-3">
              <CopyToClipboard text={clipBoardValues.value} onCopy={(value) => setClipBoardValues({ value, copied: true })}>
                <Button className="btn-clipboard  me-2" color="primary">
                  <i className="fa fa-copy"></i> Copy
                </Button>
              </CopyToClipboard>
              <CopyToClipboard text={clipBoardValues.value} onCopy={() => setClipBoardValues({ copied: true, value: "" })}>
                <Button className="btn-clipboard-cut" color="secondary">
                  <i className="fa fa-cut"></i> Cut
                </Button>
              </CopyToClipboard>
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ClipboardTextarea;
