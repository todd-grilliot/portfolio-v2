import React from "react";
import { skillsObj } from "../../libraries/skillsObj";
import PropTypes from "prop-types";

const SkillsList = ({ isOnDesktop }) => {
    const mobileList = (
        <div className="">
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

    const desktopList = (
        <div className="grid grid-cols-3 px-20">
            {skillsObj.map((value, index) => (
                <div key={index} className="my-10">
                    <img src={value.img} alt="empty" className="w-28 mx-auto" />
                    <h3 className="mt-auto p-4 font-mont font-normal text-cp-black text-3xl text-center">
                        {value.name}
                    </h3>
                </div>
            ))}
        </div>
    );

    return <>{isOnDesktop ? desktopList : mobileList}</>;
};

SkillsList.propTypes = {
    isOnDesktop: PropTypes.bool,
};

export default SkillsList;
