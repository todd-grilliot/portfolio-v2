import React from 'react'
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const MenuModal = ({isGrey, toggleMenu, update}) => {
    function handleProjectsLink(){
        toggleMenu();
        update();
    }
  return (
    <div className='close-menu fixed z-10 left-0 top-0 w-full h-full overflow-auto bg-trans-black' onClick={toggleMenu}>
        <div className='bg-white mx-auto my-20 p-2 w-80v text-center text-xl font-mont'>
        <Link to="/" className={`block px-8 py-4 text-cp-black`}>
                Home
            </Link>
            <hr />
            <Link to="/about" className={`block px-8 py-4 text-cp-black`}>
                About
            </Link>
            <hr />
            <Link to="/projects" onClick={handleProjectsLink} className={`block px-8 py-4 text-cp-black`}>
                Projects
            </Link>
        </div>
    </div>
  )
}

MenuModal.propTypes = {
    isGrey: PropTypes.bool,
    toggleMenu: PropTypes.func.isRequired,
    update: PropTypes.func,
};
// MenuModal.defaultProps = {
//     color: "cp-blue",
//     color2: "cp-light-blue",
// };

export default MenuModal