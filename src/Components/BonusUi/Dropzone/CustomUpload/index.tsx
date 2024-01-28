import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomFileUpload } from "@/Constant";
import { DropzoneType } from "@/Type/BonusUi";
import Dropzone from "react-dropzone-uploader";
import { Card, CardBody, Col, Form } from "reactstrap";

const CustomUpload = (props: DropzoneType) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={CustomFileUpload} />
        <CardBody>
          <Form>
            <div className="dz-message needsclick">
              <Dropzone getUploadParams={props.getUploadParams} onSubmit={props.handleSubmit} inputContent="Drop Files (Custom Layout)" />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CustomUpload;
