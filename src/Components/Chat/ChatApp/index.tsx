import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { FetchChatMemberApiData, fetchChatApiData } from "@/Redux/Slices/ChatSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import Chatting from "./Chatting";
import MembersList from "./MembersList";

const ChatApp = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchChatApiData());
    dispatch(FetchChatMemberApiData());
  }, []);
  return (
    <>
      <CommonBreadcrumb parent="Chat" pageTitle="Chat App" />
      <Container fluid={true}>
        <Row>
          <Col sm="12" className="call-chat-sidebar">
            <Card>
              <CardBody className="chat-body">
                <MembersList />
              </CardBody>
            </Card>
          </Col>
          <Col className="call-chat-body">
            <Card>
              <CardBody className="p-0">
                <Chatting />
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ChatApp;
