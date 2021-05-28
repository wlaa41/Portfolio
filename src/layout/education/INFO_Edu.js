import React from 'react'
import CardEdu from './CARD_Edu'
import './CON_NFO.scss'

const EducationINFO = () => {
    return (
        <div className='EduStrip_info'>
                <div className='EduStrip_info_grid'>
                
                    <div className='EduStrip_info_grid_mainFlex'>
                            <CardEdu></CardEdu>
                            <CardEdu></CardEdu>
                            <CardEdu></CardEdu>
                            <CardEdu></CardEdu>
                            <CardEdu></CardEdu>
                            <CardEdu></CardEdu>
                            <CardEdu></CardEdu>


                    </div>
                    <div className='EduStrip_info_grid_End-Decoration'>

                    </div>
                </div>

            </div>
    )
}

export default EducationINFO
