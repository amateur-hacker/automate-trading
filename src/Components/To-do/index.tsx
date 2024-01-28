import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import CommonCardHeader from "@/CommonComponents/CommonCardHeader";
import axios from "axios";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Card, CardBody, Col, Container, Row } from "reactstrap";
import TodoFooter from "./AddNewTask";
import TodoCheckbox from "./TodoCheckbox";
import TodoList from "./TodoList";

const ToDo = () => {
  const dispatch = useDispatch();
  const fetchTodo = async () => {
    try {
      await axios.get(`${"/api/toDoApi"}`).then((resp) => {
        dispatch({ type: "setAllTodo", payload: resp.data });
      });
    } catch (error) {
      console.log("error", error);
    }
  };
  useEffect(() => {
    fetchTodo();
  }, []);
  return (
    <>
      <CommonBreadcrumb parent="Todo" pageTitle="Todo" />
      <Container fluid>
        <Row>
          <Col xl="12">
            <Card>
              <CommonCardHeader heading="To-Do" />
              <CardBody>
                <div className="todo">
                  <div className="todo-list-wrapper">
                    <div className="todo-list-container">
                      <TodoCheckbox />
                      <TodoList />
                      <TodoFooter />
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ToDo;
