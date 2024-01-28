import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PieChart } from "@/Constant";
import { ApexPieChart } from "@/Data/Charts/Apex";
import dynamic from "next/dynamic";
import { Card, CardBody, Col } from "reactstrap";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const PieApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={PieChart} />
        <CardBody className="apex-chart">
          <div id="piechart">
            <Chart options={ApexPieChart} series={ApexPieChart.series} type="pie" width={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PieApexChart;
