import { ImagePath } from "@/Constant";
import { TotalEarning, TotalEarningOptions, WeeklyEvent, WeeklyEventOptions } from "@/Data/Dashboard/Default";
import { useAppSelector } from "@/Redux/Hooks";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader, Col } from "reactstrap";
const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const DailyEarning = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <>
      <Col xl="3" md="6" className="dash-xl-50 box-col-6">
        <Card className="pb-0 o-hidden earning-card">
          <CardHeader className="earning-back"></CardHeader>
          <CardBody className="p-0">
            <div className="earning-content" style={{ position: "relative" }}>
              <Image height={40} width={40} className="img-fluid" src={`${ImagePath}/avtar/man.png`} alt="" />
              <h4 style={{ cursor: "pointer" }} onClick={() => router.push(`/${i18LangStatus}/blog/blogsingle`)}>
                Today's Earning
              </h4>
              <span>(Mon 15 - Sun 21)</span>
              <h6>$573.67</h6>
              <ApexChart id="earning-chart" options={TotalEarningOptions} series={TotalEarning.series} type="area" height={145} />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3" md="6" className="dash-xl-50 box-col-6">
        <Card className="weekly-column">
          <CardBody className="card-body p-0">
            <ApexChart options={WeeklyEventOptions} series={WeeklyEvent.series} id="weekly-chart" type="bar" height="230" />
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default DailyEarning;
