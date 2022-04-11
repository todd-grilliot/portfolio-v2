import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
    const mobileView = (
        <div className="bg-cp-blue bg-cover w-fit lg:hidden">
            <h1 className="pt-8 leading-tight font-mont font-extrabold text-4xl text-white text-center">
                Who Is Todd Grilliot?
            </h1>
            <img
                src={require("../assets/guitar-todd.jpg")}
                alt="no image"
                className="w-2/3 mx-auto mt-6 mb-16"
            />
            <h2 className="font-play text-4xl font-bold text-cp-black text-center">
                About Me
            </h2>
            <p className="p-6 font-mont font-medium  text-white text-center">
                Hey there! I&apos;m a front-end developer who loves to learn!
                I&apos;m proud of each of my projects. Thanks for checking out
                my work! When I&apos;m not building rad bad applications,
                I&apos;m probably reading a good book or doing something
                outside. I love rock climbing and making music. Take a look
                around and feel free to reach out!
            </p>
            <hr className="mb-12 mt-8 mx-auto w-20 border-4 border-cp-yellow" />

            <h2 className="font-play text-4xl font-bold text-cp-black text-center">
                My Journey In Code
            </h2>
            <p className="p-6 font-mont font-medium  text-white text-center">
                I studied marketing at BYU-Idaho, an amazing school with amazing
                people. I loved my time there. I’ve worked in marketing for a
                little over a year, most of my work being in web design. I first
                learned to code making cute pixel art games in unity. I would
                write simple scripts in C# for my characters to jump around and
                interact with the world I had created for them. I had so much
                fun doing it, I wanted to learn more! After making a few cute
                games I picked up Javascript and started making simple static
                websites. I remember how excited I was the first time I got a
                button to log something to the console haha. I felt like a kid
                playing with Legos. I was having fun, so I kept building things.
                As time went by, my projects became more ambitious and I wanted
                to know more. This drive led me to learn technologies like
                node.js, react, and SQL. The projects on this website reflect
                what I’ve learned in the past year or so. Thanks so much for
                visiting my website!! And I hope you appreciate some of the
                things that I’ve been working on. Feel free to send me an email
                at tbgrilliot@gmail.com
            </p>
            <div className="flex">
                <button href="mailto: tbgrilliot@gmail.com" className="mx-auto mb-8 my-6 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white rounded">
                    GET IN TOUCH
                </button>
            </div>
            <div className="py-32 h-40v bg-top bg-cover bg-hero-mobile"></div>
        </div>
    );
    const desktopView = (
        <div className=" py-16 bg-cp-blue hidden lg:block ">
            <div className="px-32 flex w-full justify-start">
                <div>
                    <h1 className="my-auto leading-tight font-mont font-extrabold text-7xl text-white">
                        Who Is Todd Grilliot?
                    </h1>
                    <hr className="my-8 w-24 border-4 border-cp-yellow" />
                </div>
                <div className="w-1/2 items-end flex">
                </div>
            </div>
            <div className="px-32 bg-cp-blue hidden lg:flex w-full justify-evenly">
                <div className="w-1/2 text-left">
                    <h2 className="font-play text-4xl font-bold text-cp-black">
                        About Me
                    </h2>
                    <p className="py-6 font-mont font-medium  text-white">
                        Hey there! I&apos;m a front-end developer who loves to
                        learn! I&apos;m proud of each of my projects. Thanks for
                        checking out my work! When I&apos;m not building rad bad
                        applications, I&apos;m probably reading a good book or
                        doing something outside. I love rock climbing and making
                        music. Take a look around and feel free to reach out!
                    </p>
                    <h2 className="mt-12 font-play text-4xl font-bold text-cp-black">
                        My Journey In Code
                    </h2>
                    <p className="py-6 font-mont font-medium  text-white">
                        I studied marketing at BYU-Idaho, an amazing school with
                        amazing people. I loved my time there. I’ve worked in
                        marketing for a little over a year, most of my work
                        being in web design.
                        <br /> I first learned to code making cute pixel art
                        games in unity. I would write simple scripts in C# for
                        my characters to jump around and interact with the world
                        I had created for them. I had so much fun doing it, I
                        wanted to learn more! After making a few cute games I
                        picked up Javascript and started making simple static
                        websites. I remember how excited I was the first time I
                        got a button to log something to the console haha. I
                        felt like a kid playing with Legos. I was having fun, so
                        I kept building things. As time went by, my projects
                        became more ambitious and I wanted to know more. This
                        drive led me to learn technologies like node.js, react,
                        and SQL. The projects on this website reflect what I’ve
                        learned in the past year or so.
                        <br /> Thanks for visiting my website!! And I hope you
                        appreciate some of the things that I’ve been working on.
                        Feel free to send me an email at{" "}
                        <a href="mailto: tbgrilliot@gmail.com">
                            tbgrilliot@gmail.com
                        </a>
                    </p>

                    <button href="mailto: tbgrilliot@gmail.com" className="my-6 py-4 px-8 font-mont font-bold text-sm tracking-wider bg-cp-black hover:bg-cp-light-black text-white  rounded">
                        GET IN TOUCH
                    </button>
                </div>
                <div className="w-1/2 items-start flex">
                    <img
                        src={require("../assets/guitar-todd.jpg")}
                        alt="no img"
                        className="w-4/6 mx-auto mt-[-10rem]"
                    />
                </div>
            </div>
        </div>
    );
    return (
        <>
            <Header />
            {mobileView}
            {desktopView}
            <Footer />
        </>
    );
};

export default About;
