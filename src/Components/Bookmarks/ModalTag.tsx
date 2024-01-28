import { Cancel, Save } from "@/Constant";
import { ModalTagProps } from "@/Type/Bookmarks";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader } from "reactstrap";

const ModalTag = ({ tagToggle, value }: ModalTagProps) => {
  return (
    <Modal className="fade show modal-bookmark" size="lg" isOpen={value} toggle={tagToggle}>
      <ModalHeader className="modal-title" toggle={tagToggle}>
        {"Create Tag"}
      </ModalHeader>
      <ModalBody>
        <Form className="form-bookmark needs-validation">
          <div className="form-row">
            <Col md="12">
              <FormGroup>
                <Label>{"Tag Name"}</Label>
                <Input type="text" />
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup className="mb-0">
                <Label>{"Tag color"}</Label>
                <Input type="color" className="fill-color form-control" defaultValue="#655af3" />
              </FormGroup>
            </Col>
          </div>
          <Button color="secondary" onClick={tagToggle}>
            {Save}
          </Button>
          &nbsp;&nbsp;
          <Button color="primary" onClick={tagToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default ModalTag;
