import { DashboardDropdown2, RevenueByCategoryChart, RevenueByCategoryChartOptions } from "@/Data/Dashboard/ECommerce";
import { Card, CardBody, CardHeader, Col, Media } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const RevenueByCategory = () => {
  return (
    <Col xl="4" md="6" className="dash-xl-50 dash-32 box-col-6">
      <Card className="revenue-category">
        <CardHeader className="card-no-border">
          <Media>
            <Media body>
              <h5 className="mb-0">Revenue by Category</h5>
            </Media>
            <CommonDashboardDropDown items={DashboardDropdown2.slice(0, 2)} />
          </Media>
        </CardHeader>
        <CardBody>
          <div className="donut-inner">
            <h5>16,349</h5>
            <h6>2,174 in pending</h6>
          </div>
          <ReactApexChart id="revenue-chart" type="donut" height={"320"} options={RevenueByCategoryChartOptions} series={RevenueByCategoryChart.series} />
        </CardBody>
      </Card>
    </Col>
  );
};
export default RevenueByCategory;
