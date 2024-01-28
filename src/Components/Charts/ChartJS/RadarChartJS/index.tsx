import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RadarChart } from "@/Constant";
import { RadarChartData } from "@/Data/Charts/ChartJs";
import { Radar } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const RadarChartJS = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={RadarChart} />
        <CardBody className="radar-chartjs">
          <Radar id="myRadarGraph" data={RadarChartData} width="600px" height="300px" />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RadarChartJS;
