import { Table } from "react-feather";
import { Col } from "reactstrap";

const CompanyDetails = () => {
  return (
    <Col md="6">
      <Table>
        <tbody>
          <tr>
            <td>
              <b>{"Seller"} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
            </td>
            <td>{"ABC"}</td>
          </tr>
          <tr>
            <td>
              <b>{"Fabric"}&nbsp;&nbsp;&nbsp;:&nbsp;&nbsp;&nbsp;</b>
            </td>
            <td>{"Cotton"}</td>
          </tr>
        </tbody>
      </Table>
    </Col>
  );
};

export default CompanyDetails;
