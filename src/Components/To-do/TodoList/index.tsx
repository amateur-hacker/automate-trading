import { RootState } from "@/Redux/ReduxStore";
import { TodoCheckBoxType } from "@/Type/Todo";
import { Check, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const TodoList = () => {
  const { allTodos } = useSelector((state: RootState) => state.TodoReducer);
  const dispatch = useDispatch();
  const handleRemoveTodo = (todoId: number, todo: string) => {
    dispatch({ type: "removeItems", payload: todoId });
    toast.success(`${todo} deleted`);
  };
  const handleMarkedTodo = (item: TodoCheckBoxType) => {
    if (item.status === "completed") {
      dispatch({
        type: "selectItem",
        payload: { id: item.id, status: "pending", badgeClass: "badge-light-danger" },
      });
      toast.error(item.title + " as Incomplete");
    } else if (item.status === "pending") {
      dispatch({
        type: "selectItem",
        payload: { id: item.id, status: "completed", badgeClass: "badge-light-success" },
      });
      toast.success(item.title + " as Complete");
    }
  };
  return (
    <div className="todo-list-body">
      <ul className="simple-list" id="todo-list">
        {allTodos?.map((todo: TodoCheckBoxType, index: number) => (
          <li className={`task ${todo.status}`} key={index}>
            <div className="task-container d-flex align-items-center justify-content-between">
              <h4 className="task-label">{todo.title}</h4>
              <span className="task-action-btn">
                <span onClick={() => handleRemoveTodo(todo.id, todo.title)} className="action-box large delete-btn">
                  <Trash2 className="icon icon-trash" />
                </span>
                <span className="action-box large complete-btn" onClick={() => handleMarkedTodo(todo)}>
                  <Check className="icon icon-check" />
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default TodoList;
