import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AreaSpalineChart } from "@/Constant";
import { AreaSpaline } from "@/Data/Charts/Apex";
import { Card, CardBody, Col } from "reactstrap";
import dynamic from "next/dynamic";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const AreaSpalineApexChart = () => {
  return (
    <Col sm="12" xl="6" className="box-col-6">
      <Card>
        <CommonCardHeader heading={AreaSpalineChart} />
        <CardBody>
          <div id="basic-apex">
            <Chart options={AreaSpaline} series={AreaSpaline.series} height="350" type="area" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default AreaSpalineApexChart;
