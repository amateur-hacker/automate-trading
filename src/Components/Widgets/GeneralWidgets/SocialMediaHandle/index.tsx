import React from "react";
import { Card, CardBody, CardFooter, Col, Media, Row } from "reactstrap";
import { ImagePath, Likes, Posts } from "@/Constant";
import Image from "next/image";
import { SocialHandelData } from "@/Data/Widgets/General";

const SocialMediaHandle = () => {
  return (
    <>
      {SocialHandelData.map((item, i) => {
        return (
          <Col sm="6" xl="3" lg="6" className=" box-col-6" key={i}>
            <Card className="social-widget-card">
              <CardBody>
                <Media>
                  <div className="social-font">
                    <Image height={30} width={30} src={`${ImagePath}/svg-icon/${item.image}.svg`} alt="social-media" />
                  </div>
                  <Media body>
                    <h4>{item.title}</h4>
                  </Media>
                </Media>
              </CardBody>
              <CardFooter>
                <Row>
                  <Col className="text-center">
                    <h6 className="font-roboto"> {Posts}</h6>
                    <h5 className="counter mb-0 font-roboto font-primary mt-2"> 6589</h5>
                  </Col>
                  <Col className=" text-center">
                    <h6 className="font-roboto"> {Likes}</h6>
                    <h5 className="counter mb-0 font-roboto font-primary mt-2"> 6589</h5>
                  </Col>
                </Row>
              </CardFooter>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default SocialMediaHandle;
