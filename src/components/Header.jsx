import { React, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "./MenuModal";

const Header = ({ isGrey }) => {
    const [showModal, setShowModal] = useState(false);
    function toggleMenu(e) {
        let closeMenu = e.target.classList.value.includes("close-menu");
        if (!closeMenu && showModal) return;
        setShowModal(!showModal);
    }
    const desktopView = (
        <div
            className={`px-32 py-8 ${isGrey ? "bg-off-white" : "bg-cp-blue"} font-mont text-2xl float-right text-cp-black hidden lg:block`}
        >
            <Link to="/" className={`p-8 ${isGrey ? "hover:text-slate-500" : "hover:text-cp-light-blue"}`}>
                Home
            </Link>
            <Link to="/about" className={`p-8 ${isGrey ? "hover:text-slate-500" : "hover:text-cp-light-blue"}`}>
                About
            </Link>
            <Link to="/" className={`p-8 ${isGrey ? "hover:text-slate-500" : "hover:text-cp-light-blue"}`}>
                Projects
            </Link>
        </div>
    );
    const mobileView = (
        <div
            className={`py-8 ${isGrey ? "bg-off-white" : "bg-cp-blue"} font-mont text-center text-cp-black  lg:hidden`}
            onClick={toggleMenu}
        >
            <FontAwesomeIcon
                icon={faBars}
                className={`text-4xl ${
                    showModal ? `${isGrey ? "text-slate-500" : "text-cp-light-blue"}` : "text-cp-black"
                }`}
            />
        </div>
    );
    return (
        <>
            {desktopView}
            {mobileView}
            {showModal && (
                <MenuModal
                    isGrey={isGrey}
                    toggleMenu={toggleMenu}
                />
            )}
        </>
    );
};

Header.propTypes = {
    isGrey: PropTypes.bool,
    // color: PropTypes.string,
    // color2: PropTypes.string,
};
// Header.defaultProps = {
//     // color: "cp-blue",
//     // color2: "cp-light-blue",
// };

export default Header;
