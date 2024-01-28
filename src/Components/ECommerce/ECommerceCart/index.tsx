import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CartTableHeader, CartTitle } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { useSelector } from "react-redux";
import { Card, CardBody, Col, Container, Row, Table } from "reactstrap";
import CartTableBody from "./CartTableBody";
import EmptyCart from "./EmptyCart";

const ECommerceCart = () => {
  const { cartData } = useSelector((store: RootState) => store.EcommerceSlice);
  return (
    <>
      <CommonBreadcrumb parent="ECommerce" pageTitle="Cart" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={CartTitle} />
              <CardBody className="cart">
                <Row>
                  {cartData && cartData.length > 0 ? (
                    <div className="order-history table-responsive wishlist">
                      <Table className="table-bordered">
                        <thead>
                          <tr>
                            {CartTableHeader.map((items, i) => (
                              <th key={i}>{items}</th>
                            ))}
                          </tr>
                        </thead>
                        <CartTableBody />
                      </Table>
                    </div>
                  ) : (
                    <EmptyCart />
                  )}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ECommerceCart;
