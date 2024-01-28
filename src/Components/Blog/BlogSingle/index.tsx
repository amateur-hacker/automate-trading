import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { ImagePath } from "@/Constant";
import { BlogSingleHeading, BlogSingleParagraph1, BlogSingleParagraph2 } from "@/Data/Blog";
import React from "react";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import BlogComments from "./BlogComments";
import { useRouter } from "next/navigation";

const BlogSingle = () => {
  const router=useRouter()
  return (
    <>
      <CommonBreadcrumb pageTitle="Blog Single" parent="Blog" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <div className="blog-single">
              <div className="blog-box blog-details">
                <div className="banner-wrraper img-fluid w-100 bg-img-cover" style={{ backgroundImage: `url(${ImagePath}/blog/blog-single.jpg)`, backgroundSize: "cover", backgroundPosition: "center", display: "block" }}></div>
                <Card>
                  <CardBody>
                    <div className="blog-details">
                      <ul className="blog-social flex-row ">
                        <li>25 July 2023</li>
                        <li>
                          <i className="icofont icofont-user"></i>
                          Mark <span>Jecno </span>
                        </li>
                        <li>
                          <i className="icofont icofont-thumbs-up"></i>
                          02
                          <span>Hits</span>
                        </li>
                        <li>
                          <i className="icofont icofont-ui-chat"></i>
                          598 Comments
                        </li>
                      </ul>
                      <h4>{BlogSingleHeading}</h4>
                      <div className="single-blog-content-top">
                        <p>{BlogSingleParagraph1}</p>
                        <p>{BlogSingleParagraph2}</p>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              </div>
            </div>
          </Col>
          <BlogComments />
        </Row>
      </Container>
    </>
  );
};

export default BlogSingle;
