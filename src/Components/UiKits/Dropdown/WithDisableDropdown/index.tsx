import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Active, Disabled, DropdownButton, DropdownWithDisable, Href, Normal } from "@/Constant";
import { WithDisabledSubHeading } from "@/Data/UiKits/Dropdown";
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const WithDisableDropDown = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={DropdownWithDisable} subHeading={WithDisabledSubHeading} />
        <CardBody className="dropup-basic">
          <Dropdown className="dropup">
            <Button color="primary" className="dropbtn">
              {DropdownButton}{" "}
              <span>
                <i className="icofont icofont-arrow-up"></i>
              </span>
            </Button>
            <DropdownMenu className="dropup-content dropdown-content">
              <DropdownItem href={Href}>{Normal}</DropdownItem>
              <DropdownItem href={Href} active>
                {Active}
              </DropdownItem>
              <DropdownItem href={Href} disabled>
                {Disabled}
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDisableDropDown;
