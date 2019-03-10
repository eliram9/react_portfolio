// importing projects images
import gmail from '../assets/gmail.png';
import git from '../assets/git.png';
import insta from '../assets/insta.png';
import linked from '../assets/linked.png';

// we will craete an array for all the social profiles we want to display
// SOCIAL - written in SCREAM syntax: a convention for global values in JS.
const SOCIALS = [
    {
        id: 1,
        link: 'mailto:eliram9@gmail.com/',
        image: gmail
    },
    {
        id: 2,
        link: 'https://eliram9.github.io/',
        image: git

    },
    {
        id: 3,
        link: 'https://www.instagram.com/eliramalachi/?hl=en',
        image: insta
    },
    {
        id: 4,
        link: 'https://www.linkedin.com/in/eliram9/',
        image:linked
    }
];

export default SOCIALS;
