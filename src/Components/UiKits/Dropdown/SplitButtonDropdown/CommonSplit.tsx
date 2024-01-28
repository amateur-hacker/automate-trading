import { Href } from "@/Constant";
import { SplitButtonDropdownProps } from "@/Type/UiKits";
import { Button, ButtonGroup, Dropdown, DropdownItem, DropdownMenu } from "reactstrap";

const SplitButtonDropdown = ({ item }: SplitButtonDropdownProps) => {
  return (
    <ButtonGroup>
      <Button color={item.buttonColor}>{item.buttonText}</Button>
      <Dropdown className="separated-btn">
        <Button color={item.buttonColor}>
          <i className="icofont icofont-arrow-down"></i>
        </Button>
        <DropdownMenu className="dropdown-content digits">
          {item.items.map((item, i) => (
            <DropdownItem href={Href} key={i}>
              {item}
            </DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>
  );
};

export default SplitButtonDropdown;
