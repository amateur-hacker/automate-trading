import React from "react";
import { Card, CardBody, Col, Row } from "reactstrap";

import { ImagePath, KelvinELedbetter } from "@/Constant";
import Image from "next/image";
import NewOrders from "./NewOrder";

const KelvinProfile = () => {
  return (
    <Col xl="4" className="box-col-12 lg-100">
      <Row>
        <Col xl="12" lg="6" className="box-col-6 ">
          <Card className="testimonial">
            <CardBody>
              <Image height={80} width={80} className="img-90 user-img" src={`${ImagePath}/user/user-dp.png`} alt="user-dp" />
              <h5>{KelvinELedbetter}</h5>
              <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
            </CardBody>
          </Card>
        </Col>
        <NewOrders />
      </Row>
    </Col>
  );
};
export default KelvinProfile;
