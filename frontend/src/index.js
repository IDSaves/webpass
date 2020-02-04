import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router } from "react-router-dom";
import { ToastProvider } from "react-toast-notifications";

ReactDOM.render(<Router><ToastProvider><App /></ToastProvider></Router>, document.getElementById("root"));

serviceWorker.unregister();
