import { Href, ImagePath } from "@/Constant";
import { setToggleSideBar } from "@/Redux/Slices/ChatSlice";
import { ChatAppType } from "@/Type/ChatApp";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Media } from "reactstrap";

const ChatHeader = () => {
  const { toggleSideBar } = useSelector((state: ChatAppType) => state.ChatReducer);
  const dispatch = useDispatch();
  return (
    <Media className="chat-header clearfix">
      <Image className="rounded-circle" src={`${ImagePath}/user/8.jpg`} alt=" " height={50} width={50} />
      <Media body>
        <div className="about">
          <div className="name">Vincent Porter</div>
          <div className="status digits">5 May, 5:30 PM</div>
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
            <i
              className="icon-menu"
              onClick={() => {
                dispatch(setToggleSideBar(!toggleSideBar));
              }}
            ></i>
          </a>
        </li>
      </ul>
    </Media>
  );
};
export default ChatHeader;
