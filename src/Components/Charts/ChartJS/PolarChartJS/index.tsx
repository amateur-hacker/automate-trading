import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { PolarChart } from "@/Constant";
import { PolarData, PolarOption } from "@/Data/Charts/ChartJs";
import { PolarArea } from "react-chartjs-2";
import { Card, CardBody, Col } from "reactstrap";

const PolarChartJS = () => {
  return (
    <Col xl="6" md="12" className="box-col-12">
      <Card>
        <CommonCardHeader heading={PolarChart} />
        <CardBody className="chart-block-container radar-chartjs">
          <PolarArea data={PolarData} options={PolarOption} width={778} height={400} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default PolarChartJS;
