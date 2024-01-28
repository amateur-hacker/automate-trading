import { ImagePath } from "@/Constant";
import { OnGoingData, OngoingTableData } from "@/Data/Dashboard/Default";
import { DashboardDropdown1 } from "@/Data/Dashboard/ECommerce";
import Image from "next/image";
import { Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";

const OutgoingProject = () => {
  return (
    <Col xl="4" md="6" className="dash-35 dash-xl-50 box-col-6">
      <Card className="ongoing-project">
        <CardHeader className="card-no-border">
          <Media className="media-dashboard">
            <Media body>
              <h5 className="mb-0">Ongoing Projects</h5>
            </Media>
            <CommonDashboardDropDown items={DashboardDropdown1} />
          </Media>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="table-responsive">
            <Table className="table-bordernone">
              <thead>
                <tr>
                  {OngoingTableData.map((item, i) => (
                    <th key={i}>
                      <span>{item}</span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {OnGoingData.map((item) => (
                  <tr key={item.id}>
                    <td>
                      <Media>
                        <div className="square-box me-2">
                          <Image className="img-fluid b-r-5" src={`${ImagePath}/avtar/${item.image}.png`} alt="" height={20} width={20} />
                        </div>
                        <Media body className="ps-2">
                          <div className="avatar-details">
                            <a href="">
                              <h6>{item.name}</h6>
                            </a>
                            <span>{item.team}</span>
                          </div>
                        </Media>
                      </Media>
                    </td>
                    <td className="img-content-box">
                      <h6>{item.date}</h6>
                      <span>{item.time}</span>
                    </td>
                    <td>
                      <h6>{item.title}</h6>
                      <span>{item.prize}</span>{" "}
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
export default OutgoingProject;
