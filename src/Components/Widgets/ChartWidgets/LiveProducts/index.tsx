import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LiveProducts } from "@/Constant";
import { ProductChartData, ProductChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LiveProductChart = () => {
  return (
    <Col xl="7" lg="12">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader heading={LiveProducts} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <div id="chart-widget6">
                    <ReactApexChart options={ProductChartOptions} series={ProductChartData.series} height="320" type="line" />
                  </div>
                </Col>
              </Row>
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};
export default LiveProductChart;
