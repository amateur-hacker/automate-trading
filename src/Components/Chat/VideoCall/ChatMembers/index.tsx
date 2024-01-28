import { ImagePath } from "@/Constant";
import { ChatMembersData } from "@/Data/ChatApp";
import Image from "next/image";
import { useState } from "react";
import { Media } from "reactstrap";
import CurrentUserVideo from "./CurrentUserVideo";
import SearchMembers from "./SearchMembers";

const ChatMembers = () => {
  const [membersData, setMembersData] = useState(ChatMembersData);

  return (
    <div className="chat-box">
      <div className="chat-left-aside">
        <CurrentUserVideo />
        <div className="people-list" id="people-list">
          <SearchMembers setMembersData={setMembersData} />
          <ul className="simple-list list custom-scrollbar">
            {membersData.map((item) => {
              return (
                <li className="clearfix" key={item.id}>
                  <Media>
                    <Image height={50} width={50} src={`${ImagePath}/${item.image}`} className="rounded-circle user-image" alt="" />
                    <div className={`status-circle ${item.online === true ? "online" : "offline"}`}></div>
                    <Media body>
                      <div className="about">
                        <div className="name">{item.name}</div>
                        <div className="status">{item.status}</div>
                      </div>
                    </Media>
                  </Media>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default ChatMembers;
