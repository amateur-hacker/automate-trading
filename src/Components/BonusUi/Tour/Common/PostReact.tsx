import { ImagePath } from "@/Constant";
import { PostReactType } from "@/Type/BonusUi";
import Image from "next/image";

const PostReact = ({ h6 }: PostReactType) => {
  return (
    <>
      <div className="post-react">
        <ul className="flex-row simple-list">
          <li>
            <Image height={50} width={50} className="rounded-circle" src={`${ImagePath}/user/2.jpg`} alt="" />
          </li>
          <li>
            <Image height={50} width={50} className="rounded-circle" src={`${ImagePath}/user/3.png`} alt="" />
          </li>
          <li>
            <Image height={50} width={50} className="rounded-circle" src={`${ImagePath}/user/4.jpg`} alt="" />
          </li>
        </ul>
        <h6>{h6}</h6>
      </div>
    </>
  );
};

export default PostReact;
