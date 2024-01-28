import CKEditor from "react-ckeditor-component";
import Dropzone from "react-dropzone-uploader";
import { Button, Card, Form, FormGroup, Input, Label } from "reactstrap";

const NewMessage = () => {
  const getUploadParams = () => {
    return {
      url: "https://httpbin.org/post",
    };
  };
  const handleChangeStatus = () => {};
  return (
    <div className="email-right-aside">
      <Card className="email-body">
        <div className="email-profile">
          <div className="email-body">
            <div className="email-compose">
              <div className="email-top compose-border">
                <div className="compose-header">
                  <h4 className="mb-0">New Message</h4>
                  <Button color="primary">
                    <i className="fa fa-file me-2"></i> save
                  </Button>
                </div>
              </div>
              <div className="email-wrapper">
                <Form className="theme-form">
                  <FormGroup>
                    <Label className="col-form-label pt-0">To</Label>
                    <Input id="exampleInputEmail1" type="email" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">Subject</Label>
                    <Input id="exampleInputPassword1" type="text" />
                  </FormGroup>
                  <FormGroup>
                    <Label className="col-form-label pt-0">Messages</Label>
                    <CKEditor activeClassName="p10" />
                  </FormGroup>
                  <FormGroup className="dropzone digits text-center">
                    <Dropzone getUploadParams={getUploadParams} onChangeStatus={handleChangeStatus} maxFiles={1} multiple={false} canCancel={false} inputContent="Drop files here or click to upload." />
                  </FormGroup>
                </Form>
                <div className="action-wrapper">
                  <ul className="simple-list actions d-flex flex-row">
                    <li>
                      <Button color="secondary">
                        <i className="fa fa-paper-plane me-2"></i>Send
                      </Button>
                    </li>
                    <li>
                      <Button color="danger">
                        <i className="fa fa-times me-2"></i>Cancel
                      </Button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
export default NewMessage;
