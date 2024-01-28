import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { OrderHistoryColumns, OrderHistoryData } from "@/Data/ECommerce/OrderHistoryData";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
const DataTable = dynamic(() => import("react-data-table-component"), { ssr: false });

const OrderHistory = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Order History" parent="E Commerce" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="Order History" />
              <CardBody>
                <DataTable className="order-history table-responsive" pagination paginationServer data={OrderHistoryData} columns={OrderHistoryColumns} />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default OrderHistory;
