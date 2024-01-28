import { PRODUCTS } from "@/Constant";
import { ProductsChartData, ProductsChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const ProductChart = () => {
  return (
    <Col xl="4" md="12" className="box-col-4">
      <Card className="o-hidden">
        <div className="chart-widget-top">
          <CardBody>
            <Row>
              <Col xs="8">
                <h6 className="f-w-600 font-success">{PRODUCTS}</h6>
                <span className="num">
                  <span className="counter">68</span>%<i className="icon-angle-up f-12 ms-1"></i>
                </span>
              </Col>
              <Col xs="4" className="text-end">
                <h4 className="num total-value">
                  <span className="counter">93</span>M
                </h4>
              </Col>
            </Row>
          </CardBody>
          <div>
            <div id="chart-widget3">
              <ReactApexChart className="flot-chart-placeholder" options={ProductsChartOptions} series={ProductsChartData.series} height="170" type="area" id="chart-widget-top-third" />
            </div>
          </div>
        </div>
      </Card>
    </Col>
  );
};
export default ProductChart;
