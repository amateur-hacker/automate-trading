import { CompanyInformation, CompanyName, ContactNumber, EmailAddress, Website, YourName } from "@/Constant";
import { Form, FormGroup, Input, Label } from "reactstrap";

const AccountInformation = () => {
  return (
    <Form className="theme-form mega-form">
      <h5>Account Information</h5>
      <FormGroup>
        <Label className="col-form-label">{YourName}</Label>
        <Input className="form-control" type="text" placeholder="your Name" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{EmailAddress}</Label>
        <Input className="form-control" type="email" placeholder="Enter email" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{ContactNumber}</Label>
        <Input className="form-control" type="number" placeholder="Enter contact number" />
      </FormGroup>
      <hr className="mt-4 mb-4" />
      <h6>{CompanyInformation}</h6>
      <FormGroup>
        <Label className="col-form-label">{CompanyName}</Label>
        <Input className="form-control" type="text" placeholder="Company Name" />
      </FormGroup>
      <FormGroup>
        <Label className="col-form-label">{Website}</Label>
        <Input className="form-control" type="text" placeholder="Website" />
      </FormGroup>
    </Form>
  );
};

export default AccountInformation;
