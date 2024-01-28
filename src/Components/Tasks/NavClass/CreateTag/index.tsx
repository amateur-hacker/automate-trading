import { Cancel, Save } from "@/Constant";
import { CreateTagProps } from "@/Type/Tasks";
import { useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Label, Modal, ModalBody } from "reactstrap";

const CreateTag = ({ tagCallback, tagModal }: CreateTagProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const tagToggle = () => {
    tagCallback(false);
  };
  const AddTag = () => {};
  return (
    <Modal className="fade show modal-bookmark" isOpen={tagModal} toggle={tagToggle} size="lg">
      <div className="modal-header">
        <h5 className="modal-title">{"Create Tag"}</h5>
        <Button color="transprant" className="btn-close" onClick={tagToggle}></Button>
      </div>
      <ModalBody>
        <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddTag)}>
          <div className="form-row">
            <Col md='12'>
            <FormGroup >
              <Label>{"Tag Name"}</Label>
              <input className="form-control" type="text" {...register("name", { required: true })} />
              <span style={{ color: "red" }}>{errors.name && "First name is required"}</span>
            </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup className="mb-0">
                <Label>{"Tag color"}</Label>
                <input className="form-control fill-color" type="color" {...register("color", { required: true })} defaultValue="#655af3" />
              </FormGroup>
            </Col>
          </div>
          <Button color="secondary">{Save}</Button>&nbsp;&nbsp;
          <Button color="primary" onClick={tagToggle}>
            {Cancel}
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
export default CreateTag;
