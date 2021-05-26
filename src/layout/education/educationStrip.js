import React from 'react'
import SkillLogo from '../skill_logo/SkillLogo'
import './educationStrip.scss'
import EducationINFO from './INFO_Edu'

const EducationStrip = () => {
    return (
        <div className='EduStrip'>
            {/* <div className='EduStrip_Title'>
                <div  className='EduStrip_Title-h2 '> 
                <h2 className='EduStrip_Title-h2-Exp'>Experience
                 </h2>
                 <h2 className='EduStrip_Title-h2-and'> & </h2>
                 <h2 className='EduStrip_Title-h2-Edu'>
                  Education</h2>
                </div>
            </div> */}
                <div className='EduStrip_bg'>
                    <div className='EduStrip_bg-deep'>
                    <div className='EduStrip_Title'>
                <div  className='EduStrip_Title-h2 '> 
                <h2 className='EduStrip_Title-h2-Exp'>Experience
                 </h2>
                 <h2 className='EduStrip_Title-h2-and'> & </h2>
                 <h2 className='EduStrip_Title-h2-Edu'>
                  Education</h2>
                </div>
            </div>
                        <div className='EduStrip_bg-deep-blue'>

                        </div>
                        <div className='EduStrip_bg-deep-white'>

                        </div>
                    </div>
                    <div className='EduStrip_bg-shadowWrapper'>
                        <div className='EduStrip_bg-shadowWrapper-shadow'>
                    
                        </div>
                    </div>
                    <div className='EduStrip_bg-top'>
                           

                    </div>
                </div>

                <EducationINFO></EducationINFO>


                <SkillLogo></SkillLogo>



        </div>
    )
}

export default EducationStrip
