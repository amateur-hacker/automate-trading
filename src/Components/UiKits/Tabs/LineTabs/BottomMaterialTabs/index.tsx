import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { MaterialStyleBottomTab, SimpleMaterialStyleTab } from "@/Constant";
import { useState } from "react";
import { Card, CardBody, Col, Nav, TabContent, TabPane } from "reactstrap";
import CommonTabNav from "../../Common/CommonTabNav";
import { TabNaneData } from "@/Data/UiKits/BootstrapTabs";
import { SimpleMaterialTabsSubHeading } from "@/Data/UiKits/LineTabs";

const BottomMaterialTabs = () => {
  const [bottomMaterialTab, setBottomMaterialTab] = useState("1");
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={MaterialStyleBottomTab} subHeading={SimpleMaterialTabsSubHeading} />
        <CardBody>
          <TabContent activeTab={bottomMaterialTab}>
            {TabNaneData.map((item, i) => (
              <TabPane key={i} tabId={item.id}>
                <p className="mb-0 mb-4">{item.text}</p>
              </TabPane>
            ))}
          </TabContent>
          <Nav className="border-tab" tabs>
            <CommonTabNav state={bottomMaterialTab} setState={setBottomMaterialTab} />
          </Nav>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BottomMaterialTabs;
