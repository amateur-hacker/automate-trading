import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { RootState } from "@/Redux/ReduxStore";
import { useSelector } from "react-redux";
import { Container } from "reactstrap";
import ProductFeatures from "./ProductFeatures";
import ProductGrid from "./ProductGrid";

const Product = () => {
  const { sidebarOpen } = useSelector((store: RootState) => store.FilterSlice);
  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Product" />
      <Container fluid className={`product-wrapper ${sidebarOpen ? "sidebaron" : ""}`} id="product-wrapper">
        <div className="product-grid">
          <ProductFeatures />
          <ProductGrid />
        </div>
      </Container>
    </>
  );
};

export default Product;
