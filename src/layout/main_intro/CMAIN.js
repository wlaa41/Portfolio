import React, {useState,useEffect,useLayoutEffect} from 'react'
import  SVGs  from './media/copy/SVGs'
import  myavatar_vec  from './media/myavatar/myavatar'
import './Mainintro.scss'
import './myAvatar.scss'

const myAvatar_img_attr =myavatar_vec();

function CMAIN(){

        return(
            <section className='Mi_container'>
                <div className='londonfull'>
                    <div className="londonfull__imgcontainer">
                        <SVGs></SVGs>
                        {/* { london_img_attr.map((element)=>  {
                              return  <img src={element["img"]} alt={element['attr'].key}
                                    style={{
                                        // top:`translateY(${YShift[element['attr'].key]}px)`
                                        transform: `translateY(${YShift[element['attr'].key]}px)`
                                        } }
                                    {...element['attr']} />
                            }
                        )} */}
                        <div className='night'></div>
                        <div className='myAvatarStrip'>    

                                <div className='myAvatarStrip_spacer-right'>
                                </div>
                               <div className='myAvatarStrip_Ava'>
                                <div className='vertical_spacer'></div>
                                <div className='myAvatarContainer'>
                                    {/* { myAvatar_img_attr.map((element)=>  {
                                            return  <img src={element["img"]} alt={element['attr'].key}
                                                style={{
                                                    // top:`translateY(${YShift[element['attr'].key]}px)`
                                                    transform: `translateY(${YShift[element['attr'].key]}px)`
                                                    } }
                                                mad={"transform: translateY(" + Math.round(YShift[element['attr'].key]) +"px);"}
                                                    {...element['attr']} />
                                            }
                                        )
                                        } */}
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