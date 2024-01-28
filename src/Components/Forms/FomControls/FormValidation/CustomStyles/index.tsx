import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { City, CustomStyles, FirstName, LastName, State, SubmitForm, Username, Zip } from "@/Constant";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Card, CardBody, Col, Form, InputGroup, InputGroupText, Label, Row } from "reactstrap";
import CheckBox from "./CheckBox";

const CustomStyleForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data !== null) {
      alert("You submitted the form and stuff!");
    }
  };
  return (
    <Card>
      <CommonCardHeader heading={CustomStyles} />
      <CardBody>
        <Form className="needs-validation" noValidate onSubmit={handleSubmit(onSubmit)}>
          <Row className="g-2">
            <Col md="4" className="mb-3">
              <Label>{FirstName}</Label>
              <input className="form-control" type="text" placeholder="First name" {...register("firstName", { required: true })} />
              <span className="text-danger">{errors.firstName && "First name is required"}</span>
            </Col>
            <Col md="4" className="mb-3">
              <Label htmlFor="validationCustom02">{LastName}</Label>
              <input className="form-control" type="text" placeholder="Last name" {...register("Lastname", { required: true })} />
              <span className="text-danger">{errors.Lastname && "Last name is required"}</span>
            </Col>
            <Col md="4" className=" mb-3">
              <Label htmlFor="validationCustomUsername">{Username}</Label>
              <InputGroup>
                <InputGroupText>@</InputGroupText>
                <input className="form-control" type="text" placeholder="Username" {...register("Username", { required: true })} />
                <span className="text-danger">{errors.Username && "User name is required"}</span>
              </InputGroup>
            </Col>
          </Row>
          <Row className="g-2">
            <Col md="6" className=" mb-3">
              <Label htmlFor="validationCustom03">{City}</Label>
              <input className="form-control" id="validationCustom03" type="text" placeholder="City" {...register("City", { required: true })} />
              <span className="text-danger">{errors.City && "City is required"}</span>
            </Col>
            <Col md="3" className="mb-3">
              <Label htmlFor="validationCustom04">{State}</Label>
              <input className="form-control" id="validationCustom04" type="text" placeholder="State" {...register("State", { required: true })} />
              <span className="text-danger">{errors.State && "State is required"}</span>
            </Col>
            <Col md="3" className=" mb-3">
              <Label htmlFor="validationCustom05">{Zip}</Label>
              <input className="form-control" id="validationCustom05" type="text" placeholder="Zip" {...register("Zip", { required: true })} />
              <span className="text-danger">{errors.Zip && "Zip is required"}</span>
            </Col>
          </Row>
          <CheckBox />
          <Button color="primary" type="submit">
            {SubmitForm}
          </Button>
        </Form>
      </CardBody>
    </Card>
  );
};

export default CustomStyleForm;
