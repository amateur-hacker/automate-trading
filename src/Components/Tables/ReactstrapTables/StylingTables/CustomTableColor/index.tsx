import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CustomTableColor } from "@/Constant";
import { CustomTableColorsSubHeading, TableData, TableHeadData } from "@/Data/Table";
import { Card, Col, Row, Table } from "reactstrap";

const CustomTableColors = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={CustomTableColor} subHeading={CustomTableColorsSubHeading} />
        <Row className="card-block">
          <Col sm="12" lg="12" xl="12">
            <div className="table-responsive table-border-radius">
              <Table className="table-styling table-primary">
                <thead>
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

export default CustomTableColors;
