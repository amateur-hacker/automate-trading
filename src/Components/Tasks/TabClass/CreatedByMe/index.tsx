import { Href, NoTasksFound } from "@/Constant";
import { useAppSelector } from "@/Redux/Hooks";
import { TaskReducerTypes } from "@/Type/Tasks";
import { Link, MoreHorizontal, Trash2 } from "react-feather";
import { useDispatch } from "react-redux";
import { CardBody, Table } from "reactstrap";
import SweetAlert from "sweetalert2";

const CreatedByMe = () => {
  const { allTask } = useAppSelector((state: TaskReducerTypes) => state.TaskReducer);
  const dispatch = useDispatch();
  const deleteTask = (userId: number) => {
    SweetAlert.fire({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Ok",
      cancelButtonText: "cancel",
      reverseButtons: true,
    }).then((result) => {
      if (result.value) {
        dispatch({ type: "RemoveTask", payload: userId });
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <CardBody className="p-0">
      <div className="taskadd">
        <div className="table-responsive table-borderless">
          <Table borderless>
            <thead>
              <tr></tr>
            </thead>
            <tbody>
              {allTask && allTask.length ? (
                allTask.map((item) => {
                  return (
                    <tr key={item.id}>
                      <td>
                        <h6 className="task_title_0">{item.title}</h6>
                        <p className="project_name_0">{item.collection}</p>
                      </td>
                      <td>
                        <p className="task_desc_0">{item.desc}</p>
                      </td>
                      <td>
                        <a className="me-2" href={Href}>
                          <Link />
                        </a>
                        <a href={Href}>
                          <MoreHorizontal />
                        </a>
                      </td>
                      <td>
                        <a href={Href} onClick={() => deleteTask(item.id)}>
                          <Trash2 />
                        </a>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <div className="no-favourite">
                      <span>{NoTasksFound}</span>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </div>
      </div>
    </CardBody>
  );
};

export default CreatedByMe;
