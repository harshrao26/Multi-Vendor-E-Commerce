import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("./App.jsx"));

import "./index.css";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Suspense
      fallback={
        <div className="flex h-screen w-full bg-gray-00 items-center justify-center">
          <img
          className="  "
            src="https://cdn.dribbble.com/users/645440/screenshots/3162915/shopping-loader.gif"
            alt=""
          />
          .
        </div>
      }
    >
      <App />
    </Suspense>
  </BrowserRouter>
);
