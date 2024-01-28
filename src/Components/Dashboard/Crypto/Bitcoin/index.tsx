import { BTC, Bitcoin } from "@/Constant";
import { BitcoinChart, BitcoinChartOptions } from "@/Data/Dashboard/Crypto";
import dynamic from "next/dynamic";
import { ArrowUp } from "react-feather";
import { Badge, Card, CardBody, CardHeader, Col, Media } from "reactstrap";
import { BitCoinSvg } from "../../DashBoardSvg";
import ReactApexChart from 'react-apexcharts' 
// const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BitCoin = () => {
  return (
    <Col xl="3" md="6" className="dash-lg-50 box-col-6">
      <Card className="crypto-chart">
        <CardHeader className="card-no-border">
          <Media>
            <Media body>
              <div className="coin-logo-img bg-light-primary">
                <BitCoinSvg />
              </div>
              <h5 className="font-primary">{Bitcoin}</h5>
              <span>{BTC}</span>
            </Media>
            <Media className="media-end">
              <h6>305.64</h6>
              <Badge color="light-primary" className="text-primary">
                <ArrowUp />
                7.6
              </Badge>
            </Media>
          </Media>
        </CardHeader>
        <CardBody className="p-0">
          <div className="crypto-dashborad-chart">
            <ReactApexChart options={BitcoinChartOptions} series={BitcoinChart.series} type="area" height="100" id="bitcoin-chart" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default BitCoin;
