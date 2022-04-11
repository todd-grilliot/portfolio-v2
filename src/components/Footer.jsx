import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Footer = () => {
    return (
        <div className="py-10 text-cp-black text-center lg:text-left lg:px-32">
            <h3 className="font-mont text-3xl my-6 font-medium">get in touch</h3>
            <div className="my-2">
                <a href="tel:3095325162" className="text-xl">
                    <FontAwesomeIcon icon={faPhone} />
                    {"  "}
                    309-532-5162
                </a>
            </div>
            <div className="my-2">
                <a href="mailto: tbgrilliot@gmail.com" className="text-xl ">
                    <FontAwesomeIcon icon={faEnvelope} />
                    {"  "}
                    tbgrilliot@gmail.com
                </a>
            </div>
        </div>
    );
};

export default Footer;
