import { ImagePath, WE_ARE_COMING_SOON } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { Container } from "reactstrap";
import CountdownData from "../Common/CountdownData";
import { useAppSelector } from "@/Redux/Hooks";

const WithBackgroundComingSoon = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <div className="page-wrapper" id="pageWrapper">
      <Container fluid className="p-0 m-0">
        <div className="comingsoon comingsoon-bgimg">
          <div className="comingsoon-inner text-center">
            <Link href={`/${i18LangStatus}/dashboard/default`}>
              <Image className="img-fluid for-light" src={`${ImagePath}/logo/small-logo.png`} alt="" height={40} width={120} />
            </Link>
            <h5>{WE_ARE_COMING_SOON}</h5>
            <div className="countdown" id="clockdiv">
              <CountdownData />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default WithBackgroundComingSoon;
