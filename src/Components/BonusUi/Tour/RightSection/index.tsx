import { Col, Row } from "reactstrap";
import PostFirst from "./PostFirst";
import PostSecond from "./PostSecond";
import PostThird from "./PostThird";

const RightSection = () => {
  return (
    <Col xl="9" lg="12" md="7">
      <Row>
        <PostFirst />
        <PostSecond />
        <PostThird />
      </Row>
    </Col>
  );
};

export default RightSection;
