import { cn } from "@/utils";

export interface PrevCalendarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClickPrev: () => void;
}

const PrevCalendar = ({
  onClickPrev,
  className,
  ...props
}: PrevCalendarProps) => {
  return (
    <div
      className={cn("text-[#5684ae] cursor-pointer", className)}
      onClick={onClickPrev}
      {...props}
    >
      <svg
        fill="currentColor"
        height="16px"
        width="16px"
        version="1.1"
        id="XMLID_54_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <g id="previous">
          <g>
            <polygon points="17.2,23.7 5.4,12 17.2,0.3 18.5,1.7 8.4,12 18.5,22.3 		" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PrevCalendar;
