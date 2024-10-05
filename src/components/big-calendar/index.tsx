import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { EventContentArg } from "@fullcalendar/core/index.js";
import { forwardRef } from "react";
import moment from "moment";
import data from "@/data.json";
import { cn } from "@/utils";
import "./index.scss";
import HeaderBigToolbar from "@/components/big-calendar/header";

interface BigCalendarProps {
  className?: JSX.IntrinsicElements["div"]["className"];
  handleViewChange: (selectedView: string) => void;
  onClickToday: () => void;
  onClickNext: () => void;
  onClickPrev: () => void;
  onUpdateTitle: (title: string) => void;
  title: string;
  onUpdateDateClick: (date: string) => void;
  eventDate: string;
}

const BigCalendar = forwardRef<FullCalendar, BigCalendarProps>(
  (
    {
      className,
      title,
      handleViewChange,
      onClickToday,
      onClickNext,
      onClickPrev,
      onUpdateTitle,
      onUpdateDateClick,
      eventDate,
    },
    ref
  ) => {
    function renderEventContent(eventInfo: EventContentArg) {
      return (
        <div
          className={cn(`border-l-[3px]  rounded p-1 w-full truncate`, {
            "border-l-[#5684ae] bg-[#ffe4c8]":
              eventInfo.event.extendedProps.type === 1, //client
            "border-l-[#0f4c81] bg-[#f9be81]":
              eventInfo.event.extendedProps.type === 2, //webinar
          })}
        >
          <b>{eventInfo.timeText}</b>
          <i>{eventInfo.event.title}</i>
        </div>
      );
    }

    const dayEvents = data.map((item) =>
      moment(new Date(item.start)).format("YYYY-MM-DD")
    );

    return (
      <div
        className={cn(
          "max-w-[67%] w-full mx-auto relative flex-shrink-0 big-calendar",
          className
        )}
      >
        <HeaderBigToolbar
          handleViewChange={handleViewChange}
          onClickToday={onClickToday}
          onClickNext={onClickNext}
          onClickPrev={onClickPrev}
          title={title}
          className="mb-10 select-none"
        />
        <FullCalendar
          timeZone="UTC"
          ref={ref}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          events={
            data
            // "https://fullcalendar.io/api/demo-feeds/events.json?overload-day"
          }
          headerToolbar={false}
          displayEventTime={false}
          dayMaxEvents={2}
          dateClick={(info) => {
            onUpdateDateClick(info.dateStr);
          }}
          datesSet={(arg) => onUpdateTitle(arg.view.title)}
          displayEventEnd={true}
          eventContent={renderEventContent}
          dayCellClassNames={(date) => {
            if (
              dayEvents.includes(
                moment(date.date).format("YYYY-MM-DD").toString()
              )
            ) {
              return cn("!bg-[#c6e1d7]", {
                "fc-click":
                  moment.utc(date.date).format("YYYY-MM-DD") === eventDate,
              });
            }
            return cn({
              "fc-click":
                moment.utc(date.date).format("YYYY-MM-DD") === eventDate,
            });
          }}
        />
      </div>
    );
  }
);

export default BigCalendar;
