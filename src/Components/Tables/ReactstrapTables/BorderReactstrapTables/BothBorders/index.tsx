import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Col, Card, Table } from "reactstrap";
import { BothBorderTableSubHeading, TableData, TableHeadData } from "@/Data/Table";
import { BothBorders } from "@/Constant";

const BothBorderTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={BothBorders} subHeading={BothBorderTableSubHeading} />
        <div className="table-responsive">
          <Table bordered>
            <thead>
              <tr>
                {TableHeadData.slice(0,4).map((item, i) => (
                  <th key={i} scope="col">
                    {item}
                  </th>
                ))}
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
      </Card>
    </Col>
  );
};

export default BothBorderTable;
