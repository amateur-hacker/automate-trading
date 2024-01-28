import { Href, ImagePath } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { setToggleSideBar } from "@/Redux/Slices/ChatSlice";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Media } from "reactstrap";

const ChatHeader = () => {
  const { selectedUser } = useSelector((state: RootState) => state.ChatReducer);
  const { toggleSideBar } = useSelector((state: RootState) => state.ChatReducer);
  const dispatch = useDispatch();
  return (
    <Media className="chat-header clearfix">
      <Image className="rounded-circle" width={52} height={52} src={`${ImagePath}/${selectedUser?.thumb ? selectedUser?.thumb : "user/1.jpg"}`} alt="user" />
      <Media body>
        <div className="about">
          <div className="name">{selectedUser ? selectedUser.name : "harry"}</div>
          <div className="status digits">{selectedUser ? selectedUser.lastSeenDate : "5 May, 5:30 PM"}</div>
        </div>
      </Media>
      <ul className="simple-list list-inline float-start float-sm-end chat-menu-icons flex-row">
        <li className="list-inline-item">
          <a href={Href}>
            <i className="icon-search"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={Href}>
            <i className="icon-clip"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={Href}>
            <i className="icon-headphone-alt"></i>
          </a>
        </li>
        <li className="list-inline-item">
          <a href={Href}>
            <i className="icon-video-camera"></i>
          </a>
        </li>
        <li className="list-inline-item toogle-bar">
          <a href={Href}>
            <i className="icon-menu" onClick={() => dispatch(setToggleSideBar(!toggleSideBar))}></i>
          </a>
        </li>
      </ul>
    </Media>
  );
};

export default ChatHeader;
