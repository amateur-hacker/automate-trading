import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Next, Pagi_Nations, Previous } from "@/Constant";
import { Fragment } from "react";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const BasicPagination = () => {
  return (
    <Fragment>
      <Col xl="6">
        <Card>
          <CommonCardHeader heading={Pagi_Nations} />
          <CardBody>
            <Pagination color="primary" aria-label="Page navigation example">
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
            </Pagination>
          </CardBody>
        </Card>
      </Col>
    </Fragment>
  );
};

export default BasicPagination;
