import { Col, Card, Table } from "reactstrap";
import React from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import {  HoverableRows } from "@/Constant";
import { HoverableRowSubHeading, TableData, TableHeadData } from "@/Data/Table";

const HoverableRow = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={HoverableRows} subHeading={HoverableRowSubHeading} />
        <div className="table-responsive">
          <Table hover>
            <thead>
              <tr>
                {TableHeadData.map((item, i) => (
                  <th key={i} scope="col">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {TableData.map((item, i) => (
                <tr key={i}>
                  <th scope="row">{item.id}</th>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.user_name}</td>
                  <td>{item.role}</td>
                  <td>{item.country}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default HoverableRow;
