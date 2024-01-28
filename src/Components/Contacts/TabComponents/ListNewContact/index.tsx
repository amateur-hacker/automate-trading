import { ListNewContactProps, UserCallbackUserType } from "@/Type/Contacts";
import Image from "next/image";
import { useState } from "react";
import { Col, Media, Nav, NavLink } from "reactstrap";
import SearchNotFoundClass from "../SearchNotFound";

const ListNewContact = ({ users, userCallback }: ListNewContactProps) => {
  const [dynamicTab, setDynamicTab] = useState(0);

  const ContactDetails = (user: UserCallbackUserType) => {
    userCallback({ id: user.id, name: user.name, surname: user.surname, avatar: user.avatar, age: user.age, mobile: user.mobile });
  };

  return (
    <Col xl="4" md="5" className="xl-50">
      <Nav pills className="flex-column ">
        {users ? (
          users.map((user: UserCallbackUserType, index: number) => {
            return (
              <NavLink className={dynamicTab === index ? "active" : ""} onClick={() => setDynamicTab(index)} key={index}>
                <Media onClick={() => ContactDetails(user)}>
                  <Image height={100} width={100} className="p-0 img-fluid img-50 m-r-20 rounded-circle update_img_0" src={`${user.avatar}`} alt="userImage" />
                  <Media body>
                    <h6>
                      <span className="first_name_0">{user.name}</span>
                      <span className="last_name_0">{user.surname}</span>
                    </h6>
                    <p className="email_add_0">
                      {user.name}
                      {"@gmail.com"}
                    </p>
                  </Media>
                </Media>
              </NavLink>
            );
          })
        ) : (
          <SearchNotFoundClass />
        )}
      </Nav>
    </Col>
  );
};

export default ListNewContact;
