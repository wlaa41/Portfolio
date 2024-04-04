import React from 'react'
import './StackCard.scss'
import './_StackCard.scss'

export default function StackCard({info}) {
    
    // console.log(info)
    const {title,subtitle,brief,image} = info;





    return (
        <div title="Double click to open"  onDoubleClick={()=>window.open('https://github.com/rutall-co/clearpath_university-campus','_blank')}
         target="_blank" href="https://www.linkedin.com/in/smartwill/"  className="stackCard" >
             <div className='stackCard_Conimg'>
             <img loading="lazy" className='stackCard_Conimg_img' src={image} alt={image.alt}/>
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
