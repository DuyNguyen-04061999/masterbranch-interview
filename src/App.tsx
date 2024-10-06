import "./index.scss";
import { useRoutes } from "react-router-dom";
import { routes } from "@/routes";
import { Suspense } from "react";
import { Helmet } from "react-helmet";
function App() {
  const element = useRoutes(routes);
  return (
    <Suspense fallback={<>...Loading</>}>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Calendar</title>
      </Helmet>
      {element}
    </Suspense>
  );
}

export default App;
