import React from "react";
import { skillsObj } from "../../libraries/skillsObj";

const SkillsList = () => {
    return (
        <div>
            {skillsObj.map((value, index) => (
                <div key={index} className="my-10">
                    <img src={value.img} alt="empty" className="w-28 mx-auto" />
                    <h3 className="p-4 font-mont font-normal  text-cp-black text-3xl text-center">
                        {value.name}
                    </h3>
                </div>
            ))}
        </div>
    );
};

export default SkillsList;
