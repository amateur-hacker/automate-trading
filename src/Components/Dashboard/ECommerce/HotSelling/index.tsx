import { Href, ImagePath } from "@/Constant";
import { DashboardDropdown3, HotSellingData } from "@/Data/Dashboard/ECommerce";
import Image from "next/image";
import { Badge, Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";

const HotSellingProduct = () => {
  return (
    <Col xl="4" md="6" className="dash-lgorder-1 dash-xl-33 dash-lg-50 box-col-6">
      <Card className="hot-selling">
        <CardHeader className="card-no-border">
          <div className="header-top">
            <h5 className="m-0">Hot Selling Products</h5>
            <CommonDashboardDropDown items={DashboardDropdown3} />
          </div>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="table-responsive">
            <Table borderless>
              <tbody>
                {HotSellingData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Media>
                        <Image className="img-fluid me-3 b-r-5" src={`${ImagePath}/dashboard-2/rectangle-${item.image}.png`} alt="" height={50} width={50} />
                        <Media body>
                          <a href={Href}>
                            <h5>{item.title}</h5>
                          </a>
                          <p>{item.sales}</p>
                        </Media>
                      </Media>
                    </td>
                    <td>
                      <Badge color="light" className="font-theme-light">
                        {item.prize}
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
export default HotSellingProduct;
