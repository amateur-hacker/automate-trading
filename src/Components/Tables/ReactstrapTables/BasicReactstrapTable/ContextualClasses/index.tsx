import { Col, Card, Table } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ContextualClassesTableData, ContexualClassSubHeading } from "@/Data/Table";
import { ContextualClasses } from "@/Constant";

const ContextualClass = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ContextualClasses} subHeading={ContexualClassSubHeading} />
        <div className="table-responsive">
          <Table>
            <thead>
              <tr>
                <th scope="col">Class</th>
                <th scope="col">Heading</th>
                <th scope="col">Heading</th>
              </tr>
            </thead>
            <tbody>
              {ContextualClassesTableData.map((item, i) => (
                <tr className={item.class} key={i}>
                  <th scope="row">{item.trClass}</th>
                  <td>{item.td1}</td>
                  <td>{item.td2}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </Card>
    </Col>
  );
};

export default ContextualClass;
