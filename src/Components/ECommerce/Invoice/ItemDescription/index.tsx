import { Price, ProductName, Quantity, Sub_total, symbol } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { ItemDescriptionTypes, ProductData } from "@/Type/ECommerce";
import { useSelector } from "react-redux";
import { Card, CardBody, Col, Container, Label, Row, Table } from "reactstrap";
import InvoiceDescription from "./InvoiceDescription";
import InvoiceHeader from "./InvoiceHeader";
import PrintInvoice from "./PrintInvoice";
import { LegacyRef, forwardRef } from "react";

const ItemDescription = forwardRef((props,ref:LegacyRef<HTMLDivElement> | undefined) => {
  const getCartTotal = (item: ProductData) => {
    if (item.quantity) {
      return item.quantity * item.price;
    }
  };
  const { cartData } = useSelector((store: RootState) => store.EcommerceSlice);
  return (
    <div ref={ref}>
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CardBody>
                <div className="invoice">
                  <div>
                    <InvoiceHeader />
                    <InvoiceDescription />
                    <div className="table-responsive invoice-table" id="table">
                      <Table bordered striped>
                        <tbody>
                          <tr>
                            <td className="item">
                              <h6 className="p-2 mb-0">{ProductName}</h6>
                            </td>
                            <td className="quantity">
                              <h6 className="p-2 mb-0">{Quantity}</h6>
                            </td>
                            <td className="Rate">
                              <h6 className="p-2 mb-0">{Price}</h6>
                            </td>
                            <td className="subtotal">
                              <h6 className="p-2 mb-0">{Sub_total}</h6>
                            </td>
                          </tr>
                          {cartData &&
                            cartData.map((item) => {
                              return (
                                <tr key={item.id}>
                                  <td>
                                    <Label>{item.name}</Label>
                                  </td>
                                  <td>
                                    <p className="itemtext digits">{item.quantity}</p>
                                  </td>
                                  <td>
                                    <p className="itemtext digits">
                                      {symbol} {item.price}
                                    </p>
                                  </td>
                                  <td className="payment digits">
                                    <p className="itemtext digits">
                                      {symbol} {getCartTotal(item)}
                                    </p>
                                  </td>
                                </tr>
                              );
                            })}
                        </tbody>
                      </Table>
                    </div>
                    <PrintInvoice />
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
});

export default ItemDescription;
