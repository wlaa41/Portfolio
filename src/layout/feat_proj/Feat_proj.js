import React ,{useState} from 'react';
import './Feat_proj.scss';
import './Feat_projCanvs.scss'
import Info from './Feat_projInfo';
import './Feat_projBtn.scss';
import './Feat_projBtn_MatEditor.scss'
import MyPlotly from '../../components/plotly/MyPlotly'
import NumericInput from '../../components/numericInput/NumericInput'



export default function Feat_proj(){
    const [mulMatrix, setMulMatrix] = useState([1,0,0,   0,2,0,   0,0,1])    
    const [bgcolor, setBGcolor] = useState("#eeeeee")
    const [showCanvas, setShowCanvas] = useState(false)
    function toggleShowCanvas(){
        // alert('what')
        setShowCanvas((s)=>!s)
    }

    function onMatChange(value,index)
    {
        console.log('hello00000000')
        console.log(value,'  index :',index)
        let temp  = [...mulMatrix]
        temp[index]=value
        setMulMatrix(temp)
    }
    function colorChanged(){
        // setBGcolor((c)=>c==="#eeeeee"?"#111111":"#eeeeee")
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
            <div className={'ftStrip_canvas ' + (showCanvas && ' moveOutScreen')}>
                <div className='ftStrip_canvas_btnCon' >&#8505;
                    <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-color' onClick={colorChanged}>^</div>
                    <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-info' onClick={toggleShowCanvas}>
                    {!showCanvas? `✖` : "ℹ"}</div>



                    <div className='ftStrip_canvas_btnCon_btn ftStrip_canvas_btnCon_btn-matEditor'>
                    &#8964;
                    <input className='ftStrip_canvas_btnCon_btn-matEditor_checkbox'  type='checkbox'/> 
                           <div className='ftStrip_canvas_btnCon_btn-matEditor_EditorCon'>
                                <input className='ftStrip_canvas_btnCon_btn-matEditor_EditorCon_checkbox'  type='checkbox'/> 

                             {mulMatrix.map((elem,i)=> 
                                <NumericInput initvalue={elem} change={onMatChange} key={`a${i}`} index={i}/>
                            )}
                        
                        </div>
                    </div>


                </div>


                <div className='ftStrip_canvas_Decor-1'>
                    <div className='ftStrip_canvas_Decor-2'>
                        <MyPlotly mulMatrix={mulMatrix} bgcolor={bgcolor}></MyPlotly>
                    </div>
                </div>

                
            </div>
            </div>


    </section>) 



}