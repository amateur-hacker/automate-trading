import { Href, ImagePath, MoreComments } from "@/Constant";
import { SocialChatData } from "@/Data/SocialApp";
import Image from "next/image";
import { Media } from "reactstrap";

const Comments = () => {
  return (
    <div className="social-chat">
      {SocialChatData.map((item, i) => (
        <div key={i} className={item.className}>
          <Media>
            <Image height={30} width={40} className="img-50 img-fluid m-r-20 rounded-circle" alt="user" src={`${ImagePath}/user/${item.image}`} />
            <Media body>
              <span className="f-w-600">
                {item.name}&nbsp;
                <span>
                  {item.time} <i className="fa fa-reply font-primary" />
                </span>
              </span>
              <p>{item.comment}</p>
            </Media>
          </Media>
        </div>
      ))}

      <div className="text-center">
        <a href={Href}>{MoreComments}</a>
      </div>
    </div>
  );
};

export default Comments;
