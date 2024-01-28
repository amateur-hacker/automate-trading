import { ThemifyListConst } from "@/Constant";
import { ThemFyListData } from "@/Data/UiKits/Typography";
import { Col } from "reactstrap";

const ThemifyList = () => {
  return (
    <Col sm="12" xl="4">
      <h6 className="sub-title">{ThemifyListConst}</h6>
      <ul>
        <li>
          <i className="icofont icofont-ui-rate-add txt-success me-2"></i>
          Lorem ipsum dolor sit amet
        </li>
        {ThemFyListData.map((element, index) => (
          <li key={index}>
            <i className="icofont icofont-ui-rate-add txt-success me-2"></i>
            {element}
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default ThemifyList;
