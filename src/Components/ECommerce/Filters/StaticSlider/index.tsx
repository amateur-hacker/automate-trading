import { FancyShirt, FancyShirtPrice, ImagePath, NewProducts } from "@/Constant";
import Image from "next/image";
import Slider from "react-slick";
import { Col, Row } from "reactstrap";

const SliderData = () => {
  var settings = {
    slidesToShow: 1,
    swipeToSlide: false,
    arrows: false,
    dots: false,
  };
  const star = (
    <span>
      <i className="fa fa-star font-warning me-1"></i>
      <i className="fa fa-star font-warning me-1"></i>
      <i className="fa fa-star font-warning me-1"></i>
      <i className="fa fa-star font-warning me-1"></i>
      <i className="fa fa-star font-warning"></i>
    </span>
  );
  return (
    <div className="item">
      <Row className="product-box">
        <Col md="6" className="product-img me-3">
          <Image height={100} width={100} className="img-fluid" src={`${ImagePath}/ecommerce/01.jpg`} alt="" />
        </Col>
        <Col md="6" className="product-details text-start">
          {star}
          <p className="mb-0">{FancyShirt}</p>
          <div className="product-price">{FancyShirtPrice}</div>
        </Col>
      </Row>
      <Row className="product-box">
        <Col md="6" className="product-img me-3">
          <Image height={100} width={100} className="img-fluid" src={`${ImagePath}/ecommerce/02.jpg`} alt="" />
        </Col>
        <Col md="6" className="product-details text-start">
          {star}
          <p className="mb-0">{FancyShirt}</p>
          <div className="product-price">{FancyShirtPrice}</div>
        </Col>
      </Row>
      <Row className="product-box">
        <Col md="6" className="product-img me-3">
          <Image height={100} width={100} className="img-fluid" src={`${ImagePath}/ecommerce/03.jpg`} alt="" />
        </Col>
        <Col md="6" className="product-details text-start">
          {star}
          <p className="mb-0">{FancyShirt}</p>
          <div className="product-price">{FancyShirtPrice}</div>
        </Col>
      </Row>
    </div>
  );
};

const StaticSlider = () => {
  var settings = {
    slidesToShow: 1,
    swipeToSlide: false,
    arrows: false,
    dots: false,
  };
  return(
<div className="product-filter pb-0 new-products">
    <h6 className="f-w-600">{NewProducts}</h6>
    <div className="owl-carousel owl-theme" id="testimonial">
      <Slider {...settings}>
        <SliderData  />
        <SliderData  />
      </Slider>
    </div>
  </div>
  )
};
export default StaticSlider
