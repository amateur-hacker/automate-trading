import { City, FirstName, LastName, State, StateError, SubmitForm, TermsAndConditions, Username, ValidFeedBack, Zip, ZipError } from "@/Constant";
import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Input, InputGroup, InputGroupText, Label, Row } from "reactstrap";

const ToolTipForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [validateClass, setValidateClass] = useState(false);
  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (data !== null) {
      alert("You submitted the form and stuff!");
    }
  };
  return (
    <Form className={`needs-validation tooltip-validation ${validateClass && "validateClass "}`} noValidate onSubmit={handleSubmit(onSubmit)}>
      <Row>
        <Col md="4 mb-3">
          <Label>{FirstName}</Label>
          <Input className=" has-validation" type="text" placeholder="First name" {...register("firstName", { required: true })} />
          {errors.firstName && <span className="invalid-tooltip">{"First name is required"}</span>}
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md="4 mb-3">
          <Label>{LastName}</Label>
          <Input type="text" placeholder="Last name" {...register("lastName", { required: true })} />
          <span>{errors.lastName && "Last name is required"}</span>
          <div className="valid-feedback">{ValidFeedBack}</div>
        </Col>
        <Col md="4 mb-3">
          <Label>{Username}</Label>
          <InputGroup>
            <InputGroupText>@</InputGroupText>
            <Input type="text" placeholder="Username" {...register("userName", { required: true })} />
            <span className="invalid-tooltip">{errors.lastName && "User name is required"}</span>
            <div className="invalid-feedback">{"User name is required"}</div>
          </InputGroup>
        </Col>
      </Row>
      <Row>
        <Col md="6 mb-3">
          <Label>{City}</Label>
          <Input type="text" placeholder="City" {...register("city", { required: true })} />
          <span>{errors.city && "Please provide a valid city"}</span>
          <div className="invalid-feedback">dkjfnhjsz</div>
        </Col>
        <Col md="3 mb-3">
          <Label>{State}</Label>
          <Input type="text" placeholder="State" {...register("state", { required: true })} />
          <span>{errors.state && "Please provide a valid state."}</span>
          <div className="invalid-feedback">{StateError}</div>
        </Col>
        <Col md="3 mb-3">
          <Label>{Zip}</Label>
          <Input type="text" placeholder="Zip" {...register("zip", { required: true })} />
          <span>{errors.zip && "Please provide a valid zip."}</span>
          <div className="invalid-feedback">{ZipError}</div>
        </Col>
      </Row>
      <FormGroup>
        <div className="form-check">
          <div className="checkbox p-0">
            <Input className="form-check-input " id="invalidCheck3" type="checkbox" />
            <Label className="form-check-label" htmlFor="invalidCheck3">
              {TermsAndConditions}
            </Label>
          </div>
        </div>
      </FormGroup>
      <Button color="primary" type="submit" onClick={() => setValidateClass(!validateClass)}>
        {SubmitForm}
      </Button>
    </Form>
  );
};
export default ToolTipForm;
