//react
import { useRoutes } from "react-router-dom";

//routes
import { routes } from "./routes";

//components
import { TopHeader } from "./components/Layout/TopHeader";
import { Header } from "./components/Layout/Header";

import { Footer } from "./components/Layout/Footer";

function App() {
  const Routers = useRoutes(routes);
  return (
    <>
      <TopHeader />
      <Header />
      {Routers}
      <Footer />
    </>
  );
}

export default App;
