import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Col, Card, Table } from "reactstrap";
import { TableData, TableHeadData, VerticalBorderTableSubHeading } from "@/Data/Table";
import { VerticalBorders } from "@/Constant";

const VerticalBorderTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={VerticalBorders} subHeading={VerticalBorderTableSubHeading} />
        <div className="table-responsive">
          <Table className="table-border-vertical">
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

export default VerticalBorderTable;
