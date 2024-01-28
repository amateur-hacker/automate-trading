import { Col, Card, Table } from "reactstrap";
import React from "react";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { InverseTable } from "@/Constant";
import { InverseTableSubHeading, TableData, TableHeadData } from "@/Data/Table";

const InverseTables = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={InverseTable} subHeading={InverseTableSubHeading} />
        <div className="table-responsive">
          <Table className="table-inverse" >
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

export default InverseTables;
