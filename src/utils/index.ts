import moment from "moment";

export * from "./classNames";
export const sendTimeZoneZeroHour = (date: string | Date) => {
  return new Date(
    new Date(
      new Date(date).getTime() - new Date(date).getTimezoneOffset() * 60000
    ).setUTCHours(0, 0, 0, 0)
  ).toISOString();
};
export const sendTimeZone = (date: string | Date) => {
  return new Date(
    new Date(date).getTime() - new Date(date).getTimezoneOffset() * 60000
  ).toISOString();
};

export const formatTime = (date: string | Date) => {
  return moment.utc(new Date(date)).format("hh:mm A");
};
