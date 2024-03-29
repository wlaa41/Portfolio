import React  from 'react'
import StackCard from './StackCard'
import info from './info/info'
import './StackCard.scss'


export default function StakContainer(){
    return(
    
    <div className="stackstrip_container">
       {info().map((elem)=>
       <StackCard key={elem.title}  info={{...elem}}></StackCard>
       )}
    </div>
        

    )}