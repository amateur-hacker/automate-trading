"use client";
import { HeaderBookmarkSvg } from "@/svgIcons";
import React from "react";
import { RootState, useAppDispatch } from "@/Redux/ReduxStore";
import { useSelector } from "react-redux";
import { bookmarkToggle } from "@/Redux/Slices/HeaderSlice";
import { MainContent } from "./MainContent";
import { AddNewBookmark, BookmarkTitle, Href } from "@/Constant";
import { BackButton } from "./BackButton";
import { Button } from "reactstrap";

const Bookmark = () => {
  const dispatch = useAppDispatch();
  const bookmarkToggleClass = useSelector((store: RootState) => store.headerSlice.bookmarkToggle);
  return (
    <li className="onhover-dropdown">
      <div className="notification-box">
        <HeaderBookmarkSvg />
      </div>
      <div className="onhover-show-div bookmark-flip">
        <div className="flip-card">
          <div className={`flip-card-inner ${bookmarkToggleClass}`}>
            <div className="front dropdown-title">
              <h3 className="mb-3">{BookmarkTitle}</h3>
              <ul className="simple-list pb-0 bookmark-dropdown list-group">
                <MainContent />
                <li className="text-center mt-2 pb-0 list-group-item" onClick={() => dispatch(bookmarkToggle("flipped"))}>
                  <Button color="primary" className="flip-btn d-block w-100" href={Href} id="flip-btn">
                    {AddNewBookmark}
                  </Button>
                </li>
              </ul>
            </div>
            <BackButton />
          </div>
        </div>
      </div>
    </li>
  );
};

export default Bookmark;
