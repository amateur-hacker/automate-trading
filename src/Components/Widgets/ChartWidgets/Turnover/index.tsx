import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Turnover } from "@/Constant";
import { TurnOverData, TurnOverOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TurnoverChart = () => {
  return (
    <Col xl="5" lg="12">
      <div className="small-chart-widget chart-widgets-small">
        <Card>
          <CommonCardHeader heading={Turnover} />
          <CardBody>
            <div className="chart-container">
              <Row>
                <Col xs="12">
                  <div id="chart-widget7">
                    <ReactApexChart options={TurnOverOptions} series={TurnOverData.series} height="320" type="area" />
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
export default TurnoverChart;
