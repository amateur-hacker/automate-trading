import { Col, Row } from "reactstrap";
import LatestUpdate from "./LatestUpdate";
import NavigationFAQ from "./Navigation";
import SearchArticle from "./Search";

const RightSectionFAQ = () => {
  return (
    <>
      <Col xl="4" lg="6" md="5" className="box-col-5">
        <Row>
          <SearchArticle />
          <NavigationFAQ />
          <LatestUpdate />
        </Row>
      </Col>
    </>
  );
};

export default RightSectionFAQ;
