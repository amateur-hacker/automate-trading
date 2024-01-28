import { Steps } from "@/Data/BonusUi/Tour";
import { TourProvider } from "@reactour/tour";
import TourComponents from "./TourComponents";

const Tour = () => {
  return (
    <>
      <TourProvider steps={Steps} disableInteraction={true} disableKeyboardNavigation={false}>
        <TourComponents />
      </TourProvider>
    </>
  );
};

export default Tour;
