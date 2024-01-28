import React from "react";
import { Button, Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Label, Media } from "reactstrap";
import { ContactUs, Email, Message, SEND_IT, YourName } from "@/Constant";
import { CommonWidgetsDropdown } from "@/Data/Widgets/General";

const ContactUsCard = () => {
  return (
    <Col sm="12" lg="6" xl="8" md="12" className="box-col-6">
      <Card>
        <CardHeader>
          <Media>
            <Media body>
              <h5>{ContactUs}</h5>
            </Media>
            {CommonWidgetsDropdown}
          </Media>
        </CardHeader>
        <CardBody className="contact-form">
          <Form className="theme-form">
            <div className="form-icon">
              <i className="icofont icofont-envelope-open"></i>
            </div>
            <FormGroup>
              <Label for="exampleInputName">{YourName}</Label>
              <Input id="exampleInputName" type="text" placeholder="John Dio" />
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label" htmlFor="exampleInputEmail1">
                {Email}
              </Label>
              <Input id="exampleInputEmail1" type="email" placeholder="Demo@gmail.com" />
            </FormGroup>
            <FormGroup>
              <Label className="col-form-label" htmlFor="exampleInputEmail1">
                {Message}
              </Label>
              <Input type="textarea" rows="3" cols="50" placeholder="Your Message"></Input>
            </FormGroup>
            <div className="text-sm-end">
              <Button color="primary" type="reset">
                {SEND_IT}
              </Button>
            </div>
          </Form>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ContactUsCard;
