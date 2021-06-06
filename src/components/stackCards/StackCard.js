import React from 'react'
import './StackCard.scss'
import './_StackCard.scss'

export default function StackCard({info}) {
    
    // console.log(info)
    const {title,subtitle,brief,image} = info;

    return (
        <div  className="stackCard" >
             <div className='stackCard_Conimg'>
             <img className='stackCard_Conimg_img' src={image} />
             </div>
            <h3 className="stackCard_title" subtitle={subtitle}>{title}</h3>
                <div className="">
                    <p className='stackCard_brief'>
                    {brief}
                    </p>

                 </div>
         </div>
    )
}
