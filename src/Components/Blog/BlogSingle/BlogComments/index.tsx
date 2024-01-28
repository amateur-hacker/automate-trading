import React, { Fragment } from "react";
import { Row, Col, Media, Card, CardBody } from "reactstrap";
import { Comment, ImagePath } from "@/Constant";
import { BlogSingleCommentsData } from "@/Data/Blog";
import Image from "next/image";

const BlogComments = () => {
  return (
    <Card className="comment-box">
      <CardBody>
        <h4>{Comment}</h4>
        <ul className="simple-list">
          {BlogSingleCommentsData.map((item) => (
            <Fragment key={item.id}>
              <li>
                <Col tag={item.class ? "ul" : "div"}>
                  <Media className="align-self-center">
                    <Image height={50} width={50} className="align-self-center" src={`${ImagePath}/blog/comment.jpg`} alt="" />
                    <Media body>
                      <Row>
                        <Col md="4">
                          <h6 className="mt-0">
                            {item.name}
                            <span> {`( ${item.post} ) `}</span>
                          </h6>
                        </Col>
                        {!item.class && (
                          <Col md="8">
                            <ul className="comment-social ">
                              <li>
                                <i className="icofont icofont-thumbs-up"></i>
                                {item.hits}
                              </li>
                              <li>
                                <i className="icofont icofont-ui-chat"></i>
                                {item.comments}
                              </li>
                            </ul>
                          </Col>
                        )}
                      </Row>
                      <p>{item.paragraph}</p>
                    </Media>
                  </Media>
                </Col>
              </li>
            </Fragment>
          ))}
        </ul>
      </CardBody>
    </Card>
  );
};
export default BlogComments;
