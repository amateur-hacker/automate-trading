import { TotalTransactionsOptions } from "@/Data/Dashboard/Default";
import { DashboardDropdown1 } from "@/Data/Dashboard/ECommerce";
import dynamic from "next/dynamic";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import Reports from "./Reports";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const TotalTransactions = () => {
  return (
    <Col xl="6" lg="12" className="dash-xl-100 box-col-12">
      <Card className="total-transactions">
        <Row className=" m-0">
          <Col sm="6" md="6" className=" p-0">
            <CardHeader className="card-header card-no-border">
              <h5>Total Transactions</h5>
            </CardHeader>
            <CardBody className="pt-0">
              <div>
                <ApexChart id="transaction-chart" options={TotalTransactionsOptions} series={TotalTransactionsOptions.series} type="bar" height="155" />
              </div>
            </CardBody>
          </Col>
          <Col sm="6" md="6" className="p-0 report-sec">
            <CardHeader className="card-no-border">
              <div className="header-top">
                <h5 className="m-0">Report</h5>
                <CommonDashboardDropDown items={DashboardDropdown1} />
              </div>
            </CardHeader>
            <Reports />
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default TotalTransactions;
