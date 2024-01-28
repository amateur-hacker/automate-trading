import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TotalEarning } from "@/Constant";
import { EarningChartData, EarningChartOptions, TotalEarningChartData } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalEarningChart = () => {
  return (
    <Col xl="5" md="12" className="box-col-5">
      <Card className="o-hidden">
        <CommonCardHeader heading={TotalEarning} />
        <div className="bar-chart-widget">
          <div className="top-content bg-primary"></div>
          <CardBody className="bottom-content">
            <Row>
              <Col xs="12">
                <div id="chart-widget5">
                  <ReactApexChart options={EarningChartOptions} series={EarningChartData.series} height="360" type="radialBar" />
                </div>
              </Col>
            </Row>
            <Row className="text-center">
              {TotalEarningChartData.map((item, i) => (
                <Col key={i} xs="4" className="b-r-light">
                  <div>
                    <span className=" font-primary">
                      {item.number}
                      <i className="icon-angle-up f-12 ms-1"></i>
                    </span>
                    <span className="text-muted block-bottom">{item.time}</span>
                    <h4 className="num m-0">
                      <span className="counter color-bottom">0</span>M
                    </h4>
                  </div>
                </Col>
              ))}
            </Row>
          </CardBody>
        </div>
      </Card>
    </Col>
  );
};
export default TotalEarningChart;
