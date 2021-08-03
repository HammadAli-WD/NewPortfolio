import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
import Title from '../Title';
import SmallTitle from '../SmallTitle';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import Items from '../Items';
import { ResumeStyles } from '../../styles/ResumeStyles';

function Experience() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyles>
            {/* <Title title={'Experience'} span={'Experience'} /> */}
            <InnerLayout>
                
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="Content">
                    <Items 
                        year={'Apr 2020- Nov 2020'} 
                        title={'Software Development'}
                        subTitle={'Strive School'}
                        text={`An online remote program, taught by highly
                            professional teachers, covering both theory and
                            professional training of the following modules.
                            HTML, CSS, Bootstrap, JS+ES6, MongoDB,
                            PostgreSQL, Express, React.js, Redux, ReduxThunk, TypeScript, Node.js, Cloud Technologies`} 
                    />
                    <Items 
                        year={'Nov 2018 - present'} 
                        title={'A - Levels'}
                        subTitle={'Church Hill High'}
                        text={`Application of the Information Technologies in GIS
                          and Forestry, by following coursework. Data
                          analysis and Management, Programming,
                          Geomatics, Database Management, Digital
                          Cartography, Statistics, Remote Sensing, Project
                          Planning and Management, Map editing, Spatial
                          Analysis, Collection and Analysis of LiDAR Data.`} 
                    />
                    {/* <Items 
                        year={'2015 - 2017'} 
                        title={'High School Graduation'}
                        subTitle={'ABC School'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    /> */}
                </div>
            </InnerLayout>
        </ResumeStyles>    
    )
}


export default Experience