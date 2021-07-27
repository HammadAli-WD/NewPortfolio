import L_HTML5 from "../images/skills/html-5.svg";
import L_CSS3 from "../images/skills/css3.svg";
import L_SASS from "../images/skills/sass-1.svg";
import L_BOOTSTRAP from "../images/skills/bootstrap-4.svg";
import L_REACT from "../images/skills/react.svg";
import L_REDUX from "../images/skills/redux.svg";
import L_REACT_ROUTER from "../images/skills/react-router.svg";
import L_MATERIALUI from "../images/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../images/skills/react-bootstrap.svg";
import L_NODE_JS from "../images/skills/nodejs.svg";
import L_EXPRESS from "../images/skills/express.svg";
import L_MONGODB from "../images/skills/mongodb.svg";
import L_FIREBASE from "../images/skills/firebase-seeklogo.com.svg";
import L_MSSQL from "../images/skills/mssql.svg";
import L_GIT from "../images/skills/git-icon.svg";
import L_HEROKU from "../images/skills/heroku.svg";
import L_GITHUB_PAGES from "../images/skills/github.svg";
import L_JAVASCRIPT from "../images/skills/javascript.svg";
import L_TYPESCRIPT from "../images/skills/typescript.svg";
import L_NETLIFY from "../images/skills/netlify.svg";
import L_PYTHON from "../images/skills/python.svg";
import L_NEXT from "../images/skills/next.svg";
import L_FIGMA from "../images/skills/figma.svg";
import L_PS from "../images/skills/adobeps.svg";
import L_AE from "../images/skills/adobeae.svg";
import L_WP from "../images/skills/wordpress.svg";
import L_SHOPIFY from "../images/skills/shopify.svg";
import L_BC from "../images/skills/bigcommerce.svg";


export const SkillsData = {
  frontend: [
    {
      Title: "Basics",
      skillsInfo: [
        {
      link: "https://en.wikipedia.org/wiki/HTML5",
      imgAltText: "HTML 5",
      imgSrc: L_HTML5,
      skillName: "HTML5",
    },
    {
      link: "https://medium.com/beginners-guide-to-mobile-web-development/whats-new-in-css-3-dcd7fa6122e1",
      imgAltText: "CSS 3",
      imgSrc: L_CSS3,
      skillName: "CSS3",
    },
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: L_JAVASCRIPT,
      skillName: "JavaScript",
        }
      ]
    },
    {
      Title: "Frameworks/Libraries",
      skillsInfo: [
        {
      link: "https://reactjs.org/",
      imgAltText: "React JS",
      imgSrc: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K",
      skillName: "React JS",
    },
    {
      link: "https://redux.js.org/",
      imgAltText: "Redux",
      imgSrc: "https://redux.js.org/img/redux.svg",
      skillName: "Redux",
    },
    {
      link: "https://reacttraining.com/react-router/",
      imgAltText: "React Router",
      imgSrc: "https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/321/full/reactrouter.png",
      skillName: "React Router",
    }
      ]
    },
    {
      Title: "Styles",
      skillsInfo: [
        {
      link: "https://sass-lang.com/",
      imgAltText: "Sass",
      imgSrc: "https://sass-lang.com/assets/img/logos/logo-b6e1ef6e.svg",
      skillName: "Sass",
    },
    {
      link: "https://getbootstrap.com/",
      imgAltText: "Bootstrap",
      imgSrc: "data:image/png;base64,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",
      skillName: "Bootstrap",
    },
    
    {
      link: "https://material-ui.com/",
      imgAltText: "Material-UI",
      imgSrc: "https://material-ui.com/static/logo_raw.svg",
      skillName: "Material-UI",
    },    
    {
      link: "https://styled-components.com/",
      imgAltText: "styled-components",
      imgSrc: "https://styled-components.com/logo.png",
      skillName: "styled-components",
    },
      ]
    },
  ],

  backend: [
    {
      link: "https://nodejs.org/en/",
      imgAltText: "Node.js",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_0Uu824N-jZhYSbpzi1YIoS-3cNkRhbkBPw&usqp=CAU",
      skillName: "Node.js",
    },
    {
      link: "https://expressjs.com/",
      imgAltText: "Express",
      imgSrc: "https://expressjs.com/images/express-facebook-share.png",
      skillName: "Express",
    },

  ],
  hostingPlatforms: [
    {
      link: "https://www.heroku.com/",
      imgAltText: "Heroku",
      imgSrc: "https://hidenobu-tokuda.com/wp-content/uploads/2019/05/heroku-logo-solid-gradient.png",
      skillName: "Heroku",
    },
    {
      link: "https://en.wikipedia.org/wiki/Microsoft_Azure",
      imgAltText: "Microsoft Azure",
      imgSrc: "https://dzone.com/storage/temp/12165862-azurelogo-1.png",
      skillName: "Microsoft Azure",
    },
    {
      link: "https://pages.github.com/",
      imgAltText: "Netlify",
      imgSrc: "https://avatars0.githubusercontent.com/u/7892489?s=200&v=4",
      skillName: "Netlify",
    },
  ],
  programmingLanguages: [
    {
      link: "https://www.javascript.com/",
      imgAltText: "JavaScript",
      imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiXhjVqtRd6tiqcsSQ7rD6VF7NxI-3VvoR0w&usqp=CAU",
      skillName: "JavaScript",
    },
    {
      link: "https://www.typescriptlang.org/",
      imgAltText: "TypeScript",
      imgSrc: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
      skillName: "TypeScript",
    },

  ],
  databases: [
    {
      link: "https://www.mongodb.com/",
      imgAltText: "MongoDB",
      imgSrc: "https://miro.medium.com/max/640/1*-ivYkzeuYJedPKdEdfnNlg.png",
      skillName: "MongoDB",
    },
    {
      link: "https://www.postgresql.org/",
      imgAltText: "PostgreSQL",
      imgSrc: "https://www.postgresql.org/media/img/about/press/elephant.png",
      skillName: "PostgreSQL",
    },

  ],
  versionControl: [
    {
      link: "https://git-scm.com/",
      imgAltText: "GIT",
      imgSrc: "https://avatars3.githubusercontent.com/u/18133?s=200&v=4",
      skillName: "GIT",
    },
  ],
};

export default SkillsData;