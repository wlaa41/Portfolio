import React  from 'react';
import './Feat_projInfo.scss';

export default function Info(){
    // const [show, setShow] = useState(false)

    // function toggleShow(){
    //     setShow((s)=>!s)
    // }

    return(
        
            <div className='ftStrip_canvas_infoMain'>
            <div className='ftStrip_canvas_infoCon'>

                <div className='ftStrip_canvas_infoCon_Title'>Matrix Space Manpulation <br />Abstract:</div>
                <div className='ftStrip_canvas_infoCon_Body'>
                {/* <br/> */}
                The projects shows the linear Manpulationin space caused by multiplying a matrix. It is simulated with
                python/Javascript code. Then the 3d drawing is ploted using plotly library. You can get the whole code 
                through <a  target="_blank" href='https://github.com/wlaa41/INM702Coursework'>github</a>.
                <br/>
                <br/>
                The shows the base vector in gray and then calculate the eigen value and vector. It shows the colum space and the row space.
                The project is heavly inspired by the legend Prof. Gilbert Strang and <a target="_blank" href='https://ocw.mit.edu/index.htm'>MIT online classes</a>. 
                The task is well explained as it was part of my theises extra researsh.
                <br/>
                <br/>
                The simulationn to the right of the screen allows you to manpulate the space and see the effect 
                simply click on the mattrix button. change the value of the matrix and change will be reflected 
                on the graph. i.e you can see the 'null space' and how it is perpendicular to the column space.
                This fact is essential in many machine learning algorithm.
                Feel free to send me a massage to ask for more explaination..
                </div>
            </div>
                
            </div>

    )



}