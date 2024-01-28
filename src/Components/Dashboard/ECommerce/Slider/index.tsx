import { ImagePath } from "@/Constant";
import Image from "next/image";
import Slider from "react-slick";
import { Card, CardBody, Col, Row } from "reactstrap";
import CountdownData from "./Countdown";

const Sliders = () => {
  const SliderRepeat = [1, 2, 3];
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Col xl="5" md="6" className="dash-lgorder-1 dash-xl-50 dash-39 box-col-6">
      <Card className="special-discount">
        <CardBody>
          <Slider {...settings}>
            {SliderRepeat.map((item) => (
              <div key={item} className="item">
                <Row className="discount-block">
                  <Col xl="7" lg="12" className="dash-xl-100 box-col-12">
                    <div className="discount-detail">
                      <div>
                        <h5>
                          Special Discount <span className="font-primary f-w-500">70%OFF</span>
                        </h5>
                        <h3 className="m-auto">
                          Deal of the Day from <span className="font-primary">$75</span>
                        </h3>
                        <CountdownData />
                      </div>
                    </div>
                  </Col>
                  <Col xl="5" lg="12" className="dash-xl-100 box-col-12">
                    <div className="img-wrraper">
                      <Image height={200} width={200} className="img-fluid" src={`${ImagePath}/dashboard-2/image.png`} alt="" />
                    </div>
                  </Col>
                </Row>
              </div>
            ))}
          </Slider>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Sliders;
