import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { ClickAndDrag } from "@/Constant";
import { DragAndDropData } from "@/Data/BonusUi/DragAndDrop";
import { useEffect, useRef } from "react";
import dragula from "react-dragula";
import { Card, CardBody, Col } from "reactstrap";

const ClickAndDragComponent = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      let options = {};
      dragula([containerRef.current], options);
    }
  }, []);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={ClickAndDrag} />
        <CardBody>
          <div className="ui-sortable small-drag" id="draggableMultiple">
            <div className="container" ref={containerRef}>
              {DragAndDropData.map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ClickAndDragComponent;
