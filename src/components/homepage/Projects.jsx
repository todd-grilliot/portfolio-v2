import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";
import ProjectList from "./ProjectList";

const Projects = () => {
    return (
        <>
            <div className="bg-cp-red text-center py-10 lg:hidden">
                <h2 className="p-8 leading-relaxed font-mont font-extrabold text-3xl text-white">
                    Here Are Some Of My Favorite Projects
                </h2>
                <FontAwesomeIcon
                    icon={faArrowDown}
                    size="3x"
                    className="text-white mb-8"
                />
                <ProjectList isOnDesktop={false} />
            </div>

            <div className="p-32 bg-cp-red text-left py-16 hidden lg:block">
                <h2 className="py-8 w-1/2 leading-relaxed font-mont font-extrabold text-6xl text-white">
                    Here Are Some Of My Favorite Projects:
                </h2>
                <ProjectList isOnDesktop={true} />
            </div>
        </>
    );
};

export default Projects;
