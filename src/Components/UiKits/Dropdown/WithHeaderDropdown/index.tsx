import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { AnotherLink, DropdownButton, DropdownHeader, DropdownWithHeader, Href } from "@/Constant";
import { WithHeaderSubHeading } from "@/Data/UiKits/Dropdown";
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const WithHeaderDropDown = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={DropdownWithHeader} subHeading={WithHeaderSubHeading} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <Button color="primary" className="dropbtn">
              {DropdownButton}{" "}
              <span>
                <i className="icofont icofont-arrow-down"></i>
              </span>
            </Button>
            <DropdownMenu className="dropdown-content">
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href={Href}>{"Link 1"}</DropdownItem>
              <DropdownItem href={Href}>{"Link 2"}</DropdownItem>
              <DropdownItem header>{DropdownHeader}</DropdownItem>
              <DropdownItem href={Href}>{AnotherLink}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithHeaderDropDown;
