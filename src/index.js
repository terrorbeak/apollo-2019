import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ApolloClient } from "@apollo/client";
import client from "./apollo";

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById("root")
);
