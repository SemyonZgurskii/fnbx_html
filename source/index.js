import "./style.scss";
import React from "react";
import ReactDOM from "react-dom";
import Main from "./pages/main.jsx";
import {mockData} from "./mock.js";

ReactDOM.render(
    <Main mockData={mockData}/>,
    document.getElementById(`root`)
);
