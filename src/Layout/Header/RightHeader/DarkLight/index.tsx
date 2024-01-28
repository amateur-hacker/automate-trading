import { useAppSelector } from "@/Redux/Hooks";
import { setBackground } from "@/Redux/Slices/HeaderSlice";
import { DayLightSvg, MoonlightSvg } from "@/svgIcons";
import { useDispatch } from "react-redux";

const DarkLight = () => {
  const dispatch = useDispatch();
  const { backgroundChange } = useAppSelector((store) => store.headerSlice);
  const backgroundToggler = () => {
    dispatch(setBackground(!backgroundChange));
    if (!backgroundChange) {
      document.body.classList.add("dark-only");
      document.body.classList.remove("light");
    } else {
      document.body.classList.remove("dark-only");
      document.body.classList.add("light");
    }
  };
  return (
    <li>
      <div className="mode animated backOutRight" onClick={backgroundToggler}>
        {!backgroundChange ? <DayLightSvg /> : <MoonlightSvg />}
      </div>
    </li>
  );
};

export default DarkLight;
