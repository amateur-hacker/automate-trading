import { Href } from "@/Constant";
import { DescriptionDataProps } from "@/Type/Bookmarks";
import { Edit2, Link, Share2, Tag, Trash2 } from "react-feather";

const DescriptionData = ({ data, OnHandleClick, RemoveFromBookmark }: DescriptionDataProps) => {
  const { title, website_url, fillstar, id } = data;
  return (
    <div className="desciption-data">
      <div className="title-bookmark">
        <h6 className="title_0">{title} </h6>
        <p className="weburl_0">{website_url}</p>
        <div className="hover-block">
          <ul className="simple-list flex-row">
            <li>
              <a href={Href} onClick={() => OnHandleClick(data)}>
                <Edit2 />
              </a>
            </li>
            <li>
              <a href={Href}>
                <Link />
              </a>
            </li>
            <li>
              <a href={Href}>
                <Share2 />
              </a>
            </li>
            <li>
              <a href={Href} onClick={() => RemoveFromBookmark(id, fillstar)}>
                <Trash2 />
              </a>
            </li>
            <li className="pull-right text-end">
              <a href={Href}>
                <Tag />
              </a>
            </li>
          </ul>
        </div>
        <div className="content-general">
          <p className="desc_3">{data.desc}</p>
          <span className="collection_3">{data.collection}</span>
        </div>
      </div>
    </div>
  );
};

export default DescriptionData;
