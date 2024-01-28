import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LimitationFileUpload } from "@/Constant";
import { DropzoneType } from "@/Type/BonusUi";
import Dropzone from "react-dropzone-uploader";
import { Card, CardBody, Col, Form } from "reactstrap";

const LimitationUpload = (props: DropzoneType) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={LimitationFileUpload} />
        <CardBody>
          <Form>
            <div className="dz-message needsclick">
              <Dropzone onChangeStatus={props.handleChangeStatus} onSubmit={props.handleSubmit} maxFiles={3} inputContent="Drop 3 Files" inputWithFilesContent={(files) => `${3 - files.length} more`} submitButtonDisabled={(files) => files.length < 3} />
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LimitationUpload;
