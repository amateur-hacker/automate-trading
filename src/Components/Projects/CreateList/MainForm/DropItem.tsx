import { UploadProjectFile } from "@/Constant";
import { Fragment } from "react";
import Dropzone from "react-dropzone-uploader";
import { Col, FormGroup, Label, Row } from "reactstrap";

const DropItem = () => {
  const getUploadParams = () => {
    return {
      url: "https://httpbin.org/post",
    };
  };

  const handleChangeStatus = () => {};
  return (
    <Fragment>
      <Row>
        <Col>
          <div className="mb-3">
            <FormGroup>
              <Label>{UploadProjectFile}</Label>
              <Dropzone getUploadParams={getUploadParams} onChangeStatus={handleChangeStatus} maxFiles={1} multiple={false} canCancel={false} inputContent="Drop files here" />
            </FormGroup>
          </div>
        </Col>
      </Row>
    </Fragment>
  );
};
export default DropItem;
