import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Blockquotes, SomeoneFamousIn, SourceTitle } from "@/Constant";
import { BlockQuoteCardData } from "@/Data/UiKits/Typography";
import { Fragment } from "react";
import { Card, CardBody, Col } from "reactstrap";
const BlockQuote = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Blockquotes} />
        <CardBody className="radio-text">
          {BlockQuoteCardData.map((item, i) => (
            <Fragment key={i}>
              <p className="sub-title">
                {item.title}
              </p>
              <div className={`figure d-block ${item.className}`}>
                <blockquote className="blockquote mb-0">
                  <p className="mb-0">{item.description}</p>
                </blockquote>
                <div className="blockquote-footer mt-0">
                  {SomeoneFamousIn}
                  <cite title="Source Title">{SourceTitle}</cite>
                </div>
              </div>
            </Fragment>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default BlockQuote;
