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
                Cool 3D simulation of matrix multiplication on the 3D grid. It demonstrates how The matrix can stretch, skew, rotate or even squash the grid to a lower dimension. You can change the value of the matrix and see the effects of that change on the space, as well seeing matrix values such as Eigen vector/value, Column base, Row Base, Null space and the trajectory of the points once the space has been squashed. This analysis is crucial for many ML algorithm. See more feature with Jupyter notebook<a  target="_blank" href='https://github.com/wlaa41/INM702Coursework'>github</a>.
                <br/>
                <br/>
                This project is heavly inspired by the legend Prof. Gilbert Strang, a great open source to learn linear algebra. This is the link to <a target="_blank" href='https://ocw.mit.edu/index.htm'>MIT online classes</a> and <a target="_blank" href='https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'>3b1b videos</a> on Linear algebra. 
                <br/>
                <br/>
                Here I will demonstrate how to use this simulator. Press the middle button in the right side. The graph shows the ideal space multiplies by the <q>I</q> matrix. Press the button at the bottom to change the value of the matrix and look at its effect on the graph. You can switch the top button to toggle between dark and normal mode
                </div>

            </div>
                
            </div>

    )



}