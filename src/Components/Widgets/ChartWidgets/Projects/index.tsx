import { PROJECTS } from "@/Constant";
import { ProjectChartData, ProjectChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const ProjectChart = () => {
  return (
    <Col xl="4" md="6" className="box-col-4">
      <Card className="o-hidden">
        <div className="chart-widget-top">
          <CardBody>
            <Row>
              <Col xs="7">
                <h6 className="f-w-600 font-secondary">{PROJECTS}</h6>
                <span className="num">
                  <span className="counter">30</span>%<i className="icon-angle-up f-12 ms-1"></i>
                </span>
              </Col>
              <Col xs="5" className="text-end">
                <h4 className="num total-value counter">12569</h4>
              </Col>
            </Row>
          </CardBody>
          <div>
            <div id="chart-widget2">
              <ReactApexChart className="flot-chart-placeholder" options={ProjectChartOptions} series={ProjectChartData.series} height="170" type="area" id="chart-widget-top-second" />
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};
export default ProjectChart;
