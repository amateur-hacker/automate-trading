import React, { Fragment } from "react";
import CountUp from "react-countup";
import { Card, CardFooter, Col, Row } from "reactstrap";
import { Follower, Following, JohnCarter, Manager, TotalPost } from "@/Constant";
import { SocialMediaImageData } from "@/Data/Widgets/General";
import { Href, ImagePath } from "@/Constant";
import Image from "next/image";

const ManagerProfile = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="box-col-6  dash-lg-50">
        <Card className="custom-profile">
          <div className="pb-0">
            <div className="card-profile">
              <Image className="user-img" height={170} width={120} src={`${ImagePath}/other-images/user-profile.png`} alt="" />
            </div>
            <div className="text-center profile-details">
              <h4>{JohnCarter}</h4>
              <h6>{Manager}</h6>
            </div>
            <ul className="simple-list card-social flex-row">
              {SocialMediaImageData.map((item, i) => (
                <li key={i}>
                  <a className="social-link" href={Href}>
                    <Image height={50} width={50} className="user-img" src={`${ImagePath}/svg-icon/${item}.svg`} alt="" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <CardFooter>
            <Row>
              <Col sm="4">
                <h6>{Follower}</h6>
                <h5>
                  <CountUp className="counter" end={9564} />
                </h5>
              </Col>
              <Col sm="4">
                <h6>{Following}</h6>
                <h5>
                  <CountUp className="counter" end={49} />K
                </h5>
              </Col>
              <Col sm="4">
                <h6>{TotalPost}</h6>
                <h5>
                  <CountUp end={96} className="counter" />M
                </h5>
              </Col>
            </Row>
          </CardFooter>
        </Card>
      </Col>
    </Fragment>
  );
};
export default ManagerProfile;
