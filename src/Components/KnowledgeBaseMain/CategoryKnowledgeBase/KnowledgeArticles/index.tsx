import { Href, ImagePath } from "@/Constant";
import { knowledgeDataPropsType } from "@/Type/Knowledgebase";
import Image from "next/image";
import React, { useEffect } from "react";
import { Archive, ArrowRight, FileText } from "react-feather";
import { Badge, Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/Redux/ReduxStore";
import { fetchContent } from "@/Redux/Slices/KnowledgeBaseSlice";

const KnowledgeArticles = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContent());
  }, []);

  const fetchedKnowledgeData = useSelector((store: RootState) => store.knowledgeBaseSlice.data);
  return (
    <Col sm="12">
      <div className="header-faq">
        <h5 className="mb-0">knowledge articles by category</h5>
      </div>
      <Row className="browse">
        {fetchedKnowledgeData.length > 0 ? (
          fetchedKnowledgeData.map((data: knowledgeDataPropsType) => (
            <Col xl="4" md="6" key={data.id} className="xl-50">
              <div className="browse-articles">
                <h4>
                  <span>
                    <Archive />
                  </span>
                  {data.title}
                </h4>
                <ListGroup className="simple-list" tag={"ul"}>
                  <ListGroupItem tag={"li"}>
                    <a href={Href}>
                      <span>
                        <FileText />
                      </span>
                      <h5>{data.text1}</h5>
                      <Badge color="primary" className="pull-right">
                        {data.text1_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Href}>
                      <span>
                        <FileText />
                      </span>
                      <h5>{data.text2}</h5>
                      <Badge color="primary" className="pull-right">
                        {data.text2_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Href}>
                      <span>
                        <FileText />
                      </span>
                      <h5>{data.text3}</h5>
                      <Badge color="primary" className="pull-right">
                        {data.text3_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Href}>
                      <span>
                        <FileText />
                      </span>
                      <h5>{data.text4}</h5>
                      <Badge color="primary" className="pull-right">
                        {data.text4_badge}
                      </Badge>
                    </a>
                  </ListGroupItem>
                  <ListGroupItem>
                    <a href={Href} className="f-w-600 font-primary">
                      <span>
                        <ArrowRight />
                      </span>
                      <span className="ms-2">{data.text5}</span>
                    </a>
                  </ListGroupItem>
                </ListGroup>
              </div>
            </Col>
          ))
        ) : (
          <Image height={400} width={400} className="img-fluid second-search" src={`${ImagePath}/search-not-found.png`} alt="" />
        )}
      </Row>
    </Col>
  );
};

export default KnowledgeArticles;
