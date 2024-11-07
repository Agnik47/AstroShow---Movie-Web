import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store/store.jsx";
import Loader from "./Loader/Loader.jsx";
import SideLoader from "./Loader/SideLoader.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <BrowserRouter>
      {/* <Loader/> */}
      {/* <P_DeatilsLoader />  */}
      {/* <SideLoader/> */}
      <App />
    </BrowserRouter>
  </Provider>
);
