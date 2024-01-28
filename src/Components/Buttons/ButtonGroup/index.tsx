import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ButtonGroups, Left, Middle, Right } from "@/Constant";
import { GroupButtonData } from "@/Data/Buttons";
import { Button, ButtonGroup, Card, CardBody, Col, Row } from "reactstrap";

const GroupButton = () => {
  return (
    <Col xs="12">
      <Card>
        <CommonCardHeader heading={ButtonGroups} />
        <CardBody>
          <div className="btn-group-showcase">
            <Row>
              <Col xl="4" md="6" sm="12">
                <ButtonGroup>
                  <Button color="primary">{Left}</Button>
                  <Button color="primary">{Middle}</Button>
                  <Button color="primary">{Right}</Button>
                </ButtonGroup>
              </Col>
              {GroupButtonData.map((item, i) => (
                <Col key={i} xl="4" md="6" sm="12 ">
                  <ButtonGroup className={item == "dark" ? "button-group-mb-sm" : ""}>
                    <Button color={item}>{Left}</Button>
                    <Button color={item}>{Middle}</Button>
                    <Button color={item}>{Right}</Button>
                  </ButtonGroup>
                </Col>
              ))}
            </Row>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default GroupButton;
