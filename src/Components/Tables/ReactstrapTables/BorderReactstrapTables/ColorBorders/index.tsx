import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BorderBottomColor } from "@/Constant";
import { ColorBorderSubHeading, ColorBordersData, TableHeadData } from "@/Data/Table";
import React from "react";
import { Col, Card, Table } from "reactstrap";

const ColorBorderTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={BorderBottomColor} subHeading={ColorBorderSubHeading} />
        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                {TableHeadData.slice(0, 4).map((item, i) => (
                  <th key={i} scope="col">
                    {item}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {ColorBordersData.map((item, i) => (
                <tr className={`border-bottom-${item}`}>
                  <th scope="row">{i + 1}</th>
                  <td>Jacob</td>
                  <td>Thornton</td>
                  <td>@fat</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default ColorBorderTable;
