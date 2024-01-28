import { BuyNow, Href, ImagePath, NeedHelp, RaiseTicket } from "@/Constant";
import Image from "next/image";
import { Button } from "reactstrap";

export const SidebarFooter = () => {
  return (
    <div className="sidebar-img-section">
      <div className="sidebar-img-content">
        <Image className="img-fluid" height={100} width={100} src={`${ImagePath}/side-bar.png`} alt="Ticket" />
        <h4>{NeedHelp}</h4>
        <a className="txt text-decoration-none" href={Href}>
          {RaiseTicket}
        </a>
        <Button color="secondary">{BuyNow}</Button>
      </div>
    </div>
  );
};
