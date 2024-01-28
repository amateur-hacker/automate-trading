import { ImagePath } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { changeChat, createNewChatAsync } from "@/Redux/Slices/ChatSlice";
import { AllMembersType } from "@/Type/ChatApp";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem, Media } from "reactstrap";
import CurrentUser from "../CurrentUser";
import SearchMember from "../SearchMember";

const MembersList = () => {
  const { members, currentUser, selectedUser, chats } = useSelector((state: RootState) => state.ChatReducer);
  var activeChat = 0;
  if (selectedUser != null) activeChat = selectedUser.id;
  const dispatch = useDispatch();
  const changeChatClick = (selectedUserId: number) => {
    const currentUserId = currentUser.id;
    const currentChat = chats.find((x: { users: number[] }) => x.users.includes(currentUser.id) && x.users.includes(selectedUserId));
    if (currentChat) {
      dispatch(changeChat(selectedUserId));
    } else {
      dispatch(createNewChatAsync({ currentUserId, selectedUserId, chats }));
    }
  };
  return (
    <div className="chat-box">
      <div className="chat-left-aside">
        <CurrentUser />
        <div className="people-list">
          <SearchMember />
          {members && members.length > 0 ? (
            <ListGroup className="simple-list custom-scrollbar">
              {members
                .filter((x: AllMembersType) => x.id !== currentUser.id)
                .map((item: AllMembersType, id: number) => (
                  <ListGroupItem key={id} className={`clearfix ${activeChat === item.id ? "active" : ""}`} onClick={() => changeChatClick(item.id)}>
                    <Media>
                      <Image height={52} width={52} src={`${ImagePath}/${item.thumb}`} className="rounded-circle user-image" alt={"user"} />
                      <div className={`status-circle ${item.online === true ? "online" : "offline"}`}></div>
                      <Media body className="about ">
                        <div className="name">{item.name}</div>
                        <div className="status">{item.status}</div>
                      </Media>
                    </Media>
                  </ListGroupItem>
                ))}
            </ListGroup>
          ) : (
            <Image className="img-fluid m-auto" height={137} width={200} src={`${ImagePath}/search-not-found.png`} alt="search-not-found" />
          )}
        </div>
      </div>
    </div>
  );
};

export default MembersList;
