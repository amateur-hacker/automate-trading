import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Example2, ImagePath } from "@/Constant";
import { TimelineData } from "@/Data/BonusUi/Timeline";
import Image from "next/image";
import { Activity, Edit, Film, Video } from "react-feather";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Card, CardBody, Col } from "reactstrap";

const Example2Timeline = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Example2} />
        <CardBody>
          <VerticalTimeline layout={"1-column"}>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="2021 - present" icon={<Edit />}>
              <h4 className="vertical-timeline-element-subtitle">{"Miami, FL"}</h4>
              <p>{"Creative Direction, User Experience, Visual Design, Project Management, Team Leading"}</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work" date="2018 - 2020" icon={<Video />}>
              <h4 className="vertical-timeline-element-subtitle">{"San Francisco, CA"}</h4>
              <div className="embed-responsive embed-responsive-21by9 m-t-20 ratio ratio-21x9">
                <iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen title="myFrame"></iframe>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work" date="2017 - 2018" icon={<Film />}>
              <h4 className="vertical-timeline-element-subtitle">{"Los Angeles, CA"}</h4>
              <Image className="img-fluid p-t-20 w-100 h-100" height={700} width={600} src={`${ImagePath}/banner/original.jpg`} alt="timelineImg1" />
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work" date="2016 - 2017" icon={<Activity />}>
              <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
              <audio controls preload="none">
                <source src="../assets/audio/horse.ogg" type="audio/ogg" />
                {"Your browser does not support the audio element."}
              </audio>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" date="April 2016" icon={<Film />}>
              <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
              <Image className="img-fluid p-t-20 w-100 h-100" height={700} width={600} src={`${ImagePath}/banner/3.jpg`} alt="timelineImg2" />
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" date="November 2014" icon={<Edit />}>
              <h4 className="vertical-timeline-element-subtitle">Certification</h4>
              <p>{TimelineData}</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Example2Timeline;
