import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TableDataCount, TableRepeatData } from "@/Data/Table";
import { Card, Col, Row, Table } from "reactstrap";
import { ResponsiveTables } from "../../../../../Constant";

const ResponsiveTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ResponsiveTables} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <thead>
                  <tr>
                    <th scope="col">{"#"}</th>
                    {TableDataCount.map((item, i) => (
                      <th key={i} scope="col">
                        Table heading
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TableRepeatData.slice(0, 3).map((item, i) => (
                    <tr key={i}>
                      <th scope="row">{"1"}</th>
                      {TableDataCount.map((item, i) => (
                        <td key={i}>{"Table cell"}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </Table>
            </div>
          </Col>
        </Row>
      </Card>
    </Col>
  );
};
export default ResponsiveTable;
