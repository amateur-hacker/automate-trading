import { CarouselsData } from "@/Data/BonusUi/Carousel";
import Image from "next/image";
import React from "react";
import { CardBody, Card, CardHeader, Media } from "reactstrap";
import Slider from "react-slick";
import { SlickSliderProps } from "@/Type/BonusUi";

export const SlickSlider = ({ slides, rtl, title, lazyLoad, autoplay, focusOnSelect }: SlickSliderProps) => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: autoplay,
    speed: 100,
    arrows: false,
    slidesToShow: slides,
    slidesToScroll: 1,
    adaptiveHeight: true,
    autoPlay: true,
    centerPadding: "10px",
    centerMode: false,
    rtl: rtl,
    focusOnSelect: focusOnSelect,
    lazyLoad: lazyLoad,
    responsive: [
      {
        breakpoint: 1400,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
        },
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Card>
      <CardHeader className="pb-0">
        <h5>{title}</h5>
      </CardHeader>
      <CardBody>
        <Slider {...settings}>
          {CarouselsData.map((item) => (
            <Media className="item" key={item.id}>
              <Image height={280} width={400} src={`${item.img}`} alt="" className="img-fluid" />
            </Media>
          ))}
        </Slider>
      </CardBody>
    </Card>
  );
};

export default SlickSlider;
