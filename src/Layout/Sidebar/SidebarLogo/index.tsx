import { Href, ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useAppDispatch } from "@/Redux/ReduxStore";
import { sidebarToggle } from "@/Redux/Slices/HeaderSlice";
import Image from "next/image";
import { Media } from "reactstrap";

export const SidebarLogo = () => {
  const dispatch = useAppDispatch();
  const { backgroundChange } = useAppSelector((store) => store.headerSlice);

  return (
    <div className="logo-wrapper">
      <Media href={Href}>{!backgroundChange ? <Image height={35} width={100} className="img-fluid for-light" src={`${ImagePath}/logo/small-logo.png`} alt="logo" /> : backgroundChange || document.body.classList.contains("dark-sidebar") ? <Image className="img-fluid for-dark" height={35} width={100} src={`${ImagePath}/logo/logo_dark.png`} alt="logo" /> : ""}</Media>
      <div className="back-btn " onClick={() => dispatch(sidebarToggle("close_icon"))}>
        <i className="fa fa-angle-left " />
      </div>
    </div>
  );
};
