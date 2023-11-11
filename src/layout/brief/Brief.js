import React,{useEffect}  from 'react'
import './Brief.scss'
import {ReactComponent  as CloseSVG} from './iconfinder_4115230_cancel_close_delete_icon.svg'
import Paragraph from './Paragraph'
import motor from './bengali.png'



const Brief = ()=>{

        function close(e){
                // e.target.id ==='Brief'? document.getElementById('Brief').classList.remove('Brief-show'):null
                if(e.target.id ==='Brief') document.getElementById('Brief').classList.remove('Brief-show')
                
                // ALLLOW THE PAGE TO SCROL AGAIN
                // const scrollY = document.body.style.top;
                document.body.style.overflow = 'auto';
                // document.body.style.top = '';
                // window.scrollTo(0, parseInt(scrollY || '0') * -1);
                
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
                                        <h2 className='Brief_info-Parag_Hello'>Hello, I am Will.</h2>
                                        <Paragraph />

                                </div>
                        
                                <div className="dynamic">
                                <ul className="dynamic_Con">
                                        <li>Hi, I'm Will, an AI and Robotics Innovator.</li>
                                        <li>Explore my professional milestones and achievements.</li>
                                        <li>Dive into robotics expertise and motorbike racing adventures.</li>
                                </ul>   
                                </div>
                        </div>


                   </div>
           

           </section>
        );
    

}
export default Brief;