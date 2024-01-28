import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MultiImageUpload } from "@/Constant";
import { DropzoneType } from "@/Type/BonusUi";
import Dropzone from "react-dropzone-uploader";
import { ToastContainer } from "react-toastify";
import { Card, CardBody, Col, Form } from "reactstrap";

const MultiOnlyImageUpload = (props: DropzoneType) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={MultiImageUpload} />
        <CardBody>
          <Form>
            <ToastContainer />
            <div className="dz-message needsclick">
              <Dropzone getUploadParams={props.getUploadParams} onChangeStatus={props.handleChangeStatus} onSubmit={props.handleSubmit} accept="image/*" />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MultiOnlyImageUpload;
