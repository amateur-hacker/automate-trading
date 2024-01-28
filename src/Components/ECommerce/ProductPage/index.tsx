import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import BrandShipping from "./BrandShipping";
import ClothsDetails from "./ClothDetails";
import ImageSlider from "./ImageSlider";
import ProductDetails from "./ProductDetails";

const ProductPage = () => {
  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Products Page" />
      <Container fluid>
        <div>
          <Row className="product-page-main p-0">
            <Col xl="5" md="6" className="box-col-12">
              <Card>
                <CardBody>
                  <Row>
                    <ImageSlider />
                  </Row>
                </CardBody>
              </Card>
            </Col>
            <ProductDetails />
            <BrandShipping />
          </Row>
        </div>
        <Card>
          <Row className="product-page-main">
            <Col sm="12">
              <ClothsDetails />
            </Col>
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default ProductPage;
