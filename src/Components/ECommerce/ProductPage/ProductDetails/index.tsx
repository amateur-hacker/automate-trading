import { Availability, Brand, BuyNow, symbol } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { Button, Card, CardBody, Col, Row, Table } from "reactstrap";
import CompanyDetails from "./CompanyDetails";
import ProductDetailsFooter from "./ProductDetailsFooter";
import SocialMediaIcons from "./SocialMediaIcons";
import StarRatings from "./StarRatings";
import { useAppSelector } from "@/Redux/Hooks";

const ProductDetails = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const productData = useSelector((store: RootState) => store.EcommerceSlice.Data);
  const router = useRouter();
  const products = {
    price: productData[0]?.price,
    discountPrice: productData[0]?.discountPrice,
    discription: productData[0]?.discription,
    stock: productData[0]?.stock,
  };

  return (
    <Col xl="5" className="box-col-6 proorder-xl-3 xl-100">
      <Card>
        <CardBody>
          <div className="pro-group pt-0">
            <StarRatings />
            <div className="product-price">
              {symbol}
              {products.price}
              <del>
                {symbol}
                {products.discountPrice}
              </del>
            </div>
            <ul className="simple-list product-color flex-row">
              <li className="bg-primary"></li>&nbsp;
              <li className="bg-secondary"></li>&nbsp;
              <li className="bg-success"></li>&nbsp;
              <li className="bg-danger"></li>&nbsp;
              <li className="bg-info"></li>&nbsp;
              <li className="bg-warning"></li>&nbsp;
            </ul>
            <Link href={`/${i18LangStatus}/ecommerce/checkout`}>
              <Button color="secondary" className=" mt-0">
                <i className="fa fa-shopping-cart me-2"></i>
                {BuyNow}
              </Button>
            </Link>
          </div>
          <div className="pro-group">
            <p>
              {products.discription}
              The point of using Lorem Ipsum is that.
            </p>
          </div>
          <div className="pro-group">
            <Row>
              <Col md="6">
                <Table>
                  <tbody>
                    <tr>
                      <td>
                        <b>{Availability} &nbsp;&nbsp;&nbsp;: &nbsp;&nbsp;&nbsp;</b>
                      </td>
                      <td className="txt-success">{products.stock}</td>
                    </tr>
                    <tr>
                      <td>
                        <b>{Brand} &nbsp;&nbsp;&nbsp;:</b>
                      </td>
                      <td>{"Pixelstrap"}</td>
                    </tr>
                  </tbody>
                </Table>
              </Col>
              <CompanyDetails />
            </Row>
          </div>
          <SocialMediaIcons />
          <ProductDetailsFooter />
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductDetails;
