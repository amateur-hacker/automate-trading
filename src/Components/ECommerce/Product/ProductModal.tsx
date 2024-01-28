import { AddToCart, ImagePath, ProductDetails, ProductSizeArray, Quantity, ViewDetails, symbol } from "@/Constant";
import { ECommerceRating } from "@/Data/ECommerce";
import { useAppSelector } from "@/Redux/Hooks";
import { addCartData } from "@/Redux/Slices/ECommerceSlice";
import { ProductModalType } from "@/Type/ECommerce";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Col, Input, InputGroup, InputGroupText, Modal, ModalHeader, Row } from "reactstrap";

const ProductModal = (props: ProductModalType) => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  const dispatch = useDispatch();
  const [cartCount, setCartCount] = useState(1);
  const [open, setOpen] = useState(props.value);
  const incrementCount = () => {
    setCartCount(cartCount + 1);
  };
  const decrementCount = () => {
    if (cartCount === 1) {
      return;
    } else {
      setCartCount(cartCount - 1);
    }
  };
  const handleAddToCart = () => {
    dispatch(addCartData({ id: props.dataId, item: props.modelData, increment: cartCount }));
    router.push(`/${i18LangStatus}/ecommerce/cart`);
  };
  const onCloseModal = () => {
    setOpen(false);
    props.setOpenModal(false);
  };

  return (
    <Modal size="lg" className="modal-dialog modal-dialog-centered" isOpen={open} toggle={onCloseModal}>
      <ModalHeader>
        <Row className="product-box">
          <Col lg="6" className="product-img">
            <Image alt="image" className="img-fluid" height={403} width={370} src={props.modelData?.img ? `${ImagePath}/${props.modelData.img}` : ""} />
          </Col>
          <Col md="6" className="product-details text-start">
            <h4>{props.modelData?.name}</h4>
            {ECommerceRating}
            <div className="product-price">
              {symbol}
              {props.modelData?.discountPrice}
              <del>
                {symbol}
                {props.modelData?.price}
              </del>
            </div>
            <div className="product-view">
              <h6 className="f-w-600">{ProductDetails}</h6>
              <p className="mb-0">{props.modelData?.discription}</p>
            </div>
            <div className="product-size my-2">
              <ul className="simple-list flex-row">
                {ProductSizeArray.map((items: string, i: number) => (
                  <li key={i} className="me-2">
                    <Button color="outline-light">{items}</Button>
                  </li>
                ))}
              </ul>
            </div>
            <div className="product-qnty">
              <h6 className="f-w-600">{Quantity}</h6>
              <InputGroup style={{ width: "35%" }}>
                <Button color="primary" className="bootstrap-touchspin-down" onClick={decrementCount}>
                  <i className="fa fa-minus"></i>
                </Button>
                <InputGroupText className="bootstrap-touchspin-prefix" style={{ display: "none" }}></InputGroupText>
                <Input className="touchspin text-center" type="text" name="quantity" value={cartCount} />
                <Button color="primary" className="bootstrap-touchspin-up" onClick={incrementCount}>
                  <i className="fa fa-plus"></i>
                </Button>
              </InputGroup>
              <div className="addcart-btn">
                <Button color="primary" className="me-3" onClick={() => handleAddToCart()}>
                  {AddToCart}
                </Button>
                <Button color="primary" onClick={() => router.push(`/${i18LangStatus}/ecommerce/productpage`)}>
                  {ViewDetails}
                </Button>
              </div>
            </div>
          </Col>
        </Row>
        <Button close color="transprant" onClick={onCloseModal} type="button" databsdismiss="modal" arialabel="Close"></Button>
      </ModalHeader>
    </Modal>
  );
};
export default ProductModal;
