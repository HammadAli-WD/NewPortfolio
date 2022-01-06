import React from 'react';
import {InnerLayout} from '../../styles/Layouts';
import Title from '../Title';
import SmallTitle from '../SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import Items from '../Items';
import { ResumeStyles } from '../../styles/ResumeStyles';

function Experience() {
    const briefcase = <BusinessCenterIcon />
    return (
        <ResumeStyles>
            {/* <Title title={'Experience'} span={'Experience'} /> */}
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="Content">
                    <Items 
                        year={'July 2021 - Present'} 
                        title={'FULL STACK DEVELOPER (MASTER-THESIS)'}
                        subTitle={'HNEE University Eberswalde, Germany'}
                        text={`University is collecting micro climatic data from various locations but was 
                                not accessible by the students and other research staff. Working on the 
                                project from server to deployment using Node.js, typescript, react, docker`} 
                    />
                    <Items 
                        year={'Feb 2021 - July 2021'} 
                        title={'FULL STACK MERN INTERN'}
                        subTitle={'RoadAds'}
                        text={`Started the project from initial phase, room booking website using MERN 
                                stack working in remote desktop connection using Linux.`} 
                    />
                    <Items 
                        year={'Dec 2020 - April 2021'} 
                        title={'RESEARCH ASSISTANT'}
                        subTitle={'Thünen Institute'}
                        text={`Hydrological Modelling of the data using R-Script for statistical and other 
                                analysis.`} 
                    />
                </div>                
            </InnerLayout>
        </ResumeStyles>    
    )
}


export default Experience