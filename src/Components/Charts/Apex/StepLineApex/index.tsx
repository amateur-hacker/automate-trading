import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SteplineChart } from "@/Constant";
import { ApexStepLineChart } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const StepLineApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-12">
      <Card>
        <CommonCardHeader heading={SteplineChart} />
        <CardBody>
          <div id="stepline">
            <Chart options={ApexStepLineChart} series={ApexStepLineChart.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default StepLineApexChart;
