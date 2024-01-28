//@ts-nocheck
import { ImagePath } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import { useRouter } from "next/navigation";
import "photoswipe/dist/photoswipe.css";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Badge, Media } from "reactstrap";

const Activity3 = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <tr>
      <td>
        <Media>
          <div className="square-box me-2">
            <Image height={50} width={50} className="img-fluid b-r-5" src={`${ImagePath}/avtar/chinese.png`} alt="" />
          </div>
          <Media body>
            <h5 onClick={() => router.push(`/${i18LangStatus}/user/userprofile`)} style={{ cursor: "pointer" }}>
              Max Simmons attached 2
            </h5>
            <p>
              photos to <span className="font-primary">Food photography Class</span>
            </p>
            <Gallery>
              <Item original={`${ImagePath}/dashboard/img-26.png`} width="600" height="600">
                {({ ref, open }) => <Image className="me-2 rounded-2" ref={ref} alt="" height={40} width={40} onClick={open} src={`${ImagePath}/dashboard/img-26.png`} />}
              </Item>
              <Item original={`${ImagePath}/dashboard/image-20.jpg`} width="600" height="600">
                {({ ref, open }) => <Image className="rounded-2" ref={ref} alt="" height={40} width={40} onClick={open} src={`${ImagePath}/dashboard/image-20.jpg`} />}
              </Item>
            </Gallery>
          </Media>
        </Media>
      </td>
      <td>
        <Badge color="light" className="font-theme-light">
          22 Jun 2023
        </Badge>
      </td>
    </tr>
  );
};
export default Activity3;
