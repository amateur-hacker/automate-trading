import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Javascript, LinkColorInThemeColor } from "@/Constant";
import { LinkColorsSubHeading } from "@/Data/UiKits/Alert/LightLinkColorData";
import { LinkColorData } from "@/Data/UiKits/Alert/LinkColorData";
import { Alert, Card, CardBody, Col } from "reactstrap";

const LinkColors = () => {
  return (
    <Col sm="12" xl="6">
      <Card>
        <CommonCardHeader heading={LinkColorInThemeColor} subHeading={LinkColorsSubHeading} />
        <CardBody>
          <Alert color="primary dark">
            {"This is a primary alert with"}{" "}
            <a className="alert-link" href={Javascript}>
              {"an example link"}
            </a>
            {".Click It"}
          </Alert>
          {LinkColorData.map((element, index) => (
            <Alert key={index} color={`${element.color} dark`}>
              {element.text}{" "}
              <a className="alert-link" href={Href}>
                {element.link}
              </a>
              {element.click}
            </Alert>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default LinkColors;
