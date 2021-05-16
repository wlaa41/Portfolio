import React from 'react'
import './educationStrip.scss'
import EducationINFO from './INFO_Edu'

const EducationStrip = () => {
    return (
        <div className='EduStrip'>
            <div className='EduStrip_Title'>
                <h2  className='EduStrip_Title-h2 '> 
                Educatioln and Skills
                </h2>
            </div>
                <div className='EduStrip_bg'>
                    <div className='EduStrip_bg-deep'>
                        <div className='EduStrip_bg-deep-blue'>

                        </div>
                        <div className='EduStrip_bg-deep-white'>

                        </div>
                    </div>
                    <div className='EduStrip_bg-shadow'>
                
                    </div>
                    <div className='EduStrip_bg-top'>
                           

                    </div>
                </div>

                <EducationINFO></EducationINFO>


        </div>
    )
}

export default EducationStrip
