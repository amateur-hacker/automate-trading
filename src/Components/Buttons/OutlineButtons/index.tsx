import OutlineDisabledButtons from "./DisabledOulineButtons";
import OutlineExtraSmallButtons from "./ExtraSmallOutlineButtons";
import OutlineLargeButtons from "./LargeOutlineButtons";
import OutlineButtons from "./OutlineButtons";
import OutlineSmallButtons from "./SmallOutlineButtons";

const AllOutlineButtons = () => {
  return (
    <>
      <OutlineButtons />
      <OutlineLargeButtons />
      <OutlineSmallButtons />
      <OutlineExtraSmallButtons />
      <OutlineDisabledButtons />
    </>
  );
};

export default AllOutlineButtons;
