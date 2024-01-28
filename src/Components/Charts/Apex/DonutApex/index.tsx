import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DonutChart } from "@/Constant";
import { ApexDonutCharts } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DonutApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={DonutChart} />
        <CardBody className="apex-chart">
          <div id="donutchart">
            <Chart options={ApexDonutCharts} series={ApexDonutCharts.series} type="donut" height={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default DonutApexChart;
