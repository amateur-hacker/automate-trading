import { Href, ImagePath, PortfolioTitle } from "@/Constant";
import { GalleryData, GalleryDescription } from "@/Data/Gallery";
import Image from "next/image";
import React from "react";
import { Gallery, Item } from "react-photoswipe-gallery";
import { Card, CardBody, Col, Row } from "reactstrap";
import TabPagination from "../TabPagination";

const ImagesTab = () => {
  return (
    <>
      <Row>
        <Col sm="12">
          <Card>
            <CardBody className="my-gallery gallery-with-description">
              <Row>
                <Gallery>
                  {GalleryData.map((item, index) => (
                    <Col key={index} xl="3" sm="6" className="box-col-25">
                      <figure>
                        <Item original={`${ImagePath}/${item}`} width="800" height="600" caption="hello">
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
      <TabPagination />
    </>
  );
};

export default ImagesTab;
