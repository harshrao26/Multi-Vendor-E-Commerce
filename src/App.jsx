import React, { useEffect } from "react";
import { useState } from "react";
import Router from "./router/Router";
import publicRoutes from "./router/routes/publicRoute";
import { getRoutes } from "./router/routes";
import { useDispatch, useSelector } from "react-redux";
import { getUserInfo } from "./store/reducers/authReducer";

const App = () => {

  const dispatch = useDispatch()
  const {token} = useSelector(state => state.auth)

  const [allRoute, setallRoute] = useState([...publicRoutes]);
  console.log(allRoute);
  useEffect(() => {
   const routes = getRoutes();
   console.log(routes);
    setallRoute([...publicRoutes, routes]);
  }
  , []);

  useEffect(() => {
    if (token) {
      dispatch(getUserInfo());
    }
  }, [token]);

  return (
    <div className="tracking-tighter">
      <Router allRoutes={allRoute} />
    </div>
  );
};

export default App;
