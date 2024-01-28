import { Href } from "@/Constant";
import { CartData } from "@/Data/Header";
import { useAppSelector } from "@/Redux/Hooks";
import Image from "next/image";
import Link from "next/link";
import { Edit, Trash2 } from "react-feather";
import { Input, Media } from "reactstrap";
export const MainContent = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <>
      {CartData.map((item, i) => (
        <li className="list-group-item" key={i}>
          <Media>
            <Image width={24} height={24} className="img-fluid b-r-5 me-3 img-50" src={item.image} alt="image" />
            <Media body>
              <h5>
                <Link className="text-decoration-none" href={`/${i18LangStatus}/ecommerce/product`}>
                  {item.title}
                </Link>
              </h5>
              <p className="f-w-700">{item.price}</p>
              <div className="cart-quantity">
                <span className="plus">
                  <i className="fa fa-plus" />
                </span>
                <Input className="count" type="text" name="qty" defaultValue={3} />
                <span className="minus">
                  <i className="fa fa-minus" />
                </span>
              </div>
            </Media>
            <div className="close-circle">
              <a href={Href}>
                <i className="me-1">
                  <Edit />
                </i>
              </a>
              <a href={Href}>
                <Trash2 />
              </a>
            </div>
          </Media>
        </li>
      ))}
    </>
  );
};
