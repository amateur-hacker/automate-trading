import { Col, Card, CardHeader, Table } from "reactstrap";
import React from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTable } from "@/Constant";
import { BasicTableSubHeading, TableData, TableHeadData } from "@/Data/Table";

const BasicTables = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={BasicTable} subHeading={BasicTableSubHeading} />
        <div className="table-responsive">
          <Table>
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

export default BasicTables;
