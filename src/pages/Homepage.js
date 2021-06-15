import React from 'react'
// import Nav from '../layout/nav/Nav'
import Mainintro from '../layout/main_intro/Mainintro'
import CardStrip from '../layout/cardStrip/CardStrip'
import Feat_proj from '../layout/feat_proj/Feat_proj'
// import Divider from '../components/divider/divider'
// import SkillLogo from '../layout/skill_logo/SkillLogo'
// import EducationStrip from '../layout/education/educationStrip'
// import  {ReactComponent as Skyline3  }  from "../layout/main_intro/media/londonfull/skyline3.svg"   
import Foot from '../layout/footer/footer'
import EduExpStrip from '../layout/EduExp/educationStrip'
import SkillLogo from '../layout/skill_logo/SkillLogo'
import ColorPick from '../layout/themepick/ColorPick'
import bg_image from './asfalt-dark.png'
import Brief from '../layout/brief/Brief'
// import CMAIN from '../layout/main_intro/CMAIN'
// import london_SVGs from '../layout/main_intro/media/londonfull copy/londonfull'
// import Nav from './Layout/Nav'
// import Mainintro from '../Layout/Mainintro'


class Homepage extends React.Component{

    render(){
        return(
            <>
                <Brief></Brief>
                <Mainintro/>
                {/* <div 
                style={{height:'5vh',
                borderTop:'5px solid lightgray',
                transform: 'translate(0)',
                position: 'relative',
                backgroundColor:'white' ,
                zIndex:'99',
                backgroundImage:`url(${bg_image})`
                }}></div> */}



               
                <CardStrip></CardStrip>
                

                <Feat_proj></Feat_proj>

                {/* <EducationStrip></EducationStrip> */}
                <EduExpStrip></EduExpStrip>
                {/* <SkillLogo></SkillLogo> */}
                {/* <ColorPick></ColorPick> */}
                 <Foot> </Foot>

                 
            </>
            
        );
    }

}
export default Homepage;