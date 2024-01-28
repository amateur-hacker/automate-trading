import { ImagePath, symbol } from "@/Constant";
import { ECommerceRating } from "@/Data/ECommerce";
import { RootState } from "@/Redux/ReduxStore";
import { addCartData, fetchProductData } from "@/Redux/Slices/ECommerceSlice";
import { ProductData, filterValueTypes } from "@/Type/ECommerce";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Card, Row } from "reactstrap";
import ProductModal from "./ProductModal";
import { useAppSelector } from "@/Redux/Hooks";

const ProductGrid = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  const { Data, filterValue } = useSelector((store: RootState) => store.EcommerceSlice);
  const { gridClass, columnClass } = useSelector((store: RootState) => store.FilterSlice);
  const [dataId, setDataId] = useState<number>();
  const [modelData, setModelData] = useState<ProductData>();
  const [openModal, setOpenModal] = useState<boolean>(false);
  const onClickHandle = (data: ProductData) => {
    setOpenModal(true);
    setModelData(data);
    setDataId(data.id);
  };
  const productData = (Data: ProductData[], filterValue: filterValueTypes) => {
    let data: ProductData[] = [];
    Data.map((item) => {
      let category;
      if (filterValue.category.includes(item.name)) {
        category = true;
      }
      let brand;
      item.tags.map((element) => {
        if (filterValue.brand.includes(element)) {
          brand = true;
        }
      });
      let color;
      if (item.colors.includes(filterValue.color)) {
        color = true;
      }
      let value;
      if (item.price >= filterValue.value.min && item.price <= filterValue.value.max) {
        value = true;
      }
      let name;
      if (item.name.toLowerCase().includes(filterValue.searchBy.toLowerCase())) {
        name = true;
      }
      if (category && brand && color && value && name) {
        data.push(item);
      }
    });
    if (filterValue.sortBy === "Lowest Prices") {
      return data.sort((a, b) => a.price - b.price);
    } else if (filterValue.sortBy === "Highest Prices") {
      return data.sort((a, b) => b.price - a.price);
    } else {
      return data;
    }
  };
  const dispatch = useDispatch();
  useEffect(() => {
    if (!Data.length) {
      dispatch(fetchProductData());
    }
  }, []);

  return (
    <div className={`product-wrapper-grid ${gridClass}`} id="product-wrapper-grid">
      <Row className="gridRow" id="gridRow">
        {productData(Data, filterValue).map((item, i) => {
          return (
            <div id="gridId" className={gridClass ? "col-xl-12" : columnClass} key={item.id}>
              <Card>
                <div className="product-box">
                  <div className="product-img">
                    {item.status === "sale" ? <span className="ribbon ribbon-danger">{item.status}</span> : ""}
                    {item.status === "50%" ? <span className="ribbon ribbon-success ribbon-right">{item.status}</span> : ""}
                    {item.status === "gift" && (
                      <span className="ribbon ribbon-secondary ribbon-vertical-left">
                        <i className="icon-gift">{item.status}</i>
                      </span>
                    )}
                    {item.status === "love" ? (
                      <span className="ribbon ribbon-bookmark ribbon-vertical-right ribbon-info">
                        <i className="icon-heart">{item.status}</i>
                      </span>
                    ) : (
                      ""
                    )}
                    {item.status === "Hot" ? <span className="ribbon ribbon ribbon-clip ribbon-warning">{item.status}</span> : ""}
                    <Image className="img-fluid media w-100" src={`${ImagePath}/${item.img}`} height={403} width={370} alt="" />
                    <div className="product-hover">
                      <ul className=" simple-list">
                        <li>
                          <Button
                            color="transprant"
                            onClick={() => {
                              dispatch(addCartData({ item: item, increment: 1, id: item.id }));
                              router.push(`/${i18LangStatus}/ecommerce/cart`);
                            }}
                          >
                            <i className="icon-shopping-cart" />
                          </Button>
                        </li>
                        <li>
                          <Button color="transprant" onClick={() => onClickHandle(item)} className="btn" type="button">
                            <i className="icon-eye" />
                          </Button>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="product-details">
                    <h4>
                      <Link href={`/${i18LangStatus}/ecommerce/productpage/${item.id}`}>{item.name}</Link>
                    </h4>
                    {ECommerceRating}
                    <p>{item.note}</p>
                    <div className="product-price">
                      {symbol} {item.price}
                      <del>
                        {symbol} {item.discountPrice}
                      </del>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          );
        })}
        {openModal && <ProductModal value={openModal} dataId={dataId} setOpenModal={setOpenModal} modelData={modelData} />}
      </Row>
    </div>
  );
};
export default ProductGrid;
