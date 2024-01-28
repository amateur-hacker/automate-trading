import { Href, ImagePath } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { bookMarkType } from "@/Type/Bookmarks";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "reactstrap";
import SweetAlert from "sweetalert2";
import DescriptionData from "./DescriptionData";
import NoBookmarksFoundComponent from "./NoBookmarksFoundComponent";

const DataLoop = () => {
  const { bookmark, editModal } = useSelector((state: RootState) => state.BookMarkReducer);
  const dispatch = useDispatch();
  const editToggle = () => {
    dispatch({ type: "setEditModal", payload: !editModal });
  };
  const addToFavorites = (data: bookMarkType) => {
    if (data.fillstar === false) {
      dispatch({ type: "updateFillStar", payload: data });
    } else {
      dispatch({ type: "fillStarFalse", payload: data.id });
      dispatch({ type: "removeMyBookMark", payload: data.id });
    }
  };
  const OnHandleClick = (data: bookMarkType) => {
    editToggle();
    dispatch({ type: "setEditRow", payload: data });
    dispatch({
      type: "setEditImgUrl",
      payload: `${ImagePath}/${data.image}`,
    });
  };
  const RemoveFromBookmark = (bookmarkId: number, fillstar: boolean) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        if (fillstar) dispatch({ type: "removeMyBookMark", payload: bookmarkId });
        dispatch({ type: "removeBookmMark", payload: bookmarkId });
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Row id="bookmarkData">
      {bookmark.length > 0 ? (
        bookmark.map((data: bookMarkType, index: number) => (
          <Col xl="3" lg="6" sm="6" md="4" key={index} className="xl-50 box-col-6">
            <Card className="bookmark-card o-hidden">
              <div className="details-website">
                <Image className="img-fluid" src={`${ImagePath}/${data.image}`} alt="image" height={160} width={240} />
                <div className={`favourite-icon favourite_0 ${data.fillstar ? "favourite" : ""}`} onClick={() => addToFavorites(data)}>
                  <a href={Href}>
                    <i className="fa fa-star"></i>
                  </a>
                </div>
                <DescriptionData data={data} OnHandleClick={OnHandleClick} RemoveFromBookmark={RemoveFromBookmark} />
              </div>
            </Card>
          </Col>
        ))
      ) : (
        <NoBookmarksFoundComponent />
      )}
    </Row>
  );
};
export default DataLoop;
