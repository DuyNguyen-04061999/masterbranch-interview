import "./index.scss";
import { useRoutes } from "react-router-dom";
import { routes } from "@/routes";
import { Suspense } from "react";
function App() {
  const element = useRoutes(routes);

  // const eventList = [
  //   {
  //     eventDate: "2024-10-22",
  //     events: [
  //       {
  //         title: "First session with Alex Stan",
  //         timeStart: "2024-10-22T06:00:00Z",
  //         timeEnd: "2024-10-22T23:30:00Z",
  //         type: 1, //client
  //       },
  //       {
  //         title: "Color Fiesta season 13: PARANORMAL",
  //         timeStart: "2024-10-22T08:00:00Z",
  //         timeEnd: "2024-10-22T08:00:00Z",
  //         type: 2, //webinar
  //       },
  //     ],
  //   },
  //   {
  //     eventDate: "2024-10-04",
  //     events: [
  //       {
  //         title: "MANRIDE UNCHARTED - VIETNAM",
  //         timeStart: "2024-10-04T08:00:00Z",
  //         timeEnd: "2024-10-04T12:00:00Z",
  //         type: 1,
  //       },
  //       {
  //         title: "Family Office: From Theory to Reality",
  //         timeStart: "2024-10-04T6:00:00Z",
  //         timeEnd: "2024-10-04T09:00:00Z",
  //         type: 2,
  //       },
  //     ],
  //   },
  // ];
  return <Suspense fallback={<>Loading</>}>{element}</Suspense>;
}

export default App;
