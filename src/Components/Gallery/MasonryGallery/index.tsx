import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ImagePath } from "@/Constant";
import { MasonryImageData } from "@/Data/Gallery";
import Image from "next/image";
import Masonry from "react-masonry-css";
import { Card, CardBody, Col, Container, Row } from "reactstrap";

const MasonryGallery = () => {
  
  const breakpointColumnsObj = {
    default: 4,
    1199: 3,
    700: 2,
    500: 1,
  };
  return (
    <>
      <CommonBreadcrumb parent="Gallery" pageTitle="Masonry Gallery" />
      <Container fluid>
        <Row>
          <Col sm="12" className="box-col-12">
            <Card>
              <CommonCardHeader heading="Masonry Gallery" />
              <CardBody className="photoswipe-pb-responsive">
                <Row>
                  <Masonry breakpointCols={breakpointColumnsObj} className="my-gallery row grid gallery" columnClassName="col-md-3 col-sm-6 grid-item">
                    {MasonryImageData.map((item, index) => (
                      <figure key={index}>
                        <Image height={300} width={200} src={`${ImagePath}/${item.src}`} className="h-100 w-100" style={{width:'100%'}} alt="" />
                      </figure>
                    ))}
                  </Masonry>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default MasonryGallery;
