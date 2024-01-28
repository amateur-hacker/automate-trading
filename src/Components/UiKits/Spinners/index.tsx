"use client";
import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { LoaderStyle } from "@/Constant";
import { SpinnersData } from "@/Data/UiKits/Spinners";
import { Card, CardBody, Col, Container, Row, Spinner } from "reactstrap";

const Spinners = () => {
  return (
    <>
      <CommonBreadcrumb pageTitle="Spinners" parent="Ui Kits" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading={LoaderStyle} />
              <CardBody>
                <Row>
                  <Col md="3">
                    <h6 className="sub-title mb-0 text-center">{"Loader 1"}</h6>
                    <div className="loader-box">
                      <Spinner className="loader-1" />
                    </div>
                  </Col>
                  {SpinnersData.map((spinner) => (
                    <Col md="3" key={spinner.id}>
                      <h6 className="sub-title mb-0 text-center">{spinner.heading}</h6>
                      <div className="loader-box">
                        <Spinner type="" className={spinner.spinnerClass} />
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Spinners;
