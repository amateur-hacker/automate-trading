import { Finance } from "@/Constant";
import { FinanceChartData, FinanceChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Navigation } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const FinanceChart = () => {
  return (
    <Col xl="5" lg="12" className="box-col-5">
      <Card>
        <CardHeader>
          <Row>
            <Col xs="9">
              <h5>{Finance}</h5>
            </Col>
            <Col xs="3" className="text-end">
              <Navigation className="text-muted" />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <div id="columnchart">
              <ReactApexChart options={FinanceChartOptions} series={FinanceChartData.series} height="350" type="bar" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default FinanceChart;
