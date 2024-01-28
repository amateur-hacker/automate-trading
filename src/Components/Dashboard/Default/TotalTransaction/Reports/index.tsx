import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import { Button, CardBody, Col, Media, Progress, Row } from "reactstrap";

const Reports = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <CardBody className="pt-0">
      <Row>
        <Col xl="6" className="report-main">
          <div className="report-content text-center">
            <p className="font-theme-light">This Week</p>
            <h5>+86.53%</h5>
            <Progress className="progress progress-round-primary" style={{ width: "45%" }} />
          </div>
        </Col>
        <Col xl="6">
          <div className="report-content text-center">
            <p className="font-theme-light">Last Week</p>
            <h5>-34.50%</h5>
            <Progress className="progress progress-round-secondary" style={{ width: "65%" }} />
          </div>
        </Col>
        <Col xs="12">
          <Media className="report-perfom">
            <Media body>
              <p className="font-theme-light">Performance </p>
              <h5 className="m-0">+93.82%</h5>
            </Media>
            <Button color="primary" onClick={() => router.push(`/${i18LangStatus}/blog/blogsingle`)}>
              New Report
            </Button>
          </Media>
        </Col>
      </Row>
    </CardBody>
  );
};
export default Reports;
