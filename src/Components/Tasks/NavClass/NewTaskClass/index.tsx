import {
  AddTask,
  Cancel,
  Collection,
  Description,
  General,
  NewTask,
  Save,
  TaskTitle,
} from "@/Constant";
import { useState } from "react";
import { CheckCircle } from "react-feather";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  Label,
  Modal,
  ModalBody,
  Row,
} from "reactstrap";

const NewTaskClass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [addModal, setAddModal] = useState(false);
  const addToggle = () => {
    setAddModal(!addModal);
  };
  const dispatch = useDispatch();

  const AddTasks = (data: any) => {
    console.log(data, "data");
    if (data !== "") {
      dispatch({ type: "AddNewTask", payload: data });
      setAddModal(false);
    }
  };

  return (
    <>
      <Button
        color="primary"
        className="badge-light btn-block btn-mail w-100"
        onClick={addToggle}
      >
        <CheckCircle className="me-2" /> Add Api
      </Button>
      <Modal isOpen={addModal} toggle={addToggle} size="lg">
        <div className="modal-header">
          <h5 className="modal-title">{AddTask}</h5>
          <Button
            color="transprant"
            className="btn-close"
            onClick={addToggle}
          ></Button>
        </div>
        <ModalBody>
          <Form
            className="form-bookmark needs-validation"
            onSubmit={handleSubmit(AddTasks)}
          >
            <Row>
              <Col md="12">
                <FormGroup>
                  <Label>{TaskTitle}</Label>
                  <input
                    className="form-control"
                    type="text"
                    {...register("title", { required: true })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.title && "Title is required"}
                  </span>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>{Collection}</Label>
                  <Input
                    className="js-example-disabled-results form-select"
                    name="collection"
                    type="select"
                  >
                    <option value="general">{General}</option>
                    <option value="fs">{"Fs"}</option>
                  </Input>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>{Description}</Label>
                  <input
                    className="form-control"
                    type="textarea"
                    {...register("desc", { required: true })}
                  />
                  <span style={{ color: "red" }}>
                    {errors.desc && "Description is required"}
                  </span>
                </FormGroup>
              </Col>
            </Row>
            <Button color="secondary" className="me-1">
              {Save}
            </Button>
            &nbsp;&nbsp;
            <Button color="primary" onClick={addToggle}>
              {Cancel}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </>
  );
};
export default NewTaskClass;
