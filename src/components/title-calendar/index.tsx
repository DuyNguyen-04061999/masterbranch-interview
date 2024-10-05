import { cn } from "@/utils";

export interface TitleCalendarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
}
const TitleCalendar = ({ title, className, ...props }: TitleCalendarProps) => {
  return (
    <div
      className={cn(
        "text-[#0f4c81] font-bold leading-[42px] text-[28px]",
        className
      )}
      {...props}
    >
      {title || ""}
    </div>
  );
};

export default TitleCalendar;
