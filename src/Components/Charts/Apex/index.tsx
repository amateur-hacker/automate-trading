import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Container, Row } from "reactstrap";
import BubbleApexChart from "./3DBubbleApex";
import AreaSpalineApexChart from "./AreaSpalineApex";
import BarApexChart from "./BarApex";
import BasicAreaApexChart from "./BasicAreaApex";
import CandlestickApexChart from "./CandleStickApex";
import ColumnApexChart from "./ColumnApex";
import DonutApexChart from "./DonutApex";
import LineApexChart from "./LineApex";
import MixedApexChart from "./MixedApex";
import PieApexChart from "./PieApex";
import RadarApexChart from "./RadarChart";
import RadialBarApexChart from "./RadialApex";
import StepLineApexChart from "./StepLineApex";

const ApexCharts = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Apex Chart" parent="Chart" />
      <Container fluid>
        <Row>
          <BasicAreaApexChart />
          <AreaSpalineApexChart />
          <BarApexChart />
          <ColumnApexChart />
          <BubbleApexChart />
          <StepLineApexChart />
          <LineApexChart />
          <PieApexChart />
          <DonutApexChart />
          <MixedApexChart />
          <CandlestickApexChart />
          <RadarApexChart />
          <RadialBarApexChart />
        </Row>
      </Container>
    </>
  );
};

export default ApexCharts;
