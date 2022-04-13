import React from "react";
import { projectObj } from "../../libraries/projectObj";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const ProjectList = ({ isOnDesktop }) => {
    // const linkObj = {
    //     pathname: `/projects/${index}`,
    // };
    const mobileList = (
        <div>
            {projectObj.map((value, index) => (
                <div key={index} className="my-12">
                    <hr className="my-6 mx-auto w-5/6 border-1 border-white" />
                    <h2 className="py-4 px-2 leading-tight font-play font-extrabold text-5xl text-white">
                        {value.name}
                    </h2>
                    <hr className="mb-8 mt-2 mx-auto w-20 border-4 border-cp-light-yellow" />
                    <img src={value.img} alt="none" className="w-4/5 mx-auto" />
                    <p className="text-white font-mont mx-6 mt-6 font-medium">
                        {value.summary}
                    </p>
                    <Link to={`/projects/${index}`}>
                        <button className="mx-auto my-8 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white  rounded">
                            LEARN MORE
                        </button>
                    </Link>
                </div>
            ))}
        </div>
    );
    const desktopList = (
        <>
            {projectObj.map((value, index) => (
                <div key={index} className="my-24 flex justify-center">
                    {index % 2 === 0 ? (
                        <>
                            <div className="my-auto w-1/2 pr-16">
                                <img src={value.img} alt="none" />
                            </div>
                            <div className="w-1/2 pl-12 my-auto">
                                <h2 className="py-4 leading-tight font-play font-extrabold text-6xl text-white">
                                    {value.name}
                                </h2>
                                <hr className="mb-8 mt-2 w-20 border-4 border-cp-light-yellow" />
                                <p className="text-white font-mont mt-6 font-medium w-3/5">
                                    {value.summary}
                                </p>
                                <Link to={`/projects/${index}`}>
                                    <button className="mx-auto my-8 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white  rounded">
                                        LEARN MORE
                                    </button>
                                </Link>
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="w-1/2 pr-12 my-auto">
                                <h2 className="py-4 leading-tight font-play font-extrabold text-6xl text-white">
                                    {value.name}
                                </h2>
                                <hr className="mb-8 mt-2 w-20 border-4 border-cp-light-yellow" />
                                <p className="text-white font-mont mt-6 font-medium w-3/5">
                                    {value.summary}
                                </p>
                                <Link to={`/projects/${index}`}>
                                    <button className="mx-auto my-8 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white  rounded">
                                        LEARN MORE
                                    </button>
                                </Link>
                            </div>
                            <div className="w-1/2 pl-12 my-auto">
                                <img src={value.img} alt="none" />
                            </div>
                        </>
                    )}
                </div>
            ))}
        </>
    );
    return <>{isOnDesktop ? desktopList : mobileList}</>;
};

ProjectList.propTypes = {
    isOnDesktop: PropTypes.bool,
};
export default ProjectList;
