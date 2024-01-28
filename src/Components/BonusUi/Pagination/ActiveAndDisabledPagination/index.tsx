import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Next, PaginationActiveDisabled, Previous } from "@/Constant";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const ActiveDisabledPagination = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader heading={PaginationActiveDisabled} />
        <CardBody>
          <Pagination color="primary" aria-label="...">
            <PaginationItem disabled>
              <PaginationLink>{Previous}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>{"1"}</PaginationLink>
            </PaginationItem>
            <PaginationItem active>
              <PaginationLink href={Href}>
                {"2"} <span className="sr-only">{"(current)"}</span>
              </PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>{"3"}</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href={Href}>{Next}</PaginationLink>
            </PaginationItem>
          </Pagination>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ActiveDisabledPagination;
