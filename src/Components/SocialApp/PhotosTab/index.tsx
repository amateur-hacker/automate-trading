import { Href, ImagePath, PortfolioTitle } from "@/Constant";
import { PhotoDescription, PhotosTabData } from "@/Data/SocialApp";
import Image from "next/image";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Row } from "reactstrap";

const PhotosTab = () => {
  return (
    <Row>
      <Col sm="12">
        <Card>
          <CardBody className="my-gallery row gallery-with-description">
            <Gallery>
              {PhotosTabData.map((item, i) => (
                <Col xl="3" sm="6" className="box-xl-33" key={i}>
                  <figure>
                    <Item original={`${ImagePath}/${item}`} width="824" height="508">
                      {({ ref, open }) => (
                        <a href={Href} onClick={open}>
                          <Image height={300} width={380} className="img-thumbnail" ref={ref as React.MutableRefObject<HTMLImageElement>} src={`${ImagePath}/${item}`} alt="" />
                          <div className="caption">
                            <h4>{PortfolioTitle}</h4>
                            <p>{PhotoDescription}</p>
                          </div>
                        </a>
                      )}
                    </Item>
                  </figure>
                </Col>
              ))}
            </Gallery>
          </CardBody>
        </Card>
      </Col>
    </Row>
  );
};

export default PhotosTab;
