import React ,{useState} from 'react';
import './Feat_projInfo.scss';

export default function Info(){
    const [show, setShow] = useState(false)

    function toggleShow(){
        setShow((s)=>!s)
    }

    return(
        
   
            <div className='ftStrip_canvas_infoMain'>
            <div className='ftStrip_canvas_infoCon'>

                <div className='ftStrip_canvas_infoCon_Title-vertical'>Matrix 3D Space</div>
                <div className='ftStrip_canvas_infoCon_Title'>Abstract:</div>
                <div className='ftStrip_canvas_infoCon_Body'>
                {/* <br/> */}
                The graph shows so and so and so but I m not sure if it will ever stop and go to the next line. There is only one way to find this.
                <br/>
                <br/>
                We can add another line here as well and we can write pretty much anything we want 
                this does not have to made sense rather just to fill the space and I am not sure 
                why I am still writihng but I will stop..
                <br/>
                <br/>
                The graph shows so and so and so but I m not sure if it will ever stop and go to the next line. There is only one way to find this.
                The graph shows so and so and so but I m not sure if it will ever stop and go to the next line. There is only one way to find this.
                The graph shows so and so and so but I m not sure if it will ever stop and go to the next line. There is only one way to find this.

                </div>
            </div>
                
            </div>

    )



}