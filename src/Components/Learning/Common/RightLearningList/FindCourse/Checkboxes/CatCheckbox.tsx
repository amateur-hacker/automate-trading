import { Categories } from "@/Constant";
import { CatCheckboxData } from "@/Data/Learning";
import { Input, Label } from "reactstrap";

const CatCheckBox = () => {
  return (
    <div className="checkbox-animated">
      <div className="learning-header">
        <span className="f-w-600">{Categories}</span>
      </div>
      {CatCheckboxData.map((item, i) => (
        <Label key={i} className="d-block" htmlFor={item.id}>
          <Input className="checkbox_animated" id={item.id} type="checkbox" />
          {item.title}
        </Label>
      ))}
    </div>
  );
};

export default CatCheckBox;
