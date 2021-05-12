import React, {useState,useEffect} from 'react'
import  london_vec  from '../../media/vectors/londonfull/londonfull'
import  myavatar_vec  from '../../media/vectors/myavatar/myavatar'
import './Mainintro.scss'
import './myAvatar.scss'

const london_img_attr =london_vec();
const myAvatar_img_attr =myavatar_vec();

function Mainintro(){
    const [YShift, setYShift] = useState({
        skyline3:       0         ,
        skyline2:       0         ,
        skyline1:       0         ,
        skyline0:       0         ,
        floor:          0         ,
        phonebooth:     0                   
    })

    let counter=0
    useEffect(() => {
        counter++;
        // console.log('Event listner created  ',counter)
        window.addEventListener('scroll',scrollHeandle)
        return () => {
            window.removeEventListener('scroll',scrollHeandle)
        }
    }, [])
    

    function scrollHeandle(e)
    {

        const shift=window.scrollY;
        if(shift<466){      // window.scrollY/window.innerHeight when resizing the window height it is better to estimate the difference
        setYShift({
            skyline3:   (  shift  / 1.2   )      ,
            skyline2:   (  shift  / 1.3   )      ,
            skyline1:   (  shift  / 1.6   )      ,
            skyline0:   (  shift  / 1.9   )      ,
            floor:      (  shift  / 3.5   )      ,
            phonebooth: (  shift  / 3.5   )                
        })
        }
    }
        return(
            <section className='Mi_container'>
                <div className='londonfull'>
                    <div className="londonfull__imgcontainer">
                        { london_img_attr.map((element)=>  {
                              return  <img src={element["img"]} 
                                    style={{
                                        // top:`translateY(${YShift[element['attr'].key]}px)`
                                        transform: `translateY(${YShift[element['attr'].key]}px)`
                                        } }
                                    mad={"transform: translateY(" + Math.round(YShift[element['attr'].key]) +"px);"}
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
                                            return  <img src={element["img"]} 
                                                style={{
                                                    // top:`translateY(${YShift[element['attr'].key]}px)`
                                                    transform: `translateY(${YShift[element['attr'].key]}px)`
                                                    } }
                                                mad={"transform: translateY(" + Math.round(YShift[element['attr'].key]) +"px);"}
                                                    {...element['attr']} />
                                            }
                                        )
                                        }
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
export default Mainintro;