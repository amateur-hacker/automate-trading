import CommonCardHeader from '@/CommonComponents/CommonCardHeader';
import { AboutMe, Address, City, Company, Country, EditProfile, EmailAddress, FirstName, LastName, PostalCode, UpdateProfile, Username, UsersCountryMenu } from '@/Constant';
import { useForm } from 'react-hook-form';
import { Button, Card, CardBody, CardFooter, Col, Form, FormGroup, Input, Label, Row } from 'reactstrap';

const EditMyProfile = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onEditSubmit = () => {
    alert('Form is Submitted');
  };
  return (
    <Col xl='8'>
        <Card>
      <Form onSubmit={handleSubmit(onEditSubmit)}>
        <CommonCardHeader heading={EditProfile}/>
        <CardBody>
          <Row>
            <Col md="5">
              <FormGroup className="mb-3"> 
              <Label className="form-label">{Company}</Label>
                <input className="form-control" type="text" placeholder="Company" {...register('company', { required: true })} /><span style={{ color: 'red' }}>{errors.company && 'Company is required'} </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="3">
              <FormGroup> <Label className="form-label">{Username}</Label>
                <input className="form-control" type="text" placeholder="Username" {...register('Username', { required: true })} /><span style={{ color: 'red' }}>{errors.Username && 'Username is required'} </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="4">
              <FormGroup> <Label className="form-label">{EmailAddress}</Label>
                <input className="form-control" type="email" placeholder="Email" {...register('EmailAddress', { required: true })} /><span style={{ color: 'red' }}>{errors.EmailAddress && 'EmailAddress is required'} </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="6">
              <FormGroup><Label className="form-label">{FirstName}</Label>
                <input className="form-control" type="text" placeholder="Company" {...register('FirstName', { required: true })} /><span style={{ color: 'red' }}>{errors.FirstName && 'FirstName is required'} </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="6">
              <FormGroup><Label className="form-label">{LastName}</Label>
                <input className="form-control" type="text" placeholder="Last Name" {...register('LastName', { required: true })} /><span style={{ color: 'red' }}>{errors.LastName && 'LastName is required'} </span>
              </FormGroup>
            </Col>
            <Col md="12">
              <FormGroup><Label className="form-label">{Address}</Label>
                <input className="form-control" type="text" placeholder="Home Address" {...register('Address', { required: true })} /><span style={{ color: 'red' }}>{errors.Address && 'Address is required'} </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="4">
              <FormGroup> <Label className="form-label">{City}</Label>
                <input className="form-control" type="text" placeholder="City" {...register('City', { required: true })} /><span style={{ color: 'red' }}>{errors.City && 'City is required'} </span>
              </FormGroup>
            </Col>
            <Col sm="6" md="3">
              <FormGroup><Label className="form-label">{PostalCode}</Label>
                <Input className="form-control" type="number" placeholder="ZIP Code" />
              </FormGroup>
            </Col>
            <Col md="5">
              <FormGroup><Label className="form-label">{Country}</Label>
                <Input type="select" className=" btn-square">
                  {UsersCountryMenu.map((items, i) =>
                    <option key={i}>{items}</option>
                  )}
                </Input>
              </FormGroup>
            </Col>
            <Col md="12">
              <div> <Label className="form-label">{AboutMe}</Label>
                <Input type="textarea" className="form-control" rows="5" placeholder="Enter About your description" />
              </div>
            </Col>
          </Row>
        </CardBody>
        <CardFooter className="text-end">
          <Button  color= 'primary'>{UpdateProfile}</Button>
        </CardFooter>
      </Form>
      </Card>
      </Col>
  );
};
export default EditMyProfile;