import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RotatingPieChart } from "@/Constant";
import { RotatingPieChart1Props } from "@/Type/GoogleCharts";
import { Chart } from "react-google-charts";
import { Card, CardBody, Col } from "reactstrap";

const RotatingPieChart1 = ({ data, pieStartAngle, pieSliceText }: RotatingPieChart1Props) => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={RotatingPieChart} />
        <CardBody className="chart-block">
          <div className="chart-overflow" id="pie-chart1">
            <Chart
              width={data?.width}
              height={data?.height}
              chartType={data?.chartType}
              loader={<div>{"Loading Chart"}</div>}
              data={data?.data}
              options={
                data?.option && { pieStartAngle: pieStartAngle } && {
                  pieSliceText: pieSliceText,
                }
              }
              rootProps={data?.rootProps}
            />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default RotatingPieChart1;
