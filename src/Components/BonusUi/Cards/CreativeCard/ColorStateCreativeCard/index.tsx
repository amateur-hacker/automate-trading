import { BorderColorState } from "@/Constant";
import { CardsData, ColorStateCreativeCardData } from "@/Data/BonusUi/Cards";
import { Card, CardBody, CardHeader, Col } from "reactstrap";

const ColorStateCreativeCard = () => {
  return (
    <>
      <Col sm="12" xl="6">
        <Card>
          <CardHeader className="b-l-warning">
            <h5>{BorderColorState}</h5>
          </CardHeader>
          <CardBody>
            <p>{CardsData}</p>
          </CardBody>
        </Card>
      </Col>
      {ColorStateCreativeCardData.map((item, i) => (
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

export default ColorStateCreativeCard;
