import { Configuration } from "@/Constant";
import { useCallback, useState } from "react";
import { Button, TabContent, TabPane } from "reactstrap";
import ColorPicker from "./ColorPicker";
import SidebarCustomizer from "./SidebarCustomizer";
import ConfigurationFile from "./ConfigurationFile";

const TabCustomizer = ({ selected, callbackNav }: any) => {
  const [modal, setModal] = useState<boolean>(false);
  const toggle = useCallback(() => {
    setModal(!modal);
  }, [modal]);

  return (
    <TabContent activeTab={selected}>
      <div className="customizer-header">
        <i className="icofont-close icon-close" onClick={() => callbackNav(false)}></i>
        <h5>Live customizer</h5>
        <p className="mb-0">Customize &amp; Preview Real Time</p>
        <Button color="primary" className="plus-popup mt-2" onClick={toggle}>
          {Configuration}
        </Button>
        <ConfigurationFile toggle={toggle} modal={modal}/>
      </div>
      <div className="customizer-body custom-scrollbar tab-content">
        <TabPane tabId="sidebar-type">
          <SidebarCustomizer />
        </TabPane>
        <TabPane tabId="color-picker">
          <ColorPicker />
        </TabPane>
      </div>
    </TabContent>
  );
};

export default TabCustomizer;
