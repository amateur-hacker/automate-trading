import React from "react";
import { Card, CardBody, CardHeader, Col, Media } from "reactstrap";
import { Clock } from "react-feather";
import { RecentActivities } from "@/Constant";
import { CommonWidgetsDropdown, RecentActivityData } from "@/Data/Widgets/General";

const RecentActivity = () => {
  return (
    <Col xl="4" md="6" className="box-col-6 dash-lg-50">
      <div>
        <Card>
          <CardHeader className="pb-0">
            <Media>
              <Media body>
                <h5>{RecentActivities}</h5>
              </Media>
              {CommonWidgetsDropdown}
            </Media>
          </CardHeader>
          <CardBody>
            <div className="activity-media">
              {RecentActivityData.map((item) => {
                return (
                  <Media key={item.id}>
                    <div className="recent-circle bg-primary"></div>
                    <Media body>
                      <h6 className="font-roboto">{item.title}</h6>
                      <span>
                        <Clock className="me-2" />
                        <span className="font-roboto">25 July 2023 | 20 hours ago</span>
                      </span>
                    </Media>
                  </Media>
                );
              })}
            </div>
          </CardBody>
        </Card>
      </div>
    </Col>
  );
};
export default RecentActivity;
