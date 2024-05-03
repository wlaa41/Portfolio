import './Brief.scss'
import {ReactComponent  as CloseSVG} from './iconfinder_4115230_cancel_close_delete_icon.svg'
import Paragraph from './Paragraph'
// import motor from './DALL·E 2024-02-15 15.56.12 - A hyper-realistic motorcycle, reminiscent of a Ducati, is showcased on a panoramic black canvas. The scene is heavily adorned with vivid coding lines .webp'



const Brief = ()=>{

        function close(e){
                if(e.target.id ==='Brief') document.getElementById('Brief').classList.remove('Brief-show')
 
                document.body.style.overflow = 'auto';

        }
        return(
           <section id='Brief' className='Brief' onClick={close}>

                   <div className='Brief_Con Brief-show_Con'>
                        <div className='Brief_Con_imgCon'>
                                {/* <img loading="lazy" src={motor}/> */}
                        </div>
                        <div className='Brief_close'>
                                <CloseSVG className='Brief_close-btn' onClick={()=>document.getElementById('Brief').classList.remove('Brief-show')}/>
                        </div>

                        <div className='Brief_info'>

                                <div className='Brief_info-Parag'>
                                        <h2 className='Brief_info-Parag_Hello'> Will Jamous: Guiding and Growing in Technology</h2>
                                        <Paragraph />

                                </div>
                        
                                <div className="dynamic">
                                <ul className="dynamic_Con">
                                        <li></li>
                                        <li>Welcome, I'm  Will. Docker, DevOps and more....</li>
                                        <li>Front to backend, in the cloud, with IaC want to learn more...</li>
                                        <li>With 3D simulations, robotics, AI I explore.</li>
                                        {/* <li>Web, software's shine, robotics, AI's line, motorbike's vine.</li> */}
                                        {/* <li>Web, software's shine, robotics, AI's line, motorbike's vine.</li> */}
                                </ul>   
                                </div>
                        </div>


                   </div>
           

           </section>
        );
    

}
export default Brief;