import { OrderStatus } from "@/Constant";
import { OrderStatus2Data, OrderStatus2Options } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { ShoppingBag } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const OrderStatus2Chart = () => {
  return (
    <Col xl="7" lg="12" className="box-col-7">
      <Card>
        <CardHeader>
          <Row>
            <Col xs="9">
              <h5>{OrderStatus}</h5>
            </Col>
            <Col xs="3" className="text-end">
              <ShoppingBag className="text-muted" />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <div id="linechart">
              <ReactApexChart options={OrderStatus2Options} height="350" series={OrderStatus2Data.series} type="line" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OrderStatus2Chart;
