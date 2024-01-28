import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LineChart2 } from "@/Constant";
import { LineChart2Data, LineChart2option } from "@/Data/Charts/ChartJs";
import { Line } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const Line2ChartJS = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={LineChart2} />
        <CardBody className="chart-block">
          <Line data={LineChart2Data} options={LineChart2option} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default Line2ChartJS;
