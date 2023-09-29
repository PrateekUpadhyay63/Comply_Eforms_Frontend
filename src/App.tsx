import React from "react";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import RoutesWrapper from "./Router";
import store from "./Redux/store";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      {/* <ToastContainer /> */}
      <BrowserRouter>
        <RoutesWrapper />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
