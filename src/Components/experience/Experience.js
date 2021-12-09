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
                        year={'2015 - 2020'} 
                        title={'Computer Science Teacher'}
                        subTitle={'Sussex University'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <Items 
                        year={'2015 - Present'} 
                        title={'Full Stack Developer'}
                        subTitle={'Microsoft Studios'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                    <Items 
                        year={'2010 - 2017'} 
                        title={'User Interface Designer'}
                        subTitle={'Google Inc'}
                        text={'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Culpa nihil impedit natus nostrum? Velit accusantium id quos, nihil vel quod.Quas, magni mollitia, aspernatur consequatur accusamus vero eum facere exercitationem velit suscipit ipsam placeat libero. '} 
                    />
                </div>                
            </InnerLayout>
        </ResumeStyles>    
    )
}


export default Experience