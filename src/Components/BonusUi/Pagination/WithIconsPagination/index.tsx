import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Next, PaginationWithIcons, Previous } from "@/Constant";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationWithIcon = () => {
  return (
    <Col xl="6">
      <Card>
        <CommonCardHeader heading={PaginationWithIcons} />
        <CardBody>
          <Pagination color="primary" aria-label="Page navigation example">
            <PaginationItem>
              <PaginationLink href={Href}>
                <span aria-hidden="true">«</span>
                <span className="sr-only">{Previous}</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>{"1"}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>{"2"}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>{"3"}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>
                <span aria-hidden="true">»</span>
                <span className="sr-only">{Next}</span>
              </PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationWithIcon;
