import { React, useState } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import MenuModal from "./MenuModal";

const Header = ({ isGrey, setIsFromProjects }) => {
    const [showModal, setShowModal] = useState(false);
    function toggleMenu(e) {
        let closeMenu = e.target.classList.value.includes("close-menu");
        if (!closeMenu && showModal) return;
        setShowModal(!showModal);
    }
    function handleProjects(){
        console.log('handling projects');
        setIsFromProjects(true);
        //state isn't working....
        //when the link moves over it kind of like interupts whatever is going on... I think I need somekind of router callback function...
        // there might be a way to pass data through the link like I have before...
        // setIsFromProjects();
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
            <Link to="/" onClick={handleProjects} className={`p-8 ${isGrey ? "hover:text-slate-500" : "hover:text-cp-light-blue"}`}>
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
 setIsFromProjects: PropTypes.bool,
};

export default Header;
