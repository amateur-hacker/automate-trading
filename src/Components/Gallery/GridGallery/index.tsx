import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath } from "@/Constant";
import { GalleryData } from "@/Data/Gallery";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const GridGallery = () => {
  return (
    <>
      <CommonBreadcrumb parent="Gallery" pageTitle="Gallery Grid" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="Image Gallery" />
              <CardBody className="gallery my-gallery ">
                <Row>
                  <Gallery>
                    {GalleryData.map((item, i) => (
                      <Col xl="3" md="4" sm="6" className="box-col-33">
                        <figure className="" key={i}>
                          <Item original={`${ImagePath}/${item}`} width="1024" height="768">
                            {({ ref, open }) => <Image style={{ cursor: "pointer" }} onClick={open} height={200} width={324} className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="" />}
                          </Item>
                        </figure>
                      </Col>
                    ))}
                  </Gallery>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default GridGallery;
