import React from "react";
import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoute";

const App = () => {
  const [allRoute, setallRoute] = useState([...publicRoutes]);
  console.log(allRoute);
  return (
    <div className="tracking-tighter">
      <Router allRoutes={allRoute} />
    </div>
  );
};

export default App;
