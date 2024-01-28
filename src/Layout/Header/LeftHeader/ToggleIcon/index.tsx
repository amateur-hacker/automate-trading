import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useAppDispatch } from "@/Redux/ReduxStore";
import { sidebarToggle } from "@/Redux/Slices/HeaderSlice";
import { ToggleIconss } from "@/svgIcons";
import Image from "next/image";
import { Media } from "reactstrap";

export const ToggleIcon = () => {
  const sideToggle = useAppSelector((store) => store.headerSlice.sidebarToggle);
  const sidebarToggler = () => {
    dispatch(sidebarToggle(sideToggle == "" ? "close_icon" : ""));
  };
  const dispatch = useAppDispatch();
  return (
    <div className="header-logo-wrapper col-auto p-0">
      <div className="logo-wrapper">
        <Media href="">
          <Image alt="" width={100} height={35} className="img-fluid" src={`${ImagePath}/logo/download.png`} />
        </Media>
      </div>
      <div className="toggle-sidebar">
        <div className="status_toggle sidebar-toggle d-flex" onClick={sidebarToggler}>
          <ToggleIconss />
        </div>
      </div>
    </div>
  );
};
