import { SidebarMenu } from "@/Data/Sidebar";
import { RootState } from "@/Redux/ReduxStore";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight } from "react-feather";
import { useSelector } from "react-redux";
import { SidebarFooter } from "./SidebarFooter";
import { SidebarList } from "./SidebarList";
import { SidebarLogo } from "./SidebarLogo";

const Sidebar = () => {
  const [sidebarMargin, setSidebarMargin] = useState(0);
  const sideBarToggle = useSelector((store: RootState) => store.headerSlice.sidebarToggle);
  const pathname = usePathname();
  const [prev, setPrev] = useState<number | undefined>();
  const [active, setActive] = useState(pathname ? pathname : "");
  const [activeLink, setActiveLink] = useState<string | undefined>(active.split("/")[active.split("/").length - 1]);

  const handleActive = (title: string, level: number) => {
    if (active.includes(title)) {
      if (active.includes("/")) {
        const tempt = active.split("/");
        tempt.splice(level, tempt.length - level);
        setActive(tempt.join("/"));
        setPrev(level);
      } else {
        setActive("");
      }
    } else {
      if (level < active.split("/").length) {
        if (level == prev) {
          const tempt = active.split("/");
          tempt.splice(level, 1, title);
          setActive(tempt.join("/"));
        } else {
          setActive(title);
        }
      } else {
        setPrev(level);
        const tempt = active;
        const concateString = tempt.concat(`/${title}`);
        setActive(concateString);
      }
    }
  };
  useEffect(() => {
    if (sideBarToggle != "close_icon") {
      window.addEventListener("resize", () => {
        if (window.innerWidth < 992) {
          document.getElementById("sidebar-wrapper")?.classList?.add("close_icon");
          document.getElementById("page-header")?.classList?.add("close_icon");
        } else {
          document.getElementById("sidebar-wrapper")?.classList?.remove("close_icon");
          document.getElementById("page-header")?.classList?.remove("close_icon");
        }
      });
    }
  }, []);

  return (
    <div className={`sidebar-wrapper ${sideBarToggle}`} id="sidebar-wrapper">
      <div>
        <SidebarLogo />
        <nav className="sidebar-main hovered">
          <div className={`left-arrow ${sidebarMargin == 0 && "disabled"} `} id="left-arrow" onClick={() => setSidebarMargin(sidebarMargin + 700)}>
            <ArrowLeft />
          </div>
          <div id="sidebar-menu" style={{ margin: "0px" }}>
            <ul className="custom-scrollbar simple-list sidebar-links mt-1 list-group" id="simple-bar">
              <div className="simplebar-wrapper">
                <div className="simplebar-mask">
                  <div className="simplebar-offset" style={{ right: "0px", bottom: "0px" }}>
                    <div className="simplebar-content-wrapper" style={{ height: "100%" }}>
                      <div className="simplebar-content" style={{ marginLeft: sidebarMargin.toString() + "px" }}>
                        <li className="back-btn list-group-item">
                          <div className="mobile-back text-end">
                            <span>Back</span> <i className="fa fa-angle-right ps-2" />
                          </div>
                        </li>
                        {SidebarMenu.map((item, i) => (
                          <SidebarList setActiveLink={setActiveLink} key={i} activeLink={activeLink} handleActive={handleActive} active={active} MENUITEMS={item.items} level={0} />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </ul>
            {/* <SidebarFooter /> */}
          </div>
          <div className={`right-arrow ${sidebarMargin <= -2800 && "disabled"}`} id="right-arrow" onClick={() => setSidebarMargin(sidebarMargin - 700)}>
            <ArrowRight />
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
