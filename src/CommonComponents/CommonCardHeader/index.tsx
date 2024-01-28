import { CommonHeaderProps } from "@/Type/UiKits";
import { Fragment } from "react";
import { CardHeader } from "reactstrap";

const CommonCardHeader = ({ heading, subHeading }: CommonHeaderProps) => {
  return (
    <CardHeader className="pb-0">
      <h5>{heading}</h5>
      <span>
        {subHeading?.map((item, i) => (
          <Fragment key={i}>
            {item.text}{item.strong && <strong>{item.strong}</strong>} {item.code && <code>{item.code}</code>}
          </Fragment>
        ))}
      </span>
    </CardHeader>
  );
};

export default CommonCardHeader;
