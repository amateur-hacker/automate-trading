import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { DropdownSplitButton, Href } from "@/Constant";
import { SplitData } from "@/Data/UiKits/Dropdown";
import { Button, ButtonGroup, Card, CardBody, Col, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";
import SplitButtonDropdown from "./CommonSplit";

const SplitButtonDropDown = () => {
  return (
    <Col sn="12" xl="12">
      <Card>
        <CommonCardHeader heading={DropdownSplitButton} />
        <CardBody className="dropdown-basic">
          <ButtonGroup>
            <Button color="primary">Primary Button</Button>
            <Dropdown className="separated-btn">
              <Button color="primary">
                <i className="icofont icofont-arrow-down"></i>
              </Button>
              <DropdownMenu className="dropdown-content digits">
                <DropdownItem href={Href}>Link 1</DropdownItem>
                <DropdownItem href={Href}>Link 1</DropdownItem>
                <DropdownItem href={Href}>Link 1</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </ButtonGroup>
          {SplitData.map((items, i) => (
            <SplitButtonDropdown key={i} item={items} />
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default SplitButtonDropDown;
