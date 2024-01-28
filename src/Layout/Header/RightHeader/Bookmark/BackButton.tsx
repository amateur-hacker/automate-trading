import { Back, Href } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { useAppDispatch } from "@/Redux/ReduxStore";
import { bookmarkToggle } from "@/Redux/Slices/HeaderSlice";
import { handleBookmarkChange } from "@/Redux/Slices/SidebarSlice";
import { SearchBarArrayType } from "@/Type/Header";
import Link from "next/link";
import { useState } from "react";
import { Input } from "reactstrap";

export const BackButton = () => {
  const [starIcon, setStarIcon] = useState(false);
  const [searchWord, setSearchWord] = useState("");
  const { linkItemsArray } = useAppSelector((store) => store.sidebarSlice);
  const [searchedItems, setSearchedItems] = useState<SearchBarArrayType[]>([]);
  const searchItems = () => {
    let copy = [...linkItemsArray];
    let result = copy.filter((item, i) => item.name.toLowerCase().includes(searchWord.toLowerCase()));
    setSearchedItems(result);
  };
  const dispatch = useAppDispatch();
  const { i18LangStatus } = useAppSelector((store) => store.langSlice);
  return (
    <div className="back dropdown-title">
      <ul className="list-group">
        <li className="list-group-item">
          <div className="bookmark-dropdown flip-back-content">
            <Input
              type="text"
              value={searchWord}
              placeholder="search..."
              onChange={(e) => {
                setSearchWord(e.target.value);
                searchItems();
              }}
            />
            <div className={`Typeahead-menu filled-bookmark custom-scrollbar ${searchWord ? "is-open" : ""}`} id="search-outer">
              {searchedItems.map((item, i) => (
                <div key={i} className="ProfileCard u-cf">
                  <div className="ProfileCard-avatar">{item.icon}</div>
                  <div className="ProfileCard-details">
                    <div className="ProfileCard-realName">
                      <Link className="realname" href={`/${i18LangStatus}${item.pathName}`}>
                        {item.name}
                      </Link>
                      <span className="pull-right">
                        <Link href={`/${i18LangStatus}/${item.pathName}`}>
                          <i onClick={() => dispatch(handleBookmarkChange(linkItemsArray[item.id - 1]))} className={`fa fa-star-o mt-1 icon-star ${linkItemsArray[item.id - 1].bookmarked ? "starred" : ""}`}></i>
                        </Link>
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className={`empty-bookmark Typeahead-menu ${searchWord && !searchedItems.length ? "is-open" : ""}`}>
              <div className="tt-dataset tt-dataset-0">
                <div className="EmptyMessage">Opps!! There are no result found.</div>
              </div>
            </div>
          </div>
        </li>
        <li className="list-group-item">
          <a href={Href} className="f-w-700 d-block flip-back text-decoration-none" onClick={() => dispatch(bookmarkToggle(""))} id="flip-back">
            {Back}
          </a>
        </li>
      </ul>
    </div>
  );
};
