import React from 'react'
import sprite from './ICON_sprite.svg'
import './CARD_edu.scss'
import './_CARD_edu.scss'


import {info} from './info/info'

const CardEdu = () => {




    return (
            <>
            {  info.map( (ele)=>{ return <div  className='CardEdu'>
                <div className='CardEdu_IMG_Con'>

                        <img src={ele.image}></img>
                        {/* <img src='https://placebeard.it/640x360'></img> */}
                    </div>
                
                <div className='CardEdu_INFO_Con'>

                    <div  className="CardEdu_header">
                        {ele.icon}
                        <h3 extrainfo={ele.date} className="CardEdu_header_main_title">
                        {ele.title}  <span className="CardEdu_header_year"> </span></h3>
                        
                    </div>
                    <h4 className="CardEdu_second_title" >{ele.subtitle}</h4>
                    <p className="CardEdu_paragraph">
                    {ele.brief}
                    </p>

                </div>
            </div>



            })  }
            </>
  



    )
}

export default CardEdu


// <div  className='CardEdu'>
            //     <div className='CardEdu_IMG_Con'>
            //         <div className='CardEdu_IMG_Con_img'>
            //             <img src='https://placebeard.it/640x360'></img>
            //         </div>
            //     </div>
            //     <div extrainfo='19-present' className="CardEdu_header">
            //         {/* <svg className="CardEdu_header_icon">
            //         <use href={sprite+"#icon-graduation-cap"}>
            //         </use>
            //         </svg> */}
            //         <h3 extrainfo='19-present' className="CardEdu_header_main_title">MSc Artificial  intelligance  <span className="CardEdu_header_year"> </span></h3>
                    
            //     </div>
            //     <h4 className="CardEdu_second_title" >First-Class Scored</h4>
            //     <p className="CardEdu_paragraph">eremy tends to favor em, because of the ability to control an area of a design. As in, scale the type in that specific area relatively. I have tended to like rem because of the ability to scale type across </p>
    
    
            // </div>
   