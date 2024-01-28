import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BarChartJs from "./BarChartJS";
import DoughnutChartJS from "./DoughnutChartJS";
import Line2ChartJS from "./Line2ChartJS";
import LineChartJs from "./LineCharts";
import PolarChartJS from "./PolarChartJS";
import RadarChartJS from "./RadarChartJS";

const ChartJS = () => {
  return (
    <>
      <CommonBreadcrumb parent="Chart" pageTitle="Chart Js" />
      <Container fluid>
        <Row>
          <BarChartJs />
          <LineChartJs />
          <RadarChartJS />
          <Line2ChartJS />
          <DoughnutChartJS />
          <PolarChartJS />
        </Row>
      </Container>
    </>
  );
};

export default ChartJS;
