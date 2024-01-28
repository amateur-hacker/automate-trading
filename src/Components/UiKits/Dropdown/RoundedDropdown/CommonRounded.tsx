import { Href } from "@/Constant";
import { RoundedDropdownProps } from "@/Type/UiKits";
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const RoundedDropdowns = ({ item }: RoundedDropdownProps) => {
  return (
    <Dropdown>
      <ButtonGroup className="mb-0">
        <Button className="dropbtn btn-round rounded-pill" color={item.buttonColor}>
          {item.buttonText}
          <span>
            <i className="icofont icofont-arrow-down"></i>
          </span>
        </Button>
        <DropdownMenu className="dropdown-content">
          {item.items.map((item, i) => (
            <DropdownItem href={Href} key={i}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </ButtonGroup>
    </Dropdown>
  );
};

export default RoundedDropdowns;
