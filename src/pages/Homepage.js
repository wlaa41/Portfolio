import React from 'react'
import Nav from '../layout/nav/Nav'
import Mainintro from '../layout/main_intro/Mainintro'
import CardStrip from '../layout/cardStrip/CardStrip'
import Feat_proj from '../layout/feat_proj/Feat_proj'
import Divider from '../components/divider/divider'
import SkillLogo from '../layout/skill_logo/SkillLogo'
import EducationStrip from '../layout/education/educationStrip'
import  {ReactComponent as Skyline3  }  from "../layout/main_intro/media/londonfull/skyline3.svg"   
// import CMAIN from '../layout/main_intro/CMAIN'
// import london_SVGs from '../layout/main_intro/media/londonfull copy/londonfull'
// import Nav from './Layout/Nav'
// import Mainintro from '../Layout/Mainintro'


class Homepage extends React.Component{

    render(){
        return(
            <div>
                <Nav  />
                {/* <CMAIN></CMAIN> */}
                <Mainintro/>
                <SkillLogo/>
                {/* <Divider style={{height:"25vh"}} ></Divider> */}
                <CardStrip></CardStrip>
                {/* <Divider style={{height:"25vh",background: 'none', backgroundColor:'white;'}} ></Divider> */}
               <Feat_proj></Feat_proj>

               <EducationStrip></EducationStrip>
                 <h1> Hello World {this.props.visitor} </h1>
                 {/* <Skyline3></Skyline3> */}
                 {/* {london_SVGs.map((Elem)=>{
                     return <div> <Elem></Elem> </div>
                 })} */}
                
                 
                 <section style={{height: "100vh" }}></section>

            </div>
            
        );
    }

}
export default Homepage;