import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, ImagePath, PortfolioTitle } from "@/Constant";
import { GalleryData, GalleryDescription } from "@/Data/Gallery";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const GridDescGallery = () => {
  return (
    <>
      <CommonBreadcrumb parent="Gallery" pageTitle="Gallery Grid Desc" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="Image Gallery" />
              <CardBody className="my-gallery  gallery-with-description">
                <Row>
                  <Gallery>
                    {GalleryData.map((item, index) => (
                      <Col xl="3" sm="6" className="box-col-25">
                        <figure key={index}>
                          <Item original={`${ImagePath}/${item}`} width="1024" height="768" caption="hello">
                            {({ ref, open }) => (
                              <a href={Href}>
                                <Image style={{ cursor: "pointer" }} onClick={open} className="img-thumbnail" height={206} width={342} ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="thumbnail" />
                                <div className="caption mb-0">
                                  <h4>{PortfolioTitle}</h4>
                                  <p>{GalleryDescription}</p>
                                </div>
                              </a>
                            )}
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

export default GridDescGallery;
