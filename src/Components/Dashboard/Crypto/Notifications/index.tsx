import { CliffordHale, ImagePath, Notification } from "@/Constant";
import { DashboardDropdown2 } from "@/Data/Dashboard/ECommerce";
import Image from "next/image";
import { Fragment } from "react";
import { Badge, Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import Notification2Crypto from "./Notification2";
import Notification3Crypto from "./Notification3";

const NotificationCrypto = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="dash-31 dash-xl-50 box-col-6">
        <Card className="cripto-notification">
          <CardHeader className="card-no-border">
            <Media className="media-dashboard">
              <Media body>
                <h5 className="mb-0">{Notification}</h5>
              </Media>
              <CommonDashboardDropDown items={DashboardDropdown2} />
            </Media>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="table-responsive">
              <Table borderless>
                <tbody>
                  <tr>
                    <td>
                      <Media>
                        <div className="square-box">
                          <Image height={30} width={50} src={`${ImagePath}/avtar/teacher.png`} alt="" />
                        </div>
                        <Media body>
                          <h5>
                            {CliffordHale}
                            <span className="font-theme-light f-w-400 f-12 ms-3">Sent you a message</span>
                          </h5>
                          <p className="mb-0">Hello bro anak ? wes Kulish urung?...</p>
                        </Media>
                      </Media>
                    </td>
                    <td>
                      <Badge color="light" className="font-theme-light">
                        2 hours ago
                      </Badge>
                    </td>
                  </tr>
                  <Notification2Crypto />
                  <Notification3Crypto />
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default NotificationCrypto;
