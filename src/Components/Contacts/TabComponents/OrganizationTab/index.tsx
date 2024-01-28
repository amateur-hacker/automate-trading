import { Organization } from "@/Constant";
import { SetStateAction, useCallback, useState } from "react";
import { Card, CardBody, CardHeader, Col, Row, TabContent } from "reactstrap";
import NavOrg from "./NavOrgTab";
import TabOrg from "./TabOrgTab";

const OrganizationTab = () => {
  const [orgActiveTab, setOrgActiveTab] = useState("1");
  const callback = useCallback((tab: SetStateAction<string>) => {
    setOrgActiveTab(tab);
  }, []);

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h5>{Organization}</h5>
        <span className="f-14 pull-right mt-0">{"10 Contacts"}</span>
      </CardHeader>
      <CardBody className="p-0">
        <Row className="list-persons">
          <NavOrg callback={callback} />
          <Col xl="8" md="7" className="xl-50">
            <TabContent activeTab={orgActiveTab}>
              <TabOrg />
            </TabContent>
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default OrganizationTab;
