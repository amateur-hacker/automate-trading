import { Apply, Href, ImagePath, symbol } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { RootState } from "@/Redux/ReduxStore";
import { decrementCart, incrementCart } from "@/Redux/Slices/ECommerceSlice";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { XCircle } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, InputGroup } from "reactstrap";

const CartTableBody = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  const dispatch = useDispatch();
  const { cartData } = useSelector((store: RootState) => store.EcommerceSlice);
  return (
    <tbody style={{ borderTop: "none" }}>
      {cartData.map((item, i) => {
        return (
          item.quantity && (
            <tr key={i}>
              <td>
                <Image height={43} width={40} className="img-fluid img-40" src={`${ImagePath}/${item.img}`} alt="#" />
              </td>
              <td>
                <div className="product-name">
                  <a href={Href}>{item.name}</a>
                </div>
              </td>
              <td>{item.price}</td>
              <td>
                <InputGroup className="product-quantity">
                  <span className="input-group-prepend">
                    <Button color="primary" className="bootstrap-touchspin-down" onClick={() => dispatch(decrementCart(i))}>
                      <i className="fa fa-minus"></i>
                    </Button>
                  </span>
                  <Input type="text" name="quantity" value={item.quantity} readOnly={true} style={{ textAlign: "center" }} className="input-number" />
                  <span className="input-group-append">
                    <Button color="primary" className="bootstrap-touchspin-up" onClick={() => dispatch(incrementCart(i))}>
                      <i className="fa fa-plus"></i>
                    </Button>
                  </span>
                </InputGroup>
              </td>
              <td>
                <a href={Href}>
                  <XCircle />
                </a>
              </td>
              <td>
                {symbol}
                {item.price * item.quantity}
              </td>
            </tr>
          )
        );
      })}
      <tr>
        <td colSpan={4}>
          <InputGroup>
            <Input className="me-2" type="text" placeholder="Enter coupon code" />
            <Button color="primary" href={Href}>
              {Apply}
            </Button>
          </InputGroup>
        </td>
        <td className="total-amount">
          <h6 className="m-0 text-end">
            <span className="f-w-600">Total Price :</span>
          </h6>
        </td>
        <td>
          <span>{"remaining"}</span>
        </td>
      </tr>
      <tr>
        <td className="text-end" colSpan={5}>
          <Button color="secondary" onClick={() => router.push(`/${i18LangStatus}/ecommerce/product`)} className="cart-btn-transform">
            continue shopping
          </Button>
        </td>
        <td>
          <Button color="success" className="cart-btn-transform" onClick={() => router.push(`/${i18LangStatus}/ecommerce/checkout`)}>
            check out
          </Button>
        </td>
      </tr>
    </tbody>
  );
};

export default CartTableBody;
