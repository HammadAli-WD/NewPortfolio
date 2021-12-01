import FEexpats from '../images/portImages/FE-Expats.jpg';
import BEexpats from '../images/portImages/BE-Expats.jpg';

const portfolios = [
    {
        id: 1,        
        category: 'Jest',        
        category2: 'PostgreSQL',
        category3: 'Node',
        category4: 'Typescript',
        image: FEexpats,
        link1: 'https://github.com/FIT-HNEE/Server-WSData',
        link2: '#',
        title: 'Node.js Typescript on thesis topic of Micro Climatic data',
        text: 'This is a API build in Nodejs and typescript with PostgreSQL for research purposes.'
    },
    {
        id: 2,        
        category: 'Typescript',
        category2: 'React',
        image: FEexpats,
        link1: 'https://github.com/FIT-HNEE/ClientSide-WSData',
        link2: '#',
        title: 'Front-End using Micro Climatic data API',
        text: 'React js project using material UI components and typescript'
    },
    {
        id: 3,        
        category: 'Node',
        category2: 'MERN',
        category4: 'Typescript',
        image: FEexpats,
        link1: 'https://github.com/HammadAli-WD/TypescriptToDoList/tree/main/server',
        link2: '#',
        title: 'Node.js Typescript api for to do list',
        text: 'This is a API build in Nodejs and typescript with MongoDB for to do list app.'
    },
    {
        id: 4,        
        category2: 'MERN',
        category: 'React',
        category4: 'Typescript',
        image: FEexpats,
        link1: 'https://github.com/HammadAli-WD/TypescriptToDoList/tree/main/client/todolist',
        link2: '#',
        title: 'Front-End using to do list API',
        text: 'React js project using axios and typescript'
    },
    {
        id: 5,
        category2: 'Node',
        category: 'PostgreSQL',
        category4: 'Typescript',
        image: FEexpats,
        link1: 'https://github.com/HammadAli-WD/Typescript-JS-Project',
        link2: '#',
        title: 'Node.js Typescript api using docker and typeorm',
        text: 'This is a API build in Nodejs and typescript with PostgreSQL for to do list app.'
    },
    {
        id: 6,
        category2: 'Node',
        category: 'MERN',
        image: BEexpats,
        link1: 'https://github.com/HammadAli-WD/expatsGermany-BE',
        link2: 'https://apiexpatsingermany.herokuapp.com/news/hackerNews',
        title: 'Node.js Express API Expatriates In Germany',
        text: 'This is a API build in Nodejs and Express with MongoDB-Atlas storage for helpful data on expatriates in Germany.'
    },
    {
        id: 7,
        category3: 'React',
        category: 'MERN',
        image: FEexpats,
        link1: 'https://github.com/HammadAli-WD/expatsGermanyFE',
        link2: 'https://expatsingermany.herokuapp.com/',
        title: 'Front-End Project For Expatriates',
        text: 'React js project using styled components, react bootstrap and deployed on Heroku'
    },
    {
        id: 8,
        category2: 'Node',
        category: 'MERN',
        image: FEexpats,
        link1: 'https://github.com/HammadAli-WD/StudentsProjects_BE',
        link2: '#',
        title: 'Node.js Express API Student Records App',
        text: 'This is a API build in Nodejs and Express with MongoDB storage for data on student records'
    },
    {
        id: 9,
        category3: 'React',
        category: 'MERN',
        image: FEexpats,
        link1: 'https://github.com/HammadAli-WD/StudentsProjects_FE',
        link2: '#',
        title: 'Student Records App',
        text: 'This app can be used for entering the student data with thier project details.'
    },
    {
        id: 10,
        category: 'React',
        image: FEexpats,
        link1: 'https://github.com/HammadAli-WD/portfolio.github.io',
        link2: 'https://competent-liskov-49a579.netlify.app/',
        title: 'Old-Portfolio',
        text: 'This is my first portfolio in React js, which shows brief introduction about my skills and education.'
    }
]

export default portfolios;