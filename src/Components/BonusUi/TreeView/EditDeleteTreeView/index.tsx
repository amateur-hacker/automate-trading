import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import { RemoveItemTree } from "@/Constant";
import { RemoveItemTreeViewType } from "@/Type/BonusUi";
import DeniReactTreeView from "deni-react-treeview";
import { useRef } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Card, CardBody, Col } from "reactstrap";

const RemoveItemTreeView = () => {
  const treeviewRef = useRef(null);
  const deleteItemClick = (id: number) => {
    if (treeviewRef.current) {
      const api = (treeviewRef.current as any).api;
      if (api) {
        api.removeItem(id);
      }
    }
  };

  const editItemClick = (item: RemoveItemTreeViewType) => {
    alert("Edit item: " + JSON.stringify(item, null, 2));
  };

  const onRenderItem = (item: RemoveItemTreeViewType) => {
    return (
      <div className="treeview-item-example">
        <span className="treeview-item-example-text">{item.text}</span>
        <span className="actionButton trash" onClick={() => deleteItemClick(item.id)}>
          <FaTrash size="15" />
        </span>
        <span className="actionButton edit" onClick={() => editItemClick(item)}>
          <FaEdit size="15" />
        </span>
      </div>
    );
  };

  return (
    <Col sm="6">
      <Card>
        <CommonCardHeader heading={RemoveItemTree} />
        <CardBody>
          <DeniReactTreeView className="onrenderitem-example" ref={treeviewRef} url="https://raw.githubusercontent.com/denimar/deni-react-treeview/develop/src/assets/data/countries.json" selectRow={true} onRenderItem={onRenderItem} />
        </CardBody>
      </Card>
    </Col>
  );
};

export default RemoveItemTreeView;
