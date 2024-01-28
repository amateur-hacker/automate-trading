import { Col, Card, Row, Table } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { StripedRowSubHeading, TableData } from "@/Data/Table";
import { StripedRow } from "@/Constant";

const StripedRows = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={StripedRow} subHeading={StripedRowSubHeading} />
        <Row className="card-block ">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive">
              <Table striped>
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

export default StripedRows;
