import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath } from "@/Constant";
import { HoverEffectsData, HoverImageData } from "@/Data/Gallery";
import Image from "next/image";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const HoverEffect = () => {
  return (
    <>
      <CommonBreadcrumb parent="Gallery " pageTitle="Hover Effect" />
      <Container fluid>
        {HoverEffectsData.map((item, i) => (
          <Row key={i}>
            <Col sm="12">
              <Card>
                <CommonCardHeader heading={`Hover effect ${item}`} />
                <CardBody>
                  <Row id="aniimated-thumbnials" className="my-gallery gallery">
                    {HoverImageData.map((image, index) => (
                      <Col sm="6" md="3" key={index}>
                        <figure itemProp="associatedMedia" className={`img-hover hover-${item}`} key={i}>
                          <div>
                            <Image height={220} width={347} className="img-thumbnail" src={`${ImagePath}/${image}`} alt="" />
                          </div>
                        </figure>
                      </Col>
                    ))}
                  </Row>
                </CardBody>
              </Card>
            </Col>
          </Row>
        ))}
      </Container>
    </>
  );
};

export default HoverEffect;
