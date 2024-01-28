import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BrowserUses } from "@/Constant";
import { BrowserUsesChartData, BrowserUsesChartOptions } from "@/Data/Widgets/Chart";
import dynamic from "next/dynamic";
import { Card, CardBody, Col } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });


const BrowserUsesChart = () => {
  return (
    <Col sm="12" className="box-col-12">
      <div className="donut-chart-widget">
        <Card>
          <CommonCardHeader heading={BrowserUses} />
          <CardBody>
            <div id="chart-widget13">
              <ReactApexChart options={BrowserUsesChartOptions} series={BrowserUsesChartData.series} height="500" type="candlestick" />
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};
export default BrowserUsesChart;
