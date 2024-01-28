import { ChatMembersData } from "@/Data/ChatApp";
import { SearchMembersProps } from "@/Type/ChatApp";
import { ChangeEvent } from "react";
import { Form, FormGroup, Input } from "reactstrap";

const SearchMembers = ({ setMembersData }: SearchMembersProps) => {
  const SearchData = (e: ChangeEvent<HTMLInputElement>) => {
    const copiedData = [...ChatMembersData];
    const newData = copiedData.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    setMembersData(newData);
  };
  return (
    <div className="search">
      <Form className="theme-form">
        <FormGroup>
          <Input
            type="text"
            placeholder="search"
            onChange={(e) => {
              SearchData(e);
            }}
          />
          <i className="fa fa-search"></i>
        </FormGroup>
      </Form>
    </div>
  );
};

export default SearchMembers;
