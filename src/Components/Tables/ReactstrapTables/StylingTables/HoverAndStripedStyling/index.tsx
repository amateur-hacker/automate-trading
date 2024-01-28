import { Row, Col, Card, Table } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomTableColorHoverStripped } from "@/Constant";
import { CustomHoverAndStripedSubHeading, TableData, TableHeadData } from "@/Data/Table";

const CustomHoverAndStriped = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={CustomTableColorHoverStripped} subHeading={CustomHoverAndStripedSubHeading} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive table-border-radius">
              <Table hover striped className="table-styling  table-primary">
                <thead>
                  <tr>
                    {TableHeadData.slice(0, 4).map((item, i) => (
                      <th key={i}>{item}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {TableData.map((item) => (
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

export default CustomHoverAndStriped;
