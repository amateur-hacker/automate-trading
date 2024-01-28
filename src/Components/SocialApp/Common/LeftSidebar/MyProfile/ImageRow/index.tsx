import { ImagePath } from "@/Constant";
import { MyProfileSectionData } from "@/Data/SocialApp";
import Image from "next/image";
import { UncontrolledTooltip } from "reactstrap";

const ImageRow = () => {
  return (
    <div className="customers text-center social-group">
      <ul>
        {MyProfileSectionData.map((item, i) => (
          <li key={i} className="d-inline-block">
            <Image height={30} width={30} className="img-30 rounded-circle" src={`${ImagePath}/user/${item.image}`} alt="" id={item.id} />
            <UncontrolledTooltip placement="top" target={item.id}>
              {item.name}
            </UncontrolledTooltip>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageRow;
