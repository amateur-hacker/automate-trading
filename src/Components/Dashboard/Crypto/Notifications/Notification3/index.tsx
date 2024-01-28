import { ImagePath } from "@/Constant";
import { NotificationChart, NotificationChartOptions } from "@/Data/Dashboard/Crypto";
import dynamic from "next/dynamic";
import Image from "next/image";
import { Badge, Media } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Notification3Crypto = () => {
  return (
    <tr>
      <td>
        <Media>
          <div className="square-box">
            <Image height={30} width={50} src={`${ImagePath}/avtar/teacher.png`} alt="" />
          </div>
          <Media body>
            <h5>
              BTC<span className="font-theme-light f-w-400 f-12 ms-3">News</span>
            </h5>
            <p>Bitcoin baru saja salah lho</p>
            <div className="notification-chart-sec">
              <ReactApexChart id="notification-chart" type="line" height="40" options={NotificationChartOptions} series={NotificationChart.series} />
              <span className="font-primary f-w-400 f-10">+39.69%</span>
            </div>
          </Media>
        </Media>
      </td>
      <td>
        <Badge color="light" className="font-theme-light">
          22 Jun 2023
        </Badge>
      </td>
    </tr>
  );
};
export default Notification3Crypto;
