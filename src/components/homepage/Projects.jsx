import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ProjectList from "./ProjectList";

const Projects = () => {
    return (
        <div className="bg-cp-red text-center py-10">
            <h2 className="p-8 leading-relaxed font-mont font-extrabold text-3xl text-white">
                Here Are Some Of My Favorite Projects
            </h2>
            <FontAwesomeIcon
                icon={faArrowDown}
                size="3x"
                className="text-white mb-8"
            />
            <ProjectList />
        </div>
    );
};

export default Projects;
