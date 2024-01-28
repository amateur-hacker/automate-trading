import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BubbleChart } from "@/Constant";
import { Apex3DBubbleCharts } from "@/Data/Charts/Apex";
import dynamic from "next/dynamic";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BubbleApexChart = () => {
  return (
    <Fragment>
      <Col sm="12" xl="6" className="box-col-12">
        <Card>
          <CommonCardHeader heading={BubbleChart} />
          <CardBody>
            <div id="chart-bubble">
              <Chart options={Apex3DBubbleCharts} series={Apex3DBubbleCharts.series} type="bubble" height={350} />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BubbleApexChart;