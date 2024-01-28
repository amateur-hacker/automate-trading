import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import ChatMenu from "../Common/ChatMenu";
import ChatHeader from "./ChatHeader";
import ChatMembers from "./ChatMembers";
import VideoHistory from "./VideoHistory";

const VideoChatContain = () => {
  return (
    <>
      <CommonBreadcrumb parent="Chat" pageTitle="Video Chat" />
      <Container fluid>
        <Row>
          <Col className="call-chat-sidebar">
            <Card>
              <CardBody className="chat-body">
                <ChatMembers />
              </CardBody>
            </Card>
          </Col>
          <Col className="call-chat-body">
            <Card>
              <CardBody className="p-0">
                <Row className="chat-box">
                  <Col className="chat-right-aside">
                    <div className="chat">
                      <ChatHeader />
                      <VideoHistory />
                    </div>
                  </Col>
                  <ChatMenu />
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default VideoChatContain;
