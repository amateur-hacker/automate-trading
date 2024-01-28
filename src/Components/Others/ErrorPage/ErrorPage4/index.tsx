import { BACK_TO_HOME_PAGE } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { Error4 } from "@/svgIcons";
import Link from "next/link";
import { Button, Col, Container } from "reactstrap";

const ErrorPage4 = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <div className="error-wrapper error-page1">
      <Container>
        <div className="svg-wrraper">
          <Error4 />
        </div>
        <Col md="8" className="offset-md-2">
          <h2>Oops! This Page is Not Found.</h2>
          <p className="sub-content">The page you are attempting to reach is currently not available. This may be because the page does not exist or has been moved.</p>
          <Link href={`/${i18LangStatus}/dashboard/default`}>
            <Button size="lg" color="primary">
              {BACK_TO_HOME_PAGE}
            </Button>
          </Link>
        </Col>
      </Container>
    </div>
  );
};

export default ErrorPage4;
