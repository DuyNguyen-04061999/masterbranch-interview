import { cn } from "@/utils";

export interface NextCalendarProps
  extends React.HTMLAttributes<HTMLDivElement> {
  onClickNext: () => void;
}

const NextCalendar = ({
  onClickNext,
  className,
  ...props
}: NextCalendarProps) => {
  return (
    <div
      className={cn("text-[#5684ae] cursor-pointer", className)}
      {...props}
      onClick={onClickNext}
    >
      <svg
        fill="currentColor"
        height="16px"
        width="16px"
        version="1.1"
        id="XMLID_287_"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        viewBox="0 0 24 24"
        xmlSpace="preserve"
      >
        <g id="next">
          <g>
            <polygon points="6.8,23.7 5.4,22.3 15.7,12 5.4,1.7 6.8,0.3 18.5,12 		" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default NextCalendar;
