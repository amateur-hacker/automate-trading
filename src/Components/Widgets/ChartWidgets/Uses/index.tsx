import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Uses } from "@/Constant";
import { UsesChartData, UsesChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const UsesChart = () => {
  return (
    <Col xl="7" lg="12">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader heading={Uses} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <div id="chart-widget9">
                    <ReactApexChart options={UsesChartOptions} series={UsesChartData.series} height="320" type="bubble" />
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
export default UsesChart;
