import { EthereumCoin, XRP } from "@/Constant";
import { EthereumChart, EthereumChartOptions } from "@/Data/Dashboard/Crypto";
import dynamic from "next/dynamic";
import { ArrowUp } from "react-feather";
import { Badge, Card, CardBody, CardHeader, Col, Media } from "reactstrap";
import { EthereumSvg } from "../../DashBoardSvg";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Ethereum = () => {
  return (
    <Col xl="3" md="6" className="dash-lg-50 box-col-6">
      <Card className="crypto-chart">
        <CardHeader className="card-no-border">
          <Media>
            <Media body>
              <div className="coin-logo-img bg-light-info">
                <EthereumSvg />
              </div>
              <h5 className="font-info">{EthereumCoin}</h5>
              <span>{XRP}</span>
            </Media>
            <div className="media-end">
              <h6>52367.32</h6>
              <Badge color="light-info" className="text-info">
                <ArrowUp />
                2.8
              </Badge>
            </div>
          </Media>
        </CardHeader>
        <CardBody className="p-0">
          <div className="crypto-dashborad-chart">
            <ReactApexChart options={EthereumChartOptions} series={EthereumChart.series} type="area" height="100" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default Ethereum;
