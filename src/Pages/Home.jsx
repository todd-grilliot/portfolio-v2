import React from "react";
import Header from "../components/Header";
import Hero from "../components/homepage/Hero";
import HeroDesktop from "../components/homepage/HeroDesktop";
import Skills from "../components/homepage/Skills";
import SkillsDesktop from "../components/homepage/SkillsDesktop";
import Projects from "../components/homepage/Projects";
import Footer from "../components/Footer";

function Home() {
    return (
        <div className="Home">
            <Header />
            <Hero />
            <HeroDesktop />
            <Skills />
            <SkillsDesktop />
            <Projects />
            <Footer />
        </div>
    );
}

export default Home;
