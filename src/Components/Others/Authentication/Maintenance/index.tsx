import { BACK_TO_HOME_PAGE, MAINTENANCE } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Link from "next/link";
import { Button, Container } from "reactstrap";

const Maintenance = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <div className="page-wrapper">
      <div className="error-wrapper maintenance-bg">
        <Container>
          <ul className="simple-list maintenance-icons">
            <li>
              <i className="fa fa-cog" />
            </li>
            <li>
              <i className="fa fa-cog"></i>
            </li>
            <li>
              <i className="fa fa-cog"></i>
            </li>
          </ul>
          <div className="maintenance-heading">
            <h2 className="headline">{MAINTENANCE}</h2>
          </div>
          <h4 className="sub-content">
            Our Site is Currently under maintenance We will be back Shortly
            <br />
            Thank You For Patience
          </h4>
          <div>
            <Link href={`/${i18LangStatus}/dashboard/default`}>
              <Button size="lg" className="btn-primary-gradien text-light">
                {BACK_TO_HOME_PAGE}
              </Button>
            </Link>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default Maintenance;
