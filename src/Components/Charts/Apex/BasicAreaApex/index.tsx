import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicAreaChart } from "@/Constant";
import { ApexAreaChart } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BasicAreaApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={BasicAreaChart} />
        <CardBody>
          <div id="basic-apex">
            <Chart options={ApexAreaChart} series={ApexAreaChart.series} type="area" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicAreaApexChart;
