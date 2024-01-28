import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { SpillDragNDrop } from "@/Constant";
import { DragAndDropData } from "@/Data/BonusUi/DragAndDrop";
import dragula from "react-dragula";
import { Card, CardBody, Col } from "reactstrap";

const SpillDragAndDrop = () => {
  const dragulaDecoratorSpill = (componentBackingInstance: HTMLElement | null) => {
    if (componentBackingInstance) {
      let options = {
        isContainer: function () {
          return false;
        },
        direction: "vertical",
        copy: false,
        copySortSource: false,
        revertOnSpill: true,
        removeOnSpill: true,
        mirrorContainer: document.body,
        ignoreInputTextSelection: true,
      };
      dragula([componentBackingInstance], options);
    }
  };
  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={SpillDragNDrop} />
        <CardBody>
          <div className="ui-sortable" id="draggableMultiple">
            <div className="container" ref={dragulaDecoratorSpill}>
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

export default SpillDragAndDrop;
