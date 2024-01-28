import { DashboardDropdown1, TotalSalesChartOptions, TotalSalesCharts } from "@/Data/Dashboard/ECommerce";
import { Card, CardBody, CardHeader, Col, Media } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalSalesECommerce = () => {
  const AnimateBlockRepeat = [1, 2, 3, 4, 5, 6];
  return (
    <Col xl="3" md="6" className="dash-xl-50 dash-31 box-col-6">
      <Card className="total-sale">
        <CardHeader className="card-no-border">
          <Media>
            <Media body>
              <h5 className="mb-0">Total sale</h5>
            </Media>
            <CommonDashboardDropDown items={DashboardDropdown1} />
          </Media>
          <div className="animat-block">
            <ul>
              {AnimateBlockRepeat.map((item) => (
                <li key={item}></li>
              ))}
            </ul>
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="sale-main">
            <div className="sale-left">
              <h6 className="font-danger">
                <i className="icon-arrow-down"></i>
                <span>0.45%</span>
              </h6>
              <h5 className="font-primary">680.96</h5>
            </div>
            <div className="sale-right">
              <ReactApexChart id="total-sales-chart" height="95" type="line" options={TotalSalesChartOptions} series={TotalSalesCharts.series} />
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default TotalSalesECommerce;
