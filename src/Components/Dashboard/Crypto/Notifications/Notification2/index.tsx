import { ImagePath } from "@/Constant";
import Image from "next/image";
import { Badge, Media } from "reactstrap";

const Notification2Crypto = () => {
  return (
    <tr>
      <td>
        <Media>
          <div className="square-box">
            <Image height={30} width={50} src={`${ImagePath}/avtar/teacher.png`} alt="" />
          </div>
          <Media body>
            <h5>
              Lottie Marsh<span className="font-theme-light f-w-400 f-12 ms-3">Sent you a message</span>
            </h5>
            <p>Bro iki nggo tutu es anakmu yo, judi neh!!</p>
            <span className="font-primary f-12">+380.234</span>
          </Media>
        </Media>
      </td>
      <td>
        <Badge color="light" className="font-theme-light">
          10 jul 2023
        </Badge>
      </td>
    </tr>
  );
};
export default Notification2Crypto;
