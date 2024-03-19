import React from 'react'
import Mainintro from '../components/main_intro/Mainintro'
import CardStrip from '../components/cardStrip/CardStrip'
import Feat_proj from '../layout/feat_proj/Feat_proj' 
import Foot from '../layout/footer/footer'
import Brief from '../components/brief/Brief'
import CitySpark from '../components/citySpark/CitySpark'
import VideoStripe from '../components/VideoStripe/VideoStripe'
import RoboticProject from '../components/RoboticProject/RoboticProject'
import { videosList } from '../components/VideoStripe/info/info';
import EduExpStrip from '../components/educationExperience/educationStrip'


class Homepage extends React.Component{

    render(){
        return(
            <div id='homePage'>
                <Brief></Brief>
                <Mainintro/>
                <CardStrip></CardStrip>
                <VideoStripe videoData={videosList[0]}/>
                <CitySpark/>
                <Feat_proj></Feat_proj>
                <RoboticProject/>
                <VideoStripe videoData={videosList[1]}/>
                <EduExpStrip/>
                 <Foot> </Foot>
            </div>
            
        );
    }

}
export default Homepage;