import { Personal } from "@/Constant";
import { PersonalTabProps, UserCallbackUserType, UserUpdateType } from "@/Type/Contacts";
import { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { Card, CardBody, CardHeader, Col, Row, TabContent, TabPane } from "reactstrap";
import ContactDetailsClass from "../ContactDetails";
import ListNewContact from "../ListNewContact";
import UpdateUser from "../UpdateUser";

const PersonalTab = ({ users }: PersonalTabProps) => {
  const [selectedUser, setSelectedUser] = useState<undefined | UserCallbackUserType | UserUpdateType>();
  const [editing, setEditing] = useState(false);
  const [editData, setEditData] = useState({});
  const dispatch = useDispatch();
  const userCallback = useCallback((user: UserCallbackUserType) => {
    setSelectedUser(user);
  }, []);
  const userEditCallback = useCallback((edit: boolean, usersData: UserUpdateType) => {
    setEditData(usersData);
    setSelectedUser(usersData);
    setEditing(edit);
    dispatch({ type: "setEditRow", payload: usersData });
  }, []);
  const spanText = `${users?.length} Contacts`;

  return (
    <Card>
      <CardHeader className="d-flex">{Personal}</CardHeader>
      <CardBody className="p-0">
        <Row className="list-persons" id="addcon">
          <ListNewContact users={users} userCallback={userCallback} />
          <Col xl="8" md="7" className="xl-50">
            {editing ? (
              <UpdateUser editData={editData} userEditCallback={userEditCallback} />
            ) : (
              <TabContent activeTab={0}>
                <TabPane tabId={0}>
                  <ContactDetailsClass selectedUser={selectedUser ? selectedUser : users[0]} userEditCallback={userEditCallback} />
                </TabPane>
              </TabContent>
            )}
          </Col>
        </Row>
      </CardBody>
    </Card>
  );
};

export default PersonalTab;
