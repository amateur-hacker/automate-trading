import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { BasicTree } from "@/Constant";
import DeniReactTreeView from "deni-react-treeview";
import { Card, CardBody, Col } from "reactstrap";

const BasicTreeView = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader heading={BasicTree} />
        <CardBody>
          <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
            <DeniReactTreeView style={{ marginRight: "10px", marginBottom: "10px" }} showCheckbox={false} theme={"classic"} url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries-by-continents.json" />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicTreeView;
