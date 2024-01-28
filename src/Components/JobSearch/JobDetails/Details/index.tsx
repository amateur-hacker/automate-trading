import { Href, ImagePath, JobDescriptions, Savethisjob, Share } from "@/Constant";
import { JobDescriptionParagraph, JobDetailsMainContent, RatingsData } from "@/Data/JobSearch";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { Button, Card, CardBody, Col, Media } from "reactstrap";
import SimilarJobs from "../SimilarJobs";
import { useAppSelector } from "@/Redux/Hooks";

const Details = () => {
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  const router = useRouter();
  return (
    <Col xl="9" className="box-col-7 xl-60">
      <Card>
        <div className="job-search">
          <CardBody>
            <Media>
              <Image height={50} width={50} className="img-40 img-fluid m-r-20" src={`${ImagePath}/job-search/1.jpg`} alt="" />
              <Media body>
                <h6 className="f-w-600">
                  <a href={Href}>Product Designer (UI/UX Designer)</a>
                </h6>
                <p>Endless - United States</p>
                {RatingsData}
                <Button onClick={() => router.push(`/${i18LangStatus}/jobSearch/job-apply`)} size="sm" className="job-apply-btn" color="primary">
                  Apply for this job
                </Button>
              </Media>
            </Media>
            <div className="job-description">
              <h6>{JobDescriptions}</h6>
              <p className="text-start">{JobDescriptionParagraph}</p>
            </div>
            {JobDetailsMainContent.map((item, i) => (
              <div key={i} className="job-description">
                <h6>{item.heading}</h6>
                <ul>
                  {item.data.map((item) => {
                    return <li key={item.id}>{item.paragraph}</li>;
                  })}
                </ul>
              </div>
            ))}
            <div className="job-description">
              <Button className="me-2" color="primary" type="button">
                <span>
                  <i className="fa fa-check pe-1"></i>
                </span>
                {Savethisjob}
              </Button>
              <Button color="primary" type="button">
                <span>
                  <i className="fa fa-share-alt pe-1"></i>
                </span>
                {Share}
              </Button>
            </div>
          </CardBody>
        </div>
      </Card>
      <SimilarJobs />
    </Col>
  );
};
export default Details;
