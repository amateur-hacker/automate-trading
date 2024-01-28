import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DoughnutChart } from "@/Constant";
import { DoughnutData, DoughnutOption } from "@/Data/Charts/ChartJs";
import { Doughnut } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const DoughnutChartJS = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={DoughnutChart} />
        <CardBody className="chart-block chart-vertical-center">
          <Doughnut data={DoughnutData} options={DoughnutOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default DoughnutChartJS;
