import React, { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
import DeniReactTreeView from "deni-react-treeview";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CheckboxTree } from "@/Constant";

const CheckboxTreeView = () => {
  return (
    <Fragment>
      <Col sm="6">
        <Card>
          <CommonCardHeader heading={CheckboxTree}/>
          <CardBody>
            <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
               <DeniReactTreeView style={{ marginRight: "10px", marginBottom: "10px" }} showCheckbox={true} theme={"classic"} url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries-by-continents.json" />
            </div>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default CheckboxTreeView;
