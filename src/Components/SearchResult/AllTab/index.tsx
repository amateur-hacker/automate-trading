import { Href, ImagePath, MarkJecno } from "@/Constant";
import { SearchResultDataType } from "@/Type/SearchResult";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Card, Col, Row } from "reactstrap";
import TabPagination from "../TabPagination";

const AllTabs = () => {
  const [tabsData, setTabsData] = useState<SearchResultDataType[]>();
  useEffect(() => {
    axios.get(`/api/searchResultApi`).then((resp) => {
      setTabsData(resp.data);
    });
  }, []);
  return (
    <div className="search-links tab-pane fade show active" id="all-links">
      <Row>
        <Col xl="6" className=" box-col-6 search-banner">
          <p className="pb-4">About 6,000 results (0.60 seconds)</p>
          {tabsData &&
            tabsData.map((item) => {
              return (
                <div className="info-block" key={item.id}>
                  <h6>{item.title}</h6>
                  <a href={Href}>{item.url}</a>
                  <p>{item.detail}</p>
                  <div className="star-ratings">
                    <ul className="simple-list search-info flex-row">
                      <li>
                        <ul className="simple-list rating flex-row">
                          <li>
                            <i className="icofont icofont-ui-rating"></i>
                          </li>
                          <li>
                            <i className="icofont icofont-ui-rating"></i>
                          </li>
                          <li>
                            <i className="icofont icofont-ui-rating"></i>
                          </li>
                          <li>
                            <i className="icofont icofont-ui-rate-blank"></i>
                          </li>
                          <li>
                            <i className="icofont icofont-ui-rate-blank"></i>
                          </li>
                        </ul>
                      </li>
                      <li>{item.star}</li>
                      <li>{item.vote}</li>
                      <li>{item.news}</li>
                    </ul>
                  </div>
                </div>
              );
            })}
          <TabPagination />
        </Col>
        <Col xl="6" className="box-col-6 search-banner">
          <Card className="mb-0">
            <div className="blog-box blog-shadow">
              <Image className="img-fluid bg-img-cover" src={`${ImagePath}/blog/blog.jpg`} alt="" height={400} width={700} />
              <div className="blog-details">
                <p className="digits">25 July 2023</p>
                <h4>Accusamus et iusto odio dignissimos ducimus qui blanditiis.</h4>
                <ul className="simple-list blog-social digits flex-row">
                  <li>
                    <i className="icofont icofont-user"></i>
                    {MarkJecno}
                  </li>
                  <li>
                    <i className="icofont icofont-thumbs-up"></i>02 Hits
                  </li>
                </ul>
              </div>
            </div>
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default AllTabs;
