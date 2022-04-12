import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home";
import reportWebVitals from "./reportWebVitals";
import About from "./Pages/About";
import NoMatchPage from "./Pages/NoMatchPage";
import ProjectPage from "./Pages/ProjectPage";

ReactDOM.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="projects" element={<Home scrollToProjects={true}/>} />
                <Route path="projects/:projectId" element={<ProjectPage />} />
                <Route path="*" element={<NoMatchPage />} />
                <Route path="about" element={<About />} />

            </Routes>
        </BrowserRouter>
    </React.StrictMode>,
    document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
