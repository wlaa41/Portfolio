import React  from 'react'
import Arrow from '../Arrow'
// import brickwallSmall from './brickwallSmall2.png';

import './divider.scss'

export default function Divider({style}){
    // console.log({style})
    return<div className='divider'>
            <svg width="0" height="0"><defs><clipPath id="myCurve" clipPathUnits="objectBoundingBox"><path d="M1,1H0V0A.06.06,0,0,1,.06,0C.17.23.35.85.5.85S.83.31.94,0C1,0,1,0,1,0Z" /> </clipPath> </defs>    </svg>
        <Arrow></Arrow>
    </div>
}