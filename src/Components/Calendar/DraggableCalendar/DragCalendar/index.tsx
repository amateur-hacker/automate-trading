import { DraggableCalendarData } from "@/Data/Calendar";
import { EventClickArg } from "@fullcalendar/core";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import FullCalendar from "@fullcalendar/react";
import { Fragment, useEffect } from "react";
import { Col } from "reactstrap";
import Swal from "sweetalert2/dist/sweetalert2.js";

const DragCalendar = () => {
  const state = DraggableCalendarData;
  useEffect(() => {
    const draggableEl = document.getElementById("external-events") as HTMLElement;
    new Draggable(draggableEl, {
      itemSelector: ".fc-event",
      eventData: function (eventEl) {
        let title = eventEl.getAttribute("title");
        let id = eventEl.getAttribute("id");
        return {
          title: title,
          id: id,
        };
      },
    });
  }, []);
  const eventClick = (eventClick: EventClickArg) => {
    Swal.fire({
      title: eventClick.event.title,
      html: (
        <div className="table-responsive">
          <table className="table">
            <tbody>
              <tr>
                <td>Title</td>
                <td>
                  <strong>` + eventClick.event.title +</strong>
                </td>
              </tr>
              <tr>
                <td>Start Time</td>
                <td>
                  <strong> ` + eventClick.event.start + `</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ),
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#3085d6",
      confirmButtonText: "Remove Event",
      cancelButtonText: "Close",
    }).then((result) => {
      if (result.value) {
        eventClick.event.remove();
        Swal.fire("Deleted!", "Your Event has been deleted.", "success");
      }
    });
  };
  return (
    <Fragment>
      <Col xl="3" md="4">
        <div id="external-events">
          <p className="align-center">
            <strong> {"Events"}</strong>
          </p>
          {state.events.map((event) => (
            <div className="fc-event" title={event.title} id={event.id} key={event.id}>
              {event.title}
            </div>
          ))}
        </div>
      </Col>
      <Col xl="9" md="8">
        <div className="demo-app-calendar" id="mycalendartest">
          <FullCalendar eventClick={eventClick} rerenderDelay={10} eventDurationEditable={false} editable={true} droppable={true} plugins={[dayGridPlugin, interactionPlugin]} events={state.calendarEvents} />
        </div>
      </Col>
    </Fragment>
  );
};
export default DragCalendar;
