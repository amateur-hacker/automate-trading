import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import PricingCards from "./PricingCard";
import SimplePricingCards from "./SimplePricingCard";

const Pricing = () => {
  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Pricing" />
      <Container fluid>
        <Row>
          <SimplePricingCards />
          <PricingCards />
        </Row>
      </Container>
    </>
  );
};

export default Pricing;
