import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColumnChart } from "@/Constant";
import { ApexLineWithAnnotationCharts } from "@/Data/Charts/Apex";
import dynamic from "next/dynamic";
import { Card, CardBody, Col } from "reactstrap";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const LineApexChart = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ColumnChart} />
        <CardBody>
          <div id="annotationchart">
            <Chart options={ApexLineWithAnnotationCharts} series={ApexLineWithAnnotationCharts.series} type="line" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineApexChart;
