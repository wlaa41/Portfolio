import React from 'react'
import CardEdu from './CARD_Edu'
import './Edu__INFO.scss'
import bg_image from './info/bg_img/fabric-dark.png'
import ducati from './info/Motorbike-black.webp'
// import cloud1 from './info/cloud/cloud3.png'
// import cloud2 from './info/cloud/13.png'

const EducationINFO = () => {
    return (<>
        <div id='Edu_info' className='EduStrip_info'
        style={{backgroundImage:`url(${bg_image})`,
                    }} >
                    <div className='EduStrip_info_GRID'>
                            <CardEdu></CardEdu>
                    </div>
            </div>
            <div className='EduStrip_info_GRID_container'>

              <img src={ducati} className='EduStrip_info_GRID_container_img' alt="Ducati Motorcycle" />
              <div className='EduStrip_info_GRID_container_cloud_container'>
                        {/* <img src={cloud1} alt='cloud photo' className='clouds cloud1'/> */}
                        {/* <img className='EduStrip_info_GRID_container_cloud cloud2'/> */}
                        {/* <img src={cloud1} alt='cloud photo' className='clouds cloud3'/> */}
                </div>
            </div>          
            </>
    )
}

export default EducationINFO
