import React, { useRef, useEffect, useState } from "react";
import Header from "../components/Header";
import Hero from "../components/homepage/Hero";
import HeroDesktop from "../components/homepage/HeroDesktop";
import Skills from "../components/homepage/Skills";
import SkillsDesktop from "../components/homepage/SkillsDesktop";
import Projects from "../components/homepage/Projects";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

function Home({ scrollToProjects }) {
    const [state, setState] = useState();
    const projectsRef = useRef();
    useEffect(() => {
        if (scrollToProjects)
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
    });
    function update(){
        console.log('update');
        setState(Math.random);
    }

    return (
        <>
            <Header isGrey={false} update={update} />
            <Hero update={update}/>
            <HeroDesktop update={update}/>
            <Skills />
            <SkillsDesktop />
            <Projects projectsRef={projectsRef} />
            <Footer />
        </>
    );
}
Home.propTypes = {
    scrollToProjects: PropTypes.bool,
};
Home.defaultProps = {
    scrollToProjects: false,
};

export default Home;
