import css1 from '../images/portImages/cv_css.png';
import css2 from '../images/portImages/ms.png';
import react1 from '../images/portImages/react_styled.png';
import img2 from '../images/portImages/maya-4.jpg';
import img3 from '../images/portImages/maya-3.jpg';

const portfolios = [
    {
        id: 1,
        category: 'Node',
        image: css1,
        link1: 'https://apiexpatsingermany.herokuapp.com/news/hackerNews',
        link2: 'https://github.com/HammadAli-WD/expatsGermany-BE',
        title: 'Node.js Express API Expatriates In Germany',
        text: 'This is a API build in Nodejs and Express with MongoDB-Atlas storage for helpful data on expatriates in Germany.'
    },
    {
        id: 2,
        category: 'Python',
        image: img3,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Animate In Maya',
        text: 'Number one Animation Application'
    },
    {
        id: 3,
        category: 'Javascript',
        image: img3,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Animate In Maya',
        text: 'Number one Animation Application'
    },
    {
        id: 4,
        category: 'Animation',
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Use Blender',
        text: 'Free Animation Software'
    },
    {
        id: 5,
        category: 'Animation',
        image: img2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'How To Use Blender',
        text: 'Free Animation Software'
    },
    {
        id: 6,
        category: 'React JS',
        image: react1,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Responsive Portfolio Website',
        text: 'Created using different technologies such as Material UI, Styled-Components and more...'
    },
    {
        id: 7,
        category: 'CSS',
        image: css2,
        link1: 'https://www.google.com',
        link2: 'https://www.google.com',
        title: 'Microsoft Website Clone',
        text: 'Created using HTML and CSS'
    }
]

export default portfolios;