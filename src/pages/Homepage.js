import React from 'react'
import Mainintro from '../layout/main_intro/Mainintro'
import CardStrip from '../layout/cardStrip/CardStrip'
import Feat_proj from '../layout/feat_proj/Feat_proj' 
import Foot from '../layout/footer/footer'
import EduExpStrip from '../layout/EduExp/educationStrip'
import Brief from '../layout/brief/Brief'
import Divider from '../components/divider/divider'
import CitySpark from '../components/citySpark/CitySpark'
import VideoStripe from '../components/VideoStripe/VideoStripe'

class Homepage extends React.Component{

    render(){
        return(
            <div id='homePage'>
                <Brief></Brief>
                <Mainintro/>




               
                <CardStrip></CardStrip>
                
                <CitySpark/>
                <Feat_proj></Feat_proj>
                <VideoStripe/>


                {/* <EducationStrip></EducationStrip> */}
                       {/* <SkillLogo></SkillLogo> */}
                {/* <ColorPick></ColorPick> */}
                <EduExpStrip></EduExpStrip>
         
                 <Foot> </Foot>

                 
            </div>
            
        );
    }

}
export default Homepage;