import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { GridOptionsHeading, Href } from "@/Constant";
import { GridOptionsSubHeading } from "@/Data/UiKits/Grid";
import { Card, CardBody, Col, Table } from "reactstrap";
import { TableBody } from "./TableBody";
import TableHead from "./TableHead";
const GridOptionsCard = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={GridOptionsHeading} subHeading={GridOptionsSubHeading} />
        <CardBody>
          <p>
            {"While Bootstrap uses"} <code>{"em"} </code>
            {"or"} <code>{"rem"} </code>
            {"for defining most sizes"}, <code>{"px"}</code> {"are used for grid breakpoints and container widths. This is because the viewport width is in pixels and does not change with the"} <a href={Href}>{"font size"}</a>.
          </p>
          <div className="table-responsive">
            <Table bordered striped>
              <TableHead />
              <TableBody />
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GridOptionsCard;
