import { ImagePath } from "@/Constant";
import { CommonProjectListProps } from "@/Type/Projects";
import Image from "next/image";
import { Col, Media, Progress, Row } from "reactstrap";

const CommonProjectList = ({ ProjectListData }: CommonProjectListProps) => {
  return (
    <Row>
      {ProjectListData.map((item, i) => (
        <Col md="6" xxl='4' key={i}>
          <div className="project-box">
            <span className={`badge ${item.badge === "Done" ? "badge-secondary" : "badge-primary"}`}>{item.badge}</span>
            <h6>{item.title}</h6>
            <Media>
              <Image height={20} width={20} className="img-20 me-2 rounded-circle" src={`${ImagePath}/${item.image}`} alt="" />
              <Media body>
                <p>{item.sites}</p>
              </Media>
            </Media>
            <p>{item.desc}</p>
            <Row className="details">
              <Col xs="6">
                <span>Issues </span>
              </Col>
              <Col xs="6" className={item.badge === "Done" ? "font-secondary" : "font-primary"}>
                {item.issue}
              </Col>
              <Col xs="6">
                <span>Resolved</span>
              </Col>
              <Col xs="6" className={item.badge === "Done" ? "font-secondary" : "font-primary"}>
                {item.resolved}
              </Col>
              <Col xs="6">
                <span>Comment</span>
              </Col>
              <Col xs="6" className={item.badge === "Done" ? "font-secondary" : "font-primary"}>
                {item.comment}
              </Col>
            </Row>
            <div className="customers">
              <ul className=" flex-row">
                <li className="d-inline-block">
                  <Image height={30} width={30} className="img-30 rounded-circle" src={`${ImagePath}/${item.customers_img1}`} alt="" />
                </li>
                <li className="d-inline-block">
                  <Image height={30} width={30} className="img-30 rounded-circle" src={`${ImagePath}/${item.customers_img2}`} alt="" />
                </li>
                <li className="d-inline-block">
                  <Image height={30} width={30} className="img-30 rounded-circle" src={`${ImagePath}/${item.customers_img3}`} alt="" />
                </li>
                <li className="d-inline-block ms-2">
                  <p className="f-12">{`+${item.like} More`}</p>
                </li>
              </ul>
            </div>
            <div className="project-status mt-4">
              <Media className="mb-0">
                <p>{item.progress}% </p>
                <Media body className="text-end">
                  <span>Done</span>
                </Media>
              </Media>
              {item.progress === "100" ? <Progress className="sm-progress-bar" color="secondary" value={item.progress} style={{ height: "5px" }} /> : <Progress className="sm-progress-bar" striped color="primary" value={item.progress} style={{ height: "5px" }} />}
            </div>
          </div>
        </Col>
      ))}
    </Row>
  );
};

export default CommonProjectList;
