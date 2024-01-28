import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath, MoveToCarts, Price, symbol } from "@/Constant";
import { ECommerceRating } from "@/Data/ECommerce";
import { useAppSelector } from "@/Redux/Hooks";
import { RootState } from "@/Redux/ReduxStore";
import { addCartData, fetchProductData } from "@/Redux/Slices/ECommerceSlice";
import { ProductData } from "@/Type/ECommerce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, CardBody, Col, Container, Media, Row } from "reactstrap";

const WishList = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const productData = useSelector((store: RootState) => store.EcommerceSlice.Data);
  const router = useRouter();
  const dispatch = useDispatch();
  const MoveToCart = (product: ProductData) => {
    dispatch(addCartData({ id: product.id, item: product, increment: 1 }));
    router.push(`/${i18LangStatus}/ecommerce/cart`);
  };
  useEffect(() => {
    dispatch(fetchProductData());
  }, []);

  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Wishlist" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="Wishlist" />
              <CardBody>
                <Row className="wishlist-main">
                  {productData.map((item) => {
                    return (
                      <Col xl="2" md="4" sm="6" key={item.id} className="box-col-3">
                        <div className="prooduct-details-box">
                          <Media>
                            <Image width={195} height={213} className="align-self-center img-fluid w-100" src={`${ImagePath}/${item.img}`} alt="#" />
                            <Media body>
                              <div className="product-name">
                                <h6>
                                  <a href="3">{item.name}</a>
                                </h6>
                              </div>
                              {ECommerceRating}
                              <div className="price">
                                {Price}
                                <span>
                                  : {item.price}
                                  {symbol}
                                </span>
                              </div>
                              <div className="avaiabilty">
                                <div className="text-success">{item.stock}</div>
                              </div>
                              <Button color="primary" size="sm" onClick={() => MoveToCart(item)}>
                                {MoveToCarts}
                              </Button>
                            </Media>
                          </Media>
                        </div>
                      </Col>
                    );
                  })}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default WishList;
