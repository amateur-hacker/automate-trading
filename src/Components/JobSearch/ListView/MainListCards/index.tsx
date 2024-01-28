import { Href, ImagePath } from "@/Constant";
import { RatingsData2 } from "@/Data/JobSearch";
import { JobMainCardsType } from "@/Type/JobSearch";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Badge, Card, CardBody, Col, Media } from "reactstrap";

const MainListCards = () => {
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
    <Col xl="9" className="xl-60 box-col-7">
      {cardsData &&
        cardsData.slice(0, 8).map((item: JobMainCardsType, i) => (
          <Card key={i}>
            <div className="job-search">
              <CardBody>
                <Media>
                  <Image height={50} width={50} className="img-40 img-fluid m-r-20" src={`${ImagePath}/${item.logo}`} alt="" />
                  <Media body>
                    <h6 className="f-w-600">
                      <a href={Href}>{item.job_name}</a>
                      {item.badgeType === "primary" && (
                        <Badge color="primary" className="pull-right">
                          {item.badgeValue}
                        </Badge>
                      )}
                    </h6>
                    <p>
                      {item.job_area} <span>{item.job_city}</span>
                      {RatingsData2}
                    </p>
                  </Media>
                </Media>
                <p>{item.Job_description}</p>
              </CardBody>
            </div>
          </Card>
        ))}
    </Col>
  );
};

export default MainListCards;
