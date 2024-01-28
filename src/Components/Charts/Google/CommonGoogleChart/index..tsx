import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CommonPieChartProps } from "@/Type/GoogleCharts";
import { Chart } from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

const CommonPieChart = ({ data, title, colClass }: CommonPieChartProps) => {
  return (
    <Col className={colClass ? "col-sm-12" : "col-sm-12 col-xl-6 col-12"}>
      <Card>
        <CommonCardHeader heading={title} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart width={data.width} height={data.height} chartType={data.chartType} loader={<div>{"Loading Chart"}</div>} data={data.data} options={data.option} rootProps={data.rootProps} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CommonPieChart;
