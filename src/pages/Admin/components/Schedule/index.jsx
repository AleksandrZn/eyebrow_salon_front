import React, { Fragment, useMemo } from "react";
import axios from "axios";
import moment from "moment";
import {
  Calendar,
  Views,
  DateLocalizer,
  momentLocalizer,
} from "react-big-calendar";
import events from "./events";
import * as dates from "../../../../utils/dates";
import "react-big-calendar/lib/css/react-big-calendar.css";
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";

const mLocalizer = momentLocalizer(moment);

const ColoredDateCellWrapper = ({ children }) =>
  React.cloneElement(React.Children.only(children), {
    style: {
      backgroundColor: "lightblue",
    },
  });

export default function Schedule({
  localizer = mLocalizer,
  showDemoLink = true,
  ...props
}) {
  const { components, defaultDate, max, views, scrollToTime } = useMemo(
    () => ({
      components: {
        timeSlotWrapper: ColoredDateCellWrapper,
      },
      defaultDate: new Date(2022, 3, 1),
      scrollToTime: new Date(1970, 1, 1, 6),
      max: dates.add(dates.endOf(new Date(2015, 17, 1), "day"), -1, "hours"),
      views: Object.keys(Views).map((k) => Views[k]),
    }),
    []
  );

  const handle = () => {
    const apiUrl = "http://localhost:3000/";
    axios.get(apiUrl).then((resp) => {
      const allPersons = resp.data;
      window.open(allPersons, "_blank", "noopener,noreferrer");
    });
  };

  return (
    <Fragment>
      <div onClick={() => handle()}>dddddddd</div>
      <Calendar
        components={components}
        defaultDate={defaultDate}
        events={events}
        localizer={localizer}
        max={max}
        showMultiDayTimes
        step={60}
        views={views}
        onSelectEvent={() => console.log("Event")}
        onSelectSlot={() => console.log("Slot")}
        selectable
        scrollToTime={scrollToTime}
      />
    </Fragment>
  );
}
