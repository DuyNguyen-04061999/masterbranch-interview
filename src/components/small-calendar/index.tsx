import { cn, formatTime } from "@/utils";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import { forwardRef } from "react";
import HeaderSmallToolbar from "@/components/small-calendar/header";
import "./index.scss";
import eventsData from "@/events.json";
import { Button } from "@mui/material";
import Event from "@/components/small-calendar/event";
import moment from "moment";
import { Events } from "@/type";

interface SmallCalendarProps {
  className?: JSX.IntrinsicElements["div"]["className"];
  title: string;
  onClickNext: () => void;
  onClickPrev: () => void;
  eventDate: string;
  onUpdateDateClick: (date: string) => void;
  events: Events;
  onUpdateEvents: (events: Events) => void;
}

const SmallCalendar = forwardRef<FullCalendar, SmallCalendarProps>(
  (
    {
      className,
      onClickNext,
      onClickPrev,
      title,
      eventDate,
      onUpdateDateClick,
      events,
      onUpdateEvents,
    },
    ref
  ) => {
    return (
      <div className="w-full border h-max">
        <div className={cn("flex-1 small-calendar border-b-2", className)}>
          <HeaderSmallToolbar
            onClickNext={onClickNext}
            onClickPrev={onClickPrev}
            title={title}
            className="max-w-[80%] mx-auto"
          />
          <FullCalendar
            ref={ref}
            contentHeight={500}
            timeZone="UTC"
            plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
            initialView={"dayGridMonth"}
            headerToolbar={false}
            dayCellClassNames={(date) => {
              return moment.utc(date.date).format("YYYY-MM-DD") === eventDate
                ? "fc-click"
                : "";
            }}
            dateClick={(info) => {
              onUpdateDateClick(info.dateStr);
              const listEvents = eventsData.find(
                (item) => item.eventDate === info.dateStr
              );
              onUpdateEvents(listEvents?.events || []);
            }}
          />
        </div>

        <div className="px-1">
          <div className="flex items-baseline justify-between mt-5">
            <h2 className="font-bold text-[#0f4c81] text-2xl">
              Upcoming events
            </h2>
            <Button
              sx={{
                color: "#fff",
                background: "#0f4c81",
                borderRadius: "20px",
                fontSize: "14px",
              }}
            >
              View All
            </Button>
          </div>
          {eventDate && (
            <p className="text-gray-400 text-xl">
              {moment().utc().format("YYYY-MM-DD") === eventDate
                ? `Today, ${moment.utc(new Date(eventDate)).format("D MMMM")}`
                : moment.utc(new Date(eventDate)).format("LL")}
            </p>
          )}
          {events.length > 0 ? (
            events.map((item, id) => (
              <Event
                key={id}
                {...item}
                timeEnd={formatTime(item.timeEnd)}
                timeStart={formatTime(item.timeStart)}
                title={item.eventTitle}
              />
            ))
          ) : (
            <p className="mt-4">No events are presented</p>
          )}
        </div>
      </div>
    );
  }
);

export default SmallCalendar;
