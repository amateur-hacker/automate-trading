import { CategoryConst, MAX, MIN, Price, STEP } from "@/Constant";
import { RootState } from "@/Redux/ReduxStore";
import { deleteBrandState, deleteCategoryState, filterBrandState, filterCategoryState, setColorState, setPrizeRange } from "@/Redux/Slices/ECommerceSlice";
import { useState } from "react";
import { Range, getTrackBackground } from "react-range";
import { useDispatch, useSelector } from "react-redux";
import { Input, Label, ListGroup, ListGroupItem } from "reactstrap";
import StaticSlider from "./StaticSlider";

const Category = () => {
  const { Data, filterValue } = useSelector((store: RootState) => store.EcommerceSlice);
  const [values, setValues] = useState([150, 650]);
  const dispatch = useDispatch();
  const priceHandle = (values: number[]) => {
    setValues(values);
    dispatch(setPrizeRange(values));
  };
  const Category = () => {
    let CategoryData: string[] = [];
    Data.map((element) => {
      if (element.name) {
        if (CategoryData.indexOf(element.name) == -1) {
          CategoryData.push(element.name);
        }
      }
    });
    return CategoryData;
  };
  const Brands = () => {
    let BrandData: string[] = [];
    Data.map((element) => {
      if (element.tags) {
        element.tags.map((item) => {
          if (BrandData.indexOf(item) === -1) {
            BrandData.push(item);
          }
        });
      }
    });
    return BrandData;
  };
  const Colors = () => {
    let ColorData: string[] = [];
    Data.map((element) => {
      if (element.colors) {
        element.colors.map((item) => {
          if (ColorData.indexOf(item) === -1) {
            ColorData.push(item);
          }
        });
      }
    });
    return ColorData;
  };
  const filterCategory = (e: any) => {
    if (e.target.checked) {
      dispatch(filterCategoryState({ CategoryChecked: e.target.value }));
    } else {
      dispatch(deleteCategoryState({ CategoryUnChecked: e.target.value }));
    }
  };
  const filterBrand = (e: any) => {
    if (e.target.checked) {
      dispatch(filterBrandState({ brandChecked: e.target.value }));
    } else {
      dispatch(deleteBrandState({ brandUnChecked: e.target.value }));
    }
  };
  return (
    <>
      <div className="product-filter">
        <h6 className="f-w-600">{CategoryConst}</h6>
        <div className="checkbox-animated mt-0">
          {Category().map((item, i) => {
            return (
              <Label className="d-block" key={i}>
                <Input className="checkbox_animated" defaultChecked={filterValue.category.includes(item) ? true : false} type="checkbox" name="name" value={item} onClick={filterCategory} />
                {item}
              </Label>
            );
          })}
        </div>
      </div>
      <div className="product-filter">
        <h6 className="f-w-600">Brand</h6>
        <div className="checkbox-animated mt-0">
          {Brands().map((item, index) => {
            return (
              <Label className="d-block" key={index}>
                <Input className="checkbox_animated" defaultChecked={filterValue.brand.includes(item) ? true : false} value={item} id={item} onClick={filterBrand} type="checkbox" />
                {item}
              </Label>
            );
          })}
        </div>
      </div>
      <div className="product-filter slider-product">
        <h6 className="f-w-600">Colors</h6>
        <div className="color-selector">
          <ListGroup className=" d-flex flex-row">
            {Colors().map((color, i) => (
              <ListGroupItem
                className={color}
                title={color}
                onClick={() => {
                  dispatch(setColorState(color));
                }}
              ></ListGroupItem>
            ))}
          </ListGroup>
        </div>
      </div>
      <div className="product-filter pb-0">
        <h6 className="f-w-600">{Price}</h6>
        <Range
          values={[filterValue.value.min, filterValue.value.max]}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => {
            priceHandle(values);
          }}
          renderTrack={({ props, children }) => (
            <div onMouseDown={props.onMouseDown} onTouchStart={props.onTouchStart} style={{ ...props.style, height: "36px", display: "flex", width: "100%" }}>
              <output style={{ marginTop: "30px" }}>{filterValue.value.min}</output>
              <div ref={props.ref} style={{ height: "5px", width: "100%", borderRadius: "4px", background: getTrackBackground({ values, colors: ["#ccc", "#6362e7", "#ccc"], min: MIN, max: MAX }), alignSelf: "center" }}>
                {children}
              </div>
              <output style={{ marginTop: "30px" }}>{filterValue.value.max}</output>
            </div>
          )}
          renderThumb={({ props }) => <div {...props} style={{ ...props.style, height: "16px", width: "16px", borderRadius: "60px", backgroundColor: "#6362e7", display: "flex", justifyContent: "center", alignItems: "center", boxShadow: "0px 2px 6px #AAA" }}></div>}
        />
      </div>
      <StaticSlider/>
    </>
  );
};

export default Category;
