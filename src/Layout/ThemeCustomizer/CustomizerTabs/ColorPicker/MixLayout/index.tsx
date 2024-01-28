import { MixLayout } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { RootState } from "@/Redux/ReduxStore";
import { setBackground } from "@/Redux/Slices/HeaderSlice";
import { useDispatch, useSelector } from "react-redux";
import { ListGroup, ListGroupItem } from "reactstrap";
import CommonUL from "../../../Common/CommonUl";
import ConfigDB from "@/Config/ThemeConfig";

const MixLayoutComponent = () => {
  const backgroundColor = useSelector((store: RootState) => store.headerSlice.backgroundChange);
  const dispatch = useDispatch();
  const handleConfig=(color:string)=>{
    ConfigDB.data.color.mix_background_layout=color
  }
  const { backgroundChange } = useAppSelector((store) => store.headerSlice);
  const darkBackground = () => {
    document.body.classList.remove("dark-sidebar");
    if (!backgroundChange) {
      document.body.classList.add("dark-only");
      document.body.classList.remove("light");
      dispatch(setBackground(true));
      handleConfig("dark-only")
    }}
  
  const lightBackground = () => {
    document.body.classList.remove("dark-sidebar");
    if (backgroundChange) {
      document.body.classList.add("light");
      document.body.classList.remove("dark-only");
      dispatch(setBackground(false));
      handleConfig("light")
    }
  };
  const darkSidebar = () => {
    document.body.classList.add("dark-sidebar");
    document.body.classList.remove("dark-only");
    document.body.classList.remove("light");
    handleConfig("dark-sidebar")
  };


  return (
    <>
      <h6 className="">{MixLayout}</h6>
      <ListGroup className="layout-grid customizer-mix">
        <ListGroupItem className="color-layout active" dataattr="light-only" onClick={lightBackground}>
          <div className="header bg-light">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup>
              <ListGroupItem className="bg-light sidebar"></ListGroupItem>
              <ListGroupItem className="bg-light body"> </ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>

        <ListGroupItem className="color-layout" dataattr="dark-sidebar" onClick={darkSidebar}>
          <div className="header bg-light">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup>
              <ListGroupItem className="bg-dark sidebar"></ListGroupItem>
              <ListGroupItem className="bg-light body"> </ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>

        <ListGroupItem className="color-layout" dataattr="dark-only" onClick={darkBackground}>
          <div className="header bg-dark">
            <CommonUL />
          </div>
          <div className="body">
            <ListGroup>
              <ListGroupItem className="bg-dark sidebar"></ListGroupItem>
              <ListGroupItem className="bg-dark body"> </ListGroupItem>
            </ListGroup>
          </div>
        </ListGroupItem>
      </ListGroup>
    </>
  );
};

export default MixLayoutComponent;
