import React from "react";
import { Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import { Browser, Daily, Monthly, Name, UsageinBrowser, Weekly } from "@/Constant";
import { CommonWidgetsDropdown, UsageInBrowserData } from "@/Data/Widgets/General";
import Image from "next/image";
import { ImagePath } from "@/Constant";

const UsageInBrowser = () => {
  return (
    <Col sm="12">
      <Card className="browser-table">
        <CardHeader>
          <Media>
            <Media body>
              <h5>{UsageinBrowser}</h5>
            </Media>
            {CommonWidgetsDropdown}
          </Media>
        </CardHeader>
        <CardBody>
          <div className="table-responsive mb-0">
            <Table borderless>
              <thead>
                <tr>
                  <th>{Browser}</th>
                  <th>{Name}</th>
                  <th>{Daily}</th>
                  <th>{Weekly}</th>
                  <th>{Monthly}</th>
                </tr>
              </thead>
              <tbody>
                {UsageInBrowserData.map((item, i) => (
                  <tr key={i}>
                    <td>
                      <Image src={`${ImagePath}/dashboard/${item.image}.png`} alt="" height={50} width={50} />
                    </td>
                    <td>{item.name}</td>
                    <td>28%</td>
                    <td>76%</td>
                    <td>36%</td>
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
export default UsageInBrowser;
