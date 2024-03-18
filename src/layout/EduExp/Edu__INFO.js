import React from 'react'
import CardEdu from './CARD_Edu'
import './Edu__INFO.scss'
// import {ReactComponent as  BG_image} from './info/bg_img/bg_onlineStudy.svg'
import bg_image from './info/bg_img/fabric-dark.png'
import ducati from './ducati.webp'


const EducationINFO = () => {
    return (<>
        <div id='Edu_info' className='EduStrip_info'
        style={{backgroundImage:`url(${bg_image})`,

                    }}
                    >
                
                    <div className='EduStrip_info_GRID'>
                            <CardEdu></CardEdu>
                            {/* <div ></div> */}
                            {/* <BG_image className='lastSVG'/> */}

                    </div>

                   {/* <SkillLogo></SkillLogo>
                   <ColorPick></ColorPick> */}
            </div>
            <div className='EduStrip_info_GRID_container'>
              <img src={ducati} className='EduStrip_info_GRID_container_img' alt="Ducati Motorcycle" />
            </div>          
            </>
    )
}

export default EducationINFO
