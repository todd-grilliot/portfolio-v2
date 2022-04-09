module.exports = {
    content: [
        "./components/**/*.{html,js,jsx}",
        "./pages/**/*.{html,js,jsx}",
        "./index.html",
        "./src/**/*.{js,jsx}",
    ],
    theme: {
        extend: {
            colors: {
                "cp-blue": "#6F77F4",
                "cp-yellow": "#FFD845",
                "cp-light-yellow": "#FFEA99",
                "cp-red": "#FF6766",
                "cp-black": "#3A3A3A",
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
    plugins: [require("@tailwindcss/typography")],
};
