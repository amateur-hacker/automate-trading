import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Input, InputGroup, InputGroupText, Media } from "reactstrap";

const AddComments = () => {
  return (
    <div className="comments-box">
      <Media>
        <Image height={50} width={50} className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/1.jpg`} />
        <Media body>
          <InputGroup className="text-box">
            <Input className="input-txt-bx" type="text" name="message-to-send" placeholder="Post Your commnets" />
            <InputGroupText className="input-group-append">
              <Image height={30} width={30} src={`${ImagePath}/smiley.png`} alt="emoji" />
            </InputGroupText>
          </InputGroup>
        </Media>
      </Media>
    </div>
  );
};

export default AddComments;
