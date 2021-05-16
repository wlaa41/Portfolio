import React from 'react'
import './StackCard.scss'

export default function StackCard({info}) {
    
    // console.log(info)
    const {title,subtitle,brief,image} = info;

    return (
        <div className="stackCard" 
            style={{ 
            backgroundImage:`linear-gradient(to right,
             rgba(92, 186, 241, 1) 20%,
             rgba(92, 186, 241, .5) 60%,
             rgba(3, 3, 3, 0.144),
             rgba(46, 46, 46, 0.068)),
             radial-gradient(ellipse at top right, rgb(255, 255, 255), transparent),
             url(${image})` }} >
            <h3 className="stackCard_title" subtitle={subtitle}>{title}</h3>
                <div className="">
                    <p className='stackCard_brief'>
                    {brief}
                    </p>

                 </div>
         </div>
    )
}



// rgba(241, 241, 241, 1) 20%,
// rgba(241, 241, 241, .5) 60%,