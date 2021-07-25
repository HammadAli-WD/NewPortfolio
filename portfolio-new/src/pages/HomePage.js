import React from 'react'
import styled  from "styled-components";
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GithubIcon from '@material-ui/icons/GitHub';
import YoutubeIcon from '@material-ui/icons/YouTube';
import Particle from '../Components/Particle';
import ReactPlayer from 'react-player'
import Typical from 'react-typical'
const steps = [
  'Hello 👋', 1000,
  'I am Hammad Ali: WEB-DEVELOPER 🧑‍💻', 3000,    
];
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
                <div className="videoplayer">
                    <ReactPlayer
                    url='https://youtu.be/9bAryK8I2uo'
                    controls
                    onReady={() => console.log('onReady callback')}
                    onStart={() => console.log('onStart callback')}
                    onPause={() => console.log('onPause callback')}
                    onEnded={() => console.log('onEnded callback')}
                    onError={() => console.log('onError callback')}
                />
                </div>
                
                <div className="icons">
                    <a href="https://codepen.io/pen/" className="icon i-facebook">
                        <LinkedInIcon />
                    </a>
                    <a href="https://codepen.io/pen/" className="icon i-github">
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
        }
        .videoplayer{
            line-height: 1.5;
            display: inline-block;
            vertical-align: middle;
        }
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


`
export default HomePage;
