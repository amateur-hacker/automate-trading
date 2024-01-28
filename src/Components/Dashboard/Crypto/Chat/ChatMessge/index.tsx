//@ts-nocheck
import Image from "next/image";
import React from "react";
import { Media } from "reactstrap";
import { Href, ImagePath } from "@/Constant";
import { Gallery, Item } from "react-photoswipe-gallery";
const ChatMessage = () => {
  return (
    <>
      <Media className="right-side-chat">
        <Media body>
          <div className="msg-box">
            Well I am not sure. The rest of the team is not here yet
            <Image height={30} width={30} className="img-fluid" src={`${ImagePath}/crypto-dashboard/emoji.png`} alt="" />
          </div>
        </Media>
        <div className="square-box ms-2">
          <a href={Href}>
            <Image height={30} width={30} src={`${ImagePath}/avtar/chat-user-1.png`} alt="" />
          </a>
        </div>
      </Media>
      <Media className="left-side-chat">
        <div className="square-box">
          <a href={Href}>
            <Image height={30} width={30} src={`${ImagePath}/avtar/chat-user-1.png`} alt="" />
          </a>
        </div>
        <Gallery>
          <Item original={`${ImagePath}/dashboard-2/rectangle-26.png`} width="800" height="800">
            {({ ref, open }) => <Image className="me-2 " ref={ref} alt="" height={35} width={50} onClick={open} src={`${ImagePath}/dashboard-2/rectangle-26.png`} />}
          </Item>
          <Item original={`${ImagePath}/dashboard-2/rectangle-27.png`} width="800" height="800">
            {({ ref, open }) => <Image  ref={ref} alt="" height={35} width={50} onClick={open} src={`${ImagePath}/dashboard-2/rectangle-27.png`} />}
          </Item>
        </Gallery>
      </Media>
    </>
  );
};

export default ChatMessage;