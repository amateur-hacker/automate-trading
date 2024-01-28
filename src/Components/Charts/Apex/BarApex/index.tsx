import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BarChart } from "@/Constant";
import { ApexBarChart } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";

import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={BarChart} />
        <CardBody>
          <div id="basic-bar">
            <Chart options={ApexBarChart} series={ApexBarChart.series} type="bar" height={350} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarApexChart;
