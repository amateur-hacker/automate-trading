import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CandlestickChart } from "@/Constant";
import { ApexCandleStickCharts } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const CandlestickApexChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={CandlestickChart} />
        <CardBody>
          <div id="candlestick">
            <Chart options={ApexCandleStickCharts} series={ApexCandleStickCharts.series} type="candlestick" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CandlestickApexChart;
