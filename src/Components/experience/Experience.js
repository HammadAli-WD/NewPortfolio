import React from 'react';
import {InnerLayout} from '../../styles/Layouts';
//import Title from '../Title';
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
                        link ={'https://www.hnee.de/de/Fachbereiche/Wald-und-Umwelt/Mitarbeiter/Prof.-Dr.-Miranda-Luis-E11049.htm'}
                    />
                    <Items 
                        year={'Feb 2021 - July 2021'} 
                        title={'FULL STACK MERN INTERN'}
                        subTitle={'RoadAds'}
                        text={`Started the project from initial phase, room booking website using MERN 
                                stack working in remote desktop connection using Linux.`}
                        link = {'https://www.roadads.de/'}
                    />
                    <Items 
                        year={'Dec 2020 - April 2021'} 
                        title={'RESEARCH ASSISTANT'}
                        subTitle={'Thünen Institute'}
                        text={`Hydrological Modelling of the data using R-Script for statistical and other 
                                analysis.`}
                        link = {'https://www.thuenen.de/en/wo/'}
                    />
                    <Items 
                        year={'Apr 2020- Nov 2020'} 
                        title={'Software Development'}
                        subTitle={'Strive School'}
                        text={`A full stack program, taught by highly
                            professional teachers, covering both theory and
                            professional training of the following modules.
                            HTML, CSS, Bootstrap, JS+ES6, MongoDB,
                            PostgreSQL, Express, React.js, Redux, ReduxThunk, TypeScript, Node.js, Cloud Technologies`}
                        link = {'https://strive.school/fullstack?&landing_page=home_page'}
                    />
                </div>                
            </InnerLayout>
        </ResumeStyles>    
    )
}


export default Experience