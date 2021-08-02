import React from 'react'
import styled  from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/home/Particle';
import ReactPlayer from 'react-player'
import Typical from 'react-typical'
const steps = [
  'Hello 👋', 1000,
  'I am Hammad Ali: WEB-DEVELOPER 🧑‍💻', 3000,    
];
const Reactplayer = () => {
return (
    <div className='player-wrapper'>
        <ReactPlayer
        className='react-player'
        url='https://youtu.be/9bAryK8I2uo'
        width='100%'
        height='100%'
        controls={true}
        />
    </div>
 )
}
function HomePage() {
    return (
        <HomePageStyled>
            <div className="particle-con">
                <Particle />
            </div>
            <div className="typography">
                <Typical wrapper="div" steps={steps} loop={1} className={'caca'} />
                <p className="intro">
                    A short introduction about myself is presented in the below video. <br></br>
                    For detailed Information, please visit my whole portfolio.
                </p>                
                
                 <div className="film__container">
                    <div className="film__box">
                        <Reactplayer />
                    </div>
                </div>
            
                
                <div className="icons">
                    <a href="https://www.linkedin.com/in/hammad-ali-04517b115/" target="_blank" rel="noopener noreferrer" className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    <a href="https://github.com/HammadAli-WD" target="_blank" rel="noopener noreferrer" className="icon i-github">
                        <GithubIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-youtube">
                        <YoutubeIcon />
                    </a>
                </div>
            </div>
        </HomePageStyled>
    )
}

const HomePageStyled = styled.header`
    width: 100%;
    height: 100vh;
    position: relative;
    .typography{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center;
        width: 80%;
        
        .intro{
            color: var(--white-color);
            font-size: larger;
            padding: 2%;
        }
        .caca{
            color: #5F4687;
            font-size: larger;
            margin-top: 1rem;
        }
        .react-player video {
            position: relative;
            left: 0;
            top: 0;            
            transform: none;
        }
        .film__container {
                //width: 100%;
                //height: 80vh;
                display: flex;
                justify-content: center;
                align-items: center;
                margin: 0%;
                padding: 0%;
            }

            .film__box {
                //height: 500px;
                width: 100%;                
                max-width: 800px;
            }

            .player-wrapper {
            position: relative;
            padding-top: 45.25%
            
            }

            .react-player {
            position: absolute;
            top: 0;
            left: 0;
            }
        /* .videoplayer{
            line-height: 1.5;
            display: inline-block;
            vertical-align: middle;            
        } */
        .icons{
            display: flex;
            justify-content: center;
            margin-top: 1rem;
            .icon{
                border: 2px solid var(--border-color);
                display: flex;
                align-items: center;
                justify-content: center;
                border-radius: 50%;
                transition: all .4s ease-in-out;
                cursor: pointer;
                &:hover{
                    border: 2px solid var(--primary-color);
                    color: var(--primary-color);
                }
                &:not(:last-child){
                    margin-right: 1rem;
                }
                svg{
                    margin: .5rem;
                }
            }
            .i-youtube{
                &:hover{
                    border: 2px solid red;
                    color: red;
                }
            }
            .i-github{
                &:hover{
                    border: 2px solid #5F4687;
                    color: #5F4687;
                }
            }
        }
    }
@media screen and (max-width:1200px){
    .typography{
        display: block;
        margin-left: 0;
        margin-right: 0;
        top: 50%;
        left: 50%;
        width: 90%;
         
    
        .intro{
            font-size: small;
        }
     }
}
`;
export default HomePage;
