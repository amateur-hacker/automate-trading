import { BackendDevelopment, Design, Development, FrontendDevelopment, Href } from "@/Constant";
import { CategoriesLearningData } from "@/Data/Learning";
import { CollapseDataProps } from "@/Type/Knowledgebase";
import { Badge, Collapse } from "reactstrap";

const CollapseData = ({ isProfile }: CollapseDataProps) => {
  return (
    <Collapse isOpen={isProfile}>
      <div className="categories">
        <div className="learning-header">
          <span className="f-w-600">{Design}</span>
        </div>
        <ul>
          {CategoriesLearningData.map((item, i) => (
            <li key={i}>
              <a href={Href}>{item.title} </a>
              <Badge color="primary" className="pull-right">
                {item.number}
              </Badge>
            </li>
          ))}
        </ul>
      </div>
      <div className="categories pt-0">
        <div className="learning-header">
          <span className="f-w-600">{Development}</span>
        </div>
        <ul>
          <li>
            <a href={Href}>{FrontendDevelopment}</a>
            <Badge color="primary" className=" pull-right">
              48
            </Badge>
          </li>
          <li>
            <a href={Href}>{BackendDevelopment}</a>
            <Badge color="primary" className=" pull-right">
              19
            </Badge>
          </li>
        </ul>
      </div>
    </Collapse>
  );
};

export default CollapseData;
