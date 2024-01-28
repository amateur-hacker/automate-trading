"use client";
import { useAppSelector } from "@/Redux/Hooks";
import { data } from "@/Type/Sidebar";
import { useTranslation } from "@/app/i18n/client";
import { useRouter } from "next/navigation";
import { Label } from "reactstrap";

export const SidebarList = ({
  handleActive,
  active,
  MENUITEMS,
  level,
  activeLink,
  setActiveLink,
}: data) => {
  const { i18LangStatus } = useAppSelector((state) => state.langSlice);
  const { t } = useTranslation(i18LangStatus);
  const router = useRouter();

  return MENUITEMS.map((item, index) => (
    <li
      key={index}
      className={
        level == 0 ? "sidebar-list list-group-item" : "list-group-item"
      }
    >
      {item.badge && (
        <Label className={`${item.badgeColor}`}>{item.badgeName} </Label>
      )}
      <a
        onClick={() => {
          if (item.type == "sub") {
            handleActive(item.pathSlice, level);
          } else {
            setActiveLink(
              item.path?.split("/")[item.path.split("/").length - 1]
            );
            router.push(`/${i18LangStatus}/${item.path}`);
          }
        }}
        className={
          level == 0
            ? `sidebar-link sidebar-title text-decoration-none ${
                active.includes(item.pathSlice) ||
                activeLink ==
                  item.path?.split("/")[item.path.split("/").length - 1]
                  ? "active"
                  : ""
              }`
            : "text-decoration-none"
        }
        style={{ cursor: "pointer" }}
      >
        {level == 0 ? (
          <>
            {item.icon}
            <span className="lan-3">{t(item.title)}</span>
            {item.items && (
              <div className="according-menu">
                {active.includes(item.pathSlice) ? (
                  <i className="fa fa-angle-down" />
                ) : (
                  <i className="fa fa-angle-right" />
                )}
              </div>
            )}
          </>
        ) : (
          <>
            {t(item.title)}
            {item.type === "sub" && (
              <div className="according-menu">
                <i className="fa fa-angle-right" />
              </div>
            )}
          </>
        )}
      </a>

      {item.items && (
        <>
          <ul
            className={`list-group ${
              level >= 1
                ? "nav-sub-childmenu submenu-content"
                : "sidebar-submenu list-group"
            }`}
            style={
              active.includes(item.pathSlice)
                ? {
                    opacity: "1",
                    transition: "opacity 500ms ease-in 0s",
                    display: "block",
                  }
                : { display: "none" }
            }
          >
            <SidebarList
              MENUITEMS={item.items}
              handleActive={handleActive}
              active={active}
              level={level + 1}
              activeLink={activeLink}
              setActiveLink={setActiveLink}
            />
          </ul>
        </>
      )}
    </li>
  ));
};

//||  pathname.includes(item.items[0].type !=="sub" && item.items[0].path?.split("/")[level+1])
