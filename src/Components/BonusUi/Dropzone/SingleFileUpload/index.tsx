import { Fragment } from "react";
import { Col, Card, CardBody, Form } from "reactstrap";
import Dropzone from "react-dropzone-uploader";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SingleFileUpload } from "@/Constant";
import { DropzoneType } from "@/Type/BonusUi";

const SingleFileUploadDropzone = (props: DropzoneType) => {
  return (
    <Fragment>
      <Col sm="12">
        <Card>
          <CommonCardHeader heading={SingleFileUpload} />
          <CardBody>
            <Form>
              <div className="dz-message needsclick">
                <Dropzone
                  getUploadParams={props.getUploadParams}
                  onChangeStatus={props.handleChangeStatus}
                  maxFiles={1}
                  multiple={false}
                  canCancel={false}
                  inputContent="Drop A File"
                  styles={{
                    dropzoneActive: { borderColor: "green" },
                  }}
                />
              </div>
            </Form>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default SingleFileUploadDropzone;
