import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AnotherLink, DropdownButton, DropdownWithDivider, Href } from "@/Constant";
import { DividerDropdownSubHeading } from "@/Data/UiKits/Dropdown";
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const WithDividerDropDown = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={DropdownWithDivider} subHeading={DividerDropdownSubHeading} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <Button color="primary" className="dropbtn">
              {DropdownButton}{" "}
              <span>
                <i className="icofont icofont-arrow-down"></i>
              </span>
            </Button>
            <DropdownMenu className="dropdown-content">
              <DropdownItem href={Href}>{"Link 1"}</DropdownItem>
              <DropdownItem href={Href}>{"Link 2"}</DropdownItem>
              <DropdownItem href={Href}>{"Link 3"}</DropdownItem>
              <DropdownItem divider />
              <DropdownItem href={Href}>{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDividerDropDown;
