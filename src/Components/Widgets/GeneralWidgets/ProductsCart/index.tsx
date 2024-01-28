import React from "react";
import { Card, CardBody, CardHeader, Col, Media, Table } from "reactstrap";
import { Details, Price, ProductsCart, Quantity, Status } from "@/Constant";
import { CommonWidgetsDropdown, ProductCartData } from "@/Data/Widgets/General";

const ProductCart = () => {
  return (
    <Col xl="6" className="box-col-6">
      <Card className="user-status">
        <CardHeader className="pb-0">
          <Media>
            <Media body>
              <h5>{ProductsCart}</h5>
            </Media>
            {CommonWidgetsDropdown}
          </Media>
        </CardHeader>
        <CardBody>
          <div className="mb-0 table-responsive">
            <Table borderless>
              <thead>
                <tr>
                  <th scope="col">{Details}</th>
                  <th scope="col">{Quantity}</th>
                  <th scope="col">{Price}</th>
                  <th scope="col" className="text-end">
                    {Status}
                  </th>
                </tr>
              </thead>
              <tbody>
                {ProductCartData.map((item, i) => (
                  <tr key={i}>
                    <td>{item.details}</td>
                    <td>{item.quantity}</td>
                    <td className={`font-${item.statusColor}`}>{item.price}</td>
                    <td className="text-end">
                      <span className={`badge ${item.className}`}>{item.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};
export default ProductCart;
