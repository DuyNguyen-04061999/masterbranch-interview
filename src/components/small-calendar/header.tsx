import NextCalendar from "@/components/next-calendar";
import PrevCalendar from "@/components/prev-calendar";
import TitleCalendar from "@/components/title-calendar";
import { cn } from "@/utils";

export interface HeaderSmallToolbarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  onClickNext: () => void;
  onClickPrev: () => void;
}

const HeaderSmallToolbar = ({
  onClickNext,
  onClickPrev,
  title,
  className,
  ...props
}: HeaderSmallToolbarProps) => {
  return (
    <div
      className={cn(
        "flex justify-center text-center items-center select-none",
        className
      )}
      {...props}
    >
      <PrevCalendar onClickPrev={onClickPrev} />
      <TitleCalendar title={title} className="mx-10 text-[18px] w-[60%]" />
      <NextCalendar onClickNext={onClickNext} />
    </div>
  );
};

export default HeaderSmallToolbar;
