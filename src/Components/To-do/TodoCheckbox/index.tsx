import { RootState } from "@/Redux/ReduxStore";
import { TodoCheckBoxType } from "@/Type/Todo";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const TodoCheckbox = () => {
  const [markAll, setMarkAll] = useState(true);
  const { allTodos } = useSelector((state: RootState) => state.TodoReducer);
  const dispatch = useDispatch();
  const markAllStatus = () => {
    setMarkAll(!markAll);
    if (markAll === true) {
      toast.error("All Task In-Completed !");
    } else {
      toast.success("All Task Completed !");
    }

    const updateStatus = allTodos.reduce((cartAcc: TodoCheckBoxType[], item: TodoCheckBoxType) => {
      if (markAll === false) {
        cartAcc.push({ ...item, status: "completed" });
      } else {
        cartAcc.push({ ...item, status: "pending" });
      }
      return cartAcc;
    }, []);

    dispatch({ type: "setAllTodo", payload: updateStatus });
  };
  return (
    <div className="mark-all-tasks">
      <div className="mark-all-tasks-container">
        <span className={`mark-all-btn ${markAll ? "move-up" : ""} `} id="mark-all-finished" role="button" onClick={markAllStatus}>
          <span className="btn-label">{"Mark all as finished"}</span>
          <span className="action-box completed">
            <i className="icon">
              <i className="icon-check"></i>
            </i>
          </span>
        </span>
        <span className={`mark-all-btn ${markAll ? "" : "move-down"} `} id="mark-all-incomplete" role="button" onClick={markAllStatus}>
          <span className="btn-label">{"Mark all as Incomplete"}</span>
          <span className="action-box">
            <i className="icon">
              <i className="icon-check"></i>
            </i>
          </span>
        </span>
      </div>
    </div>
  );
};
export default TodoCheckbox;
