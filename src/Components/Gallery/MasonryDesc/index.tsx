import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Href, ImagePath, PortfolioTitle } from "@/Constant";
import { GalleryDescription, MasonryImageData } from "@/Data/Gallery";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const MasonryGalleryWithDesc = () => {
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <CommonBreadcrumb parent="Masonry Gallery Desc" pageTitle="Gallery" />
      <Container fluid>
        <Row>
          <Col sm="12">
            <Card>
              <CommonCardHeader heading="MASONRY GALLERY WITH DESCRIPTION" />
              <CardBody className="photoswipe-pb-responsive">
                <Masonry breakpointCols={breakpointColumnsObj} className="my-masonry-grid masonry-with-dec my-gallery gallery-with-description row grid" columnClassName="col-xl-3 col-sm-6 col-md-4 grid-item">
                  {MasonryImageData.map((item, i) => (
                    <li style={{ listStyle: "none" }} key={i}>
                      <figure>
                        <a href={Href} data-size="1600x950">
                          <Image height={300} width={200} className="h-100 w-100" src={`${ImagePath}/${item.src}`} style={{ width: "100%" }} alt="" />
                          <div className="caption">
                            <h4>{PortfolioTitle}</h4>
                            <p>{GalleryDescription}</p>
                          </div>
                        </a>
                      </figure>
                    </li>
                  ))}
                </Masonry>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MasonryGalleryWithDesc;
