import { Duration } from "@/Constant";
import { DurationCheckBoxData } from "@/Data/Learning";
import { Input, Label } from "reactstrap";

const DurationCheckBox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{Duration}</span>
      </div>
      {DurationCheckBoxData.map((item, i) => (
        <Label key={i} className="d-block" htmlFor={item.id}>
          <Input className="checkbox_animated" id={item.id} type="checkbox" />
          {item.time}
        </Label>
      ))}
    </div>
  );
};

export default DurationCheckBox;
