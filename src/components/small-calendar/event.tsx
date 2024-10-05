import { cn } from "@/utils";

export interface EventProps extends React.HTMLAttributes<HTMLDivElement> {
  timeEnd: string;
  timeStart: string;
  title: string;
  type: number;
}

const Event = ({
  timeEnd,
  timeStart,
  title,
  className,
  type,
  ...props
}: EventProps) => {
  return (
    <div className={cn("mt-5", className)} {...props}>
      <div
        className={cn(
          "rounded border border-transparent border-l-[#0f4c81] border-l-4  p-1",
          {
            "bg-[#ffe4c8]": type === 1,
            "bg-[#f9be81]": type === 2,
          }
        )}
      >
        <div className="flex justify-between">
          <div className="">
            <h2 className="text-[#0f4c81] text-xl font-bold">
              {type === 2 && "Webinar: "}
              {title}
            </h2>
            <p className="text-[#5684ae] text-base font-normal">
              {`${timeStart} - ${timeEnd}`}
            </p>
          </div>
          {type === 1 && (
            <div className="bg-[#5684ae] flex items-center w-12 h-12 rounded-full justify-center flex-shrink-0">
              <svg
                width="40px"
                height="40px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth={0} />
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g id="SVGRepo_iconCarrier">
                  <path
                    d="M16 10L18.5768 8.45392C19.3699 7.97803 19.7665 7.74009 20.0928 7.77051C20.3773 7.79703 20.6369 7.944 20.806 8.17433C21 8.43848 21 8.90095 21 9.8259V14.1741C21 15.099 21 15.5615 20.806 15.8257C20.6369 16.056 20.3773 16.203 20.0928 16.2295C19.7665 16.2599 19.3699 16.022 18.5768 15.5461L16 14M6.2 18H12.8C13.9201 18 14.4802 18 14.908 17.782C15.2843 17.5903 15.5903 17.2843 15.782 16.908C16 16.4802 16 15.9201 16 14.8V9.2C16 8.0799 16 7.51984 15.782 7.09202C15.5903 6.71569 15.2843 6.40973 14.908 6.21799C14.4802 6 13.9201 6 12.8 6H6.2C5.0799 6 4.51984 6 4.09202 6.21799C3.71569 6.40973 3.40973 6.71569 3.21799 7.09202C3 7.51984 3 8.07989 3 9.2V14.8C3 15.9201 3 16.4802 3.21799 16.908C3.40973 17.2843 3.71569 17.5903 4.09202 17.782C4.51984 18 5.07989 18 6.2 18Z"
                    stroke="#fff"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>
            </div>
          )}
        </div>
        {type === 1 && (
          <div className="flex items-center gap-2 mt-4">
            <img
              src="/img/avatar.jpg"
              alt="img"
              className="w-8 h-8 rounded-full object-cover"
            />

            <a
              href="#"
              className="text-[#5684ae] hover:border-b-[#5684ae] hover:border-b"
            >
              View Client Profile
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Event;
