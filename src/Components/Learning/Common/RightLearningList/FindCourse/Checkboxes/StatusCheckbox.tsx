import { Status } from "@/Constant";
import { StatusCheckboxData } from "@/Data/Learning";
import { Input, Label } from "reactstrap";

const StatusCheckbox = () => {
  return (
    <div className="checkbox-animated mt-0">
      <div className="learning-header">
        <span className="f-w-600">{Status}</span>
      </div>
      {StatusCheckboxData.map((item, i) => (
        <Label key={i} className="d-block" htmlFor={item.id}>
          <Input className="checkbox_animated" id={item.id} type="checkbox" />
          {item.title}
        </Label>
      ))}
    </div>
  );
};
export default StatusCheckbox;
