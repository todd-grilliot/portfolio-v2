import React from "react";
import Header from "../components/Header";
import { useLocation } from "react-router-dom";
import { projectObj } from "../libraries/projectObj";
import PropTypes from "prop-types";
// import { Link } from "react-router-dom";

function findInArray(array, index) {
    let target;
    array.forEach((value) => {
        if (value.id == index) target = value;
    });
    return target;
}

const ProjectPage = () => {
    const projectIndex = useLocation().pathname.slice(-1);
    const project = findInArray(projectObj, projectIndex);

    return (
        <div>
            <Header isGrey={true} />
            <div className="bg-off-white bg-cover bg-center lg:p-32 lg:bg-project">
                <h1 className="text-center  leading-tight font-mont font-extrabold text-7xl text-cp-black lg:my-8 lg:text-left lg:w-3/5">
                    {project.name}
                </h1>
                <hr className="my-8 w-24 border-4 border-cp-grey mx-auto lg:mx-0" />
                <p className="my-8 font-mont font-medium  text-cp-black text-center mx-8 lg:mx-0 lg:text-left lg:w-2/5">
                    {project.description}
                </p>
                <a href={project.link} className="flex justify-center lg:block">
                    <button className="my-1 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white rounded">
                        SEE THE PROJECT
                    </button>
                </a>
            </div>
        </div>
    );
};
ProjectPage.propTypes = {
    location: PropTypes.any,
    match: PropTypes.any,
    history: PropTypes.any,
};
export default ProjectPage;
