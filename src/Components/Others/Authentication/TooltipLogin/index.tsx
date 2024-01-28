import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import LoginForm from "../Common/LogInForm";

const TooltipLogin = () => {
  return (
    <Container fluid className="p-0">
      <Row>
        <Col xl="5" style={{ backgroundImage: `url(${ImagePath}/login/3.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", display: "block" }}></Col>
        <Col xl="7 p-0">
          <div className="login-card1">
            <LoginForm />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default TooltipLogin;
