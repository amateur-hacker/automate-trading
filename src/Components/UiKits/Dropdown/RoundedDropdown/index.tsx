import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, RoundedDropdown } from "@/Constant";
import { RoundedData } from "@/Data/UiKits/Dropdown";
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";
import RoundedDropdowns from "./CommonRounded";

const RoundedDropDown = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
        <CommonCardHeader heading={RoundedDropdown} />
        <CardBody className="dropdown-basic">
          <Dropdown>
            <ButtonGroup className="mb-0">
              <Button className="dropbtn btn-round rounded-pill" color="primary">
                Primary button
                <span>
                  <i className="icofont icofont-arrow-down"></i>
                </span>
              </Button>
              <DropdownMenu className="dropdown-content">
                <DropdownItem href={Href}>Action</DropdownItem>
                <DropdownItem href={Href}>Another Action</DropdownItem>
                <DropdownItem href={Href}>Something Else Here</DropdownItem>
                <DropdownItem href={Href}>Separated Link</DropdownItem>
              </DropdownMenu>
            </ButtonGroup>
          </Dropdown>
          {RoundedData.map((items, index) => (
            <RoundedDropdowns key={index} item={items} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default RoundedDropDown;
