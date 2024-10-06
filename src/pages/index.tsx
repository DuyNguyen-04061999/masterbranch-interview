import BigCalendar from "@/components/big-calendar";
import SmallCalendar from "@/components/small-calendar";
import "./index.scss";
import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
import { Events } from "@/type";
const Home = () => {
  const bigCalendarRef = useRef<FullCalendar>(null);
  const smallCalendarRef = useRef<FullCalendar>(null);
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [events, setEvents] = useState<Events>([]);
  const handleViewChange = (selectedView: string) => {
    const bigCalendarApi = bigCalendarRef.current?.getApi();
    const smallCalendarApi = smallCalendarRef.current?.getApi();
    if (bigCalendarApi && smallCalendarApi) {
      bigCalendarApi.changeView(selectedView); // Thay đổi chế độ xem
    }
  };

  const onClickTodayBigCalendar = () => {
    bigCalendarRef.current?.getApi().today();
    smallCalendarRef.current?.getApi().today();
  };

  const onClickPrev = () => {
    bigCalendarRef.current?.getApi().prev();
    smallCalendarRef.current?.getApi().prev();
  };

  const onClickNext = () => {
    bigCalendarRef.current?.getApi().next();
    smallCalendarRef.current?.getApi().next();
  };
  const onUpdateTitle = (title: string) => setTitle(title);

  const onUpdateDateClick = (date: string) => setEventDate(date);
  const onUpdateEvents = (events: Events) => setEvents(events);
  return (
    <div className="max-w-[1200px] px-[15px] mx-auto flex gap-5 h-[200vh] pt-5">
      <SmallCalendar
        ref={smallCalendarRef}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        title={title}
        onUpdateDateClick={onUpdateDateClick}
        eventDate={eventDate}
        events={events}
        onUpdateEvents={onUpdateEvents}
      />
      <BigCalendar
        handleViewChange={handleViewChange}
        ref={bigCalendarRef}
        onClickToday={onClickTodayBigCalendar}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        onUpdateTitle={onUpdateTitle}
        title={title}
        onUpdateDateClick={onUpdateDateClick}
        eventDate={eventDate}
        onUpdateEvents={onUpdateEvents}
      />
    </div>
  );
};

export default Home;
