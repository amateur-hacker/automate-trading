import { ImagePath } from "@/Constant";
import { Col, Container, Row } from "reactstrap";
import RegisterForm from "../Common/RegisterForm";

const BackgroundImageRegister = () => {
  return (
    <section>
      <Container fluid className="p-0">
        <Row className="m-0">
          <Col xl="5" style={{ backgroundImage: `url(${ImagePath}/login/3.jpg)`, backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center", display: "block" }}></Col>
          <Col xl="7 p-0">
            <div className="login-card1">
              <RegisterForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BackgroundImageRegister;
