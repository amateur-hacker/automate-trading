import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, Next, PaginationColor, Previous } from "@/Constant";
import { ColorPaginationData } from "@/Data/BonusUi/Pagination";
import { Card, CardBody, Col, Pagination, PaginationItem, PaginationLink } from "reactstrap";

const ColorPagination = () => {
  return (
    <Col xl="12">
      <Card>
        <CommonCardHeader heading={PaginationColor} />
        <CardBody>
          <Pagination color="primary" className="mb-4" aria-label="Page navigation example">
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
          {ColorPaginationData.map((item, i) => (
            <Pagination>
              <ul key={i} className={`mb-4 pagination pagination-${item}`} aria-label="Page navigation example">
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
          ))}
        </CardBody>
      </Card>
    </Col>
  );
};

export default ColorPagination;
