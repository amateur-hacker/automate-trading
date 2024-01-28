import CommonBreadcrumb from "@/CommonComponents/CommonBreadcrumb";
import { useEffect, useState } from "react";
import { Button, Card, CardBody, CardHeader, Col, Container, Input, Row } from "reactstrap";
import { AddNewNote, Href, StickyNote } from "../../../Constant";
import { StickyDataProps } from "@/Type/BonusUi";

const StickyContain = () => {
  const [notes, setNotes] = useState<StickyDataProps[]>([]);

  useEffect(() => {
    getApi();
  }, []);

  const getApi = async () => {
    const res = await fetch("/api/stickyApi");
    const finalResult = await res.json();
    setNotes(finalResult);
  };

  const addStickyNote = () => {
    setNotes([...notes, { id: notes.length + 1, isDeleted: false }]);
  };

  const deleteNote = (i: number) => {
    const copyList = [...notes];
    copyList.splice(i, 1);
    setNotes(copyList);
  };

  return (
    <>
      <CommonBreadcrumb parent="Bonus Ui" pageTitle="Sticky" />
      <Container fluid>
        <Row className="sticky-header-main">
          <Col sm="12">
            <Card>
              <CardHeader className="pb-0">
                <h5>
                  {StickyNote}
                  <Button color="primary" onClick={addStickyNote} className=" pull-right m-l-10">
                    {AddNewNote}
                  </Button>
                </h5>
              </CardHeader>
              <CardBody>
                <div className="sticky-note" id="board">
                  {notes.map((data, i) => (
                    <div className={`note ui-draggable ui-draggable-handle ${data.isDeleted && "d-none"}`} key={data.id}>
                      <a href={Href} onClick={() => deleteNote(i)} className="button remove">
                        {"X"}
                      </a>
                      <div className="note_cnt">
                        <Input className="title" placeholder="Enter note title" type="textarea" style={{ height: "64px" }}></Input>
                        <Input className="cnt" placeholder="Enter note description here" type="textarea" style={{ height: "200px" }}></Input>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default StickyContain;
