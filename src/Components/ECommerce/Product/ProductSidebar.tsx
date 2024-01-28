import { setSearchInput } from "@/Redux/Slices/ECommerceSlice";
import { toggleSidebar } from "@/Redux/Slices/FilterSlice";
import { useDispatch } from "react-redux";
import { Card, CardBody, CardHeader, Col, Form, FormGroup, Input, Row } from "reactstrap";
import Category from "../Filters";

const ProductSidebar = () => {
  const dispatch = useDispatch();
  const handleSearchChange = (e: { target: { value: string } }) => {
    dispatch(setSearchInput(e.target.value));
  };
  return (
    <Row>
      <Col xl="3" sm="12">
        <div className={`product-sidebar`}>
          <div className="filter-section">
            <Card>
              <CardHeader>
                <h6
                  className="mb-0 f-w-600"
                  onClick={() => {
                    dispatch(toggleSidebar());
                  }}
                >
                  Filters
                  <span className="pull-right">
                    <i className="fa fa-chevron-down toggle-data" onClick={() => {}}></i>
                  </span>
                </h6>
              </CardHeader>
              <div className="left-filter">
                <CardBody className="filter-cards-view animate-chk">
                  <Category />
                  <div className="product-filter text-center mt-2"></div>
                </CardBody>
              </div>
            </Card>
          </div>
        </div>
      </Col>
      <Col xl="9" sm="12">
        <div className="product-search">
          <Form>
            <FormGroup className="form-group m-0">
              <Input type="text" placeholder="Search.." onChange={handleSearchChange} />
              <i className="fa fa-search"></i>
            </FormGroup>
          </Form>
        </div>
      </Col>
    </Row>
  );
};
export default ProductSidebar;
