import { Href } from "@/Constant";
import { ArticlesData, ArticlesParagraph } from "@/Data/KnowledgeBase";
import { Card, CardBody, Col, Media } from "reactstrap";

const Articles = () => {
  return (
    <>
      {ArticlesData.map((item, i) => {
        return (
          <Col xl="4" lg="6" sm="6" key={i}>
            <Card className="bg-primary">
              <CardBody>
                <Media className="faq-widgets">
                  <Media body>
                    <a href={Href}>
                      <h5>{item.title}</h5>
                    </a>
                    <p>{ArticlesParagraph}</p>
                  </Media>
                  {item.icon}
                </Media>
              </CardBody>
            </Card>
          </Col>
        );
      })}
    </>
  );
};
export default Articles;
