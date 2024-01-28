import React, { Fragment } from "react";
import { Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import { TradingActivityData } from "@/Data/Dashboard/Crypto";
import { DashboardDropdown1 } from "@/Data/Dashboard/ECommerce";

const TradingActivity = () => {
  return (
    <Fragment>
      <Col xl="4" md="6" className="dash-35 dash-xl-50 box-col-6">
        <Card className="trading-activities ongoing-project">
          <CardHeader className="card-no-border">
            <Media>
              <Media body>
                <h5 className="mb-0">Trading Activities</h5>
              </Media>
              <CommonDashboardDropDown items={DashboardDropdown1} />
            </Media>
          </CardHeader>
          <CardBody className="pt-0">
            <div className="table-responsive">
              <Table borderless>
                <tbody>
                  {TradingActivityData.map((item) => {
                    return (
                      <tr key={item.id}>
                        <td>
                          <Media>
                            {item.arrow}
                            <div className={item.class}>{item.icon}</div>
                            <Media body>{item.name1}</Media>
                          </Media>
                        </td>
                        {item.num1}
                        <td>{item.date}</td>
                        <td className="text-center">{item.status}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};
export default TradingActivity;
