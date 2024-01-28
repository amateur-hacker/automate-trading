import { BorderLeft } from "@/Constant";
import { CardsData, DirectionalCreativeCardData } from "@/Data/BonusUi/Cards";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const DirectionalCreativeCard = () => {
  return (
    <>
      <Col sm="12" xl="6">
        <Card>
          <CardHeader className="b-l-primary">
            <h5>{BorderLeft}</h5>
          </CardHeader>
          <CardBody>
            <p>{CardsData}</p>
          </CardBody>
        </Card>
      </Col>
      {DirectionalCreativeCardData.map((item, i) => (
        <Col key={i} sm="12" xl="6">
          <Card>
            <CardHeader className={item.headerClass}>
              <h5>{item.title}</h5>
            </CardHeader>
            <CardBody>
              <p>{CardsData}</p>
            </CardBody>
          </Card>
        </Col>
      ))}
    </>
  );
};

export default DirectionalCreativeCard;
