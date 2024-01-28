import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MixedChart } from "@/Constant";
import { ApexMixedCharts } from "@/Data/Charts/Apex";
import dynamic from "next/dynamic";
import { Card, CardBody, Col } from "reactstrap";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const MixedApexChart = () => {
  return (
    <Col sm="12" xl="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={MixedChart} />
        <CardBody>
          <div id="mixedchart">
            <Chart options={ApexMixedCharts} series={ApexMixedCharts.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default MixedApexChart;
