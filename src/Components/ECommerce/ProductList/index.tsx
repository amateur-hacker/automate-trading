import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ProductListTitle } from "@/Constant";
import { ProductListSubHeading, productColumns, productData } from "@/Data/ECommerce/ProductListData";
import dynamic from "next/dynamic";
import { Card, Col, Container, Row } from "reactstrap";
const DataTable = dynamic(() => import("react-data-table-component"), { ssr: false });

const ProductList = () => {
  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Product List" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={ProductListTitle} subHeading={ProductListSubHeading} />
              <div className="table-responsive product-table">
                <DataTable noHeader pagination paginationServer columns={productColumns} data={productData} />
              </div>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ProductList;
