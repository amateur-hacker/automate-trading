declare module "deni-react-treeview" {
  import * as React from "react";

  interface NodeData {
    id: string | number;
    text: string;
    children?: NodeData[];
  }

  export interface DeniReactTreeView {
    data: NodeData[];
    showCheckbox?: boolean;
    theme?: string;
    url?: string;
    style?: React.CSSProperties;
    selectRow?: boolean;
    onRenderItem?(item: NodeData): React.ReactNode;
  }

  interface DeniReactTreeViewApi {
    deleteItem(id: string | number): void;
  }

  export default class DeniReactTreeView extends React.Component<DeniReactTreeViewProps, any> {
    api: DeniReactTreeViewApi;
  }
}
