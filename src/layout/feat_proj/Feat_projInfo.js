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
                <div className='ftStrip_canvas_infoCon_Title'>Matrix Space Manipulation<br />Abstract:</div>
                <div className='ftStrip_canvas_infoCon_Body'>
                Engage with a dynamic 3D simulation that visualizes matrix multiplication's effects on a 3D grid. Observe as matrices stretch, skew, rotate, or compress space. Interactive elements allow alteration of matrix values, revealing changes in space such as eigenvectors/values, bases, null spaces, and point trajectories post-compression — critical for numerous ML algorithms. Discover more features with Jupyter notebook on <a target="_blank" href='https://github.com/wlaa41/INM702Coursework'>GitHub</a>.
                <br/><br/>
                This project draws inspiration from Prof. Gilbert Strang's legendary teachings. Explore linear algebra through <a target="_blank" href='https://ocw.mit.edu/index.htm'>MIT online classes</a> and <a target="_blank" href='https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab'>3b1b videos</a>. 
                <br/><br/>
                Learn to navigate this simulator: press the center-right button to see the default space multiplied by the identity matrix. Modify matrix values using the bottom button and observe the transformation. Toggle dark or standard mode with the top button.
                </div>
            </div>            
        </div>
    )}