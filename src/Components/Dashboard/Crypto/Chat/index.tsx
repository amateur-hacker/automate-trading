import { Href, ImagePath } from "@/Constant";
import { DashboardDropdown2 } from "@/Data/Dashboard/ECommerce";
import Image from "next/image";
import { Send } from "react-feather";
import { Card, CardBody, CardHeader, Col, Input, InputGroup, InputGroupText, Media } from "reactstrap";
import CommonDashboardDropDown from "../../Common/CommonDashboardDropdown";
import ChatMessage from "./ChatMessge";

const ChatCard = () => {
  return (
    <Col xl="4" md="6" className="dash-31 dash-xl-50 dash-xlorder-1 box-col-6">
      <Card className="cripto-chat">
        <CardHeader className="card-no-border">
          <Media className="media-dashboard">
            <Media body>
              <h5 className="mb-0">Chat </h5>
            </Media>
            <CommonDashboardDropDown items={DashboardDropdown2} />
          </Media>
        </CardHeader>
        <CardBody className="pt-0">
          <div className="chat">
            <Media className="left-side-chat">
              <div className="square-box">
                <a href={Href}>
                  <Image src={`${ImagePath}/avtar/chat-user-1.png`} alt="" height={30} width={30} />
                </a>
              </div>
              <Media body>
                <div className="msg-box"> Project has been already finished and i have results to show you. </div>
              </Media>
            </Media>
            <ChatMessage />
          </div>
          <InputGroup>
            <InputGroupText className="bg-primary">
              <Image src={`${ImagePath}/crypto-dashboard/emoji.png`} alt="" height={20} width={20} />
            </InputGroupText>
            <Input type="text" placeholder="Type a message....." />
            <InputGroupText className=" bg-primary">
              <Send className="font-white" />
            </InputGroupText>
          </InputGroup>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ChatCard;
