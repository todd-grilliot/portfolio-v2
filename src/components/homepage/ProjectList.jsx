import React from "react";
import { projectObj } from "../../libraries/projectObj";

const ProjectList = () => {
    return (
        <div>
            {projectObj.map((value, index) => (
                <div key={index}>
                    <hr className="my-6 mx-auto w-5/6 border-1 border-white" />
                    <h2 className="py-4 px-2 leading-tight font-play font-extrabold text-5xl text-white">
                        {value.name}
                    </h2>
                    <hr className="mb-8 mt-2 mx-auto w-20 border-4 border-cp-light-yellow" />
                    <img src={value.img} alt="none" className="w-4/5 mx-auto" />
                    <p className="text-white font-mont mx-6 mt-6 font-medium">{value.summary}</p>
                    <button className="mx-auto my-8 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black text-white  rounded">
                        LEARN MORE
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProjectList;
