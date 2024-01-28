import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LineChart } from "@/Constant";
import { LineChartData, LineChartOptions } from "@/Data/Charts/ChartJs";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const LineChartJs = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={LineChart} />
        <CardBody className="chart-block">
          <Line data={LineChartData} options={LineChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default LineChartJs;
