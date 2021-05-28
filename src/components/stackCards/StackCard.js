import React from 'react'
import './StackCard.scss'
import './_StackCard.scss'

export default function StackCard({info}) {
    
    // console.log(info)
    const {title,subtitle,brief,image} = info;

    return (
        <div  className="stackCard" 
            // style={{ 
            // backgroundImage:`linear-gradient(to right,
            //  rgba(62, 166, 222, .5) 20%,
            //  rgba(62, 166, 222, .3) 30%,
            //  rgba(3, 3, 3, 0.2),
            //  rgba(46, 46, 46, 0.168)),
            //  radial-gradient(ellipse at top right, rgb(255, 255, 255), transparent),
            //  url(${image})` }}
             >
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



// rgba(241, 241, 241, 1) 20%,
// rgba(241, 241, 241, .5) 60%,