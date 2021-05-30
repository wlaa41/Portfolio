import React from 'react'
import SkillLogo from '../skill_logo/SkillLogo'
import './educationStrip.scss'
import EducationINFO from './Edu__INFO'

const EduExpStrip = () => {
    return (
        <div className='EduStrip'>
                    <div className=' EduStrip__title EduStrip__title__Education'>
 
                        Education
                    </div>
                    <div className='EduStrip__title__Experience EduStrip__title'>
     

                        <div className='remove__skew'>

                        Experience

                        </div>
                    </div>

                 <div className='EduStrip__blue-strip'>

                 </div>
                    <div className='EduStrip__CardContainer'>
                            
                        <EducationINFO></EducationINFO>


                    </div>



                {/* <SkillLogo></SkillLogo> */}



        </div>
    )
}

export default EduExpStrip
