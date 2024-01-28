import { ImagePath, WE_ARE_COMING_SOON } from "@/Constant";
import Image from "next/image";
import Link from "next/link";
import { Container } from "reactstrap";
import CountdownData from "../Common/CountdownData";
import { useAppSelector } from "@/Redux/Hooks";

const ComingSoonSimple = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <div className="page-wrapper compact-wrapper" id="pageWrapper">
      <Container fluid className="p-0">
        <div className="comingsoon">
          <div className="comingsoon-inner text-center">
            <Link href={`/${i18LangStatus}/dashboard/default`}>
              <Image height={50} width={120} className="img-fluid" src={`${ImagePath}/logo/small-logo.png`} alt="" />
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

export default ComingSoonSimple;
