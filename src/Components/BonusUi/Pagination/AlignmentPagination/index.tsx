import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Next, PaginationAlignment, Previous } from "@/Constant";
import { PaginationAlignmentsData } from "@/Data/BonusUi/Pagination";
import { Card, CardBody, Col, Nav, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const PaginationAlignments = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader heading={PaginationAlignment} />
        <CardBody>
          <Nav className="mb-4" aria-label="Page navigation example">
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
          </Nav>
          {PaginationAlignmentsData.map((item, i) => (
            <Nav key={i} className={`mb-4 ${item}`} aria-label="Page navigation example">
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
            </Nav>
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default PaginationAlignments;
