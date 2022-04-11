import React, {useRef, useEffect, useState} from "react";
import Header from "../components/Header";
import Hero from "../components/homepage/Hero";
import HeroDesktop from "../components/homepage/HeroDesktop";
import Skills from "../components/homepage/Skills";
import SkillsDesktop from "../components/homepage/SkillsDesktop";
import Projects from "../components/homepage/Projects";
import Footer from "../components/Footer";

function Home() {
    const projectsRef = useRef();
    const [isFromProjects, setIsFromProjects] = useState(false);
    useEffect(() => {
        console.log(isFromProjects);
        // projectsRef.current.scrollIntoView({behavior: 'smooth' })
    })
      
    
    return (
        <>
            <Header isGrey={false} handleRef={setIsFromProjects}/>
            <Hero />
            <HeroDesktop />
            <Skills />
            <SkillsDesktop />
            <Projects projectsRef={projectsRef}/>
            <Footer />
        </>
    );
}

export default Home;
