import { FeaturedTutorials, Href, ImagePath } from "@/Constant";
import { FAQData, FaqStars, FeaturedTutorialData } from "@/Data/FAQ/Faq";
import Image from "next/image";
import { Card, CardBody, CardFooter, Col, Row } from "reactstrap";

const FeaturedTutorial = () => {
  return (
    <Col lg="12" className="featured-tutorial">
      <div className="header-faq">
        <h5 className="mb-0">{FeaturedTutorials}</h5>
      </div>
      <Row>
        {FeaturedTutorialData.map((item, i) => (
          <Col key={i} xl="3" sm="6" className=" box-col-6">
            <Card className=" features-faq product-box">
              <div className="faq-image product-img">
                <Image height={100} width={300} className="img-fluid " src={`${ImagePath}/faq/${item.image}`} alt="" />
                <div className="product-hover">
                  <ul>
                    <li>
                      <i className="icon-link" />
                    </li>
                    <li>
                      <i className="icon-import" />
                    </li>
                  </ul>
                </div>
              </div>
              <CardBody>
                <a href={Href}>
                  <h6>{item.heading}</h6>
                </a>
                <p>{FAQData}</p>
              </CardBody>
              <CardFooter>
                <span>{item.date}</span> &nbsp;
                {FaqStars}
              </CardFooter>
            </Card>
          </Col>
        ))}
      </Row>
    </Col>
  );
};

export default FeaturedTutorial;
