import { Href } from "@/Constant";
import { changeColumnClass, toggleColumnGrid, toggleRowGrid } from "@/Redux/Slices/FilterSlice";
import { CommonGridProps } from "@/Type/ECommerce";
import { Grid, List } from "react-feather";
import { useDispatch } from "react-redux";
import { Col, ListGroup, ListGroupItem, Row } from "reactstrap";
import Sorting from "./Sorting";

const ProductTotal = () => {
  const CommonGrid = ({ gridCount }: CommonGridProps) => gridCount.map((item, i) => <span key={i} className={`line-grid line-grid-${item} bg-primary`}></span>);
  const dispatch = useDispatch();
  const handleColumnClass = (name: string) => {
    dispatch(changeColumnClass(name));
  };
  return (
    <Row className="m-b-10">
      <Col md="3" sm="2" className="products-total">
        <div className="square-product-setting d-inline-block">
          <a className="icon-grid grid-layout-view" onClick={() => { dispatch(toggleColumnGrid()); }} href={Href}>
            <Grid />
          </a>
        </div>
        <div className="square-product-setting d-inline-block ms-2">
          <a className="icon-grid m-0 list-layout-view" onClick={() => { dispatch(toggleRowGrid()); }} href={Href}>
            <List />
          </a>
        </div>
        <div className="d-none-productlist filter-toggle">
          <h6 className="mb-0">
            Filters
            <span className="ms-2">
              <i className="toggle-data fa fa-chevron-down"></i>
            </span>
          </h6>
        </div>
        <div className="grid-options d-inline-block">
          <ListGroup className="simple-list">
            <ListGroupItem>
              <a className="product-2-layout-view" onClick={() => { handleColumnClass("col-xl-6 col-sm-6"); }} href={Href}>
                <CommonGrid gridCount={[1, 2]} />
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a className="product-3-layout-view" onClick={() => { handleColumnClass("col-xl-4 col-sm-4"); }} href={Href}>
                <CommonGrid gridCount={[3, 4, 5]} />
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a className="product-4-layout-view" onClick={() => { handleColumnClass("col-xl-3 col-sm-3"); }} href={Href}>
                <CommonGrid gridCount={[6, 7, 8, 9]} />
              </a>
            </ListGroupItem>
            <ListGroupItem>
              <a className="product-6-layout-view" onClick={() => { handleColumnClass("col-xl-2 col-sm-2"); }} href={Href} >
                <CommonGrid gridCount={[10, 11, 12, 13, 14, 15]} />
              </a>
            </ListGroupItem>
          </ListGroup>
        </div>
      </Col>
      <Sorting />
    </Row>
  );
};
export default ProductTotal;
