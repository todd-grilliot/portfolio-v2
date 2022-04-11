import React from "react";
import SkillsList from "./SkillsList";

const SkillsDesktop = () => {
    return (
        <div className="py-20 hidden lg:flex justify-start">
            <div className="w-1/2">
                <SkillsList isOnDesktop={true} />
            </div>
            <div className="py-8 text-left my-auto">
                <h2 className=" leading-tight font-mont font-extrabold text-7xl text-cp-black ">
                    My Skills
                </h2>
                
                <hr className="my-8  w-20 border-4 border-cp-red" />
                <p className=" font-mont font-medium  text-cp-black w-3/4">
                    From React to Jest. I love to learn and I’m always trying
                    something new!
                </p>
            </div>
        </div>
    );
};


export default SkillsDesktop;
