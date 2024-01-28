//@ts-nocheck
import { SidebarMenu } from "@/Data/Sidebar";
import { useAppSelector } from "@/Redux/Hooks";
import { getLinkItemsArray } from "@/Redux/Slices/SidebarSlice";
import { SearchBarArrayType } from "@/Type/Header";
import { ItemsInterface } from "@/Type/Sidebar";
import { SearchIconss } from "@/svgIcons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Search } from "react-feather";
import { useDispatch } from "react-redux";
import { Col, Input, InputGroup, InputGroupText } from "reactstrap";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const {i18LangStatus}=useAppSelector(state=>state.langSlice)
  const [arr, setArr] = useState<SearchBarArrayType[]>([]);
  const [searchedWord, setSearchedWord] = useState("");
  const [searchedArray, setSearchedArray] = useState<SearchBarArrayType[]>([]);
  const router = useRouter();

  const handleClick = async (path: string) => {
    router.push(`/${i18LangStatus}/${path}`);
    setSearchedWord("");
  };
  useEffect(() => {
    let num = 0;
    const tempt: SearchBarArrayType[] = [];
    const getAllLink = (item: ItemsInterface, icon: JSX.Element | undefined) => {
      if (item.items) {
        item.items.map((ele) => {
          getAllLink(ele, icon);
        });
      } else {
        num = num + 1;
        tempt.push({ name: item.title, pathName: item.path, icon: icon, bookmarked: false, id: num });
      }
    };
    SidebarMenu.map((item, index) => {
      getAllLink(item.items ? item.items[0] : item, item.items ?item.items[0].icon : item.icon);
    });
    setArr(tempt);
    dispatch(getLinkItemsArray(tempt));
  }, []);

  const searchItems = (e: string) => {
    let copy = [...arr];
    let result = copy.filter((item) => item.name.toLowerCase().includes(e.toLowerCase()));
    setSearchedArray(result);
  };
const [state,setState] =useState(false)
  return (
    <Col className="left-side-header ps-0 d-md-block dash-10 ">
      <div className="w-100 searchbar">
        <div className="resp-serch-box d-md-none resp-serch-input " onClick={()=>setState(!state)}>
          <Search />
        </div>
        <InputGroup className={`search-form ${state?'open':''} `}>
          <InputGroupText>
            <SearchIconss />
          </InputGroupText>
          <Input
            type="text"
            value={searchedWord}
            placeholder="Search here.."
            aria-label="search"
            aria-describedby="basic-addon1"
            onChange={(e) => {
              setSearchedWord(e.target.value);
              searchItems(e.target.value);
            }}
          />
          <div className={`Typeahead-menu custom-scrollbar ${searchedWord && "is-open"}`} id="search-outer">
            {searchedArray?.map((item, i) => (
              <div key={i} className="ProfileCard u-cf">
                <div className="ProfileCard-avatar">{item.icon}</div>
                <div className="ProfileCard-details">
                  <div className="ProfileCard-realName">
                    <div className="realname" style={{ cursor: "pointer" }} onClick={() => handleClick(item.pathName)}>
                      {item.name}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`Typeahead-menu empty-menu ${searchedWord && !searchedArray.length ? "is-open" : ""}`}>
            <div className="tt-dataset tt-dataset-0">
              <div className="EmptyMessage">Opps!! There are no result found.</div>
            </div>
          </div>
        </InputGroup>
      </div>
    </Col>
  );
};
