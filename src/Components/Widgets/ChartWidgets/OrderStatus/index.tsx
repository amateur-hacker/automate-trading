import { OrderStatus } from "@/Constant";
import { OrderStatusChartData } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { ShoppingBag } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const OrderStatusChart = () => {
  return (
    <Col xl="8" lg="12" className="box-col-6">
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
            {OrderStatusChartData.map((item, i) => (
              <div key={i} id={item.id}>
                <ReactApexChart options={item.chartOptions} series={item.chartData.series} height="70" type="bar" />
              </div>
            ))}
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default OrderStatusChart;
