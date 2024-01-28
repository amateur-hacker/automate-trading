import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import React from "react";
import { Container, Row } from "reactstrap";
import CommonPieChart from "./CommonGoogleChart/index.";
import { GoogleAreaChart, GoogleBarChart2, GoogleBasicBarChart, GoogleComboChart, GoogleDonutChart, GoogleGhantChart, GoogleLineChart, GoogleMaterialDesignChart, GooglePieChart1, GooglePieChart2, GoogleRotatingPieChart1, GoogleRotatingPieChart2, GoogleSliceCharts, GoogleStackingChart } from "@/Data/Charts/Google";
import RotatingPieChart1 from "./Rotating1Chart";
import RotatingPieChart2 from "./Rotating2Chart";
import { AreaChart, BarChart2, BasicBarChart, DonutChart, LineChart, MaterialDesign, SliceVisibilityThreshold, StackingAreaChart } from "@/Constant";
import GanttChart from "./GanttChart";
import ComboCharts from "./ComboChart";

const GoogleChart = () => {
  
  return (
    <>
      <CommonBreadcrumb parent="Chart" pageTitle="Google Chart" />
      <Container fluid>
        <Row>
          <CommonPieChart title="Pie Chart 1" data={GooglePieChart1} />
          <CommonPieChart title="Pie Chart 2" data={GooglePieChart2} />
          <CommonPieChart title={DonutChart} data={GoogleDonutChart} />
          <RotatingPieChart1 data={GoogleRotatingPieChart1} pieStartAngle={100} pieSliceText={"label"} />
          <RotatingPieChart2 data={GoogleRotatingPieChart2} />
          <CommonPieChart data={GoogleSliceCharts}  title={SliceVisibilityThreshold} />
          <CommonPieChart data={GoogleAreaChart} title={AreaChart} />
          <CommonPieChart data={GoogleStackingChart} title={StackingAreaChart} />
          <CommonPieChart data={GoogleBasicBarChart} title={BasicBarChart} />
          <CommonPieChart data={GoogleMaterialDesignChart} title={MaterialDesign} />
          <GanttChart data={GoogleGhantChart} />
          <CommonPieChart data={GoogleLineChart} title={LineChart} colClass="col-sm-12" />
          <ComboCharts data={GoogleComboChart} />
          <CommonPieChart data={GoogleBarChart2} title={BarChart2} colClass="col-sm-12"/>
        </Row>
      </Container>
    </>
  );
};

export default GoogleChart;
