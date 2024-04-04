import React from 'react';
import CardEdu from './CARD_Edu';
import './Edu__INFO.scss';
import ducati from '../../assets/Motorbike-black.webp';
import ducatiSmall from '../../assets/Motorbike-black-small.webp';
// import cloud1 from './info/cloud/cloud3.png';
// import cloud2 from './info/cloud/13.png';

const EducationINFO = () => {
    return (
        <>
            <div className='EduStrip_info'>
                <div id='Edu_info' className='EduStrip_info_GRID'>
                    <CardEdu></CardEdu>
                </div>
            </div>
            <div className='EduStrip_info_GRID_container'>
                <picture>
                    <source media="(max-width: 768px)" srcSet={ducatiSmall} />
                    <source media="(min-width: 769px)" srcSet={ducati} />
                    {/* The img element is required as a fallback for browsers that do not support the picture element. */}
                    <img loading="lazy" src={ducati} className='EduStrip_info_GRID_container_img' alt="Ducati Motorcycle" />
                </picture>
                <div className='EduStrip_info_GRID_container_cloud_container'>
                    {/* <img loading="lazy" src={cloud1} alt='cloud photo' className='clouds cloud1'/> */}
                    {/* <img loading="lazy" className='EduStrip_info_GRID_container_cloud cloud2'/> */}
                    {/* <img loading="lazy" src={cloud1} alt='cloud photo' className='clouds cloud3'/> */}
                </div>
            </div>          
        </>
    );
}

export default EducationINFO;