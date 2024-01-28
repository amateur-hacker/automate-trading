import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Card, CardBody, Col, Row } from "reactstrap";
import OrderListBold from "./BoldOrderedList";
import FontAwesomeList from "./FontAwesome";
import IcoIconList from "./IcoIconLIst";
import OrderList from "./OrderedList";
import ThemifyList from "./ThemifyList";
import UnOrderList from "./UnOrderedList";

const ListingTypography = () => {
  return (
    <Col sm="12" className="listing">
      <Card>
        <CommonCardHeader heading="Listing Typography" />
        <CardBody className="radio-text">
          <Row>
            <UnOrderList />
            <OrderList />
            <OrderListBold />
            <FontAwesomeList />
            <IcoIconList />
            <ThemifyList />
          </Row>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ListingTypography;
