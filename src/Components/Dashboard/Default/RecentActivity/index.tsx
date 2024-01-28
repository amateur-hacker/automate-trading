import { ImagePath, RecentActivity } from "@/Constant";
import { DashboardDropdown2 } from "@/Data/Dashboard/ECommerce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge, Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import Activity2 from "./Activity2";
import Activity3 from "./Activity3";
import { useAppSelector } from "@/Redux/Hooks";

const RecentActivities = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <Col xl="4" md="6" className="dash-31 dash-xl-50 box-col-12">
      <Card className="recent-activity">
        <CardHeader className="card-no-border">
          <Media className="media-dashboard">
            <Media body>
              <h5 className="mb-0">{RecentActivity}</h5>
            </Media>
            <CommonDashboardDropDown items={DashboardDropdown2} />
          </Media>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="table-responsive">
            <Table className="table-bordernone">
              <tbody>
                <tr>
                  <td>
                    <Media>
                      <div className="square-box me-2">
                        <Image height={50} width={50} className="img-fluid b-r-5" src={`${ImagePath}/avtar/teacher.png`} alt="" />
                      </div>
                      <Media body>
                        <h5 style={{ cursor: "pointer" }} onClick={() => router.push(`/${i18LangStatus}/user/userprofile`)}>
                          Alana Brady added new event
                        </h5>
                        <p className="font-primary">Sunday Cooking Class</p>
                      </Media>
                    </Media>
                  </td>
                  <td>
                    <Badge color="light" className="font-theme-light">
                      2 hours ago
                    </Badge>
                  </td>
                </tr>
                <Activity2 />
                <Activity3 />
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default RecentActivities;
