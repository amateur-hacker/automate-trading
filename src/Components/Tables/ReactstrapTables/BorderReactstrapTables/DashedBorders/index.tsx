import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Col, Card, Table } from "reactstrap";
import { DashedBorderSubHeading, TableData, TableHeadData } from "@/Data/Table";
import { DashedBorder } from "@/Constant";

const DashedBorderTable = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={DashedBorder} subHeading={DashedBorderSubHeading} />
        <div className="table-responsive">
          <Table className="table-dashed">
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

export default DashedBorderTable;
