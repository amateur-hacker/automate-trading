import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Action, AnotherAction, BasicColorDropdown, Href, SomethingElseHere } from "@/Constant";
import { BasicColorData } from "@/Data/UiKits/Dropdown";
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const BasicColorDropDown = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
        <CommonCardHeader heading={BasicColorDropdown} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <ButtonGroup className="mb-0">
              <Button color="primary" className="dropbtn">
                Action{" "}
                <span>
                  <i className="icofont icofont-arrow-down"></i>
                </span>
              </Button>
              <DropdownMenu className="dropdown-content">
                <DropdownItem href={Href}>{Action}</DropdownItem>
                <DropdownItem href={Href}>{AnotherAction}</DropdownItem>
                <DropdownItem href={Href}>{SomethingElseHere}</DropdownItem>
                <DropdownItem divider />
                <DropdownItem href={Href}>{"Separated Link"}</DropdownItem>
              </DropdownMenu>
            </ButtonGroup>
          </Dropdown>
          {BasicColorData.map((item, i) => (
            <Dropdown key={i}>
              <ButtonGroup className=" mb-0">
                <Button className="dropbtn" color={item}>
                  {Action}
                  <span>
                    <i className="icofont icofont-arrow-down"></i>
                  </span>
                </Button>
                <DropdownMenu className="dropdown-content">
                  <DropdownItem href={Href}>{Action}</DropdownItem>
                  <DropdownItem href={Href}>{AnotherAction}</DropdownItem>
                  <DropdownItem href={Href}>{SomethingElseHere}</DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem href={Href}>{"Separated Link"}</DropdownItem>
                </DropdownMenu>
              </ButtonGroup>
            </Dropdown>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BasicColorDropDown;
