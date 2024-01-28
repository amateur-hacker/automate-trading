import { LatestArticlesData } from "@/Data/FAQ/Faq";
import { Card, CardBody, Col, Media, Row } from "reactstrap";

const LatestArticles = () => {
  return (
    <Col lg="12">
      <div className="header-faq">
        <h5 className="mb-0">Latest articles and videos</h5>
      </div>
      <Row>
        <Row>
          {LatestArticlesData.map((item, i) => (
            <Col key={i} xl="4" md="6">
              <Card>
                <CardBody>
                  <Media>
                    {item.IconClass}
                    <Media body>
                      <h6 className="f-w-600">{item.title}</h6>
                      <p>Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.</p>
                    </Media>
                  </Media>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Row>
    </Col>
  );
};
export default LatestArticles;
