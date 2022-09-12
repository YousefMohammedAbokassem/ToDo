// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// const container = document.getElementById("root");
// const root = ReactDOM.createRoot(container);

// function render() {
//   root.render(<App />);
// }

// render();

import React, { Fragment } from "react";
import ReactDOM from "react-dom/client";
import WithComp from "./withCom";
import WithoutComp from "./withoutCom";
import "./App.css";
// import Route from "./Route";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

function render() {
  root.render(
    <BrowserRouter>
      <div>
        {/* <WithComp />
      <WithoutComp /> */}
        <Routes>
          <Route path="/todo/" element={<WithComp />} />
          <Route path="/Hooks" element={<WithoutComp />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
render();
