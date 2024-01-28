import { CollegeName, DegreeLevel, Period, Specialization, YourEducation } from "@/Constant";
import { useState } from "react";
import { Typeahead } from "react-bootstrap-typeahead";
import DatePicker from "react-datepicker";
import { Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const EducationDetails = () => {
  const [multiple, setMultiple] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [startDate1, setStartDate1] = useState(new Date());
  const handleChange = (date: Date) => {
    setStartDate(date);
  };
  const handleChange1 = (date: Date) => {
    setStartDate1(date);
  };

  return (
    <>
      <h6 className="mb-0">{YourEducation}</h6>
      <Form className="theme-form">
        <Row>
          <Col xl="6 xl-100">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput5">
                {CollegeName}:<span className="font-danger">*</span>
              </Label>
              <Input id="exampleFormControlInput5" type="email" placeholder="Enter college name" />
            </FormGroup>
          </Col>
          <Col xl="6 xl-100">
            <Label className="col-form-label text-end pt-0">
              {Period}:<span className="font-danger">*</span>
            </Label>
            <Row>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control digits" selected={startDate} onChange={handleChange} />
                </FormGroup>
              </Col>
              <Col sm="6">
                <FormGroup>
                  <DatePicker className="form-control digits" selected={startDate1} onChange={handleChange1} />
                </FormGroup>
              </Col>
            </Row>
          </Col>
          <Col lg="6">
            <div className="col-form-label pt-0">
              {DegreeLevel}:<span className="font-danger">*</span>
            </div>
            <FormGroup>
              <Typeahead id="basic-typeahead" labelKey="name" multiple={multiple} options={["Student", "Bachelor", "Master", "Associate"]} placeholder="Degree" />
            </FormGroup>
          </Col>
          <Col lg="6">
            <FormGroup>
              <Label htmlFor="exampleFormControlInput6">
                {Specialization}:<span className="font-danger">*</span>
              </Label>
              <Input id="exampleFormControlInput6" type="email" placeholder="Enter specialization" />
            </FormGroup>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default EducationDetails;
