import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GridColumn } from "@/Constant";
import { GridColumnData } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const GridColumnCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={GridColumn} />
        <CardBody className="grid-showcase">
          <p>
            {"Using a single set of"} <code>{".col-md-*"}</code> {"grid classes, you can create a basic grid system that starts out stacked on mobile devices and tablet devices (the extra small to small range) before becoming horizontal on desktop (medium) devices. Place grid columns within any"} <code>{".row"}</code>.
          </p>
          <Row>
            {GridColumnData.map((element, index) => (
              <Col key={index} md={element.mdClass}>
                <span>{element.text}</span>
              </Col>
            ))}
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridColumnCard;
