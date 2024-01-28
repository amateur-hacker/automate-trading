import { AddContacts, Cancel, Email, ImagePath, LastName, Mobile, Name, NewContacts, Other, Phone, Save, Work } from "@/Constant";
import { Fragment, useState } from "react";
import { Users } from "react-feather";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Modal, ModalBody, Row } from "reactstrap";

const CreateContact = () => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const AddContact = (data:undefined|any) => {
    if (data !== undefined) {
      dispatch({ type: "createUser", payload: { data, defaultuser: `${ImagePath}/user/user.png` } });
      setModal(false);
    }
  };
  return (
    <Fragment>
      <Button className="badge-light-primary d-block w-100 btn-mail" color="primary" onClick={toggle}>
        <Users className="me-2" />
        {NewContacts}
      </Button>
      <Modal isOpen={modal} toggle={toggle} size="lg">
        <div className="modal-header">
          <h5 className="modal-title">{AddContacts}</h5>
          <Button color="transprant" className="btn-close" onClick={toggle} type="button"></Button>
        </div>
        <ModalBody>
          <Form className="form-bookmark needs-validation" onSubmit={handleSubmit(AddContact)}>
            <div className="form-row">
              <Col md="12">
                <FormGroup>
                  <Row>
                    <Col sm="6">
                      <Label>{Name}</Label>
                      <input className="form-control" type="text" {...register("name", { required: true })} />
                      <span style={{ color: "red" }}>{errors.name && "First name is required"}</span>
                    </Col>
                    <Col sm="6">
                      <Label>{LastName}</Label>
                      <input className="form-control" type="text" {...register("surname", { required: true })} />
                      <span style={{ color: "red" }}>{errors.surname && "Last name is required"}</span>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Label>{Email}</Label>
                  <input className="form-control" type="text" {...register("email", { required: true })} />
                  <span style={{ color: "red" }}>{errors.email && "Please enter email."}</span>
                </FormGroup>
              </Col>
              <Col md="12">
                <FormGroup>
                  <Row>
                    <Col sm="6">
                      <Label>{Phone}</Label>
                      <input className="form-control" type="number" {...register("mobile", { required: true })} />
                      <span style={{ color: "red" }}>{errors.mobile && "Please enter number max 9 digit"}</span>
                    </Col>
                    <Col sm="6">
                      <Label>{Mobile}</Label>
                      <Input type="select" >
                        <option value="1">{Mobile}</option>
                        <option value="2">{Work}</option>
                        <option value="3">{Other}</option>
                      </Input>
                    </Col>
                  </Row>
                </FormGroup>
              </Col>
            </div>
            <Button color="secondary" className="me-1" type="submit">
              {Save}
            </Button>
            &nbsp;
            <Button color="primary" onClick={toggle}>
              {Cancel}
            </Button>
          </Form>
        </ModalBody>
      </Modal>
    </Fragment>
  );
};
export default CreateContact;
