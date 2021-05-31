import React, {useState,useRef,useLayoutEffect} from 'react'
import  london_vec  from './media/londonfull/londonfull'
import  myavatar_vec  from './media/myavatar/myavatar'
import Nav from '../nav/Nav'
import { ReactComponent as Wheel} from './media/londonfull/wheel1.svg'
import   skyline3    from "./media/londonfull_wide/skyline3.svg"   
import   skyline2    from "./media/londonfull_wide/skyline2.svg"   
import   skyline1    from "./media/londonfull_wide/skyline1.svg"   
import   skyline0    from "./media/londonfull_wide/skyline0.svg"   
import   floor       from "./media/londonfull_wide/floor.svg"      
import   phonebooth  from "./media/londonfull_wide/phonebooth.svg" 
import   myBase      from './media/londonfull_wide/myBase.svg'

import heel from './media/londonfull/wheel1.svg'

import './Mainintro.scss'
import './myAvatar.scss'
import { electronMassDependencies, nullDependencies } from 'mathjs'

const london_img_attr =london_vec();
const myAvatar_img_attr =myavatar_vec();

function Mainintro(){
    
    // const talkbtnRef = useRef({classList:[]})//LET'S TALK BUTTON ADDING CLASS TO MAKE IT CHANGE CONTENT
    // const titleRef = useRef({classList:[]})
    const talkbtnRef = useRef(null)//LET'S TALK BUTTON ADDING CLASS TO MAKE IT CHANGE CONTENT
    const titleRef = useRef(null)

    // this state to move the button of let's talk from the top to corner
    const [btn_Translate, setBtn_Translate] = useState([0,0,0])

    const [YShift, setYShift] = useState({
        skyline3:       0         ,
        skyline2:       0         ,
        skyline1:       0         ,
        skyline0:       0         ,
        floor:          0         ,
        phonebooth:     0                   
    })

    // THESE VARIABLE ARE TO WAIT FOR FOR THE RESIZE FUNCTIONN TO WAIT 
    // UNTIL THE RESIZI IS FINISHED
    var rtime;
    var timeout = false;
    var delta = 200;


    useLayoutEffect(() => {
        window.addEventListener('scroll',  ()=>{requestAnimationFrame(  scrollHeandle)} )
        window.addEventListener('resize', ()=>{requestAnimationFrame( ()=> {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(handleResize, delta);
            }
        })})

        if(!talkbtnRef.current) talkbtnRef.current = document.getElementById('talkbtn')
        titleRef.current = titleRef.current ||   document.getElementById('mainTitle')
        
        // we calculate the movement of the Let's talk button bellow
        implementResizeAction()

        console.log('Starting')

        return () => {
            window.removeEventListener('scroll',scrollHeandle)
            console.log('terminating')
        }
    }, [])

    let LONDON_scrollStopThreshold = 800;
    let Title_btn_scrollStopThreshold = 200;

    let btnCon_Width = 200;
    let btnCon_Height = 100;
    let classdded=false;

    // handleResize() 
    function handleResize(){
        if (new Date() - rtime < delta) {
            setTimeout(handleResize, delta);
        } else {
            timeout = false;
            implementResizeAction() 
        }}

    function implementResizeAction() {
        console.log('resiezing action has been taken')
        LONDON_scrollStopThreshold = Math.round(window.innerHeight/1.5); 
        Title_btn_scrollStopThreshold  = Math.round(LONDON_scrollStopThreshold/4)
        btnCon_Width = (talkbtnRef.current.offsetWidth - 64) // ??   document.getElementById()
        btnCon_Height = (talkbtnRef.current.offsetHeight - 76)// ??
        const shift=window.scrollY
        if(shift<LONDON_scrollStopThreshold) setBtn_Translate([0,0,0])
        else setBtn_Translate([btnCon_Width,btnCon_Height,0])
    }

    
function scrollHeandle(e){        
        const shift=window.scrollY;
        if(shift<LONDON_scrollStopThreshold){      // window.scrollY/window.innerHeight when resizing the window height it is better to estimate the difference
            setYShift({
            skyline3:   (  shift  / 1.2   )      ,
            skyline2:   (  shift  / 1.3   )      ,
            skyline1:   (  shift  / 1.6   )      ,
            skyline0:   (  shift  / 1.9   )      ,
            floor:      (  shift  / 3.5   )      ,
            phonebooth: (  shift  / 3.5   ) })
            shift<Title_btn_scrollStopThreshold ? chekclass_REMOVE() : chekclass_ADD()
        }else{
            // the if below is for the Nav which include vanish text by adding foggyVanish class
            // and changing the button shape by adding navGrid_BtnCon-sp1 class
            // also moving the button by changing the setBtn_Translate state 
            chekclass_ADD()}}

function chekclass_ADD(){
    if(!classdded) {talkbtnRef?.current?.classList?.add("navGrid_BtnCon-sp1");
    setBtn_Translate([btnCon_Width,btnCon_Height,0])
    titleRef?.current?.classList?.add("foggyVanish");
    classdded=true}
}
function chekclass_REMOVE(){
    if(classdded) {
        talkbtnRef?.current?.classList?.remove("navGrid_BtnCon-sp1");
                    setBtn_Translate([0,0,0])
                    titleRef?.current?.classList?.remove("foggyVanish");
                    classdded=false}
}
  

        return(
            <>
            <Nav talkbtn={talkbtnRef} title={titleRef} translate={btn_Translate} ></Nav>
            <section className='Mi_container'>
                <div className='londonfull'>
                    <div className="londonfull__imgcontainer">
                      <img src={skyline3} 
            className='london-wheel-svg londonfull__svg' 
            style={{transform: `translate3d(0,${YShift["skyline3"]}px,0)`
            } } />
                    <img src={skyline2} 
            className='london-wheel-svg londonfull__svg' 
            style={{ transform: `translate3d(0,${YShift["skyline2"]}px,0)`
            } } />
             <img src={skyline1} 
            className='london-wheel-svg londonfull__svg' 
            style={{ transform: `translate3d(0,${YShift["skyline1"]}px,0)`
            } } />
            <Wheel 
            className='london-wheel-svg londonfull__svg' 
            style={{ transform: `translate3d(0,${YShift["skyline1"]}px,0)`
            } } >
            </Wheel>
                <img src={skyline0} 
            className='london-wheel-svg londonfull__svg' 
            style={{
                transform: `translate3d(0,${YShift["skyline0"]}px,0)`
            } } />
                                  <img src={floor}
            className='london-wheel-svg londonfull__svg' 
            style={{
                transform: `translate3d(0,${YShift["floor"]}px,0)`
            } } />
              <img src={phonebooth}
            className='london-wheel-svg londonfull__svg' 
            style={{
                transform: `translate3d(0,${YShift["phonebooth"]}px,0)`
            } } />
                <img src={myBase}
                className='london-wheel-svg londonfull__svg'/> 
                        <div className='night'></div>
                        <div className='myAvatarStrip'>    

                                <div className='myAvatarStrip_spacer-right'>
                                </div>
                               <div className='myAvatarStrip_Ava'>
                                <div className='vertical_spacer'></div>
                                <div className='myAvatarContainer'>
                                    { myAvatar_img_attr.map((element)=>  {
                                         return   <img src={element["img"]} alt={element['attr'].key}
                                         key={element['attr'].key}
                                                    {...element['attr']} ></img>
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

