import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { CopyDragNDrop } from "@/Constant";
import { DragAndDropData } from "@/Data/BonusUi/DragAndDrop";
import { CopyDragAndDropOptionsType } from "@/Type/BonusUi";
import { useEffect } from "react";
import dragula from "react-dragula";
import { Card, CardBody, Col } from "reactstrap";

const CopyDragAndDrop = () => {
  useEffect(() => {
    const dragulaDecoratorRight = (componentBackingInstance: HTMLElement | null) => {
      if (componentBackingInstance) {
        const options: CopyDragAndDropOptionsType = {
          copy: true,
          copySortSource: true,
          removeOnSpill: false,
          mirrorContainer: document.getElementById("right") as HTMLElement,
          accepts: (target) => {
            return target?.id === "left";
          },
          copies: (el) => {
            return el?.id === "left";
          },
          copyItem: (sibling) => {
            return sibling?.id === "left";
          },
        };

        dragula([componentBackingInstance], options);
      }
    };

    dragulaDecoratorRight(document.getElementById("right"));

    return () => {
      const rightContainer = document.getElementById("right");
      if (rightContainer) {
        dragulaDecoratorRight(rightContainer);
      }
    };
  }, []);

  return (
    <Col sm="12">
      <Card>
        <CommonCardHeader heading={CopyDragNDrop} />
        <CardBody>
          <div className="ui-sortable" id="draggableMultiple">
            <div className="container" id="right">
              {DragAndDropData.slice(0, 3).map((item, i) => (
                <div key={i}>{item}</div>
              ))}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default CopyDragAndDrop;
