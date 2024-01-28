import { YearlyChart, YearlyChartOptions } from "@/Data/Dashboard/Default";
import { useAppSelector } from "@/Redux/Hooks";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, CardHeader, Col } from "reactstrap";
const ReactApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const Yearly = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <>
      <Col xl="3" md="6" className="dash-xl-50 box-col-6">
        <Card className="yearly-chart">
          <CardHeader className="card-no-border pb-0">
            <h5 className="pb-2">$3,500,000</h5>
            <h6 className="font-theme-light f-14 m-0">November 2023</h6>
          </CardHeader>
          <CardBody className="pt-0">
            <div>
              <ReactApexChart id="yearly-chart" options={YearlyChartOptions} series={YearlyChart.series} height="160" type="line" />
            </div>
          </CardBody>
        </Card>
      </Col>
      <Col xl="3" md="6" className="dash-xl-50 box-col-6">
        <Card className="bg-primary premium-access">
          <CardBody>
            <h6 className="f-22">Premium Access!</h6>
            <p>We add 20+ new features and update community in your project We add 20+ new features</p>
            <Button color="white" onClick={() => router.push(`/${i18LangStatus}/blog/blogsingle`)} className="btn-outline-white_color">
              Try now for free
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
};
export default Yearly;
