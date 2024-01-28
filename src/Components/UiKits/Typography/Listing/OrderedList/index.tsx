import { OrderListConst } from "@/Constant";
import { Order } from "@/Data/UiKits/Typography";
import { Fragment } from "react";
import { Col } from "reactstrap";

const OrderList = () => {
  return (
    <Col sm="12" xl="4">
      <h6 className="sub-title">{OrderListConst}</h6>
      <ol className="d-block ">
        <li>Lorem ipsum dolor sit amet</li>
        {Order.map((element, i) => (
          <Fragment key={i}>
            {typeof element == "object" ? (
              <li>
                <ol className="d-block">
                  {element.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ol>
              </li>
            ) : (
              <li>{element}</li>
            )}
          </Fragment>
        ))}
      </ol>
    </Col>
  );
};

export default OrderList;
