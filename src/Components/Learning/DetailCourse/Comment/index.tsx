import React from "react";
import { Card, CardBody, Col, Media, Row } from "reactstrap";
import { Comment, Designer, ImagePath, JolioMark } from "@/Constant";
import Image from "next/image";
import Comments1 from "./Comment1";
import { DetailCourseComment } from "@/Data/Learning";

const Comments = () => {
  const Image3 = true;
  return (
    <Card className="comment-box">
      <CardBody>
        <h4>{Comment}</h4>
        <ul className="simple-list">
          <Comments1 />
          <li>
            <ul className="simple-list">
              <li>
                <Media>
                  <Image height={100} width={100} src={`${ImagePath}/blog/9.jpg`} alt="" />
                  <Media body>
                    <Row>
                      <Col xl="12">
                        <h6 className="mt-0">
                          {JolioMark}
                          <span> {Designer} </span>
                        </h6>
                      </Col>
                    </Row>
                    <p>{DetailCourseComment}</p>
                  </Media>
                </Media>
              </li>
            </ul>
          </li>
          <Comments1 Image3={Image3} />
        </ul>
      </CardBody>
    </Card>
  );
};

export default Comments;
