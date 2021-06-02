import React from 'react'
import SkillLogo from '../skill_logo/SkillLogo'
import ColorPick from '../themepick/ColorPick'
import CardEdu from './CARD_Edu'
import './Edu__INFO.scss'
import bg_image from './info/fabric-dark.png'
// import bg_image from './info/fancy-deboss.png'
// import bg_image from './info/pinstripe-dark.png'
// import bg_image from './info/green-dust-and-scratches.png'
// import bg_image from './info/subtle-dark-vertical.png'
// import bg_image from './info/bright-squares.png'
// import bg_image from './info/asfalt-dark.png'


const EducationINFO = () => {
    return (
        <div className='EduStrip_info'
        style={{backgroundImage:`url(${bg_image})`,
                    }}>
                
                    <div className='EduStrip_info_GRID'>
                            <CardEdu></CardEdu>

                    </div>
                   <SkillLogo></SkillLogo>
                   <ColorPick></ColorPick>
            </div>
    )
}

export default EducationINFO
