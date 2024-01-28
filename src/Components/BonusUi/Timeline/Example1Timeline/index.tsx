import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { Example1, ImagePath, TitleOfSection } from "@/Constant";
import { TimelineData } from "@/Data/BonusUi/Timeline";
import Image from "next/image";
import { Activity, Edit, Film, Video } from "react-feather";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { Card, CardBody, Col } from "reactstrap";

const Example1Timeline = () => {
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={Example1} />
        <CardBody>
          <VerticalTimeline>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="Jan 14" icon={<Edit />}>
              <h4 className="vertical-timeline-element-subtitle">{TitleOfSection}1</h4>
              <p>{TimelineData}</p>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work" date="Jan 18" icon={<Video />}>
              <h4 className="vertical-timeline-element-subtitle">{TitleOfSection}2</h4>
              <div className="embed-responsive embed-responsive-21by9 m-t-20 ratio ratio-21x9">
                <iframe src="https://www.youtube.com/embed/wpmHZspl4EM" allowFullScreen title="myFrame"></iframe>
              </div>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--work" date="Jan 24" icon={<Film />}>
              <h4 className="vertical-timeline-element-subtitle">{TitleOfSection}3</h4>
              <Image width={600} height={300} className="img-fluid p-t-20 h-100 w-100" src={`${ImagePath}/banner/original.jpg`} alt="timelineImg1" />
            </VerticalTimelineElement>
            <VerticalTimelineElement className="vertical-timeline-element--work" date="Feb 14" icon={<Activity />}>
              <h4 className="vertical-timeline-element-subtitle">{TitleOfSection}4</h4>
              <audio controls preload="none">
                <source src="../assets/audio/horse.ogg" type="audio/ogg" />
                {"Your browser does not support the audio element."}
              </audio>
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" date="Feb 18" icon={<Film />}>
              <h4 className="vertical-timeline-element-subtitle">{TitleOfSection}5</h4>
              <Image width={600} height={300} className="img-fluid p-t-20 w-100 h-100" src={`${ImagePath}/banner/2.jpg`} alt="timelineImg2" />
            </VerticalTimelineElement>

            <VerticalTimelineElement className="vertical-timeline-element--education" date="Feb 26" icon={<Edit />}>
              <h4 className="vertical-timeline-element-subtitle">{"Final Section"}</h4>
              <p>{TimelineData}</p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </CardBody>
      </Card>
    </Col>
  );
};

export default Example1Timeline;
