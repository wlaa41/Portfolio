import React, {useState,useEffect,useLayoutEffect} from 'react'
import  SVGs  from './media/copy/SVGs'
import  myavatar_vec  from './media/myavatar/myavatar'
import './Mainintro.scss'
import './myAvatar.scss'


function CMAIN(){

        return(
            <section className='Mi_container'>
                <div className='londonfull'>
                    <div className="londonfull__imgcontainer">
                        <SVGs></SVGs>
                        <div className='night'></div>
                        <div className='myAvatarStrip'>    
                                <div className='myAvatarStrip_spacer-right'>
                                </div>
                               <div className='myAvatarStrip_Ava'>
                                <div className='vertical_spacer'></div>
                                <div className='myAvatarContainer'>
                                </div>
                              </div>
                              <div className='myAvatarStrip_spacer-left'>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
        );


    

}
export default CMAIN;