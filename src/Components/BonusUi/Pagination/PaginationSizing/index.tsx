import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Next, PaginationSizing, Previous } from "@/Constant";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const SizingPagination = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader heading={PaginationSizing} />
        <CardBody>
          <Pagination className="mb-4" aria-label="Page navigation example">
            <ul className="pagination pagination-lg pagination-primary">
              <PaginationItem>
                <PaginationLink href={Href}>{Previous}</PaginationLink>
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
                <PaginationLink href={Href}>{Next}</PaginationLink>
              </PaginationItem>
            </ul>
          </Pagination>
          <Pagination aria-label="Page navigation example">
            <ul className="pagination pagination-sm pagination-primary">
              <PaginationItem>
                <PaginationLink href={Href}>{Previous}</PaginationLink>
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
                <PaginationLink href={Href}>{Next}</PaginationLink>
              </PaginationItem>
            </ul>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default SizingPagination;
