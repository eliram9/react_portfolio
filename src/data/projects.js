// importing projects images
import crypto from '../assets/crypto.png';
import navi from '../assets/navi.png';

// we will craete an array for all the projects we want to display
// PROJECTS - written in SCREAM syntax: a convention for global values in JS.
const PROJECTS = [
    // every project will "stored" every project as an object  
    {
        id: 1,
        title: 'CryptoCurrency',
        description: 'A simple app to track my favorite price currency in real-time.',
        link: 'https://eliram9.github.io/cryptoreact/',
        image: crypto
    },
    {
        id: 2,
        title: 'QuickestWay',
        description: 'Web Application for the quickest route comparing between Bing, Google and MapQuest GPS on one page',
        link: 'https://eliram9.github.io/QuickestWay/',
        image: navi
    }
];

export default PROJECTS;