'use client'
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const SamplePage = () => {
  const Sample = [
    {
      text: "Prior to publishing content on social media",
    },
  ];

  return (
    <>
      <CommonBreadcrumb pageTitle="Sample Page" parent="Sample Page" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="SampleCard" subHeading={Sample} />
              <CardBody>
                <p>While written content continues to reign supreme as the cornerstone of every brand's digital marketing strategy, video and image-based content are becoming more and more prominent in the world of content marketing. The regular blog, social media posts, and a wide range of other written content formats are just a few examples.</p>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default SamplePage;
