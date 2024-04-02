import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./redux/Store";
//import { Toaster } from 'react-hot-toast';
import {BrowserRouter} from "react-router-dom";
import { ToastContainer } from "react-toastify";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  
  <BrowserRouter>
  <Provider store={store}>
    <App /> 
  </Provider>
 </BrowserRouter>

   
  
);
