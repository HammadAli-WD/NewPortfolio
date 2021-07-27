import React from 'react';
//import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
import Title from './Title';
import SkillsCard from './SkillsCard';


function SkillsSection() {
    return (
        <InnerLayout>            
                <Title title={'Skills'} span={'Skills'} />
                <div>
                    <SkillsCard />                    
                </div>            
        </InnerLayout>
    )
}

/* const SkillsSectionStyled = styled.section`
    .Skills{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`; */

export default SkillsSection;

