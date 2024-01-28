import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Bootstrap, HomeText, Href, Library, NavBreadcrumbHeading } from "@/Constant";
import { NavBreadcrumbSubHeading } from "@/Data/BonusUi/Breadcrumb";
import { Breadcrumb, BreadcrumbItem, Card, CardBody, Col } from "reactstrap";

const NavBreadcrumb = () => {
  return (
    <Col sm="12" md="6">
      <Card>
        <CommonCardHeader heading={NavBreadcrumbHeading} subHeading={NavBreadcrumbSubHeading} />
        <CardBody>
          <Breadcrumb tag={"nav"}>
            <BreadcrumbItem tag={"a"} href={Href}>
              {HomeText}
            </BreadcrumbItem>
            <BreadcrumbItem tag={"a"} href={Href}>
              {Library}
            </BreadcrumbItem>
            <BreadcrumbItem tag={"span"} className="active">
              {Bootstrap}
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb tag={"nav"} className="breadcrumb-icon">
            <BreadcrumbItem tag={"a"} href={Href}>
              {HomeText}
            </BreadcrumbItem>
            <BreadcrumbItem tag={"a"} href={Href}>
              {Library}
            </BreadcrumbItem>
            <BreadcrumbItem tag={"span"} className="active">
              {Bootstrap}
            </BreadcrumbItem>
          </Breadcrumb>
          <Breadcrumb tag={"nav"} className="breadcrumb-no-divider mb-0">
            <BreadcrumbItem tag={"a"} href={Href}>
              {HomeText}
            </BreadcrumbItem>
            <BreadcrumbItem tag={"a"} href={Href}>
              {Library}
            </BreadcrumbItem>
            <BreadcrumbItem tag={"span"} className="active">
              {Bootstrap}
            </BreadcrumbItem>
          </Breadcrumb>
        </CardBody>
      </Card>
    </Col>
  );
};

export default NavBreadcrumb;
