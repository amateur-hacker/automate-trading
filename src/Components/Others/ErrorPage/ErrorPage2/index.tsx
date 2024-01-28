import { BACK_TO_HOME_PAGE } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Error2 } from "@/svgIcons";
import Link from "next/link";
import { Button, Col, Container } from "reactstrap";

const ErrorPage2 = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <div className="page-wrapper" id="pageWrapper">
      <div className="error-wrapper">
        <Container>
          <div className="error-page1">
            <div className="svg-wrraper">
              <Error2 />
            </div>
            <Col md="8" className="offset-md-2">
              <h2>500 - Internal server error</h2>
              <p className="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
              <Link href={`${i18LangStatus}/dashboard/default`}>
                <Button size="lg" color="primary">
                  {BACK_TO_HOME_PAGE}
                </Button>
              </Link>
            </Col>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default ErrorPage2;
