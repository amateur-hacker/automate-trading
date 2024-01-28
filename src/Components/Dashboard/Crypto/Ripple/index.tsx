import React from "react";
import { ArrowUp } from "react-feather";
import { Badge, Card, CardBody, CardHeader, Col, Media } from "reactstrap";
import { RippleChart, RippleChartOptions } from "@/Data/Dashboard/Crypto";
import { RippleSvg } from "../../DashBoardSvg";
import dynamic from "next/dynamic";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Ripple = () => {
  return (
    <Col xl="3" md="6" className="dash-lg-50 box-col-6">
      <Card className="crypto-chart">
        <CardHeader className="card-no-border">
          <Media>
            <Media body>
              <div className="coin-logo-img bg-light-secondary">
                <RippleSvg />
              </div>
              <h5 className="font-secondary">Ripple</h5>
              <span>(XRP)</span>
            </Media>
            <div className="media-end">
              <h6>52367.32</h6>
              <Badge color="light-secondary" className="text-secondary">
                <ArrowUp />
                2.8
              </Badge>
            </div>
          </Media>
        </CardHeader>
        <CardBody className="p-0">
          <div className="crypto-dashborad-chart">
            <ReactApexChart options={RippleChartOptions} series={RippleChart.series} type="area" height="100" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Ripple;
