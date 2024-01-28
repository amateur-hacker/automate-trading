import { AddNewTask, AddTask, Close } from "@/Constant";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button } from "reactstrap";

const TodoFooter = () => {
  const [addNewTask, setAddNewTask] = useState(false);
  const [task, setTask] = useState("");
  const dispatch = useDispatch();
  const addNewTaskHandle = () => {
    setAddNewTask(!addNewTask);
  };
  const handleNewTask = () => {
    if (task === "") {
      return;
    } else {
      dispatch({ type: "addNewTodo", payload: task });
      setTask("");
    }
  };
  return (
    <div className="todo-list-footer">
      <div className="add-task-btn-wrapper">
        <span className={`add-task-btn ${addNewTask ? "hide" : ""}`}>
          <Button color="primary" onClick={addNewTaskHandle}>
            <i className="icon-plus" /> {AddNewTask}
          </Button>
        </span>
      </div>
      <div className={`new-task-wrapper ${addNewTask ? "visible" : ""} `}>
        <textarea value={task} onChange={(e) => setTask(e.target.value)} placeholder="Enter new task here. . ." />
        <Button color="danger" className=" cancel-btn" onClick={() => setAddNewTask(!addNewTask)}>
          {Close}
        </Button>
        <Button color="success" className="ms-3 add-new-task-btn" onClick={handleNewTask}>
          {AddTask}
        </Button>
      </div>
    </div>
  );
};

export default TodoFooter;
