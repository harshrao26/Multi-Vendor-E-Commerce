import React, { useEffect } from "react";
import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoute";
import { getRoutes } from "./router/routes";

const App = () => {
  const [allRoute, setallRoute] = useState([...publicRoutes]);
  console.log(allRoute);
  useEffect(() => {
   const routes = getRoutes();
   console.log(routes);
    setallRoute([...publicRoutes, routes]);
  }
  , []);
  return (
    <div className="tracking-tighter">
      <Router allRoutes={allRoute} />
    </div>
  );
};

export default App;
