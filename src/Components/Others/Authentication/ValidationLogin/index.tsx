import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import LoginForm from "../Common/LogInForm";

const ValidationLogin = () => {
  return (
    <Container fluid>
      <Row>
        <Col xl="7 order-1" style={{ backgroundImage: `url(${ImagePath}/login/1.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", display: "block" }}></Col>
        <Col xl="5 p-0">
          <div className="login-card1">
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ValidationLogin;
