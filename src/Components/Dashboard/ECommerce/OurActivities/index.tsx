import { Href } from "@/Constant";
import { DashboardDropdown2, OurActivityData } from "@/Data/Dashboard/ECommerce";
import { Badge, Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";

const OurActivities = () => {
  return (
    <Col xl="3" md="6" className="dash-xl-50 dash-29 box-col-6">
      <Card className="our-activities">
        <CardHeader className="card-no-border">
          <Media className="media-dashboard">
            <Media body>
              <h5 className="mb-0">Our Activities</h5>
            </Media>
            <CommonDashboardDropDown items={DashboardDropdown2} />
          </Media>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="table-responsive">
            <Table borderless>
              <tbody>
                {OurActivityData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Media>
                        <div className="icon-wrappar">
                          <i className={item.Icons}></i>
                        </div>
                        <Media body>
                          <a href={Href}>
                            <h5>{item.title}</h5>
                          </a>
                          <p>{item.place}</p>
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
export default OurActivities;
