import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { WeatherIcon, WhetherIconsWithAnimations } from "@/Constant";
import { WeatherIconData } from "@/Data/Icons/WeatherIcons";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const WeatherIcons = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle={WeatherIcon} parent="Icons" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={WhetherIconsWithAnimations} />
              <CardBody>
                <Row className="icon-lists whether-icon">
                  {WeatherIconData.map((icon, i) => (
                    <Col xs="4" lg="2" key={i}>
                      {icon.icon}
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default WeatherIcons;
