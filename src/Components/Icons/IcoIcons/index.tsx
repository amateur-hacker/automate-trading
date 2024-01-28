import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { IcoIconData } from "@/Data/Icons/IcoIcons";
import { useCallback, useState } from "react";
import { Container, Row } from "reactstrap";
import IconMarkUp from "../IconMarkUp";
import IcoIconsCommon from "./Common";

const IcoIcons = () => {
  const [iTag, setITag] = useState<string | object>("");
  const [icon, setIcon] = useState<string | object>("");

  const callback = useCallback((tag: string) => {
    setITag({
      iTag: '<i className="icofont icofont-' + tag + '"></i>',
    });
    setIcon({
      icon: "icofont icofont-" + tag + " fa-2x",
    });
  }, []);
  return (
    <>
      <CommonBreadcrumb parent="Icons" pageTitle="Ico Icons" />
      <Container fluid>
        {IcoIconData.map((item, i) => {
          return (
            <Row key={i}>
              <IcoIconsCommon iconType={item.icons} title={item.title} parentCallback={callback} />
            </Row>
          );
        })}
      </Container>
      <IconMarkUp iTag={iTag} icons={icon} />
    </>
  );
};

export default IcoIcons;
