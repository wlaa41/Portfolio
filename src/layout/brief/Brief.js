import React,{useEffect}  from 'react'
import './Brief.scss'
import {ReactComponent  as CloseSVG} from './iconfinder_4115230_cancel_close_delete_icon.svg'
import Paragraph from './Paragraph'
import motor from './motor.jpg'



const Brief = ()=>{

        function close(e){
                // e.target.id ==='Brief'? document.getElementById('Brief').classList.remove('Brief-show'):null
                if(e.target.id ==='Brief') document.getElementById('Brief').classList.remove('Brief-show')
                // console.log(e.target.id)
        }
        return(
           <section id='Brief' className='Brief' onClick={close}>
            

                   <div className='Brief_Con Brief-show_Con'>
                        <div className='Brief_Con_imgCon'>
                                <img src={motor}/>
                        </div>
                        <div className='Brief_close'>
                                <CloseSVG className='Brief_close-btn' onClick={()=>document.getElementById('Brief').classList.remove('Brief-show')}/>
                        </div>

                        <div className='Brief_info'>

                                <div className='Brief_info-Parag'>
                                        <h2 className='Brief_info-Parag_Hello'>Hello, I am Walla.</h2>
                                        <Paragraph />
                                </div>
                        
                                <div className="dynamic">
                                        <ul className="dynamic_Con">
                                        <li>Hi,</li>
                                        <li>Welcome to my page.</li>
                                        <li> I hope you'll find what you looking for.</li>
                                        </ul>
                                </div>
                        </div>
      

                   </div>
           
           </section>
        );
    

}
export default Brief;