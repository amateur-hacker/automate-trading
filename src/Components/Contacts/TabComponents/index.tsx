import { Business, Favourites, FollowUp, Holidays, Ideas, Important } from "@/Constant";
import { ContactReducerType, TabComponentsProps } from "@/Type/Contacts";
import { useSelector } from "react-redux";
import { Col, TabContent, TabPane } from "reactstrap";
import HistoryClass from "./History";
import NoDataFoundClass from "./NoDataFound";
import OrganizationTab from "./OrganizationTab";
import PersonalTab from "./PersonalTab";

const TabComponents = ({ activeTab }:TabComponentsProps) => {
  const { users } = useSelector((state: ContactReducerType) => state.ContactReducer);
  return (
    <Col xl="9" md="12" className="xl-70 box-col-9">
      <div className="email-right-aside bookmark-tabcontent contacts-tabs">
        <div className="email-body radius-left">
          <div className="ps-0">
            <TabContent activeTab={activeTab}>
              <TabPane tabId="1">
                <PersonalTab users={users} />
              </TabPane>
              <TabPane tabId="2">
                <OrganizationTab />
              </TabPane>
              <TabPane tabId="3">
                <NoDataFoundClass title={FollowUp} />
              </TabPane>
              <TabPane tabId="4">
                <NoDataFoundClass title={Favourites} />
              </TabPane>
              <TabPane tabId="5">
                <NoDataFoundClass title={Ideas} />
              </TabPane>
              <TabPane tabId="6">
                <NoDataFoundClass title={Important} />
              </TabPane>
              <TabPane tabId="7">
                <NoDataFoundClass title={Business} />
              </TabPane>
              <TabPane tabId="8">
                <NoDataFoundClass title={Holidays} />
              </TabPane>
              <HistoryClass /> 
            </TabContent>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default TabComponents;
