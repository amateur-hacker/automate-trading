import { Row, Col, Card, Table } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { TableData, TableHeadData, TableHeadStylingSubHeading } from "@/Data/Table";
import { TableHeadOptions } from "@/Constant";

const TableHeadStyling = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={TableHeadOptions} subHeading={TableHeadStylingSubHeading} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table>
                <thead className="table-primary">
                  <tr>
                    {TableHeadData.slice(0, 4).map((item, i) => (
                      <th key={i}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TableData.slice(0, 3).map((item) => (
                    <tr key={item.id}>
                      <th scope="row">{item.id}</th>
                      <td>{item.first_name}</td>
                      <td>{item.last_name}</td>
                      <td>{item.user_name}</td>
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

export default TableHeadStyling;
