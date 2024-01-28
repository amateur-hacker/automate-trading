import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LazyLoadingTree } from "@/Constant";
import DeniReactTreeView from "deni-react-treeview";
import { Card, CardBody, Col } from "reactstrap";

const LazyLoadingTreeView = () => {
  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader heading={LazyLoadingTree} />
        <CardBody>
          <div id="dragTree">
            <DeniReactTreeView url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json" lazyLoad={true} />
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default LazyLoadingTreeView;
