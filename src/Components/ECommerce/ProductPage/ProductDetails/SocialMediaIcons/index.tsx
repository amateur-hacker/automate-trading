import { Href } from "@/Constant";
import { Col, Form, Row } from "reactstrap";

const SocialMediaIcons = () => {
  return (
    <div className="pro-group">
      <Row>
        <Col md="4" className="xl-50">
          <h6 className="product-title">{"share it"}</h6>
        </Col>
        <Col md="7" className="xl-50">
          <div className="product-icon">
            <ul className="flex-row simple-list d-flex product-social">
              <li className="d-inline-block">
                <a href={Href}>
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li className="d-inline-block">
                <a href={Href}>
                  <i className="fa fa-google-plus"></i>
                </a>
              </li>
              <li className="d-inline-block">
                <a href={Href}>
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
              <li className="d-inline-block">
                <a href={Href}>
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li className="d-inline-block">
                <a href={Href}>
                  <i className="fa fa-rss"></i>
                </a>
              </li>
            </ul>
            <Form className="d-inline-block f-right"></Form>
          </div>
        </Col>
      </Row>
    </div>
  );
};
export default SocialMediaIcons;
