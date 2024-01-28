import { AddToCart } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useRouter } from "next/navigation";
import { Link } from "react-feather";
import { Button } from "reactstrap";

const ProductDetailsFooter = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <div className="pro-group pb-0">
      <div className="pro-shop">
        <Link href={`/${i18LangStatus}/ecommerce/cart`}>
          <Button color="primary">
            <i className="fa fa-shopping-basket me-2"></i>
            {AddToCart}
          </Button>
        </Link>
        &nbsp;&nbsp;&nbsp;
        <Button color="secondary" onClick={() => router.push(`/${i18LangStatus}/ecommerce/wishlist`)}>
          <i className="fa fa-heart me-2"></i>
          {"Add To WishList"}
        </Button>
      </div>
    </div>
  );
};

export default ProductDetailsFooter;
