import React, {useState,useRef,useLayoutEffect,useEffect} from 'react'
import  myavatar_vec  from './assets/myavatar/myavatar'
import Nav from '../../layout/nav/Nav'
import { ReactComponent as Wheel} from './assets/londonfull_wide/wheel1.svg'
import   skyline3    from "./assets/londonfull_wide/skyline3.svg"   
import   skyline2    from "./assets/londonfull_wide/skyline2.svg"   
import   skyline1    from "./assets/londonfull_wide/skyline1.svg"   
import   skyline0    from "./assets/londonfull_wide/skyline0.svg"   
import   floor       from "./assets/londonfull_wide/floor.svg"      
import   bushes       from "./assets/londonfull_wide/bushes.svg"      
import   phonebooth  from "./assets/londonfull_wide/phonebooth.svg" 
import   myBase      from './assets/londonfull_wide/myBase.svg'
import './HeroSection.scss'
import './myAvatar.scss'
import './nightMoon.scss'
import Parallax from '../parallaxHook/Parallax'

import Arrow from '../arrow/Arrow'


const myAvatar_img_attr =myavatar_vec();

function HeroSection(){
    
    // const talkbtnConRef = useRef({classList:[]})//LET'S TALK BUTTON ADDING CLASS TO MAKE IT CHANGE CONTENT
    const talkbtnConRef = useRef(null)//LET'S TALK BUTTON ADDING CLASS TO MAKE IT CHANGE CONTENT
    const titleRef = useRef(null)
    // const tlkbtnRef = useRef(null)
    let LONDON_scrollStopThreshold = 800;
    let Title_btn_scrollStopThreshold = 200;

    let btnCon_Width = 200;
    let btnCon_Height = 100;
    let classdded=false;
    // this state to move the button of let's talk from the top to corner
    const btn_Translate = [0,0,0]
    // console.log('Starting')

    // // // // // // // // // // // // // // // // // // // // // // // // // for the night
    const [addClass_nightBackground, setAddClass_nightBackground] = useState(false);
    useEffect(() => {
        const interval = setInterval(() => {
            setAddClass_nightBackground(addClass_nightBackground => !addClass_nightBackground);
    }, 10000);
        return () => clearInterval(interval); // Cleanup the interval
      }, []); 

  // Change 5000 to whatever delay you need (in milliseconds)
    
      // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // // 

    
    // THESE VARIABLE ARE TO WAIT FOR FOR THE RESIZE FUNCTIONN TO WAIT 
    // UNTIL THE RESIZI IS FINISHED
    var rtime;
    var timeout = false;
    var delta = 200;

    const openBreif =()=>{document.getElementById('Brief').classList.add('Brief-show')
    document.getElementById('brief_parag').focus()
    document.body.style.overflow = 'hidden';
}


    useLayoutEffect(() => {
        scrollHeandle()
        window.addEventListener('resize', ()=>{requestAnimationFrame( ()=> {
            rtime = new Date();
            if (timeout === false) {
                timeout = true;
                setTimeout(handleResize, delta);
            }
        })})

        if(!talkbtnConRef.current) talkbtnConRef.current = document.getElementById('talkbtnCon')
        titleRef.current = titleRef.current ||   document.getElementById('mainTitle')
        // we calculate the movement of the Let's talk button bellow
        implementResizeAction()

        // console.log('Starting')

        return () => {
            window.removeEventListener('scroll',scrollHeandle)
        }
    }, [])

    function handleResize(){
        if (new Date() - rtime < delta) {
            setTimeout(handleResize, delta);
        } else {
            timeout = false;
            implementResizeAction() 
        }}
    
    let CSS_moveBTN=''

    function implementResizeAction() {

        console.log('%cresiezing action has been %ctaken','color: red; font-weight:bold;font-size:22px;','color :green')
        LONDON_scrollStopThreshold = Math.round(window.innerHeight/1.5); 
        Title_btn_scrollStopThreshold  = Math.round(LONDON_scrollStopThreshold/4)
        btnCon_Width = talkbtnConRef.current?.offsetWidth ? (talkbtnConRef.current.offsetWidth - 64) :  btnCon_Width
        btnCon_Height = talkbtnConRef.current?.offsetHeight ? (talkbtnConRef.current.offsetHeight - 76) : btnCon_Height
        const shift=window.scrollY
        console.log(classdded,shift,Title_btn_scrollStopThreshold )
        if(shift>=Title_btn_scrollStopThreshold && classdded){
            // console.log('MOVEEE')
            document.getElementById('tlkbtn').style=`transform: translate3d(${btnCon_Width}px,${btnCon_Height}px,0);`
        }}

    
function scrollHeandle(e){   
        requestAnimationFrame(  scrollHeandle)     
        const shift=window.scrollY;
        if(shift<LONDON_scrollStopThreshold){      // window.scrollY/window.innerHeight when resizing the window height it is better to estimate the difference
            
            shift<Title_btn_scrollStopThreshold ? chekclass_REMOVE() : chekclass_ADD()
        }else{
            // the if below is for the Nav which include vanish text by adding foggyVanish class
            // and changing the button shape by adding navGrid_BtnCon-sp1 class
            // also moving the button by changing the setBtn_Translate state 
            chekclass_ADD()}}

function chekclass_ADD(){ // IS DOWN 
    if(!classdded) {talkbtnConRef?.current?.classList?.add("navGrid_BtnCon-sp1");
    document.getElementById('tlkbtn').style=`transform: translate3d(${btnCon_Width}px,${btnCon_Height}px,0);`
    titleRef?.current?.classList?.add("foggyVanish");
    classdded=true}
}
function chekclass_REMOVE(){
    if(classdded) {  // IS UP 
        talkbtnConRef?.current?.classList?.remove("navGrid_BtnCon-sp1");
        document.getElementById('tlkbtn').style=`transform: translate3d(0,0,0);`
        titleRef?.current?.classList?.remove("foggyVanish");
        classdded=false}
}
        return(
            <>
                
                <Nav talkbtnCon={talkbtnConRef} title={titleRef} translate={btn_Translate}></Nav>
            <section className='heroSection '>

                <div className='sky'>
                        {/* <div className="sky__phase sky__dawn"></div> */}
                        {/* <div className="sky__phase sky__noon"></div> */}
                        <div className={'sky_phase' + (addClass_nightBackground ? ' sky_morning' : '  sky_dusk_remove')}></div>
                       <div className={'sky_phase' + (addClass_nightBackground ? ' sky_dusk' : '  sky_dusk_remove')}></div>
                        {/* <div className="sky__phase sky__midnight"></div> */}
                        <Parallax className='skyParallax' speed={ 1.3}> <div className="moon "></div></Parallax>
                </div>
                <div className={'londonfull' + (addClass_nightBackground ? '  night' : '')}>
                {/* <div className={'night' + (addClass_nightBackground ? '  night_show' : 'night_hide')}></div> */}
                    <div className="londonfull__imgcontainer">
                        <Parallax className='ParallexContainer' speed={ 0.9 }><img  alt='skyline3' className='londonfull__svg'  src={skyline3}  /></Parallax>
                        <Parallax className='ParallexContainer' speed={ 0.8 }><img  alt='skyline2' className='londonfull__svg'  src={skyline2}  /></Parallax>
                        <Parallax className='ParallexContainer' speed={ 0.65 }><img  alt='skyline1' className='londonfull__svg'  src={skyline1}  /></Parallax>
                        <Parallax className='ParallexContainer' speed={ 0.756 }>
                        <Wheel className='div_wheelcontainer londonfull__svg' alt="London Eye Representation"  ></Wheel>
                        </Parallax>
                        <Parallax className='ParallexContainer' speed={ 0.6 }><img   alt='skyline0' className='londonfull__svg'  src={skyline0}  /></Parallax>
                        <Parallax className='ParallexContainer' speed={ 0.476 }>
                            <img  alt='bushes' className='londonfull__svg'  src={bushes}  />
                            <img  alt='floor' className='londonfull__svg'  src={floor}  />
                            <img  alt='phonebooth' className='londonfull__svg'  src={phonebooth}  />
                            <img  alt='myBase' className='londonfull__svg'  src={myBase}  />
                        </Parallax>
                            <div className='myAvatarStrip'>    
                                <div className='myAvatarStrip_spacer-right'></div>
                                <div className='myAvatarStrip_Ava'>
                                    <div className='vertical_spacer'></div>
                                    <Parallax className='myAvatarContainerAvatar' speed={ 0.556 }>
                                        <div onClick={openBreif} className='myAvatarContainer' >
                                            {myAvatar_img_attr.map((element) => {
                                                // Assuming you'll provide a descriptive name for each attribute in your avatar elements
                                                return <img   src={element["img"]} alt={`Avatar detail: ${element['attr'].altDescription}`} key={element['attr'].key} {...element['attr']} />;
                                            })}
                                    </div>
                        </Parallax>

                            </div>
                            <div id='targetAncher' className='myAvatarStrip_spacer-left'></div>
                        </div>
                    </div>
                    {/* <Parallax speed={ 0.556 } ><div className={'night' + (addClass_nightBackground ? '  night_show' : 'night_hide')}></div></Parallax> */}
                    {/* <div className={ 'night'}></div> */}

                </div>

            </section>
            <Arrow></Arrow>
        </>
        );


    

}
export default HeroSection;

