import { ImagePath } from "@/Constant";
import { NewsUpdate } from "@/Data/Dashboard/Default";
import { DashboardDropdown3 } from "@/Data/Dashboard/ECommerce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Badge, Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import { useAppSelector } from "@/Redux/Hooks";

const NewsAndUpdates = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <Col xl="4" md="6" className="dash-31 dash-xl-50 box-col-6">
      <Card className="news-update">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h5 className="m-0">News &amp; Update</h5>
            <CommonDashboardDropDown items={DashboardDropdown3} />
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="table-responsive">
            <Table borderless>
              <tbody>
                {NewsUpdate.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Media>
                        <Image height={50} width={50} className="img-fluid me-3 b-r-5" src={`${ImagePath}/dashboard/Rectangle-${item.image}.jpg`} alt="" />
                        <Media body>
                          <h5 style={{ cursor: "pointer" }} onClick={() => router.push(`/${i18LangStatus}/blog/blogsingle`)}>
                            {item.title}
                          </h5>
                          <p>{item.description}</p>
                        </Media>
                      </Media>
                    </td>
                    <td>
                      <Badge color="light" className=" font-theme-light">
                        {item.time}
                      </Badge>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default NewsAndUpdates;
