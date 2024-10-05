import BigCalendar from "@/components/big-calendar";
import SmallCalendar from "@/components/small-calendar";
import "./index.scss";
import { useRef, useState } from "react";
import FullCalendar from "@fullcalendar/react";
const Home = () => {
  const bigCalendarRef = useRef<FullCalendar>(null);
  const smallCalendarRef = useRef<FullCalendar>(null);
  const [title, setTitle] = useState("");
  const [eventDate, setEventDate] = useState("");

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

  return (
    <div className="max-w-[1200px] px-[15px] mx-auto flex gap-5 h-[200vh] pt-5">
      <SmallCalendar
        ref={smallCalendarRef}
        onClickNext={onClickNext}
        onClickPrev={onClickPrev}
        title={title}
        onUpdateDateClick={onUpdateDateClick}
        eventDate={eventDate}
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
      />
    </div>
  );
};

export default Home;
