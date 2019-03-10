// importing projects images
import git from '../assets/git';
import insta from '../assets/insta';
import linked from '../assets/linked';

// we will craete an array for all the social profiles we want to display
// SOCIAL - written in SCREAM syntax: a convention for global values in JS.
const SOCIAL = [
    {
        id: 1,
        link: 'https://eliram9.github.io/react_portfolio/',
        image: git

    },
    {
        id: 2,
        link: 'https://www.instagram.com/eliramalachi/?hl=en',
        image: insta
    },
    {
        id: 3,
        link: 'https://www.linkedin.com/in/eliram9/',
        image:linked
    }
];

export default SOCIAL;
