import { SALE } from "@/Constant";
import { SaleChartData, SalesChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SaleChart = () => {
  return (
    <Col xl="4" md="6" className="box-col-4">
      <Card className="o-hidden">
        <div className="chart-widget-top">
          <CardBody>
            <Row>
              <Col xs="5">
                <h6 className="f-w-600 font-primary">{SALE}</h6>
                <span className="num">
                  <span className="counter">90</span>%<i className="icon-angle-up f-12 ms-1"></i>
                </span>
              </Col>
              <Col xs="7" className="text-end">
                <h4 className="num total-value">
                  $<span className="counter">3654</span>.00
                </h4>
              </Col>
            </Row>
          </CardBody>
          <div>
            <div id="chart-widget1">
              <ReactApexChart options={SalesChartOptions} series={SaleChartData.series} height="170" type="area" />
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};
export default SaleChart;
