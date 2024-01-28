import { Href } from "@/Constant";
import { SearchResultDataType } from "@/Type/SearchResult";
import axios from "axios";
import { useEffect, useState } from "react";
import { Col, Media, Row } from "reactstrap";
import TabPagination from "../TabPagination";

const VideoTabs = () => {
  const [tabsData, setTabsData] = useState<SearchResultDataType[]>();
  useEffect(() => {
    axios.get(`/api/searchResultApi`).then((resp) => {
      setTabsData(resp.data);
    });
  }, []);
  return (
    <Row>
      <Col xl="6" className="xl-100 box-col-12">
        <p className="pb-4">About 6,000 results (0.60 seconds)</p>
        {tabsData &&
          tabsData.map((item) => {
            return (
              <Media className="info-block" key={item.id}>
                <iframe className="me-3 mb-3" title="1" width="200" height="100" src={item.videoLink}></iframe>
                <Media body>
                  <h6>{item.title}</h6>
                  <a href={Href}>{item.url}</a>
                  <p>{item.detail}</p>
                  <div className="star-ratings">
                    <ul className="simple-list search-info flex-row">
                      <li>{item.star}</li>
                      <li>{item.vote}</li>
                      <li>{item.news}</li>
                    </ul>
                  </div>
                </Media>
              </Media>
            );
          })}
        <TabPagination />
      </Col>
      <Col xl="6" className="xl-100 box-col-12 search-vid">
        <Row className="search-vid-block">
          <Col xl="12" className="xl-50 box-col-6">
            <div className="embed-responsive embed-responsive-21by9">
              <iframe className="w-100" title="1" height="315" src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen></iframe>
            </div>
          </Col>
          <Col xl="12" className="xl-50 box-col-6">
            <div className="embed-responsive embed-responsive-21by9">
              <iframe className="w-100" title="1" height="315" src="https://www.youtube.com/embed/I0-vBdh4sZ8" allowFullScreen></iframe>
            </div>
          </Col>
        </Row>
      </Col>
    </Row>
  );
};
export default VideoTabs;
