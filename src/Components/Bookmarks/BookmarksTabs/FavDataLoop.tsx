import { Href, ImagePath } from "@/Constant";
import Image from "next/image";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Card, Col, Row } from "reactstrap";
import SweetAlert from "sweetalert2";
import { bookMarkType } from "@/Type/Bookmarks";
import FavDescriptionData from "./FavDescriptionData";
import NoBookmarksFoundComponent from "./NoBookmarksFoundComponent";
import { RootState } from "@/Redux/ReduxStore";

const FavDataLoop = () => {
  const { mybookmarkData } = useSelector((state: RootState) => state.BookMarkReducer);
  const dispatch = useDispatch();
  const [editModal, setEditModal] = useState(false);
  const Remove_from_favourite = (data: bookMarkType) => {
    if (data.fillstar) {
      dispatch({ type: "updateFavFilStar", payload: data.id });
      dispatch({ type: "removeMyBookMark", payload: data.id });
      dispatch({ type: "updateBooMark", payload: { id: data.id, data, image_url: data.image } });
    }
  };
  const editToggle = () => {
    setEditModal(!editModal);
  };
  const [editRow, setEditRow] = useState({});
  const [editImgUrl, setEditImgUrl] = useState<string | undefined>();
  const editBookmarkData = (data: bookMarkType) => {
    editToggle();
    setEditRow(data);
    setEditImgUrl(`${ImagePath}/${data.image}`);
  };
  const Remove_from_my_bookmark = (mybookmarkId: number) => {
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
        dispatch({ type: "removeMyBookMark", payload: mybookmarkId });
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Row>
      {mybookmarkData.length > 0 ? (
        mybookmarkData.map((myBookData: bookMarkType) => (
          <Col xl="3" className="xl-50" md="4" key={myBookData.id}>
            <Card className="card-with-border bookmark-card o-hidden">
              <div className="details-website">
                <Image className="img-fluid" src={`${ImagePath}/${myBookData.image}`} alt="Image"  height={160} width={250}/>
                <div className={`favourite-icon favourite_0 ${myBookData.fillstar ? "favourite" : ""}`}>
                  <a href={Href}>
                    <i className="fa fa-star" onClick={() => Remove_from_favourite(myBookData)}></i>
                  </a>
                </div>
                <FavDescriptionData myBookData={myBookData} editBookmarkData={editBookmarkData} Remove_from_my_bookmark={Remove_from_my_bookmark} />
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
export default FavDataLoop;
