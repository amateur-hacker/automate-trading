import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RadialBarChart } from "@/Constant";
import { ApexRadialBarChart } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });


const RadialBarApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={RadialBarChart} />
        <CardBody>
          <div id="circlechart">
            <Chart options={ApexRadialBarChart} series={ApexRadialBarChart.series} type="radialBar" height={380} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadialBarApexChart;
