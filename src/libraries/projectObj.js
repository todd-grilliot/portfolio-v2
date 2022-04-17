export const projectObj = [
    {
        id: 0,
        name: "Retro Synth",
        img: require("../assets/retro-darkened.PNG"),
        summary:
            "A React synthesizer you can play in your browser! Use keyboard or mouse :)",
        description: [
            "This is a keyboard! A synth! You can play music with it! I wanted to make something unique and interesting.. I love music so this seemed to be a good idea. I had a blast making it.",
            "Just a heads up, it doesn't work very well on mobile devices. I couldn't really find a good way to make a 24-key keyboard fit on such a small screen. Try it with mouse and keyboard!",
        ],  
        link: "https://toddgrilliot.space/retro-synth/",
        github: "https://github.com/yankeehotelfoxtrot51/react-piano",
        features: [
            {
                icon: "fa-user",
                text: "Interactive User Interface",
            },
            {
                icon: "fa-keyboard",
                text: "Uses keyboard or mouse",
            },
            {
                icon: "fa-brands fa-react",
                text: "Generated React components",
            },
            {
                icon: "fa-sliders",
                text: "Various synth settings",
            },
            {
                icon: "fa-volume-high",
                text: "Generates unique audio",
            },
        ],
        tech: [
            {
                name: "React",
                img: require("../assets/icons/react-logo-ducks.png"),                
            },
            {
                name: "CSS",
                img: require("../assets/icons/icons8-css3-240.png"),                
            },
            {
                name: "Web Audio",
                img: require("../assets/icons/html-5-240.png"),                
            },
        ],
    },
    {
        id: 1,
        name: "Notes App",
        img: require("../assets/capture-notes-app-darkened.jpg"),
        summary:
            "A simple notes app using Google Firebase for the backend. Built using jquery and custom css.",

        description: [
            "I wanted to make something with users so I could learn about databases and authentication. It turns out Google Firebase has some pretty wonderful solutions for that, and learning firebase was a blast. I also learned a lot organizing all of the data in a way that could be written and read from the database. It was so much fun getting it all working.",
            "Everything was built with custom css and jquery.",
        ],
        link: "https://toddgrilliot.space/notes-app/",
        github: "https://github.com/yankeehotelfoxtrot51/Notes-App",
        features: [
            {
                icon: "fa-user",
                text: "Users can sign up and log in",
            },
            {
                icon: "fa-trash-can",
                text: "Make and delete note objects",
            },
            {
                icon: "fa-right-from-bracket",
                text: "A 'logged out' screen",
            },
            {
                icon: "fa-mobile-screen",
                text: "Mobile Responsive design",
            },
            {
                icon: "fa-bars",
                text: "Modals for signing up etc.",
            },
            {
                icon: "fa-floppy-disk",
                text: "Auto-save functionality",
            },
            {
                icon: "fa-database",
                text: "Read and write to database",
            },
        ],
        tech: [
            {
                name: "JavaScript",
                img: require("../assets/icons/600px-JavaScript-logo.png"),                
            },
            {
                name: "CSS",
                img: require("../assets/icons/icons8-css3-240.png"),
            },
            {
                name: "Firebase",
                img: require("../assets/icons/icons8-google-firebase-console-240.png"),            
            },
        ],
    },
    {
        id: 2,
        name: "Twitter Bot",
        img: require("../assets/capture-twitter2-darkened.jpg"),
        summary: "A node.js bot that uses the twitter API.",
        description: [
            "This is my bot that I made using node.js and the twitter API. He is hosted on a free Heroku account. All he does is retweet the most liked tweets from different accounts.",
            "I learned a lot about Async functions and promises while working on this project. His logic isn’t that complicated, but it forced me to get out of my comfort zone and learn new things.",
        ],
        link: "https://twitter.com/HenryJayEyering",
        github: "https://github.com/yankeehotelfoxtrot51/TwitterBotNode",
        features: [
            {
                icon: "fa-check",
                text: "Authentication using twitter Oauth",
            },
            {
                icon: "fa-clock",
                text: "Asynchronous functions",
            },
            {
                icon: "fa-server",
                text: "Hosting on Heroku",
            },
            {
                icon: "fa-list",
                text: "Manipulating Data Structures",
            },
            {
                icon: "fa-code-branch",
                text: "Decision trees and logic",
            },
            {
                icon: "fa-comment",
                text: "REST API calls",
            },
        ],
        tech: [
            {
                name: "Node",
                img: require("../assets/icons/nodejs-240.png"),                
            },
            {
                name: "Heroku",
                img: require("../assets/icons/heroku240.png"),                
            },
            {
                name: "Twitter",
                img: require("../assets/icons/twitter-240.png"),                
            },
        ],
    },
    {
        id: 3,
        name: "Currency Exchange",
        img: require("../assets/capture-exchange-darkened.jpg"),
        summary:
            "One of my earlier projects. Built using vanilla JS and the Fixer.io API.",
        description: [
            "This was an app I made early into my coding journey. I didn’t know very much, so I learned a TON making this. Things like css display types, and API calls, and some very basic design principles.",
            "The App pulls data from the Fixer.io API, and then lets you compare currency prices using drop down menus and input boxes.",
            "",
            "*Disclaimer* While the original app pulled realtime data from fixer.io, the requests were made using http instead of https. In order to host it here I’ve switched to a static json file that uses https. Unfortunately that means that the data is no longer live. Still, you can see how it works and what I learned making it.",
        ],
        link: "https://toddgrilliot.space/currency-exchange/",
        github: "https://github.com/yankeehotelfoxtrot51/Currency-Exchange-Project",
        features: [
            {
                icon: "fa-code-branch",
                text: "DOM manipulation",
            },
            {
                icon: "fa-paper-plane",
                text: "API calls",
            },
            {
                icon: "fa-code",
                text: "CSS basics",
            },
            {
                icon: "fa-mobile-screen",
                text: "Responsive design",
            },
            {
                icon: "fa-arrow-pointer",
                text: "Event Listeners",
            },
        ],
        tech: [
            {
                name: "JavaScript",
                img: require("../assets/icons/600px-JavaScript-logo.png"),                
            },
            {
                name: "CSS",
                img: require("../assets/icons/icons8-css3-240.png"),                
            },
            {
                name: "HTML",
                img: require("../assets/icons/html-5-240.png"),            
            },
        ],
    },
    {
        id: 4,
        name: "Unity Game",
        img: require("../assets/space-game.PNG"),
        video: "https://www.youtube.com/embed/3p_DYQI-llk",
        summary:
            "A pixel art game that I made in unity",
        description: [
            "Orbital Space Puppy Rescue is a game about a man who has lost his puppy and wants to get home.",
            "Unity is how I first learned code. Scripting for unity is done in C#. All the art and music in the game was made by me and my friends.",
            "",
            "WASD: steering/thrust",
            "Shift/Space: Toggle Gravity",
            "You win by getting your puppy! Watch out for the space octopi and the cookie men! lol",
        ],
        link: "https://melonboy55.itch.io/orbital-puppy-rescue",
        github: "https://github.com/yankeehotelfoxtrot51/Orbit-mint-bicycle",
        features: [
            {
                icon: "fa-paint-brush",
                text: "Cool art",
            },
            {
                icon: "fa-music",
                text: "Cool music",
            },
            {
                icon: "fa-atom",
                text: "Simulated physics",
            },
            {
                icon: "fa-brands fa-chrome",
                text: "Plays In Browser",
            },
            {
                icon: "fa-paw",
                text: "Cute Doggos",
            },
        ],
        tech: [
            {
                name: "C#",
                img: require("../assets/icons/Csharp_Logo.png"),
            },
            {
                name: "Unity",
                img: require("../assets/icons/unity-logo-white.png"),
            },
            {
                name: "FL Studio",
                img: require("../assets/icons/icons8-fl-studio-128.png"),
            },
        ],
    },
];
