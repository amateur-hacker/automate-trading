import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BarChart } from "@/Constant";
import { BarChartData, BarChartOptions } from "@/Data/Charts/ChartJs";
import { Bar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const BarChartJs = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={BarChart} />
        <CardBody className="chart-block">
          <Bar data={BarChartData} options={BarChartOptions} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default BarChartJs;
