//pages
import { useRoutes } from "react-router-dom";

//routes
import { routes } from "./routes";

function App() {
  const Routers = useRoutes(routes)
  return (
    <>
      {Routers}
    </>
  );
}

export default App;
