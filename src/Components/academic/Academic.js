import React from 'react';
//import styled from 'styled-components';
import {InnerLayout} from '../../styles/Layouts';
//import Title from '../Title';
import SmallTitle from '../SmallTitle';
//import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SchoolIcon from '@material-ui/icons/School';
import Items from '../Items';
import { ResumeStyles } from '../../styles/ResumeStyles';

function Experience() {
    //const briefcase = <BusinessCenterIcon />
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
                        year={'Nov 2018 - present'} 
                        title={'Master in Forest Information Technology'}
                        subTitle={'EBERSWALDE UNIVERSITY OF SUSTAINABLE DEVELOPMENT, GERMANY'}
                        text={`Application of the Information Technologies in GIS
                          and Forestry, by following coursework. Data
                          analysis and Management, Programming,
                          Geomatics, Database Management, Digital
                          Cartography, Statistics, Remote Sensing, Project
                          Planning and Management, Map editing, Spatial
                          Analysis, Collection and Analysis of LiDAR Data.`} 
                        link = {'https://www.hnee.de/de/Studium/Masterstudiengnge/Forest-Information-Technology/Forest-Information-Technology-M.Sc.-E1833.htm'}
                    />                   
                </div>
            </InnerLayout>
        </ResumeStyles>    
    )
}


export default Experience