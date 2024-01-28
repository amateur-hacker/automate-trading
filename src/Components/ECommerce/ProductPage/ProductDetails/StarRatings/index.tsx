import { ProductReview } from "@/Constant";
import { useState } from "react";
import Ratings from "react-ratings-declarative";

const StarRatings = () => {
  const [rating, setRating] = useState<number>(0);
  const changeRating = (newRating: number) => {
    setRating(newRating);
  };
  return (
    <div className="product-page-details">
      <h3>{"Women Pink shirt."}</h3>
      <div className="pro-review">
        <div className="d-flex">
          <Ratings rating={rating} widgetRatedColors="blue" widgetDimensions="20px" widgetSpacings="0px" changeRating={changeRating}>
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
            <Ratings.Widget />
          </Ratings>
          <span>{ProductReview}</span>
        </div>
      </div>
    </div>
  );
};
export default StarRatings;
