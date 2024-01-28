import { ImagePath } from "@/Constant";
import { CallData } from "@/Data/ChatApp";
import Image from "next/image";

const PeopleList = () => {
  return (
    <div className="people-list">
      <ul className="list digits simple-list custom-scrollbar">
        {CallData.map((item, i) => (
          <li className="clearfix" key={i}>
            <Image className="rounded-circle user-image" height={52} width={52} src={`${ImagePath}/user/${item.imageNumber}.jpg`} alt="call-user" />
            <div className="about">
              <div className="name">{item.name}</div>
              <div className="status">
                {item.icon}
                {item.date}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PeopleList;
