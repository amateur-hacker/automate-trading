import { Href, NoTasksFound, Print } from "@/Constant";
import { AssignedToMeClassProps } from "@/Type/Tasks";
import { Link, MoreHorizontal, Printer, Trash2 } from "react-feather";
import { useDispatch, useSelector } from "react-redux";
import { Card, CardBody, CardHeader, Table } from "reactstrap";
import SweetAlert from "sweetalert2";

const AssignedToMeClass = ({ title }: AssignedToMeClassProps) => {
  const { newTask } = useSelector((state: any) => state.TaskReducer);
  const dispatch = useDispatch();

  const deleteTask = (taskId: number) => {
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
        dispatch({ type: "RemoveTask", payload: taskId });
        SweetAlert.fire("Deleted!", "Your file has been deleted.", "success");
      } else {
        SweetAlert.fire("Your imaginary file is safe!");
      }
    });
  };

  return (
    <Card className="mb-0">
      <CardHeader className="d-flex">
        <h6 className="mb-0 f-w-600">{title}</h6>
        <a href={Href}>
          <Printer className="me-2" />
          {Print}
        </a>
      </CardHeader>
      <CardBody className="p-0">
        <div className="taskadd">
          <div className="table-responsive">
            <Table>
              <tbody>
                {newTask && newTask.length ? (
                  newTask.map((item: any, id: number) => {
                    return (
                      <tr key={id}>
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
                          <a href={Href} onClick={() => deleteTask(id)}>
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
    </Card>
  );
};
export default AssignedToMeClass;
