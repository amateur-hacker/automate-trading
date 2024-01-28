import { SaleChart, SalesChartOptions, SmallChartData, SmallChartsData } from "@/Data/Dashboard/ECommerce";
import dynamic from "next/dynamic";
import { MoreHorizontal } from "react-feather";
import { Card, CardBody, CardHeader, Col, Media, Row } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const SalesStats = () => {
  return (
    <Col xl="3" md="6" className="dash-xl-33 dash-lg-50 box-col-6">
      <Card className="sales-state">
        <Row className="m-0">
          <Col xs="12" className="p-0">
            <Card className="bg-primary">
              <CardHeader className="card-no-border bg-primary">
                <Media className="media-dashboard">
                  <Media body>
                    <h5 className="mb-0 text-light">Sales Stats</h5>
                  </Media>
                  <div className="icon-box">
                    <MoreHorizontal />
                  </div>
                </Media>
              </CardHeader>
              <CardBody className="p-0">
                <ReactApexChart options={SalesChartOptions} series={SaleChart.series} height="142" type="line" id="sales-state-chart" />
              </CardBody>
            </Card>
          </Col>
          {SmallChartsData.map((item, i) => (
            <Col key={i} xs="4" className="p-0">
              <div className="sales-small-chart">
                <CardBody className="p-0 m-auto ">
                  <div style={{ marginLeft: "38px" }} className={`ct-chart  sales-small${item.className}`}>
                    <ReactApexChart options={item.chartOptions} series={SmallChartData.series} height={35} width={50} type="bar" />
                  </div>
                  <h6>{item.heading}</h6>
                  <span>{item.subHeading}</span>
                </CardBody>
              </div>
            </Col>
          ))}
        </Row>
      </Card>
    </Col>
  );
};
export default SalesStats;
