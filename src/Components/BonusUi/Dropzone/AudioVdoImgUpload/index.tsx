import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultipleImageVideoAudioUpload } from "@/Constant";
import { DropzoneType } from "@/Type/BonusUi";
import Dropzone from "react-dropzone-uploader";
import { Card, CardBody, Col, Form } from "reactstrap";

const MultiVideoImageAudioUpload = (props: DropzoneType) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={MultipleImageVideoAudioUpload} />
        <CardBody>
          <Form>
            <div className="dz-message needsclick">
              <Dropzone getUploadParams={props.getUploadParams} onChangeStatus={props.handleChangeStatus} onSubmit={props.handleSubmit} accept="image/*,audio/*,video/*" />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiVideoImageAudioUpload;
