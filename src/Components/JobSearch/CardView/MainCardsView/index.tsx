import { Href, ImagePath } from "@/Constant";
import { RatingsData } from "@/Data/JobSearch";
import { JobMainCardsType } from "@/Type/JobSearch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge, Card, CardBody, Col, Media, Row } from "reactstrap";

const MainCards = () => {
  const [cardsData, setCardsData] = useState([]);
  useEffect(() => {
    getApi();
  }, []);
  const getApi = async () => {
    const res = await fetch("/api/jobSearchApi");
    const finalResult = await res.json();
    setCardsData(finalResult);
  };

  return (
    <Col xl="9 " className="xl-60 box-col-7">
      <Row>
        {cardsData.length > 0 &&
          cardsData.map((item: JobMainCardsType, i) => (
            <Col xl="6 " className="box-col-12 xl-100" key={i}>
              <Card className={`${item.ribbon ? "ribbon-vertical-left-wrapper" : ""}`}>
                {item.ribbon && (
                  <div className="ribbon ribbon-bookmark ribbon-vertical-left ribbon-secondary">
                    <i className="icofont icofont-love"></i>
                  </div>
                )}
                <div className="job-search">
                  <CardBody>
                    <Media>
                      <Image height={50} width={50} className="img-40 img-fluid m-r-20" src={`${ImagePath}/${item.logo}`} alt="" />
                      <Media body>
                        <h6 className="f-w-600">
                          <a href={Href}>{item.job_name}</a>
                          {item.badgeValue === "new" ? (
                            <span className="pull-right">{item.type}</span>
                          ) : (
                            <Badge color="primary" className=" pull-right">
                              {item.type}
                            </Badge>
                          )}
                        </h6>
                        <p>
                          {item.job_area}, {item.job_city}
                        </p>
                        {RatingsData}
                      </Media>
                    </Media>
                    <p>{item.Job_description}</p>
                  </CardBody>
                </div>
              </Card>
            </Col>
          ))}
      </Row>
    </Col>
  );
};

export default MainCards;
