import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColumnChart } from "@/Constant";
import { ApexColumnChartSone } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const ColumnApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={ColumnChart} />
        <CardBody>
          <div id="column-chart">
            <Chart options={ApexColumnChartSone} series={ApexColumnChartSone.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColumnApexChart;
