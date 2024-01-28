import { LiteCoin, XRP } from "@/Constant";
import { LiteCoinChartOptions, LitecoinChart } from "@/Data/Dashboard/Crypto";
import { Fragment } from "react";
import { ArrowUp } from "react-feather";
import { Badge, Card, CardBody, CardHeader, Col, Media } from "reactstrap";
import { LitecoinSvg } from "../../DashBoardSvg";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Litecoin = () => {
  return (
    <Fragment>
      <Col xl="3" md="6" className="dash-lg-50 box-col-6">
        <Card className="crypto-chart">
          <CardHeader className="card-no-border">
            <Media>
              <Media body>
                <div className="coin-logo-img bg-light-warning">
                  <LitecoinSvg />
                </div>
                <h5 className="font-warning">{LiteCoin}</h5>
                <span>{XRP}</span>
              </Media>
              <div className="media-end">
                <h6>52367.32</h6>
                <Badge color="light-warning" className="text-warning">
                  <ArrowUp />
                  2.8
                </Badge>
              </div>
            </Media>
          </CardHeader>
          <CardBody className="p-0">
            <div className="crypto-dashborad-chart">
              <ReactApexChart options={LiteCoinChartOptions} series={LitecoinChart.series} type="area" height="100" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default Litecoin;
