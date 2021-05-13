import React ,{useState} from 'react';
import './Feat_proj.scss';
import './Feat_projCanvs.scss'
import Info from './Feat_projInfo';
import MyPlotly from '../../components/plotly/MyPlotly'

export default function Feat_proj(){
    const [show, setShow] = useState(false)

    function toggleShow(){
        setShow((s)=>!s)
    }

    return(
        
    <section className='ftStrip'>
    
        <div className="ftStrip_titleCon">
            <div className='ftStrip_titleCon'>
            <div className='ftStrip_titleCon-Feature'>Feature
                <div className='ftStrip_titleCon-Project'>Project</div>
            </div>
            
            </div>
        </div>

            <div className='ftStrip_canvasCon'>ℹ
            <Info></Info>
            <div className={'ftStrip_canvas ' + (show && ' moveOutScreen')}>
                <div className='ftStrip_canvas_btnCon' >&#8505;
                    <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-1'>^</div>
                    <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-2' onClick={toggleShow}>
                    {!show? "ℹ" : `✖`}</div>
                    <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-3'>&#8964;</div>
                </div>


                <div className='ftStrip_canvas_Decor-1'>
                    <div className='ftStrip_canvas_Decor-2'>
                        <MyPlotly></MyPlotly>
                    </div>
                </div>

                
            </div>
            </div>


    </section>) 



}