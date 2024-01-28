import { DashboardDropdown3, InvoiceChart, InvoiceChartOptions } from "@/Data/Dashboard/ECommerce";
import dynamic from "next/dynamic";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const InvoiceOverview = () => {
  return (
    <Col xl="5" md="6" className="dash-xl-33 dash-lg-50 box-col-6">
      <Card className="pb-0 invoice-overviwe">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h5 className="m-0">Invoice Overview</h5>
            <CommonDashboardDropDown items={DashboardDropdown3} />
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <ReactApexChart id="invoice-overviwe-chart" options={InvoiceChartOptions} series={InvoiceChart.series} type="bar" height="263" />
        </CardBody>
      </Card>
    </Col>
  );
};
export default InvoiceOverview;
