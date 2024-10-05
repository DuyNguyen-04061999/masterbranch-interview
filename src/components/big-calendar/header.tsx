import NextCalendar from "@/components/next-calendar";
import PrevCalendar from "@/components/prev-calendar";
import TitleCalendar from "@/components/title-calendar";
import { cn } from "@/utils";
import { Autocomplete, TextField, Button } from "@mui/material";

export interface HeaderToolbarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  handleViewChange: (selectedView: string) => void;
  onClickToday: () => void;
  onClickNext: () => void;
  onClickPrev: () => void;
  title: string;
}

const HeaderBigToolbar = ({
  handleViewChange,
  className,
  onClickToday,
  onClickNext,
  onClickPrev,
  title,
  ...props
}: HeaderToolbarProps) => {
  const options = [
    { label: "Month", value: "dayGridMonth" },
    { label: "Week", value: "timeGridWeek" },
    { label: "Day", value: "timeGridDay" },
  ];
  return (
    <div
      className={cn("flex items-center justify-between", className)}
      {...props}
    >
      <div className="flex items-center">
        <Button
          onClick={onClickToday}
          sx={{
            width: "64px",
            height: "42px",
            textAlign: "center",
            padding: "6.4px 10.4px",
            borderRadius: "12px",
            background: "#fff",
            color: "#5684ae",
            border: "1px solid #5684ae",
          }}
        >
          Today
        </Button>
        <PrevCalendar onClickPrev={onClickPrev} className="ml-[30px]" />
        <NextCalendar onClickNext={onClickNext} className="ml-10" />
        <TitleCalendar title={title} className="ml-10" />
      </div>

      <Autocomplete
        className="w-[110px]"
        options={options}
        defaultValue={{ label: "Month", value: "dayGridMonth" }}
        renderInput={(params) => {
          return <TextField {...params} className="text-white select-none" />;
        }}
        popupIcon={
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7071 14.7071C12.3166 15.0976 11.6834 15.0976 11.2929 14.7071L6.29289 9.70711C5.90237 9.31658 5.90237 8.68342 6.29289 8.29289C6.68342 7.90237 7.31658 7.90237 7.70711 8.29289L12 12.5858L16.2929 8.29289C16.6834 7.90237 17.3166 7.90237 17.7071 8.29289C18.0976 8.68342 18.0976 9.31658 17.7071 9.70711L12.7071 14.7071Z"
              fill="#fff"
            />
          </svg>
        }
        disableClearable
        onChange={(_, value) =>
          handleViewChange(value?.value || "dayGridMonth")
        }
        sx={{
          userSelect: "none",
          borderRadius: "10px",
          "& .MuiOutlinedInput-root": {
            borderRadius: "20px",
            background: "#0f4c81",
            height: "36px",
            "& .MuiInputBase-input": {
              color: "#fff",
              userSelect: "none",
            },
          },
          "& .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
            border: "1px solid #5684ae",
          },
        }}
      />
    </div>
  );
};

export default HeaderBigToolbar;
