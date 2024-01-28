import { Href } from "@/Constant";
import { NotificationData } from "@/Data/Header";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import { X } from "react-feather";
import { Media } from "reactstrap";

export const MainContent = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <>
      {NotificationData.map((item, i) => (
        <li key={i}>
          <Media>
            <div className={`notification-img ${item.class}`}>
              <Image width={28} height={28} src={item.image} alt="image" />
            </div>
            <Media body>
              <h5>
                <Link className="f-14 m-0 text-decoration-none" href={`/${i18LangStatus}/users/userprofile`}>
                  {item.name}
                </Link>
              </h5>
              <p>{item.description}</p>
              <span>{item.time}</span>
            </Media>
            <div className="notification-right">
              <a href={Href}>
                <X />
              </a>
            </div>
          </Media>
        </li>
      ))}
    </>
  );
};
