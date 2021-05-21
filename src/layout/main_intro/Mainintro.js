import React, {useState,useRef,useLayoutEffect} from 'react'
import  london_vec  from './media/londonfull/londonfull'
import  myavatar_vec  from './media/myavatar/myavatar'
import Nav from '../nav/Nav'

import './Mainintro.scss'
import './myAvatar.scss'

const london_img_attr =london_vec();
const myAvatar_img_attr =myavatar_vec();

function Mainintro(){
    const talkbtnRef = useRef(null)
    const titleRef = useRef(null)



    const [YShift, setYShift] = useState({
        skyline3:       0         ,
        skyline2:       0         ,
        skyline1:       0         ,
        skyline0:       0         ,
        floor:          0         ,
        phonebooth:     0                   
    })

  
    useLayoutEffect(() => {
        window.addEventListener('scroll',  scrollHeandle)
        // setInterval()
        console.log('Starting')

        return () => {
            window.removeEventListener('scroll',scrollHeandle)
            console.log('terminating')
        }
    }, [])

    let classdded=false;

    function scrollHeandle(e)
    {

        const shift=window.scrollY;
        if(shift<555){      // window.scrollY/window.innerHeight when resizing the window height it is better to estimate the difference
            if(classdded) {talkbtnRef.current.classList.remove("navGrid_BtnCon-sp1");  classdded=false}

        
            setYShift({
            skyline3:   (  shift  / 1.2   )      ,
            skyline2:   (  shift  / 1.3   )      ,
            skyline1:   (  shift  / 1.6   )      ,
            skyline0:   (  shift  / 1.9   )      ,
            floor:      (  shift  / 3.5   )      ,
            phonebooth: (  shift  / 3.5   )                
        })
        }
        else{
            console.log(titleRef)
            if(!classdded) {talkbtnRef.current.classList.add("navGrid_BtnCon-sp1"); classdded=true}
        }
    }
        return(
            <>
            <Nav talkbtn={talkbtnRef} title={titleRef}></Nav>
            <section className='Mi_container'>
                <div className='londonfull'>
                    <div className="londonfull__imgcontainer">
                        { london_img_attr.map((element)=>  {
                              return  <img src={element["img"]} alt={element['attr'].key}
                                    style={{
                                        transform: `translate3d(0,${YShift[element['attr'].key]}px,0)`
                                        } }
                                    {...element['attr']} />
                            }
                        )}
                        <div className='night'></div>
                        <div className='myAvatarStrip'>    

                                <div className='myAvatarStrip_spacer-right'>
                                </div>
                               <div className='myAvatarStrip_Ava'>
                                <div className='vertical_spacer'></div>
                                <div className='myAvatarContainer'>
                                    { myAvatar_img_attr.map((element)=>  {
                                            return  <img src={element["img"]} alt={element['attr'].key}
                                                    {...element['attr']} />
                                            })}
                                </div>
                               
                              </div>
                              <div className='myAvatarStrip_spacer-left'>
                                </div>

                        </div>
                    </div>
                </div>

               
             </section>
            </>
        );


    

}
export default Mainintro;

