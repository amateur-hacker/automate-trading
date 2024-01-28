import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Card, CardBody, CardHeader, Col, Container, Row } from "reactstrap";
import CheckoutForm from "./CheckoutForm";
import { BillingDetails } from "@/Constant";
import ProductPlaceOrder from "./ProductPlaceOrder";

const Checkout = () => {
  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Checkout" />
      <Container fluid>
        <Row>
          <Col>
            <Card className="checkout">
              <CardHeader className="pb-0">
                <h5>{BillingDetails}</h5>
              </CardHeader>
              <CardBody>
                <Row>
                  <CheckoutForm />
                  <ProductPlaceOrder />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Checkout;
