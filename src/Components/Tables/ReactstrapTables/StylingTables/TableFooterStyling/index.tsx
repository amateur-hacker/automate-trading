import { Row, Col, Card, Table } from "reactstrap";

import { TableData, TableFooterStylingSubHeading, TableHeadData } from "@/Data/Table";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TableFootersStyling } from "@/Constant";

const TableFooterStyling = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={TableFootersStyling} subHeading={TableFooterStylingSubHeading} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive table-border-radius">
              <Table>
                <thead>
                  <tr>
                    {TableHeadData.slice(0, 4).map((item, i) => (
                      <th key={i}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TableData.slice(3, 5).map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.user_name}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="table-success">
                  <tr>
                    <th scope="row">{"3"}</th>
                    <td>{"Larry"}</td>
                    <td>{"the Bird"}</td>
                    <td>{"@twitter"}</td>
                  </tr>
                </tfoot>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};

export default TableFooterStyling;
