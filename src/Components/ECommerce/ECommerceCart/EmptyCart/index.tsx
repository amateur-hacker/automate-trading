import { CartEmpty, ExploreShortlistItems } from "@/Constant";
import { Col, Container, Row } from "reactstrap";

const EmptyCart = () => {
  return (
    <section className="cart-section section-b-space">
      <Container fluid>
        <Row>
          <Col sm="12">
            <div>
              <Col sm="12" className="empty-cart-cls text-center">
                <h3>
                  <strong>{CartEmpty}</strong>
                </h3>
                <h4>{ExploreShortlistItems}</h4>
              </Col>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default EmptyCart;
