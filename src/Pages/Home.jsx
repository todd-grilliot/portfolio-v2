import React from "react";
import Header from "../components/Header";
import Hero from "../components/homepage/Hero";
import HeroDesktop from "../components/homepage/HeroDesktop";
import Skills from "../components/homepage/Skills";
// import { Link } from "react-router-dom";

function Home() {
    return (
        <div className="Home">
            <Header />
            <div>
                <Hero />
                <HeroDesktop />
                <Skills />
            </div>
        </div>
    );
}

export default Home;
