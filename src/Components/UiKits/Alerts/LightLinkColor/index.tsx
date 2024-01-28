import React from "react";
import { Alert, Card, CardBody, Col } from "reactstrap";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, LinkColor } from "@/Constant";
import { LightLinkColorData, LinkColorsSubHeading } from "@/Data/UiKits/Alert/LightLinkColorData";

const LightLinkColor = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={LinkColor} subHeading={LinkColorsSubHeading} />
        <CardBody>
          <Alert color="primary">
            'This is a primary alert with
            <a className="alert-link" href={Href}>
              an example link
            </a>
            .Click It
          </Alert>
          {LightLinkColorData.map((element, index) => (
            <Alert key={index} color={element.color}>
              {element.text}
              <a className="alert-link" href={Href}>
                {element.example}
              </a>
              .Click It
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LightLinkColor;
