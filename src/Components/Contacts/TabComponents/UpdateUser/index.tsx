import { Cancel, Email, ImagePath, Mobile, Name, Other, Phone, Save, Work } from "@/Constant";
import { UpdateUserProps } from "@/Type/Contacts";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const UpdateUser = ({ editData, userEditCallback }: UpdateUserProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const UpdateContact = (updatedData: any) => {
    let withImageData = { ...updatedData, avatar: `${ImagePath}/user/user.png` };
    userEditCallback(false, withImageData);
    dispatch({ type: "setEditData", payload: withImageData });
    alert("Contact Update successfully");
  };
  return (
    <div className="contact-editform ps-0 m-auto">
      <Form onSubmit={handleSubmit(UpdateContact)}>
        <Row>
          <Col md="12">
            <FormGroup>
              <Label>{Name}</Label>
              <Row>
                <Col sm="6">
                  <input className="form-control" type="text" defaultValue={editData?.name} {...register("name", { required: true })} />
                  <span style={{ color: "red" }}>{errors.name && "First name is required"}</span>
                </Col>
                <Col sm="6">
                  <input className="form-control" type="text" defaultValue={editData.surname} {...register("surname", { required: true })} />
                  <span style={{ color: "red" }}>{errors.surname && "Last name is required"}</span>
                </Col>
              </Row>
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup>
              <Label>{Email}</Label>
              <input className="form-control" type="text" defaultValue={editData.email} {...register("email", { required: true })} />
              <span style={{ color: "red" }}>{errors.email && "Please enter email between 18 to 70 year."}</span>
            </FormGroup>
          </Col>
          <Col md="12">
            <FormGroup className="mb-3 my-0">
              <Row>
                <Col sm="6">
                  <Label htmlFor="con-phone">{Phone}</Label>
                  <input className="form-control" type="number" defaultValue={editData.mobile} {...register("mobile", { required: true })} />
                  <span style={{ color: "red" }}>{errors.mobile && "Please enter Mobile no."}</span>
                </Col>
                <Col sm="6">
                  <Label htmlFor="con-phone">{Mobile}</Label>
                  <Input type="select" className="form-control">
                    <option value="1">{Mobile}</option>
                    <option value="2">{Work}</option>
                    <option value="3">{Other}</option>
                  </Input>
                </Col>
              </Row>
            </FormGroup>
          </Col>
        </Row>
        <Button color="secondary" className="update-contact me-1">
          {Save}
        </Button>
        &nbsp;&nbsp;
        <Button color="primary" onClick={() => userEditCallback(false, editData)}>
          {Cancel}
        </Button>
      </Form>
    </div>
  );
};

export default UpdateUser;
