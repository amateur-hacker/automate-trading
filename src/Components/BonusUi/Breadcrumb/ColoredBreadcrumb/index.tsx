import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ColoredBreadcrumbHeading, HomeText, Href, Library } from "@/Constant";
import { ColoredBreadcrumbData, ColoredBreadcrumbSubHeading } from "@/Data/BonusUi/Breadcrumb";
import { BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

const ColoredBreadcrumb = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ColoredBreadcrumbHeading} subHeading={ColoredBreadcrumbSubHeading} />
        <CardBody>
          <ol className="breadcrumb breadcrumb-colored m-b-30 bg-primary">
            <BreadcrumbItem tag={"li"}>
              <a href={Href}>{HomeText}</a>
            </BreadcrumbItem>
            <BreadcrumbItem tag={"li"} className="active">
              {Library}
            </BreadcrumbItem>
          </ol>
          {ColoredBreadcrumbData.map((item, i) => (
            <ol color="primary" key={i} className={`breadcrumb breadcrumb-colored m-b-30 ${item}`}>
              <BreadcrumbItem tag={"li"}>
                <a href={Href}>{HomeText}</a>
              </BreadcrumbItem>
              <BreadcrumbItem tag={"li"} className="active">
                {Library}
              </BreadcrumbItem>
            </ol>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColoredBreadcrumb;
