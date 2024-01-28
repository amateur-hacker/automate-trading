import { CandleStickChartOptions, CandlestickChart } from "@/Data/Dashboard/Crypto";
import dynamic from "next/dynamic";
import { Card, CardBody, Col } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CandlestickCard = () => {
  return (
    <Col xl="7" className="dash-xl-100 box-col-12">
      <Card className="candlestick-chart">
        <CardBody>
          <ReactApexChart id="candlestick-chart" options={CandleStickChartOptions} series={CandlestickChart.series} type="candlestick" height="320" />
          <div className="candlestick-detail">
            <h3>50 / 100</h3>
            <h4> Total 80,52, 225 $</h4>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default CandlestickCard;
