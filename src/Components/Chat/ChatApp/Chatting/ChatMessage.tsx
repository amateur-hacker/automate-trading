import { ImagePath } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { fetchChatMemberAsync, setChats, setSelectedUser } from "@/Redux/Slices/ChatSlice";
import { AllMembersType, ChatType, messageType } from "@/Type/ChatApp";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";

const ChatMessage = () => {
  const bottomRef = useRef<null | HTMLDivElement>(null);
  const [scroll, setScroll] = useState(0);
  const { allMembers, chats, selectedUser, currentUser } = useSelector((state: RootState) => state.ChatReducer);
  const dispatch = useDispatch();

  const fetchChatAsync = () => {
    if (chats.length > 0) {
      const currentUserId = 0;
      const chat = chats.filter((x: ChatType) => x.users.includes(currentUserId));
      const selectedUser = chat[0].users.find((x: number) => x !== currentUserId);
      const oneSelect = allMembers.find((x: AllMembersType) => x.id === selectedUser);
      if (allMembers.length > 0) {
        dispatch(setChats(chat));
        dispatch(setSelectedUser(oneSelect));
      }
      if (allMembers.length > 0) return allMembers.find((x: AllMembersType) => x.id === selectedUser);
    }
  };

  useEffect(() => {
    dispatch(fetchChatMemberAsync());
    fetchChatAsync();
    setScroll(1);
  }, [allMembers.length, chats.length]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chats, scroll]);

  const selectedChat = allMembers && chats && selectedUser ? chats.find((x: ChatType) => x.users.includes(currentUser.id) && x.users.includes(selectedUser.id)) : null;

  return (
    <>
      {allMembers && chats && selectedUser ? (
        <div className="chat-history chat-msg-box custom-scrollbar">
          <ListGroup className="simple-list">
            {selectedChat && selectedChat.messages.length > 0 ? (
              selectedChat.messages.map((item: messageType, id: number) => {
                const participators: AllMembersType = allMembers.find((x: AllMembersType) => x.id === item.sender);
                return (
                  <ListGroupItem key={id} className={` ${item.sender !== currentUser.id ? "" : "clearfix"}`}>
                    <div className={`message my-message ${item.sender !== currentUser.id ? "" : "pull-right other-message"}`}>
                      <Image width={30} height={30} alt={"user"} src={`${ImagePath}/${participators.thumb}`} className={`rounded-circle ${item.sender !== currentUser.id ? "float-start" : "float-end"} chat-user-img img-30 h-auto`} />
                      <div className="message-data text-end">
                        <span className="message-data-time">{item.time}</span>
                      </div>
                      {item.text}
                    </div>
                  </ListGroupItem>
                );
              })
            ) : (
              <div>
                <Image className="img-fluid w-100 h-100" width={1136} height={750} src={`${ImagePath}/start-conversion.jpg`} alt="start conversion " />
              </div>
            )}
            <ListGroupItem>
              <div ref={bottomRef}></div>
            </ListGroupItem>
          </ListGroup>
        </div>
      ) : (
        <div className="loading"></div>
      )}
    </>
  );
};

export default ChatMessage;
