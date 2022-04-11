module.exports = {
    content: [
        "./components/**/*.{html,js,jsx}",
        "./pages/**/*.{html,js,jsx}",
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            height: {
                "10v": "10vh",
                "20v": "20vh",
                "30v": "30vh",
                "40v": "40vh",
                "50v": "50vh",
                "60v": "60vh",
                "70v": "70vh",
                "80v": "80vh",
                "90v": "90vh",
                "100v": "100vh",
            },
            width: {
                "10v": "10vw",
                "20v": "20vw",
                "30v": "30vw",
                "40v": "40vw",
                "50v": "50vw",
                "60v": "60vw",
                "70v": "70vw",
                "80v": "80vw",
                "90v": "90vw",
                "100v": "100vw",
            },
            colors: {
                "cp-blue": "#6F77F4",
                "cp-light-blue": "#A3A9F7",
                "cp-yellow": "#FFD845",
                "cp-light-yellow": "#FFEA99",
                "cp-red": "#FF6766",
                "cp-black": "#3A3A3A",
                "cp-light-black": "#606060",
                "trans-black": "rgba(0,0,0,0.3)",
                "off-white": "#FBFBFB",
            },
            fontFamily: {
                mont: ["Montserrat"],
                play: ["Playfair Display"],
            },
            backgroundImage: {
                "hero-desktop": "url('assets/hi-my-name-is-todd.jpg')",
                "hero-mobile": "url('assets/hi-my-name-is-todd-mobile.jpg')",
            },
        },
    },
    plugins: [
        require("@tailwindcss/typography"),
    ],
};
