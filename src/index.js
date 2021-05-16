import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { render } from "@testing-library/react";
import { BrowserRouter as Router } from 'react-router-dom'

render(
    <Router>
        <App />
    </Router>
    , document.querySelector('#root')
)
