import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StripedRowInverseTable } from "@/Constant";
import { StripedRowSubHeading, TableData } from "@/Data/Table";
import { Card, Col, Row, Table } from "reactstrap";

const StripedInverse = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={StripedRowInverseTable} subHeading={StripedRowSubHeading} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table className="table-inverse" striped>
                <thead>
                  <tr>
                    <th scope="col">{"#"}</th>
                    <th scope="col">{"First Name"}</th>
                    <th scope="col">{"Last Name"}</th>
                    <th scope="col">{"Username"}</th>
                  </tr>
                </thead>
                <tbody>
                  {TableData.slice(0, 3).map((item, i) => (
                    <tr key={i}>
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

export default StripedInverse;
