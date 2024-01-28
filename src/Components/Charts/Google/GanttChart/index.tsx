import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GanttChart } from "@/Constant";
import { GanttChartData, GanttChartOptions } from "@/Data/Charts/Google";
import { GanttChartProps } from "@/Type/GoogleCharts";
import { Chart } from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

const GanttCharts = ({ data }: GanttChartProps) => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={GanttChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart width={data?.width} height={data?.height} chartType={data?.chartType} loader={<div>{"Loading Chart"}</div>} data={GanttChartData} options={GanttChartOptions} rootProps={data?.rootProps} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GanttCharts;
