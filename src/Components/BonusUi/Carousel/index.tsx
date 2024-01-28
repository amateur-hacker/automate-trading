import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Col, Container, Row } from "reactstrap";
import SlickSlider from "./SlickSlider";

const Carousel = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Carousel" parent="Bonus Ui" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <SlickSlider slides={5} title="Basic Example" lazyLoad={true} />

            <SlickSlider slides={3} title="Responsive Example" lazyLoad={true} />

            <SlickSlider slides={3} title="Center Example" lazyLoad={true} />

            <SlickSlider slides={3} title="Right to Left Example" rtl={true}  />

            <SlickSlider slides={3} title="Lazy load Example" lazyLoad={true} />

            <SlickSlider slides={3} title="Auto Play Example" lazyLoad={true} autoplay={true} />

            <SlickSlider slides={3} title="Focus On Select" lazyLoad={true} focusOnSelect={true} />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Carousel;
