import React from 'react'
// import Nav from '../layout/nav/Nav'
import Mainintro from '../layout/main_intro/Mainintro'
import CardStrip from '../layout/cardStrip/CardStrip'
import Feat_proj from '../layout/feat_proj/Feat_proj'
import Divider from '../components/divider/divider'
import SkillLogo from '../layout/skill_logo/SkillLogo'
import EducationStrip from '../layout/education/educationStrip'
import  {ReactComponent as Skyline3  }  from "../layout/main_intro/media/londonfull/skyline3.svg"   
import Foot from '../layout/footer/footer'
// import CMAIN from '../layout/main_intro/CMAIN'
// import london_SVGs from '../layout/main_intro/media/londonfull copy/londonfull'
// import Nav from './Layout/Nav'
// import Mainintro from '../Layout/Mainintro'


class Homepage extends React.Component{

    render(){
        return(
            <>
                {/* <Nav  /> */}
                {/* <CMAIN></CMAIN> */}
                <Mainintro/>
                <div style={{height:'10vh',background:'white' ,zIndex:'99',transformStyle:'preserve-3d'}}></div>
                {/* <SkillLogo/> */}
                {/* <Divider style={{height:"25vh"}} ></Divider> */}
                <CardStrip></CardStrip>
                <Feat_proj></Feat_proj>

               <EducationStrip></EducationStrip>
                 <Foot></Foot>
                 {/* <section style={{height: "100vh" }}></section> */}

            </>
            
        );
    }

}
export default Homepage;