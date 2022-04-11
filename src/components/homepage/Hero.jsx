import React from "react";

const Hero = () => {
    return (
        <div className="bg-cp-blue bg-cover w-fit lg:hidden">
            <h2 className="pt-8 pb-2 leading-tight font-play font-black text-2xl text-cp-black text-center">
                I{"'"}m Todd Grilliot
            </h2>
            <h1 className="p-2 leading-tight font-mont font-extrabold text-4xl text-white text-center">
                A Front-end Web Developer
            </h1>
            <hr className="mt-8 mx-auto w-20 border-4 border-cp-yellow" />
            <p className="p-8 font-mont font-medium  text-white text-center">
                Welcome to my website! Here I{"'"}ve hosted some of my favorite
                projects so you can play with them. Take a look around and let
                me know what you think!
            </p>
            <div className="flex">
                <button className="mx-auto mb-8 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white rounded">
                    SEE MY WORK
                </button>
            </div>
            <div className="py-32 h-40v bg-top bg-cover bg-hero-mobile"></div>
        </div>
    );
};

export default Hero;
