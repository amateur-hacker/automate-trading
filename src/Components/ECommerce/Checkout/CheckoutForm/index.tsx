import { Address, CheckMeOut, Country, CountryMenu, EmailAddress, FirstName, LastName, Phone, PlaceOrder, PostalCode, StateCountry, TownCity } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { CheckoutTableDataType } from "@/Type/ECommerce";
import { useRouter } from "next/navigation";
import { SubmitHandler, useForm } from "react-hook-form";
import { Button, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";

const CheckoutForm = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CheckoutTableDataType>();

  const onSubmit: SubmitHandler<CheckoutTableDataType> = async (data) => {
    router.push(`/${i18LangStatus}/ecommerce/invoice`);
  };

  return (
    <Col xl="6" sm="12">
      <Form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label>{FirstName}</Label>
              <input type="text" className="form-control" {...register("firstName", { required: true })} />
              <span style={{ color: "#ff5370" }}>{errors.firstName && "First name is required"}</span>
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label>{LastName}</Label>
              <input type="text" className="form-control" {...register("lastName", { required: true })} />
              <span style={{ color: "#ff5370" }}>{errors.lastName && "Last name is required"}</span>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col sm="6">
            <FormGroup>
              <Label>{Phone}</Label>
              <input type="number" className="form-control" {...register("phone", { required: true })} />
              <span style={{ color: "#ff5370" }}>{errors.phone && "Please enter number for phone."}</span>
            </FormGroup>
          </Col>
          <Col sm="6">
            <FormGroup>
              <Label>{EmailAddress}</Label>
              <input type="text" className="form-control" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
              <span style={{ color: "#ff5370" }}>{errors.email && "Please enter proper email address ."}</span>
            </FormGroup>
          </Col>
        </Row>
        <FormGroup>
          <Label>{Country}</Label>
          <Input type="select">
            {CountryMenu.map((items, i) => (
              <option key={i}>{items}</option>
            ))}
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="inputAddress5">{Address}</Label>
          <input type="text" className="form-control" {...register("address", { required: true, min: 20, max: 120 })} />
          <span style={{ color: "#ff5370" }}>{errors.address && "Please right your address ."}</span>
        </FormGroup>
        <FormGroup>
          <Label for="inputCity">{TownCity}</Label>
          <input type="text" className="form-control" {...register("city", { required: true })} />
          <span style={{ color: "#ff5370" }}>{errors.city && "select one city"}</span>
        </FormGroup>
        <FormGroup>
          <Label for="inputAddress2">{StateCountry}</Label>
          <input type="text" className="form-control" {...register("state", { required: true })} />
          <span style={{ color: "#ff5370" }}>{errors.state && "select one state"}</span>
        </FormGroup>
        <FormGroup>
          <Label for="inputAddress6">{PostalCode}</Label>
          <input type="text" className="form-control" {...register("pincode", { pattern: /\d+/ })} />
          <span style={{ color: "#ff5370" }}>{errors.pincode && "Required integer"}</span>
        </FormGroup>
        <FormGroup>
          <div className="form-check">
            <Input type="checkbox" className="form-check-input" />
            <Label>{CheckMeOut}</Label>
          </div>
        </FormGroup>
        <div className="text-end order-place">
          <Button type="submit" color="primary">
            {PlaceOrder}
          </Button>
        </div>
      </Form>
    </Col>
  );
};
export default CheckoutForm;
