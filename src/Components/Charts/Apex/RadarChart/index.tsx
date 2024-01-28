import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RadarChart } from "@/Constant";
import { ApexRadarPolygonFillCharts } from "@/Data/Charts/Apex";
import dynamic from "next/dynamic";
import { Card, CardBody, Col } from "reactstrap";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RadarApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={RadarChart} />
        <CardBody>
          <div id="radarchart">
            <Chart options={ApexRadarPolygonFillCharts} series={ApexRadarPolygonFillCharts.series} type="radar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarApexChart;
