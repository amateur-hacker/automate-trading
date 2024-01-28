import { SkillStatus } from "@/Constant";
import { SkillStatusChartData, SkillStatusChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { TrendingUp } from "react-feather";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SkillStatusChart = () => {
  return (
    <Col xl="4" lg="12" className="box-col-6 xl-50">
      <Card>
        <CardHeader>
          <Row>
            <Col xs="9">
              <h5>{SkillStatus}</h5>
            </Col>
            <Col xs="3" className="text-end">
              <TrendingUp className="text-muted" />
            </Col>
          </Row>
        </CardHeader>
        <CardBody>
          <div className="chart-container">
            <div id="circlechart">
              <ReactApexChart options={SkillStatusChartOptions} series={SkillStatusChartData.series} height="370" type="radialBar" />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default SkillStatusChart;
