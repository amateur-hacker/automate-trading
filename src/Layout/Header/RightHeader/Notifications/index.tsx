import { CheckAllNotification, Href, Notification } from "@/Constant";
import { HeaderNotificationSvg } from "@/svgIcons";
import { Bell } from "react-feather";
import { MainContent } from "./MainContent";
import { Button } from "reactstrap";

const Notifications = () => {
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <HeaderNotificationSvg />
        <span className="badge rounded-pill badge-warning">4 </span>
      </div>
      <div className="onhover-show-div notification-dropdown">
        <div className="dropdown-title">
          <h3>{Notification}</h3>
          <a className="f-right" href={Href}>
            <Bell />
          </a>
        </div>
        <ul className="custom-scrollbar">
          <MainContent />
          <li>
            <Button color="primary" >
              {CheckAllNotification}
            </Button>
          </li>
        </ul>
      </div>
    </li>
  );
};

export default Notifications;
