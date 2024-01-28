import { ImagePath } from "@/Constant";
import { DashboardDropdown1, RecentOrderTableHead, RecentOrdersTableData } from "@/Data/Dashboard/ECommerce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import { useAppSelector } from "@/Redux/Hooks";

const RecentOrders = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <Col xl="5" md="12" className="dash-35  dash-xl-50 dash-lg-100 box-col-12">
      <Card className="ongoing-project">
        <CardHeader className="card-no-border">
          <Media className="media-dashboard">
            <Media body>
              <h5 className="mb-0">Recent Orders</h5>
            </Media>
            <CommonDashboardDropDown items={DashboardDropdown1} />
          </Media>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="table-responsive">
            <Table className="table-bordernone">
              <thead>
                <tr>
                  {RecentOrderTableHead.map((item, i) => (
                    <th key={i}>
                      <span>{item}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RecentOrdersTableData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Media>
                        <div className="square-box me-2">
                          <Image height={30} width={30} className="img-fluid b-r-5" src={`${ImagePath}/dashboard-2/${item.image}.png`} alt="" />
                        </div>
                        <Media body className="ps-2">
                          <div className="avatar-details">
                            <h6 style={{ cursor: "pointer" }} onClick={() => router.push(`/${i18LangStatus}/ecommerce/productlist`)}>
                              {item.name}
                            </h6>
                            <span> {item.team}</span>
                          </div>
                        </Media>
                      </Media>
                    </td>
                    <td className="img-content-box">
                      <h6>{item.date}</h6>
                      <span>{item.time}</span>
                    </td>
                    <td>
                      <h6>{item.price}</h6>
                      <span>NOK</span>
                    </td>
                    <td>
                      <h6>{item.quantity}</h6>
                    </td>
                    <td>
                      <div className={item.class}>{item.status}</div>
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
export default RecentOrders;
