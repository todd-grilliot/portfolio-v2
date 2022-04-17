import React from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";
import { projectObj } from "../libraries/projectObj";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
    useEffect(() => window.scrollTo(0, 0));

    return (
        <div>
            <Header isGrey={true} />
            <div className="bg-off-white bg-cover bg-center pb-12 lg:p-32 lg:bg-project">
                <div className="lg:w-3/5">
                    <h1 className="text-center leading-tight font-mont font-extrabold text-6xl lg:text-7xl text-cp-black lg:my-8 lg:text-left">
                        {project.name}
                    </h1>
                    <hr className="my-8 w-24 border-4 border-cp-grey mx-auto lg:mx-0" />
                    <p className="my-8 font-mont font-medium  text-cp-black text-center mx-8 lg:mx-0 lg:text-left">
                        {project.description.map((value, index) => (
                            <span key={index}>
                                {value}
                                <br></br>
                            </span>
                        ))}
                    </p>
                    <a target="blank" href={project.link}>
                        {project.video ? (
                            <div className="relative overflow-hidden w-5/6 pt-9/16 mx-auto my-8 lg:mx-0">
                                <iframe
                                    className="w-full h-full absolute top-0 left-0 bottom-0 right-0 "
                                    src={project.video}
                                    title="YouTube video player"
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        ) : (
                            <img
                                href={project.link}
                                src={project.img}
                                alt="no image"
                                className="w-5/6 lg:w-2/3 mx-auto my-8 lg:mx-0"
                            />
                        )}
                    </a>
                    <div className="lg:flex block text-center">
                        <a
                            target="blank"
                            href={project.link}
                            className="my-8 lg:my-auto flex justify-center"
                        >
                            <button className="py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white rounded">
                                SEE THE PROJECT
                            </button>
                        </a>
                        <a
                            target="blank"
                            href={project.github}
                            className="text-center lg:my-0 lg:mx-14"
                        >
                            <FontAwesomeIcon
                                icon="fa-brands fa-github"
                                className="text-6xl text-cp-black lg:mx-6"
                            />
                            <h3 className="font-mont text-lg font-medium my-auto">
                                Github Link
                            </h3>
                        </a>
                    </div>
                </div>
            </div>
            <div className="bg-cp-black py-14 lg:p-32">
                <h2 className="font-play font-bold text-off-white text-6xl tracking-widest text-center lg:text-left">
                    Features
                </h2>
                <hr className="my-8 w-24 border-4 border-cp-grey mx-auto lg:mx-0" />
                <div className="lg:flex">
                    <div>
                        {project.features.map((value, index) => (
                            <div
                                key={index}
                                className="flex justify-center lg:justify-start"
                            >
                                <FontAwesomeIcon
                                    icon={value.icon}
                                    className="text-cp-grey text-3xl my-4 mr-4 lg:text-4xl"
                                />
                                <h2 className="text-off-white tracking-wide text-lg lg:text-xl font-mont my-auto">
                                    {value.text}
                                </h2>
                            </div>
                        ))}
                    </div>
                    <div className="lg:grid grid-cols-3 lg:w-1/2 lg:ml-auto">
                        {project.tech.map((value, index) => (
                            <div key={index} className="my-8">
                                <img
                                    src={value.img}
                                    alt="no image"
                                    className="w-28 mx-auto"
                                />
                                <h2 className="font-mont text-3xl text-off-white text-center">
                                    {value.name}
                                </h2>
                            </div>
                        ))}
                    </div>
                </div>
                <a
                    target="blank"
                    href={project.link}
                    className="my-8 lg:my-auto lg:block flex justify-center"
                >
                    <button className="mt-8 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-off-white hover:bg-cp-grey text-cp-black rounded">
                        SEE THE PROJECT
                    </button>
                </a>
            </div>
            <Footer />
        </div>
    );
};
ProjectPage.propTypes = {
    location: PropTypes.any,
    match: PropTypes.any,
    history: PropTypes.any,
};
export default ProjectPage;
