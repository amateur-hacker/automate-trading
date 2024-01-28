import { Featured, HighestPrices, LowestPrices, ShowingProducts } from "@/Constant";
import { SortBy } from "@/Redux/Slices/ECommerceSlice";
import { ChangeEvent } from "react";
import { useDispatch } from "react-redux";
import { Col, Input } from "reactstrap";

const Sorting = () => {
  const dispatch = useDispatch();
  const filterSortFunc = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(SortBy(e.target.value));
  };
  return (
    <Col md="9" sm="10" className="featured-sec text-end">
      <span className="f-w-600 m-r-5">{ShowingProducts}</span>
      <div className="select2-drpdwn-product select-options d-inline-block" onChange={filterSortFunc}>
        <Input className=" btn-square" type="select" name="select">
          <option value="Featured">{Featured}</option>
          <option value="Lowest Prices">{LowestPrices}</option>
          <option value="Highest Prices">{HighestPrices}</option>
        </Input>
      </div>
    </Col>
  );
};
export default Sorting;
