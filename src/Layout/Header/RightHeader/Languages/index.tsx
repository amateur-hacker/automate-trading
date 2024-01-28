import { Href } from "@/Constant";
import { LanguagesData } from "@/Data/Header";
import { useAppSelector } from "@/Redux/Hooks";
import { setLanguage } from "@/Redux/Slices/language";
import { useTranslation } from "@/app/i18n/client";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

const Languages = () => {
  const { i18LangStatus } = useAppSelector((state: any) => state.langSlice);
  const { i18n } = useTranslation(i18LangStatus);

  const pathname = usePathname();
  const router = useRouter();
  const dispatch = useDispatch();

  const changeLng = (lng: string) => {
    dispatch(setLanguage(lng));
    i18n.changeLanguage(lng);
    const languageCodeRegex = /^\/[a-z]{2}(\/|$)/;
    const updatedPath = pathname.replace(languageCodeRegex, `/${lng}$1`);
    router.push(updatedPath);
  };

  useEffect(() => {
    const pathSegments = pathname.split("/").filter(Boolean);
    if (pathSegments.length > 0) {
      const language = pathSegments[0];
      if (language !== i18LangStatus) {
        dispatch(setLanguage(language));
      }
    }
  }, []);
  return (
    <li className="onhover-dropdown list-group-item">
      <h6 className="txt-dark mb-0 mt-1">EN</h6>
      <div className="language-dropdown onhover-show-div">
        <ul className="simple-list p-3 list-group">
          {LanguagesData.map((item, i) => (
            <li
              key={i}
              className="list-group-item "
              onClick={() => {
                changeLng(item.data);
              }}
            >
              <a href={Href} className="text-decoration-none" data-lng={item.data}>
                <i className={item.logo} /> {item.language}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
};

export default Languages;
