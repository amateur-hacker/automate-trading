import { Href } from "@/Constant";
import { CommonBreadcrumbProps } from "@/Type/UiKits";
import React from "react";
import { Home } from "react-feather";
import { Breadcrumb, BreadcrumbItem, Col, Container, Row } from "reactstrap";

const CommonBreadcrumb = ({ parent, pageTitle }: CommonBreadcrumbProps) => {
  return (
    <Container fluid>
      <div className="page-title">
        <Row >
          <Col xs="12" sm="6">
            <h3>{pageTitle}</h3>
          </Col>
          <Col xs="12" sm="6">
            <Breadcrumb>
              <BreadcrumbItem>
                <a className="home-item" href={Href}>
                  <Home />
                </a>
              </BreadcrumbItem>
              <BreadcrumbItem >{parent}</BreadcrumbItem>
              <BreadcrumbItem active>{pageTitle}</BreadcrumbItem>
            </Breadcrumb>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default CommonBreadcrumb;
