import React  from 'react'
// import brickwallSmall from './brickwallSmall2.png';

import './divider.scss'

export default function Divider({style}){
    // console.log({style})
    return <div 
        style={{...style , color:"#333333",
         backgroundImage: `url(require("./brickwallSmall2.png"))` }}
          className='divider'>

          </div>
}