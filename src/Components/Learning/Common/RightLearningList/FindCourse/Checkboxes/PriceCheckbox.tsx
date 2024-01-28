import { Price } from "@/Constant";
import { PriceCheckboxData } from "@/Data/Learning";
import { Fragment } from "react";
import { Input, Label } from "reactstrap";

const PriceCheckbox = () => {
  return (
    <Fragment>
      <div className="checkbox-animated mt-0">
        <div className="learning-header">
          <span className="f-w-600">{Price}</span>
        </div>
        {PriceCheckboxData.map((item, i) => (
          <Label key={i} className="d-block" htmlFor={item.id}>
            <Input className="radio_animated" id={item.id} type="radio" name="rdo-ani" />
            {item.title}
          </Label>
        ))}
      </div>
    </Fragment>
  );
};

export default PriceCheckbox;
