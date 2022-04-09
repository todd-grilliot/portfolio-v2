import React from "react";
import SkillsList from "./SkillsList";

const Skills = () => {
    return (
        <div className="my-8">
            <h1 className="p-2 leading-tight font-mont font-extrabold text-5xl text-cp-black text-center">
                My Skills
            </h1>
            <hr className="my-8 mx-auto w-20 border-4 border-cp-red" />
            <p className="p-8 font-mont font-medium  text-cp-black text-center">
            From React to Jest. I love to learn and I’m always trying something new!
            </p>
            <SkillsList />
        </div>
    );
};

export default Skills;
