import React from "react";

const HeroDesktop = () => {
    return (
        <div className="p-32 bg-cover bg-center bg-hero-desktop hidden lg:block">
            <h2 className="my-8 leading-tight font-play font-black text-4xl text-cp-black">
                I{"'"}m Todd Grilliot
            </h2>
            <h1 className="my-8 leading-tight font-mont font-extrabold w-3/5 text-7xl text-white">
                A Front-end Web Developer.
            </h1>
            <hr className="my-8 w-24 border-4 border-cp-yellow" />
            <p className="my-8 font-mont font-medium  text-white w-2/5">
                Welcome to my website! Here I{"'"}ve hosted some of my favorite
                projects so you can play with them. Take a look around and let
                me know what you think!
            </p>
            <button className="my-1 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white  rounded">
                SEE MY WORK
            </button>
        </div>
    );
};

export default HeroDesktop;
