import { Active } from "@/Constant";
import { Input } from "reactstrap";

const PeopleStatus = () => {
  return (
    <>
      <div className="people-list">
        <div className="search">
          <form className="theme-form">
            <div className="mb-3">
              <Input type="text" placeholder="Write Status..." />
              <i className="fa fa-pencil" />
            </div>
          </form>
        </div>
      </div>
      <div className="status">
        <p className="font-dark">{Active}</p>
        <hr />
        <p>
          Established fact that a reader will be distracted &nbsp; <i className="icofont icofont-emo-heart-eyes font-danger f-20" /> <i className="icofont icofont-emo-heart-eyes font-danger f-20 m-l-5" />
        </p>
        <hr />
        <p>
          Dolore magna aliqu &nbsp;
          <i className="icofont icofont-emo-rolling-eyes font-success f-20" />
        </p>
      </div>
    </>
  );
};

export default PeopleStatus;
