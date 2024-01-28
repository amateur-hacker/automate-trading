import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Action, AnotherAction, BasicDropdown, DropdownButton, Href, SomethingElseHere } from "@/Constant";
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const BasicDropDown = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
        <CommonCardHeader heading={BasicDropdown} />
        <CardBody className="dropdown-basic">
          <Dropdown className="dropdown">
            <Button color="primary" className="dropbtn">
              {DropdownButton}{" "}
              <span>
                <i className="icofont icofont-arrow-down"></i>
              </span>
            </Button>
            <DropdownMenu className="dropdown-content">
              <DropdownItem href={Href}>{Action}</DropdownItem>
              <DropdownItem href={Href}>{AnotherAction}</DropdownItem>
              <DropdownItem href={Href}>{SomethingElseHere}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicDropDown;
