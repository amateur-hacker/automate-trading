import { ImagePath } from "@/Constant";
import { KnowledgeDetailsParagraph1, KnowledgeDetailsParagraph2 } from "@/Data/KnowledgeBase";
import Image from "next/image";
import { Card, CardBody, Col } from "reactstrap";

const MainCard = () => {
  return (
    <Col xl="9" className="xl-60 box-col-8">
      <div className="blog-single">
        <div className="blog-box">
          <Card>
            <Image height={200} width={900} className="img-fluid w-100" src={`${ImagePath}/knowledgebase/bg_1.jpg`} alt="blog-main" />
          </Card>
          <Card>
            <CardBody>
              <div className="blog-details">
                <h4 className="mt-0">Why Choose Knowledge Course ?</h4>
                <div className="single-blog-content-top">
                  <p>{KnowledgeDetailsParagraph1}</p>
                  <p>{KnowledgeDetailsParagraph2}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </Col>
  );
};
export default MainCard;
