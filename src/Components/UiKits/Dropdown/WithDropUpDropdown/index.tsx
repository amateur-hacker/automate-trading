import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DropdownButton, DropdownWithDropUp, Href } from "@/Constant";
import { WithDropUpSubHeading } from "@/Data/UiKits/Dropdown";
import { Button, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const WithDropUpDropDown = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={DropdownWithDropUp} subHeading={WithDropUpSubHeading} />
        <CardBody className="dropup-basic">
          <Dropdown className="dropup">
            <Button color="primary" className="dropbtn">
              {DropdownButton}{" "}
              <span>
                <i className="icofont icofont-arrow-up"></i>
              </span>
            </Button>
            <DropdownMenu className="dropup-content dropdown-content">
              <DropdownItem href={Href}>{"Link 1"}</DropdownItem>
              <DropdownItem href={Href}>{"Link 2"}</DropdownItem>
            </DropdownMenu>
          </Dropdown>
        </CardBody>
      </Card>
    </Col>
  );
};

export default WithDropUpDropDown;
