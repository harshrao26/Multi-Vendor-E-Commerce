import { lazy, StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
const App = lazy(() => import("./App.jsx"));
import { Provider } from "react-redux";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import store from "./store/index.js";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
  <Provider store={store}>

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
      <Toaster 
     toastOptions={
      {
        duration: 3000,
        position: "top-right",
        style: {
          background: "#333",
          color: "#fff",
        },
        success: {
          duration: 3000,
          theme: {
            primary: "green",
            secondary: "black",
          },
        },
        error: {
          duration: 3000,
          theme: {
            primary: "red",
            secondary: "black",
          },
        },
      }
     }
      
      />
    </Suspense>
  </Provider>

  </BrowserRouter>
);
