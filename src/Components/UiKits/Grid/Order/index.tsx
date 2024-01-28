import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Order } from "@/Constant";
import { OrderData } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Row } from "reactstrap";

const OrderCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Order} />
        <CardBody className="grid-showcase">
          <p>
            {"Use"} <code>{".order-"}</code> {"classNames for controlling the"} <strong>{"visual order"}</strong> {"of your content. These classNamees are responsive, so you can set the"} <code>{"order"}</code> {"by breakpoint (e.g.,"} <code>{".order-1.order-md-2"}</code>
            {"). Includes support for"} <code>{"1"}</code> {"through"} <code>{"12"}</code> {"across all five grid tiers."}
          </p>
          {OrderData.map((element, index) => (
            <Row key={index}>
              {element.data.map((item, index) => (
                <Col key={index} className={`${item.name ? item.name : ""}`}>
                  <span>{item.name}</span>
                </Col>
              ))}
            </Row>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default OrderCard;
