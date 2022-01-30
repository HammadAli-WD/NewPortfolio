import React from 'react'
import styled from 'styled-components';
import ImageSection from '../Components/About/ImageSection';
import Title from '../Components/Title';
import {MainLayout} from '../styles/Layouts';
import SkillsSection from '../Components/About/SkillsSection';

function AboutPage() {
    return (
        <MainLayout>
            <AboutStyled >
                <Title title={'About Me'} span={'About Me'} />
                <ImageSection />
                <SkillsSection />                
            </AboutStyled >
        </MainLayout>
            
    )
}

const AboutStyled = styled.section`
    
`;

export default AboutPage