import { BirthDate, Email, FullName, Password, PersonalDetails, PhoneNumber, RepeatPassword } from "@/Constant";
import { Days, Months, Years } from "@/Data/JobSearch";
import { Fragment, useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const PersonalDetail = () => {
  const [multiple, setMultiple] = useState(false);
  return (
    <Fragment>
      <h6 className="mb-0">{PersonalDetails}</h6>
      <Form className="theme-form">
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput1">
                {FullName}:<span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlInput1" type="email" placeholder="Enter your full name" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput3">
                {Email}:<span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlInput3" type="email" placeholder="Enter email" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlpassword">
                {Password}:<span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlpassword" type="password" placeholder="Enter password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlpassword1">
                {RepeatPassword}:<span className="font-danger">*</span>
              </Label>
              <Input className="form-control" id="exampleFormControlpassword1" type="password" placeholder="Repeat password" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="4">
            <div className="col-form-label pt-0">{BirthDate}</div>
            <FormGroup>
              <Typeahead id="basic-typeahead" labelKey="name" multiple={multiple} options={Months} placeholder="Choose a Month..." />
            </FormGroup>
          </Col>
          <Col sm="4">
            <div className="col-form-label m-2 d-sm-block d-none"></div>
            <FormGroup className="select-no-label">
              <Typeahead id="basic-typeahead" labelKey="name" multiple={multiple} options={Days} placeholder="date" />
            </FormGroup>
          </Col>
          <Col sm="4">
            <div className="col-form-label m-2 d-sm-block d-none"></div>
            <FormGroup className="select-no-label">
              <Typeahead id="basic-typeahead" labelKey="name" multiple={multiple} options={Years} placeholder="Year" />
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col>
            <FormGroup>
              <Label htmlFor="exampleFormControlInput4">{PhoneNumber}:</Label>
              <Input className="form-control" id="exampleFormControlInput4" type="email" placeholder="Enter Phone no." />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </Fragment>
  );
};

export default PersonalDetail;
