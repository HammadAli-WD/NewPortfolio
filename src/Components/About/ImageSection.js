import React from 'react'
import styled from 'styled-components';
import resume from '../../images/Own.jpeg';
import PrimaryButton from './PrimaryButton';
import CV from "../../data/HammadAli_CV.pdf";
function ImageSection() {
    return (
        <ImageSectionStyled>
            <div className="left-content">
                <img src={resume} alt=""/>
            </div>
            <div className="right-content">
                <h4>I am <span>Hammad Ali</span></h4>
                <p className="paragraph">
                   The determined, efficient and effective teamwork for the completion of an international Mega Housing Project was the start of my career.
                  The application's of Information Technology in every field, grabbed my attention and therefore,
                  I started a master's in the Forest Information Technology program. During the study, the programming subjects sparked me to dive deeper into programming through a
                  Full-Stack Developer. At the same moment, I found Strive School as the best option to turn my dreams into reality.
                  The practical training of the school in the field of Node.js, Express, MongoDB on the backend and React, Redux,
                  Typescript with HTML, CSS, Bootstrap, JavaScript on the frontend, with pair programming and code review under agile environment,
                    make it possible for me to work as a Full-Stack Developer. In addition, during my Internship as Full Stack Developer in Road Ads GmBH boosted my skills with having greater responsibilites.
                    Currently, I am working as full stack developer on Weather Station Data website of HNEE, University with usage of Node js, typescript, PostgreSQL, react and other libraries.
                  Throughout my education and career, I am succeeded in boosting interpersonal skills by adaptiveness to multi-cultural environments with different
                  fields of career and studies, collaboration through teamwork, and problem-solving with analytical thoughts. I am always happy to learn more and handle problems through utilization of my skills and knowledge.
                    
                </p>
                <a href={CV} download="HammadAli_CV">
                    <PrimaryButton title={'Download Cv'} />
                    </a>
            </div>
        </ImageSectionStyled>
    )
}


const ImageSectionStyled = styled.div`
    margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ImageSection;
